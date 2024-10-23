# Installing and Deploying HCL People Service

This document contains instructions on how to install and deploy People Service.

## Deploying People Service

People Service is a React integration portlet configured to load static files of the app. It also provides web components for rendering a person's business card.

You can enable or disable People Service during deployment using the Helm chart `values.yaml`. If enabled, it will deploy and configure the portlet, deploy the React integration portlet page, and make the web components for rendering the business card accessible.

In a Kubernetes deployment, modify the Helm values under the `peopleservice` property to enable or disable People Service.

```yaml
peopleservice:
  # If enabled deploys people-service
  enabled: true
  # Application configuration
  configuration:
    # Authentication strategy to be used. If set to DX, people-service leverages the same authentication mechanism that DX uses.
    authStrategy: DX
    # Integration configuration
    integration:
      # Indicates that people-service is running in an integration mode for HCL Digital Experience.
      dx: true
```

For more information, refer to [Configuring People Service](./configuration.md).

## Enabling and disabling People Service

If People Service is already installed, you can manually enable or disable it by executing Config Engine tasks.

To enable People Service, run the `enable-people-service` task.

!!!note
    It is not necessary to stop or restart the Portal when executing these configuration tasks.

- AIX, Linux: `./ConfigEngine.sh enable-people-service -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`

- Windows: `ConfigEngine.bat enable-people-service -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`

To disable People Service, run the `disable-people-service` task.

- AIX, Linux: `./ConfigEngine.sh disable-people-service -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
- Windows: `ConfigEngine.bat disable-people-service -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
