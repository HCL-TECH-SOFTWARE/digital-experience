# Deploying and Managing HCL DX IQ Backend Server

This topic explains how to deploy and manage the HCL DX IQ backend server (`hcl-dx-iq` Helm chart) alongside your HCL Digital Experience (DX) deployment.

## Introduction

HCL DX IQ is a core communication and data management layer (referred to as the "Integrator") that orchestrates the flow of information between the UI, Large Language Models (LLMs), and user sessions. The IQ backend server provides the following capabilities:

- Establishing and managing real-time communication channels via WebSocket connections
- Preserving and managing conversation state ("memory") for each user session
- Overseeing and standardizing interactions with Large Language Models
- Integrating with Model Context Protocol (MCP) servers for enhanced AI capabilities
- Ensuring robust, scalable, and seamless user experiences

> **NOTE:** This document covers the backend server deployment. For information about the IQ UI components and chatbot features, refer to the [HCL Doc IQ chatbot documentation](../../../../../../get_started/product_overview/doc_iq_chatbot.md).

## Prerequisites

Before deploying the IQ backend server, ensure the following prerequisites are met:

1. **DX Core Component Baseline**

    > **FIXME / PLACEHOLDER:** Starting with CF [X] - *Specify the minimum Core Component Baseline version required for IQ.*

2. **Kubernetes Deployment**
   
    Your HCL DX deployment must be running in Kubernetes using Helm charts.

3. **Required Components**

    - DX Core deployment must be operational
    - Access to the HCL Artifactory repository containing the `hcl-dx-iq` Helm chart
    - Valid Kubernetes namespace with appropriate permissions

4. **Credentials and Secrets**

    - LITELLM API key for LLM integration (if using LiteLLM)
    - Database credentials (for external or RTC-managed database)

