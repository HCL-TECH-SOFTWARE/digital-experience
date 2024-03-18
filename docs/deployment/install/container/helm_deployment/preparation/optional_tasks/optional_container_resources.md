# Container resource management

The default Helm values included in the HCL Digital Experience 9.5 Helm Chart offer a minimal supported configuration for CPU and Memory resources. You can adjust the values in the `custom-values.yaml` for a deployment according to the [Kubernetes Resource Management](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/).

```yaml
# Resource allocation settings, definition per pod
# Use number + unit, e.g. 1500m for CPU or 1500M for Memory
# The limits can be set to null explicitly to not limit the resources. Cluster and namespace level resource limits will still apply.
resources:
  # Content composer resource allocation
  contentComposer:
    requests:
      cpu: "100m"
      memory: "192Mi"
    limits:
      cpu: "100m"
      memory: "192Mi"
  # Core resource allocation
  core:
    requests:
      cpu: "2000m"
      memory: "4096Mi"
    limits:
      cpu: "4000m"
      memory: "6144Mi"
  # DAM Plugin Google Vision resource allocation
  damPluginGoogleVision:
    requests:
      cpu: "100m"
      memory: "384Mi"
    limits:
      cpu: "100m"
      memory: "384Mi"
  # Digital asset management resource allocation
  digitalAssetManagement:
    requests:
      cpu: "500m"
      memory: "1536Mi"
    limits:
      cpu: "500m"
      memory: "1536Mi"
  # Image processor resource allocation
  imageProcessor:
    requests:
      cpu: "200m"
      memory: "2048Mi"
    limits:
      cpu: "200m"
      memory: "2048Mi"
  # Open LDAP resource allocation
  openLdap:
    requests:
      cpu: "200m"
      memory: "768Mi"
    limits:
      cpu: "200m"
      memory: "768Mi"
   # Persistence Connection Pool resource allocation
  persistenceConnectionPool:
    requests:
      cpu: "500m"
      memory: "512Mi"
    limits:
      cpu: "500m"
      memory: "512Mi"
  # PG Repmanager resource allocation
  persistenceNode:
    requests:
      cpu: "500m"
      memory: "1024Mi"
    limits:
      cpu: "500m"
      memory: "1024Mi"
  # Remote Search resource allocation
  remoteSearch:
    requests:
      cpu: "500m"
      memory: "2048Mi"
    limits:
      cpu: "500m"
      memory: "2048Mi"
  # Ring API resource allocation
  ringApi:
    requests:
      cpu: "100m"
      memory: "256Mi"
    limits:
      cpu: "100m"
      memory: "256Mi"
  # Runtime Controller resource allocation
  runtimeController:
    requests:
      cpu: "100m"
      memory: "256Mi"
    limits:
      cpu: "100m"
      memory: "256Mi"
  # Persistence metrics exporter resource allocation
  persistenceMetricsExporter:
    requests:
      cpu: "100m"
      memory: "128Mi"
    limits:
      cpu: "100m"
      memory: "128Mi"
  # Logging Sidecar resource allocation
  loggingSidecar:
    requests:
      cpu: "100m"
      memory: "64Mi"
    limits:
      cpu: "100m"
      memory: "64Mi"
  # HAProxy resource allocation
  haproxy:
    requests:
      cpu: "200m"
      memory: "300Mi"
    limits:
      cpu: "200m"
      memory: "300Mi"
  # License Manager resource allocation
  licenseManager:
    requests:
      cpu: "100m"
      memory: "300Mi"
    limits:
      cpu: "100m"
      memory: "300Mi"
  # DAM Kaltura Plugin resource allocation
  damPluginKaltura:
    requests:
      cpu: "100m"
      memory: "128Mi"
    limits:
      cpu: "100m"
      memory: "128Mi"
  # Prereqs Checker resource allocation
  prereqsChecker:
    requests:
      cpu: "100m"
      memory: "64Mi"
    limits:
      cpu: "100m"
      memory: "64Mi"
```

In addition, a [Performance Sizing Guidance for Rendering with a Small Configuration](../../../../../../get_started/plan_deployment/container_deployment/rm_container/dx_performance_small_cfg.md) is available.

## Unlimited resource `limits`

All `limits` are explicitly set to `null` to unset them in Kubernetes and allow for unlimited resources depending on the Kubernetes Cluster. Cluster and namespace level resource limits still apply.

The `limits` are removed individually for either CPU or Memory. For example, to remove the Core CPU limit set the following:

```yaml
resources:
  core:
    limits:
      cpu: null
      memory: "6144Mi"
```

To remove the `limits` entirely for an application, set the following:

```yaml
resources:
  core:
    limits: null
```
