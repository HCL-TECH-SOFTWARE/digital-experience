# Configuring the Access Layer for HCL DX and Volt MX Foundry

This topic provides instructions to configure the Access Layer for HCL Digital Experience (DX) to integrate with HCL Volt MX Foundry.

You have two options for implementing the Access Layer in the DX deployment and MX: [Ingress](#implementing-ingress-for-hcl-dx-and-hcl-volt-mx-foundry) and [Gateway API](#implementing-gateway-api-for-hcl-dx-and-hcl-volt-mx-foundry). Choose the option that fits your specific needs and preferences.

## Ingress for HCL DX and HCL Volt MX Foundry

Refer to the following steps to implement a generic Ingress on your Kubernetes cluster for use with DX and MX. The actual implementation might vary depending on the cluster's setup and configuration.

### Prerequisites

Ensure you have set up Ingress for DX by following the guidelines in the [optional Ingress documentation](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-access-layer.md#ingress-implementation-for-dx-deployments).

### Implementing Ingress for HCL DX and HCL Volt MX Foundry

1. Configure Volt MX Foundry to use the existing Ingress controller.

    The following sample values configure the Ingress to use an SSL connection using custom certificates:

    ```yaml
    ingress:
      enabled: true
      protocol: "https"
      port: "443"
      class: "nginx"
      tls:
        enabled: true
        customCert:
          cert: "certs/your-ssl-cert.cer"
          key: "certs/your-ssl-cert.key"
      serverDomainName: "your-mx-and-dx-host.com"
    ```

    - The certificate in `customCert` must match the certificate used for the Ingress configuration of HCL DX. The `cer` and `key` files must be located in the `apps/certs` directory of the MX Helm chart.
    - The `class` property refers to the class name of the deployed Ingress controller.
    - The `serverDomainName` must match the hostname that the Ingress is available at.

    For more details on these values, refer to the [HCL Volt MX Foundry Configuration documentation](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmxfoundry_containers_helm/Content/Installing_Containers_With_Helm.html#configuration){target="_blank"}.

## Gateway API for HCL DX and HCL Volt MX Foundry

Refer to the following steps to configure the optional Gateway API for DX and MX. The Gateway API serves as a routing mechanism that allows both products to operate under a unified hostname, improving deployment efficiency and management.

### Prerequisites

Ensure you have set up the Gateway API for HCL DX by following the guidelines in the [optional Gateway API documentation](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-access-layer.md#gateway-api-implementation-for-dx-deployments).

### Implementing Gateway API for HCL DX and HCL Volt MX Foundry

1. Define a new Gateway API resource for Volt MX Foundry (MX) or extend the existing DX Gateway configuration to include MX routes.

    The Gateway API offers a modern and centralized approach to manage HTTP(S) routing across multiple backend services under a single domain.

2. Ensure the Gateway API resource includes routing rules for all relevant MX context routes.

    These routes include, for example, `/authService`, `/mfconsole`, `/accounts`, `/workspace`, `/admin`, `/services`, `/apps`, `/kpns`, and `/apiportal`. Each rule should forward traffic to the correct backend service and port corresponding to each MX component.

    The following YAML configuration demonstrates how to set up a Gateway API resource for MX, routing various paths to their corresponding backend services:

    ```yaml
    apiVersion: gateway.networking.k8s.io/v1
    kind: HTTPRoute
    metadata:
      name: mx-http-route
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
            value: /authService
        backendRefs:
        - name: voltmx-foundry-identity
          port: 8080
      - matches:
        - path:
            type: PathPrefix
            value: /mfconsole
        backendRefs:
        - name: voltmx-foundry-console
          port: 8080
      - matches:
        - path:
            type: PathPrefix
            value: /accounts
        backendRefs:
        - name: voltmx-foundry-console
          port: 8080
      - matches:
        - path:
            type: PathPrefix
            value: /workspace
        backendRefs:
        - name: voltmx-foundry-console
          port: 8080
      - matches:
        - path:
            type: PathPrefix
            value: /admin
        backendRefs:
        - name: voltmx-foundry-integration
          port: 8080
      - matches:
        - path:
            type: PathPrefix
            value: /services
        backendRefs:
        - name: voltmx-foundry-integration
          port: 8080
      - matches:
        - path:
            type: PathPrefix
            value: /apps
        backendRefs:
        - name: voltmx-foundry-integration
          port: 8080
      - matches:
        - path:
            type: PathPrefix
            value: /kpns
        backendRefs:
        - name: voltmx-foundry-engagement
          port: 8080
      - matches:
        - path:
            type: PathPrefix
            value: /apiportal
        backendRefs:
        - name: voltmx-foundry-apiportal
          port: 8080
    ```

    - The `metadata` section identifies and names the `HTTPRoute` resource.
    - The `spec` section outlines the overall routing configuration for this `HTTPRoute`.
    - The `parentRefs` section associates this `HTTPRoute` with a specific Gateway and its section (for example, `https`).
    - The `hostnames` section indicates the domain this route is intended for.
    - The `rules` section lists the path matches and their corresponding backend references, ensuring proper routing of requests to the correct MX service components.
    - Within `rules`, the `matches` block defines the criteria for routing, such as a `PathPrefix` (for example, `/authService` and `/mfconsole`).
    - The `backendRefs` section specifies the target backend service (such as `voltmx-foundry-identity`, `voltmx-foundry-console`) and port where matching requests are directed.

## Verify the Deployment

After configuring the Access Layer, follow these steps to verify your deployment:

1. Test DXConnect access.

    - If you have a local deployment that does not include the haproxy container, access DXConnect by specifying the container port in the following URL:

        ```
        https://<localhost>:10202/hcl/dxconnect/processHandler/version
        ```

    - If the target environment includes the haproxy container, access DXConnect with the following URL:

        ```
        https://<host-name>/hcl/dxconnect/processHandler/version
        ```

        Make sure to replace the `<host-name>` value.

2. Access the Volt MX Foundry admin console.

    When all services and pods are running, access the Volt MX Foundry admin console using the following URL. Update the `<host-name>` accordingly.
    ```
    https://<host-name>/mfconsole
    ```

### Modifying the upload size restriction

If Ingress is enabled for HCL DX, modify the upload size restriction in your Ingress resource.

1. Run the following command:

    ```
    kubectl -n <namespace> edit ingress/custom-routes
    ```

2. Add the following parameter to increase the upload size restriction:

    ```
    nginx.ingress.kubernetes.io/proxy-body-size: <size-restriction>m
    ```

    Make sure to specify your preferred size in the `<size-restriction>` value. For example, to increase the restriction to 8 MB, add `nginx.ingress.kubernetes.io/proxy-body-size: 8m`.

After applying the configuration, both HCL Digital Experience and HCL Volt MX Foundry can be accessed using the provided hostname.
