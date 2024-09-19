# Installing and Deploying HCL People Service

This document contains instructions on how to install and deploy People Service.

## Deploying People Service

People Service is an instance of react integration portlet configured to point to where the static files of the app can be loaded from. Additionally it provides web components for rendering person's business card.

It can be enabled and disabled while deployment using Helm chart `values.yaml`. If enabled it will deploy, configure the portlet, deploy react integration portlet page and make the web components for rendering business card accessible.

In a Kubernetes Deployment, you can enable or disable People Service by modifying the Helm values which can be found under the `peopleservice` property.

```yaml
peopleservice:
  enabled: true
```

Please refer to [Configuring People Service](./configuration.md) for additional information.

## Enabling and disabling People Service

If People Service is already installed you can manually enable or disable it by running Config Engine tasks.

To enable People Service, run the `enable-people-service` task.

!!!note
    It is not required to stop or restart the Portal when running these configuration tasks.

- AIX, Linux: ./ConfigEngine.sh enable-people-service -Dpeopleservice.webresources.uri=http://dx-deployment-peopleservice:3000/dx/ui/people/ -DWasPassword=&lt;WAS admin password&gt; -DPortalAdminPwd=&lt;Portal admin password&gt;

- Windows: ConfigEngine.bat enable-people-service -Dpeopleservice.webresources.uri=http://dx-deployment-peopleservice:3000/dx/ui/people/ -DWasPassword=&lt;WAS admin password&gt; -DPortalAdminPwd=&lt;Portal admin password&gt;

To disable People Service, run the `disable-people-service` task.

- AIX, Linux: ./ConfigEngine.sh disable-people-service -DWasPassword=&lt;WAS admin password&gt; -DPortalAdminPwd=&lt;Portal admin password&gt;
- Windows: ConfigEngine.bat disable-people-service -DWasPassword=&lt;WAS admin password&gt; -DPortalAdminPwd=&lt;Portal admin password&gt;
