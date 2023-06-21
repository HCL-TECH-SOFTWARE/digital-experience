# Installing and Deploying Content Reporting

This document contains instructions on how to install and deploy the Content Reporting application.

## Packaging, Installing, and Deploying design
Content Reporting is an instance of a react integration portlet and it is configured to point to where the static files of the app can be loaded from. Additionally, it can be enabled and disabled by using the Config Engine tasks. The enable task would deploy, configure the portlet, then deploy the page. In the helm-charts, values.yaml define the value of contentReporting on whether it should be enabled or not.

# How to enable and disable Content Reporting
This section describes how to enable and disable Content Reporting.

## Enabling Content Reporting for on-premise deployment
1. Open a command line.
2. Change to the wp_profile-root/ConfigEngine directory.
3. Run the **enable-content-reporting** config task.

    !!! note
        It is not necessary to stop or restart Portal when running these configuration tasks.

    -   AIX: `./ConfigEngine.sh enable-content-reporting -Dcontentreporting.static.ui.url="/dx/ui/content-reporting/" -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
    -   Linux: `./ConfigEngine.sh enable-content-reporting -Dcontentreporting.static.ui.url="/dx/ui/content-reporting/" -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
    -   Windows: `ConfigEngine.bat enable-content-reporting -Dcontentreporting.static.ui.url="/dx/ui/content-reporting/" -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
    !!! note
        In the **contentreporting.static.ui.url** parameter value, a slash is required in the end.


## Enabling Content Reporting - Helm processes for DX deployments on Kubernetes
In the values.yaml, under the configuration, enable contentReporting by setting the enable flag to true

    # Content Reporting configurations
    contentReporting:
        # Enable or disable Content Reporting
        enabled: true

!!! note
        This will run **enable-content-reporting** config engine task under the covers. **enable-content-reporting** can be manually executed by login to core pod as well.

## Disabling Content Reporting for on-premise deployment
1. Open a command line.
2. Change to the wp_profile-root/ConfigEngine directory.
3. Run the **disable-content-reporting** config task.

    -   AIX: `./ConfigEngine.sh disable-content-reporting -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
    -   Linux: `./ConfigEngine.sh disable-content-reporting -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
    -   Windows: `ConfigEngine.bat disable-content-reporting -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`

## Disabling Content Reporting - Helm processes for DX deployments on Kubernetes
In the values.yaml, under the configuration, disable contentReporting by setting the enable flag to false

    # Content Reporting configurations
    contentReporting:
        # Enable or disable Content Reporting
        enabled: false

!!! note
        This will run **disable-content-reporting** config engine task under the covers. **disable-content-reporting** can be manually executed by login to core pod as well.
