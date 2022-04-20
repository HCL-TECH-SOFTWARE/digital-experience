# HAProxy configuration

By default HAProxy is deployed with a `LoadBalancer` type service and will be handling incoming traffic as well as the SSL offloading for HCL Digital Experience. This is the known behavior of Ambassador in the previous versions. In addition the Helm deployment now offers more adjustability for `HAProxy` and its Service to allow for a more flexible deployment and the use of custom `Ingress Controllers`.

## Networking configuration

The HAProxy networking parameters to configure the `HAProxy` service are located in `networking.haproxy` in the `values.yaml` file.  

|Parameter|Description|Default value|
|---------|-----------|-------------|
|`ssl` { width="20%" }  |Enable or disable SSL offloading in HAProxy. Depending on this setting HAProxy handles either `HTTP` or `HTTPS` traffic. { width="60%" } |`true` { width="20%" }|
|`serviceType`|Defines the Kubernetes [`ServiceType`](https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types) of the `HAProxy` service. `LoadBalancer`, `ClusterIP` and `NodePort` are supported. |`LoadBalancer`|
|`servicePort`|This value is used to select the port exposed by the `HAProxy` service. Defaults to `443` if `ssl` is `true`, otherwise port `80` is used. |`null`|
|`serviceNodePort`|This value is used to select the node port exposed by the `HAProxy` service. Defaults to a port selected by Kubernetes if no value is set. |`null`|

!!!note
    If `ssl` is set to `true`, HAProxy will use the certificate that is supplied as a secret in `networking.tlsCertSecret`.

```yaml
networking:
  # Networking configurations specific to HAProxy
  haproxy:
    # Configuration to enable/disable ssl offloading in HAProxy
    ssl: true
    # Configuration to set the type Service type for the HAProxy Service. Supported values are "ClusterIP", "LoadBalancer" and "NodePort"
    serviceType: "LoadBalancer"
    # Configuration to set the port exposed by the HAProxy Service. If this is not set, port 80 will be used if SSL offloading is disabled. If it is enabled port 443 is used
    servicePort:
    # Only applied for serviceType "NodePort". Configuration to set the NodePort exposed by the HAProxy Service. If this is not set, a port will automatically be selected by Kubernetes
    serviceNodePort:
```
  
This implementation is helpful for those who want to use a custom `Ingress Controller` to expose the service in a compatible way. Even then, `HAproxy` will still be active. The `Ingress Controller` will handle the incoming traffic and should then route to the `HAProxy` service.

## Scaling

By default 3 replicas of the `HAProxy` Pod will be created. This value can be adjusted in the `custom-values` file for the Helm deployment.

```yaml
scaling:
  # The default amount of replicas per application
  replicas:
    haproxy: 3 # Change this value as per the replica set requirement for HAProxy.
```

## Resources

`HAProxy` is set to use the below resource allocation values by default. The values are adjustable in the `custom-values` file for the Helm deployment.

```yaml
resources:
  # HAProxy resource allocation
  haproxy:
    requests:
      cpu: "1000m"
      memory: "1G"
    limits:
      cpu: "2000m"
      memory: "4G"
```
