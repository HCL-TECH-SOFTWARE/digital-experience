# Monitoring and troubleshooting

## Viewing Traces and Metrics

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
