# Deploying services

This section provides step-by-step instructions for deploying the IQ backend servers, IQ Integrator and IQ Model Context Protocol (MCP) Server, alongside an existing container-based HCL Digital Experience (DX) deployment.

!!! note "Database and license configuration are optional"
    This procedure deploys the IQ services with persistence disabled (`database.enabled: false`) and uses a static LiteLLM key if configured.

## Understanding IQ services

Installing IQ requires two core components: the IQ Integrator and the IQ MCP Server.

### IQ Integrator

The IQ Integrator is a WebSocket-based service that connects your HCL DX deployment with your AI models. It functions as the answering engine that formats your DX data into LLM-readable context and passes AI-generated responses back to your user interface. This component performs the following actions:

- Receives natural language queries regarding your DX content and system configurations, then routes them to your configured large language model (LLM) through the LiteLLM proxy.
- Collects contextual information from your DX deployment to supply your LLM with precise, environment-specific details.
- Maintains your active WebSocket connections and retains short-term conversation histories for interactive Q&A sessions.
- Validates DX user credentials to ensure all active sessions remain secure.

### IQ MCP Server

The IQ MCP Server provides tool execution capabilities for your Web Content Management (WCM) and Digital Asset Management (DAM) operations. It acts as the action layer that allows your AI assistant to perform live operations within your DX environment when authorized users issue commands through the natural language interface. This component provides the following capabilities:

- Grants your LLM the ability to create, read, update, and delete content libraries, site areas, content templates, and presentation templates.
- Helps you search, filter, and retrieve digital assets.
- Connects to HCL DX using authenticated REST APIs that feature structured error handling and logging.
- Implements the open MCP specification, allowing your AI models to discover and invoke system tools uniformly.

## Deploying the IQ backend components

Deploy the IQ backend services by pulling the required images and charts, defining your environment configuration, and executing the Helm installation.

!!! tip "IQ environment variables"
    For a complete list of all configurable environment variables, their types, defaults, and acceptable values, refer to [IQ environment variables](environment-variables.md).

### Locating the latest Helm chart and images

Before beginning the installation, obtain the appropriate Helm chart versions and container image tags from your repository.

1. Find the available IQ Helm chart versions and the available IQ Integrator and MCP Server image tags from your repository (for example, in JFrog Artifactory):

    ```bash
    curl -u <USERNAME>:<TOKEN> "https://<YOUR_REPOSITORY_FQDN_AND_PATH>/"
    ```

    - `<USERNAME>` and `<TOKEN>`: Your repository credentials.
    - `<YOUR_REPOSITORY_FQDN_AND_PATH>`: The repository fully qualified domain name (FQDN) and path to the chart.

2. Identify your required image tags. The IQ deployment uses two container images:

    - Integrator Image: `dx-iq-integrator`
    - MCP Server Image: `dx-mcp-server`

### Preparing configuration values

Create a `custom-iq-values.yaml` file to define your deployment-specific configuration:

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
  # For web-engine use: http://<DX_RELEASE_NAME>-web-engine:9080
  dx:
    releaseName: "<DX_RELEASE_NAME>"
    externalHost: "<DX_EXTERNAL_FQDN>"
    internalHost: "http://<DX_RELEASE_NAME>-core:10039"
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

# CRITICAL: MCP Server list configuration
# Must match your Helm release name. Default points to 'dx-ai' release.
# If your release name is different (for example, 'dx-iq'), update accordingly.
# Format: http://<IQ_RELEASE_NAME>-mcp-server:<PORT>
environment:
  pod:
    integrator:
      - name: "MCP_SERVER_LIST"
        value: "http://<IQ_RELEASE_NAME>-mcp-server:3000"
```

- `<YOUR_ARTIFACTORY>`: The container image registry (for example, `myregistry.example.com`).
- `<INTEGRATOR_IMAGE_TAG>`: The tag for the `dx-iq-integrator` image.
- `<MCP_SERVER_IMAGE_TAG>`: The tag for the `dx-mcp-server` image.
- `images.names`: The image names within the repository. The default values shown match standard HCL image paths. Update these only if your registry uses a different path structure.
- `<DX_RELEASE_NAME>`: The Helm release name of your DX deployment (for example, `dx-deployment`)
- `<DX_EXTERNAL_FQDN>`: The external DX hostname used by the LLM for gathering context (for example, `dx.example.com`)
- `<LITELLM_URL>`: The LiteLLM Proxy URL (for example, `https://litellm.example.com`) for operational deployments.
- `<IQ_RELEASE_NAME>`: The Helm release name used to install the IQ chart. Ensure this value matches your deployment's release name. For example, if you installed the chart using `helm install dx-iq`, set this value to `dx-iq-mcp-server`. The `defaults.json` file uses `dx-ai-mcp-server` by default, so you must override this value during installation.

!!! note "DX service discovery"
    Ensure the `internalHost` value matches your DX deployment type:

      - For Web-Engine: `http://dx-deployment-web-engine:9080`
      - For Core: `http://dx-deployment-core:10039`

    Adjust the hostname prefix if your DX release name differs from `dx-deployment`.

### Installing the IQ backend server

Run the Helm installation command to deploy the IQ backend server:

```bash
helm install dx-iq \
  https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<IQ_HELM_CHART_VERSION>.tgz \
  --namespace <YOUR_NAMESPACE> \
  --values custom-iq-values.yaml \
  --set-json 'environment.pod.integrator=[
  {"name":"LITELLM_API_KEY","value":"<LITELLM_API_KEY>"},
  {"name":"LITELLM_URL","value":"<LITELLM_URL>"},
  {"name":"DX_CONTEXT_ROOT","value":"<DX_CONTEXT_ROOT>"},
  {"name":"MCP_SERVER_LIST","value":"http://dx-iq-mcp-server:3000"}
]'
```

