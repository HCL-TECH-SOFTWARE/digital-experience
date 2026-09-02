# Deploying IQ services

This section provides step-by-step instructions for deploying the IQ backend servers, IQ Integrator and IQ Model Context Protocol (MCP) Server, alongside an existing container-based HCL Digital Experience (DX) deployment. For a complete overview of IQ capabilities, architecture, and concepts, refer to the [IQ documentation](../../../../../../build_sites/iq/index.md).

!!! note "Database and license configuration are optional at first but recommended for production"
    This procedure deploys the IQ services with persistence disabled (`database.enabled: false`) and uses a static LiteLLM key if configured.

## Prerequisites

Before installing the IQ backend server, deploy the LiteLLM service to configure the required proxy models (`iq-general-purpose` and `iq-summary`). For more information, refer to [Deploying LiteLLM](../../../../../../build_sites/iq/installation/deploy-litellm.md).

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

- Grants your LLM the ability to create, read, update, and delete DX resources including but not limited to content libraries, site areas, content templates, and presentation templates.
- Helps you search, filter, and retrieve digital assets.
- Connects to HCL DX using authenticated REST APIs that feature structured error handling and logging.
- Implements the open MCP specification, allowing your AI models to discover and invoke system tools uniformly.

## Deploying the IQ backend components

Deploy the IQ backend services by pulling the required images and charts, defining your environment configuration, and executing the Helm installation.

!!! tip "IQ environment variables"
    For a complete list of all configurable environment variables, their types, defaults, and acceptable values, refer to [IQ environment variables](../../../../../../build_sites/iq/installation/environment-variables.md).

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

Create a `custom-iq-values.yaml` file to define your deployment-specific configuration. This file is your **single source of truth** for all IQ configuration and should be used for both initial installation and all future upgrades.

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

# Environment variables configuration
environment:
  pod:
    integrator:
      # CRITICAL: LiteLLM authentication
      - name: "LITELLM_API_KEY"
        value: "<LITELLM_API_KEY>"
      - name: "LITELLM_URL"
        value: "<LITELLM_URL>"
      
      # DX context root
      - name: "DX_CONTEXT_ROOT"
        value: "/wps"
      
      # CRITICAL: MCP Server list configuration
      # Must match your Helm release name. Default points to 'dx-ai' release.
      # If your release name is different (for example, 'dx-iq'), update accordingly.
      # Format: http://<IQ_RELEASE_NAME>-mcp-server:<PORT>
      - name: "MCP_SERVER_LIST"
        value: "http://<IQ_RELEASE_NAME>-mcp-server:3000"
      
      # Optional: LLM model parameters (uncomment and adjust if your model requires specific values)
      # - name: "LLM_MAX_TOKENS"
      #   value: "16384"
      # - name: "LLM_TEMPERATURE"
      #   value: "1"
```

- `<YOUR_ARTIFACTORY>`: The container image registry (for example, `myregistry.example.com`).
- `<INTEGRATOR_IMAGE_TAG>`: The tag for the `dx-iq-integrator` image.
- `<MCP_SERVER_IMAGE_TAG>`: The tag for the `dx-mcp-server` image.
- `images.names`: The image names within the repository. The default values shown match standard HCL image paths. Update these only if your registry uses a different path structure.
- `<DX_RELEASE_NAME>`: The Helm release name of your DX deployment (for example, `dx-deployment`)
- `<DX_EXTERNAL_FQDN>`: The external DX hostname used by the LLM for gathering context (for example, `dx.example.com`)
- `<LITELLM_API_KEY>`: The LiteLLM API key provided by the LiteLLM proxy administrator to enable Integrator functionality.
- `<LITELLM_URL>`: The LiteLLM Proxy URL (for example, `https://litellm.example.com`) for operational deployments.
- `<IQ_RELEASE_NAME>`: The Helm release name used to install the IQ chart. Ensure this value matches your deployment's release name. For example, if you installed the chart using `helm install dx-iq`, set this value to `dx-iq-mcp-server`. The `defaults.json` file uses `dx-ai-mcp-server` by default, so you must override this value during installation.
- `DX_CONTEXT_ROOT`: The DX deployment context root (for example, `/wps`). Update this if your DX deployment uses a different context root.
- `LLM_MAX_TOKENS` (optional): Specifies the maximum number of tokens for LLM completion responses. Only required if your chosen LLM model enforces strict token limits (for example, `16384`, `8192`, `4096`).
- `LLM_TEMPERATURE` (optional): Controls randomness in LLM responses. Only required if your chosen LLM model enforces specific temperature values (for example, `0.7`, `1.0`, or `0`).

