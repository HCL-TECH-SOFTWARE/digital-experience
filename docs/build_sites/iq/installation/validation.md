# Validating the deployment

This section provides instructions for verifying that your deployment is healthy and operational at any stage of the installation process. Use these steps to confirm that IQ services are running, pods are healthy, and communication is established with external systems, including HCL Digital Experience (DX) Core, DX Compose, and the LiteLLM Proxy. This validation applies to all IQ installations, regardless of your database configuration.

## Verifying pod health

Check that all IQ pods are running:

```bash
kubectl get pods -n <YOUR_NAMESPACE> | grep dx-iq
```

Expected output:

```text
NAME                                    READY   STATUS    RESTARTS   AGE
dx-iq-integrator-xxxxxxxxxx-xxxxx       1/1     Running   0          5m
dx-iq-mcp-server-xxxxxxxxxx-xxxxx       1/1     Running   0          5m
```

If the pods are not running, check the pod description:

```bash
kubectl describe pod -n <YOUR_NAMESPACE> -l app=dx-iq-integrator
```

## Checking pod logs

Examine the logs to verify successful initialization and check for configuration errors:

```bash
# Integrator logs
kubectl logs -n <YOUR_NAMESPACE> deployment/dx-iq-integrator --tail=50

# MCP Server logs
kubectl logs -n <YOUR_NAMESPACE> deployment/dx-iq-mcp-server --tail=50
```

## Verifying database connectivity

Verify that the IQ service can connect to its database:

```bash
kubectl logs -n <YOUR_NAMESPACE> deployment/dx-iq-integrator | grep -i "database"
```

Expected output (persistent PostgreSQL database):

```text
Database mode is ENABLED. Using PostgreSQL database.
Database connection initialized.
Database initialized successfully.
```

Expected output (SQLite fallback):

```text
Using database: In-memory SQLite
```

If the initial command returns errors such as `Connection refused` or `Password authentication failed`, the IQ Integrator cannot reach the database. For steps on troubleshooting database connection issues, refer to [Troubleshooting - Connection failures](../troubleshooting.md#connection-failures).

## Testing WebSocket connectivity

Verify that the client can establish a WebSocket connection to the IQ backend:

1. Retrieve the IQ service endpoint:

    ```bash
    kubectl get service -n <YOUR_NAMESPACE> | grep dx-iq
    ```

2. Open your DX environment in a browser and navigate to a page with the IQ chatbot integration. The chatbot should be visible and interactive. For detailed instructions on accessing your DX environment and configuring IQ UI components, refer to [Accessing the DX environment](../access.md).

## Verifying MCP Server integration

Check the Model Context Protocol (MCP) Server logs to confirm tool registration status:

```bash
kubectl logs -n <YOUR_NAMESPACE> deployment/dx-iq-mcp-server | grep -i "Registering\|disabled"
```

Expected output (tools enabled):

```text
Registering WCM tools
Registering DAM tools
API endpoints available at https://localhost:...
```

Expected output (tools disabled):

```text
WCM tools are disabled
DAM tools are disabled
```

If tools are unexpectedly disabled, verify that `mcpServer.enableWcm` and `mcpServer.enableDam` are set to `true` in your Helm values.

## Testing end-to-end functionality

1. Open the HCL IQ user interface in your DX environment.
2. Submit a test query (for example, "What is HCL Digital Experience?").
3. Verify the following:

    1. The WebSocket connection is established:

        1. In your browser developer tools, open the **Network** tab.
        2. Select **Socket** (Chrome), **WS** (Firefox), or **WebSockets** (Safari).
        3. Confirm the `ws` connection is established (`status: "open"`).

            ![HCL Doc IQ WebSocket connection established](../../../assets/hcl_doc_iq_websocket_connection_established.png)

    2. The query is processed:

        1. In the same `ws` connection, open the **Messages** tab.
        2. Verify that an outbound JSON-RPC message with `method: "send_message"` is sent for your query.

            ![HCL Doc IQ send_message request in Network WebSocket messages](../../../assets/hcl_doc_iq_send_message_request_network.png)

    3. A response is returned from the AI model:

        In the same **Messages** tab, verify an inbound JSON-RPC response is returned for your `send_message` request and includes the AI-generated answer payload.

        ![HCL Doc IQ send_message response in Network WebSocket messages](../../../assets/hcl_doc_iq_send_message_response_network.png)

    4. The conversation state is preserved:

        1. Refresh the page and confirm the prior conversation remains available.
        2. Log out and log back in, then verify that the same conversation state is restored.

???+ info "Related information"
    - [Accessing IQ](../access.md)
    - [Troubleshooting - Backend services](../troubleshooting.md#backend-services)
