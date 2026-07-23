# IQ environment variables

This page lists the environment variables available for the IQ Integrator and DX MCP Server. Most variables are set through the `hcl-dx-iq` Helm chart values. Variables that have no corresponding Helm key must be injected directly using `environment.pod.integrator` or `environment.pod.mcpServer` in your values file.

## IQ Integrator

### LiteLLM

| Environment variable | Helm values key | Type | Default | Description | Accepted values |
|----------------------|-----------------|------|---------|-------------|-----------------|
| `LITELLM_API_KEY` | `iq-litellm-api-secret` | String | — | Specifies the static LiteLLM API key set through a Kubernetes secret. When you set this key, the system bypasses the deployment key flow entirely. This variable is mutually exclusive with `IQ_DEPLOYMENT_KEY`. | Any valid LiteLLM virtual key |
| `LITELLM_URL` | `configuration.litellm.liteLlmUrl` | String | — | Specifies the base URL of the LiteLLM Gateway Proxy. | A valid HTTPS URL (for example, `https://litellm.example.com`) |

### DX integration

| Environment variable | Helm values key | Type | Default | Description | Accepted values |
|----------------------|-----------------|------|---------|-------------|-----------------|
| `DX_INTERNAL_HOST` | `configuration.dx.internalHost` | String | Auto-derived from `releaseName` | Specifies the internal DX host used by the integrator for authentication and by the MCP server for DX API calls. When set explicitly, this value overrides auto-derivation. | A valid internal Kubernetes service URL (for example, `http://dx-deployment-core:10039` or `http://dx-deployment-web-engine:9080`) |
| `DX_EXTERNAL_HOST` | `configuration.dx.externalHost` | String | — | Specifies the external DX hostname. The system provides this hostname to the LLM to construct fully qualified DX resource URLs in responses. | A valid external FQDN (for example, `https://dx.example.com`) |
| `DX_RELEASE_NAME` | `configuration.dx.releaseName` | String | — | Specifies the Helm release name of the DX deployment. The system uses this name to auto-derive internal service hostnames (HAProxy, Core, WCM) when `internalHost` is not explicitly set. | Any valid Helm release name string (for example, `dx-deployment`) |
| `DX_CONTEXT_ROOT` | `environment.pod.integrator` | String | `/wps` | Specifies the DX context root path prepended to all DX resource URLs. | Any valid URL path segment (for example, `/wps`) |

### MCP Server connectivity

| Environment variable | Helm values key | Type | Default | Description | Accepted values |
|----------------------|-----------------|------|---------|-------------|-----------------|
| `MCP_SERVER_LIST` | `environment.pod.integrator` | String | `http://dx-ai-mcp-server:3000` | Specifies a comma-separated list of MCP Server URLs that the Integrator polls for available tools on startup and during the watchdog interval. This list must reflect your actual IQ Helm release name. | One or more valid internal Kubernetes service URLs separated by commas (for example, `http://dx-iq-mcp-server:3000`) |

### Database

| Environment variable | Helm values key | Type | Default | Description | Accepted values |
|----------------------|-----------------|------|---------|-------------|-----------------|
| `DB_ENABLED` | `configuration.database.enabled` | Boolean | `false` | Enables PostgreSQL persistence for sessions and deployment key tokens. When set to `false`, the system stores sessions in memory, which clear on pod restart." | `true`, `false` |
| `DB_HOST` | `configuration.database.dbHost` | String | — | Specifies the hostname of the PostgreSQL database server. | Any valid hostname or IP address |
| `DB_PORT` | `configuration.database.dbPort` | Integer | `5432` | Specifies the port of the PostgreSQL database server. | Any valid port number |
| `DB_NAME` | `configuration.database.dbName` | String | `iqdb` | Specifies the name of the PostgreSQL database. | Any valid PostgreSQL database name |
| `DB_USER` | `configuration.database.dbUser` | String | — | Specifies the PostgreSQL username. The system ignores this value when `dbCustomSecret` is set.| Any valid PostgreSQL username |
| `DB_PASSWORD` | `configuration.database.dbPassword` | String | — | Specifies the PostgreSQL password. The system ignores this value when `dbCustomSecret` is set. Do not commit this password to version control. Use `dbCustomSecret` for production deployments. | Any valid PostgreSQL password |
| `DB_TLS_ENABLED` | `configuration.database.dbTlsEnabled` | Boolean | `false` | Enables TLS encryption for the database connection. | `true`, `false` |

