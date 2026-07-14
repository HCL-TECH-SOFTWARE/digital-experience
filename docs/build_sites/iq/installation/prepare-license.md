# Preparing the license and deployment key

**Prerequisites**:
- **Previous step**: [Deploying services](deploy-services.md) (required)
- **Recommended but not required**: [Preparing the database](prepare-database.md) — Enables Deployment Key token persistence and multi-pod coordination. If you have a static `LITELLM_API_KEY` instead, database is still optional for your deployment, but still recommended for conversation/session persistence.

This guide covers the current approach to LiteLLM API key management:

**Quick Start**: Use a static `LITELLM_API_KEY` with your own LiteLLM proxy server

---

## Quick Start: Using a Static LiteLLM API Key

If you already have:
- Your own LiteLLM proxy server deployed and running
- Two proxy models configured (`iq-general-purpose` and `iq-summary`)
- A LiteLLM API key from your proxy administrator

Then use this quick path:

### Step 1: Create the LiteLLM API Key Secret

The IQ Integrator reads the LiteLLM API key from a Kubernetes secret named `iq-litellm-api-secret`. Create it in your namespace:

```bash
kubectl create secret generic iq-litellm-api-secret \
  --from-literal=virtualKey="<YOUR_LITELLM_API_KEY>" \
  --namespace <DX_NAMESPACE>
```

Replace `<YOUR_LITELLM_API_KEY>` with the key provided by your LiteLLM proxy administrator.

!!! tip "Updating an existing secret"
    If the secret already exists from a previous installation, delete it first then recreate it:

    ```bash
    kubectl delete secret iq-litellm-api-secret -n <DX_NAMESPACE>
    kubectl create secret generic iq-litellm-api-secret \
      --from-literal=virtualKey="<YOUR_LITELLM_API_KEY>" \
      --namespace <DX_NAMESPACE>
    ```

### Step 2: Upgrade Your IQ Deployment

```bash
helm upgrade dx-iq \
  https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<IQ_HELM_CHART_VERSION>.tgz \
  --namespace <DX_NAMESPACE> \
  --reuse-values \
  --set configuration.litellm.liteLlmUrl="<YOUR_LITELLM_URL>"
```

Replace `<YOUR_LITELLM_URL>` with the URL of your LiteLLM proxy server. You may omit this flag if you already set it during the initial IQ install.

Wait for the pod to restart:

```bash
kubectl rollout status deployment/dx-iq-integrator -n <DX_NAMESPACE>
```

### Step 3: Verify the Configuration

1. **Check the logs for static key confirmation:**

   ```bash
   kubectl logs -n <DX_NAMESPACE> deployment/dx-iq-integrator | grep -i "LITELLM_API_KEY configured statically"
   ```

   Expected output:
   ```
   [DeploymentKey] LITELLM_API_KEY configured statically, skipping KMS flow
   ```

   If you see this message, your static LiteLLM API key is correctly configured, and KMS flow was skipped.

2. **Send a test message through the IQ chat interface:**

   If you receive an AI-generated response (not an error), your LiteLLM API key is working correctly with your LiteLLM proxy.

### Done!

You're all set. The IQ Integrator will use your static key for all LLM requests.
- [Configure a database for conversation persistence](prepare-database.md) if not yet completed. 
