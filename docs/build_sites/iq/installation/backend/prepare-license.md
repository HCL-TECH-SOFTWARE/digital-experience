# Preparing the license and deployment key

**Prerequisites**:
- **Previous step**: [Deploying services](deploy-services.md) (required)
- **Recommended but not required**: [Preparing the database](prepare-database.md) — Enables Deployment Key token persistence and multi-pod coordination. If you have a static `LITELLM_API_KEY` instead, database is still optional for your deployment, but still recommended for conversation/session persistence.

This guide covers two approaches to LiteLLM API key management:

1. **Quick Start**: Use a static `LITELLM_API_KEY` with your own LiteLLM proxy server (available to all customers)
2. **Deployment Key Flow**: Automated LiteLLM API key acquisition for HCL IQ subscription customers (requires KMS endpoint availability)

This section guides you through both approaches. Choose the Quick Start for immediate testing, or follow the full Deployment Key flow to enable automated, entitlement-based LiteLLM key management.

**Existing deployments with a static `LITELLM_API_KEY` are completely unaffected** — the deployment key flow is only used when no static key is configured.

!!! important "KMS Endpoint Required"
    The Deployment Key flow requires access to the HCL Key Management Service (KMS) endpoint. **This feature will be available once HCL provisions and shares the KMS endpoint with your organization.** Until then, continue using a static `LITELLM_API_KEY` for LLM integration.

---

## Quick Start: Using a Static LiteLLM API Key

If you already have:
- Your own LiteLLM proxy server deployed and running
- Two proxy models configured (`iq-general-purpose` and `iq-summary`)
- A LiteLLM API key from your proxy administrator

Then skip the Deployment Key flow entirely and use this quick path:

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

1. **Check the deployment key logs for static key confirmation:**

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

You're all set. The IQ Integrator will use your static key for all LLM requests. **You do not need to proceed with the rest of this document** unless you want to:
- Add automated Deployment Key management once the KMS endpoint is available
- Configure a database for conversation persistence

---

## Introduction

### What is a Deployment Key?

A Deployment Key is a credential issued by HCL Software via My HCLSoftware (MHS) that proves your entitlement to use HCL IQ. Instead of manually managing a static LiteLLM API key, the IQ Integrator uses your Deployment Key to automatically acquire a fresh LiteLLM key at startup.

### How the Deployment Key Flow Works

1. **At startup**: The IQ Integrator reads your Deployment Key from the Helm values (bootstrap)
2. **First initialization**: The key is stored in the IQ persistence database (`deployments` table)
3. **Token acquisition**: The Integrator calls the Key Management Service (KMS) with your Deployment Key to obtain a short-lived access token
4. **Key retrieval**: Using the access token, the Integrator retrieves a LiteLLM API key from KMS
5. **On pod restart**: The Integrator reads the stored access token from the database and re-uses it (no need to re-authenticate unless the token expires)

### When to Use This Approach

Use the Deployment Key approach if:
- You purchased HCL IQ through the standard entitlement flow (via My HCLSoftware)
- You want automated, entitlement-based LiteLLM key management
- You prefer not to manually rotate static API keys
- You have (or will configure) a database backend for token persistence and multi-pod safety

Use a static `LITELLM_API_KEY` instead if:
- You already have a static LiteLLM API key from your LiteLLM proxy administrator
- You prefer manual key management

!!! note "Database is optional for static keys, recommended for production"
    If you use a static `LITELLM_API_KEY`, you do not need a database for LiteLLM key management. However, a database is **still recommended** for production deployments to preserve conversations and sessions across pod restarts. Go back to [Preparing the database](prepare-database.md) if you want that capability.

!!! note "Both approaches coexist"
    The IQ Integrator checks for `LITELLM_API_KEY` first. If it is set in the environment (sourced from `iq-litellm-api-secret`), the static key is used and the Deployment Key flow is completely bypassed. To use the Deployment Key approach, delete the `iq-litellm-api-secret` Kubernetes secret from your namespace.

---

## Prerequisites

### Required

