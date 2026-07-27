# IQ limitations

This page lists the known limitations of IQ.

## User interface

### Conversation history

- Chat history does not persist across sessions.
- Resetting a session or closing the interface permanently clears the active context. Conversations cannot be recovered.
- Exporting and reviewing previous conversations are not supported.

### Localization

- The UI displays text in English only. Non-English locales display the UI text in English.

### Input and output

- The interface supports text input only. Rich text, file attachments, images, and documents are not supported.
- Voice input and text-to-speech are not supported.

### Accessibility

To enable full accessibility within the IQ interface, turn on keyboard navigation settings in your browser.

**Firefox**

![Firefox keyboard navigation settings](../../assets/HCL_Search_Browser_Firefox_Settings.png)

**Safari**

![Safari keyboard navigation settings](../../assets/HCL_Search_Browser_Safari_Settings.png){ width="600" }

## Backend services

### Service scope

- The IQ backend server is designed specifically for WebSocket-based AI integration and session management.
- The service manages only the session state, conversation messages, and orchestration between the client, LLMs, and Model Context Protocol (MCP) servers.
- The service does not replace or alter existing DX Core functionality.

### Integrator

- If a browser or tab is closed, or if a network issue occurs, background MCP Server tools that have already started may not stop immediately. Use the **Cancel** button to stop processing safely, and then ask the LLM in chat to undo or correct any partial changes if needed. Closing the browser window or reloading the page while background operations are running can result in incomplete or inconsistent data states.

### AI model

- Knowledge of HCL DX architecture, APIs, and configurations is restricted to documentation available prior to the model's training data cutoff date and excludes subsequent updates, features, or best practices. For more information about the latest releases and features, refer to the official [HCL DX](https://help.hcl-software.com/digital-experience/9.5/latest/){target="_blank"} and [HCL DX Compose](https://help.hcl-software.com/digital-experience/dx-compose/latest/){target="_blank"} documentation.
- **OpenAI reasoning model variants are not supported.** IQ is incompatible with OpenAI's reasoning model variants (GPT-5.x decimal-versioned models like `gpt-5.4`, `gpt-5.5`, `gpt-5.6-sol`). These automatically inject `reasoning_effort`, which conflicts with IQ's function tools, resulting in: `Function tools with reasoning_effort are not supported`. The base models `gpt-5` and `gpt-5-mini` may work. **We recommend AWS Bedrock Claude models** (Sonnet, Haiku) for production deployments. See [Deploying LiteLLM](../installation/deploy-litellm.md) for configuration details.

### Database

- Multi-pod and production deployments do not support in-memory SQLite due to session state inconsistency across instances. For multi-pod environments, use PostgreSQL to ensure consistent session state and conversation history across all service instances.
- Database names are fixed to `iqdb` for internal and Runtime Controller (RTC)-managed databases. External databases allow custom database names.

## MCP Server

### Deployment

- The MCP Server must be deployed within the same Helm chart as the Integrator to establish automatic network connectivity.
- WCM and DAM tools are unavailable to the MCP Server unless they are explicitly enabled through the `enableWcm` and `enableDam` Helm configuration values. The MCP Server functions regardless of which tools are enabled.
- The `standaloneMode` parameter disables HCL DX user authentication integration, causing the MCP Server to function in isolation.

### Scope and enablement

- Available tool domains depend on feature flags (`ENABLE_DAM`, `ENABLE_WCM`, `STANDALONE_MODE`). Disabled domains are not exposed through the MCP Server.
- Authentication tool behavior in standalone mode differs from integrated deployment behavior.

### Response and output

- Token-Oriented Object Notation (TOON) encoding applies strictly to JSON text tool payloads. Non-JSON text and non-text content are not transformed.
- TOON encoder loading failures cause responses to automatically fall back to standard JSON text format.
- Response-detail modes (`summary` and `full`) apply strictly to Digital Asset Management (DAM) and Web Content Manager (WCM) tools. Other tools do not expose mode selection.

### Request and session behavior

- Stateless request processing prevents the use of session persistence or sticky-session configurations.
- Sequential requests in multi-replica environments route to any available pod rather than maintaining a connection to a specific instance.

### Payload and transport

- The server rejects JSON-RPC requests that exceed the configured body-parser limit.
- The `BODY_PARSER_JSON_LIMIT` Helm chart configuration value controls payload capacity limits.

### Context propagation

- Cookie and virtual portal contexts propagate from provided request parameters.
- Missing or invalid context values cause downstream requests to use default behavior.

### Monitoring and readiness

- Liveness checks only confirm process availability, not full backend dependency health.
