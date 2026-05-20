# Configuring Java services

The following Java services in HCL DX include the OpenTelemetry Java Agent: DX Core, WebEngine, Runtime Controller, and License Manager.

!!!note
    The OpenTelemetry Java Agent (version 2.23.0) is pre-bundled in all HCL DX container images at `/opt/otel/opentelemetry-javaagent.jar`. The agent JAR is downloaded from HCL's internal Maven repositories during the container image build process. Configuration is managed through the HCL DX Helm chart, which automatically generates service names with pod identifiers appended.

## Enabling OpenTelemetry via Helm

OpenTelemetry for Java services is configured through the same Helm chart incubator section as Node.js services. Add or update the following in your `values.yaml`:

```yaml
incubator:
  openTelemetry:
    # Enable OpenTelemetry integration
    enabled: true
    
    # OpenTelemetry Collector endpoint
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

**Configuration Details**:

- **Service Names**: Automatically generated as `<service-type>-<pod-number>` (e.g., `webengine-0`, `runtimecontroller-1`)
- **Java Agent Path**: Automatically configured via `JAVA_TOOL_OPTIONS` environment variable
- **Configuration Source**: All settings are read from `/etc/global-config` ConfigMap
- **Resource Attributes**: Pod name, pod number, and custom attributes are automatically included

## Verifying Java Configuration

After enabling OpenTelemetry via Helm, verify the configuration:

1. Verify Java agent is configured:

    ```bash
    kubectl exec -it <pod-name> -n <namespace> -- bash -c 'echo $JAVA_TOOL_OPTIONS'
    # Expected output: -javaagent:/opt/otel/opentelemetry-javaagent.jar
    ```

2. Check Java agent JAR exists:

    ```bash
    kubectl exec -it <pod-name> -n <namespace> -- ls -lh /opt/otel/opentelemetry-javaagent.jar
    ```

3. View OpenTelemetry configuration (Debug Mode):

    For WebEngine:

    ```bash
    kubectl exec -it dx-deployment-web-engine-0 -n <namespace> -- \
      env OTEL_DRY_RUN=true /opt/openliberty/wlp/usr/svrcfg/entrypoint/entryPoint.sh
    ```

    For Core:
  
    ```bash
    kubectl exec -it dx-deployment-core-0 -n <namespace> -- \
      env OTEL_DRY_RUN=true /opt/app/entrypoints/startNative.sh
    ```

    For Runtime Controller:

    ```bash
    POD_NAME=$(kubectl get pods -n <namespace> -l app=dx-runtime-controller -o jsonpath='{.items[0].metadata.name}')
    kubectl exec -it $POD_NAME -n <namespace> -- \
      env OTEL_DRY_RUN=true /deployments/java-entrypoint.sh
    ```

    For License Manager:

    ```bash
    kubectl exec -it dx-deployment-license-manager-0 -n <namespace> -- \
      env OTEL_DRY_RUN=true ./commands.sh
    ```

4. Check for Java agent initialization message:

    ```bash
    kubectl logs <pod-name> -n <namespace> | grep -i "opentelemetry\|javaagent"
    # Look for: [otel.javaagent] OpenTelemetry automatic instrumentation enabled
    ```

5. Verify debug mode output (if enabled):

    ```bash
    kubectl logs <pod-name> -n <namespace> | grep -i "Reading OpenTelemetry configuration"
    ```

## Deploying with OpenTelemetry Enabled

After adding the OpenTelemetry configuration to your `values.yaml`, upgrade your HCL DX deployment:

```bash
helm upgrade dx-deployment hcl-dx-deployment \
  --namespace <your-namespace> \
  --values your-custom-values.yaml
```

!!! note
    Pods will automatically restart when OpenTelemetry configuration changes are detected.

**Monitor the deployment:**

```bash
# Watch pod restarts
kubectl get pods -n <namespace> -w

# Check rollout status
kubectl rollout status statefulset/dx-deployment-web-engine -n <namespace>
kubectl rollout status deployment/dx-deployment-ring-api -n <namespace>
```
