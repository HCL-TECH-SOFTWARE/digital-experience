# Installing and Deploying IQ

This section provides detailed instructions for installing and deploying the IQ AI assistant in your HCL Digital Experience (DX) environment.

!!! note
    IQ is available starting from HCL Digital Experience (DX) version 236 and is deployed as a container-based service. The exact Helm chart values and ConfigEngine task parameters depend on your specific DX Helm chart version. Consult your HCL DX deployment team or HCL Support for environment-specific guidance.

## Overview

IQ is an AI-powered assistant that integrates seamlessly with HCL DX through a microservices architecture. The installation process involves:

1. Deploying the IQ backend service (Node.js/Koa server)
2. Deploying the IQ frontend UI (Lit web components)
3. Configuring integration with DX
4. Setting up AI model connectivity (LLM providers)
5. Configuring Model Context Protocol (MCP) servers (optional)
6. Enabling IQ in the DX interface

## Architecture Components

IQ consists of the following components:

- **IQ Backend Service**: A Node.js service that handles WebSocket connections, session management, and AI model communication
- **IQ UI Components**: Web components built with Lit that provide the chat interface, side panel, and floating action button
- **DX Integration**: Authentication and authorization through DX Core APIs
- **LLM Provider**: AI model connectivity (AWS Bedrock or LiteLLM)
- **MCP Servers**: Optional Model Context Protocol servers for extended capabilities

## Prerequisites

Before installing IQ, ensure the following prerequisites are met:

### System Requirements

- **HCL Digital Experience**: Version 236 or higher
- **Deployment Environment**: Kubernetes cluster with Helm support
- **Container Registry**: Access to HCL container registry or local registry with IQ images
- **Network**: Outbound network access for AI model API calls (if using cloud-based LLM providers)

### Required Access and Permissions

- Kubernetes cluster administrator access
- Helm 3.x installed and configured
- Access to DX Helm charts and values configuration
- Credentials for AI model provider (AWS Bedrock or LiteLLM)

### AI Model Provider Setup

Choose one of the following AI model providers:

#### **Option 1: AWS Bedrock**
- AWS account with Bedrock enabled
- IAM credentials with Bedrock access permissions
- Selected model(s) enabled in your AWS region (e.g., `anthropic.claude-3-5-sonnet-20241022-v2:0`)

#### **Option 2: LiteLLM**
- LiteLLM server deployed and accessible
- API key for LiteLLM service
- Configured model endpoints

---

## Installation Methods

### Method 1: Helm Deployment (Recommended)

The recommended method for installing IQ is through Helm deployment, which automates the configuration and deployment of all IQ components.

#### Step 1: Prepare Your Helm Values File

Add the following configuration to your DX Helm `values.yaml` file:

```yaml
# IQ Configuration
iq:
  # Enable IQ service
  enabled: true
  
  # IQ Backend Service Configuration
  backend:
    image:
      repository: your-registry/dx-iq-integrator
      tag: "1.0.0"
      pullPolicy: IfNotPresent
    
    replicas: 2
    
    resources:
      requests:
        memory: "512Mi"
        cpu: "250m"
      limits:
        memory: "1Gi"
        cpu: "500m"
    
    # Service configuration
    service:
      type: ClusterIP
      port: 3000
    
    # Environment variables for IQ backend
    env:
      # DX Integration
      DX_HOST: "dx-core-service"
      DX_CONTEXT_ROOT: "/wps"
      DX_ENFORCE_API_AUTHORIZATION: "true"
      
      # WebSocket and API settings
      PORT_v1: "3000"
      HOST: "0.0.0.0"
      
      # LLM Provider Selection (bedrock or litellm)
      LLM_ADAPTER_NAME: "bedrock"
      
      # AWS Bedrock Configuration (if using Bedrock)
      AWS_BEDROCK_REGION: "us-east-1"
      AWS_BEDROCK_SUMMARY_MODEL: "anthropic.claude-3-5-sonnet-20241022-v2:0"
      AWS_BEDROCK_GENERAL_PURPOSE_MODEL: "anthropic.claude-3-5-sonnet-20241022-v2:0"
      
      # LiteLLM Configuration (if using LiteLLM)
      # LITELLM_BASE_URL: "http://litellm-service:4000"
      # LITELLM_SUMMARY_MODEL: "claude-3-5-sonnet"
      # LITELLM_GENERAL_PURPOSE_MODEL: "claude-3-5-sonnet"
      
      # MCP Server Configuration (optional)
      MCP_SERVER_LIST: ""  # Comma-separated list of MCP server URLs
      MCP_WATCHDOG_INTERVAL_MS: "300000"  # 5 minutes
      
      # LLM Behavior Configuration
      LLM_MAX_TOKENS: "4096"
      LLM_TEMPERATURE: "0.7"
      LLM_WATCHDOG_ENABLED: "true"
      LLM_WATCHDOG_INTERVAL_MS: "300000"
      LLM_MAX_AGENTIC_ITERATIONS: "10"
      
      # Session and Summary Configuration
      MESSAGE_THRESHOLD: "10"
      SUMMARY_BUFFER_SIZE: "5"
      MAX_SUMMARY_LENGTH: "500"
    
    # Secrets (for sensitive data)
    secrets:
      # AWS Credentials (if using Bedrock)
      AWS_ACCESS_KEY_ID: "your-aws-access-key"
      AWS_SECRET_ACCESS_KEY: "your-aws-secret-key"
      
      # LiteLLM API Key (if using LiteLLM)
      # LITELLM_API_KEY: "your-litellm-api-key"
  
  # IQ UI Configuration
  ui:
    # UI assets are served from IQ backend service
    # No separate deployment needed
    enabled: true

# DX Core Configuration
core:
  # Ensure IQ integration is enabled in DX Core
  iq:
    enabled: true
```

#### Step 2: Configure Secrets

For production environments, use Kubernetes secrets instead of plain text values:

```bash
# Create secret for AWS Bedrock credentials
kubectl create secret generic iq-aws-credentials \
  --from-literal=AWS_ACCESS_KEY_ID='your-access-key' \
  --from-literal=AWS_SECRET_ACCESS_KEY='your-secret-key' \
  -n <your-dx-namespace>

# Or create secret for LiteLLM
kubectl create secret generic iq-litellm-credentials \
  --from-literal=LITELLM_API_KEY='your-api-key' \
  -n <your-dx-namespace>
```

Update your `values.yaml` to reference the secret:

```yaml
iq:
  backend:
    secretRef:
      name: iq-aws-credentials  # or iq-litellm-credentials
```

#### Step 3: Deploy Using Helm

Deploy or upgrade your DX installation with the updated values:

```bash
# For new installation
helm install dx-deployment hcl/dx \
  -f values.yaml \
  -n <your-dx-namespace>

# For upgrade of existing installation
helm upgrade dx-deployment hcl/dx \
  -f values.yaml \
  -n <your-dx-namespace>
```

#### Step 4: Verify Deployment

Check that IQ pods are running:

```bash
# Check IQ backend pods
kubectl get pods -n <your-dx-namespace> | grep iq

# Expected output:
# dx-iq-integrator-xxxxxxxxxx-xxxxx   1/1     Running   0          2m
# dx-iq-integrator-xxxxxxxxxx-xxxxx   1/1     Running   0          2m

# Check IQ service
kubectl get svc -n <your-dx-namespace> | grep iq

# Check IQ logs
kubectl logs -f deployment/dx-iq-integrator -n <your-dx-namespace>
```

Verify IQ backend is healthy:

```bash
# Port-forward to IQ service
kubectl port-forward svc/dx-iq-integrator 3000:3000 -n <your-dx-namespace>

# Check health endpoints
curl http://localhost:3000/probe/ready
curl http://localhost:3000/probe/live
```

