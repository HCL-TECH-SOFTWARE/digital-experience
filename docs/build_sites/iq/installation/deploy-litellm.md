# Deploying LiteLLM

This page provides instructions for deploying LiteLLM as a prerequisite service for IQ. LiteLLM acts as a unified proxy and gateway to manage access to LLM providers such as AWS Bedrock, OpenAI, and Anthropic while abstracting provider differences into a unified API. It handles API key rotation and authentication, supports multiple concurrent model configurations, and tracks usage for observability.

Before you can [install the IQ backend services](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_deploy_iq_services.md), you must configure the following LiteLLM proxy models:

- `iq-general-purpose`: A premium model (such as Claude 4.6 Sonnet or 4.8 Opus) for general inquiries and tool execution
- `iq-summary`: A cost-efficient model (such as Claude 4.5 Haiku) for conversation summarization

!!! note
    IQ transmits conversation history to LiteLLM to enable proper context and functionality. User authentication credentials (cookies) remain within your Kubernetes cluster and are never transmitted to external LLM services. You control the LiteLLM proxy server and determine where conversation data is routed.

## Prerequisites

Before deploying LiteLLM, ensure:

- Your DX Kubernetes cluster is running and accessible.
- A valid DX namespace exists (for example, `dxns`).
- Valid credentials or API keys are available for your LLM provider (such as AWS Bedrock or OpenAI).
- `kubectl` is configured to access your cluster.

If your IQ deployment requires persistence, ensure:

- An external PostgreSQL database (such as an AWS RDS instance) is available.
- Database connection details are available, including username, password, endpoint, port, and database name.

## Deploying LiteLLM in-cluster

LiteLLM deploys as a container in the DX Kubernetes namespace to manage traffic for IQ. This standard architecture routes requests through an internal gateway, maintaining prompt data within the cluster perimeter and securing API credentials through Kubernetes secrets.

1. Add the LiteLLM helm repository to your environment:

    ```bash
    helm repo add litellm https://ghcr.io/berriai/litellm-helm
    helm repo update
    ```

2. Select the deployment mode and corresponding Docker image variant for your environment:

    | Deployment mode | Image variant | Repository | Description |
    |:----------------|:--------------|:-----------|:------------|
    | Quick start | Standard  | `ghcr.io/berriai/litellm`| LiteLLM runs in stateless mode without a database. Recommended for development and testing. Model lists are stored in memory and reset on pod restart. |
    | Production | Database  | `ghcr.io/berriai/litellm-database` | LiteLLM integrates with an external PostgreSQL database to persist model configurations, virtual keys, and usage data across pod restarts.|

    !!! tip "Capacity planning"
        Before deploying LiteLLM, ensure that your Kubernetes nodes have sufficient unallocated resources to schedule the pod. By default, LiteLLM requests **100m CPU** and **512Mi Memory**. You can check your available node capacity by running `kubectl describe nodes` and reviewing the **Allocated resources** section. If nodes are near capacity, provision additional nodes or use a larger instance type.