1. **HCL IQ Entitlement**  
   Your organization has a valid HCL IQ subscription registered in My HCLSoftware (MHS).

2. **My HCLSoftware Access**  
   You have administrative access to your organization's MHS account to generate and manage Deployment Keys.

3. **IQ Services Already Deployed**  
   You have completed the [Deploying services](deploy-services.md) step and verified the Integrator and MCP Server pods are running.

4. **KMS and LiteLLM Proxy Connectivity**  
   Your Kubernetes cluster must have outbound HTTPS connectivity to both the Key Management Service (KMS) and your LiteLLM proxy server.

### Recommended

**Database Backend** (for token persistence and multi-pod coordination):
- **Multi-pod deployments**: PostgreSQL for row locking and token synchronization
- **Single-pod deployments**: SQLite (enabled automatically; no configuration needed)

Without a database, KMS is called on every pod startup (no token reuse) and multi-pod deployments may experience race conditions.

---

## Before Starting: Database Recommendation

**For production deployments, we recommend configuring a database first.** This enables token persistence and safe multi-pod coordination. Run this check:

```bash
# Check if database is enabled
kubectl get deployment dx-iq-integrator -n <DX_NAMESPACE> -o jsonpath='{.spec.template.spec.containers[0].env[?(@.name=="IQ_DATABASE_ENABLED")].value}'
# Expected output: true
```

If the output is `false` or missing, consider completing [Preparing the database](prepare-database.md) first for a more robust deployment. (You can still proceed without it, but KMS will be called on every pod restart.)

---

## Step 1: Obtain Your Deployment Key from My HCLSoftware