---

### Method 2: Docker Compose Deployment (Development)

For local development or testing, you can deploy IQ using Docker Compose.

#### Step 1: Create Docker Compose Configuration

Create a `docker-compose.yml` file:

```yaml
version: '3.8'

services:
  dx-iq-integrator:
    image: your-registry/dx-iq-integrator:1.0.0
    container_name: dx-iq-integrator
    ports:
      - "3000:3000"
    environment:
      # DX Integration
      DX_HOST: "dx-core"
      DX_CONTEXT_ROOT: "/wps"
      
      # LLM Provider
      LLM_ADAPTER_NAME: "bedrock"
      
      # AWS Bedrock
      AWS_BEDROCK_REGION: "us-east-1"
      AWS_ACCESS_KEY_ID: "${AWS_ACCESS_KEY_ID}"
      AWS_SECRET_ACCESS_KEY: "${AWS_SECRET_ACCESS_KEY}"
      AWS_BEDROCK_SUMMARY_MODEL: "anthropic.claude-3-5-sonnet-20241022-v2:0"
      AWS_BEDROCK_GENERAL_PURPOSE_MODEL: "anthropic.claude-3-5-sonnet-20241022-v2:0"
      
      # Server Configuration
      PORT_v1: "3000"
      HOST: "0.0.0.0"
    networks:
      - dx-network
    depends_on:
      - dx-core
    restart: unless-stopped

networks:
  dx-network:
    external: true
```

#### Step 2: Start Services

```bash
# Start IQ service
docker-compose up -d

# Check logs
docker-compose logs -f dx-iq-integrator

# Verify health
curl http://localhost:3000/probe/ready
```

---

## Post-Installation Configuration

### Enabling IQ in DX Interface

After deploying the IQ service, enable it in the DX interface:

#### Option 1: Using ConfigEngine Task

For container-based deployments, run the `enable-iq` ConfigEngine task:

```bash
# Access DX Core pod
kubectl exec -it <dx-core-pod-name> -n <your-dx-namespace> -- /bin/bash

# Run enable task
cd /opt/HCL/wp_profile/ConfigEngine

./ConfigEngine.sh enable-iq \
  -DWasPassword=<WAS admin password> \
  -DPortalAdminPwd=<Portal admin password> \
  -Diq.backend.url=http://dx-iq-integrator:3000
```

#### Option 2: Through Helm Configuration

Add the following to your `values.yaml` and upgrade:

```yaml
configuration:
  core:
    iq:
      enabled: true
      backendUrl: "http://dx-iq-integrator:3000"
```

Then upgrade the Helm deployment:

```bash
helm upgrade dx-deployment hcl/dx -f values.yaml -n <your-dx-namespace>
```

### Configuring DX Authorization

IQ integrates with DX Portal Access Control (PAC) for authorization. Ensure the virtual resource is configured:

1. The virtual resource `wps.DX_IQ_INTEGRATOR_API` should be pre-configured in DX Core/Liberty images
2. Assign the `User` role to users who should access IQ
3. To bypass authorization (not recommended for production), set:
   ```yaml
   DX_ENFORCE_API_AUTHORIZATION: "false"
   ```

---

## Configuring AI Model Providers

### AWS Bedrock Configuration

To use AWS Bedrock as your LLM provider:

1. **Enable Models in AWS Console**
   - Navigate to AWS Bedrock console
   - Enable access to Claude models in your region
   - Supported models: `anthropic.claude-3-5-sonnet-20241022-v2:0`

