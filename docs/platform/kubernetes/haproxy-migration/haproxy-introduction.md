# HAProxy introduction

Up until version CF202, the Helm deployments of HCL Digital Experience were shipped and deployed with Ambassador as part of the DX namespace. This included a set of [`CustomResourceDefinitions`](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) required by Ambassador.

| ![Containerization Architecture Overview](../_img/ambassador-architecture.png) |
|:--:|
| DX Ambassador before CF203 |

To prevent incompatibilities with newer Ambassador versions and allow a more flexible use of additional [Ingress Controllers](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/) as part of the Kubernetes Cluster, starting with CF203 the DX Ambassador is replaced by HAProxy as a reverse proxy. It acts as the single entrypoint into the DX namespace and handles all internal routing. It can be either configured to expose a [`LoadBalancer`](https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer) service to directly accept incoming traffic into the cluster or act as a internal Kubernetes Service only and accept traffic from a Kubernetes Ingress Controller on cluster level.

| ![Containerization Architecture Overview Optional Ingress](./_img/haproxy-optional-ingress-architecture.png) |
|:--:|
| HAProxy reverse proxy with optional external Ingress |
