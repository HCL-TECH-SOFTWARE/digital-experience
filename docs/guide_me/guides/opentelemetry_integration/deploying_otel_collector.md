# Deploying the OpenTelemetry Collector

!!!warning
    This OTel Collector deployment is for development and testing only and is **not production-ready**. For production deployments, review the [official OTel Collector documentation](https://opentelemetry.io/docs/collector/){target="_blank"} for high-availability patterns, implement security controls such as TLS, and configure resource limits based on your telemetry volume.

The OpenTelemetry (OTel) Collector acts as a centralized telemetry gateway within your Kubernetes cluster. It receives data streams from your instrumented HCL DX services, processes or filters the telemetry according to your pipeline configurations, and routes the final outputs to your designated observability backends.

Follow these steps to deploy the collector using the official OpenTelemetry Helm chart:

1. Add the OTel Helm repository to your local Helm client.

    ```bash
    helm repo add open-telemetry https://open-telemetry.github.io/opentelemetry-helm-charts
    helm repo update
    ```

2. Create a values file named `otel-collector-values.yaml` to configure the collector for your environment.

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

    Before you deploy, customize the file to match your environment:

    - Update the `otlp.endpoint` with your actual backend endpoint, such as Grafana Tempo or Elastic APM.
    - For a Grafana setup, use Grafana Tempo for traces and Prometheus for metrics.
    - Configure additional exporters based on your observability stack.
    - Adjust resource limits based on your expected telemetry volume.
    - Enable TLS for production deployments by configuring appropriate certificates.

3. Deploy the collector to your Kubernetes cluster. You can deploy it in the same namespace as your DX deployment or in a dedicated observability namespace.

    **Option 1: Deploy in the same namespace as DX**
    
    ```bash
    helm install otel-collector open-telemetry/opentelemetry-collector \
      --namespace <your-dx-namespace> \
      --values otel-collector-values.yaml
    ```

    **Option 2: Deploy in a dedicated observability namespace**

    ```bash
    kubectl create namespace observability
    helm install otel-collector open-telemetry/opentelemetry-collector \
      --namespace observability \
      --values otel-collector-values.yaml
    ```

    !!! note
        Using a dedicated `observability` namespace is recommended as it separates monitoring infrastructure from application workloads.

4. Verify the deployment.

    - Check that the collector pods are running:

        ```bash
        kubectl get pods -n <namespace> -l app.kubernetes.io/name=opentelemetry-collector
        ```

    - Verify the collector service endpoints:

        ```bash
        kubectl get svc -n <namespace> -l app.kubernetes.io/name=opentelemetry-collector
        ```

    - View collector logs to ensure it is receiving and exporting data:

        ```bash
        kubectl logs -n <namespace> -l app.kubernetes.io/name=opentelemetry-collector --tail=100 -f
        ```
