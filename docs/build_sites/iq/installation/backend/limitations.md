# Limitations

Be aware of the following limitations when deploying and using the IQ backend services:

## Service Scope

- IQ backend server is designed specifically for WebSocket-based AI integration and session management
- The service manages only conversation state and AI communication orchestration
- It does not replace or modify existing DX Core functionality

## Integrator Limitations

- **Operation cancellation**: When canceling an operation through the user interface, some tools may have already begun execution. For optimal results, use the dedicated Cancel button in the UI. Improper cancellation (such as closing the browser window or reloading the page during operation processing) may result in incomplete or inconsistent results.

## AI Model Limitations

- **Training Data Cutoff:** The AI model is strictly limited by its training data cutoff date regarding existing HCL DX architecture
- The model's knowledge of HCL DX features, APIs, and configuration is based on documentation available at the time of its training
- For information about features released after the model's training date, users should consult the official HCL DX documentation
- The model may not be aware of recent changes, new features, or updated best practices

## Database Requirements

- **Database is optional**: IQ services can deploy without persistent storage using in-memory SQLite (development only)
- **SQLite not supported for multi-pod deployments**: When deploying multiple IQ service pods, SQLite (in-memory) database cannot maintain session state consistency across instances, as each pod maintains its own separate database. For multi-pod environments, use PostgreSQL to ensure consistent session state and conversation history across all service instances.
- **Database is strongly recommended for production**: PostgreSQL enables conversation persistence and session management.
- **Three database options available**: Option A (internal Persistence Node), Option B (external PostgreSQL), or Option C (RTC-managed PostgreSQL)
- **Database name is fixed as `iqdb` for Options A and C**: Both Persistence Node (Option A) and Runtime Controller-managed (Option C) deployments use the fixed name `iqdb`. Option B (external) allows custom database names.

## MCP Server Integration

- **MCP Server is part of the hcl-dx-iq installation**: The MCP Server container is deployed alongside the Integrator as part of the same Helm chart. Network connectivity between the Integrator and MCP Server is automatic within the same deployment.
- **WCM and DAM tools are optional and independently configurable**: Both WebContent Management and Digital Asset Management tool packages can be independently enabled or disabled via `enableWcm` and `enableDam` Helm configuration values. The MCP Server functions regardless of which tools are enabled.
- **Standalone mode affects authentication handling**: When `standaloneMode` is false (default), the MCP Server integrates with DX user authentication. When true, it disables DX authentication integration and may function in isolation.