2. **Create IAM Credentials**
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
           "bedrock:InvokeModel",
           "bedrock:InvokeModelWithResponseStream"
         ],
         "Resource": "arn:aws:bedrock:*:*:model/*"
       }
     ]
   }
   ```

3. **Configure Environment Variables**
   ```yaml
   LLM_ADAPTER_NAME: "bedrock"
   AWS_BEDROCK_REGION: "us-east-1"
   AWS_ACCESS_KEY_ID: "<your-access-key>"
   AWS_SECRET_ACCESS_KEY: "<your-secret-key>"
   AWS_BEDROCK_SUMMARY_MODEL: "anthropic.claude-3-5-sonnet-20241022-v2:0"
   AWS_BEDROCK_GENERAL_PURPOSE_MODEL: "anthropic.claude-3-5-sonnet-20241022-v2:0"
   ```

### LiteLLM Configuration

To use LiteLLM as your LLM provider:

1. **Deploy LiteLLM Server**
   - Follow LiteLLM documentation to deploy the server
   - Ensure it's accessible from IQ backend pods

2. **Configure Environment Variables**
   ```yaml
   LLM_ADAPTER_NAME: "litellm"
   LITELLM_BASE_URL: "http://litellm-service:4000"
   LITELLM_API_KEY: "<your-api-key>"
   LITELLM_SUMMARY_MODEL: "claude-3-5-sonnet"
   LITELLM_GENERAL_PURPOSE_MODEL: "claude-3-5-sonnet"
   ```

---

## Configuring MCP Servers (Optional)

Model Context Protocol (MCP) servers extend IQ's capabilities with additional tools and integrations.

### Adding MCP Servers

1. **Deploy MCP Server(s)**
   - Deploy your MCP server(s) in the same Kubernetes namespace
   - Ensure they're accessible from IQ backend pods

2. **Configure MCP Server List**
   ```yaml
   MCP_SERVER_LIST: "http://mcp-server-1:3001,http://mcp-server-2:3002"
   ```

3. **Restart IQ Backend**
   ```bash
   kubectl rollout restart deployment/dx-iq-integrator -n <your-dx-namespace>
   ```

### MCP Health Monitoring

IQ automatically monitors MCP server health:

- Health checks run every 5 minutes (configurable via `MCP_WATCHDOG_INTERVAL_MS`)
- Unhealthy servers are temporarily disabled
- Automatic retry when servers become available

---

## Verification and Testing

### Verify Backend Service

1. **Check Health Endpoints**
   ```bash
   # Readiness probe
   curl http://<iq-service-url>/probe/ready
   
   # Liveness probe
   curl http://<iq-service-url>/probe/live
   ```

2. **Check WebSocket Endpoint**
   - Open browser developer tools (F12)
   - Navigate to Network tab > WS filter
   - Access IQ from DX interface
   - Verify WebSocket connection to `/dx/api/iq/v1/ws`

3. **Check Logs**
   ```bash
   kubectl logs -f deployment/dx-iq-integrator -n <your-dx-namespace>
   ```

   Look for:
   - ✅ "Server listening on port 3000"
   - ✅ "MCP servers initialized"
   - ✅ "LLM adapter initialized: bedrock" (or litellm)

### Verify UI Integration

1. **Access DX Platform**
   - Log in to DX with appropriate credentials
   - Navigate to any Practitioner Studio page

2. **Check for IQ Icon**
   - Look for the sparkle icon (✨) in the toolbar
   - Or look for the floating action button (FAB) in the lower-right corner

3. **Test Chat Functionality**
   - Click the sparkle icon or FAB to open IQ
   - Type a test message
   - Verify you receive a response

### Verify LLM Connectivity

Send a test request through IQ:

```
Hello, IQ! Can you confirm you're working?
```

Expected response: IQ should respond with a greeting and confirmation message.

---

## Updating IQ

To update IQ to a new version:

### Using Helm

1. **Update Image Tag in values.yaml**
   ```yaml
   iq:
     backend:
       image:
         tag: "1.1.0"  # New version
   ```

2. **Upgrade Deployment**
   ```bash
   helm upgrade dx-deployment hcl/dx -f values.yaml -n <your-dx-namespace>
   ```

3. **Verify Update**
   ```bash
   kubectl get pods -n <your-dx-namespace> | grep iq
   kubectl logs -f deployment/dx-iq-integrator -n <your-dx-namespace>
   ```

---

## Disabling IQ

To disable IQ without uninstalling:

### Using Helm

Update your `values.yaml`:

```yaml
iq:
  enabled: false

