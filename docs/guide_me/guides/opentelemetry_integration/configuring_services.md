# Enabling OTel for Java and Node.js services

Configure OpenTelemetry (OTel) tracking across your Java and Node.js services to monitor the performance of your HCL DX applications. Managing these configurations centrally within your HCL DX Helm chart ensures consistent telemetry collection across your entire deployment.

Use the Helm chart to enable built-in OTel instrumentation for Node.js services such as DAM, the Image Processor, and the Ring API. The chart also activates the pre-bundled OTel Java agent for DX Core, WebEngine, the Runtime Controller, and the License Manager.

You can enable and configure OTel in the incubator section of the HCL DX Helm chart `values.yaml` file. The incubator section contains experimental features planned for future production releases.

!!!warning
    Features in the incubator section are experimental and are not recommended for production environments. Configuration values can change in future releases. For more information about experimental features, refer to [Experimental Features](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_experimental_features.md).

## Enabling OTel for Node.js services using Helm

You can configure OTel tracking to monitor the performance of Node.js services in your HCL DX deployment. The Digital Asset Management (DAM), Image Processor, and Ring API Node.js services feature built-in OTel tracking.

HCL DX container images already include the required OTel packages and modules. The HCL DX Helm chart manages the configuration and automatically appends pod identifiers to service names, such as `dam-0` or `ringapi-1`.

Add or update the following section in your `values.yaml`:

```yaml
incubator:
  openTelemetry:
    # Enable OTel integration
    enabled: true
    
    # OTel Collector endpoint
    collectorEndpoint: "http://otel-collector.observability.svc.cluster.local:4318"
    
    # Protocol: http/protobuf (default) or grpc
    protocol: "http/protobuf"
    
    # Exporters configuration
    tracesExporter: "otlp"
    metricsExporter: "otlp"
    logsExporter: "otlp"
    
    # Debug mode - shows OTel config in pod logs
    debug:
      enabled: true
    
    # Global log level for OTel SDK diagnostics
    logLevel: "info"  # options: debug, info, warn, error
    
    # Per-service configuration (optional overrides)
    services:
      dam:
        logLevel: "info"
      imageprocessor:
        logLevel: "info"
      ringapi:
        logLevel: "info"
```

## Enabling OTel for Java services using Helm

You can configure OTel tracking to monitor the performance of Java services in your HCL DX deployment. The DX Core, WebEngine, Runtime Controller, and License Manager Java services include the OTel Java agent.

HCL DX container images pre-bundle the OTel Java agent (version 2.23.0) at `/opt/otel/opentelemetry-javaagent.jar`. The HCL DX Helm chart manages the configuration and automatically appends pod identifiers to service names.

Add or update the following section in your `values.yaml` file:

```yaml
incubator:
  openTelemetry:
    # Enable OTel integration
    enabled: true
    
    # OTel Collector endpoint
    collectorEndpoint: "http://otel-collector.observability.svc.cluster.local:4318"
    
    # Protocol: http/protobuf (default) or grpc
    protocol: "http/protobuf"
    
    # Exporters configuration
    tracesExporter: "otlp"
    metricsExporter: "otlp"
    logsExporter: "otlp"
    
    # Debug mode
    debug:
      enabled: true
    
    # Global log level
    logLevel: "info"
    
    # Per-service configuration
    services:
      core:
        logLevel: "info"
      webengine:
        logLevel: "debug"
      runtimecontroller:
        logLevel: "info"
      licensemanager:
        logLevel: "info"
```

## Deploying the configuration

Before you deploy, review how the Helm chart manages your services:

- **Service names**: The Helm chart automatically generates OTel service names based on the runtime and component:
    - **Node.js services**: Appends the pod identifier to the service name using the `<service-type>-<pod-number>` format, such as `dam-0` or `imageprocessor-1`.
    - **Java services**: Uses the standard deployment component identifiers, such as `core`, `webengine`, `runtimecontroller`, or `licensemanager`.
- **Configuration source**: All pods read their OTel settings from the shared `/etc/global-config` ConfigMap mounted inside each container.
- **Resource attributes**: The configuration automatically adds the pod name and pod number to all telemetry data.
- **Debug mode (Java services only)**: When `debug.enabled` is set to `true`, the startup scripts print the active OTel configuration directly into the container logs during startup.

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