### Operations

| Environment variable | Helm values key | Type | Default | Description | Accepted values |
|----------------------|-----------------|------|---------|-------------|-----------------|
| `MAINTENANCE_MODE` | `maintenanceMode.integrator` | Boolean | `false` | Starts the Integrator pod in maintenance mode. The application does not run, but the container remains active to let you debug inside the container. | `true`, `false` |

---

## DX MCP Server

### DX integration

| Environment variable | Helm values key | Type | Default | Description | Accepted values |
|----------------------|-----------------|------|---------|-------------|-----------------|
| `DX_HOST_NAME` | `configuration.dx.internalHost` | String | Auto-derived from `releaseName` | Specifies the internal DX host used by the MCP Server for DX API calls (WCM, Core). This uses the same source as the Integrator's `DX_INTERNAL_HOST` variable. When `internalHost` is empty, auto-derived as `<scheme>://<releaseName>-haproxy`. | A valid internal Kubernetes service URL (for example, `http://dx-deployment-core:10039`) |
| `DX_DAM_HOST` | Auto-derived | String | `<scheme>://<releaseName>-haproxy` | Specifies the DAM API host used by the MCP Server. The system always auto-derives this value from `configuration.dx.ssl` and `configuration.dx.releaseName`. You cannot override this value directly by using a Helm key. | — (read-only; control using `configuration.dx.ssl` and `configuration.dx.releaseName`) |
| `DX_PORT` | `configuration.dx.port` | Integer | `443` | Specifies the port number appended to the DX host for MCP Server API calls. | Any valid port number |
| `DX_SSL_ENABLED` | `configuration.dx.ssl` | Boolean | `true` | Determines the URL scheme (`https://` or `http://`) used for DX API calls. | `true`, `false` |
| `ALLOWED_HOSTS` | Auto-generated | String | `<release>-mcp-server.<namespace>.svc.cluster.local:<port>` | Specifies the Kubernetes service FQDN used for allowed host validation. The system fully auto-generates this value from the release name, namespace, and port. You cannot configure this variable. | — (read-only) |

### Tool configuration

| Environment variable | Helm values key | Type | Default | Description | Accepted values |
|----------------------|-----------------|------|---------|-------------|-----------------|
| `MCP_SERVER_PORT` | `configuration.mcpServer.mcpServerPort` | Integer | `3000` | Specifies the port that the MCP Server listens on inside the cluster. | Any valid port number |
| `ENABLE_WCM` | `configuration.mcpServer.enableWcm` | Boolean | `true` | Enables Web Content Manager (WCM) and DX Core content tools. | `true`, `false` |
| `ENABLE_DAM` | `configuration.mcpServer.enableDam` | Boolean | `true` | Enables Digital Asset Management (DAM) tools. | `true`, `false` |
| `STANDALONE_MODE` | `configuration.mcpServer.standaloneMode` | Boolean | `false` | When set to `true`, this variable disables DX authentication tools and runs the MCP Server in isolation, without integrating with HCL DX user authentication. Use this mode for development or testing only. | `true`, `false` |
| `BODY_PARSER_JSON_LIMIT` | `configuration.mcpServer.bodyParserJsonLimit` | String | `1mb` | Specifies the maximum size for incoming JSON-RPC payloads. This setting uses Express.js byte notation (lowercase units). Increase this value if your deployment requires larger tool payloads. | A size string with lowercase units (for example, `1mb`, `5mb`, `10mb`) |

### Operations

| Environment variable | Helm values key | Type | Default | Description | Accepted values |
|----------------------|-----------------|------|---------|-------------|-----------------|
| `MAINTENANCE_MODE` | `maintenanceMode.mcpServer` | Boolean | `false` | Starts the MCP Server pod in maintenance mode. The application does not run, but the container remains active to let you debug inside the container. | `true`, `false` |

???+ info "Related information"
    - [Deploying services](deploy-services.md)
    - [Configuring the MCP Server](configuring-mcp.md)
    - [Preparing the database](prepare-database.md)
    - [Preparing LiteLLM access](prepare-litellm-access.md)
