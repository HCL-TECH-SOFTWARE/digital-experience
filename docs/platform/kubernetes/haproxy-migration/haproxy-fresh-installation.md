# Fresh Installation

In the fresh deployment From CF203, HAProxy will be deployed by default in place of Ambassador. HAProxy will comes with [`LoadBalancer`](https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer){:target="_blank"} service as a single entry point of the DX namespace. As Ambassador required many [`CustomResourceDefinitions`](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/){:target="_blank"} and the external ingress controller more efficient, HAProxy is the best option to replacement of Ambassador. For more details, please refer [Overview](../haproxy-introduction) document page.

From the CF203, SoFy deployment also comes along with the HAProxy as a default load balancer instance and with the same [`LoadBalancer`](https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer){:target="_blank"} service. However, an external Ambassador (or ingress controller) will work as it is with the HAProxy. HAProxy is all set to communicate to the external ingress controller.

To work with an external ingress controller, HAProxy is configured with flexibility in terms of dynamic service type and TLS termination settings. The main service type of HAProxy can be changed from the value file same as SSL offloading. By default, the HAProxy service type would be [`LoadBalancer`](https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer){:target="_blank"}, which can be changed afterward from the value file of helm chart. In the same way, SSL offloading would be enabled by default, later on, it can be manageable from the value file of helm chart. Please refer [Page Link](../haproxy-introduction) for more details on the service type and SSL offloading configuration.

As an initial setup for HAProxy, 3 replica sets will be created on the fresh installation. This value has been set in the value file of helm chart and this will be easily manageable by changing the value in helm chart.

#### **`value.yaml`**
```yaml
scaling:
  # The default amount of replicas per application
  replicas:
    contentComposer: 1
    core: 1
    designStudio: 1
    digitalAssetManagement: 1
    imageProcessor: 1
    ringApi: 1
    persistenceConnectionPool: 1
    persistenceNode: 3
    ambassadorIngress: 3
    ambassadorRedis: 3
    haproxy: 3 # Change this value as per the replica set requirement for HAProxy.
```

About the resource allocation in fresh installation, HAPRoxy is set by default as below the resource allocation value. This will also be manageable by changing the value of helm chart.

#### **`value.yaml`**
```yaml
# HAProxy resource allocation
  haproxy:
    requests:
      cpu: "1000m"
      memory: "1G"
    limits:
      cpu: "2000m"
      memory: "4G"
```