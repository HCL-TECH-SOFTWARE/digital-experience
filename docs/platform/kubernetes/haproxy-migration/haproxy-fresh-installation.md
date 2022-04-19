# Fresh Installation

In fresh deployments from CF203 onwards, HAProxy will be deployed by default in place of Ambassador.

To work with an external ingress controller, HAProxy is configured with flexibility in terms of dynamic service type and TLS termination settings. The main service type of HAProxy can be changed from the value file same as SSL offloading. By default, the HAProxy service type would be [`LoadBalancer`](https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer){:target="_blank"}, which can be changed afterward from the value file of helm chart. In the same way, SSL offloading would be enabled by default, later on, it can be manageable from the value file of helm chart. Please refer [Page Link](../haproxy-introduction) for more details on the service type and SSL offloading configuration.

As an initial setup for HAProxy, 3 replica sets will be created on the fresh installation. This value has been set in the value file of helm chart and this will be easily manageable by changing the value in helm chart.

#### **`value.yaml`**
```yaml
scaling:
  # The default amount of replicas per application
  replicas:
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