# Installation HCL Leap deployment with an existing DX environment

The following is an installation step of HCL Leap with the existing DX environment.

1. [Deploying to a Container (Kubernetes) Platform - Open Liberty](https://help.hcltechsw.com/Leap/9.3.2/deploy_container_kubernetes_openliberty.html )

2. [Customized deployment](https://help.hcltechsw.com/Leap/9.3.2/openliberty_customized_deploy.html)

3. Update the `values.yaml` to set leap image name, tags and repository name

4. Install the Leap helm chart in existing DX environment with same namespace

5. [Configure Ingress For DX Deployment](https://opensource.hcltechsw.com/digital-experience/CF212/deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress/?h=ingress)

6. Update the route for ingress to point to leap service
```yaml

        - path: /apps
          pathType: Prefix
          backend:
            service:
              name: leap-deployment-leap
              port:
                number: 9080
```