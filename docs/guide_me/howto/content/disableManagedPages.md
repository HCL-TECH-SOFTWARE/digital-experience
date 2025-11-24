# How to enable or disable managed pages on HCL Digital Experience

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

When you create a new installation of HCL Digital Experience 9.5, managed pages are enabled by default. However, you can also manually disable and enable the feature as needed.

## Instructions

Here are the instructions to disable or enable manage pages.

### Disable manages pages (independent on the current state)

1. Back up Portal file system and database

2. Run the following task:

    ```shell  
    ./ConfigEngine.sh disable-managed-pages -DPortalAdminPwd=<password> -DWasPassword=<password>  
    ```

    For details, please check [Disabling managed pages](../../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/pages/managed_pages/cfg_managed_pages/wcm_config_mngpages_disable.md){target="_blank"}.

3. Verify **managed.pages** property is **false** in **WP_ConfigService**.

4. Delete Portal Site Library in base portal and all virtual portals.

5. Delete all syndicator and subscribers for base portal and all virtual portals that reference Portal Site library.

6. Restart the HCL DX server.

### Enable or re-enable manages pages

1. Back up Portal file system and database

2. Run the task:

    ```shell
    ./ConfigEngine.sh enable-managed-pages -DPortalAdminPwd=<password> -DWasPassword=<password>
    ```

    For details, please check: [Enabling managed pages](../../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/pages/managed_pages/cfg_managed_pages/wcm_config_mngpages_enable.md){target="_blank"}.  

3. Verify **managed.pages** property is **true** in **WP_ConfigService**

4. Run this task:

    ```shell
    ./ConfigEngine.sh create-virtual-portal-site-nodes -DPortalAdminPwd=<password> -DWasPassword=<password>
    ```

5. Run this task to create page nodes on base portal:

    ```shell
    ./ConfigEngine.sh create-page-nodes -DPortalAdminPwd=<password> -DWasPassword=<password>
    ```

6. Run this task for each of the virtual portals, one at a time:

    ```shell
    ./ConfigEngine.sh create-page-nodes -DPortalAdminPwd=<password> -DWasPassword=<password> -DVirtualPortalContext=context
    ```

    !!!note
        Use the flag -DVirtualPortalHost if VP is defined by host name instead of context

7. Restart the HCL DX server

8. Run the online event log reset for the Portal Site library on Base and all virtual portals.  
    For instructions, see: [Resetting the web content event log](../../../manage_content/wcm_configuration/wcm_adm_tools/wcm_config_reset_event_log.md){target="_blank"}

!!!note
    To sync Portal pages with WCM, **versioningStrategy.PortalPage=always** needs to be set in **WCM_WCMConfigService**.  
