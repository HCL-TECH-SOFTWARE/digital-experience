# Optional SSL and LoadBalancer with External Ingress

## Introduction
Now you have an option for those who wants to use their own external ingress, you can set your own ingress with optional `SSL` and `LoadBalancer` service and point it to the `HAproxy`.
The `Ingress Controller` is an application that runs in a cluster and configures an `HTTP load balancer` according to Ingress resources. The load balancer can be a software load balancer running in the cluster or a hardware or cloud load balancer running externally. 

## Implementation
-    To install and deploy your own external ingress you need to first install the ingress in your kubernetes environment. 
  
-    Now you can create an `ingress-deployment.yaml` file which will have the deployment details of the ingress.
  
-    Deploy this ingress in your namespace.
  
-    Coming to the optional `SSL` offloading and `LoadBalancer` part, you will need to add a `Boolean` property into the helm chart values file so that you can make it `true` or `false`. If you make this `true` then `SSL` offloading will be enabled else disabled.
  
-	   You need to add one more property for `LoadBalancer` service. When `SSL` is enabled the service will be `LoadBalancer` and when it is disabled the service will be `ClusterIP`.

-	 Following code snippet shows how we added this property:
```yaml 
   # HAProxy configurations  
     haproxy:
   # Configuration to enable/disable ssl property. When you enable this property we can access the routing via https and with this the loadBalancerService should be true
     ssl: true 
   # Configuration to enable LoadBalancer service. When SSL is true, LoadBalancer has to be set to true to enable https. When SSL is false this will be set as ClusterIP in deployment file
     loadBalancerService: true
```
-    According to these values you will have to add the condition to the service file. If `SSL` is set to `true` then service type will be `LoadBalancer`. And if you want to use external ingress you can make `SSL` as `false` and service type to `ClusterIP`.
  
## Conclusion
This implementation will be helpful for those who wants to use their own external ingress.
Even if external ingress is used, `HAproxy` will still be active. Ingress will handle the incoming traffic with ssl offloading and only then routes to `HAProxy`.