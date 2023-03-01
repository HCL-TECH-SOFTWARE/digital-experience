# Containerization requirements and limitations before CF210

The table below shows previous default resource requests and limits for HCL DX Kubernetes as shipped in the `values.yaml` for releases **before** CF210.
To see the updated default settings reflecting the minimal system requirements, see the Help Center topic [Containerization requirements and limitations](../../../get_started/plan_deployment/container_deployment/limitations_requirements/).

| **Pod name** | **Minimum number of Pods** | **Container** | **Container Image** | **Container CPU request/limit** | **Container Memory request/limit** |
|---|---|---|---|---|---|
| core | 1 | core | core | 2000m/5000m | 6G/8G |
|  |  | system-out-log | logging-sidecar | 100m/100m | 64Mi/64Mi |
|  |  | system-err-log | logging-sidecar | 100m/100m | 64Mi/64Mi |
|  |  | prereqs-checker | prereqs-checker | 100m/100m | 64Mi/64Mi |
| content-composer | 1 | content-composer | content-composer | 500m/1000m | 1G/2G |
| dam-plugin-google-vision | 1 | dam-plugin-google-vision | dam-plugin-google-vision | 1000m/2000m | 2G/2G |
| dam-plugin-kaltura | 1 | dam-plugin-kaltura | dam-plugin-kaltura | 1000m/2000m | 2G/2G |
| digital-asset-management | 1 | digital-asset-management | digital-asset-manager | 500m/2000m | 1G/2G |
|  |  | prereqs-checker | prereqs-checker | 100m/100m | 64Mi/64Mi |
| haproxy | 1 | haproxy | haproxy | 1000m/2000m | 1G/4G |
| image-processor | 1 | image-processor | image-processor | 1000m/2000m | 2G/2G |
| license-manager | 1 | license-manager | license-manager | 1000m/2000m | 1G/4G |
| open-ldap | 1 | ldap | openldap | 500m/2000m | 512Mi/2G |
| persistence-connection-pool | 1 | persistence-connection-pool | persistence-connection-pool | 500m/2000m | 512Mi/4G |
| persistence-node | 1 | persistence-node | persistence-node | 1000m/2000m | 1G/4G |
|  |  | persistence-metrics-exporter | persistence-metrics-exporter | 100m/100m | 128Mi/128Mi |
|  |  | persistence-repmgr-log | logging-sidecar | 100m/100m | 64Mi/64Mi |
|  |  | prereqs-checker | prereqs-checker | 100m/100m | 64Mi/64Mi |
| remote-search | 1 | remote-search | remote-search | 1000m/2000m | 2G/4G |
|  |  | system-out-log | logging-sidecar | 100m/100m | 64Mi/64Mi |
|  |  | system-err-log | logging-sidecar | 100m/100m | 64Mi/64Mi |
|  |  | prereqs-checker | prereqs-checker | 100m/100m | 64Mi/64Mi |
| ring-api | 1 | ring-api | ringapi | 500m/1000m | 1G/2G |
| runtime-controller | 1 | runtime-controller | runtime-controller | 100m/500m | 256Mi/500Mi |
