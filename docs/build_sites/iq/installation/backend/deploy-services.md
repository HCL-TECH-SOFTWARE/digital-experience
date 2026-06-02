# Deploying services

This section provides step-by-step instructions for deploying the IQ backend servers (Integrator and MCP Server) alongside an existing container-based HCL DX deployment starting DX 9.5 CF236.

!!! note "Database and License Configuration are Optional"
    This deployment deploys the IQ services with persistence disabled (`database.enabled: false`) and uses a static LiteLLM key if configured. You can validate that the Integrator and MCP Server containers are healthy and operational immediately. After confirming services are running, you have two optional next steps.

**[Preparing the database](prepare-database.md)** — Recommended for production. Enables conversation persistence, session storage, and safe multi-pod coordination for Deployment Key token management.

**[Preparing the license and deployment key](prepare-license.md)** — If you have an HCL IQ subscription and want automated, entitlement-based LiteLLM key management instead of static keys.

## Overview of IQ Services

Before deployment, it's helpful to understand the two main components you'll be deploying:

### IQ Integrator

The **IQ Integrator** is the primary WebSocket-based service that bridges HCL DX and AI models. It handles:

- **Natural language question answering** — Receives questions from users about their DX content and system configuration, then forwards these to a configured LLM (via LiteLLM Proxy)
- **Context aggregation** — Gathers contextual information from your DX deployment to provide the LLM with accurate, environment-specific answers
- **Session management** — Maintains WebSocket connections and conversation history for interactive Q&A sessions
- **User authentication** — Validates DX user credentials and maintains secure sessions

In essence, the IQ Integrator is the "answering engine" that transforms DX data into LLM-consumable context and delivers AI-generated responses back to end users.

### IQ MCP Server

The **IQ MCP Server** (Model Context Protocol Server) provides tool execution capabilities for WCM (Web Content Management) and DAM (Digital Asset Management) operations. It enables:

- **WCM tool execution** — Allows the LLM to create/read/update content libraries, site areas, content templates, and presentation templates
- **DAM tool execution** — Supports searching and retrieving digital assets
- **Secure API integration** — Connects to DX via authenticated REST APIs with proper error handling and logging
- **Tool standardization** — Implements the MCP specification, allowing AI models to discover and invoke tools in a standardized way

The MCP Server acts as the "action layer," allowing AI assistants to not just answer questions, but perform real operations within your DX environment when requested by authorized DX end users interacting with the IQ natural language interface.

---

### Step 1: Locate the Latest Helm Chart and Images

1. **Find available IQ Helm chart versions, and available IQ Integrator and MCP Server images tags from your artifactory. For example, in JFrog Artifactory::**

    ```bash
    curl -u <USERNAME>:<TOKEN> "https://<YOUR_REPOSITORY_FQDN_AND_PATH>/"
    ```

    Replace `<USERNAME>` and `<TOKEN>` with your Artifactory credentials.
    Replace `<YOUR_REPOSITORY_FQDN_AND_PATH>` with your Artifactory full-qualified domain name and path to the chart


2. **Identify the image tags:**

    The IQ deployment uses two container images:
    - **Integrator Image:** `dx-iq-integrator`
    - **MCP Server Image:** `dx-mcp-server`

### Step 2: Prepare Configuration Values

Create a `custom-iq-values.yaml` file with your deployment-specific configuration:

```yaml
# Image configuration
images:
  repository: "<YOUR_ARTIFACTORY>"
  tags:
    integrator: "<INTEGRATOR_IMAGE_TAG>"
    mcpServer: "<MCP_SERVER_IMAGE_TAG>"
  names:
    integrator: "dx/dx-iq-integrator"
    mcpServer: "dx/dx-mcp-server"

# Application configuration
configuration:
  # DX deployment configuration
  dx:
    releaseName: "<DX_RELEASE_NAME>"
    externalHost: "<DX_EXTERNAL_FQDN>"
    internalHost: "http://<DX_RELEASE_NAME>-core:10039" # For web-engine use: http://<DX_RELEASE_NAME>-web-engine:9080
    port: 443
    ssl: true
  
  # Database configuration (optional - leave disabled initially, enable after preparation)
  database:
    enabled: false
  
  # MCP Server configuration
  mcpServer:
    standaloneMode: false
    enableWcm: true
    enableDam: true
  
  # LiteLLM Proxy configuration
  litellm:
    liteLlmUrl: "<LITELLM_URL>"
```

Replace placeholders with your environment-specific values:

- `<YOUR_ARTIFACTORY>`: Your container image registry (e.g., `myregistry.example.com`)
- `<INTEGRATOR_IMAGE_TAG>`: Tag for the dx-iq-integrator image
- `<MCP_SERVER_IMAGE_TAG>`: Tag for the dx-mcp-server image
- `images.names`: Image names within the repository. Defaults shown above match the standard HCL image paths. Update only if your registry uses different paths.
- `<DX_RELEASE_NAME>`: The Helm release name of your DX deployment (e.g., `dx-deployment`)
- `<DX_EXTERNAL_FQDN>`: Your DX external hostname used by the LLM for context (e.g., `dx.example.com`)
- `<LITELLM_URL>`: LiteLLM Proxy URL (e.g., `https://litellm.example.com`) if you already have one. You can also leave it blank and helm upgrade with this later.

