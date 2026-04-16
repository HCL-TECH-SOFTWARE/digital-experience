# OpenTelemetry Integration with HCL Digital Experience

## Overview

This guide provides comprehensive instructions for integrating OpenTelemetry (OTel) with HCL Digital Experience (DX) to enable observability across your deployment. OpenTelemetry is an open-source observability framework that provides a unified approach to collecting traces, metrics, and logs from your applications.

By integrating OpenTelemetry with HCL DX, you can:

- Collect distributed traces across all DX components
- Monitor application metrics and performance indicators
- Aggregate logs with correlation context
- Export telemetry data to your preferred observability backend (Prometheus, Grafana, Elastic, etc.)

## Prerequisites

Before proceeding with the integration, ensure you have:

- A running HCL Digital Experience deployment on Kubernetes
- Helm 3.0 or later installed and configured
- kubectl access to your Kubernetes cluster
- Administrative access to modify deployment configurations
- An observability backend or endpoint to receive telemetry data (Prometheus, Grafana, etc.)

## Architecture

HCL DX consists of multiple services that can be instrumented with OpenTelemetry:

**Node.js Services:**
- Digital Asset Management (DAM)
- Image Processor
- Ring API

**Java Services:**
- DX Core
- WebEngine
- Runtime Controller
- License Manager

The OpenTelemetry Collector acts as a centralized telemetry data pipeline that receives, processes, and exports observability data from all instrumented services.

## Quick Start: Deploying the OpenTelemetry Collector

### Step 1: Add the OpenTelemetry Helm Repository

The OpenTelemetry Collector can be deployed using the official Helm chart from the OpenTelemetry community.

```bash
helm repo add open-telemetry https://open-telemetry.github.io/opentelemetry-helm-charts
helm repo update
```

### Step 2: Create a Configuration Values File

Create a values file named `otel-collector-values.yaml` to configure the collector for your environment:

```yaml
mode: deployment

# Configure the collector pipeline
config:
  receivers:
    otlp:
      protocols:
        grpc:
          endpoint: 0.0.0.0:4317
        http:
          endpoint: 0.0.0.0:4318
    
    prometheus:
      config:
        scrape_configs:
          - job_name: 'otel-collector'
            scrape_interval: 10s
            static_configs:
              - targets: ['0.0.0.0:8888']

  processors:
    batch:
      timeout: 10s
      send_batch_size: 1024
    
    memory_limiter:
      check_interval: 1s
      limit_mib: 512
      spike_limit_mib: 128

  exporters:
    # Configure your observability backend
    # Example: Prometheus for metrics
    prometheus:
      endpoint: "0.0.0.0:8889"
    
    # Example: OTLP exporter for Grafana Tempo (traces)
    otlp:
      endpoint: "tempo.observability.svc.cluster.local:4317"
      tls:
        insecure: true
    
    # Example: Logging exporter for debugging
    logging:
      loglevel: info

  service:
    pipelines:
      traces:
        receivers: [otlp]
        processors: [memory_limiter, batch]
        exporters: [otlp, logging]
      
      metrics:
        receivers: [otlp, prometheus]
        processors: [memory_limiter, batch]
        exporters: [prometheus, logging]
      
      logs:
        receivers: [otlp]
        processors: [memory_limiter, batch]
        exporters: [logging]

# Resource limits
resources:
  limits:
    cpu: 1000m
    memory: 1Gi
  requests:
    cpu: 200m
    memory: 512Mi

# Service configuration
service:
  type: ClusterIP
  
# Ports to expose
ports:
  otlp:
    enabled: true
    containerPort: 4317
    servicePort: 4317
    protocol: TCP
  otlp-http:
    enabled: true
    containerPort: 4318
    servicePort: 4318
    protocol: TCP
  metrics:
    enabled: true
    containerPort: 8888
    servicePort: 8888
    protocol: TCP
  prometheus:
    enabled: true
    containerPort: 8889
    servicePort: 8889
    protocol: TCP
```

**Important Configuration Notes:**

- Update the `otlp.endpoint` with your actual backend endpoint (Grafana Tempo, Elastic APM, etc.)
- For Grafana setup, you can use Grafana Tempo for traces and Prometheus for metrics
- Configure additional exporters based on your observability stack
- Adjust resource limits based on your expected telemetry volume
- Enable TLS for production deployments by configuring appropriate certificates

### Step 3: Deploy the OpenTelemetry Collector

Deploy the collector to your Kubernetes cluster in the same namespace as your DX deployment:

```bash
helm install otel-collector open-telemetry/opentelemetry-collector \
  --namespace <your-dx-namespace> \
  --values otel-collector-values.yaml
```

