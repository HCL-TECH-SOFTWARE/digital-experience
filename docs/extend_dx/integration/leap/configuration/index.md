# Configure HCL Leap deployment with an existing DX environment

The following is a configuration of the integration of HCL Leap with the existing DX environment.

1. [Prepare Configuration for leap](https://opensource.hcltechsw.com/digital-experience/CF212/deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configuration/)
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
2. Update the `values.yaml` to set leap image name, tags and repository name

3. Change Haproxy ServiceType from LoadBalancer to ClusterIP and Set Haproxy SSL to False in `values.yaml`