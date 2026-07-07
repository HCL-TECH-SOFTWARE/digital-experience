# Configuration Reference

This page lists the environment variables available for the IQ Integrator and DX MCP Server. Most variables are set through the `hcl-dx-iq` Helm chart values. Variables that have no corresponding Helm key must be injected directly using `environment.pod.integrator` or `environment.pod.mcpServer` in your values file.

## IQ Integrator

### LiteLLM

| Environment Variable | Helm Values Key | Type | Default | Description | Acceptable Values |
|---|---|---|---|---|---|
| `LITELLM_API_KEY` | Set via K8s Secret (`iq-litellm-api-secret`) | String | — | Static LiteLLM API key. When set, the Deployment Key flow is bypassed entirely. Mutually exclusive with `IQ_DEPLOYMENT_KEY`. | Any valid LiteLLM virtual key |
| `LITELLM_URL` | `configuration.litellm.liteLlmUrl` | String | — | Base URL of the LiteLLM Gateway Proxy. | A valid HTTPS URL (for example, `https://litellm.example.com`) |

### DX Integration

| Environment Variable | Helm Values Key | Type | Default | Description | Acceptable Values |
|---|---|---|---|---|---|
| `DX_INTERNAL_HOST` | `configuration.dx.internalHost` | String | Auto-derived from `releaseName` | Internal DX host used by the Integrator for authentication and by the MCP Server for DX API calls. When set explicitly, overrides auto-derivation. | A valid internal Kubernetes service URL (for example, `http://dx-deployment-core:10039` or `http://dx-deployment-web-engine:9080`) |
| `DX_EXTERNAL_HOST` | `configuration.dx.externalHost` | String | — | External DX hostname. Provided to the LLM for constructing fully qualified DX resource URLs in responses. | A valid external FQDN (for example, `https://dx.example.com`) |
| `DX_RELEASE_NAME` | `configuration.dx.releaseName` | String | — | Helm release name of the DX deployment. Used to auto-derive internal service hostnames (HAProxy, Core, WCM) when `internalHost` is not explicitly set. | Any valid Helm release name string (for example, `dx-deployment`) |
| `DX_CONTEXT_ROOT` | `environment.pod.integrator` | String | `/wps` | DX context root path prepended to all DX resource URLs. | Any valid URL path segment (for example, `/wps`) |

### MCP Server connectivity

| Environment Variable | Helm Values Key | Type | Default | Description | Acceptable Values |
|---|---|---|---|---|---|
| `MCP_SERVER_LIST` | `environment.pod.integrator` | String | `http://dx-ai-mcp-server:3000` | Comma-separated list of MCP Server URLs that the Integrator polls for available tools on startup and on watchdog interval. Must reflect your actual IQ Helm release name. | One or more valid internal Kubernetes service URLs separated by commas (for example, `http://dx-iq-mcp-server:3000`) |

### Database

| Environment Variable | Helm Values Key | Type | Default | Description | Acceptable Values |
|---|---|---|---|---|---|
| `DB_ENABLED` | `configuration.database.enabled` | Boolean | `false` | Enables PostgreSQL persistence for sessions and deployment key tokens. When `false`, sessions are stored in memory only and lost on pod restart. | `true`, `false` |
| `DB_HOST` | `configuration.database.dbHost` | String | — | Hostname of the PostgreSQL database server. | Any valid hostname or IP address |
| `DB_PORT` | `configuration.database.dbPort` | Integer | `5432` | Port of the PostgreSQL database server. | Any valid port number |
| `DB_NAME` | `configuration.database.dbName` | String | `iqdb` | Name of the PostgreSQL database. | Any valid PostgreSQL database name |
| `DB_USER` | `configuration.database.dbUser` | String | — | PostgreSQL username. Ignored when `dbCustomSecret` is set. | Any valid PostgreSQL username |
| `DB_PASSWORD` | `configuration.database.dbPassword` | String | — | PostgreSQL password. Ignored when `dbCustomSecret` is set. Do not commit to version control. Use `dbCustomSecret` for production deployments. | Any valid PostgreSQL password |
| `DB_TLS_ENABLED` | `configuration.database.dbTlsEnabled` | Boolean | `false` | Enables TLS encryption for the database connection. | `true`, `false` |

---

## DX MCP Server

| Environment Variable | Helm Values Key | Type | Default | Description | Acceptable Values |
|---|---|---|---|---|---|
| `MCP_SERVER_PORT` | `configuration.mcpServer.mcpServerPort` | Integer | `3000` | Port the MCP Server listens on inside the cluster. | Any valid port number |
| `ENABLE_WCM` | `configuration.mcpServer.enableWcm` | Boolean | `true` | Enables Web Content Manager (WCM) and DX Core content tools. | `true`, `false` |
| `ENABLE_DAM` | `configuration.mcpServer.enableDam` | Boolean | `true` | Enables Digital Asset Management (DAM) tools. | `true`, `false` |
| `STANDALONE_MODE` | `configuration.mcpServer.standaloneMode` | Boolean | `false` | When `true`, disables DX authentication tools and runs the MCP Server in isolation, without integrating with HCL DX user authentication. Use for development or testing only. | `true`, `false` |
| `BODY_PARSER_JSON_LIMIT` | `configuration.mcpServer.bodyParserJsonLimit` | String | `1mb` | Maximum size for incoming JSON-RPC payloads. Uses Express.js byte notation (lowercase units). Increase if your deployment requires larger tool payloads. | A size string with lowercase units (for example, `1mb`, `5mb`, `10mb`) |

???+ info "Related information"
    - [Deploying services](deploy-services.md)
    - [Configuring the MCP Server](configuring-mcp.md)
    - [Preparing the database](prepare-database.md)
    - [Preparing a license](prepare-license.md)
