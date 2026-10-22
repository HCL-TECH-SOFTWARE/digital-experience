# IQ limitations

This page lists the known limitations of IQ.

## User interface

### Websocket connectivity

- Network disruptions, reloading the page, or closing the browser window during active operations may cause incomplete or inconsistent data, as background MCP Server processes may not terminate immediately. To safely stop an operation, use the 'Cancel' button. If a process is interrupted, you can use the chat feature to correct or revert any partial changes.

### Conversation history

- Previous conversation history is currently unavailable within the user interface.
- Resetting a session or closing the interface permanently clears the active context. You cannot record or replay conversations in the chat window.
- Exporting and reviewing previous conversations are not supported.
- Enabling [cross-session memory](./installation/enable-rag.md) lets IQ retrieve relevant context from past conversations and inject it into a new session but does not restore the previous transcript in the user interface.

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

- Traditional, non-containerized deployments — including hybrid setups where DX Core is deployed on-premises — are not supported.
- The MCP Server in its standalone configuration is the only IQ component supported outside a Kubernetes environment. All other IQ components require deployment within Kubernetes.
- The IQ backend server is designed specifically for WebSocket-based AI integration and session management.
- The service manages only the session state, conversation messages, and orchestration between the client, LLMs, and Model Context Protocol (MCP) servers.
- The service does not replace or alter existing DX Core functionality.

### AI model

- Knowledge of HCL DX architecture, APIs, and configurations is restricted to documentation available prior to the model's training data cutoff date and excludes subsequent updates, features, or best practices. For more information about the latest releases and features, refer to the official [HCL DX](https://help.hcl-software.com/digital-experience/9.5/latest/){target="_blank"} and [HCL DX Compose](https://help.hcl-software.com/digital-experience/dx-compose/latest/){target="_blank"} documentation.
- IQ has been extensively tested and validated with Claude Sonnet 4.6 and Sonnet 5.5 for general purpose tasks, and Claude Haiku 4.5 for summarization. Althought alternative LLMs may work, compatibility is not guaranteed. Because of the rapidly evolving nature of AI model releases, newer models may introduce parameter changes or tool calling behavior incompatibilities. For configuration details and compatibility warnings, refer to [Deploying LiteLLM in-cluster](./installation/deploy-litellm.md#deploying-litellm-in-cluster).
- OpenAI reasoning model variants (for example, GPT-5.x decimal-versioned models such as `gpt-5.4`, `gpt-5.5`, or `gpt-5.6-sol`) are not supported. These models automatically inject a `reasoning_effort` parameter that conflicts with IQ's function tools and results in the following error: `Function tools with reasoning_effort are not supported`.

### Database

- Multi-pod and production deployments do not support in-memory SQLite due to session state inconsistency across instances. For multi-pod environments, use PostgreSQL to ensure consistent session state and conversation history across all service instances.
- Database names are fixed to `iqdb` for internal and Runtime Controller (RTC)-managed databases. External databases allow custom database names.
- If any of the following environment variables no longer match the configuration saved in the `rag_embedding_metadata` table after initial startup, IQ enters graceful degradation mode and silently disables cross-session memory while continuing to serve requests.

    - `EMBEDDING_DIMENSIONS`
    - `USE_MULTILINGUAL_EMBEDDINGS`
    - `RAG_CHUNK_SIZE`
    - `RAG_CHUNK_OVERLAP`
    - `RAG_CHUNK_SEPARATORS`

    To apply configuration changes, re-create the RAG tables. For instructions, refer to [Changing RAG and embedding configuration](./installation/enable-rag.md#changing-rag-and-embedding-configuration). For more information on these variables, refer to [Environment variables - Cross-session memory](./installation/environment-variables.md#cross-session-memory).

## MCP Server

### Deployment

- The MCP Server must be deployed within the same Helm chart as the Integrator to establish automatic network connectivity.
- WCM and DAM tools are unavailable to the MCP Server unless they are explicitly enabled through the `enableWcm` and `enableDam` Helm configuration values. At least one of these tool domains must remain enabled for the readiness probe to report the MCP Server as healthy.
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
