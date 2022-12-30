---
title: Overview
---

# HAProxy - Overview

!!!important
    Ambassador is deprecated in CF203 and is replaced by HAProxy. Starting with CF204, Ambassador is completely removed.

Up to version CF202, the deployment of HCL Digital Experience included an ingress controller "Ambassador" as part of the DX Kubernetes namespace. Ambassador required a set of [`CustomResourceDefinitions`](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/), which needed to be deployed as a cluster-wide Kubernetes resource.

To prevent incompatibilities with newer Ambassador versions and allow more flexible use of other [Ingress Controllers](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/), starting with CF203, the Ambassador ingress controller is deprecated and will be removed in the subsequent releases.
With CF203, HAProxy is introduced as a new component that replaces Ambassador.
Please note that HAProxy is not a one-by-one replacement, because it doesn't act as an Ingress, it acts as a single-entry point into the DX namespace and handles all internal routing. HAProxy can either be configured to expose a [`LoadBalancer`](https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer) service to directly accept incoming traffic into the cluster or can act as an internal Kubernetes service only to accept traffic from a Kubernetes Ingress Controller at the cluster level. As a result, HAProxy takes over all functionalities that the Ambassador ingress controller provided for DX beforehand.

| [![Containerization Architecture Overview Optional Ingress](../../../../images/HCL-DX-deployment-diagram-Kubernetes.png)](../../../../images/HCL-DX-deployment-diagram-Kubernetes.png){:target="_blank"} |
|:--:|
| HAProxy reverse proxy with optional external Ingress |
