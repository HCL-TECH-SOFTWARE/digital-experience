# Integration with HCL Leap

The following are high-level steps for Installing HCL Leap with an existing DX Deployment.
Please see [HCL Leap product documentation](https://help.hcltechsw.com/Leap/9.3.2/index.html) for detailed instructions. 

Before performing the steps, HCL Leap must already be installed and properly setup. This steps also assumes that [post-deployment tasks](https://help.hcltechsw.com/Leap/9.3.2/in_setting_up_environment.html) are also done. For more information see: [Deploying to a Container (Kubernetes) Platform - Open Liberty](https://help.hcltechsw.com/Leap/9.3.2/deploy_container_kubernetes_openliberty.html )

1. If you are already using an [ingress for DX](https://opensource.hcltechsw.com/digital-experience/CF212/deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress/?h=ingress) you can **extend** that ingress for Leap

2. Add a second ingress resource for Leap or you can just extend the existing DX Ingress

3. Point the ingress resource to the path Leap is configured at, this depends on the context route of the Leap Deployment.
Example:
```yaml
        - path: /apps
          pathType: Prefix
          backend:
            service:
              name: leap-deployment-leap
              port:
                number: 9080
```
