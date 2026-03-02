# How to enable or disable managed pages on HCL DX

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

When you create a new installation of HCL Digital Experience (DX) 9.5, the Managed Pages feature is enabled by default. This article describes how to enable or disable this feature.

## Instructions

Refer to the following steps to enable or disable the Managed Pages feature.

### Disabling Managed Pages (independent of the current state)

1. Back up your DX file system and database.

2. Run the following task:

    ```shell  
    ./ConfigEngine.sh disable-managed-pages -DPortalAdminPwd=<password> -DWasPassword=<password>  
    ```

    This command disables the Managed Pages feature by updating the configuration flag and decoupling the DX page model from the Web Content Manager (WCM) repository. For more information, refer to [Disabling managed pages](../../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/pages/managed_pages/cfg_managed_pages/wcm_config_mngpages_disable.md).

3. In the WebSphere Integrated Solutions Console, verify that the **managed.pages** property is set to `false` in **WP_ConfigService**.

    1. Log in to the WebSphere Integrated Solutions Console as an administrator.
    2. Navigate to **Resources > Resource Environment > Resource Environment Providers**.
    3. Select **WP_ConfigService** from the list of providers.
    4. Under **Additional Properties**, click **Custom properties**.
        5. Locate the **managed.pages** property and verify that the **Value** is set to `false`.

4. Delete the Portal Site library in the base portal and all virtual portals to remove the legacy managed page content metadata.

5. Delete all WCM syndicators and subscribers for the base portal and all virtual portals that reference the Portal Site library to prevent synchronization errors.

6. Restart the HCL DX server to apply the configuration changes and clear system caches.

### Enabling or re-enabling Managed Pages

1. Back up your DX file system and database.

2. Run the following task:

    ```shell  
    ./ConfigEngine.sh disable-managed-pages -DPortalAdminPwd=<password> -DWasPassword=<password>  
    ```

    This command disables the Managed Pages feature by updating the configuration flag and decoupling the DX page model from the WCM repository. For more information, refer to [Disabling managed pages](../../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/pages/managed_pages/cfg_managed_pages/wcm_config_mngpages_disable.md).

3. In the WebSphere Integrated Solutions Console, verify that the **managed.pages** property is set to `true` in **WP_ConfigService**.

    1. Log in to the WebSphere Integrated Solutions Console as an administrator.
    2. Navigate to **Resources > Resource Environment > Resource Environment Providers**.
    3. Select **WP_ConfigService** from the list of providers.
    4. Under **Additional Properties**, click **Custom properties**.
    5. Locate the **managed.pages** property and verify that the **Value** is set to `true`.

4. Run the following task to initialize the Managed Pages structure and create the necessary site nodes for your virtual portals:

    ```shell
    ./ConfigEngine.sh create-virtual-portal-site-nodes -DPortalAdminPwd=<password> -DWasPassword=<password>
    ```

5. Run the following task to create the required page nodes and WCM content mappings on the base portal:

    ```shell
    ./ConfigEngine.sh create-page-nodes -DPortalAdminPwd=<password> -DWasPassword=<password>
    ```

6. Run the following task for each virtual portal, one at a time, to create its specific page nodes:

    ```shell
    ./ConfigEngine.sh create-page-nodes -DPortalAdminPwd=<password> -DWasPassword=<password> -DVirtualPortalContext=context
    ```

    !!!note
        Use the `-DVirtualPortalHost` flag if the virtual portal is defined by a host name instead of a context.

7. Restart the HCL DX server to finalize the configuration changes and initialize the new page services.

8. Run the online event log reset for the Portal Site library on the base portal and all virtual portals to synchronize the content state. For instructions, refer to [Resetting the web content event log](../../../manage_content/wcm_configuration/wcm_adm_tools/wcm_config_reset_event_log.md).

    !!!note
        To sync Portal pages with WCM, set the `versioningStrategy.PortalPage=always` flag in **WCM_WCMConfigService**.  