5. **Related Documentation**

    > **FIXME / PLACEHOLDER:** [MCP Server Documentation](#) - *Add link to MCP Server documentation when available.*

    > **FIXME / PLACEHOLDER:** [IQ UI Documentation](#) - *Add link to IQ UI documentation when available.*

## Limitations

Be aware of the following limitations when deploying and using the IQ backend server:

### Service Scope

- IQ backend server is designed specifically for WebSocket-based AI integration and session management
- The service manages only conversation state and AI communication orchestration
- It does not replace or modify existing DX Core functionality

### AI Model Limitations

- **Training Data Cutoff:** The AI model is strictly limited by its training data cutoff date regarding existing HCL DX architecture
- The model's knowledge of HCL DX features, APIs, and configuration is based on documentation available at the time of its training
- For information about features released after the model's training date, users should consult the official HCL DX documentation
- The model may not be aware of recent changes, new features, or updated best practices

### Database Requirements

- PostgreSQL database is required for session persistence
- Database can be either RTC-managed or externally hosted
- Database name for Runtime Controller (RTC)-managed deployments is fixed as `iqdb` and cannot be customized

### MCP Server Integration

- MCP servers must be accessible from the IQ backend pods
- At least one of WCM or DAM integration should be enabled for MCP functionality
- MCP standalone mode is configurable but may affect integration capabilities

## Preparation Steps

### Step 1: Configure `values.yaml` for Persistence

The IQ backend server requires a PostgreSQL database for session persistence. You can configure this using either an external database or a Runtime Controller (RTC)-managed database.

#### Scenario A: Using an External (Non-RTC) Database

If you have an existing PostgreSQL database outside of the DX deployment, configure the following values:

1. **Create a Kubernetes secret for database credentials:**

    ```bash
    kubectl create secret generic custom-iq-db-credentials \
      --namespace <YOUR_NAMESPACE> \
      --from-literal=username=<DB_USERNAME> \
      --from-literal=password=<DB_PASSWORD>
    ```

    Replace:
    - `<YOUR_NAMESPACE>` with your Kubernetes namespace
    - `<DB_USERNAME>` with your database username
    - `<DB_PASSWORD>` with your database password

2. **Verify the secret was created:**

    ```bash
    kubectl get secret custom-iq-db-credentials -n <YOUR_NAMESPACE>
    kubectl describe secret custom-iq-db-credentials -n <YOUR_NAMESPACE>
    ```

3. **Prepare your `custom-iq-values.yaml` with database configuration:**

    ```yaml
    configuration:
      database:
        enabled: true
        dbHost: "your-postgres-server.example.com"
        dbPort: 5432
        dbName: "iqdb"
        dbCustomSecret: "custom-iq-db-credentials"
    ```

#### Scenario B: Using a Runtime Controller (RTC)-Managed Database

The Runtime Controller can automatically provision and manage a PostgreSQL database for IQ within your DX deployment.

1. **Create the IQ database credentials secret:**

    ```bash
    kubectl create secret generic custom-credentials-iq-db \
      --namespace <YOUR_NAMESPACE> \
      --from-literal=username=dx_iq_db_user \
      --from-literal=password=<SECURE_PASSWORD>
    ```

    Replace:
    - `<YOUR_NAMESPACE>` with your Kubernetes namespace
    - `<SECURE_PASSWORD>` with a secure password of your choice

2. **Verify the secret was created:**

    ```bash
    kubectl get secret custom-credentials-iq-db -n <YOUR_NAMESPACE>
    kubectl describe secret custom-credentials-iq-db -n <YOUR_NAMESPACE>
    ```

3. **Upgrade your DX deployment to enable RTC database management for IQ:**

    Get your current DX deployment Helm chart version:

    ```bash
    helm list -n <YOUR_NAMESPACE>
    helm get all <DX_RELEASE_NAME> --namespace <YOUR_NAMESPACE>
    ```

    Upgrade the DX deployment with IQ database settings:

    ```bash
    helm upgrade <DX_RELEASE_NAME> \
      https://artifactory.cwp.pnp-hcl.com/artifactory/quintana-helm/hcl-dx-deployment/<HELM_CHART_VERSION>.tgz \
      --namespace <YOUR_NAMESPACE> \
      --reuse-values \
      --set configuration.digitalAssetManagement.newDbManagement=true \
      --set networking.dxIqService=dx-ai-integrator \
      --set security.iq.customDbSecret=custom-credentials-iq-db
    ```

    Replace:
    - `<DX_RELEASE_NAME>` with your DX Helm release name (e.g., `dx-deployment`)
    - `<HELM_CHART_VERSION>` with your DX Helm chart version
    - `<YOUR_NAMESPACE>` with your Kubernetes namespace

    !!! note
        To find available Helm chart versions in Artifactory:
        ```bash
        curl -u username:token "https://artifactory.cwp.pnp-hcl.com/artifactory/api/storage/quintana-helm/hcl-dx-deployment/"
        ```

4. **Wait for RTC to create the IQ database:**

    Monitor the Runtime Controller logs:

    ```bash
    kubectl logs -n <YOUR_NAMESPACE> deployment/<DX_RELEASE_NAME>-runtime-controller | grep -i "iq database"
    ```

    Wait until you see:

    ```
    IQ database setup completed successfully.
    ```

5. **Verify the database and user were created:**

    ```bash
    kubectl exec -n <YOUR_NAMESPACE> <DX_RELEASE_NAME>-persistence-node-0 -c persistence-node -- \
      psql -U postgres -c "\l" | grep iq
    ```

    Verify environment variables and secrets:

    ```bash
    kubectl exec -n <YOUR_NAMESPACE> deployment/<DX_RELEASE_NAME>-runtime-controller -- env | grep -E "IQ_|NEW_DB"
    kubectl get secret custom-credentials-iq-db -n <YOUR_NAMESPACE>
    ```

6. **Prepare your `custom-iq-values.yaml` with RTC-managed database configuration:**

    !!! important
        The `dbName` must be `iqdb` — this is the hardcoded name RTC creates. Do not use a custom name.

    ```yaml
    configuration:
      database:
        enabled: true
        dbHost: "<DX_RELEASE_NAME>-persistence-node-0.<DX_RELEASE_NAME>-persistence-headless-svc.<YOUR_NAMESPACE>.svc.cluster.local"
        dbPort: 5432
        dbName: "iqdb"
        dbCustomSecret: "custom-credentials-iq-db"
    ```

    Replace:
    - `<DX_RELEASE_NAME>` with your DX Helm release name
    - `<YOUR_NAMESPACE>` with your Kubernetes namespace

### Step 2: Configure License Management

The IQ backend server requires a valid license key. To rotate or update the license:

```bash
helm upgrade <IQ_RELEASE_NAME> \
  https://artifactory.cwp.pnp-hcl.com/artifactory/quintana-helm/hcl-dx-iq/<HELM_CHART_VERSION>.tgz \
  --namespace <YOUR_NAMESPACE> \
  --reuse-values \
  --set configuration.license.key="<NEW_LICENSE_KEY>"
```

Replace:
- `<IQ_RELEASE_NAME>` with your IQ Helm release name (e.g., `dx-ai`)
- `<HELM_CHART_VERSION>` with the IQ Helm chart version
- `<YOUR_NAMESPACE>` with your Kubernetes namespace
- `<NEW_LICENSE_KEY>` with your new license key

## Installation & Deployment

This section provides step-by-step instructions for installing the IQ backend server alongside an existing HCL DX deployment.

### Step 1: Locate the Latest Helm Chart and Images

1. **Find available IQ Helm chart versions:**

    ```bash
    curl -u <USERNAME>:<TOKEN> \
      "https://artifactory.cwp.pnp-hcl.com/artifactory/api/storage/quintana-helm/hcl-dx-iq/"
    ```

    Replace `<USERNAME>` and `<TOKEN>` with your Artifactory credentials.

2. **Identify the image tags:**

    The IQ deployment uses two container images:
    - **Integrator Image:** `dx-iq-integrator`
    - **MCP Server Image:** `dx-mcp-server`

    Image tags are typically based on branch names (`develop`, `master`, `release`) or specific version numbers.

### Step 2: Prepare Configuration Values

Create a `custom-iq-values.yaml` file with your deployment-specific configuration:

```yaml
# Image configuration
images:
  tags:
    integrator: "<INTEGRATOR_IMAGE_TAG>"
    mcpServer: "<MCP_SERVER_IMAGE_TAG>"

# Application configuration
configuration:
  # DX host configuration
  dx:
    host: "<DX_HOSTNAME>"
  
  # Database configuration (see Preparation Steps for details)
  database:
    enabled: true
    dbHost: "<DATABASE_HOST>"
    dbPort: 5432
    dbName: "iqdb"
    dbCustomSecret: "<DB_SECRET_NAME>"
  
  # MCP Server configuration
  mcpServer:
    standaloneMode: "false"
    enableWcm: "true"
    enableDam: "true"
  
  # LiteLLM configuration (optional)
  litellm:
    liteLlmUrl: "<LITELLM_URL>"

# Environment variables for integrator pod
environment:
  pod:
    integrator:
      - name: "DX_HOST"
        value: "http://<DX_SERVICE_NAME>:<DX_SERVICE_PORT>"
      - name: "DX_CONTEXT_ROOT"
        value: "/<CONTEXT_ROOT_PATH>"
      - name: "LITELLM_API_KEY"
        valueFrom:
          secretKeyRef:
            name: "<LITELLM_SECRET_NAME>"
            key: "api-key"
```

Replace placeholders with your environment-specific values:

- `<INTEGRATOR_IMAGE_TAG>`: Tag for the dx-iq-integrator image
- `<MCP_SERVER_IMAGE_TAG>`: Tag for the dx-mcp-server image
- `<DX_HOSTNAME>`: Your DX deployment hostname
- `<DATABASE_HOST>`: PostgreSQL database hostname
- `<DB_SECRET_NAME>`: Name of the Kubernetes secret containing database credentials
- `<LITELLM_URL>`: LiteLLM service URL (if applicable)
- `<DX_SERVICE_NAME>`: DX Core service name (e.g., `dx-deployment-web-engine` or `dx-deployment-core`)
- `<DX_SERVICE_PORT>`: DX Core service port (e.g., `9080` for web-engine, `10039` for core)
- `<CONTEXT_ROOT_PATH>`: DX context root path (e.g., `wps`)
- `<LITELLM_SECRET_NAME>`: Name of the secret containing LiteLLM API key

!!! note "Auto-detecting DX service configuration"
    The deployment automatically detects whether you're using web-engine or core deployment based on the `DISABLE_CORE_OPENLIBERTY` setting. If not specified:
    - Web-engine deployments use: `dx-deployment-web-engine:9080`
    - Core deployments use: `dx-deployment-core:10039`

### Step 3: Install the IQ Backend Server

Run the Helm installation command:

```bash
helm install dx-ai \
  https://artifactory.cwp.pnp-hcl.com/artifactory/quintana-helm/hcl-dx-iq/<HELM_CHART_VERSION>.tgz \
  --namespace <YOUR_NAMESPACE> \
  --values custom-iq-values.yaml
```

Replace:
- `<HELM_CHART_VERSION>` with the Helm chart version (e.g., `hcl-dx-iq-v1.0.0_20260518-2104.tgz`)
- `<YOUR_NAMESPACE>` with your Kubernetes namespace

Alternatively, you can specify values directly via command-line flags:

```bash
helm install dx-ai \
  https://artifactory.cwp.pnp-hcl.com/artifactory/quintana-helm/hcl-dx-iq/<HELM_CHART_VERSION>.tgz \
  --namespace <YOUR_NAMESPACE> \
  --set images.tags.integrator="<INTEGRATOR_TAG>" \
  --set images.tags.mcpServer="<MCP_SERVER_TAG>" \
  --set configuration.dx.host="<DX_HOSTNAME>" \
  --set configuration.database.enabled=true \
  --set configuration.database.dbHost="<DATABASE_HOST>" \
  --set configuration.database.dbPort=5432 \
  --set configuration.database.dbName="iqdb" \
  --set configuration.database.dbCustomSecret="<DB_SECRET_NAME>" \
  --set configuration.mcpServer.standaloneMode="false" \
  --set configuration.mcpServer.enableWcm="true" \
  --set configuration.mcpServer.enableDam="true"
```

### Step 4: Verify the Installation

1. **Check pod status:**

    ```bash
    kubectl get pods -n <YOUR_NAMESPACE> | grep dx-ai
    ```

    Expected output:

    ```
    dx-ai-integrator-xxxxxxxxxx-xxxxx       1/1     Running   0          2m
    dx-ai-mcp-server-xxxxxxxxxx-xxxxx       1/1     Running   0          2m
    ```

2. **Check deployment status:**

    ```bash
    kubectl get deployment -n <YOUR_NAMESPACE> | grep dx-ai
    ```

3. **View logs:**

    ```bash
    kubectl logs -n <YOUR_NAMESPACE> deployment/dx-ai-integrator
    kubectl logs -n <YOUR_NAMESPACE> deployment/dx-ai-mcp-server
    ```

## Helm Upgrade & Maintenance

### Upgrading IQ Backend Server

To upgrade the IQ backend server to a new version or modify configuration:

1. **List current deployment:**

    ```bash
    helm list -n <YOUR_NAMESPACE>
    ```

2. **Get current values:**

    ```bash
    helm get values dx-ai -n <YOUR_NAMESPACE>
    ```

3. **Upgrade with new chart version:**

    ```bash
    helm upgrade dx-ai \
      https://artifactory.cwp.pnp-hcl.com/artifactory/quintana-helm/hcl-dx-iq/<NEW_HELM_CHART_VERSION>.tgz \
      --namespace <YOUR_NAMESPACE> \
      --reuse-values
    ```

4. **Upgrade with new configuration:**

    ```bash
    helm upgrade dx-ai \
      https://artifactory.cwp.pnp-hcl.com/artifactory/quintana-helm/hcl-dx-iq/<HELM_CHART_VERSION>.tgz \
      --namespace <YOUR_NAMESPACE> \
      --reuse-values \
      --set images.tags.integrator="<NEW_INTEGRATOR_TAG>" \
      --set images.tags.mcpServer="<NEW_MCP_SERVER_TAG>"
    ```

### Applying Environment Variable Overrides

To update environment variables without changing other configuration:

```bash
helm upgrade dx-ai \
  https://artifactory.cwp.pnp-hcl.com/artifactory/quintana-helm/hcl-dx-iq/<HELM_CHART_VERSION>.tgz \
  --namespace <YOUR_NAMESPACE> \
  --reuse-values \
  --set-json 'environment.pod.integrator=[
    {"name":"DX_HOST","value":"http://<NEW_DX_SERVICE>:<PORT>"},
    {"name":"DX_CONTEXT_ROOT","value":"/<NEW_CONTEXT_ROOT>"}
  ]'
```

### Uninstalling IQ Backend Server

To remove the IQ backend server:

```bash
helm uninstall dx-ai --namespace <YOUR_NAMESPACE>
```

Verify pods are terminated:

```bash
kubectl get pods -n <YOUR_NAMESPACE> | grep dx-ai
```

## Backup and Restore

The IQ backend server stores session and conversation data in a PostgreSQL database. Regular backups ensure data recovery in case of failures.

### Backup Persistence

#### Prerequisites

Verify that `persistence-node` pods are up and in `Running` state:

```bash
kubectl get pods -n <YOUR_NAMESPACE> | grep persistence-node
```

You may see multiple `persistence-node` pods running:

```
dx-deployment-persistence-node-0     2/2     Running   0          3h49m
dx-deployment-persistence-node-1     2/2     Running   0          3h48m
dx-deployment-persistence-node-2     2/2     Running   0          3h48m
```

#### Backup Steps

1. **Determine the primary `persistence-node`:**

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<DX_RELEASE_NAME>-persistence-node-0 -c persistence-node -- \
      repmgr cluster show --compact --terse 2>/dev/null | grep "primary" | awk '{split($0,a,"|"); print a[2]}' | xargs
    ```

    Replace:
    - `<YOUR_NAMESPACE>` with your Kubernetes namespace
    - `<DX_RELEASE_NAME>` with your DX deployment name

    Example output:

    ```
    dx-deployment-persistence-node-0
    ```

    Use this node name as `<PRIMARY_NODE_NAME>` in the following steps.

2. **Dump the current database:**

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      /bin/bash -c "pg_dump iqdb > /tmp/iqdb.dmp"
    ```

3. **Verify the dump file in the pod:**

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      ls -lh /tmp/iqdb.dmp
    ```

    Example output:

    ```
    -rw-r--r--. 1 dx_user dx_users 125K Mar 31 17:22 /tmp/iqdb.dmp
    ```

4. **Download the database dump to your local machine:**

    Option A: Download uncompressed dump directly:

    ```bash
    kubectl cp -n <YOUR_NAMESPACE> -c persistence-node \
      <PRIMARY_NODE_NAME>:/tmp/iqdb.dmp ./iqdb-backup-$(date +%Y%m%d).dmp
    ```

    Option B: Compress and download:

    ```bash
    # Compress in the pod
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      gzip /tmp/iqdb.dmp
    
    # Download compressed file
    kubectl cp -n <YOUR_NAMESPACE> -c persistence-node \
      <PRIMARY_NODE_NAME>:/tmp/iqdb.dmp.gz ./iqdb-backup-$(date +%Y%m%d).dmp.gz
    ```

5. **Store the backup securely:**

    Move the backup file to a secure, off-cluster location:

    ```bash
    # Example: Copy to remote storage
    scp ./iqdb-backup-$(date +%Y%m%d).dmp.gz user@backup-server:/backups/dx-iq/
    ```

### Restore Persistence

#### Prerequisites

Verify that `persistence-node` pods are up and in `Running` state:

```bash
kubectl get pods -n <YOUR_NAMESPACE> | grep persistence-node
```

#### Restore Steps

1. **Determine the primary `persistence-node`:**

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<DX_RELEASE_NAME>-persistence-node-0 -c persistence-node -- \
      repmgr cluster show --compact --terse 2>/dev/null | grep "primary" | awk '{split($0,a,"|"); print a[2]}' | xargs
    ```

    Example output:

    ```
    dx-deployment-persistence-node-0
    ```

    Use this node name as `<PRIMARY_NODE_NAME>` in the following steps.

2. **Upload the dump file to the primary `persistence-node` pod:**

    Option A: Upload uncompressed dump:

    ```bash
    kubectl cp -n <YOUR_NAMESPACE> -c persistence-node \
      ./iqdb-backup-20260518.dmp <PRIMARY_NODE_NAME>:/tmp/iqdb.dmp
    ```

    Option B: Upload and decompress:

    ```bash
    # Upload compressed file
    kubectl cp -n <YOUR_NAMESPACE> -c persistence-node \
      ./iqdb-backup-20260518.dmp.gz <PRIMARY_NODE_NAME>:/tmp/iqdb.dmp.gz
    
    # Decompress in the pod
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      gunzip /tmp/iqdb.dmp.gz
    ```

3. **Verify the dump file in the pod:**

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      ls -lh /tmp/iqdb.dmp
    ```

    Verify file contents:

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      head -n 20 /tmp/iqdb.dmp
    ```

    You should see SQL statements like `CREATE TABLE`, `INSERT INTO`, etc.

4. **Set database connection limit to 0:**

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      psql -c "ALTER DATABASE iqdb CONNECTION LIMIT 0;"
    ```

5. **Terminate existing connections:**

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      psql -c "SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity WHERE pg_stat_activity.datname = 'iqdb' AND pid <> pg_backend_pid();"
    ```

6. **Drop the existing database:**

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      dropdb iqdb
    ```

    !!! warning
        If you receive an error stating `database "iqdb" is being accessed by other users`, repeat steps 4-6 until the database is successfully dropped.

7. **Create a new empty database:**

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      /bin/bash -c "createdb -O dxuser iqdb"
    ```

8. **Restore the database from backup:**

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      /bin/bash -c "psql iqdb < /tmp/iqdb.dmp"
    ```

    Expected output should show SQL statements being executed:

    ```
    SET
    SET
    CREATE TABLE
    ALTER TABLE
    COPY 37
    REVOKE
    GRANT
    ```

    The `COPY` statements indicate rows are being inserted.

9. **Restore the database connection limit:**

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      psql -c "ALTER DATABASE iqdb CONNECTION LIMIT 500;"
    ```

#### Post-Restore Recovery

After completing the restore, the persistence connection pool may take time to restart. If the IQ service does not recover automatically:

1. **Restart the IQ integrator pod:**

    ```bash
    kubectl delete pod -n <YOUR_NAMESPACE> -l app=dx-ai-integrator
    ```

    Kubernetes will automatically recreate the pod.

2. **Verify pod status:**

    ```bash
    kubectl get pods -n <YOUR_NAMESPACE> | grep dx-ai-integrator
    ```

    Wait until the pod shows `Running` status with `1/1` ready.

## Validation

After installation or upgrade, validate that the IQ backend server is functioning correctly.

### Step 1: Verify Pod Health

Check that all IQ pods are running:

```bash
kubectl get pods -n <YOUR_NAMESPACE> | grep dx-ai
```

Expected output:

```
dx-ai-integrator-xxxxxxxxxx-xxxxx       1/1     Running   0          5m
dx-ai-mcp-server-xxxxxxxxxx-xxxxx       1/1     Running   0          5m
```

### Step 2: Check Pod Logs

Examine logs for any errors:

```bash
# Integrator logs
kubectl logs -n <YOUR_NAMESPACE> deployment/dx-ai-integrator --tail=50

# MCP Server logs
kubectl logs -n <YOUR_NAMESPACE> deployment/dx-ai-mcp-server --tail=50
```

Look for startup messages indicating successful initialization.

### Step 3: Verify Database Connection

Check that the IQ service can connect to the database:

```bash
kubectl logs -n <YOUR_NAMESPACE> deployment/dx-ai-integrator | grep -i "database"
```

Look for messages like:

```
Database connection established
Database migration completed successfully
```

### Step 4: Test WebSocket Connectivity

1. **Get the IQ service endpoint:**

    ```bash
    kubectl get service -n <YOUR_NAMESPACE> | grep dx-ai
    ```

2. **Access the DX environment and verify IQ UI components are loaded:**

    Open your DX environment in a browser and navigate to a page with IQ chatbot integration. The chatbot should be visible and interactive.

### Step 5: Verify MCP Server Integration

Check MCP server logs for successful registration:

```bash
kubectl logs -n <YOUR_NAMESPACE> deployment/dx-ai-mcp-server | grep -i "registered\|connected"
```

Look for messages indicating:

```
MCP server registered successfully
WCM integration enabled
DAM integration enabled
```

### Step 6: Test End-to-End Functionality

1. Open the HCL Doc IQ chatbot interface in your DX environment
2. Submit a test query (e.g., "What is HCL Digital Experience?")
3. Verify that:
    - The WebSocket connection is established
    - The query is processed
    - A response is returned from the AI model
    - The conversation state is preserved

### Troubleshooting

If validation fails, check the following:

| Issue | Possible Cause | Solution |
|-------|----------------|----------|
| Pods not starting | Image pull errors | Verify image tags and Artifactory access |
| Database connection fails | Incorrect credentials or host | Verify database secret and configuration |
| WebSocket errors | Network policy restrictions | Check Kubernetes network policies |
| MCP integration issues | WCM/DAM not enabled | Verify `mcpServer.enableWcm` and `mcpServer.enableDam` settings |
| No AI responses | LiteLLM configuration issue | Check LITELLM_API_KEY and LITELLM_URL |

For detailed logs:

```bash
kubectl logs -n <YOUR_NAMESPACE> deployment/dx-ai-integrator --previous
kubectl describe pod -n <YOUR_NAMESPACE> -l app=dx-ai-integrator
```

---
