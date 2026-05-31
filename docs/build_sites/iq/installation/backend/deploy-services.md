# Deploying services

This section provides step-by-step instructions for deploying the IQ backend server alongside an existing HCL DX deployment.

!!! note "Database and License Configuration are Optional"
    This deployment deploys the IQ services with persistence disabled (`database.enabled: false`) and uses a static LiteLLM key if configured. You can validate that the Integrator and MCP Server containers are healthy and operational immediately. After confirming services are running, you have two optional next steps.

**[Preparing the database](prepare-database.md)** — Recommended for production. Enables conversation persistence, session storage, and safe multi-pod coordination for Deployment Key token management.

**[Preparing the license and deployment key](prepare-license.md)** — If you have an HCL IQ subscription and want automated, entitlement-based LiteLLM key management instead of static keys.

### Step 1: Locate the Latest Helm Chart and Images

1. **Find available IQ Helm chart versions from your artifactory:**

    ```bash
    curl -u username:token "https://<YOUR_REPOSITORY_FQDN_AND_PATH>/"
    ```

    Replace `<USERNAME>` and `<TOKEN>` with your Artifactory credentials.

2. **Identify the image tags:**

    The IQ deployment uses two container images:
    - **Integrator Image:** `dx-iq-integrator`
    - **MCP Server Image:** `dx-mcp-server`

### Step 2: Prepare Configuration Values

Create a `custom-iq-values.yaml` file with your deployment-specific configuration:

```yaml
# Image configuration
images:
  tags:
    integrator: "<INTEGRATOR_IMAGE_TAG>"
    mcpServer: "<MCP_SERVER_IMAGE_TAG>"

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
    standaloneMode: "false"
    enableWcm: "true"
    enableDam: "true"
  
  # LiteLLM Proxy configuration
  litellm:
    liteLlmUrl: "<LITELLM_URL>"
```

Replace placeholders with your environment-specific values:

- `<INTEGRATOR_IMAGE_TAG>`: Tag for the dx-iq-integrator image
- `<MCP_SERVER_IMAGE_TAG>`: Tag for the dx-mcp-server image
- `<DX_RELEASE_NAME>`: The Helm release name of your DX deployment (e.g., `dx-deployment`)
- `<DX_EXTERNAL_FQDN>`: Your DX external hostname used by the LLM for context (e.g., `dx.example.com`)
- `<LITELLM_URL>`: LiteLLM Proxy URL (e.g., `https://litellm.example.com`)

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
  --values custom-iq-values.yaml
```

Replace:
- `<IQ_HELM_CHART_VERSION>` with the Helm chart version (e.g., `hcl-dx-iq-v1.0.0_20260518-2104.tgz`)
- `<YOUR_NAMESPACE>` with your Kubernetes namespace

Alternatively, you can specify values directly via command-line flags:

```bash
helm install dx-iq \
  https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<IQ_HELM_CHART_VERSION>.tgz \
  --namespace <YOUR_NAMESPACE> \
  --set images.tags.integrator="<INTEGRATOR_TAG>" \
  --set images.tags.mcpServer="<MCP_SERVER_TAG>" \
  --set configuration.dx.releaseName="<DX_RELEASE_NAME>" \
  --set configuration.dx.externalHost="<DX_EXTERNAL_FQDN>" \
  --set configuration.litellm.liteLlmUrl="<LITELLM_URL>"
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