!!! warning "Release name must match MCP_SERVER_LIST"
    The `MCP_SERVER_LIST` environment variable must reference the MCP Server deployment associated with your release name. Use your release name as the prefix for the MCP server host name. For example, if you set `<IQ_RELEASE_NAME>` to `my-iq`, the host name must be `http://my-iq-mcp-server:3000`. Incorrect values will cause the Integrator pod to fail health checks and enter a `CrashLoopBackOff` state.

- `<IQ_HELM_CHART_VERSION>`: The Helm chart version (for example, `hcl-dx-iq-v1.0.0_20260518-2104.tgz`).
- `<YOUR_NAMESPACE>`: The target Kubernetes namespace.
- `<LITELLM_API_KEY>`: The LiteLLM API key provided by the LiteLLM proxy administrator to enable Integrator functionality.
- `<LITELLM_URL>`: The LiteLLM proxy URL provided by the LiteLLM proxy administrator to enable Integrator functionality.
- `<DX_CONTEXT_ROOT>`: The DX deployment context root (for example, `/wps`).
- `<YOUR_REPOSITORY_FQDN_AND_PATH>`: The complete repository FQDN and path to the chart.

!!! warning "LITELLM_API_KEY and LITELLM_URL are required"
    Although the helm install command completes successfully without these values, the Integrator and MCP Server pods do not enter a `Ready` state. Health checks fail and services remain non-operational.

    - For production deployments, provide both `LITELLM_API_KEY` and `LITELLM_URL` during the initial installation.
    - For deferred configuration, set `maintenanceMode.integrator: true` in the values file. This setting allows pods to start but keeps services non-functional. Update both values and run a `helm upgrade` after the LiteLLM proxy is ready.

Alternatively, specify configuration values directly by using command-line flags:

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
    {"name":"DX_CONTEXT_ROOT","value":"<DX_CONTEXT_ROOT>"},
    {"name":"MCP_SERVER_LIST","value":"http://dx-iq-mcp-server:3000"}
  ]'
```

### Verifying the deployment

Follow these steps to verify the pods, deployments, and logs. Replace `<YOUR_NAMESPACE>` in each command with the target Kubernetes namespace.

1. Run the following command to verify that the IQ backend pods are running:

    ```bash
    kubectl get pods -n <YOUR_NAMESPACE> | grep dx-iq
    ```

    The output must show both the Integrator and MCP Server pods with a status of `Running` and a `READY` count of `1/1`:

    ```text
    NAME                                 READY   STATUS    RESTARTS   AGE
    dx-iq-integrator-67bf98c9d8-abc12    1/1     Running   0          2m
    dx-mcp-server-54cd76d8b9-xyz34       1/1     Running   0          2m
    ```

2. Verify the readiness of the underlying Kubernetes deployments. The output must display the deployments as fully available and matching the desired replica count.

    ```bash
    kubectl get deployment -n <YOUR_NAMESPACE> | grep dx-iq
    ```

3. If the pods do not become `Ready`, fetch the container logs to check for configuration errors or connectivity issues with the LiteLLM proxy:

    ```bash
    kubectl logs -n <YOUR_NAMESPACE> deployment/dx-iq-integrator
    kubectl logs -n <YOUR_NAMESPACE> deployment/dx-iq-mcp-server
    ```

    To resolve Integrator pod startup issues, refer to [Troubleshooting - Backend services](../troubleshooting.md#backend-services).

## Upgrading and maintaining the IQ backend components

Upgrade and maintain the IQ backend services by listing current deployments, retrieving active configuration values, and executing the Helm upgrade. Replace `<YOUR_NAMESPACE>` in each command with the target Kubernetes namespace.

1. List the current deployments within the namespace:

    ```bash
    helm list -n <YOUR_NAMESPACE>
    ```

2. Retrieve the active configuration values for the deployment:

    ```bash
    helm get values dx-iq -n <YOUR_NAMESPACE>
    ```

3. Run the upgrade command with the path to the new chart version. The `--reuse-values` flag maintains the existing configuration options:

    ```bash
    helm upgrade dx-iq \
      https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<NEW_IQ_HELM_CHART_VERSION>.tgz \
      --namespace <YOUR_NAMESPACE> \
      --reuse-values
    ```

4. Run the upgrade command with the `--set` flag to update the container image tags:

    ```bash
    helm upgrade dx-iq \
      https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<NEW_IQ_HELM_CHART_VERSION>.tgz \
      --namespace <YOUR_NAMESPACE> \
      --reuse-values \
      --set images.tags.integrator="<NEW_INTEGRATOR_TAG>" \
      --set images.tags.mcpServer="<NEW_MCP_SERVER_TAG>"
    ```

## Uninstalling the IQ backend server

To remove the IQ backend server and verify the component cleanup, complete the following steps. Replace `<YOUR_NAMESPACE>` in each command with the target Kubernetes namespace.

1. Remove the Helm deployment from the namespace:

    ```bash
    helm uninstall dx-iq --namespace <YOUR_NAMESPACE>
    ```

2. Verify that the associated pods are completely terminated:

    ```bash
    kubectl get pods -n <YOUR_NAMESPACE> | grep dx-iq
    ```

???+ info "Related information"
    - [IQ environment variables](environment-variables.md)
    - [Preparing the database](prepare-database.md)
    - [Troubleshooting - Backend services](../troubleshooting.md#backend-services)