To deploy in a dedicated observability namespace:

```bash
kubectl create namespace observability
helm install otel-collector open-telemetry/opentelemetry-collector \
  --namespace observability \
  --values otel-collector-values.yaml
```

### Step 4: Verify the Deployment

Check that the collector pods are running:

```bash
kubectl get pods -n <namespace> -l app.kubernetes.io/name=opentelemetry-collector
```

Verify the collector service endpoints:

```bash
kubectl get svc -n <namespace> -l app.kubernetes.io/name=opentelemetry-collector
```

View collector logs to ensure it is receiving and exporting data:

```bash
kubectl logs -n <namespace> -l app.kubernetes.io/name=opentelemetry-collector --tail=100 -f
```

## Configuring Node.js Services

The following Node.js services in HCL DX include built-in OpenTelemetry instrumentation: Digital Asset Management (DAM), Image Processor, and Ring API.

**Note**: OpenTelemetry packages and instrumentation modules are already included in the HCL DX container images. Configuration is managed through the HCL DX Helm chart, which automatically generates service names with pod identifiers appended (e.g., `dam-0`, `ringapi-1`).

### Enabling OpenTelemetry via Helm

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
        resourceAttributes: "environment=production,team=platform"
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

### Verifying Node.js Configuration

After enabling OpenTelemetry via Helm, verify the configuration:

**1. Check ConfigMap is mounted:**
```bash
kubectl exec -it <pod-name> -n <namespace> -- ls -la /etc/global-config
```

**2. View OpenTelemetry configuration (Debug Mode):**

For DAM:
```bash
POD_NAME=$(kubectl get pods -n <namespace> -l app=dx-digital-asset-management -o jsonpath='{.items[0].metadata.name}')
kubectl exec -it $POD_NAME -n <namespace> -- env OTEL_DRY_RUN=true /app/startup.sh
```

For Ring API:
```bash
POD_NAME=$(kubectl get pods -n <namespace> -l app=dx-ring-api -o jsonpath='{.items[0].metadata.name}')
kubectl exec -it $POD_NAME -n <namespace> -- env OTEL_DRY_RUN=true /app/startup.sh
```

For Image Processor:
```bash
POD_NAME=$(kubectl get pods -n <namespace> -l app=dx-image-processor -o jsonpath='{.items[0].metadata.name}')
kubectl exec -it $POD_NAME -n <namespace> -- env OTEL_DRY_RUN=true /app/startup.sh
```

**3. Check OpenTelemetry packages are installed:**
```bash
kubectl exec -it $POD_NAME -n <namespace> -- npm list --depth=0 | grep opentelemetry
```

**4. Verify environment variables:**
```bash
kubectl exec -it $POD_NAME -n <namespace> -- env | grep OTEL_
```

**5. Check application logs for initialization:**
```bash
kubectl logs <pod-name> -n <namespace> | grep -i "opentelemetry\|otel"
```

## Configuring Java Services

The following Java services in HCL DX include the OpenTelemetry Java Agent: DX Core, WebEngine, Runtime Controller, and License Manager.

**Note**: The OpenTelemetry Java Agent (version 2.23.0) is pre-bundled in all HCL DX container images at `/opt/otel/opentelemetry-javaagent.jar`. The agent JAR is downloaded from HCL's internal Maven repositories during the container image build process. Configuration is managed through the HCL DX Helm chart, which automatically generates service names with pod identifiers appended.

### Enabling OpenTelemetry via Helm

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

### Verifying Java Configuration

After enabling OpenTelemetry via Helm, verify the configuration:

**1. Verify Java agent is configured:**
```bash
kubectl exec -it <pod-name> -n <namespace> -- bash -c 'echo $JAVA_TOOL_OPTIONS'
# Expected output: -javaagent:/opt/otel/opentelemetry-javaagent.jar
```

**2. Check Java agent JAR exists:**
```bash
kubectl exec -it <pod-name> -n <namespace> -- ls -lh /opt/otel/opentelemetry-javaagent.jar
```

**3. View OpenTelemetry configuration (Debug Mode):**

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

**4. Check for Java agent initialization message:**
```bash
kubectl logs <pod-name> -n <namespace> | grep -i "opentelemetry\|javaagent"
# Look for: [otel.javaagent] OpenTelemetry automatic instrumentation enabled
```

**5. Verify debug mode output (if enabled):**
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

**Note**: Pods will automatically restart when OpenTelemetry configuration changes are detected.

**Monitor the deployment:**

```bash
# Watch pod restarts
kubectl get pods -n <namespace> -w

# Check rollout status
kubectl rollout status statefulset/dx-deployment-web-engine -n <namespace>
kubectl rollout status deployment/dx-deployment-ring-api -n <namespace>
```

