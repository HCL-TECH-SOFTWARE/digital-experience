# Configure HCL Leap deployment with an existing DX environment

The following is a configuration of the integration of HCL Leap with the existing DX environment.

1. Update the custom values file to set leap image name, tags and repository name. Follow the instructions in [Prepare Configuration for Leap](https://opensource.hcltechsw.com/digital-experience/CF212/deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configuration/)
```yaml
# Some sample values for Leap.

images:
  repository: "artifactory.com"
  # Image tag for each application
  tags:
    leap: "v1.0.0"
  # Image name for each application
  names:
    leap: "leap"

logging:
  leap:
    level: Leap:*=detail

networking:
  leap:
    serviceType: "ClusterIP"

configuration:
  # Application specific configuration for Leap
  leap:
    customCertificateSecrets:
      dx-tls-cert: "dx-tls-cert"
    contextRoot:
      leap: /apps
      leapBasicAuth: /apps-basic
    leapProperties: |
      ibm.nitro.InfoEntryPoint.dailyInfo = <div>Welcome to <b>HCL Leap</b> in Helm!</div>
```

2. Change Haproxy ServiceType from LoadBalancer to ClusterIP and Set Haproxy SSL to False in custom values file. Follow the instructions in [Configure HAProxy networking](https://opensource.hcltechsw.com/digital-experience/CF212/deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configure_networking/#configure-haproxy-networking)
```yaml
networking:
  haproxy:
    serviceType: ClusterIP
    ssl: false
```
3. If you are already using an [ingress for DX](https://opensource.hcltechsw.com/digital-experience/CF212/deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress/?h=ingress) you can **extend** that ingress for Leap

4. Add a second ingress resource for Leap or you can just extend the existing DX Ingress

5. Point the ingress resource to the path Leap is configured at, this depends on the context route of the Leap Deployment.
For example,
```yaml
        - path: /apps
          pathType: Prefix
          backend:
            service:
              name: leap-deployment-leap
              port:
                number: 9080
```
