# Options to spread pods across nodes
This topic provides several options for distributing pods across nodes. It is possible to restrict a pod to specific nodes or prioritize it to run on certain nodes.

You can use any of the following methods to choose where Kubernetes schedules specific Pods:

- `nodeSelector`
- Affinity and anti-affinity
- `nodeName`
- Pod topology spread constraints
- Taints and tolerations

These options are discussed in the following sections. 

## NodeSelector

NodeSelector is the most straightforward way to define the node selection criteria. You can include the `nodeSelector` field in your Pod specification and mention the labels you want your desired node to possess. You can refer to [nodeSelector](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector) for more information about node selection constraints and apply them to your services.

Specify the `nodeSelector` constraints to your services in the custom values file:

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

Example:

```yaml
nodeSelector:
  contentComposer:
    diskType: ssd
```

## Affinity and anti-affinity

Node affinity and `nodeSelector` are used to limit the nodes where Pods can be scheduled based on node labels. You can refer to [find constraints/use cases](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity) and apply them to your services.

Specify `affinity` constraints to your services in the custom values file:

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

Example:

```yaml
affinity:
  contentComposer:
    podAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        - labelSelector:
            matchExpressions:
              - key: statefulset.kubernetes.io/pod-name
                operator: In
                values:
                  - dx-deployment-core-0
          topologyKey: topology.kubernetes.io/zone
    podAntiAffinity:
      preferredDuringSchedulingIgnoredDuringExecution:
        - weight: 100
          podAffinityTerm:
            labelSelector:
              matchExpressions:
                - key: statefulset.kubernetes.io/pod-name
                  operator: In
                  values:
                    - dx-deployment-core-0
            topologyKey: topology.kubernetes.io/zone
```

## nodeName

NodeName is a simpler and more direct way of selecting a node for a pod than `nodeSelector` or `affinity` rules. In the Pod specification, you can use the nodeName field to specify the name of the node where the pod should run. When nodeName is used, any `nodeSelector` or affinity/anti-affinity rules are ignored, and the kubelet on the specified node tries to place the pod on that node. You can refer to [find constraints/use cases](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodename) and apply them to your services.

Specify the `nodeName` constraints to your services in the custom values file:

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

Example:

```yaml
nodeName:
  contentComposer: "node-0"
```

## Pod topology spread constraints

You can use topology spread constraints to manage the distribution of Pods across different failure domains within your cluster, including regions, zones, nodes, and other custom-defined topology domains. This approach can help to ensure high availability and to optimize your resource usage. You can refer to [find constraints/use cases](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/) and apply them to your services.

Specify `topologySpreadConstraints` constraints to your services in the custom values file:

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

Example:

```yaml
topologySpreadConstraints:
  contentComposer:
  - maxSkew: 1
    topologyKey: zone
    whenUnsatisfiable: DoNotSchedule
    labelSelector:
      matchLabels:
        app: dx-deployment-content-composer
```

## Taints and tolerations

Taints and tolerations are used together to prevent pods from being scheduled on unsuitable nodes. One or more taints are applied to a node, which indicates that the node should not accept any pods that cannot tolerate the taints. You can refer to [find constraints/use cases](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/) and apply them to your services.

Specify `tolerations` constraints to your services in the custom values file:

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

Example:

```yaml
tolerations:
  contentComposer:
  - key: "key1"
    operator: "Equal"
    value: "value1"
    effect: "NoSchedule"
```
