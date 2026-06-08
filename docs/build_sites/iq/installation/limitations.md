# Limitations

This section describes the deployment and operational limitations for IQ backend services.  

## Service scope

- The IQ backend server is designed specifically for WebSocket-based AI integration and session management.
- The service manages session state, conversation messages, and orchestration between the client, LLMs, and MCP servers.
- The service does not replace or alter existing DX Core functionality.

## Integrator

- If a browser or tab is closed, or if a network issue occurs, background MCP Server tools that have already started may not stop immediately. Use the **Cancel** button to stop processing safely, and then ask the LLM in chat to undo or correct any partial changes if needed. Closing the browser window or reloading the page while background operations are running can result in incomplete or inconsistent data states.

## AI Model

- Knowledge of HCL DX architecture, APIs, and configurations is restricted to documentation available prior to the data cutoff date and excludes subsequent updates, features, or best practices. For more information about the latest releases and features, refer to the official [HCL DX](https://help.hcl-software.com/digital-experience/9.5/latest/){target="_blank"} and [HCL DX Compose](https://help.hcl-software.com/digital-experience/dx-compose/latest/){target="_blank"} documentation.

## Database

- Multi-pod and production deployments do not support in-memory SQLite due to session state inconsistency across instances. For multi-pod environments, use PostgreSQL to ensure consistent session state and conversation history across all service instances.
- Database names are fixed to `iqdb` for internal and Runtime Controller (RTC)-managed databases. External databases allow custom database names.

## MCP Server

- The MCP Server must be deployed within the same Helm chart as the Integrator to establish automatic network connectivity.
- WCM and DAM tools are unavailable to the MCP Server unless they are explicitly enabled through the `enableWcm` and `enableDam` Helm configuration values. The MCP Server functions regardless of which tools are enabled.
- The `standaloneMode` parameter disables HCL DX user authentication integration, causing the MCP Server to function in isolation.