!!! note "DX service discovery"
    Ensure the `internalHost` value matches your DX deployment type:

      - For Web-Engine: `http://dx-deployment-web-engine:9080`
      - For Core: `http://dx-deployment-core:10039`

    Adjust the hostname prefix if your DX release name differs from `dx-deployment`.

!!! tip "Configuration management best practice"
    Keep your `custom-iq-values.yaml` file in version control and use it for all deployments and upgrades. Never use `--reuse-values` or scattered `--set` flags in production, as they can cause configuration drift and make your deployment state difficult to audit.

### Installing the IQ backend server

Run the Helm installation command to deploy the IQ backend server:

!!!note
    To configure optional token limits or temperature parameters for specific models, refer to [Configuring LLM model parameters](#configuring-llm-model-parameters).

```bash
helm install dx-iq \
  https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<IQ_HELM_CHART_VERSION>.tgz \
  --namespace <YOUR_NAMESPACE> \
  -f custom-iq-values.yaml
```

!!! tip "Alternative: Using --set-json for initial installation"
    If you prefer to provide sensitive values (like `LITELLM_API_KEY`) via command-line flags during initial installation rather than storing them in the values file, you can use:
    
    ```bash
    helm install dx-iq \
      https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<IQ_HELM_CHART_VERSION>.tgz \
      --namespace <YOUR_NAMESPACE> \
      -f custom-iq-values.yaml \
      --set-json 'environment.pod.integrator=[
      {"name":"LITELLM_API_KEY","value":"<LITELLM_API_KEY>"},
      {"name":"LITELLM_URL","value":"<LITELLM_URL>"}
    ]'
    ```
    
    However, for all future upgrades, always use `-f custom-iq-values.yaml` without any --set flags.

!!! warning "Release name must match MCP_SERVER_LIST"
    The `MCP_SERVER_LIST` environment variable must reference the MCP Server deployment associated with your release name. Use your release name as the prefix for the MCP Server host name. For example, if you set `<IQ_RELEASE_NAME>` to `my-iq`, the host name must be `http://my-iq-mcp-server:3000`. Incorrect values cause the Integrator pod to fail health checks and enter a `CrashLoopBackOff` state.

!!! warning "LITELLM_API_KEY and LITELLM_URL are required"
    While the `helm install` command completes successfully without the `LITELLM_API_KEY` and `LITELLM_URL`, the Integrator and MCP Server pods do not enter a `Ready` state. Health checks fail and services remain non-operational.

    - For production deployments, provide both `LITELLM_API_KEY` and `LITELLM_URL` during the initial installation.
    - For deferred configuration, set `maintenanceMode.integrator` to `true` in the values file. This setting allows pods to start but keeps services non-functional. Update both values and run a `helm upgrade` after the LiteLLM proxy is ready.

#### Configuring LLM model parameters

If your chosen LLM models have specific constraints on token limits or temperature parameters, add the following environment variables to your `custom-iq-values.yaml` file in the `environment.pod.integrator` section:

- `LLM_MAX_TOKENS`: Specifies the maximum number of tokens for LLM completion responses. Must match or be less than your model's maximum (for example, `16384`, `8192`, `4096`).
- `LLM_TEMPERATURE`: Controls randomness in LLM responses. Some models enforce specific values (for example, `0.7`, `1.0`, or `0`).

For example, if you are using an AWS Bedrock Claude model that requires a maximum token limit of `16384` and a temperature of `1`, add these lines to your `custom-iq-values.yaml` file:

```yaml
environment:
  pod:
    integrator:
      # ... existing configuration ...
      - name: "LLM_MAX_TOKENS"
        value: "16384"
      - name: "LLM_TEMPERATURE"
        value: "1"
```

Then run the helm install or upgrade command with your updated values file:

```bash
helm install dx-iq <chart> -f custom-iq-values.yaml
# or
helm upgrade dx-iq <chart> -f custom-iq-values.yaml
```

For configuration details, refer to [IQ environment variables - LiteLLM](../../../../../../build_sites/iq/installation/environment-variables.md#litellm).

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

    To resolve Integrator pod startup issues, refer to [Troubleshooting - Backend services](../../../../../../build_sites/iq/troubleshooting.md#backend-services).

## Upgrading and maintaining the IQ backend components

Upgrade and maintain the IQ backend services by updating your configuration values file and executing the Helm upgrade. Replace `<YOUR_NAMESPACE>` in each command with the target Kubernetes namespace.

1. List the current deployments within the namespace:

    ```bash
    helm list -n <YOUR_NAMESPACE>
    ```

2. Update your `custom-iq-values.yaml` file with any configuration changes needed for the upgrade (for example, new image tags, environment variables, or database settings).

3. Run the upgrade command with the path to the new chart version and your updated values file:

    ```bash
    helm upgrade dx-iq \
      https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<NEW_IQ_HELM_CHART_VERSION>.tgz \
      --namespace <YOUR_NAMESPACE> \
      -f custom-iq-values.yaml
    ```

    - `<YOUR_REPOSITORY_FQDN_AND_PATH>`: The repository fully qualified domain name (FQDN) and path to the chart.
    - `<NEW_IQ_HELM_CHART_VERSION>`: The new Helm chart version (for example, `hcl-dx-iq-v1.0.1_20260601-1234.tgz`).

!!! tip "Updating image tags"
    To update the IQ Integrator or MCP Server image tags, edit the `images.tags.integrator` and `images.tags.mcpServer` values in your `custom-iq-values.yaml` file, then run the upgrade command above. This approach maintains a complete, auditable record of your configuration in version control.

## Configuration management best practices

To ensure reliable, auditable, and reproducible IQ deployments, follow these best practices when managing your IQ configuration:

### Use a custom values file as your single source of truth

Your `custom-iq-values.yaml` file should contain all configuration for your IQ deployment. This approach provides:

- **Auditability**: All configuration changes are tracked in version control
- **Reproducibility**: Deployments are consistent and predictable
- **Drift prevention**: Configuration remains stable across upgrades
- **Visibility**: Complete understanding of your deployment state

### Never use `--reuse-values` in production

The `--reuse-values` flag preserves old values from previous deployments that may not be in your `custom-iq-values.yaml` file. This causes configuration drift and makes your deployment state difficult to audit. Always use `-f custom-iq-values.yaml` instead.

### Never use scattered `--set` flags in production

Using multiple `--set` flags for configuration makes it difficult to:

- Track what configuration is actually deployed
- Reproduce deployments consistently
- Maintain configuration in version control
- Understand the complete deployment state

Always update your `custom-iq-values.yaml` file and use `-f custom-iq-values.yaml` instead.

### Recommended upgrade workflow

For any IQ upgrade or configuration change:

1. Update your `custom-iq-values.yaml` file with the required changes
2. Commit the changes to version control
3. Run: `helm upgrade dx-iq <chart> -f custom-iq-values.yaml`
4. Verify the deployment with `kubectl get pods` and `kubectl logs`

### When `--set` flags are acceptable

`--set` flags are only acceptable for:

- Temporary testing or debugging in non-production environments
- Quick validation of configuration changes before committing to your values file

Never use `--set` flags for production deployments.

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

## Next step

After deploying the IQ backend services, [configure the MCP Server](../../../../../../build_sites/iq/installation/configuring-mcp.md).

???+ info "Related information"
    - [Configuring the MCP Server](../../../../../../build_sites/iq/installation/configuring-mcp.md)
    - [IQ environment variables](../../../../../../build_sites/iq/installation/environment-variables.md)
    - [Preparing the database](../../../../../../build_sites/iq/installation/prepare-database.md)
    - [Troubleshooting - Backend services](../../../../../../build_sites/iq/troubleshooting.md#backend-services)