1. **Log in to My HCLSoftware**

   Navigate to [My HCLSoftware Portal](https://my.hcltechsw.com/) and log in with your organization credentials.

2. **Locate Your IQ Entitlement**

   In the MHS dashboard, find your HCL DX IQ subscription. You should see:
   - **Product**: HCL DX IQ
   - **Status**: Active (or the current license status)
   - **Deployment Keys**: A section to manage keys for your Kubernetes deployments

3. **Generate a New Deployment Key**

   - Click **"Generate Deployment Key"** (or similar action in your MHS version)
   - Provide a **key name** to identify this deployment (e.g., `Production DX-IQ-K8s`)
   - Provide the **cluster/namespace identifier** for reference (e.g., `production / dx-namespace`)
   - Click **Create**

4. **Copy the Key**

   The MHS portal displays the generated Deployment Key as a long string (e.g., `dk-abc123def456...`). 
   
   !!! warning "Save the key securely"
       Copy and save this key immediately. Most MHS portals do not display the full key again after creation. Store it securely until you add it to the Helm values (Step 2).

   !!! important "Key rotation"
       MHS allows you to generate multiple keys for the same entitlement. To rotate a key, generate a new one, update your Helm values, restart the IQ pod, and delete the old key from MHS.

---

## Step 2: Add the Deployment Key to Your Helm Values

Create or update your custom IQ values file (e.g., `custom-iq-values-license.yaml`):

```yaml
configuration:
  licensing:
    deploymentKey: "<YOUR_DEPLOYMENT_KEY>"
    kmsBaseUrl: ""  # Leave empty to use default HCL-managed KMS (when available)
```

Replace `<YOUR_DEPLOYMENT_KEY>` with the key obtained from MHS in Step 1.

!!! note "Keeping secrets secure"
    If you're committing your values files to version control, use the `--set` flag at upgrade time instead: `helm upgrade ... --set configuration.licensing.deploymentKey="<KEY>"` or pass the key via an environment variable.

---

## Step 3: Upgrade Your IQ Deployment with the License Configuration

1. **Upgrade the IQ Helm release with the license settings:**

   ```bash
   helm upgrade dx-iq \
     https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<IQ_HELM_CHART_VERSION>.tgz \
     --namespace <DX_NAMESPACE> \
     --reuse-values \
     -f custom-iq-values-license.yaml
   ```

   Replace:
   - `<YOUR_REPOSITORY_FQDN_AND_PATH>`: Your Helm repository URL
   - `<IQ_HELM_CHART_VERSION>`: Your IQ Helm chart version
   - `<DX_NAMESPACE>` with your DX deployment namespace

   Alternatively, use command-line flags:

   ```bash
   helm upgrade dx-iq \
     https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<IQ_HELM_CHART_VERSION>.tgz \
     --namespace <DX_NAMESPACE> \
     --reuse-values \
     --set configuration.licensing.deploymentKey="<YOUR_DEPLOYMENT_KEY>"
   ```

2. **Monitor the pod restart:**

   ```bash
   kubectl rollout status deployment/dx-iq-integrator -n <DX_NAMESPACE>
   ```

   Wait until the new pod is running and ready.

---

## Step 4: Verify the Deployment Key Configuration

1. **Check the startup logs:**

   ```bash
   kubectl logs -n <DX_NAMESPACE> deployment/dx-iq-integrator | grep -i "deployment"
   ```

   Look for log entries like:
   - `[DeploymentKey] LITELLM_API_KEY configured statically, skipping KMS flow` — (if you're using a static key instead)
   - `[DeploymentKey] LiteLLM key acquired from KMS using stored access token` — **Success**: Token is valid and LiteLLM key was acquired
   - `[DeploymentKey] New access token obtained, LiteLLM key acquired` — **Success**: Fresh token created and key retrieved
   - `[DeploymentKey] No Deployment Key configured` — **Issue**: Deployment Key not set in values

2. **Test LLM functionality:**

   Send a test message through the IQ chat interface. If the response includes AI-generated text (not an error), the LiteLLM key was successfully acquired and is working.

3. **Verify the database record (if using PostgreSQL):**

   If database persistence is enabled, verify the Deployment Key was stored:

   ```bash
   kubectl exec -n <DX_NAMESPACE> <POD_NAME> -- psql -U postgres -c "\dt deployments"
   ```

   Expected output: A `deployments` table exists with 1 row containing your encrypted deployment key.

4. **Check the integrator pod environment variables:**

   ```bash
   kubectl exec -n <DX_NAMESPACE> deployment/dx-iq-integrator -- env | grep -E "IQ_DEPLOYMENT_KEY|KMS_BASE_URL"
   ```

   - `IQ_DEPLOYMENT_KEY=****...` — Masked deployment key (shows last 4 characters only)
   - `KMS_BASE_URL=<url>` — KMS endpoint (should be set to HCL-managed KMS or your custom endpoint)

---

## Important Notes

### Database is Required for Reliable Deployment Key Operation

**If you want to use Deployment Key, a database is strongly recommended** (but not strictly required for initial startup).

- **With a database** (PostgreSQL multi-pod or SQLite single-pod): Access tokens are stored and reused across pod restarts, avoiding redundant KMS calls. Multi-pod deployments use row locks for safe coordination.
- **Without a database**: KMS is called on every pod startup (no token persistence). Multi-pod deployments may experience race conditions with simultaneous KMS calls.

**Alternatively**, if you have a static `LITELLM_API_KEY`, you do not need a database or Deployment Key at all — the static key is used directly and the database requirement is completely bypassed. However, you may still want to use a database for conversation or IQ sessions persistence.

**Bottom line**: For production Deployment Key deployments, configure the database first. For static key deployments, skip this guide entirely.

### Multi-Pod Deployments

In multi-pod deployments, all pods start simultaneously and may attempt to acquire a KMS token at the same time. To prevent race conditions:

- **PostgreSQL**: The IQ Integrator uses a database row lock (`SELECT FOR UPDATE`) to ensure only one pod calls the KMS `POST /createToken` endpoint. Other pods wait for the lock, then re-use the token written by the first pod.
- **SQLite (single-pod only)**: No locking needed; the token is stored in memory.

This is automatic — no configuration required.

### Token Refresh

The LiteLLM API key acquired from KMS is valid for the lifetime of the IQ pod. When the pod restarts:
- The Integrator reads the stored `accessToken` from the database
- If the token is still valid, it uses it immediately (no KMS call needed)
- If the token has expired, it calls KMS `POST /createToken` to acquire a fresh token

### Static Key vs. Deployment Key

You can use **either** a static `LITELLM_API_KEY` **or** a Deployment Key, but not both:

| Setting | Behavior |
|---------|----------|
| `LITELLM_API_KEY` set | Deployment Key flow is skipped; static key is used instead |
| `LITELLM_API_KEY` empty, Deployment Key set | KMS flow activates; key is acquired automatically |
| Both empty | IQ starts without LLM capability (degraded mode) |

To switch from static key to Deployment Key:
1. Delete the `iq-litellm-api-secret` Kubernetes secret: `kubectl delete secret iq-litellm-api-secret -n <DX_NAMESPACE>`
2. Add `configuration.licensing.deploymentKey` with your MHS-generated key
3. Helm upgrade and restart the pod

---

## Troubleshooting

### Issue: "No Deployment Key configured" in logs

**Cause**: The Helm values do not include a Deployment Key, and `LITELLM_API_KEY` is also not set.

**Solution**:
1. Generate a new Deployment Key in My HCLSoftware (Step 1)
2. Add it to your Helm values: `configuration.licensing.deploymentKey: "<KEY>"`
3. Helm upgrade and restart the pod

### Issue: "Deployment Key is no longer valid" in logs

**Actual log message**:  
`[DeploymentKey] Deployment Key <masked> is no longer valid. Please generate a new Deployment Key in MHS UI.`

**Cause**: The Deployment Key you configured in Helm has been revoked or rotated in My HCLSoftware.

**Solution**:
1. Log in to My HCLSoftware and verify your entitlement is active
2. Generate a new Deployment Key
3. Update the Helm values with the new key: `configuration.licensing.deploymentKey: "<NEW_KEY>"`
4. Helm upgrade and restart the pod

### Issue: KMS connectivity errors in logs

**Possible log messages**:  
- `[DeploymentKey] KMS unreachable when fetching LiteLLM key: <error>`
- `[DeploymentKey] KMS unreachable when requesting access token: <error>`
- `[DeploymentKey] Entitlement is invalid. Please check your subscription in MHS.`

**Cause**: The IQ pod cannot reach the Key Management Service (network, firewall, DNS, or KMS downtime), or your entitlement is invalid.

**Temporary Workaround**:
- The IQ pod still starts and functions (with LLM unavailable)
- Wait for KMS to become reachable, then restart the pod to retry

**Permanent Solution**:
1. Verify your cluster has outbound HTTPS connectivity (test with `curl` from a pod)
2. Check firewall rules allow traffic to the KMS endpoint (configured via `configuration.licensing.kmsBaseUrl`)
3. Verify DNS resolution of the KMS hostname
4. If error mentions "Entitlement is invalid", verify your subscription in My HCLSoftware

### Issue: "Newly issued access token was immediately rejected"

**Actual log message**:  
`[DeploymentKey] Newly issued access token was immediately rejected. Please check KMS configuration.`

**Cause**: KMS issued an access token, but the token validation failed immediately. This suggests a KMS or token validation configuration issue.

**Solution**:
1. Verify that `configuration.licensing.kmsBaseUrl` is correctly set or empty (to use HCL-managed KMS)

### Issue: Key resolution exceeded deadline

**Actual log message**:  
`[DeploymentKey] Key resolution exceeded deadline (xxxms). IQ will start without LLM capability.`

**Cause**: The pod took too long to resolve the Deployment Key (e.g., a database row lock stalled waiting for another pod that crashed, or KMS calls timed out). The pod continues without LLM available.

**Solution**:
1. Restart the pod: `kubectl delete pod <POD_NAME> -n <DX_NAMESPACE>`
2. Monitor logs during restart to see if resolution succeeds on the next attempt
3. If the issue persists, check PostgreSQL connectivity and pod health across your deployment

### Issue: "Unexpected error during key resolution"

**Actual log message**:  
`[DeploymentKey] Unexpected error during key resolution: <error details>`

**Cause**: An unexpected system error occurred during key resolution.

**Solution**:
1. Check the error details in the log for specific hints
2. Verify database connectivity and Kubernetes cluster health
3. Restart the pod: `kubectl delete pod <POD_NAME> -n <DX_NAMESPACE>`

### Issue: LLM calls fail with "LITELLM_API_KEY is required but not configured"

**Cause**: Neither a static key nor a Deployment Key was successfully configured.

**Solution**:
1. Check the startup logs: `kubectl logs deployment/dx-iq-integrator -n <DX_NAMESPACE> | grep -i "deployment"`
2. If logs show "No Deployment Key configured", follow the troubleshooting steps above
3. If logs show a successful key acquisition but LLM still fails, restart the pod and check logs again

### Issue: `UPGRADE FAILED: cannot patch "dx-iq-integrator"` — env `valueFrom` conflict

**Error message**:
```
Error: UPGRADE FAILED: cannot patch "dx-iq-integrator" with kind Deployment: Deployment.apps "dx-iq-integrator" is invalid: spec.template.spec.containers[0].env[0].valueFrom: Invalid value: "": may not be specified when `value` is not empty
```

**Cause**: The Deployment template always renders `LITELLM_API_KEY` via `valueFrom.secretKeyRef` pointing to `iq-litellm-api-secret`. When `LITELLM_API_KEY` is *also* present in `environment.pod.integrator` in the Helm release values, Kubernetes strategic merge patch collapses the two entries (same `name` key) into a single entry with both `value` and `valueFrom` set — which Kubernetes rejects.

This is a migration issue: `LITELLM_API_KEY` was set in `environment.pod.integrator` in a previous installation (for example, by passing `--set-json 'environment.pod.integrator=[{"name":"LITELLM_API_KEY",...}]'` or by following an older version of this guide). The correct approach is to provide the key via `iq-litellm-api-secret` as described in [Step 1](#step-1-create-the-litellm-api-key-secret) — not via `environment.pod.integrator`.

**Solution**:

1. **Follow [Step 1](#step-1-create-the-litellm-api-key-secret) above** to create (or recreate) `iq-litellm-api-secret`.

2. **Clear the stale `LITELLM_API_KEY` from the Helm release values** by running the upgrade with `--set-json` to empty the array:

    ```bash
    helm upgrade dx-iq \
      https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<IQ_HELM_CHART_VERSION>.tgz \
      --namespace <DX_NAMESPACE> \
      --reuse-values \
      --set configuration.litellm.liteLlmUrl="<YOUR_LITELLM_URL>" \
      --set-json 'environment.pod.integrator=[]'
    ```

    This removes the conflicting `LITELLM_API_KEY` entry from the Helm release values. The IQ Integrator will automatically pick up the key from `iq-litellm-api-secret`.

    !!! note
        If you have other custom variables in `environment.pod.integrator` that you want to preserve, include them in the array instead of leaving it empty: `--set-json 'environment.pod.integrator=[{"name":"OTHER_VAR","value":"..."}]'`

---

## Validation

After configuring the Deployment Key, follow the [Validating the IQ backend deployment](validation.md) guide to verify:
- [Step 1: Verify Pod Health](validation.md#step-1-verify-pod-health) — Integrator and MCP Server pods are running
- [Step 4: Test WebSocket Connectivity](validation.md#step-4-test-websocket-connectivity) — WebSocket connection is established
- [Step 6: Test End-to-End Functionality](validation.md#step-6-test-end-to-end-functionality) — LLM can process queries

Check the startup logs for Deployment Key success messages as described in Step 4 of this guide.

## Next Steps

After successfully configuring the Deployment Key:

1. **Validate LLM Integration**: Test LLM responses through the IQ chatbot UI to confirm the LiteLLM key is working
2. **Plan for Token Rotation**: Establish a rotation schedule for your Deployment Key (e.g., annually) and update the Helm values accordingly

---

## Support

If you encounter issues that cannot be resolved using these steps, contact [HCL Support](https://support.hcl-software.com/csm){target="_blank"}.

- Your organization's MHS account ID
- The deployment key name (from Step 1)
- Relevant log excerpts from the IQ Integrator pod
- Kubernetes cluster information (provider, version, network configuration)