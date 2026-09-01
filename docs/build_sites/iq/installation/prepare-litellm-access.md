# Preparing LiteLLM access

This section describes how to configure the IQ Integrator to authenticate with your LiteLLM proxy server using a static API key. This configuration allows the integration service to access your designated LLM providers and models.

## Prerequisites

Before configuring IQ to access LiteLLM:

- Deploy the [LiteLLM proxy server](deploy-litellm.md) and ensure the `iq-general-purpose` and `iq-summary` proxy models are configured.
- Deploy the [IQ Integrator and MCP Server services](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_deploy_iq_services.md).
- (Optional) If you require session persistence and multi-pod coordination, [prepare the PostgreSQL database](prepare-database.md).

## Using a static LiteLLM API key

The IQ Integrator uses the static LiteLLM API key to authenticate outgoing API requests sent to your LiteLLM proxy server. This key allows the integration service to access the configured LLM providers and models through the proxy.
To use this path, you must have the following components:

- A deployed and running LiteLLM proxy server
- Two configured proxy models (`iq-general-purpose` and `iq-summary`)
- A LiteLLM API key from your proxy administrator

Complete the following steps to configure and verify the static key:

1. Create the LiteLLM API key secret in your namespace. The IQ Integrator reads the key from a Kubernetes secret named `iq-litellm-api-secret`:

    ```bash
    kubectl create secret generic iq-litellm-api-secret \
      --from-literal=virtualKey="<YOUR_LITELLM_API_KEY>" \
      --namespace <DX_NAMESPACE>
    ```

    Replace `<YOUR_LITELLM_API_KEY>` with the key provided by your LiteLLM proxy administrator.

    If the secret already exists from a previous installation, delete the secret first and then recreate it:

    ```bash
    kubectl delete secret iq-litellm-api-secret -n <DX_NAMESPACE>
    kubectl create secret generic iq-litellm-api-secret \
      --from-literal=virtualKey="<YOUR_LITELLM_API_KEY>" \
      --namespace <DX_NAMESPACE>
    ```

2. Update your `custom-iq-values.yaml` file with the LiteLLM URL if you haven't already:

    In your `custom-iq-values.yaml` file (created in [Deploying IQ services](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_deploy_iq_services.md#preparing-configuration-values)), ensure the LiteLLM URL is set:

    ```yaml
    configuration:
      litellm:
        liteLlmUrl: "<YOUR_LITELLM_URL>"
    ```

    Replace `<YOUR_LITELLM_URL>` with the URL of your LiteLLM proxy server (for example, `https://litellm.example.com`). You can skip this step if you already set the URL during the initial installation of the IQ Integrator.

3. Upgrade the IQ deployment with your `custom-iq-values.yaml` file:

    ```bash
    helm upgrade dx-iq \
      https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<IQ_HELM_CHART_VERSION>.tgz \
      --namespace <DX_NAMESPACE> \
      -f custom-iq-values.yaml
    ```

4. Monitor the rollout status of the deployment:

    ```bash
    kubectl rollout status deployment/dx-iq-integrator -n <DX_NAMESPACE>
    ```

5. Check the logs for static key confirmation:

    ```bash
    kubectl logs -n <DX_NAMESPACE> deployment/dx-iq-integrator | grep -i "LITELLM_API_KEY configured statically"
    ```

6. Confirm that the output matches the following log entry:

    ```log
    [DeploymentKey] LITELLM_API_KEY configured statically, skipping KMS flow
    ```

    If you see this message, your static LiteLLM API key is correctly configured, and KMS flow was skipped.

7. Send a test message through the IQ chat interface to verify that you receive an AI-generated response without errors.

## Next steps

After configuring IQ Integrator authentication with your LiteLLM proxy server:

1. [Validate your deployment](validation.md).
2. [Enable and configure](../enable.md) the IQ assistant.

???+ info "Related information"
    - [Enabling IQ](../enable.md)
    - [IQ environment variables](environment-variables.md)
    - [Preparing the database](prepare-database.md)
    - [Troubleshooting - LiteLLM](../troubleshooting.md#litellm)
    - [Validating the deployment](validation.md)
