# Configure HCL Leap deployment with an existing DX environment

The following is a configuration of the integration of HCL Leap with the existing DX environment.

1. Update the custom values file to set leap image name, tags and repository name. The procedure is very similar to the instructions in the [Prepare Configuration page for DX](../../../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configuration/). The value options for Leap are documented [in the Leap documentation](https://help.hcltechsw.com/Leap/9.3.2/deploy_container_kubernetes_openliberty.html)

2. If you are already using an [ingress for DX](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress/) you can **extend** that ingress for Leap

3. Add a second ingress resource for Leap or you can just extend the existing DX Ingress

4. Point the ingress resource to the path Leap is configured at, this depends on the context route of the Leap Deployment.
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
