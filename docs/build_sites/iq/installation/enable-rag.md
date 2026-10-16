# Configuring cross-session memory

This topic describes how to enable and configure cross-session memory for IQ. Enabling this feature allows IQ to store semantic chunks of past conversations in a vector database. When processing a query, IQ retrieves relevant context from the database and injects it into the system prompt so the model can reference information from previous sessions.

Cross-session memory is powered by Retrieval-Augmented Generation (RAG) and uses `pgvector`, a PostgreSQL extension, for vector storage. The PostgreSQL database used for IQ session persistence stores RAG chunks alongside your IQ data.

## Prerequisites

Before enabling cross-session memory, verify that the following conditions are met:

- Before enabling cross-session memory, verify that a PostgreSQL database is configured and connected to IQ, and `DB_ENABLED` is set to `true`. For setup instructions, refer to [Preparing the database](prepare-database.md). Internal databases provisioned by HCL DX Persistence Node or HCL DX Runtime Controller include the `pgvector` extension by default. For external PostgreSQL databases (cloud-managed, on-premises, or separate cluster), explicitly enable `pgvector`:

    ```sql
    CREATE EXTENSION IF NOT EXISTS vector;
    ```

    If the extension is unavailable, IQ startup fails with a missing schema error. Contact your database administrator to install `pgvector` from the [PostgreSQL Global Development Group (PGDG) repository](https://yum.postgresql.org/){target="_blank"}.

- Your LiteLLM proxy has the embedding model aliases registered. IQ calls one of two fixed aliases, `iq-multilingual-embed` or `iq-embed`, depending on the value of `USE_MULTILINGUAL_EMBEDDINGS`. For instructions, refer to [Registering embedding models for cross-session memory](deploy-litellm.md#registering-embedding-models-for-cross-session-memory).
- The value of `EMBEDDING_DIMENSIONS` matches the output dimension of the registered embedding model.

## Configuring parameters

Define the configuration variables for cross-session memory in your deployment settings. If you encounter issues while setting these parameters, refer to [Troubleshooting - Cross-session memory](../troubleshooting.md#cross-session-memory).

### Enabling cross-session memory

To enable cross-session memory, add the RAG variables to the `integrator` section of your `custom-iq-values.yaml` file:

```yaml
environment:
  pod:
    integrator:
      - name: RAG_ENABLED
        value: "true"
```

### Configuring the embedding model

IQ selects which LiteLLM proxy alias to call based on the `USE_MULTILINGUAL_EMBEDDINGS` setting.

- Set to `true` (default) to call `iq-multilingual-embed` through LiteLLM.
- Set to `false` to call `iq-embed` through LiteLLM.

For more information on these aliases, refer to [Registering embedding models for cross-session memory](deploy-litellm.md#registering-embedding-models-for-cross-session-memory).

To set the vector dimension required by your selected embedding model, add `EMBEDDING_DIMENSIONS` under the `environment.pod.integrator` section of your `custom-iq-values.yaml` file:

```yaml
environment:
  pod:
    integrator:
      - name: EMBEDDING_DIMENSIONS
        value: "1024"
```

!!! warning "Embedding and vector database parameters are locked after initial startup"
    Changing `EMBEDDING_DIMENSIONS` or `USE_MULTILINGUAL_EMBEDDINGS` after initial startup causes IQ to enter graceful degradation mode and disable cross-session memory while continuing to serve requests. To apply new values, recreate the RAG tables and restart the pod. For instructions, refer to [Changing RAG and embedding configuration](#changing-rag-and-embedding-configuration).

#### Embedding model compatibility

IQ is tested and validated with Cohere v4 for the `iq-multilingual-embed` model. Alternative embedding models might work, but compatibility is not guaranteed.

If you choose to use alternative embedding models:

- Set the model output dimension correctly in both LiteLLM and the `EMBEDDING_DIMENSIONS` environment variable.
- Test embedding quality and retrieval relevance thoroughly before production use.

### Configuring chunking behavior

IQ splits conversation messages into overlapping text chunks before embedding them. The chunking parameters determine chunk boundaries, which controls how many vector entries are created and indexed in the database.

!!! warning "Chunking parameters are locked after initial startup"
    Changing `RAG_CHUNK_SIZE`, `RAG_CHUNK_OVERLAP`, or `RAG_CHUNK_SEPARATORS` after initial startup causes IQ to enter graceful degradation mode and disable cross-session memory while continuing to serve requests. To apply new values, recreate the RAG tables and restart the pod. For instructions, refer to [Changing RAG and embedding configuration](#changing-rag-and-embedding-configuration).

To customize chunking, add these variables under the `environment.pod.integrator` section of your `custom-iq-values.yaml` file:

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

| Parameter | Default | Description |
| --------- | ------- | ----------- |
| `RAG_CHUNK_SIZE` | `512` | The maximum number of characters per chunk. |
| `RAG_CHUNK_OVERLAP` | `50` | The number of characters that adjacent chunks share, preserving context across chunk boundaries. |
| `RAG_CHUNK_SEPARATORS` | `["\n\n","\n",". ","? ","! "," ",""]` | A JSON array of separator strings. The chunking algorithm tests each separator in order, from coarsest to finest, to split text into segments within the `RAG_CHUNK_SIZE`. |

### Tuning retrieval parameters

The following parameters control how many chunks are retrieved and which similarity threshold filters out irrelevant results. Updating these parameters requires running `helm upgrade` to restart the pod, but does not require recreating RAG tables or dropping stored data.

| Parameter | Default | Description |
| --------- | ------- | ----------- |
| `RAG_TOP_K` | `5` | Number of most-similar chunks returned per query. |
| `RAG_MIN_SIMILARITY` | `0` | Minimum cosine similarity score (0–1) a chunk must reach to be included in the results. Set a value such as `0.6` to filter out low-relevance chunks. |

For example, setting `RAG_TOP_K` to `8` and `RAG_MIN_SIMILARITY` to `0.7` retrieves up to eight context chunks per query while discarding any chunk with a cosine similarity score lower than `0.7`.

To tune retrieval parameters, add these variables under the `environment.pod.integrator` section of your `custom-iq-values.yaml` file:

```yaml
environment:
  pod:
    integrator:
      - name: RAG_TOP_K
        value: "8"
      - name: RAG_MIN_SIMILARITY
        value: "0.7"
```

## Applying the configuration

To apply your parameter settings and enable cross-session memory, upgrade the IQ Helm release:

!!! important
    Include all RAG variables in the same `custom-iq-values.yaml` file used for your IQ deployment. Because all RAG configuration is injected through `environment.pod.integrator`, a `helm upgrade` run without `-f custom-iq-values.yaml` resets these variables to their defaults and silently disables cross-session memory.

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

On startup, IQ creates the `rag_chunks` and `rag_embedding_metadata` tables in the existing IQ database if they do not exist. Manual schema migration is not required.

## Changing RAG and embedding configuration

If you change locked RAG or embedding parameters in an active deployment, existing stored data is incompatible with the new configuration. To apply the changes, drop the RAG tables and restart the pod.

!!! warning
    Dropping RAG tables permanently deletes cross-session memory for all users. IQ recreates the tables when the pod restarts, but historical context is lost. Before changing the RAG configuration in a production deployment, take a full IQ database backup. A backup provides a recovery point to revert configuration or troubleshoot issues. For more information, refer to [Backing up and restoring data](backup-restore.md).

1. Connect to your IQ PostgreSQL database.
2. Drop the RAG tables:

    ```sql
    DROP TABLE IF EXISTS rag_chunks;
    DROP TABLE IF EXISTS rag_embedding_metadata;
    ```

3. Update your `custom-iq-values.yaml` file with the new parameter values.
4. Restart the IQ Integrator pod. IQ automatically recreates the tables on startup with the new configuration.

## Managing stored data

IQ does not automatically delete RAG chunks. You must schedule and run SQL cleanup on your database.

### Checking table size

To monitor how much storage the `rag_chunks` table is using:

```sql
SELECT
  COUNT(*) AS total_chunks,
  pg_size_pretty(pg_total_relation_size('rag_chunks')) AS table_size;
```

### Deleting chunks older than a retention period

To delete chunks older than your chosen retention window:

```sql
-- Delete all chunks older than 90 days
DELETE FROM rag_chunks
WHERE "createdAt" < NOW() - INTERVAL '90 days';
```

- Adjust the `INTERVAL` to match your retention policy.
- Schedule this query as a recurring job using your database management tooling (for example, `pg_cron`, a Kubernetes CronJob, or your cloud provider's scheduled query feature).

### Deleting chunks for a specific user

To remove all stored context for a single user and fulfill a right-to-erasure request:

```sql
DELETE FROM rag_chunks
WHERE "userId" = '<USER_ID>';
```

`<USER_ID>`: The IQ user identifier for the user whose data you are erasing.

!!! tip "Audit logging for compliance"
    For GDPR and data governance compliance, ensure that your organization maintains audit logs of all data deletion operations. Most database management systems and cloud providers support query auditing. Consider enabling database audit logging to track who executed deletion queries, when they were executed, and what data was affected. Refer to your database provider's documentation for audit logging configuration.

### Deleting chunks for a specific session

To remove all stored context for a single conversation session:

```sql
DELETE FROM rag_chunks
WHERE "sessionId" = '<SESSION_ID>';
```

`<SESSION_ID>`: The IQ session identifier.

## Next steps

After configuring cross-session memory:

1. [Validate the deployment](validation.md) to verify that services are operational.
2. Set up [database backups](backup-restore.md) to protect stored context.
3. Review [IQ environment variables](environment-variables.md) to configure optional settings.

???+ info "Related information"
    - [Deploying LiteLLM](deploy-litellm.md)
    - [IQ environment variables](environment-variables.md)
    - [Preparing the database](prepare-database.md)
    - [Deploying IQ services](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_deploy_iq_services.md)
    - [Troubleshooting cross-session memory (RAG)](../troubleshooting.md#cross-session-memory)
