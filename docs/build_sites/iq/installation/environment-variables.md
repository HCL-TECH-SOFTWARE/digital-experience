# IQ environment variables

This page lists the environment variables available for the IQ Integrator and DX MCP Server. Most variables are set through the `hcl-dx-iq` Helm chart values. Variables that have no corresponding Helm key must be injected directly using `environment.pod.integrator` or `environment.pod.mcpServer` in your values file.

## IQ Integrator

### LiteLLM

| Environment variable | Helm values key | Type | Default | Description | Accepted values |
|----------------------|-----------------|------|---------|-------------|-----------------|
| `LITELLM_API_KEY` | `iq-litellm-api-secret` | String | — | Specifies the static LiteLLM API key set through a Kubernetes secret. When you set this key, the system bypasses the deployment key flow entirely. This variable is mutually exclusive with `IQ_DEPLOYMENT_KEY`. | Any valid LiteLLM virtual key |
| `LITELLM_URL` | `configuration.litellm.liteLlmUrl` | String | — | Specifies the base URL of the LiteLLM Gateway Proxy. | A valid HTTPS URL (for example, `https://litellm.example.com`) |
| `LLM_MAX_TOKENS` | `environment.pod.integrator` | Integer | — | Specifies the maximum number of tokens for LLM completion responses. You must override the default value based on the token limits of your LLM model to prevent errors from models that enforce strict token limits. | Any positive integer within the model's supported range (for example, `16384`, `8192`, `4096`) |
| `LLM_TEMPERATURE` | `environment.pod.integrator` | Float | — | Specifies the temperature parameter for LLM response generation, controlling randomness and determinism. You must override the default value based on the constraints of your LLM model as some models require specific temperature values. | Any float value within the model's supported range (for example, `0.7`, `1`, `0`) |

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

### Cross-session memory

