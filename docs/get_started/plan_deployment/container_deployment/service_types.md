# Types of Services used in DX

In Kubernetes, a [Service](https://kubernetes.io/docs/concepts/services-networking/service/) is a method for exposing a network application that is running as one or more Pods in your cluster. You can run code in Pods and use a Service to make that set of Pods available on the network, allowing clients to interact with it.

The Service API is an abstraction that helps you expose groups of Pods over a network. Each Service object defines a logical set of endpoints (usually these endpoints are Pods) along with a policy about how to make those Pods accessible.

The following types of Services are used in DX:

- [Types of Services used in DX](#types-of-services-used-in-dx)
  - [Normal Services](#normal-services)
  - [Headless Services](#headless-services)
  - [unready-pod-0](#unready-pod-0)

## Normal Services

Normal Services accept requests and ensure they are routed to one of the ready Pods behind the Service, performing basic load balancing. Normal Services include ClusterIP, NodePort, LoadBalancer, and ExternalName.

For more information, see [Service type](https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types).

## Headless Services

Headless Services are used to interface with other service discovery mechanisms without being tied to Kubernetes' implementation. 

A Headless Service allows a client to connect directly to whichever Pod it prefers. Unlike Normal Services, Headless Services do not configure routes and packet forwarding using virtual IP addresses and proxies. Instead, they report the endpoint IP addresses of the individual Pods through internal DNS records, served through the cluster's DNS services.

For more information, see [Headless Services](https://kubernetes.io/docs/concepts/services-networking/service/#headless-services).

## unready-pod-0

!!! note
      unready-pod-0 is a special type of Service for DX and is not a common service in Kubernetes.

The unready-pod-0 Service forwards traffic to the first Core Pod (core-0) even if its status is `not ready`. It is primarily used for the Config Wizard, which might restart the Portal server and render the Pod unready. Despite the Portal not running, the Config Wizard can still connect to the Pod.