3. Create the Kubernetes secrets in your DX namespace:  

    === "Quick start"

        1. Generate a random master key:

            ```bash
            openssl rand -base64 32
            ```

        2. Create the LiteLLM master key secret:

            ```bash
            kubectl create secret generic litellm-masterkey \
              --from-literal=PROXY_MASTER_KEY=<GENERATED_RANDOM_KEY> \
              -n dxns
            ```

        3. Create the LLM provider credentials secret. For example:

            !!! tip "Consolidated secrets"
                To reduce the number of secrets to manage, combine the provider credentials and master key into a single `litellm-env` secret. 

            - AWS Bedrock:

                ```bash
                kubectl create secret generic litellm-env \
                  --from-literal=AWS_BEARER_TOKEN_BEDROCK=<YOUR_AWS_BEARER_TOKEN> \
                  --from-literal=PROXY_MASTER_KEY=<GENERATED_RANDOM_KEY> \
                  -n dxns
                ```

            - OpenAI:

                ```bash
                kubectl create secret generic litellm-env \
                  --from-literal=OPENAI_API_KEY=<YOUR_OPENAI_KEY> \
                  --from-literal=PROXY_MASTER_KEY=<GENERATED_RANDOM_KEY> \
                  -n dxns
                ```

            - Anthropic:

                ```bash
                kubectl create secret generic litellm-env \
                  --from-literal=ANTHROPIC_API_KEY=<YOUR_ANTHROPIC_KEY> \
                  --from-literal=PROXY_MASTER_KEY=<GENERATED_RANDOM_KEY> \
                  -n dxns
                ```

    === "Production"

        1. Generate a random master key:

            ```bash
            openssl rand -base64 32
            ```

        2. Create the LiteLLM master key secret:

            ```bash
            kubectl create secret generic litellm-masterkey \
              --from-literal=PROXY_MASTER_KEY=<GENERATED_RANDOM_KEY> \
              -n dxns
            ```

        3. Create the LLM provider credentials secret. For example:

            !!! tip "Consolidated secrets"
                To reduce the number of secrets to manage, combine the provider credentials and master key into a single `litellm-env` secret. 

            - AWS Bedrock:

                ```bash
                kubectl create secret generic litellm-env \
                  --from-literal=AWS_BEARER_TOKEN_BEDROCK=<YOUR_AWS_BEARER_TOKEN> \
                  --from-literal=PROXY_MASTER_KEY=<GENERATED_RANDOM_KEY> \
                  -n dxns
                ```

            - OpenAI:

                ```bash
                kubectl create secret generic litellm-env \
                  --from-literal=OPENAI_API_KEY=<YOUR_OPENAI_KEY> \
                  --from-literal=PROXY_MASTER_KEY=<GENERATED_RANDOM_KEY> \
                  -n dxns
                ```

            - Anthropic:

                ```bash
                kubectl create secret generic litellm-env \
                  --from-literal=ANTHROPIC_API_KEY=<YOUR_ANTHROPIC_KEY> \
                  --from-literal=PROXY_MASTER_KEY=<GENERATED_RANDOM_KEY> \
                  -n dxns
                ```

        4. Create the database credentials secret:

            ```bash
            kubectl create secret generic litellm-db-credentials \
              --from-literal=username=<DB_USERNAME> \
              --from-literal=password=<DB_PASSWORD> \
              -n dxns
            ```

        5. Verify that your database is accessible from the Kubernetes cluster to prevent `CrashLoopBackOff` errors due to misconfigured credentials.

            ```bash
            kubectl run db-validator --rm -i --restart=Never \
              --image=postgres:alpine \
              --env="PGPASSWORD=<DB_PASSWORD>" \
              -n dxns \
              --command -- psql -h <RDS_ENDPOINT> -p 5432 -U <DB_USERNAME> -d litellm -c "SELECT 1;"
            ```

            - `<DB_PASSWORD>`: The database password.
            - `<RDS_ENDPOINT>`: The database endpoint (for example, `litellm-db.xxxx.us-east-1.rds.amazonaws.com`).
            - `<DB_USERNAME>`: The database username.

            Expected response: `1`.

