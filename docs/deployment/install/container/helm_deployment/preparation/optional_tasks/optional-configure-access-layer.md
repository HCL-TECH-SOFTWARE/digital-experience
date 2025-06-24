# Configure Access Layer For DX Deployment

With HAProxy replacing Ambassador in DX deployments, it is easier to use a custom Access Layer in front of DX to handle advance requirements to routing, proxying and other similar use cases. This document explains how to leverage external Access Layer alongside with HAProxy as the internal reverse proxy and load balancer.

!!! note
       -  **HCL DX intentionally does not ship any Access Layer to reduce DX's deployment footprint in any Kubernetes cluster.**<br>
       -  This document shows an example configuration for some Access Layer controllers and briefly describes minimally necessary steps to implement it inside a Kubernetes environment. This configuration is neither a proposal nor does HCL provide official support for it. <br>
       -  Implementing an  access layer for use with a HCL DX deployment in Kubernetes is an optional effort based on the Kubernetes cluster’s requirements and customer’s discretion.

![Access layer Implementation](../../../../../../images/HCL-DX-deployment-diagram-Kubernetes.png)

## Access Layer for DX Deployment

This how-to guide provides the available options for implementing the Access Layer in the DX Deployment. It presents two primary choices: **Ingress** and **Gateway API**, allowing users to choose based on their specific needs and preferences.

### Ingress Implementation For DX Deployment
This how-to guide provides basic example on implementing a generic Ingress on your Kubernetes cluster for use with HCL DX. The actual implementation might vary depending on the Cluster's setup and configuration.

#### Prerequisites
- In the DX Helm values by default HAProxy `serviceType` is set to `loadBalancer`. To use the external Ingress this must be set to the serviceType applicable for the appropriate use case, for this example `ClusterIP` is used, with that HAProxy service will not have any External IP.

```yaml
networking:
  haproxy:
    serviceType: ClusterIP
```
#### Steps to Configure

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

