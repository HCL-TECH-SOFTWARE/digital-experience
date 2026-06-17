# Monitoring and troubleshooting

After enabling OpenTelemetry (OTel) in your HCL DX deployment, verify your configuration and monitor the telemetry data flowing from your services:

1. Check that Helm values, ConfigMaps, and pod settings are correctly applied.
2. Access Grafana and Prometheus to monitor your instrumented services.
3. Diagnose and resolve configuration problems or connectivity issues.

## Verifying OTel configuration

Before reviewing traces and metrics in Grafana, verify the OTel configuration in your deployment. Use these commands to confirm that the deployment sets and propagates configuration values to your pods.

1. Check if OTel is enabled in your Helm deployment and review the active configuration:

    ```bash
    # Check OTel enabled status and configuration in Helm values
    helm get values <release-name> -n <namespace> | grep -A 10 openTelemetry
    ```

    Replace the following placeholders:

    - `<release-name>`: Your Helm release name (for example, `dx-deployment`).
    - `<namespace>`: Your deployment namespace (for example, `dxns`).

2. Verify ConfigMap value propagation across the cluster. The global ConfigMap contains the OTel configuration that mounts into all pods.

    ```bash
    # View all OTel configuration in the global ConfigMap
    kubectl get configmap <release-name>-global -n <namespace> -o yaml | grep -i otel

    # Check specific OTel collector endpoint
    kubectl get configmap <release-name>-global -n <namespace> -o jsonpath='{.data.otel\.exporter\.otlp\.endpoint}'

    # Check service name base for all components
    kubectl get configmap <release-name>-global -n <namespace> -o yaml | grep "otel.service.name.base"

    # Check if debug mode is enabled
    kubectl get configmap <release-name>-global -n <namespace> -o jsonpath='{.data.debug\.otel\.enabled}'
    ```

    !!! tip "Understanding the output"
        - The `otel.exporter.otlp.endpoint` property displays your OTel Collector endpoint (for example, `http://otel-collector.observability.svc.cluster.local:4318`).
        - The `otel.service.name.base` property displays the base name used for all services in your deployment.
        - The `debug.otel.enabled` property returns true if debug logging is enabled for OTel.

3. Verify the presence of the OTel Java agent for Java services, including Core, WebEngine, Runtime Controller, and License Manager.

    ```bash
    # Verify OpenTelemetry Java agent exists in Core
    kubectl exec -it <release-name>-core-0 -n <namespace> -- ls -lh /opt/otel/opentelemetry-javaagent.jar

    # Verify Java agent is configured in JAVA_TOOL_OPTIONS
    kubectl exec -it <release-name>-core-0 -n <namespace> -- bash -c 'echo $JAVA_TOOL_OPTIONS'
    ```

    Expected output for `JAVA_TOOL_OPTIONS`:

    ```text
    -javaagent:/opt/otel/opentelemetry-javaagent.jar
    ```

4. Verify network connectivity between your application pods and the OTel Collector:

    ```bash
    # Test connectivity to collector from Core pod
    kubectl exec -it <release-name>-core-0 -n <namespace> -- curl -v <collector-endpoint>/v1/traces

    # Example with default collector endpoint
    kubectl exec -it <release-name>-core-0 -n <namespace> -- curl -v http://otel-collector.observability.svc.cluster.local:4318/v1/traces
    ```

    !!! success "Expected result"
        A successful connection returns an HTTP response. The endpoint only accepts POST requests, so GET requests typically return `405 Method Not Allowed`. Connection failures indicate network or service discovery issues.

5. Review pod logs to confirm that OTel initialized correctly within your containers:

    ```bash
    # Check Java service logs (Core example)
    kubectl logs <release-name>-core-0 -n <namespace> | grep -i "opentelemetry\|javaagent"

    # Check Node.js service logs (DAM example)
    kubectl logs <release-name>-digital-asset-management-0 -n <namespace> | grep -i "opentelemetry\|otel"
    ```

    Look for initialization messages such as:

    - Java: `[otel.javaagent] OpenTelemetry automatic instrumentation enabled`
    - Node.js: `OpenTelemetry instrumentation initialized`

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

Before troubleshooting the collector or backend, verify your basic OTel configuration using the commands in [Verifying OTel configuration](#verifying-otel-configuration).

**No traces appear in the visualization backend**

1. Confirm that OTel is enabled in your Helm values:

    ```bash
    helm get values <release-name> -n <namespace> | grep -A 5 "openTelemetry:"
    ```

2. Verify that the OTel Collector pod is up and running:

    ```bash
    kubectl get pods -n observability -l app.kubernetes.io/name=opentelemetry-collector
    ```

3. Inspect the collector logs to check for processing, formatting, or backend routing errors:

    ```bash
    kubectl logs -n observability -l app.kubernetes.io/name=opentelemetry-collector
    ```

4. Check network connectivity between your application pods and the collector service endpoint:

    ```bash
    kubectl exec -it <release-name>-core-0 -n <namespace> -- curl -v http://otel-collector.observability.svc.cluster.local:4318/v1/traces
    ```

5. Check your service container logs to confirm that the instrumentation agents initialized successfully during pod startup:

    ```bash
    # For Java services
    kubectl logs <release-name>-core-0 -n <namespace> | grep -i "opentelemetry\|javaagent"
    
    # For Node.js services
    kubectl logs <release-name>-digital-asset-management-0 -n <namespace> | grep -i "opentelemetry\|otel"
    ```

**Configuration not taking effect**

If you updated the Helm values but the configuration is not reflected in your pods:

1. Verify the ConfigMap was updated with your changes:

    ```bash
    kubectl get configmap <release-name>-global -n <namespace> -o yaml | grep -i otel
    ```

2. Check if the pods need to be restarted to pick up the new configuration:

    ```bash
    # Check pod age
    kubectl get pods -n <namespace>
    
    # Restart a specific statefulset or deployment if needed
    kubectl rollout restart statefulset/<release-name>-core -n <namespace>
    kubectl rollout restart deployment/<release-name>-digital-asset-management -n <namespace>
    ```

3. If debug mode is enabled, check the pod startup logs to see the active OTel configuration:

    ```bash
    kubectl logs <release-name>-core-0 -n <namespace> | grep -A 20 "Reading OpenTelemetry configuration"
    ```

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
