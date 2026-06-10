# Enabling OTel for Java and Node.js services

Configure OpenTelemetry (OTel) tracking across your Java and Node.js services to monitor the performance of your HCL DX applications. Managing these configurations centrally within your HCL DX Helm chart ensures consistent telemetry collection across your entire deployment.

The Helm chart enables OTel instrumentation for both Java and Node.js services:

- Digital Asset Management (DAM), Image Processor, and Ring API are Node.js services that feature built-in OTel tracking.
- DX Core, WebEngine, Runtime Controller, and License Manager are Java services that use the pre-bundled OTel Java agent.

HCL DX container images already include the required OTel packages and agents. The HCL DX Helm chart manages the configuration and automatically appends pod identifiers to service names.

## Enabling OTel using Helm

You can enable and configure OTel in the HCL DX Helm chart `values.yaml` file. The configuration applies to all services regardless of their runtime (Java or Node.js).

Add or update the following section in your `values.yaml`:

```yaml
  openTelemetry:
    # Enable OTel integration
    enabled: true
    
    # OTel Collector endpoint
    collectorEndpoint: "http://otel-collector.observability.svc.cluster.local:4318"

    # Protocol: http/protobuf (default) or grpc
    protocol: "http/protobuf"

  # Service configuration
  # Allows for easy identification of your telemetry data in observability backends
  service:
    # Base name to be used with the telemetry data
    # Defaults to the Helm release name chosen during helm install if left empty
    # 
    # Actual service names will be: <name>-<service-type>-<pod-number>
    # Examples:
    #   - "dx-prod" → "dx-prod-digital-asset-management-0", "dx-prod-digital-asset-management-1"
    #   - "my-dx" → "my-dx-core-0", "my-dx-core-1"
    #
    # Leave empty to use Helm release name automatically
    name: ""
    
    # Namespace to be used with the telemetry data
    # Defaults to the namespace of your deployment if left empty
    # This is added as "deployment.environment" resource attribute
    # 
    # Leave empty to use deployment namespace automatically
    namespace: ""
  
  # OpenTelemetry SDK log level configuration
  # NOTE: This controls ONLY the OpenTelemetry SDK's internal diagnostic logging
  # (e.g., span export messages, SDK initialization, instrumentation loading).
  # This does NOT affect your application's log output (application logs are controlled separately).
  logging:
    # Global default log level for all services (none, error, warn, info, debug, verbose)
    # Default: info
    default: "info"
    
    # Per-service log level overrides (optional)
    # Use these to enable debug logging for specific services without affecting others
    services:
      # Core DX services
      core: "info"
      contentComposer: "info"
      digitalAssetManagement: "info"
      imageProcessor: "info"
      licenseManager: "info"
      openLdap: "info"
      persistence: "info"
      remoteSearch: "info"
      ringApi: "info"
      runtimeController: "info"
      webEngine: "info"
    
    # Debug mode - shows OTel config in pod logs
    debug:
      enabled: false
```

!!! note "Service-specific details"
    - **Node.js services** (DAM, Image Processor, Ring API) use built-in OTel packages and modules
    - **Java services** (Core, WebEngine, Runtime Controller, License Manager) use the pre-bundled OTel Java agent (version 2.22.0) at `/opt/otel/opentelemetry-javaagent.jar` <!--repeats Line 5?-->

## Deploying the configuration

Before you deploy, review how the Helm chart manages your services:

- **Service names**: The Helm chart automatically generates OTel service names based on the runtime and component:
    - **Node.js services**: Appends the pod identifier to the service name using the `<service-type>-<pod-number>` format, such as `dam-0` or `imageprocessor-1`.
    - **Java services**: Uses the standard deployment component identifiers, such as `core`, `webengine`, `runtimecontroller`, or `licensemanager`.
- **Configuration source**: All pods read their OTel settings from the shared `/etc/global-config` ConfigMap mounted inside each container.
- **Resource attributes**: The configuration automatically adds the pod name and pod number to all telemetry data.
- **Debug mode**: When `debug.enabled` is set to `true`, the startup scripts print the active OTel configuration directly into the container logs during startup.

Apply the changes using the following steps:

1. Upgrade your HCL DX deployment to apply the changes to your live cluster:

    ```bash
    helm upgrade dx-deployment hcl-dx-deployment \
      --namespace <your-namespace> \
      --values your-custom-values.yaml
    ```

    !!! note
        Pods restart automatically when the system detects OTel configuration changes.

