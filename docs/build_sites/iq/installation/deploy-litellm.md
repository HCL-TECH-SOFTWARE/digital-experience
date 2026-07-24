# Deploying LiteLLM for IQ

This guide provides instructions for deploying LiteLLM as a prerequisite service for HCL DX IQ. LiteLLM acts as a unified proxy and gateway to manage access to large language models (LLMs), providing model abstraction, load balancing, and API key management.

## Overview

HCL DX IQ requires LiteLLM to:
- Manage access to LLM providers (AWS Bedrock, OpenAI, Anthropic, etc.)
- Abstract model provider differences into a unified API
- Handle API key rotation and authentication
- Support multiple concurrent model configurations
- Track usage and provide observability

IQ requires two LiteLLM proxy models to be configured:
- **`iq-general-purpose`**: A premium model (e.g., Claude 4.6 Sonnet or 4.8 Opus) for general inquiries and tool execution
- **`iq-summary`**: A cost-efficient model (e.g., Claude 4.5 Haiku) for conversation summarization

!!! note
    IQ transmits conversation history to LiteLLM to enable proper context and functionality. User authentication credentials (cookies) remain within your Kubernetes cluster and are never transmitted to external LLM services. You control the LiteLLM proxy server and determine where conversation data is routed.

## Deployment Options

### Option 1: In-Cluster Deployment (Recommended)

Deploy LiteLLM as a container in your DX Kubernetes namespace. This approach:
- Keeps all traffic within your cluster
- Simplifies network and security configuration
- Provides local control and observability
- Integrates easily with your existing DX infrastructure

**When to use**: Production deployments, air-gapped environments, strict data governance requirements.

### Option 2: External Deployment (Railway or Alternative)

Use an external SaaS provider like Railway or deploy LiteLLM on separate infrastructure.

**When to use**: Development/testing, simplified operational overhead preferred over control.

---

## In-Cluster Deployment

### Prerequisites

Before deploying LiteLLM in-cluster, ensure:

- Your DX Kubernetes cluster is running and accessible
- A valid DX namespace exists (e.g., `dxns`)
- An external PostgreSQL database is available (or RDS instance in AWS) for LiteLLM session storage
- Database credentials are available (username, password, endpoint, port, database name)
- Valid credentials/API keys for your LLM provider (AWS Bedrock, OpenAI, etc.)
- `kubectl` is configured to access your cluster
- A Helm values file prepared for LiteLLM configuration

!!! tip "Capacity Planning"
    Before deploying LiteLLM, verify that your Kubernetes nodes have sufficient unallocated resources to schedule the pod. By default, LiteLLM requests **100m CPU** and **512Mi Memory**. You can check your available node capacity by running `kubectl describe nodes` and reviewing the **Allocated resources** section. If your nodes are near capacity, you may need to provision additional nodes or use a larger instance type.

### Step 1: Add the LiteLLM Helm Repository

```bash
helm repo add litellm https://ghcr.io/berriai/litellm-helm
helm repo update
```

### Step 2: Create Kubernetes Secrets

Store sensitive credentials as Kubernetes secrets in your DX namespace:

**Database credentials secret:**

```bash
kubectl create secret generic litellm-db-credentials \
  --from-literal=username=<DB_USERNAME> \
  --from-literal=password=<DB_PASSWORD> \
  -n dxns
```

**LiteLLM master key secret:**

```bash
kubectl create secret generic litellm-masterkey \
  --from-literal=LITELLM_MASTER_KEY=<GENERATED_RANDOM_KEY> \
  -n dxns
```

Generate a random master key using:
```bash
openssl rand -base64 32
```

**LLM provider credentials secret (AWS Bedrock example):**

```bash
kubectl create secret generic litellm-bedrock-credentials \
  --from-literal=AWS_BEARER_TOKEN_BEDROCK=<YOUR_AWS_BEARER_TOKEN> \
  -n dxns
```

For other providers (OpenAI, Anthropic, etc.), adapt accordingly:

