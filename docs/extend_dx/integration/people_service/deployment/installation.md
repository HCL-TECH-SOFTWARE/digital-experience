# Installation

In this page, you will learn how to install HCL People Service.

## Deployment

People Service is bundled as a dependency in the HCL Digital Experience (DX) Helm chart. The deployment is controlled by the `peopleservice.enabled` property in the Helm chart `values.yaml`. For more information, refer to [Configuration](./configuration/index.md).

```yaml
peopleservice:
  # If enabled deploys people-service
  enabled: true
  # Image configuration
  image:
    # Container image registry
    registry: ""
    # Container image repository
    repository: ""
    # Container image tag
    tag: ""
  # Application configuration
  configuration:
    # Authentication strategy to be used. If set to DX, people-service leverages the same authentication mechanism that DX uses.
    authStrategy: DX
    # Integration configuration
    integration:
      # Indicates that people-service is running in an integration mode for HCL Digital Experience.
      dx: true
```

## Install command

To run the installation of your prepared configurations using Helm, refer to the [Install commands](../../../../deployment/install/container/helm_deployment/helm_install_commands#install-commands).

## Enabling and disabling manually

People Service is integrated into and available through HCL DX portlet pages. It comprises of the portlet, portlet page, and business card web component. People Service is configured automatically using ConfigEngine tasks during startup if enabled while deploying DX.

If People Service is already deployed, you can manually enable or disable it by executing ConfigEngine tasks.

To enable People Service, run the `enable-people-service` task.

!!!note
    You do not need to stop or restart the Portal when executing these configuration tasks.

- AIX, Linux: `./ConfigEngine.sh enable-people-service -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`

- Windows: `ConfigEngine.bat enable-people-service -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`

To disable People Service, run the `disable-people-service` task.

- AIX, Linux: `./ConfigEngine.sh disable-people-service -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
- Windows: `ConfigEngine.bat disable-people-service -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
