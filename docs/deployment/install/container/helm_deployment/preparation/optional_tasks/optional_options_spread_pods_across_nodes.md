# Overview
DX now offers more options for distributing pods across nodes. It will be possible to restrict a pod to specific nodes or prioritize it to run on certain nodes.

## Options to spread pods across nodes

You can use any of the following methods to choose where Kubernetes schedules specific Pods:

1. nodeSelector
2. Affinity and anti-affinity
3. nodeName
4. Pod Topology Spread Constraints
5. Taints and Tolerations

### NodeSelector
NodeSelector is the most straightforward way to define the node selection criteria. You can include the nodeSelector field in your Pod specification and mention the labels you want your desired node to possess.

You specify NodeSelector constraints to your services in the custom values file:

```yaml
nodeSelector:
  contentComposer:
  core:
  damPluginGoogleVision:
  digitalAssetManagement:
  imageProcessor:
  openLdap:
  persistenceConnectionPool:
  persistenceNode:
  remoteSearch:
  ringApi:
  runtimeController:
  haproxy:
  licenseManager:
  damPluginKaltura:
```

### Affinity and anti-affinity
Node affinity and nodeSelector are used to limit the nodes where Pods can be scheduled based on node labels. 


You specify affinity constraints to your services in the custom values file:

```yaml
affinity:
  contentComposer:
  core:
  damPluginGoogleVision:
  digitalAssetManagement:
  imageProcessor:
  openLdap:
  persistenceConnectionPool:
  persistenceNode:
  remoteSearch:
  ringApi:
  runtimeController:
  haproxy:
  licenseManager:
  damPluginKaltura:

```

[You can refer to find constraints/use cases and apply them to your services.](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity)


### nodeName
NodeName is a simpler and more direct way of selecting a node for a pod than nodeSelector or affinity rules. In the Pod specification, the nodeName field can be used to specify the name of the node where the pod should run. When nodeName is used, any nodeSelector or affinity/anti-affinity rules will be ignored, and the kubelet on the specified node will try to place the pod on that node.

You specify NodeName constraints to your services in the custom values file:

```yaml
nodeName:
  contentComposer: ""
  core: ""
  damPluginGoogleVision: ""
  digitalAssetManagement: ""
  imageProcessor: ""
  openLdap: ""
  persistenceConnectionPool: ""
  persistenceNode: ""
  remoteSearch: ""
  ringApi: ""
  runtimeController: ""
  haproxy: ""
  licenseManager: ""
  damPluginKaltura: ""
```

[You can refer to find constraints/use cases and apply them to your services.](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodename)

### Pod Topology Spread Constraints
Topology spread constraints can be utilized to manage the distribution of Pods across different failure domains within your cluster, including regions, zones, nodes, and other custom-defined topology domains. This approach can help to ensure high availability and optimize your resource usage.

You specify topologySpreadConstraints constraints to your services in the custom values file:

```yaml
topologySpreadConstraints:
  contentComposer:
  core:
  damPluginGoogleVision:
  digitalAssetManagement:
  imageProcessor:
  openLdap:
  persistenceConnectionPool:
  persistenceNode:
  remoteSearch:
  ringApi:
  runtimeController:
  haproxy:
  licenseManager:
  damPluginKaltura:
```

[You can refer to find constraints/use cases and apply them to your services.](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/)

### Taints and Tolerations
Taints and tolerations are used together to prevent pods from being scheduled on unsuitable nodes. One or more taints are applied to a node, which indicates that the node should not accept any pods that cannot tolerate the taints.

You specify tolerations constraints to your services in the custom values file:

```yaml
tolerations:
  contentComposer:
  core:
  damPluginGoogleVision:
  digitalAssetManagement:
  imageProcessor:
  openLdap:
  persistenceConnectionPool:
  persistenceNode:
  remoteSearch:
  ringApi:
  runtimeController:
  haproxy:
  licenseManager:
  damPluginKaltura:
```

[You can refer to find constraints/use cases and apply them to your services.](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/)