```bash
# OpenAI example
kubectl create secret generic litellm-openai-credentials \
  --from-literal=OPENAI_API_KEY=<YOUR_OPENAI_KEY> \
  -n dxns

# Anthropic example
kubectl create secret generic litellm-anthropic-credentials \
  --from-literal=ANTHROPIC_API_KEY=<YOUR_ANTHROPIC_KEY> \
  -n dxns
```

### Step 3: Validate Database Connectivity

Before proceeding, verify that your database is accessible from the Kubernetes cluster. This prevents `CrashLoopBackOff` errors due to misconfigured credentials.

```bash
kubectl run db-validator --rm -i --restart=Never \
  --image=postgres:alpine \
  --env="PGPASSWORD=<DB_PASSWORD>" \
  -n dxns \
  --command -- psql -h <RDS_ENDPOINT> -p 5432 -U <DB_USERNAME> -d litellm -c "SELECT 1;"
```

Replace the placeholder values:
- `<DB_PASSWORD>` - Your database password
- `<RDS_ENDPOINT>` - Your database endpoint (e.g., `litellm-db.xxxx.us-east-1.rds.amazonaws.com`)
- `<DB_USERNAME>` - Your database username

Expected output: `1` (if the connection is successful)

### Step 4: Create the Helm Values File

Create a file named `litellm-values.yaml` with the configuration below. Customize the placeholder values:

```yaml
image:
  repository: ghcr.io/berriai/litellm-database
  pullPolicy: Always
  tag: "main-latest"
```

