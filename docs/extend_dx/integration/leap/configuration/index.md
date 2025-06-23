# Configuring HCL Leap for integration with HCL Digital Experience

This page provides information on how to configure the integration of HCL Leap with the existing Digital Experience (DX) environment.

# Configuring Ingress for HCL DX and HCL Leap

You can use an [optional Ingress](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress.md) with HCL DX. While an Ingress is not required to run HCL Digital Experience, it can be configured to be reused by HCL Leap to handle the routing for both products and make them available on the same host name and certificate.

1. Set up the Ingress for HCL DX. For more information, refer to the [optional Ingress documentation](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress.md).

2. Add a second Ingress resource for Leap or extend the existing DX Ingress. Point the Ingress resource to the path at which Leap is configured; this depends on the context route of the Leap deployment.

  For example,
  
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
    
After applying the configuration, both HCL DX and HCL Leap can be accessed using the provided hostname.

# Configuring Gateway API for HCL DX and HCL Leap
This how-do guide provides instructions on how to configure the optional Gateway API for HCL Digital Experience (DX) and HCL Leap. The Gateway API allows for routing requests to both products under the same hostname enhancing the deployment's efficiency and management.

## Steps to Configure

1. **Set Up the Gateway API for HCL DX**
  - Follow the guidelines provided in the [optional Gateway API documentation](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress.md) to set up the Gateway API for HCL DX.

2. **Configure Gateway API for HCL Leap**
  - You can either add a second Gateway API resource specifically for HCL Leap or extend the existing DX Ingress configuration. Ensure that the Gateway API resource points to the correct path where Leap is deployed, which is determined by the context route of the Leap deployment.

### Example Configuration
The following YAML snippet illustrates how to define a Gateway API resource for HCL Leap:
  
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

For instructions on how to enable lightweight third-party authentication (LTPA) single sign-on (SSO), refer to [How to enable LTPA SSO between HCL Leap and HCL Digital Experience in Kubernetes](https://support.hcltechsw.com/community?id=community_blog&sys_id=ba541e4b1b820614f37655352a4bcbc4).