configuration:
  core:
    iq:
      enabled: false
```

Upgrade the deployment:

```bash
helm upgrade dx-deployment hcl/dx -f values.yaml -n <your-dx-namespace>
```

### Using ConfigEngine

```bash
./ConfigEngine.sh disable-iq \
  -DWasPassword=<WAS admin password> \
  -DPortalAdminPwd=<Portal admin password>
```

---

## Uninstalling IQ

To completely remove IQ:

### Using Helm

1. **Update values.yaml**
   ```yaml
   iq:
     enabled: false
   ```

2. **Upgrade deployment**
   ```bash
   helm upgrade dx-deployment hcl/dx -f values.yaml -n <your-dx-namespace>
   ```

3. **Delete Secrets**
   ```bash
   kubectl delete secret iq-aws-credentials -n <your-dx-namespace>
   # or
   kubectl delete secret iq-litellm-credentials -n <your-dx-namespace>
   ```

---

## Troubleshooting Installation

### Common Issues

#### IQ Pods Not Starting

**Symptom**: IQ pods remain in `Pending` or `CrashLoopBackOff` state

**Solutions**:
- Check resource availability: `kubectl describe pod <iq-pod-name> -n <namespace>`
- Verify image pull: `kubectl get events -n <namespace> | grep iq`
- Check logs: `kubectl logs <iq-pod-name> -n <namespace>`

#### WebSocket Connection Failed

**Symptom**: Browser console shows WebSocket connection errors

**Solutions**:
- Verify IQ service is running: `kubectl get svc -n <namespace> | grep iq`
- Check ingress/route configuration for WebSocket support
- Verify firewall rules allow WebSocket connections
- Check DX_HOST and DX_CONTEXT_ROOT environment variables

#### LLM Provider Connection Failed

**Symptom**: IQ responds with "Unable to connect to AI service" error

**Solutions**:
- Verify AWS credentials are correct (for Bedrock)
- Check LiteLLM service is accessible (for LiteLLM)
- Verify outbound network access from IQ pods
- Check LLM_ADAPTER_NAME is set correctly
- Review IQ backend logs for detailed error messages

#### Authorization Errors

**Symptom**: Users cannot access IQ or receive "Unauthorized" errors

**Solutions**:
- Verify DX_ENFORCE_API_AUTHORIZATION setting
- Check virtual resource `wps.DX_IQ_INTEGRATOR_API` is configured
- Ensure users have appropriate role assignments
- Check DX PAC configuration

---

## Security Considerations

### Production Deployment Recommendations

1. **Use Kubernetes Secrets** for all sensitive data (API keys, credentials)
2. **Enable TLS/HTTPS** for all IQ endpoints
3. **Configure Network Policies** to restrict pod-to-pod communication
4. **Enable DX Authorization** (`DX_ENFORCE_API_AUTHORIZATION: "true"`)
5. **Regularly Update** IQ to the latest version for security patches
6. **Monitor Logs** for suspicious activity
7. **Implement Rate Limiting** for WebSocket connections
8. **Use Private Networks** for MCP server communication

---

## Next Steps

After successfully installing IQ:

- **[Accessing IQ](./access.md)** - Learn how to access IQ from DX interface
- **[Using IQ](./usage.md)** - Explore IQ features and capabilities
- **[Configuration](./configuration.md)** - Customize IQ behavior and settings
- **[Troubleshooting](./troubleshooting.md)** - Resolve common issues

For additional assistance, contact HCL Support or refer to the HCL DX documentation portal.
