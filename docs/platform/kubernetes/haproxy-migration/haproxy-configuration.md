# HAProxy configuration

By default, HAProxy is deployed with a `LoadBalancer` type service to handle the incoming traffic as well as the SSL offloading for HCL Digital Experience. In addition, the Helm deployment offers adjustability for HAProxy and its services to allow for more flexible deployment and use of custom `HAProxy Controllers`.

!!!note
    When migrating from Ambassador, the default configuration of HAProxy matches the default configuration of Ambassador as close as possible.

    Any changes made to `scaling`, `resources`, `horizontalPodAutoScaler`, `annotations` or `labels` must be transferred to the appropriate configurations for HAProxy manually. 

## Networking configuration

The networking parameters used to configure the HAProxy services are located in `networking.haproxy` in the `values.yaml` file.

|Parameter|Description|Default value|
|---------|-----------|-------------|
|`ssl` { width="20%" }  |Enable or disable SSL offloading in HAProxy. Depending on this setting, HAProxy handles either `HTTP` or `HTTPS` traffic. { width="60%" } |`true` { width="20%" }|
|`serviceType`|Defines the Kubernetes [`ServiceType`](https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types) of the HAProxy service. Supported ServiceType includes `LoadBalancer`, `ClusterIP` and `NodePort` |`LoadBalancer`|
|`servicePort`|This value is used to select the port exposed by the HAProxy service. Defaults to port `443` if `ssl` is set to `true`, otherwise, port `80` is used. |`null`|
|`serviceNodePort`|This value is used to select the node port exposed by the HAProxy service. Defaults to a port selected by Kubernetes if no value is set. |`null`|
|`strictTransportSecurity`|This value is used for HTTP Strict Transport Security (HSTS) to determine if it should be `enabled`, if yes then `maxAge` is set for how long the browser should remember the rule. |`enabled:true, maxAge:31536000`|

!!!note
    If `ssl` is set to `true`, HAProxy will use the certificate that is supplied as a secret in `networking.tlsCertSecret`.

```yaml
networking:
  # Networking configurations specific to HAProxy
  haproxy:
    # Configuration to enable/disable ssl offloading in HAProxy
    ssl: true
    # Configuration to set the service type for the HAProxy service. Supported values are "ClusterIP", "LoadBalancer", and "NodePort"
    serviceType: "LoadBalancer"
    # Configuration to set the port exposed by the HAProxy Service. If this is not set, port 80 is used if SSL offloading is disabled and port 443 if SSL offloading is enabled.
    servicePort:
    # Only applies for the "NodePort" serviceType. Configuration to set the NodePort exposed by the HAProxy service. If this is not set, a port is automatically selected by Kubernetes
    serviceNodePort:
    # HTTP Strict Transport Security(HSTS)
    strictTransportSecurity:
      enabled: true
      maxAge: 31536000
```
  
This configuration is helpful for those who want to use a custom `HAProxy Controller` to expose the service in a compatible way. Even then, HAProxy will still be active. The `HAProxy Controller` will handle the incoming traffic and then route them to the HAProxy service.

## Scaling

Three replicas of the HAProxy Pod are created by default, and this value can be adjusted in the `custom-values.yaml` file for the Helm deployment.

```yaml
scaling:
  # The default number of replicas per application
  replicas:
    haproxy: 3 # Change this value as per the number of replicas required for HAProxy.
```

## Resources

HAProxy is set to use the following resource allocation values by default. The values can be adjusted as required in the `custom-values.yaml` file for the Helm deployment.

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