| Environment variable | Helm values key | Type | Default | Description | Accepted values |
|----------------------|-----------------|------|---------|-------------|-----------------|
| `RAG_ENABLED` | `environment.pod.integrator` | Boolean | `false` | Enables cross-session memory, powered by Retrieval-Augmented Generation (RAG). When enabled, IQ stores semantic chunks of past conversations in a vector database, retrieves relevant context when processing a query, and injects it into the system prompt so the model can reference information from previous sessions. Requires a [PostgreSQL database](prepare-database.md) and [registered embedding model](enable-rag.md#configuring-the-embedding-model) aliases in LiteLLM. | `true`, `false` |
| `EMBEDDING_DIMENSIONS` | `environment.pod.integrator` | Integer | `1024` | Specifies the vector dimension produced by your embedding model. This value must match the output dimension of the model registered in LiteLLM. Changing this value after initial startup causes IQ to enter graceful degradation mode and disable cross-session memory while continuing to serve requests. To apply new values, re-create the RAG tables and restart the pod. For instructions, refer to [Changing RAG and embedding configuration](enable-rag.md#changing-rag-and-embedding-configuration). | Any positive integer matching your embedding model's output dimension (for example, `1024` or `1536`) |
| `USE_MULTILINGUAL_EMBEDDINGS` | `environment.pod.integrator` | Boolean | `true` | Specifies whether IQ uses multilingual embeddings. <br> - When set to `true`, IQ uses the `iq-multilingual-embed` LiteLLM proxy alias. <br> - When set to `false`, IQ uses the `iq-embed` LiteLLM proxy alias.<br>Changing this value after initial startup causes IQ to enter graceful degradation mode and disable cross-session memory while continuing to serve requests. To apply new values, re-create the RAG tables and restart the pod. For instructions, refer to [Changing RAG and embedding configuration](enable-rag.md#changing-rag-and-embedding-configuration). | `true`, `false` |
| `RAG_CHUNK_SIZE` | `environment.pod.integrator` | Integer | `512` | Specifies the maximum number of characters per chunk. Changing this value after initial startup causes IQ to enter graceful degradation mode and disable cross-session memory while continuing to serve requests. To apply new values, re-create the RAG tables and restart the pod. For instructions, refer to [Changing RAG and embedding configuration](enable-rag.md#changing-rag-and-embedding-configuration). | Any positive integer (for example, `256`, `512`, or `1024`) |
| `RAG_CHUNK_OVERLAP` | `environment.pod.integrator` | Integer | `50` | Specifies the number of characters that adjacent chunks share, preserving context across chunk boundaries. Changing this value after initial startup causes IQ to enter graceful degradation mode and disable cross-session memory while continuing to serve requests. To apply new values, re-create the RAG tables and restart the pod. For instructions, refer to [Changing RAG and embedding configuration](enable-rag.md#changing-rag-and-embedding-configuration). | Any nonnegative integer less than `RAG_CHUNK_SIZE` (for example, `0`, `50`, or `100`) |
| `RAG_CHUNK_SEPARATORS` | `environment.pod.integrator` | JSON string array | `["\n\n","\n",". ","? ","! "," ",""]` | Specifies the ordered list of separator strings used by the chunking algorithm. The chunker tests each separator from coarsest to finest to split text into segments within `RAG_CHUNK_SIZE`. Provide this value as a JSON-encoded string array, where backslashes escape special characters (for example, `\n` represents a new line and `\n\n` represents two new lines). Changing this value after initial startup causes IQ to enter graceful degradation mode and disable cross-session memory while continuing to serve requests. To apply new values, re-create the RAG tables and restart the pod. For instructions, refer to [Changing RAG and embedding configuration](enable-rag.md#changing-rag-and-embedding-configuration). | A valid JSON string array (for example, `["\n\n","\n",". "]`) |
| `RAG_TOP_K` | `environment.pod.integrator` | Integer | `5` | Specifies the number of most similar chunks returned per query. Updating this parameter requires running `helm upgrade` to apply the changes, but does not require re-creating RAG tables or dropping stored data. | Any positive integer (for example, `3`, `5`, or `10`) |
| `RAG_MIN_SIMILARITY` | `environment.pod.integrator` | Float | `0` | Specifies the minimum cosine similarity score (`0` to `1`) that a chunk must reach to be retrieved. Set a nonzero value (such as `0.6`) to filter out low-relevance chunks. Updating this parameter requires running `helm upgrade` to apply the changes, but does not require re-creating RAG tables or dropping stored data. | Float from `0` to `1` (for example, `0`, `0.5`, or `0.7`) |
| `RAG_DEBUG` | `environment.pod.integrator` | Boolean | `false` | Enables verbose debug logging for RAG ingestion and retrieval. Do not enable in production environments. | `true`, `false` |

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
| `HTTPS_ENABLED` | `configuration.mcpServer.httpsEnabled` | Boolean | `true` | Enables HTTPS for the MCP Server. The chart uses the `dx-tls-cert` Kubernetes secret for the server certificate and private key. | `true`, `false` |
| `HTTPS_KEY_PATH` | Fixed chart path | String | `/etc/mcp-tls-config/tls.key` | Specifies the mounted TLS private-key path used by the MCP Server. This path is provided by the chart and should not be changed. | A path to a mounted private-key file |
| `HTTPS_CERT_PATH` | Fixed chart path | String | `/etc/mcp-tls-config/tls.crt` | Specifies the mounted TLS certificate path used by the MCP Server. This path is provided by the chart and should not be changed. | A path to a mounted certificate file |

### Operations

| Environment variable | Helm values key | Type | Default | Description | Accepted values |
|----------------------|-----------------|------|---------|-------------|-----------------|
| `MAINTENANCE_MODE` | `maintenanceMode.mcpServer` | Boolean | `false` | Starts the MCP Server pod in maintenance mode. The application does not run, but the container remains active to let you debug inside the container. | `true`, `false` |

???+ info "Related information"
    - [Deploying LiteLLM](deploy-litellm.md)
    - [Deploying IQ services](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_deploy_iq_services.md)
    - [Configuring the MCP Server](configuring-mcp.md)
    - [Configuring cross-session memory](enable-rag.md)
    - [Preparing the database](prepare-database.md)
    - [Preparing LiteLLM access](prepare-litellm-access.md)
