# Types of services
In Kubernetes, a [Service](https://kubernetes.io/docs/concepts/services-networking/service/) is a method for exposing a network application that is running as one or more Pods in your cluster. You can run code in Pods and use a Service to make that set of Pods available on the network, allowing clients to interact with it.

The Service API is an abstraction that helps you expose groups of Pods over a network. Each Service object defines a logical set of endpoints (usually these endpoints are Pods) along with a policy about how to make those Pods accessible.

The following types of Services are used in DX
## Normal Services
Normal Services accept requests and ensure they are routed to one of the ready Pods behind the Service, performing basic load balancing. They include ClusterIP, NodePort, LoadBalancer and ExternalName.
Further details can be found in [Service type](https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types)

## Headless Services
Headless Services are used to interface with other service discovery mechanisms without being tied to Kubernetes implementation. 
A headless Service allows a client to connect directly to whichever Pod it prefers. Unlike normal Services, headless Services do not configure routes and packet forwarding using virtual IP addresses and proxies. Instead, they report the endpoint IP addresses of the individual Pods via internal DNS records, served through the cluster's DNS services.
Further details can be found in [Headless Services](https://kubernetes.io/docs/concepts/services-networking/service/#headless-services)

Few examples of the services used in DX are:
- **core-headless** for HAProxy to handle load balancing for Core by identifying each Pod individually to determine the correct routing destination.
- **core-unready-headless** for remote search auto configuration (RS) to communicate with each Pod individually. This configuration also routes to non-Ready Services because it is established before Core is started.
- **haproxy-headless** for the license manager to collect and aggregate session data from each HAProxy instance.
- **persistence-headless-svc** for enabling the persistence nodes to communicate with each other directly.

## unready-pod-0
!!! note
      unready-pod-0 is a special type of service for DX and isn't a common service in Kubernetes.

This service always forwards traffic to the first Core Pod (core-0), even if its status is not ready. It is primarily used for the Config Wizard, which may restart the Portal server and render the Pod unready. Despite the Portal not running, the Config Wizard will still be able to connect to the Pod.

