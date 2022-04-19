# Optional SSL and LoadBalancer with External Ingress

Now you have an option for those who wants to use their own external ingress, you can set your own ingress with optional `SSL` and `LoadBalancer` service and point it to the `HAproxy`.
The `Ingress Controller` is an application that runs in a cluster and configures an `HTTP load balancer` according to Ingress resources. The load balancer can be a software load balancer running in the cluster or a hardware or cloud load balancer running externally. 

## Implementation
-    You can use any external ingress controller of your choice if you want to. 
  
-    Coming to the optional `SSL` offloading and `LoadBalancer` part, you will need to add a `Boolean` property into the helm chart values file so that you can make it `true` or `false`. If you make this `true` then `SSL` offloading will be enabled else disabled.
  
-    You need to add two more properties for `LoadBalancer` service and `servicePort`. When `SSL` is enabled the service will be `LoadBalancer` and when it is disabled the service will be `ClusterIP`.

-    `servicePort` is used to set the port exposed by the `HAProxy` service. If `SSL` is set to `true`, `443` port will be used else port will be set to `80`.

-    Following code snippet shows how you can add this property:
```yaml  
   # Networking configurations specific to HAProxy
  haproxy:
    # Configuration to enable/disable ssl offloading in HAProxy
    ssl: true
    # Configuration to set the type Service type for the HAProxy Service. Supported values are "ClusterIP", "LoadBalancer" and "NodePort"
    serviceType: "LoadBalancer"
    # Configuration to set the port exposed by the HAProxy Service. If this is not set, port 80 will be used if SSL offloading is disabled. If it is enabled port 443 is used
    servicePort: 
```
-    According to these values you will have to add the condition to the service file. If `SSL` is set to `true` then service type will be `LoadBalancer`. And if you want to use external ingress you can make `SSL` as `false` and service type to `ClusterIP`.
  

This implementation will be helpful for those who wants to use their own external ingress.
Even if external ingress is used, `HAproxy` will still be active. Ingress will handle the incoming traffic with ssl offloading and only then routes to `HAProxy`.