# Configuring HCL Leap for integration with HCL Digital Experience

This page provides information on how to configure the integration of HCL Leap with the existing DX environment.

## Configuring Ingress for HCL Digital Experience and HCL Leap

You can use an [optional Ingress](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress.md) with HCL Digital Experience. While an Ingress is not required to run HCL Digital Experience, it can be configured to be reused by HCL Leap to handle the routing for both products and make them available on the same host name and certificate.

1. Set up the Ingress for HCL Digital Experience. For more information, refer to the [optional Ingress documentation](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress.md).

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
    
After applying the configuration, both HCL Digital Experience and HCL Leap can be accessed using the provided hostname.
