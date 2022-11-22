# Configure Ingress For DX Deployment

With HAProxy replacing Ambassador in our DX deployment, it much easier to run ingress in front of DX to handle advance requirements to routing, proxying and other similar use cases. This document explains how to leverage external ingress alongside with HAProxy as the internal service and loadbalancer. This document will only serve as a basic guide and implementing ingress are optional based on the cluster’s use case and user’s discretion, hence we do not ship any ingress implementation along with our current deployment.

## Prerequisites

- Kube environment for testing
- Helm is installed
- HAproxy deployed on this environment

## Ingress Iplementation

Here’s a basic guide on implementing a generic ingress on your DX cluster

- In the `custom-values.yaml` by default HAProxy `serviceType` is set to `loadBalancer`. To test the external ingress you want to deploy you must set the serviceType to `ClusterIP`, with that HAProxy service will not have any External IP.

```yaml
haproxy:
  serviceType: ClusterIP
```

- Install an Ingress controller of your choice, this will serve as the entry point to the cluster. The Ingress controller evaluates the rules that you will set on your ingress instance and it also handles redirection. NGINX Ingress Controller is used here as an example. To install a NGIX Ingress on your cluster

```console
$ helm upgrade --install ingress-nginx ingress-nginx \
  --repo https://kubernetes.github.io/ingress-nginx \
  --namespace dxns
```

- Check if the Ingress controller is deployed 

```console
$ Kubectl get all -n dxns
```

- Define an Ingress instance that will be used to configure the routing rules that point to the existing deployment of HAProxy as the internal service. Here we must configure a host and all of the request received by the host will be handle by `dx-deployment-haproxy`.

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nginx-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  ingressClassName: nginx
  rules:
  - host: your-kube-deployment.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: dx-deployment-haproxy
            port:
              number: 80
```

- If SSL offloading is disabled on your `custom-values.yaml`. You can access your host via `http`.

```yaml
haproxy:
  ssl: false
```

- If SSL offloading is enabled on your `custom-values.yaml` and you can access your host via `https`, we need to add Secret to the Ingress file as follows.

```yaml
haproxy:
  ssl: true
```

```yaml
ingressClassName: nginx
  tls:
  - secretName: dx-tls-cert
```