2. Monitor the status of the deployment rollout:

    ```bash
    # Watch pod restarts
    kubectl get pods -n <namespace> -w

    # Check rollout status
    kubectl rollout status statefulset/dx-deployment-web-engine -n <namespace>
    kubectl rollout status deployment/dx-deployment-ring-api -n <namespace>
    ```

## Verifying the configuration

After the deployment rollout finishes and your pods are running, verify that the telemetry integrations are active.

### Verifying the Node.js configuration

1. Verify that the ConfigMap is mounted.

    ```bash
    kubectl exec -it <pod-name> -n <namespace> -- ls -la /etc/global-config
    ```

2. View the OTel configuration in debug mode.

    - **DAM**:

        ```bash
        POD_NAME=$(kubectl get pods -n <namespace> -l app=dx-digital-asset-management -o jsonpath='{.items[0].metadata.name}')
        kubectl exec -it $POD_NAME -n <namespace> -- env OTEL_DRY_RUN=true /opt/app/start_all_server.sh
        ```

    - **Ring API**:

        ```bash
        POD_NAME=$(kubectl get pods -n <namespace> -l app=dx-ring-api -o jsonpath='{.items[0].metadata.name}')
        kubectl exec -it $POD_NAME -n <namespace> -- env OTEL_DRY_RUN=true /opt/app/start_all_server.sh
        ```

    - **Image Processor**:

        ```bash
        POD_NAME=$(kubectl get pods -n <namespace> -l app=dx-image-processor -o jsonpath='{.items[0].metadata.name}')
        kubectl exec -it $POD_NAME -n <namespace> -- env OTEL_DRY_RUN=true /home/dx_user/start_all_server.sh
        ```

3. Verify that the OpenTelemetry packages are installed.

    ```bash
    kubectl exec -it $POD_NAME -n <namespace> -- npm list --depth=0 | grep opentelemetry
    ```

4. Verify environment variables.

    ```bash
    kubectl exec -it $POD_NAME -n <namespace> -- env | grep OTEL_
    ```

5. Check the application logs for initialization.

    ```bash
    kubectl logs <pod-name> -n <namespace> | grep -i "opentelemetry\|otel"
    ```

### Verifying the Java configuration

1. Verify that the Java agent is configured.

    ```bash
    kubectl exec -it <pod-name> -n <namespace> -- bash -c 'echo $JAVA_TOOL_OPTIONS'
    # Expected output: -javaagent:/opt/otel/opentelemetry-javaagent.jar
    ```

2. Verify that the Java agent JAR file exists.

    ```bash
    kubectl exec -it <pod-name> -n <namespace> -- ls -lh /opt/otel/opentelemetry-javaagent.jar
    ```

3. View the OTel configuration in debug mode.

    - **WebEngine**:

        ```bash
        kubectl exec -it dx-deployment-web-engine-0 -n <namespace> -- \
          env OTEL_DRY_RUN=true /opt/openliberty/wlp/usr/svrcfg/entrypoint/entryPoint.sh
        ```

    - **Core**:

        ```bash
        kubectl exec -it dx-deployment-core-0 -n <namespace> -- \
          env OTEL_DRY_RUN=true /opt/app/entrypoints/startNative.sh
        ```

    - **Runtime Controller**:

        ```bash
        POD_NAME=$(kubectl get pods -n <namespace> -l app=dx-runtime-controller -o jsonpath='{.items[0].metadata.name}')
        kubectl exec -it $POD_NAME -n <namespace> -- \
          env OTEL_DRY_RUN=true /deployments/java-entrypoint.sh
        ```

    - **License Manager**:

        ```bash
        kubectl exec -it dx-deployment-license-manager-0 -n <namespace> -- \
          env OTEL_DRY_RUN=true ./commands.sh
        ```

4. Check for the Java agent initialization message.

    ```bash
    kubectl logs <pod-name> -n <namespace> | grep -i "opentelemetry\|javaagent"
    # Look for: [otel.javaagent] OpenTelemetry automatic instrumentation enabled
    ```

5. Verify the debug mode output if it is enabled.

    ```bash
    kubectl logs <pod-name> -n <namespace> | grep -i "Reading OpenTelemetry configuration"
    ```
