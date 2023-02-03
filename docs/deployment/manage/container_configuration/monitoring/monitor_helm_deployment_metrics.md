# Monitor Deployment Using Metrics

This topic outlines the use of standards-based metrics to monitor activity and performance of DX container deployments.

## Prometheus metrics and Grafana

The [Digital Experience 9.5 Helm deployment](../../../install/container/helm_deployment/overview.md) supports monitoring the deployment activity with advanced metrics and visualization, by exposing standards-based [Prometheus](https://prometheus.io/)-compatible metrics. [Prometheus metrics](https://prometheus.io/) components can `scrape` the metrics of most of the DX 9.5 container applications. The collected data is queried from Prometheus and are visualized in operations dashboard solutions, such as [Grafana](https://grafana.com/). The following information can advise administrators which [Digital Experience 9.5 applications](../../../../get_started/plan_deployment/container_deployment/application_architecture.md) can use these tools with some usage examples.

## Digital Experience 9.5 applications and Prometheus metrics

The following [Digital Experience 9.5 applications](../../../../get_started/plan_deployment/container_deployment/application_architecture.md) expose metrics that can be tracked with Prometheus metrics.

|Application|Port|Route|
|-----------|----|-----|
|Core|10038|/metrics|
|Remote Search|9060|/metrics|
|Content Composer|3000|/probe/metrics|
|Digital Asset Management|3000|/probe/metrics|
|Image Processor|3000|/probe/metrics|
|Ring API|3000|/probe/metrics|
|DAM Persistence|9187|/metrics|
|HAProxy|8404|/metrics|

!!!important
    HCL Digital Experience 9.5 does not include a deployment of [Prometheus](https://prometheus.io/) or [Grafana](https://grafana.com/). The metrics are enabled by default for the [DX 9.5 Helm chart](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack). This exposes Prometheus-compatible metrics, which can be consumed by any common Prometheus installation.

HCL DX 9.5 metrics are compatible with the following deployment and discovery types of Prometheus in [Kubernetes](https://kubernetes.io/) environments:

-   [Prometheus](https://github.com/prometheus-community/helm-charts/tree/main/charts/prometheus) - Discovers metrics by evaluating the [`annotation`](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/) of the services
-   [Prometheus Operator](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack) - Discovers metrics using the [`ServiceMonitor`](https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/user-guides/getting-started.md#related-resources) custom resources

Administrators can configure the HCL DX 9.5 metrics depending on their specific Prometheus deployment, as outlined in the following sections.

## Configure Prometheus metrics

Metrics for the [Digital Experience 9.5 applications](../../../../get_started/plan_deployment/container_deployment/application_architecture.md) in the DX 9.5 Helm chart are enabled by default, with `prometheusDiscoveryType` set to `annotations`. The metrics are configured independently for each DX 9.5 application. The parameter to disable metrics is included in the example configurations.

|Parameter|Description|Default value|
|---------|-----------|-------------|
|`metrics.<application>.scrape`|Determines if the metrics of this application are scraped by Prometheus.|`true`|
|`metrics.<application>.prometheusDiscoveryType`|Determines how Prometheus discovers the metrics of a service. Accepts `"annotation"` and `"serviceMonitor"`. The`"serviceMonitor"` setting requires that the [ServiceMonitor CRD](https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/user-guides/getting-started.md#related-resources) \(which comes with the Prometheus Operator\), is installed in the cluster.|`"annotation"`|

!!!example "Example:"
    -   __Default configuration__: Metrics are enabled for Core with the appropriate [`annotation`](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/) for Prometheus:

        ```yaml
        metrics:
          core:
            scrape: true
            prometheusDiscoveryType: "annotation"
        ```

    -   Create a [`ServiceMonitor`](https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/user-guides/getting-started.md#related-resources) for Prometheus Operator:

        ```yaml
        metrics:
          core:
            scrape: true
            prometheusDiscoveryType: "serviceMonitor"
        ```

    -   Disable the metrics for Core:

        ```yaml
        metrics:
          core:
            scrape: false
        ```

## Grafana dashboards

The exposed DX 9.5 applications metrics are compatible with a set of existing [Grafana](https://grafana.com/) operations dashboards that are available from the [Grafana dashboard](https://grafana.com/grafana/) page, as well as a set of Grafana-supported custom dashboards provided in JSON format. See following examples, which can be [imported](https://grafana.com/docs/grafana/latest/dashboards/export-import/#import-dashboard) directly into Grafana.

**Publicly available operations dashboards**

You can directly download or import the following dashboards from the Grafana community page using the IDs or links.

|ID|Dashboard|Applications|
|--|---------|------------|
|14151|[WebSphere Application Server PMI metrics dashboard](https://grafana.com/grafana/dashboards/14151)|Core, Remote Search|
|11159|[NodeJS application dashboard](https://grafana.com/grafana/dashboards/11159)|Content Composer, Digital Asset Management, Image Processor, Experience API|
|9628|[PostgreSQL database](https://grafana.com/grafana/dashboards/9628)|DAM Persistence|
|12693|[HAProxy dashboard](https://grafana.com/grafana/dashboards/12693)|HAProxy|

## HCL Digital Experience custom dashboards

The following dashboards are provided by [HCL Software](https://www.hcltechsw.com/wps/portal) for use with [HCL Digital Experience 9.5](https://www.hcltechsw.com/dx) deployments. These examples expose custom metrics for DX applications or provide enhanced features for existing dashboards. They are available in the public [HCL Software GitHub repository](https://github.com/HCL-TECH-SOFTWARE/dx-metrics-grafana-dashboards).

|Dashboard|Application\(s\)|
|---------|----------------|
|[dam\_dashboard.json](https://github.com/HCL-TECH-SOFTWARE/dx-metrics-grafana-dashboards/blob/master/dx-dashboards/dam_dashboard.json)|Digital Asset Management|

## References to Prometheus and Grafana installations

!!!important
    The resources outline here are optional deployment examples. HCL Software does not provide direct support for any issues related to the Prometheus metrics or the Grafana visualization tools.

To leverage the full potential of the [Digital Experience 9.5 applications](../../../../get_started/plan_deployment/container_deployment/application_architecture.md) metrics, an existing [Prometheus](https://prometheus.io/) and [Grafana](https://grafana.com/grafana/) deployment can be used. Following is a list of additional metrics tracking and visualization services \(non-exhaustive\) that you can consider when developing solutions according to your deployment needs:

-   [`kube-prometheus-stack`](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack#kube-prometheus-stack) Helm chart that includes:

    -   The [Prometheus Operator](https://github.com/prometheus-operator/prometheus-operator)
    -   Highly available [Prometheus](https://prometheus.io/)
    -   Highly available [Alertmanager](https://github.com/prometheus/alertmanager)
    -   [Prometheus node-exporter](https://github.com/prometheus/node_exporter)
    -   [Prometheus adapter for Kubernetes metrics APIs](https://github.com/DirectXMan12/k8s-prometheus-adapter)
    -   [kube-state-metrics](https://github.com/kubernetes/kube-state-metrics)
    -   [Grafana](https://grafana.com/)
    
        !!!note
            The [`kube-prometheus-stack`](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack#kube-prometheus-stack) Helm chart is based on the [`kube-prometheus`](https://github.com/prometheus-operator/kube-prometheus) repository, and comes with a set of tools to monitor the Kubernetes cluster, as well as pre-installed Grafana dashboards for visualization.
            
    -   [`prometheus`](https://github.com/prometheus-community/helm-charts/tree/main/charts/prometheus) and [`grafana`](https://github.com/grafana/helm-charts) are provided as independent Helm charts.
