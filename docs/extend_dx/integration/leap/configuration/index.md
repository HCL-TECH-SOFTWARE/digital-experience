# Configuring HCL Leap for integration with HCL Digital Experience

This page provides information on how to configure the integration of HCL Leap with the existing Digital Experience (DX) environment.

## Access Layer for HCL DX and HCL Leap

This how-do guide provides the available options for implementing the access layer in the DX Deployment. It presents two primary choices: **Ingress** and **Gateway API**, allowing users to choose based on their specific needs and preferences.

### Ingress for HCL DX and HCL Leap
This how-do guide provides basic example on implementing a generic Ingress on your Kubernetes cluster for use with HCL DX and Leap. The actual implementation might vary depending on the Cluster's setup and configuration.

#### Prerequisites
- Set up the Ingress for HCL DX. For more information, refer to the [optional Ingress documentation](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-access-layer/#ingress-implementation-for-dx-deployment).

#### Steps to Configure
- Add a second Ingress resource for Leap or extend the existing DX Ingress. Point the Ingress resource to the path at which Leap is configured; this depends on the context route of the Leap deployment.

### Example Configuration
The following YAML snippet illustrates how to define a Ingress resource for HCL Leap:

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
This how-to guide provides instructions on how to configure the optional Gateway API for HCL Digital Experience (DX) and HCL Leap. The Gateway API allows for routing requests to both products under the same hostname enhancing the deployment's efficiency and management.

#### Prerequisites
1. **Set Up the Gateway API for HCL DX**
  - Follow the guidelines provided in the [optional Gateway API documentation](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-access-layer/#gateway-api-implementation-for-dx-deployment) to set up the Gateway API for HCL DX.

#### Steps to Configure
  - You can either add a second Gateway API resource specifically for HCL Leap or extend the existing DX Gateway API configuration. Ensure that the Gateway API resource points to the correct path where Leap is deployed, which is determined by the context route of the Leap deployment.

#### Example Configuration
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

### Recommendation
Choose the option that best fits your deployment architecture and operational needs.

## Enabling LTPA SSO between HCL Leap and HCL DX in Kubernetes

For instructions on how to enable lightweight third-party authentication (LTPA) single sign-on (SSO), refer to [How to enable LTPA SSO between HCL Leap and HCL Digital Experience in Kubernetes](https://support.hcltechsw.com/community?id=community_blog&sys_id=ba541e4b1b820614f37655352a4bcbc4).