!!! note "DX service discovery"
    The `internalHost` value must match your DX deployment type:
    - For **Web-Engine**: `http://dx-deployment-web-engine:9080`
    - For **Core**: `http://dx-deployment-core:10039`
    
    Adjust the hostname prefix if your DX release name differs from `dx-deployment`.

### Step 3: Install the IQ Backend Server

Run the Helm installation command:

```bash
helm install dx-iq \
  https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<IQ_HELM_CHART_VERSION>.tgz \
  --namespace <YOUR_NAMESPACE> \
  --values custom-iq-values.yaml \
  --set-json 'environment.pod.integrator=[
  {"name":"LITELLM_API_KEY","value":"<LITELLM_API_KEY>"},
  {"name":"DX_CONTEXT_ROOT","value":"<DX_CONTEXT_ROOT>"}
]'
```

Replace:
- `<IQ_HELM_CHART_VERSION>` with the Helm chart version (e.g., `hcl-dx-iq-v1.0.0_20260518-2104.tgz`)
- `<YOUR_NAMESPACE>` with your Kubernetes namespace
- `<LITELLM_API_KEY>` with your LiteLLM API key provided by your LiteLLM proxy administrator. You can also skip it if you do not have it yet and set it later via helm upgrade.
- `<DX_CONTEXT_ROOT>` with your known DX Deployment context root, for example: `/wps`
- `<YOUR_REPOSITORY_FQDN_AND_PATH>` with your Artifactory full-qualified domain name and path to the chart

Alternatively, you can specify values directly via command-line flags:

```bash
helm install dx-iq \
  https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<IQ_HELM_CHART_VERSION>.tgz \
  --namespace <YOUR_NAMESPACE> \
  --set images.repository="<YOUR_ARTIFACTORY>" \
  --set images.tags.integrator="<INTEGRATOR_IMAGE_TAG>" \
  --set images.tags.mcpServer="<MCP_SERVER_IMAGE_TAG>" \
  --set images.names.integrator="dx/dx-iq-integrator" \
  --set images.names.mcpServer="dx/dx-mcp-server" \
  --set configuration.dx.releaseName="<DX_RELEASE_NAME>" \
  --set configuration.dx.externalHost="<DX_EXTERNAL_FQDN>" \
  --set configuration.dx.internalHost="http://<DX_RELEASE_NAME>-core:10039" \
  --set configuration.litellm.liteLlmUrl="<LITELLM_URL>" \
  --set-json 'environment.pod.integrator=[
    {"name":"LITELLM_API_KEY","value":"<LITELLM_API_KEY>"},
    {"name":"DX_CONTEXT_ROOT","value":"<DX_CONTEXT_ROOT>"}
  ]'
```

### Step 4: Verify the Installation

1. **Check pod status:**

    ```bash
    kubectl get pods -n <YOUR_NAMESPACE> | grep dx-iq
    ```

    Expected output:

    ```
    dx-iq-integrator-xxxxxxxxxx-xxxxx       1/1     Running   0          2m
    dx-iq-mcp-server-xxxxxxxxxx-xxxxx       1/1     Running   0          2m
    ```

2. **Check deployment status:**

    ```bash
    kubectl get deployment -n <YOUR_NAMESPACE> | grep dx-iq
    ```

3. **View logs:**

    ```bash
    kubectl logs -n <YOUR_NAMESPACE> deployment/dx-iq-integrator
    kubectl logs -n <YOUR_NAMESPACE> deployment/dx-iq-mcp-server
    ```

## Helm Upgrade & Maintenance

### Upgrading IQ Backend Server

To upgrade the IQ backend server to a new version or modify configuration:

1. **List current deployment:**

    ```bash
    helm list -n <YOUR_NAMESPACE>
    ```

2. **Get current values:**

    ```bash
    helm get values dx-iq -n <YOUR_NAMESPACE>
    ```

3. **Upgrade with new chart version:**

    ```bash
    helm upgrade dx-iq \
      https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<NEW_IQ_HELM_CHART_VERSION>.tgz \
      --namespace <YOUR_NAMESPACE> \
      --reuse-values
    ```

4. **Upgrade with new configuration:**

    ```bash
    helm upgrade dx-iq \
      https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<NEW_IQ_HELM_CHART_VERSION>.tgz \
      --namespace <YOUR_NAMESPACE> \
      --reuse-values \
      --set images.tags.integrator="<NEW_INTEGRATOR_TAG>" \
      --set images.tags.mcpServer="<NEW_MCP_SERVER_TAG>"
    ```



### Uninstalling IQ Backend Server

To remove the IQ backend server:

```bash
helm uninstall dx-iq --namespace <YOUR_NAMESPACE>
```

Verify pods are terminated:

```bash
kubectl get pods -n <YOUR_NAMESPACE> | grep dx-iq
```

## Next Steps

After deploying the IQ services, follow the [Validating the IQ backend deployment](validation.md) guide to confirm pods are healthy and services are operational.

Then, optionally configure:
- **[Preparing the database](prepare-database.md)** — Recommended for production for conversation/session persistence
- **[Preparing the license and deployment key](prepare-license.md)** — If you have an HCL IQ subscription