- You can configure the connection between Ingress and HAProxy to use either `http` or `https` for the internal traffic. For more information, see the topic [Configure HAProxy networking](../mandatory_tasks/prepare_configure_networking.md#configure-haproxy-networking).

- Define an [Ingress resource](https://kubernetes.io/docs/concepts/services-networking/ingress/#the-ingress-resource) that is used to configure the routing rules that point to the existing deployment of HAProxy as the internal service. Configure a host and all of the requests received by the host are handled by `<helm release name>-haproxy`. A `secretName` is passed in the `tls` section to allow the Ingress controller to serve `https` traffic. The following configuration maps the root path (`/`) to the HAProxy of DX. If there are other applications in the cluster handled by the same Ingress controller, their paths must be specified explicitly. All other requests are then handled by DX.

Example of an Ingress resource:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nginx-ingress
spec:
  ingressClassName: nginx
  tls:
  - secretName: dx-tls-cert
  rules:
  - host: your-kube-deployment.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: <release-name>-haproxy
            port:
              name: haproxy
```

#### Advanced configuration

!!!important
    The configuration in the **Ingress Implementation** section is the recommended configuration and should be used whenever possible.

    Note that you must map in the Ingress any custom application deployed in the WebSphere Application Server or certain configurations. This includes the following:

    - Some special functionalities of DX like the [Web Application Bridge](../../../../../../extend_dx/integration/wab/index.md)
    - Deployments with the [context root changed or removed](../../../../../manage/siteurl_cfg/index.md)
    - The [`friendlyUrlContextRoot` available for Digital Asset Management](../../../../../../manage_content/digital_assets/configuration/configure_dam_friendlyUrl.md)

If mapping the root path is not possible for a deployment, map the following paths depending on the configuration of DX:

- `/wps` (or the custom context root set for DX)
- `/dx`
- `/ibm`
- `/hcl`

Example of an Ingress resource:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nginx-ingress
spec:
  ingressClassName: nginx
  tls:
  - secretName: dx-tls-cert
  rules:
  - host: your-kube-deployment.com
    http:
      paths:
      - path: /wps
        pathType: Prefix
        backend:
          service:
            name: <release-name>-haproxy
            port:
              name: haproxy
      - path: /dx
        pathType: Prefix
        backend:
          service:
            name: <release-name>-haproxy
            port:
              name: haproxy
      - path: /ibm
        pathType: Prefix
        backend:
          service:
            name: <release-name>-haproxy
            port:
              name: haproxy
      - path: /hcl
        pathType: Prefix
        backend:
          service:
            name: <release-name>-haproxy
            port:
              name: haproxy
```

### Gateway API Implementation For DX Deployment

This how-to guide provides a comprehensive guide for configuring optional Gateway API in a Kubernetes environment using Helm and the Gateway API. It includes prerequisites, installation steps, and configuration details necessary for setting up the Gateway API.
#### Prerequisites
- Ensure that there are no existing Ingress controllers and Ingress resources in your cluster.
- Verify that HAProxy is not utilizing the External IP. In the DX values file, set the following parameters:
```yml
networking:
  haproxy:
    serviceType: ClusterIP
    ssl: false
```

#### Steps to Configure
- **Install the Gateway API CRDs**: Ensure to replace `[VERSION_NUMBER]` with the desired version number. Replace `[VERSION_NUMBER]` with the desired version number. You can check the official documentation for the latest standard release.
```bash
kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/[VERSION_NUMBER]/standard-install.yaml
```
- **Or install NGINX Gateway Fabric**: This step provides the command to install the NGINX Gateway Fabric using Helm.
```bash
helm install ngf oci://ghcr.io/nginx/charts/nginx-gateway-fabric --create-namespace -n nginx-gateway
```
- **Create and Apply Gateway**: Instructions on how to create the Gateway resources, including a sample YAML configuration and apply them using `kubectl apply -f dx-gateway.yaml`.
```yml
apiVersion: gateway.networking.k8s.io/v1
kind: Gateway
metadata:
  name: gateway
spec:
  gatewayClassName: nginx
  listeners:
  - name: http
    port: 80
    protocol: HTTP
    hostname: your-kube-deployment.com
  - name: https
    port: 443
    protocol: HTTPS
    hostname: your-kube-deployment.com
    tls:
      mode: Terminate
      certificateRefs:
      - kind: Secret
        name: dx-tls-cert
```
- **Create and Apply HTTPRoutes**: Instructions on how to create the HTTPRoute resources, including a sample YAML configuration and apply them using `kubectl apply -f dx-http-route.yaml`.
```yml
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: dx-http-route
spec:
  parentRefs:
  - name: gateway
    sectionName: https
  hostnames:
  - your-kube-deployment.com
  rules:
  - matches:
    - path:
        type: PathPrefix
        value: /
    backendRefs:
    - name: <release-name>-haproxy
      port: 80
```
#### Notes
- Always check the official documentation for the latest version numbers and additional configuration options.
- Ensure that the configurations align with your cluster's requirements and existing resources.

#### Advanced configuration

!!!important
    The configuration in the **Gateway API Implementation** section is the recommended configuration and should be used whenever possible.

    Note that you must map in the Gateway API any custom application deployed in the WebSphere Application Server or certain configurations. This includes the following:

    - Some special functionalities of DX like the [Web Application Bridge](../../../../../../extend_dx/integration/wab/index.md)
    - Deployments with the [context root changed or removed](../../../../../manage/siteurl_cfg/index.md)
    - The [`friendlyUrlContextRoot` available for Digital Asset Management](../../../../../../manage_content/digital_assets/configuration/configure_dam_friendlyUrl.md)

If mapping the root path is not possible for a deployment, map the following paths depending on the configuration of DX:

- `/wps` (or the custom context root set for DX)
- `/dx`
- `/ibm`
- `/hcl`

Example of an Gateway API resource:

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: dx-http-route
spec:
  parentRefs:
  - name: gateway
    sectionName: https
  hostnames:
  - your-kube-deployment.com
  rules:
  - matches:
    - path: /wps
      pathType: Prefix
      backend:
        service:
          name: <release-name>-haproxy
          port:
            name: haproxy
    - path: /dx
      pathType: Prefix
      backend:
        service:
          name: <release-name>-haproxy
          port:
            name: haproxy
    - path: /ibm
      pathType: Prefix
      backend:
        service:
          name: <release-name>-haproxy
          port:
            name: haproxy
    - path: /hcl
      pathType: Prefix
      backend:
        service:
          name: <release-name>-haproxy
          port:
            name: haproxy
```
### Recommendation
Choose the option that best fits your deployment architecture and operational needs.