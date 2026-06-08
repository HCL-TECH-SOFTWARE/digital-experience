# Limitations

This section describes the deployment and operational limitations for IQ backend services.  

## Service scope

- The IQ backend server is designed specifically for WebSocket-based AI integration and session management.
- The service manages only conversation state and AI communication orchestration. <!--Is this accurate? "The service functions exclusively as a message router between the client browser and the AI model while maintaining the active chat session history." The original text seems a bit confusing-->
- The service does not replace or alter existing DX Core functionality.

## Integrator

- Operations canceled through the user interface cannot instantly stop background tools that are already running. Use the **Cancel** button to stop processing safely. Closing the browser window or reloading the page while background operations are running cause incomplete or inconsistent data states.

## AI Model

- Knowledge of HCL DX architecture, APIs, and configurations is restricted to documentation available prior to the data cutoff date and excludes subsequent updates, features, or best practices. For more information about the latest releases and features, refer to the official [HCL DX](https://help.hcl-software.com/digital-experience/9.5/latest/){target="_blank"} and [HCL DX Compose](https://help.hcl-software.com/digital-experience/dx-compose/latest/){target="_blank"} documentation.

## Database

- Multi-pod and production deployments do not support in-memory SQLite due to session state inconsistency across instances. For multi-pod environments, use PostgreSQL to ensure consistent session state and conversation history across all service instances.
- Database names are fixed to `iqdb` for internal and Runtime Controller (RTC)-managed databases. External databases allow custom database names.

## MCP Server

- The MCP Server must be deployed within the same Helm chart as the Integrator to establish automatic network connectivity.
- WCM and DAM tools are unavailable to the MCP Server unless they are explicitly enabled through the `enableWcm` and `enableDam` Helm configuration values. The MCP Server functions regardless of which tools are enabled.
- The `standaloneMode` parameter disables HCL DX user authentication integration, causing the MCP Server to function in isolation.
