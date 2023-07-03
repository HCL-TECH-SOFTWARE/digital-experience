# Installing and Deploying Content Reporting

This document contains instructions on how to install and deploy the Content Reporting application.

## Packaging, installing, and deploying design

Content Reporting is an instance of a react integration portlet and it is configured to point to where the static files of the app can be loaded from. Additionally, it can be enabled and disabled by using the Config Engine tasks. The enable task would deploy, configure the portlet, then deploy the page. In the helm-charts, values.yaml define the value of contentReporting on whether it should be enabled or not.

## Enabling and disabling Content Reporting
This section describes how to enable and disable Content Reporting.

!!! note
    Before enabling Content Reporting, it is required that Practitioner Studio is enabled. For more information on how to enable Practiotioner Studio, please refer to [How to enable Practitioner Studio | HCL Digital Experience](https://help.hcltechsw.com/digital-experience/9.5/practitioner_studio/enable_prac_studio.html).

### Enabling Content Reporting for on-premise deployment

1. Open a command line.
2. Change to the wp_profile-root/ConfigEngine directory.
3. Run the **enable-content-reporting** config task.

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

In the `values.yaml` file, under configuration, enable contentReporting by setting the enable flag to `true`:

    ```
    # Content Reporting configurations
    contentReporting:
        # Enable or disable Content Reporting
        enabled: true
    ```

!!! note
    Enabling contentReporting runs the **enable-content-reporting** config engine task in the background. The **enable-content-reporting** config engine task can also be manually executed. For more information on how to run manual Core configuration tasks, please refer to [Running DX Core configuration tasks](https://opensource.hcltechsw.com/digital-experience/CF212/deployment/manage/container_configuration/run_core_config_engine/).

## Disabling Content Reporting for on-premise deployment

1. Open a command line.
2. Change to the wp_profile-root/ConfigEngine directory.
3. Run the **disable-content-reporting** config task.

    -   AIX: `./ConfigEngine.sh disable-content-reporting -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
    -   Linux: `./ConfigEngine.sh disable-content-reporting -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
    -   Windows: `ConfigEngine.bat disable-content-reporting -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`

## Disabling Content Reporting - Helm processes for DX deployments on Kubernetes

In the `values.yaml` file, under the configuration, disable contentReporting by setting the enable flag to `false`:

    ```
    # Content Reporting configurations
    contentReporting:
        # Enable or disable Content Reporting
        enabled: false
    ```
    
!!! note
    Disabling contentReporting runs the **disable-content-reporting** config engine task in the background. The **disable-content-reporting** config engine task can also be manually executed. For more information on how to run manual Core configuration tasks, please refer to [Running DX Core configuration tasks](https://opensource.hcltechsw.com/digital-experience/CF212/deployment/manage/container_configuration/run_core_config_engine/).
