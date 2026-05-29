# Backing up and restoring data

The IQ backend server stores session and conversation data in a PostgreSQL database. Regular backups ensure data recovery in case of failures.

## Backup Persistence

### Prerequisites

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

### Backup Steps

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

## Restore Persistence

### Prerequisites

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

### Post-Restore Recovery

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

      You can verify this in your browser developer tools: open the **Network** tab, select **Socket/WS**, and confirm the `ws` connection is established.

      ![HCL Doc IQ WebSocket connection established](../../../../../../assets/hcl_doc_iq_websocket_connection_established.png)
    - The query is processed

      In your browser developer tools, open **Network** and select **Socket/WS**. Select the `ws` connection, open **Messages**, and verify an outbound JSON-RPC message with method `send_message` is sent for your query.

      ![HCL Doc IQ send_message request in Network WebSocket messages](../../../../../../assets/hcl_doc_iq_send_message_request_network.png)
    - A response is returned from the AI model

      In the same **Messages** view, verify an inbound JSON-RPC response is returned for your `send_message` request and includes the AI-generated answer payload.

      ![HCL Doc IQ send_message response in Network WebSocket messages](../../../../../../assets/hcl_doc_iq_send_message_response_network.png)
    - The conversation state is preserved

      You can validate this by reloading the page and confirming the prior conversation is still available. You can also log out and log back in, then verify the same conversation state is restored.

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
