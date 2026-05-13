# IQ Configuration

This section provides information about configuring the IQ backend service. Configuration is managed by **administrators** through environment variables set at deployment time — end users do not have access to these settings.

!!! note
    All configuration values are set via environment variables on the IQ backend (Node.js/Koa server). The values listed below reflect the defaults from the IQ source code.

---

## Configuration Overview

IQ configuration is organized into the following categories:

1. **Server Settings** — Port, HTTPS, debug
2. **DX Integration** — DX host, authorization
3. **LLM Provider** — AI model adapter and model selection
4. **MCP Servers** — Model Context Protocol server integration
5. **Session / Summary** — Context management
6. **Database** — Optional session persistence

---

## Server Settings

| Environment Variable | Default | Description |
|---------------------|---------|-------------|
| `PORT_v1` | `3000` | Port for the IQ backend service (versioned: `PORT_v{major}`) |
| `HOST` | `0.0.0.0` | Host address to bind to |
| `HTTPS_ENABLED` | `false` | Enable HTTPS |
| `HTTPS_CERT_PATH` | `/etc/dx-iq-integrator/tls.crt` | Path to TLS certificate |
| `HTTPS_KEY_PATH` | `/etc/dx-iq-integrator/tls.key` | Path to TLS private key |
| `EXPOSE_DEBUG_API` | `false` | Enable debug endpoints (not for production) |

!!! warning
    Never enable `EXPOSE_DEBUG_API` in production. Debug endpoints expose internal system information.

---

## DX Integration Settings

| Environment Variable | Default | Description |
|---------------------|---------|-------------|
| `DX_HOST` | `http://localhost:10039` | Hostname/URL of DX Core server |
| `DX_CONTEXT_ROOT` | `/wps` | DX context root path |
| `DX_RELEASE_NAME` | *(empty)* | Kubernetes service name for DX (takes precedence over `DX_HOST` when set) |
| `DX_ENFORCE_API_AUTHORIZATION` | `true` | Enforce role-based access via DX PAC |
| `DX_API_VIRTUAL_RESOURCE` | `wps.DX_IQ_INTEGRATOR_API` | PAC virtual resource identifier |
| `DX_API_AUTHORIZATION_ROLE` | `User` | Required role for IQ access |

---

## LLM Provider Settings

IQ supports two LLM adapters: **LiteLLM** (default) and **AWS Bedrock**.

| Environment Variable | Default | Description |
|---------------------|---------|-------------|
| `LLM_ADAPTER_NAME` | `litellm` | LLM adapter: `litellm` or `bedrock` |
| `LLM_MAX_TOKENS` | `128000` | Maximum tokens in AI responses |
| `LLM_TEMPERATURE` | `0.7` | Response creativity (0.0–1.0) |
| `LLM_MAX_AGENTIC_ITERATIONS` | `10` | Maximum tool-use iterations per request |
| `LLM_WATCHDOG_ENABLED` | `false` | Enable periodic LLM health checks |
| `LLM_WATCHDOG_INTERVAL_MS` | `60000` | LLM health check interval (ms) |

### LiteLLM

| Environment Variable | Default | Description |
|---------------------|---------|-------------|
| `LITELLM_BASE_URL` | `https://native-kube-litellm.team-q-dev.com` | LiteLLM server URL |
| `LITELLM_API_KEY` | *(no default — must be set)* | API key for LiteLLM authentication |
| `LITELLM_SUMMARY_MODEL` | `iq-summary` | Model for conversation summaries |
| `LITELLM_GENERAL_PURPOSE_MODEL` | `iq-general-purpose` | Model for general responses |

### AWS Bedrock

| Environment Variable | Default | Description |
|---------------------|---------|-------------|
| `AWS_BEDROCK_REGION` | `us-east-1` | AWS region where Bedrock is enabled |
| `AWS_ACCESS_KEY_ID` | *(no default — must be set)* | AWS IAM access key ID |
| `AWS_SECRET_ACCESS_KEY` | *(no default — must be set)* | AWS IAM secret access key |
| `AWS_BEDROCK_SUMMARY_MODEL` | `us.anthropic.claude-haiku-4-5-20251001-v1:0` | Model for conversation summaries |
| `AWS_BEDROCK_GENERAL_PURPOSE_MODEL` | `us.anthropic.claude-sonnet-4-6` | Model for general responses |

---

## MCP Server Settings

| Environment Variable | Default | Description |
|---------------------|---------|-------------|
| `MCP_SERVER_LIST` | `http://localhost:4000,http://dx-ai-mcp-server:3000` | Comma-separated list of MCP server URLs |
| `MCP_WATCHDOG_INTERVAL_MS` | `600000` | Health check interval for MCP servers (ms) |
| `MCP_TOOL_EXECUTION_TIMEOUT_MS` | `600000` | Maximum time for a single MCP tool call (ms) |

---

## Session / Summary Settings

| Environment Variable | Default | Description |
|---------------------|---------|-------------|
| `MESSAGE_THRESHOLD` | `10` | Number of messages before auto-summarization |
| `SUMMARY_BUFFER_SIZE` | `5` | Number of recent messages kept in full after summarization |
| `MAX_SUMMARY_LENGTH` | `1200` | Maximum character length for a generated summary |

---

## Database Settings (Optional)

By default, sessions are stored in-memory and are lost on pod restart. Optionally, a PostgreSQL database can be configured for persistence.

| Environment Variable | Default | Description |
|---------------------|---------|-------------|
| `DB_ENABLED` | `false` | Enable database for session storage |
| `DB_HOST` | `localhost` | Database hostname |
| `DB_PORT` | `5432` | Database port |
| `DB_NAME` | `dx_iq_integrator` | Database name |
| `DB_USER` | `dbadmin` | Database username |
| `DB_PASSWORD` | `dbadmin` | Database password |
| `DB_TLS_ENABLED` | `false` | Enable TLS for database connection |

---

## Logging Settings

| Environment Variable | Default | Description |
|---------------------|---------|-------------|
| `LOG_SETTINGS_FILE` | `/etc/global-config/log.aiIntegration` | Path to log configuration file |
| `LOG_CONTEXT` | `api` | Log context identifier for the backend |
| `LOG_CONTEXT_UI` | `ui` | Log context identifier for UI logs |

---

## Next Steps

- **[Using IQ](./usage.md)** — Learn how to use IQ effectively
- **[Troubleshooting](./troubleshooting.md)** — Resolve configuration-related issues
- **[Limitations](./limitations.md)** — Understand current constraints
