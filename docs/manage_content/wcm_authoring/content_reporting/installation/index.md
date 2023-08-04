# Installing and Deploying Content Reporting

This document contains instructions on how to install and deploy the Content Reporting application manually. Note that beginning with HCL Digital Experience 9.5 CF214, Content Reporting is installed and deployed by default as part of the CF update process.

## Packaging, installing, and deploying design

Content Reporting is an instance of a react integration portlet configured to point to where the static files of the app can be loaded from. It can be enabled and disabled by using Config Engine tasks. The enable task would deploy, configure the portlet, then deploy the page.

## Enabling and disabling Content Reporting

This section describes how to enable and disable Content Reporting manually.

!!! note
    Beginning with HCL DX 9.5 CF214, Content Reporting is installed and deployed as part of the CF update process. The following **enable-content-reporting** config task is automatically executed. However, you can still manually enable Content Reporting by running the **enable-content-reporting** config task, if the feature was disabled previously.

!!! important
    Before enabling Content Reporting, it is required to enable Practitioner Studio. For more information on how to enable Practitioner Studio, refer to [How to enable Practitioner Studio](../../../../build_sites/practitioner_studio/working_with_ps/enable_prac_studio.md). After enabling Content Reporting, it can then be used with other themes.

### Enabling Content Reporting

!!! note
    Enabling contentReporting runs the **enable-content-reporting** config engine task in the background. The **enable-content-reporting** config engine task can also be manually executed. For more information on how to run manual Core configuration tasks on container deployments, see [Running DX Core configuration tasks](../../../../deployment/manage/container_configuration/run_core_config_engine.md).

To enable Content Reporting, run the **enable-content-reporting** config task.

!!! note
    It is not required to stop or restart the Portal when running these configuration tasks.

-   AIX: `./ConfigEngine.sh enable-content-reporting -Dcontentreporting.static.ui.url="/dx/ui/content-reporting/" -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
-   Linux: `./ConfigEngine.sh enable-content-reporting -Dcontentreporting.static.ui.url="/dx/ui/content-reporting/" -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
-   Windows: `ConfigEngine.bat enable-content-reporting -Dcontentreporting.static.ui.url="/dx/ui/content-reporting/" -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
    
!!! important
        For the **contentreporting.static.ui.url** parameter value, a slash is required in the end.

!!! note
        If using a webserver, it is required to [map the Content Reporting application to the server](https://www.ibm.com/docs/en/was/9.0.5?topic=files-mapping-modules-servers) in addition to the Digital Experience server or cluster. Regenerate and propagate the plugin-cfg.xml file.

### Disabling Content Reporting for traditional deployment

!!! note
    Disabling contentReporting runs the **disable-content-reporting** config engine task in the background. The **disable-content-reporting** config engine task can also be manually executed. For more information on how to run manual Core configuration tasks on container deployments, please refer to [Running DX Core configuration tasks](../../../../deployment/manage/container_configuration/run_core_config_engine.md).

To disable Content Reporting, run the **disable-content-reporting** config task.

-   AIX: `./ConfigEngine.sh disable-content-reporting -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
-   Linux: `./ConfigEngine.sh disable-content-reporting -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
-   Windows: `ConfigEngine.bat disable-content-reporting -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`

!!! note
    After Content Reporting is disabled by running the **disable-content-reporting** config task, Content Reporting page is removed. To enable Content Reporting again, the **enable-content-reporting** config task must be executed manually.
