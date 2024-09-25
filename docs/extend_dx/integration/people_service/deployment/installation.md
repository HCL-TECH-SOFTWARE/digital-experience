# Installation

This document contains instructions on how to install People Service.

## Deployment

People Service is bundled as a dependency in HCL Digital Experience (DX) Helm chart. The deployment is controlled by `peopleservice.enabled` property in the Helm chart `values.yaml`. For more information, refer to [Configuring People Service](./configuration_parameters.md).

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

People Service is a React integration portlet configured to load static files of the app. It also provides web components for rendering a person's business card. So deploying People Service will configure the portlet, deploy the React integration portlet page, and make the web components for rendering the business card accessible.

## Install command

To run the installation of your prepared configurations using Helm, refer to [Install commands](../../../../deployment/install/container/helm_deployment/helm_install_commands.md#install-commands)

## Enabling and disabling manually

If People Service is already installed, you can manually enable or disable it by executing Config Engine tasks.

To enable People Service, run the `enable-people-service` task.

!!!note
    It is not necessary to stop or restart the Portal when executing these configuration tasks.

- AIX, Linux: `./ConfigEngine.sh enable-people-service -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`

- Windows: `ConfigEngine.bat enable-people-service -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`

To disable People Service, run the `disable-people-service` task.

- AIX, Linux: `./ConfigEngine.sh disable-people-service -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
- Windows: `ConfigEngine.bat disable-people-service -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
