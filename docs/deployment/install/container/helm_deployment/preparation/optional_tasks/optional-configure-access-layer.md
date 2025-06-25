# Configure Access Layer for DX deployment

With HAProxy replacing Ambassador in HCL Digital Experience (DX) deployments, it is easier to use a custom Access Layer in front of DX to handle advanced requirements for routing, proxying, and other similar use cases. This document explains how to leverage an external Access Layer alongside HAProxy as the internal reverse proxy and load balancer. Sample configurations for some Access Layer controllers and steps to implement them in a Kubernetes environment are also provided.

!!! note
    - HCL DX does not ship any Access Layer to reduce DX's deployment footprint in any Kubernetes cluster.
    - Implementing an Access Layer for use with a HCL DX deployment in Kubernetes is optional. Consider its implementation based on the Kubernetes cluster’s requirements.
    - These configurations are not proposals, and HCL does not provide official support for them.

![Access Layer Implementation](../../../../../../images/HCL-DX-deployment-diagram-Kubernetes.png)

## Access Layer for DX deployment

You have two options for implementing the Access Layer in the DX deployment: [Ingress](#ingress-implementation-for-dx-deployments) and [Gateway API](#gateway-api-implementation-for-dx-deployments). Choose the option that fits your specific needs and preferences.

### Ingress implementation for DX deployments

Refer to the following steps to implement a generic Ingress on your Kubernetes cluster for use with HCL DX. The actual implementation might vary depending on the cluster's setup and configuration.

#### Prerequisites

In the `values.yaml` file, HAProxy `serviceType` is set to `loadBalancer` by default. To use the external Ingress, set the `serviceType` appropriate for your specific use case. In the following example, `ClusterIP` is used, ensuring that the HAProxy service has no external IP.

```yaml
networking:
haproxy:
    serviceType: ClusterIP
```

#### Implementing Ingress for DX deployments

1. Install an Ingress controller of your choice. The Ingress controller serves as the entry point to the cluster and applies the rules set in the Ingress resources. This controller is a cluster-wide resource that can be deployed in any namespace and does not have to be in the same namespace as DX. It can also be used to route multiple applications in multiple namespaces.

    The following example uses the NGINX Ingress Controller. To install a NGINX Ingress on your cluster, run the following command on your terminal:

    ```console
    $ helm upgrade --install ingress-nginx ingress-nginx \
    --repo https://kubernetes.github.io/ingress-nginx \
    --namespace <namespace>
    ```

2. Check if the Ingress controller pod and service are deployed using the following command:

    ```console
    $ kubectl get pod -n <namespace>
    $ kubectl get service -n <namespace>
    ```

3. You can configure the connection between Ingress and HAProxy to use either `http` or `https` for the internal traffic. For more information, refer to [Configure HAProxy networking](../mandatory_tasks/prepare_configure_networking.md#configure-haproxy-networking).

4. Define an [Ingress resource](https://kubernetes.io/docs/concepts/services-networking/ingress/#the-ingress-resource){target="_blank"} that is used to configure the routing rules that point to the existing deployment of HAProxy as the internal service. You can configure a host in the Ingress resource to ensure all of the requests received by the host are handled by `<helm release name>-haproxy`. A `secretName` is passed in the `tls` section to allow the Ingress controller to serve `https` traffic.

    The following configuration maps the root path (`/`) to the HAProxy of DX. If there are other applications in the cluster handled by the same Ingress controller, their paths must be specified explicitly. All other requests are then handled by DX.

    See the following Ingress resource:

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
    - The configuration in the [Ingress Implementation For DX deployments](#ingress-implementation-for-dx-deployments) section is the recommended configuration and should be used whenever possible.
    - You must map any custom application deployed in the WebSphere Application Server or certain configurations in Ingress. This includes the following:
        - Special DX functionalities such as [Web Application Bridge](../../../../../../extend_dx/integration/wab/index.md)
        - Deployments with the [context root changed or removed](../../../../../manage/siteurl_cfg/index.md)
        - The [`friendlyUrlContextRoot` available for Digital Asset Management](../../../../../../manage_content/digital_assets/configuration/configure_dam_friendlyUrl.md)

If mapping the root path is not possible for a deployment, map the following paths depending on the configuration of DX:

- `/wps` (or the custom context root set for DX)
- `/dx`
- `/ibm`
- `/hcl`

See the following Ingress resource:

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

### Gateway API implementation for DX deployments

Refer to the following steps to configure the optional Gateway API in a Kubernetes environment using Helm and the Gateway API.

#### Prerequisites

- Ensure that there are no existing Ingress controllers and Ingress resources in your cluster.
- Set the following parameters in the `values.yaml` file to ensure the HAProxy service has no External IP:

    ```yml
    networking:
    haproxy:
        serviceType: ClusterIP
        ssl: false
    ```

#### Implementing Gateway API for DX deployments

1. Install the Gateway API Custom Resource Definitions (CRDs) using the following command:

    ```bash
    kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/[VERSION_NUMBER]/standard-install.yaml
    ```

    Replace `[VERSION_NUMBER]` with the desired version number. You can check the official [Gateway API documentation](https://gateway-api.sigs.k8s.io/){target="_blank"} for the latest standard release.

2. Install NGINX Gateway Fabric using the following Helm command:

    ```bash
    helm install ngf oci://ghcr.io/nginx/charts/nginx-gateway-fabric --create-namespace -n nginx-gateway
    ```

3. Create a YAML file named `dx-gateway.yaml` with the following sample parameters to create the Gateway API resources:

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

4. Apply the Gateway API resources using the `kubectl apply -f dx-gateway.yaml` command.

5. Create a YAML file named `dx-http-route.yaml` with the following sample parameters to create the HTTPRoutes resources:

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

6. Apply the HTTPRoutes resources using the `kubectl apply -f dx-http-route.yaml` command.

!!! note
    - Always check the official documentation for the latest version numbers and additional configuration options.
    - Ensure that the configurations align with your cluster's requirements and existing resources.

#### Advanced configuration

!!!important
    - The configuration in the [Gateway API Implementation for DX deployments](#gateway-api-implementation-for-dx-deployments) section is the recommended configuration and should be used whenever possible.
    - You must map any custom application deployed in the WebSphere Application Server or certain configurations in the Gateway API. This includes the following:
        - Special DX functionalities such as [Web Application Bridge](../../../../../../extend_dx/integration/wab/index.md)
        - Deployments with the [context root changed or removed](../../../../../manage/siteurl_cfg/index.md)
        - The [`friendlyUrlContextRoot` available for Digital Asset Management](../../../../../../manage_content/digital_assets/configuration/configure_dam_friendlyUrl.md)

If mapping the root path is not possible for a deployment, map the following paths depending on the configuration of DX:

- `/wps` (or the custom context root set for DX)
- `/dx`
- `/ibm`
- `/hcl`

See the following Gateway API resource:

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
