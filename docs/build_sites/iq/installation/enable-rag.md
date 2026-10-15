# Enabling cross-session memory (RAG)

This topic describes how to enable and configure cross-session memory for IQ. When cross-session memory is enabled, IQ stores semantic chunks of past conversations in a vector database and retrieves relevant context at query time, injecting it into the system prompt so the model can reference information from previous sessions.

!!! note "Version availability"
    Cross-session memory (RAG) support was introduced in IQ CF239 and later versions.

Cross-session memory is powered by Retrieval-Augmented Generation (RAG) and uses pgvector, a PostgreSQL extension, as the vector store. The same PostgreSQL database used for IQ session persistence stores the RAG chunks alongside your other IQ data.

## Prerequisites

Before enabling cross-session memory, verify that the following conditions are met:

- A PostgreSQL database is configured and connected to IQ, and `DB_ENABLED` is set to `true`. For setup instructions, refer to [Preparing the database](prepare-database.md). If you are using an internal database provisioned by the DX Persistence Node or DX Runtime Controller, the `pgvector` extension is included by default. If you are using an external PostgreSQL database (cloud-managed, on-premises, or separate cluster), the `pgvector` extension must be explicitly enabled in your database.
- Your LiteLLM proxy has the embedding model aliases registered. IQ calls one of two fixed aliases, `iq-multilingual-embed` or `iq-embed`, depending on the value of `USE_MULTILINGUAL_EMBEDDINGS`. For instructions, refer to [Registering embedding models for cross-session memory](deploy-litellm.md#registering-embedding-models-for-cross-session-memory).
- The value of `EMBEDDING_DIMENSIONS` matches the output dimension of the registered embedding model.

!!! warning "Embedding model compatibility"
    IQ has been extensively tested and validated with Cohere v4 for the `iq-multilingual-embed` model. While alternative embedding models may work, compatibility is not guaranteed due to the rapidly evolving nature of AI model releases.
    
    If you choose to use alternative embedding models:
    - Ensure the model output dimension is set correctly in both LiteLLM and the `EMBEDDING_DIMENSIONS` environment variable
    - Thoroughly test embedding quality and retrieval relevance before production use
    
    If the `EMBEDDING_DIMENSIONS` value no longer matches the embedding model's output dimension after initial startup, IQ detects the mismatch and enters graceful degradation mode, disabling cross-session memory while continuing to serve requests. To apply changes, recreate the RAG tables. Refer to [Changing RAG and embedding configuration](#changing-rag-and-embedding-configuration).

!!! warning "pgvector extension availability"
    Cross-session memory requires the `pgvector` PostgreSQL extension. For internal databases provisioned by DX Persistence Node or DX Runtime Controller, `pgvector` is included by default. For external PostgreSQL databases, you must explicitly enable the extension:
    
    ```sql
    CREATE EXTENSION IF NOT EXISTS vector;
    ```
    
    If the extension is not available, IQ startup will fail with an error about missing `pgvector` schema. Contact your database administrator to install the `pgvector` extension on your PostgreSQL instance. The `pgvector` package is available from the [PostgreSQL Global Development Group (PGDG) repository](https://yum.postgresql.org/){target="_blank"}.

## Enabling cross-session memory

To enable cross-session memory, add the following variables to your `custom-iq-values.yaml` file and upgrade the IQ Helm release.

!!! important
    Add all RAG variables to the same `custom-iq-values.yaml` file used for your IQ deployment. Because all RAG configuration is injected through `environment.pod.integrator`, a `helm upgrade` run without `-f custom-iq-values.yaml` resets these variables to their defaults and silently disables cross-session memory.

```yaml
environment:
  pod:
    integrator:
      - name: RAG_ENABLED
        value: "true"
```

Then upgrade the IQ Helm release:

```bash
helm upgrade <IQ_RELEASE_NAME> \
  https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<IQ_HELM_CHART_VERSION>.tgz \
  --namespace <IQ_NAMESPACE> \
  -f custom-iq-values.yaml
```

- `<IQ_RELEASE_NAME>`: The IQ Helm release name (for example, `dx-iq`).
- `<IQ_NAMESPACE>`: The namespace where IQ is deployed.
- `<YOUR_REPOSITORY_FQDN_AND_PATH>`: The repository fully qualified domain name (FQDN) and path.
- `<IQ_HELM_CHART_VERSION>`: The IQ Helm chart version.

On startup, IQ automatically creates the `rag_chunks` and `rag_embedding_metadata` tables in your existing IQ database if they do not already exist. No manual schema migration is required.

## Configuring the embedding model

IQ selects which LiteLLM proxy alias to call based on the `USE_MULTILINGUAL_EMBEDDINGS` setting.

| Setting | Default | Effect |
|---|---|---|
| `USE_MULTILINGUAL_EMBEDDINGS=true` | Default | Uses `iq-multilingual-embed` via LiteLLM |
| `USE_MULTILINGUAL_EMBEDDINGS=false` | — | Uses `iq-embed` via LiteLLM |

Set `EMBEDDING_DIMENSIONS` to match the vector dimension of your registered embedding model:

```yaml
environment:
  pod:
    integrator:
      - name: EMBEDDING_DIMENSIONS
        value: "1024"
```

## Configuring chunking behavior

IQ splits conversation messages into overlapping text chunks before embedding them. The chunking parameters determine chunk boundaries and therefore the shape of the vectors stored in the database.

!!! warning "RAG and embedding parameters are locked after first startup"
    IQ records the RAG and embedding configuration in the database at first startup. Changing any of the following parameters requires recreating the RAG tables and restarting the pod:
    
    - Chunking: `RAG_CHUNK_SIZE`, `RAG_CHUNK_OVERLAP`, `RAG_CHUNK_SEPARATORS`
    - Vector database: `VECTOR_DB_BACKEND`, `EMBEDDING_DIMENSIONS`
    - Embedding model: `USE_MULTILINGUAL_EMBEDDINGS`
    
    If you change any of these values, IQ detects the mismatch on the next restart and enters graceful degradation mode, disabling RAG while the pod continues to serve requests. To apply new values, you must recreate the RAG tables. Refer to [Changing RAG and embedding configuration](#changing-rag-and-embedding-configuration).

| Parameter | Default | Description |
|---|---|---|
| `RAG_CHUNK_SIZE` | `512` | Maximum number of characters per chunk. |
| `RAG_CHUNK_OVERLAP` | `50` | Number of characters that adjacent chunks share, preserving context across chunk boundaries. |
| `RAG_CHUNK_SEPARATORS` | `["\n\n","\n",". ","? ","! "," ",""]` | JSON array of separator strings. The chunker tries each separator in order, from coarsest to finest, to produce chunks within `RAG_CHUNK_SIZE`. |

To customize chunking, add these variables under `environment.pod.integrator` in your values file:

```yaml
environment:
  pod:
    integrator:
      - name: RAG_CHUNK_SIZE
        value: "512"
      - name: RAG_CHUNK_OVERLAP
        value: "50"
      - name: RAG_CHUNK_SEPARATORS
        value: '["\n\n","\n",". ","? ","! "," ",""]'
```

## Tuning retrieval

The following parameters control how many chunks are retrieved and which similarity threshold filters out irrelevant results. You can adjust these without restarting the pod using the dynamic configuration file.

| Parameter | Default | Description |
|---|---|---|
| `RAG_TOP_K` | `5` | Number of most-similar chunks returned per query. |
| `RAG_MIN_SIMILARITY` | `0` | Minimum cosine similarity score (0–1) a chunk must reach to be included in the results. Set a value such as `0.6` to filter out low-relevance chunks. |

## Changing locked RAG and embedding configuration

Some RAG parameters are **locked after initial startup** and require table recreation if changed. Other retrieval parameters can be updated immediately without any pod restart.

### Locked parameters (require table recreation)

The following parameters determine data structure and vector compatibility. Changing them requires dropping and recreating RAG tables:

- `RAG_CHUNK_SIZE`
- `RAG_CHUNK_OVERLAP`
- `RAG_CHUNK_SEPARATORS`
- `EMBEDDING_DIMENSIONS`
- `USE_MULTILINGUAL_EMBEDDINGS`

To change locked parameters in an active deployment, existing stored data is incompatible with the new configuration. Drop the RAG tables and upgrade the Helm release.

!!! warning
    Dropping RAG tables permanently deletes cross-session memory for all users. IQ recreates the tables when the pod restarts, but historical context is lost. Before changing RAG configuration in a production deployment, take a full IQ database backup. A backup provides a recovery point to revert configuration or troubleshoot issues. For more information, refer to [Backing up and restoring data](backup-restore.md).

1. Connect to your IQ PostgreSQL database.

2. Drop the RAG tables:

    ```sql
    DROP TABLE IF EXISTS rag_chunks;
    DROP TABLE IF EXISTS rag_embedding_metadata;
    ```

3. Update your `custom-iq-values.yaml` file with the new parameter values.

4. Upgrade the IQ Helm release to apply the new values:

    ```bash
    helm upgrade <IQ_RELEASE_NAME> \
      https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<IQ_HELM_CHART_VERSION>.tgz \
      --namespace <IQ_NAMESPACE> \
      -f custom-iq-values.yaml
    ```

    IQ automatically recreates the RAG tables on pod startup with the new configuration.

### Hot-tuning retrieval parameters

For `RAG_TOP_K` and `RAG_MIN_SIMILARITY`, use `kubectl set env` instead of helm upgrade. The pod will roll, but no table recreation is required:

```bash
kubectl set env deployment/<IQ_DEPLOYMENT_NAME> \
  RAG_TOP_K=8 \
  RAG_MIN_SIMILARITY=0.5 \
  -n <IQ_NAMESPACE>
```

The new retrieval settings take effect immediately after the pod restarts, without any data loss.

## Managing stored data

IQ does not automatically delete RAG chunks. You are responsible for scheduling and running SQL cleanup against your database.

### Checking table size

Run the following query to monitor how much storage the `rag_chunks` table is using:

```sql
SELECT
  COUNT(*) AS total_chunks,
  pg_size_pretty(pg_total_relation_size('rag_chunks')) AS table_size;
```

### Deleting chunks older than a retention period

Run the following query to delete chunks older than your chosen retention window. Adjust the interval to match your retention policy:

```sql
-- Delete all chunks older than 90 days
DELETE FROM rag_chunks
WHERE "createdAt" < NOW() - INTERVAL '90 days';
```

Schedule this query as a recurring job using your database management tooling (for example, pg_cron, a Kubernetes CronJob, or your cloud provider's scheduled query feature).

### Deleting chunks for a specific user (GDPR erasure)

Run the following query to remove all stored context for a single user. Use this to fulfill a right-to-erasure request:

```sql
DELETE FROM rag_chunks
WHERE "userId" = '<USER_ID>';
```

- `<USER_ID>`: The IQ user identifier for the user whose data you are erasing.

!!! tip "Audit logging for compliance"
    For GDPR and data governance compliance, ensure that your organization maintains audit logs of all data deletion operations. Most database management systems and cloud providers support query auditing. Consider enabling database audit logging to track who executed deletion queries, when they were executed, and what data was affected. Refer to your database provider's documentation for audit logging configuration.

### Deleting chunks for a specific session

Run the following query to remove all stored context for a single conversation session:

```sql
DELETE FROM rag_chunks
WHERE "sessionId" = '<SESSION_ID>';
```

- `<SESSION_ID>`: The IQ session identifier.

???+ info "Related information"
    - [Deploying LiteLLM](deploy-litellm.md)
    - [IQ environment variables](environment-variables.md)
    - [Preparing the database](prepare-database.md)
    - [Deploying IQ services](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_deploy_iq_services.md)
    - [Troubleshooting cross-session memory (RAG)](../troubleshooting.md#cross-session-memory-rag)
