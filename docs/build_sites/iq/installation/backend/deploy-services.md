# Deploying services

This section provides step-by-step instructions for deploying the IQ backend server alongside an existing HCL DX deployment.

### Step 1: Locate the Latest Helm Chart and Images

1. **Find available IQ Helm chart versions:**

    ```bash
    curl -u <USERNAME>:<TOKEN> \
      "https://artifactory.cwp.pnp-hcl.com/artifactory/api/storage/quintana-helm/hcl-dx-iq/"
    ```

    Replace `<USERNAME>` and `<TOKEN>` with your Artifactory credentials.

2. **Identify the image tags:**

    The IQ deployment uses two container images:
    - **Integrator Image:** `dx-iq-integrator`
    - **MCP Server Image:** `dx-mcp-server`

    Image tags are typically based on branch names (`develop`, `master`, `release`) or specific version numbers.

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
  # DX host configuration
  dx:
    host: "<DX_HOSTNAME>"
  
  # Database configuration (see Preparation Steps for details)
  database:
    enabled: true
    dbHost: "<DATABASE_HOST>"
    dbPort: 5432
    dbName: "iqdb"
    dbCustomSecret: "<DB_SECRET_NAME>"
  
  # MCP Server configuration
  mcpServer:
    standaloneMode: "false"
    enableWcm: "true"
    enableDam: "true"
  
  # LiteLLM configuration (optional)
  litellm:
    liteLlmUrl: "<LITELLM_URL>"

# Environment variables for integrator pod
environment:
  pod:
    integrator:
      - name: "DX_HOST"
        value: "http://<DX_SERVICE_NAME>:<DX_SERVICE_PORT>"
      - name: "DX_CONTEXT_ROOT"
        value: "/<CONTEXT_ROOT_PATH>"
      - name: "LITELLM_API_KEY"
        valueFrom:
          secretKeyRef:
            name: "<LITELLM_SECRET_NAME>"
            key: "api-key"
```

Replace placeholders with your environment-specific values:

- `<INTEGRATOR_IMAGE_TAG>`: Tag for the dx-iq-integrator image
- `<MCP_SERVER_IMAGE_TAG>`: Tag for the dx-mcp-server image
- `<DX_HOSTNAME>`: Your DX deployment hostname
- `<DATABASE_HOST>`: PostgreSQL database hostname
- `<DB_SECRET_NAME>`: Name of the Kubernetes secret containing database credentials
- `<LITELLM_URL>`: LiteLLM service URL (if applicable)
- `<DX_SERVICE_NAME>`: DX Core service name (e.g., `dx-deployment-web-engine` or `dx-deployment-core`)
- `<DX_SERVICE_PORT>`: DX Core service port (e.g., `9080` for web-engine, `10039` for core)
- `<CONTEXT_ROOT_PATH>`: DX context root path (e.g., `wps`)
- `<LITELLM_SECRET_NAME>`: Name of the secret containing LiteLLM API key

!!! note "Auto-detecting DX service configuration"
    The deployment automatically detects whether you're using web-engine or core deployment based on the `DISABLE_CORE_OPENLIBERTY` setting. If not specified:
    - Web-engine deployments use: `dx-deployment-web-engine:9080`
    - Core deployments use: `dx-deployment-core:10039`

### Step 3: Install the IQ Backend Server

Run the Helm installation command:

```bash
helm install dx-ai \
  https://artifactory.cwp.pnp-hcl.com/artifactory/quintana-helm/hcl-dx-iq/<HELM_CHART_VERSION>.tgz \
  --namespace <YOUR_NAMESPACE> \
  --values custom-iq-values.yaml
```

Replace:
- `<HELM_CHART_VERSION>` with the Helm chart version (e.g., `hcl-dx-iq-v1.0.0_20260518-2104.tgz`)
- `<YOUR_NAMESPACE>` with your Kubernetes namespace

Alternatively, you can specify values directly via command-line flags:

```bash
helm install dx-ai \
  https://artifactory.cwp.pnp-hcl.com/artifactory/quintana-helm/hcl-dx-iq/<HELM_CHART_VERSION>.tgz \
  --namespace <YOUR_NAMESPACE> \
  --set images.tags.integrator="<INTEGRATOR_TAG>" \
  --set images.tags.mcpServer="<MCP_SERVER_TAG>" \
  --set configuration.dx.host="<DX_HOSTNAME>" \
  --set configuration.database.enabled=true \
  --set configuration.database.dbHost="<DATABASE_HOST>" \
  --set configuration.database.dbPort=5432 \
  --set configuration.database.dbName="iqdb" \
  --set configuration.database.dbCustomSecret="<DB_SECRET_NAME>" \
  --set configuration.mcpServer.standaloneMode="false" \
  --set configuration.mcpServer.enableWcm="true" \
  --set configuration.mcpServer.enableDam="true"
```

### Step 4: Verify the Installation

1. **Check pod status:**

    ```bash
    kubectl get pods -n <YOUR_NAMESPACE> | grep dx-ai
    ```

    Expected output:

    ```
    dx-ai-integrator-xxxxxxxxxx-xxxxx       1/1     Running   0          2m
    dx-ai-mcp-server-xxxxxxxxxx-xxxxx       1/1     Running   0          2m
    ```

2. **Check deployment status:**

    ```bash
    kubectl get deployment -n <YOUR_NAMESPACE> | grep dx-ai
    ```

3. **View logs:**

    ```bash
    kubectl logs -n <YOUR_NAMESPACE> deployment/dx-ai-integrator
    kubectl logs -n <YOUR_NAMESPACE> deployment/dx-ai-mcp-server
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
    helm get values dx-ai -n <YOUR_NAMESPACE>
    ```

3. **Upgrade with new chart version:**

    ```bash
    helm upgrade dx-ai \
      https://artifactory.cwp.pnp-hcl.com/artifactory/quintana-helm/hcl-dx-iq/<NEW_HELM_CHART_VERSION>.tgz \
      --namespace <YOUR_NAMESPACE> \
      --reuse-values
    ```

4. **Upgrade with new configuration:**

    ```bash
    helm upgrade dx-ai \
      https://artifactory.cwp.pnp-hcl.com/artifactory/quintana-helm/hcl-dx-iq/<HELM_CHART_VERSION>.tgz \
      --namespace <YOUR_NAMESPACE> \
      --reuse-values \
      --set images.tags.integrator="<NEW_INTEGRATOR_TAG>" \
      --set images.tags.mcpServer="<NEW_MCP_SERVER_TAG>"
    ```

### Applying Environment Variable Overrides

To update environment variables without changing other configuration:

```bash
helm upgrade dx-ai \
  https://artifactory.cwp.pnp-hcl.com/artifactory/quintana-helm/hcl-dx-iq/<HELM_CHART_VERSION>.tgz \
  --namespace <YOUR_NAMESPACE> \
  --reuse-values \
  --set-json 'environment.pod.integrator=[
    {"name":"DX_HOST","value":"http://<NEW_DX_SERVICE>:<PORT>"},
    {"name":"DX_CONTEXT_ROOT","value":"/<NEW_CONTEXT_ROOT>"}
  ]'
```

### Uninstalling IQ Backend Server

To remove the IQ backend server:

```bash
helm uninstall dx-ai --namespace <YOUR_NAMESPACE>
```

Verify pods are terminated:

```bash
kubectl get pods -n <YOUR_NAMESPACE> | grep dx-ai
```