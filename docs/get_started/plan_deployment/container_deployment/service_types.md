# Types of services
In Kubernetes, a Service is a method for exposing a network application that is running as one or more Pods in your cluster. You can run code in Pods and use a Service to make that set of Pods available on the network, allowing clients to interact with it.

The Service API is an abstraction that helps you expose groups of Pods over a network. Each Service object defines a logical set of endpoints (usually these endpoints are Pods) along with a policy about how to make those Pods accessible.

There are two types of services used for internal communication between Pods:
Normal Services: These provide a stable IP address and DNS name to a set of Pods.
Headless Services: These allow you to directly access individual Pods without load-balancing or proxying.

## Normal Services
Normal Services accept requests and ensure they are routed to one of the ready Pods behind the Service, performing basic load balancing. They include ClusterIP, NodePort, LoadBalancer and ExternalName.

## Headless Services
Headless Services are used to interface with other service discovery mechanisms without being tied to Kubernetes implementation. 
A headless Service allows a client to connect directly to whichever Pod it prefers. Unlike normal Services, headless Services do not configure routes and packet forwarding using virtual IP addresses and proxies. Instead, they report the endpoint IP addresses of the individual Pods via internal DNS records, served through the cluster's DNS services.

## Unready Pod 0
This service always forwards traffic to the first Core Pod (core-0), even if its status is not ready. It is primarily used for the Config Wizard, which may restart the Portal server and render the Pod unready. Despite the Portal not running, the Config Wizard will still be able to connect to the Pod.