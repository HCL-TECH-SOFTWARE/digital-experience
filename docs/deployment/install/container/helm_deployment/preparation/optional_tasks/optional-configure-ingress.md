# Configure Ingress For DX Deployment

With HAProxy replacing Ambassador in DX deployments, it is easier to use a custom Ingress in front of DX to handle advance requirements to routing, proxying and other similar use cases. This document explains how to leverage external Ingress alongside with HAProxy as the internal reverse proxy and load balancer.

!!! note
       -  **HCL DX intentionally does not ship any Ingress to reduce DX's deployment footprint in any Kubernetes cluster.**<br>
       -  This document shows an example configuration for some Ingress controllers and briefly describes minimally necessary steps to implement it inside a Kubernetes environment. This configuration is neither a proposal nor does HCL provide official support for it. <br>
       -  Implementing an Ingress for use with a HCL DX deployment in Kubernetes is an optional effort based on the Kubernetes cluster’s requirements and customer’s discretion.

![Ingress Implementation](../../../../../../images/HCL-DX-deployment-diagram-Kubernetes.png)

## Ingress Implementation

The following guide is a basic example on implementing a generic Ingress on your Kubernetes cluster for use with HCL DX. The actual implementation might vary depending on the Cluster's setup and configuration.

- In the DX Helm values by default HAProxy `serviceType` is set to `loadBalancer`. To use the external Ingress this must be set to the serviceType applicable for the appropriate use case, for this example `ClusterIP` is used, with that HAProxy service will not have any External IP.

```yaml
networking:
  haproxy:
    serviceType: ClusterIP
```

- Install an Ingress controller of your choice, this will serve as the entry point to the cluster. The Ingress controller applies the rules that are set in the Ingress resources. By design the Ingress controller is a cluster-wide resource and can be deployed in any namespace and does not have to be in the same namespace as DX. The controller can be used to route multiple applications in multiple namespaces. NGINX Ingress Controller is used here as an example. To install a NGINX Ingress on your cluster, please issue the following command:

```console
$ helm upgrade --install ingress-nginx ingress-nginx \
  --repo https://kubernetes.github.io/ingress-nginx \
  --namespace <namespace>
```

- Check if the Ingress controller pod and service are deployed

```console
$ kubectl get pod -n <namespace>
$ kubectl get service -n <namespace>
```

- The connection between Ingress and HAProxy can be configured to use either `http` or `https` for the internal traffic. To handle `https` requests a certificate must be declared in your `custom-values.yaml` along with the SSL offloading configuration.

```yaml
networking:
  haproxy:
    ssl: true
  tlsCertSecret: "dx-tls-cert"
```

- Define an Ingress instance that will be used to configure the routing rules that point to the existing deployment of HAProxy as the internal service. Here we must configure a host and all of the request received by the host will be handle by `<helm release name>-haproxy`. The port number depends on the [protocol or port set for HAProxy in the Helm values](../mandatory_tasks/prepare_configure_networking.md#configure-haproxy-networking) as described in the previous step.

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

- Configure your Ingress based on your preference whether you want to access your host via `http` or `https`. To handle `https` request a certificate must be declared on your Ingress yaml file. This certificate will be used for the Ingress client to Ingress instance connection.

```yaml
ingressClassName: nginx
  tls:
  - secretName: dx-tls-cert
```
