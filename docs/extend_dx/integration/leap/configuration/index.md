# Configuring HCL Leap for integration with HCL DX

This page provides information on how to configure the integration of HCL Leap with the existing Digital Experience (DX) environment.

## Access Layer for HCL DX and HCL Leap

You have two options for implementing the Access Layer in the DX deployment and Leap: [Ingress](#ingress-for-hcl-dx-and-hcl-leap) and [Gateway API](#gateway-api-for-hcl-dx-and-hcl-leap). Choose the option that fits your specific needs and preferences.

### Ingress for HCL DX and HCL Leap

Refer to the following steps to implement a generic Ingress on your Kubernetes cluster for use with DX and Leap. The actual implementation might vary depending on the cluster's setup and configuration.

#### Prerequisites

Ensure you follow the guidelines provided in the [optional Ingress documentation](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-access-layer.md#ingress-implementation-for-dx-deployments) to set up Ingress for DX.

#### Implementing Ingress for HCL DX and HCL Leap

1. Add a second Ingress resource for Leap or extend the existing DX Ingress configuration.

2. Point the Ingress resource to the path where Leap is configured. This path depends on the context route of the Leap deployment.

The following YAML snippet illustrates how to define a Ingress resource for Leap:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
    name: custom-routes
spec:
    ingressClassName: nginx
    tls:
    - secretName: dx-tls-cert
        hosts:
        - your-kube-deployment.com
    rules:
    - host: your-kube-deployment.com
        http:
        paths:
        - path: /apps
            pathType: Prefix
            backend:
            service:
                name: leap-deployment-leap
                port:
                number: 9080
```

### Gateway API for HCL DX and HCL Leap

Refer to the following steps to configure the optional Gateway API for DX and Leap. The Gateway API allows you to route requests to both products under the same hostname, enhancing the deployment's efficiency and management.

#### Prerequisites

Ensure you follow the guidelines provided in the [optional Gateway API documentation](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-access-layer.md#gateway-api-implementation-for-dx-deployments) to set up the Gateway API for HCL DX.

#### Implementing Gateway API for HCL DX and HCL Leap

1. Add a second Gateway API resource for Leap or extend the existing DX Gateway API configuration.

2. Ensure that the Gateway API resource points to the correct path where Leap is deployed, which is determined by the context route of the Leap deployment.

The following YAML snippet illustrates how to define a Gateway API resource for Leap:
  
  ```yaml
    apiVersion: gateway.networking.k8s.io/v1
  kind: HTTPRoute
  metadata:
    name: leap-http-api-route
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
          value: /apps
      backendRefs:
      - name: leap-deployment-leap
        port: 9080
  ```

## Enabling LTPA SSO between HCL Leap and HCL DX in Kubernetes

For instructions on how to enable Lightweight Third-Party Authentication (LTPA) Single Sign-On (SSO), refer to [How to enable LTPA SSO between HCL Leap and HCL DX in Kubernetes](https://support.hcltechsw.com/community?id=community_blog&sys_id=ba541e4b1b820614f37655352a4bcbc4){target="_blank"}.
