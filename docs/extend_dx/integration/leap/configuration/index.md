# HCL Leap configuration for the integration with HCL Digital Experience

The following is a configuration of the integration of HCL Leap with the existing DX environment.

## Configuration for HCL Leap

1. Update the custom values file to set Leap image name, tags and repository name. The procedure is very similar to the instructions in the [Prepare Configuration page for DX](../../../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configuration/). The value options for Leap are documented [in the Leap documentation](https://help.hcltechsw.com/Leap/9.3.2/deploy_container_kubernetes_openliberty.html)

## Configure Ingress for HCL Digital Experience and HCL Leap

HCL Digital Experience allows for the use of an [optional Ingress](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress.md). While this is not required to run HCL Digital Experience, when configured it can be reused by HCL Leap to handle the routing for both products making them available using the same host name and certificate.

1. Setup the Ingress for HCL Digital Experience according to the [optional Ingress documentation](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress.md).

2. Add a second ingress resource for Leap or you can just extend the existing DX Ingress.

3. Point the ingress resource to the path at which Leap is configured; this depends on the context route of the Leap deployment.
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
4. After applying the configuration, both HCL Digital Experience and HCL Leap should be accessible using the provided hostname