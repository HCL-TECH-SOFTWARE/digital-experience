# Installing and Deploying Content Reporting

This document contains instructions on how to install and deploy the Content Reporting application.

## Packaging, installing, and deploying design

Content Reporting is an instance of a react integration portlet configured to point to where the static files of the app can be loaded from. It can be enabled and disabled by using Config Engine tasks. The enable task would deploy, configure the portlet, then deploy the page. You can also enable contentReporting in the `values.yaml` file. For more information, see [Prepare Configuration](https://opensource.hcltechsw.com/digital-experience/CF212/deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configuration/?h=helm+chart#the-default-hcl-dx-95-container-valuesyaml-file).

## Enabling and disabling Content Reporting

This section describes how to enable and disable Content Reporting.

!!! note
    Before enabling Content Reporting, it is required to enable Practitioner Studio. For more information on how to enable Practiotioner Studio, refer to [How to enable Practitioner Studio | HCL Digital Experience](https://help.hcltechsw.com/digital-experience/9.5/practitioner_studio/enable_prac_studio.html). After enabling Content Reporting, it can then be used with other themes.

### Enabling Content Reporting for on-premise deployment

!!! note
    Enabling contentReporting runs the **enable-content-reporting** config engine task in the background. The **enable-content-reporting** config engine task can also be manually executed. For more information on how to run manual Core configuration tasks, see [Running DX Core configuration tasks](https://opensource.hcltechsw.com/digital-experience/CF212/deployment/manage/container_configuration/run_core_config_engine/).

To enable Content Reporting for on-premise deployment, run the **enable-content-reporting** config task.

    !!! note
        It is not required to stop or restart the Portal when running these configuration tasks.

    -   AIX: `./ConfigEngine.sh enable-content-reporting -Dcontentreporting.static.ui.url="/dx/ui/content-reporting/" -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
    -   Linux: `./ConfigEngine.sh enable-content-reporting -Dcontentreporting.static.ui.url="/dx/ui/content-reporting/" -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
    -   Windows: `ConfigEngine.bat enable-content-reporting -Dcontentreporting.static.ui.url="/dx/ui/content-reporting/" -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
    
!!! important
        For the **contentreporting.static.ui.url** parameter value, a slash is required in the end.

!!! note
        If using a webserver, it is required to [map the Content Reporting application to it](https://www.ibm.com/docs/en/was/9.0.5?topic=files-mapping-modules-servers) in addition to the Digital Experience server or cluster, regenerate and propagate the plugin-cfg.xml file.


### Enabling Content Reporting - Helm processes for DX deployments on Kubernetes

In the `values.yaml` file, under configuration, enable contentReporting by setting the `enabled` flag to `true`:

    ```
    # Content Reporting configurations
    contentReporting:
        # Enable or disable Content Reporting
        enabled: true
    ```

### Disabling Content Reporting for on-premise deployment

!!! note
    Disabling contentReporting runs the **disable-content-reporting** config engine task in the background. The **disable-content-reporting** config engine task can also be manually executed. For more information on how to run manual Core configuration tasks, please refer to [Running DX Core configuration tasks](https://opensource.hcltechsw.com/digital-experience/CF212/deployment/manage/container_configuration/run_core_config_engine/).

To disable Content Reporting for on-premise deployment, run the **disable-content-reporting** config task.

    -   AIX: `./ConfigEngine.sh disable-content-reporting -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
    -   Linux: `./ConfigEngine.sh disable-content-reporting -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
    -   Windows: `ConfigEngine.bat disable-content-reporting -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`

### Disabling Content Reporting - Helm processes for DX deployments on Kubernetes

In the `values.yaml` file, under the configuration, disable contentReporting by setting the `enabled` flag to `false`:

    ```
    # Content Reporting configurations
    contentReporting:
        # Enable or disable Content Reporting
        enabled: false
    ```