!!! warning "Use Specific Version in Production"
    The `main-latest` tag with `pullPolicy: Always` means the image can change unpredictably between pod restarts. For production deployments, specify a pinned version tag (e.g., `1.45.0`) to ensure consistent, reproducible deployments. Refer to [LiteLLM releases](https://github.com/BerriAI/litellm/releases){target="_blank"} for available versions.

```yaml

# Security context - LiteLLM requires root for Prisma binary download
securityContext:
  runAsUser: 0
  runAsGroup: 0

# External PostgreSQL database configuration
db:
  useExisting: true
  endpoint: "<RDS_ENDPOINT>"        # e.g., litellm-db.xxxx.us-east-1.rds.amazonaws.com
  port: 5432                         # Adjust if using non-standard port
  database: "litellm"                # Your database name
  deployStandalone: false
  secret:
    name: litellm-db-credentials
    usernameKey: username
    passwordKey: password

# Master key for API authentication
masterkeySecretName: litellm-masterkey
masterkeySecretKey: LITELLM_MASTER_KEY

# Inject secrets as environment variables for model access
environmentSecrets:
  - litellm-masterkey
  - litellm-bedrock-credentials  # Or substitute with your provider

# Pod annotations for Prometheus monitoring (if using Prometheus)
podAnnotations:
  prometheus.io/scrape: "true"
  prometheus.io/port: "4000"
  prometheus.io/path: "/metrics/"

# LiteLLM Proxy configuration - Define IQ-required models
proxy_config:
  model_list:
    # IQ General Purpose Model (Premium - for inquiries and tool execution)
    - model_name: iq-general-purpose
      litellm_params:
        model: "bedrock/us.anthropic.claude-sonnet-4-6-20250514-v1:0"
        api_key: os.environ/AWS_BEARER_TOKEN_BEDROCK
    
    # IQ Summary Model (Cost-efficient - for context summarization)
    - model_name: iq-summary
      litellm_params:
        model: "bedrock/us.anthropic.claude-haiku-4-5-20251001-v1:0"
        api_key: os.environ/AWS_BEARER_TOKEN_BEDROCK

  litellm_settings:
    callbacks:
      - prometheus  # Enable Prometheus metrics
    drop_params: true  # Critical: Prevents unsupported parameters from being forwarded to the LLM provider
  
  general_settings:
    master_key: os.environ/LITELLM_MASTER_KEY
```

!!! important "Understanding `drop_params: true`"
    This setting is critical for IQ deployments. When `drop_params: true`, LiteLLM automatically discards any parameters that a specific LLM provider does not support. Without this setting, unsupported parameters passed by IQ would cause API errors and fail requests. This ensures compatibility across different LLM providers (AWS Bedrock, OpenAI, Anthropic, etc.) by gracefully handling parameter mismatches.

```yaml
# Ingress configuration - Expose LiteLLM within cluster
ingress:
  enabled: true
  className: "nginx"
  annotations:
    nginx.ingress.kubernetes.io/proxy-body-size: "50m"
    nginx.ingress.kubernetes.io/proxy-read-timeout: "300"
    nginx.ingress.kubernetes.io/proxy-send-timeout: "300"
  hosts:
    - host: "litellm.dxns.svc.cluster.local"  # Internal DNS name
      paths:
        - path: /
          pathType: Prefix

# Resource allocation
resources:
  requests:
    cpu: "100m"
    memory: "512Mi"
  limits:
    cpu: "1000m"
    memory: "2Gi"

# Number of LiteLLM replicas
replicaCount: 1

# Health probe configuration
livenessProbe:
  enabled: true
  httpGet:
    path: /health/liveliness
    port: http
  initialDelaySeconds: 15
  periodSeconds: 10
  timeoutSeconds: 5
  failureThreshold: 3

readinessProbe:
  enabled: true
  httpGet:
    path: /health/readiness
    port: http
  initialDelaySeconds: 10
  periodSeconds: 10
  timeoutSeconds: 5
  failureThreshold: 3

startupProbe:
  enabled: true
  httpGet:
    path: /health/readiness
    port: http
  failureThreshold: 60  # Allow up to 10 minutes for startup
  periodSeconds: 10
  timeoutSeconds: 5

# Store models in database for persistence across restarts
envVars:
  STORE_MODEL_IN_DB: true
```

!!! note "Model Configuration"
    The example above uses **AWS Bedrock** as the LLM provider. If using a different provider (OpenAI, Anthropic, etc.), adjust the `model` names and `api_key` references accordingly. Refer to [LiteLLM Proxy Model Management](https://docs.litellm.ai/docs/proxy/model_management){target="_blank"} for provider-specific syntax.

### Step 4.5: (Optional) Validate Helm Configuration

Before deploying, validate your Helm configuration to catch errors early:

```bash
helm upgrade --install litellm litellm/litellm \
  -f litellm-values.yaml \
  -n dxns \
  --dry-run \
  --debug
```

Review the output for any syntax errors or misconfigurations. If successful, the command will display the rendered Kubernetes manifests without actually creating resources.

### Step 5: Deploy LiteLLM Using Helm

Deploy LiteLLM to your DX namespace using `helm upgrade --install` for idempotent operations:

```bash
helm upgrade --install litellm litellm/litellm \
  -f litellm-values.yaml \
  -n dxns
```

Monitor the deployment:

```bash
kubectl get pods -n dxns -l app=litellm
kubectl logs -n dxns -l app=litellm -f
```

Wait for the pod to reach the `Ready` state:

```bash
kubectl wait --for=condition=ready pod \
  -l app=litellm \
  -n dxns \
  --timeout=300s
```

### Step 6: Verify LiteLLM Deployment

Test the LiteLLM service health:

```bash
# Port-forward to access LiteLLM locally
kubectl port-forward -n dxns svc/litellm 8000:4000

# Test health endpoint (in another terminal)
curl http://localhost:8000/health/readiness
```

Expected response:
```json
{
  "status": "healthy"
}
```

Test model availability:

```bash
curl -H "Authorization: Bearer <LITELLM_MASTER_KEY>" \
  http://localhost:8000/v1/models
```

Test chat completion (end-to-end validation):

```bash
curl -X POST http://localhost:8000/v1/chat/completions \
  -H "Authorization: Bearer <LITELLM_MASTER_KEY>" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "iq-general-purpose",
    "messages": [{"role": "user", "content": "Hello, are you ready?"}],
    "max_tokens": 100
  }'
```

Expected response: A JSON object with a `choices` array containing the model's response. This confirms that LiteLLM can process requests end-to-end.

---

## Integration with IQ

After LiteLLM is deployed and verified, configure IQ to use it.

### LiteLLM Service Endpoint

LiteLLM is now accessible within your cluster at:

```
http://litellm.dxns.svc.cluster.local:4000
```

### Configure LLM Model Parameters

If your chosen LLM models have specific constraints on token limits or temperature parameters, configure the following environment variables in the IQ Integrator:

- **`LLM_MAX_TOKENS`**: Specifies the maximum number of tokens for LLM completion responses. Must match or be less than your model's maximum (e.g., `16384`, `8192`, `4096`)
- **`LLM_TEMPERATURE`**: Controls randomness in LLM responses. Some models enforce specific values (e.g., `0.7`, `1.0`, or `0`)

**Example**: If using GPT with a 16,384 token limit and temperature of 1:

```json
{"name":"LLM_MAX_TOKENS","value":"16384"}
{"name":"LLM_TEMPERATURE","value":"1"}
```

Refer to [IQ Environment Variables - LiteLLM](environment-variables.md#litellm) and [Deploying IQ Services](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_deploy_iq_services.md) for detailed configuration instructions.

### Configure IQ to Use LiteLLM

Refer to [Preparing LiteLLM Access](prepare-litellm-access.md) for detailed step-by-step instructions on:
- Creating the LiteLLM API key secret
- Upgrading the IQ Integrator deployment with the LiteLLM endpoint
- Verifying the configuration is working correctly

For additional IQ configuration options, refer to [IQ Environment Variables](environment-variables.md).

---

## Troubleshooting

### LiteLLM Pod Fails to Start

**Symptom**: Pod stuck in `CrashLoopBackOff` state

**Diagnosis**:
```bash
kubectl logs -n dxns -l app=litellm --tail=50
```

**Common causes**:
- Database connectivity issue: Verify database endpoint and credentials
- Invalid model configuration: Check syntax in `proxy_config`
- Missing secrets: Verify all referenced secrets exist
- Insufficient resources: Check node memory/CPU availability

### Health Probe Failures

**Symptom**: Readiness probe failing, pod not accepting traffic

**Diagnosis**:
```bash
kubectl describe pod -n dxns -l app=litellm
```

**Solutions**:
- Increase startup probe `failureThreshold` for slow database migrations
- Verify database is accessible: `kubectl exec -it <litellm-pod> -- nc -zv <db-host> 5432`
- Check LiteLLM logs for database initialization errors

### Models Not Available

**Symptom**: IQ cannot find `iq-general-purpose` or `iq-summary` models

**Diagnosis**:
```bash
# Check available models
curl -H "Authorization: Bearer <LITELLM_MASTER_KEY>" \
  http://litellm.dxns.svc.cluster.local:4000/v1/models

# Check LiteLLM logs
kubectl logs -n dxns -l app=litellm
```

**Solutions**:
- Verify model names match exactly in `proxy_config`
- Confirm LLM provider credentials are in Kubernetes secrets
- Check provider account has access to specified models

### Connection Refused from IQ

**Symptom**: IQ cannot reach LiteLLM service

**Diagnosis**:
```bash
# From IQ pod, test connectivity
kubectl exec -it <iq-pod> -n dxns -- \
  curl http://litellm.dxns.svc.cluster.local:4000/health/readiness
```

**Solutions**:
- Verify LiteLLM service is running: `kubectl get svc -n dxns litellm`
- Check network policies allow traffic between IQ and LiteLLM
- Verify DNS resolution: `kubectl exec -it <iq-pod> -n dxns -- nslookup litellm.dxns.svc.cluster.local`

---

## Next Steps

Once LiteLLM is deployed and verified:

1. **[Deploy IQ Services](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_deploy_iq_services.md)** - Deploy the IQ Integrator and MCP Server
2. **[Prepare the Database](prepare-database.md)** - Set up IQ session persistence (optional but recommended)
3. **[Configure the MCP Server](configuring-mcp.md)** - Configure MCP tools and features
4. **[Validate the Deployment](validation.md)** - Verify IQ is functioning correctly

---

## Additional Resources

- [LiteLLM Proxy Documentation](https://docs.litellm.ai/docs/proxy/deploy){target="_blank"}
- [LiteLLM Model Management](https://docs.litellm.ai/docs/proxy/model_management){target="_blank"}
- [LiteLLM GitHub Repository](https://github.com/BerriAI/litellm){target="_blank"}
