# Overview

!!!important
    Ambassador is deprecated in CF203 and will be removed in subsequent versions. The migration and transition to HAProxy must be completed in CF203 in preparation for upcoming releases.

Up until version CF202, a deployment of HCL Digital Experience included an ingress controller "Ambassador" as part of the DX Kubernetes namespace. This included a set of [`CustomResourceDefinitions`](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) required by Ambassador which needed to be deployed as a cluster-wide Kubernetes resource.

| [![Containerization Architecture Overview](../_img/ambassador-architecture.png)](../_img/ambassador-architecture.png){:target="_blank"} |
|:--:|
| DX Ambassador before CF203 |

To prevent incompatibilities with newer Ambassador versions and allow more flexible use of other [Ingress Controllers](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/), starting with CF203, the Ambassador ingress controller is deprecated and will be removed in the subsequent releases.
With CF203 a new component "HAProxy" was introduced. It acts as the single entry point into the DX namespace and handles all internal routing. It can be either configured to expose a [`LoadBalancer`](https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer) service to directly accept incoming traffic into the cluster or act as an internal Kubernetes Service only and accept traffic from a Kubernetes Ingress Controller on cluster level. HAProxy, therefore, takes over all functionalities that the Ambassador ingress controller provided for DX beforehand.

| [![Containerization Architecture Overview Optional Ingress](./_img/haproxy-optional-ingress-architecture.png)](./_img/haproxy-optional-ingress-architecture.png){:target="_blank"} |
|:--:|
| HAProxy reverse proxy with optional external Ingress |