## Monitoring and Troubleshooting

### Viewing Traces and Metrics

Access Grafana to view distributed traces and metrics. If you've deployed Grafana as part of the `kube-prometheus-stack`, you can access it via port-forwarding:

```bash
# Port-forward to Grafana
kubectl port-forward -n observability svc/prometheus-grafana 3000:80
```

Open your browser to `http://localhost:3000` (default credentials: admin/prom-operator).

**Viewing Traces in Grafana:**

1. Navigate to **Explore** in the left menu
2. Select **Tempo** as the data source (if configured)
3. Search for traces by service name (e.g., `webengine-0`, `dam-0`)
4. Filter by tags, duration, or time range

**Viewing Metrics in Grafana:**

1. Import DX-specific dashboards from the [Grafana dashboard page](https://grafana.com/grafana/dashboards/)
2. Use the following dashboard IDs for HCL DX components:
   - **14151**: [WebSphere Application Server PMI metrics](https://grafana.com/grafana/dashboards/14151) (Core, WebEngine)
   - **11159**: [NodeJS application dashboard](https://grafana.com/grafana/dashboards/11159) (DAM, Image Processor, Ring API)
3. For detailed monitoring guidance, refer to [Monitor Helm Deployment Metrics](../../../deployment/manage/container_configuration/monitoring/monitor_helm_deployment_metrics.md)

### Querying Metrics in Prometheus

If using Prometheus directly, you can also query metrics:

```bash
# Port-forward to Prometheus
kubectl port-forward -n observability svc/prometheus 9090:9090
```

Open `http://localhost:9090` and query OpenTelemetry metrics:

- `otel_*` - OpenTelemetry SDK metrics
- `http_server_duration_*` - HTTP server request duration
- `rpc_server_duration_*` - RPC server request duration
- Custom application metrics exported by DX services

### Common Issues

#### No Traces Appearing

1. Verify the OpenTelemetry collector is running:
   ```bash
   kubectl get pods -n observability -l app.kubernetes.io/name=opentelemetry-collector
   ```

2. Check collector logs for errors:
   ```bash
   kubectl logs -n observability -l app.kubernetes.io/name=opentelemetry-collector
   ```

3. Verify network connectivity between services and collector:
   ```bash
   kubectl exec -it <service-pod> -n <namespace> -- curl -v http://otel-collector.observability.svc.cluster.local:4317
   ```

4. Ensure instrumentation is initialized in service logs.

#### High Memory Usage

If the collector is consuming excessive memory:

1. Adjust the `memory_limiter` processor configuration
2. Reduce the batch size
3. Implement sampling to reduce trace volume
4. Scale the collector horizontally

#### Missing Service Dependencies

Distributed traces may not show complete request flows if:

1. Not all services are instrumented
2. Context propagation is not working (check HTTP headers)
3. Async operations lack proper span linking

## Best Practices

### Observability

1. **Monitor the Collector**: Set up monitoring for the collector itself
2. **Alert on Export Failures**: Create alerts for failed exports to backends
3. **Track Instrumentation Coverage**: Ensure all critical services are instrumented
4. **Regular Review**: Periodically review and optimize instrumentation configuration

## Additional Resources

### Helm Charts

- **OpenTelemetry Helm Charts Repository**: [https://github.com/open-telemetry/opentelemetry-helm-charts](https://github.com/open-telemetry/opentelemetry-helm-charts)
- **Helm Official Documentation**: [https://helm.sh/docs/](https://helm.sh/docs/)
- **Helm Chart Repository**: [https://artifacthub.io/packages/helm/opentelemetry-helm/opentelemetry-collector](https://artifacthub.io/packages/helm/opentelemetry-helm/opentelemetry-collector)

### OpenTelemetry Documentation

- **OpenTelemetry Official Website**: [https://opentelemetry.io/](https://opentelemetry.io/)
- **OpenTelemetry Specification**: [https://opentelemetry.io/docs/specs/otel/](https://opentelemetry.io/docs/specs/otel/)
- **OpenTelemetry Collector Documentation**: [https://opentelemetry.io/docs/collector/](https://opentelemetry.io/docs/collector/)
- **OpenTelemetry Collector Configuration**: [https://opentelemetry.io/docs/collector/configuration/](https://opentelemetry.io/docs/collector/configuration/)

### Language-Specific Instrumentation

- **OpenTelemetry Node.js**: [https://opentelemetry.io/docs/languages/js/](https://opentelemetry.io/docs/languages/js/)
- **OpenTelemetry Java**: [https://opentelemetry.io/docs/languages/java/](https://opentelemetry.io/docs/languages/java/)
- **OpenTelemetry Java Agent**: [https://github.com/open-telemetry/opentelemetry-java-instrumentation](https://github.com/open-telemetry/opentelemetry-java-instrumentation)
- **OpenTelemetry Java Agent Configuration**: [https://opentelemetry.io/docs/languages/java/automatic/configuration/](https://opentelemetry.io/docs/languages/java/automatic/configuration/)

### Observability Backends

- **Grafana**: [https://grafana.com/](https://grafana.com/)
- **Grafana Tempo** (traces): [https://grafana.com/oss/tempo/](https://grafana.com/oss/tempo/)
- **Prometheus**: [https://prometheus.io/](https://prometheus.io/)
- **Elastic Observability**: [https://www.elastic.co/observability](https://www.elastic.co/observability)

### HCL Digital Experience Resources

- **Monitor Helm Deployment Metrics**: [DX Monitoring Guide](../../../deployment/manage/container_configuration/monitoring/monitor_helm_deployment_metrics.md)
- **Experimental Features**: [Incubator Section Documentation](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_experimental_features.md)
- **Helm Values Reference**: [DX Helm Values Updates](../../../whatsnew/dx_helm_values_updates.md)

### Kubernetes

- **Kubernetes Documentation**: [https://kubernetes.io/docs/](https://kubernetes.io/docs/)
- **Kubernetes ConfigMaps**: [https://kubernetes.io/docs/concepts/configuration/configmap/](https://kubernetes.io/docs/concepts/configuration/configmap/)
- **Kubernetes Secrets**: [https://kubernetes.io/docs/concepts/configuration/secret/](https://kubernetes.io/docs/concepts/configuration/secret/)

## Summary

This guide has covered the complete process of integrating OpenTelemetry with HCL Digital Experience:

1. Deploying the OpenTelemetry Collector using Helm charts
2. Configuring Node.js services (DAM, Image Processor, Ring API) with built-in OpenTelemetry instrumentation
3. Configuring Java services (Core, WebEngine, Runtime Controller, License Manager) with pre-bundled Java agent
4. Enabling OpenTelemetry via HCL DX Helm chart incubator section
5. Monitoring and troubleshooting the integration using Grafana and Prometheus

By following these steps, you will have a comprehensive observability solution for your HCL DX deployment, enabling you to monitor performance, troubleshoot issues, and optimize your system effectively.

## Technical Implementation Details

For technical users and developers working with HCL DX container images:

### Java Agent Distribution

The OpenTelemetry Java Agent is integrated into all Java-based DX services during the container build process:

- **Version**: 2.23.0
- **Location**: `/opt/otel/opentelemetry-javaagent.jar` in all Java-based containers
- **Source**: Downloaded from HCL's internal Artifactory Maven repository during Docker image build

**Build-time Integration Methods:**

1. **WebEngine (liberty-foundation)**: Uses Maven dependency management via `pom.xml`
   ```xml
   <dependency>
       <groupId>prereq_fes.prereq.prereq-otel</groupId>
       <artifactId>opentelemetry-javaagent.jar</artifactId>
   </dependency>
   ```

2. **Core, Runtime Controller, License Manager**: Downloaded via curl in Dockerfile
   ```dockerfile
   RUN mkdir -p /opt/otel && \
       curl -fSL \
       https://artifactory.cwp.pnp-hcl.com/artifactory/quintana-maven-prod/prereq_fes/prereq/prereq-otel/opentelemetry-javaagent.jar/2.23.0/opentelemetry-javaagent.jar-2.23.0.jar \
       -o /opt/otel/opentelemetry-javaagent.jar
   ```

### Node.js Instrumentation Packages

Node.js services include OpenTelemetry packages in their `package.json` dependencies:

- `@opentelemetry/api`
- `@opentelemetry/sdk-node`
- `@opentelemetry/auto-instrumentations-node`
- `@opentelemetry/exporter-trace-otlp-grpc`
- `@opentelemetry/exporter-metrics-otlp-grpc`

These packages are installed during the npm install phase of the container build process.

## Related Documentation

- [Monitor Helm Deployment Metrics](../../../deployment/manage/container_configuration/monitoring/monitor_helm_deployment_metrics.md) - Prometheus metrics and Grafana dashboards for DX
- [Experimental Features](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_experimental_features.md) - Incubator section documentation
- [Performance Tuning Guides](../performance_tuning/index.md) - Optimize your DX deployment
- [Helm Values Reference](../../../whatsnew/dx_helm_values_updates.md) - Complete Helm chart configuration reference

For additional support or questions, please contact HCL Software Support or refer to the official HCL DX documentation.