4. Create the Helm values file:

    === "Quick start"

        Save the following configuration to the `litellm-values.yaml` file:

        !!! warning "Model compatibility"
            Do not use OpenAI reasoning model variants (for example, GPT-5.x decimal-versioned models such as `gpt-5.4`, `gpt-5.5`, or `gpt-5.6-sol`) with IQ. These models automatically inject a `reasoning_effort` parameter to every request, which conflicts with IQ's function tools, and returns the following error: `Function tools with reasoning_effort are not supported`. The base models (`gpt-5` and `gpt-5-mini`) do not inject `reasoning_effort`, but are not validated for production use. AWS Bedrock Claude models, such as Sonnet or Haiku, are recommended for production deployments.

        ```yaml
        replicaCount: 1

        image:
          repository: ghcr.io/berriai/litellm
          pullPolicy: IfNotPresent
          tag: "main-latest"

        masterkeySecretName: litellm-masterkey
        masterkeySecretKey: PROXY_MASTER_KEY

        environmentSecrets:
          - litellm-env

        db:
          deployStandalone: false
          useExisting: false

        migrationJob:
          enabled: false

        proxy_config:
          model_list:
            - model_name: iq-general-purpose
              litellm_params:
                model: "bedrock/us.anthropic.claude-sonnet-4-6-20250514-v1:0"
                api_key: os.environ/AWS_BEARER_TOKEN_BEDROCK
            
            - model_name: iq-summary
              litellm_params:
                model: "bedrock/us.anthropic.claude-haiku-4-5-20251001-v1:0"
                api_key: os.environ/AWS_BEARER_TOKEN_BEDROCK

          litellm_settings:
            json_logs: true  # Structured JSON logging for easier log parsing
            drop_params: true  # Critical: Prevents unsupported parameters from being forwarded to the LLM provider
          
          general_settings:
            master_key: os.environ/PROXY_MASTER_KEY

        logLevel: INFO
        ```

        !!! note "For OpenAI or other providers"
            Replace the `model` and `api_key` values in `proxy_config.model_list` with your provider's configuration. For more information on the syntax, refer to [LiteLLM Proxy - Model Management](https://docs.litellm.ai/docs/proxy/model_management){target="_blank"}.

    === "Production"

        1. Save the following configuration to the `litellm-values.yaml` file:

            !!! warning "Model compatibility"
                Do not use OpenAI reasoning model variants (for example, GPT-5.x decimal-versioned models such as `gpt-5.4`, `gpt-5.5`, or `gpt-5.6-sol`) with IQ. These models automatically inject a `reasoning_effort` parameter to every request, which conflicts with IQ's function tools, and returns the following error: `Function tools with reasoning_effort are not supported`. The base models (`gpt-5` and `gpt-5-mini`) do not inject `reasoning_effort`, but are not validated for production use. AWS Bedrock Claude models, such as Sonnet or Haiku, are recommended for production deployments.

            ```yaml
            replicaCount: 1

            image:
              repository: ghcr.io/berriai/litellm-database
              pullPolicy: IfNotPresent
              tag: "1.45.0"  # Use specific version in production

            # Security context - LiteLLM requires root for Prisma binary download
            securityContext:
              runAsUser: 0
              runAsGroup: 0

            # External PostgreSQL database configuration
            db:
              useExisting: true
              endpoint: "<RDS_ENDPOINT>"        # for example, litellm-db.xxxx.us-east-1.rds.amazonaws.com
              port: 5432                         # Adjust if using non-standard port
              database: "litellm"                # Your database name
              deployStandalone: false
              secret:
                name: litellm-db-credentials
                usernameKey: username
                passwordKey: password

            migrationJob:
              enabled: true  # Enable for database migrations on first deployment

            # Master key for API authentication
            masterkeySecretName: litellm-masterkey
            masterkeySecretKey: PROXY_MASTER_KEY

            # Inject secrets as environment variables for model access
            environmentSecrets:
              - litellm-env

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
                json_logs: true  # Structured JSON logging for easier log parsing
                drop_params: true  # Critical: Prevents unsupported parameters from being forwarded to the LLM provider
              
              general_settings:
                master_key: os.environ/PROXY_MASTER_KEY

            logLevel: INFO

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

            !!! important "Discard unsupported parameters"
                Set `drop_params` to `true` for IQ deployments to automatically discard parameters unsupported by an LLM provider and ensure cross-provider compatibility. Disabling this setting causes API errors when IQ forwards parameters that are not supported by providers such as AWS Bedrock, OpenAI, or Anthropic.

        2. (Optional) Validate your Helm configuration:

            ```bash
            helm upgrade --install litellm litellm/litellm \
              -f litellm-values.yaml \
              -n dxns \
              --dry-run \
              --debug
            ```

            Review the output for any syntax errors or misconfigurations. If successful, the command display the rendered Kubernetes manifests without creating resources.

5. Deploy LiteLLM using Helm:

    1. Deploy LiteLLM to the `dxns` namespace:

        ```bash
        helm upgrade --install litellm litellm/litellm \
          -f litellm-values.yaml \
          -n dxns
        ```

    2. Monitor the deployment:

        ```bash
        kubectl get pods -n dxns -l app=litellm
        kubectl logs -n dxns -l app=litellm -f
        ```

    3. Verify pod readiness:

        ```bash
        kubectl wait --for=condition=ready pod \
          -l app=litellm \
          -n dxns \
          --timeout=300s
        ```

6. Verify the LiteLLM deployment:

    1. Forward local port `8000` to port `4000` on the LiteLLM service:

        ```bash
        # Port-forward to access LiteLLM locally
        kubectl port-forward -n dxns svc/litellm 8000:4000
        ```

    2. In a separate terminal session, test the readiness endpoint:

        ```bash
        # Test health endpoint (in another terminal)
        curl http://localhost:8000/health/readiness
        ```

        Expected response:

        ```json
        {
          "status": "healthy"
        }
        ```

    3. Test model availability:

        ```bash
        curl -H "Authorization: Bearer <LITELLM_MASTER_KEY>" \
          http://localhost:8000/v1/models
        ```

    4. Test end-to-end chat completion:

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

        Expected response: A JSON object with a `choices` array containing the model's response.

### LiteLLM service endpoint

After LiteLLM is deployed and verified, LiteLLM is accessible within your cluster at:

```url
http://litellm.dxns.svc.cluster.local:4000
```

## Next step

After deploying and verifying LiteLLM, [deploy the IQ Integrator and MCP Server](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_deploy_iq_services.md).

???+ info "Related information"
    - [Deploying IQ services](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_deploy_iq_services.md)
    - [IQ environment variables](environment-variables.md)
    - [LiteLLM Proxy](https://docs.litellm.ai/docs/proxy/deploy){target="_blank"}
    - [LiteLLM Proxy - Model Management](https://docs.litellm.ai/docs/proxy/model_management){target="_blank"}
    - [LiteLLM GitHub repository](https://github.com/BerriAI/litellm){target="_blank"}
    - [Troubleshooting - LiteLLM](../troubleshooting.md#litellm)
