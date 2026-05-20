# Deploying the OpenTelemetry Collector

!!!important "Quick Start Configuration"
    The following OpenTelemetry Collector deployment is provided as a **quick start example** for development and testing purposes. This configuration is **not production-ready** and should not be used in production environments without significant modifications.

    For production deployments, customers must:
    
    - Consult the [official OpenTelemetry Collector documentation](https://opentelemetry.io/docs/collector/) for highly available setup patterns
    - Implement proper security measures (TLS, authentication, authorization)
    - Configure resource limits based on actual telemetry volume
    - Follow the latest best practices and recommendations from the OpenTelemetry community

## Step 1: Add the OpenTelemetry Helm Repository

The OpenTelemetry Collector can be deployed using the official Helm chart from the OpenTelemetry community.

```bash
helm repo add open-telemetry https://open-telemetry.github.io/opentelemetry-helm-charts
helm repo update
```

## Step 2: Create a Configuration Values File

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

!!!warning "Production Deployment"
    This is a basic configuration for testing purposes only. For production use, implement proper security controls, monitoring, and high availability patterns as documented in the [OpenTelemetry Collector documentation](https://opentelemetry.io/docs/collector/).

- Update the `otlp.endpoint` with your actual backend endpoint (Grafana Tempo, Elastic APM, etc.)
- For Grafana setup, you can use Grafana Tempo for traces and Prometheus for metrics
- Configure additional exporters based on your observability stack
- Adjust resource limits based on your expected telemetry volume
- Enable TLS for production deployments by configuring appropriate certificates

## Step 3: Deploy the OpenTelemetry Collector

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

## Step 4: Verify the Deployment

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
