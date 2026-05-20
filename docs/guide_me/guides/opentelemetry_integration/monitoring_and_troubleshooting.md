# Monitoring and troubleshooting

Use your deployment infrastructure to validate performance metrics, analyze distributed traces, and diagnose configuration issues. Querying this data helps verify that telemetry streams are flowing correctly from your instrumented HCL DX services through the OpenTelemetry (OTel) Collector to your backend systems.

## Viewing traces and metrics

Access Grafana to view distributed traces and metrics. If you have deployed Grafana as part of the `kube-prometheus-stack`, you can access it using port-forwarding:

```bash
# Port-forward to Grafana
kubectl port-forward -n observability svc/prometheus-grafana 3000:80
```

Open your browser to `http://localhost:3000` (default credentials: admin/prom-operator).

### Viewing traces in Grafana

1. Navigate to **Explore** in the left navigation menu.
2. Select **Tempo** from the data source dropdown menu (if configured).
3. Search for active traces by service name, such as `webengine-0` or `dam-0`.
4. Filter your queries by specific tags, span duration, or time ranges.

### Viewing metrics in Grafana

1. Import DX-specific dashboards from the official [Grafana dashboard library](https://grafana.com/grafana/dashboards/){target="_blank"}
2. Use the following dashboard IDs for HCL DX components:
    - `14151`: [WebSphere Application Server PMI metrics](https://grafana.com/grafana/dashboards/14151){target="_blank"} (for Core and WebEngine)
    - `11159`: [NodeJS application dashboard](https://grafana.com/grafana/dashboards/11159){target="_blank"} (for DAM, Image Processor, and Ring API)
3. For detailed monitoring guidance, refer to the [Monitor Helm Deployment Metrics](../../../deployment/manage/container_configuration/monitoring/monitor_helm_deployment_metrics.md).

### Querying metrics in Prometheus

If you prefer to query raw metrics directly inside Prometheus, port-forward to the Prometheus service interface:

```bash
# Port-forward to Prometheus
kubectl port-forward -n observability svc/prometheus 9090:9090
```

Open `http://localhost:9090` in your browser to run queries against OTel data fields:

- `otel_*`: OTel SDK metrics.
- `http_server_duration_*`: HTTP server request processing durations.
- `rpc_server_duration_*`: Remote Procedure Call (RPC) execution times.
- Custom application metrics explicitly exported by your HCL DX services.

## Troubleshooting

**No traces appear in the visualization backend**

1. Verify that the OTel Collector pod is up and running:

    ```bash
    kubectl get pods -n observability -l app.kubernetes.io/name=opentelemetry-collector
    ```

2. Inspect the collector logs to check for processing, formatting, or backend routing errors:

    ```bash
    kubectl logs -n observability -l app.kubernetes.io/name=opentelemetry-collector
    ```

3. Check network connectivity between your application pods and the collector service endpoint:

    ```bash
    kubectl exec -it <service-pod> -n <namespace> -- curl -v http://otel-collector.observability.svc.cluster.local:4317
    ```

4. Check your service container logs to confirm that the instrumentation agents initialized successfully during pod startup.

**High memory usage in the collector**

If the OTel Collector pod consumes excessive memory or experiences Out-Of-Memory (OOM) kills:

- Adjust the `memory_limiter` processor thresholds inside your collector configuration file.
- Decrease the maximum `send_batch_size` parameter in the batch processor configurations.
- Implement head-based or tail-based sampling techniques to reduce total trace processing volume.
- Scale your collector deployment horizontally by increasing the Kubernetes replica count.

**Missing service dependencies in trace graphs**

Distributed traces might display broken request streams or missing downstream spans if:

- Downstream dependent services lack active OTel instrumentation.
- Context propagation fails across service boundaries due to missing or stripped tracing HTTP headers.
- Asynchronous application operations do not have explicit span linking defined in the codebase.

???+ info "Related information"
    - **HCL DX resources**
        - [Monitor Helm Deployment Metrics](../../../deployment/manage/container_configuration/monitoring/monitor_helm_deployment_metrics.md)
        - [Experimental Features](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_experimental_features.md)
        - [DX Helm values updates](../../../whatsnew/dx_helm_values_updates.md)
    - **Grafana dashboards and collectors**
        - [WebSphere Application Server PMI Metrics dashboard (ID: 14151)](https://grafana.com/grafana/dashboards/14151){target="_blank"}
        - [Node.js application dashboard (ID: 11159)](https://grafana.com/grafana/dashboards/11159){target="_blank"}
        - [OTel Helm charts repository](https://github.com/open-telemetry/opentelemetry-helm-charts){target="_blank"}
