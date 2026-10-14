# Enabling and disabling the Search Admin UI

This section describes how to enable or disable the Search Admin UI.

!!! important
    Before enabling the Search Admin UI, ensure to install the [Search V2 backend](https://help.hcl-software.com/digital-experience/9.5/latest/deployment/install/container/helm_deployment/preparation/optional_tasks/optional_install_new_search/).

## Enabling the Search Admin UI through Helm deployment

Apply the following changes to your installation `values.yaml` to enable the Search Admin UI.

```yaml
configuration:
  searchMiddleware:
    enabled: true
    # Search Admin UI configurations
    adminUI:
      # Enable/Disable Search Admin UI
      enabled: true
```

For more information on how to run ConfigEngine tasks, refer to [Running DX Core configuration tasks](https://help.hcl-software.com/digital-experience/9.5/latest/deployment/manage/container_configuration/run_core_config_engine/).

## Enabling the Search Admin UI using a ConfigEngine task

To enable the Search Admin UI, run the **enable-searchv2-admin-ui** config task. You do not need to stop or restart the Portal when running this task.

-   AIX: `./ConfigEngine.sh enable-searchv2-admin-ui -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
-   Linux: `./ConfigEngine.sh enable-searchv2-admin-ui -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
-   Windows: `ConfigEngine.bat enable-searchv2-admin-ui -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`

## Disabling the Search Admin UI using a ConfigEngine task

To disable the Search Admin UI, run the **disable-searchv2-admin-ui** config task.

-   AIX: `./ConfigEngine.sh disable-searchv2-admin-ui -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
-   Linux: `./ConfigEngine.sh disable-searchv2-admin-ui -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
-   Windows: `ConfigEngine.bat disable-searchv2-admin-ui -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`

After disabling the Search Admin UI using the **disable-searchv2-admin-ui** config task, the Search Admin UI page is removed. To re-enable the Search Admin UI, run the **enable-searchv2-admin-ui** config task again.
