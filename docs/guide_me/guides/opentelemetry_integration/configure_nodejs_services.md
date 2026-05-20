# Configuring Node.js services

The following Node.js services in HCL DX include built-in OpenTelemetry instrumentation: Digital Asset Management (DAM), Image Processor, and Ring API.

!!!note
    OpenTelemetry packages and instrumentation modules are already included in the HCL DX container images. Configuration is managed through the HCL DX Helm chart, which automatically generates service names with pod identifiers appended (e.g., `dam-0`, `ringapi-1`).

## Enabling OpenTelemetry via Helm

OpenTelemetry is enabled and configured through the HCL DX Helm chart values file under the `incubator` section. The incubator section contains experimental features that are planned for production in future releases. For more information about experimental features, refer to [Experimental Features](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_experimental_features.md).

!!!important
    Features within the incubator section are experimental and not recommended for production environments. Configuration values are subject to change in future releases.

Add or update the following section in your `values.yaml`:

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
    
    # Debug mode - shows OTEL config in pod logs
    debug:
      enabled: true
    
    # Global log level for OTEL SDK diagnostics
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

**Configuration Details**:

- **Service Names**: Automatically generated as `<service-type>-<pod-number>` (e.g., `dam-0`, `imageprocessor-1`)
- **Configuration Source**: All settings are read from `/etc/global-config` ConfigMap mounted in each pod
- **Resource Attributes**: Pod name and pod number are automatically added to all telemetry data
- **Debug Mode**: When `debug.enabled: true`, startup scripts display OpenTelemetry configuration in pod logs

## Verifying Node.js Configuration

After enabling OpenTelemetry via Helm, verify the configuration:

1. Check ConfigMap is mounted:

    ```bash
    kubectl exec -it <pod-name> -n <namespace> -- ls -la /etc/global-config
    ```

2. View OpenTelemetry configuration (Debug Mode):

    For DAM:

    ```bash
    POD_NAME=$(kubectl get pods -n <namespace> -l app=dx-digital-asset-management -o jsonpath='{.items[0].metadata.name}')
    kubectl exec -it $POD_NAME -n <namespace> -- env OTEL_DRY_RUN=true /opt/app/start_all_server.sh
    ```

    For Ring API:

    ```bash
    POD_NAME=$(kubectl get pods -n <namespace> -l app=dx-ring-api -o jsonpath='{.items[0].metadata.name}')
    kubectl exec -it $POD_NAME -n <namespace> -- env OTEL_DRY_RUN=true /opt/app/start_all_server.sh
    ```

    For Image Processor:

    ```bash
    POD_NAME=$(kubectl get pods -n <namespace> -l app=dx-image-processor -o jsonpath='{.items[0].metadata.name}')
    kubectl exec -it $POD_NAME -n <namespace> -- env OTEL_DRY_RUN=true /home/dx_user/start_all_server.sh
    ```

3. Check OpenTelemetry packages are installed:

    ```bash
    kubectl exec -it $POD_NAME -n <namespace> -- npm list --depth=0 | grep opentelemetry
    ```

4. Verify environment variables:

    ```bash
    kubectl exec -it $POD_NAME -n <namespace> -- env | grep OTEL_
    ```

5. Check application logs for initialization:

    ```bash
    kubectl logs <pod-name> -n <namespace> | grep -i "opentelemetry\|otel"
    ```
