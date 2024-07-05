# Enabling vanity URL support after migration

In a new HCL Digital Experience 8.5 installation, vanity URL support is enabled. However, if you upgrade your Portal from a previous version to Version 8.5, vanity URL support is disabled. You can enable and disable vanity URL support as required by using a portal configuration task.

If vanity URL support is not enabled and a user tries to access a vanity URL, the portal gives a 404 return code.

!!!note
    For vanity URLs to work, managed pages also must be enabled as a prerequisite. For more information, read *Enabling managed pages after migration*. If you disable managed pages, this step also disables vanity URLs. If you do not disable vanity URLs and you enable managed pages again, vanity URLs also work again.

-   **Enabling vanity URL support**

    To enable vanity URL support, you use the configuration task enable-vanityurl-support. This task sets a new custom property in the Resource Environment Provider of the WP Configuration Service. The property name is vanityurl.support.enabled. When you run the configuration task, the property is set to the value true.

    !!!note
        It is mandatory to enable managed pages to have vanity URLs enabled. If managed pages support is not enabled, the task enable-vanityurl-support fails. In this case, run the task enable-managed-pages first.

-   **Disabling vanity URL support**

    To disable vanity URL support, you use the configuration task disable-vanityurl-support. This task deletes the custom property vanityurl.support.enabled from the Resource Environment Provider of the WP Configuration Service. If the portal then receives a request to serve a vanity URL, it gives a 404 return code.

-   **Syntax**

    You call these configuration tasks as follows:

    -   **AIX®**

        Enable: `./ConfigEngine.sh enable-vanityurl-support -DPortalAdminPwd=password -DWasPassword=password`

        Disable: `./ConfigEngine.sh disable-vanityurl-support -DPortalAdminPwd=password -DWasPassword=password`

    -   **Linux™**

        Enable: `./ConfigEngine.sh enable-vanityurl-support -DPortalAdminPwd=password -DWasPassword=password`

        Disable: `./ConfigEngine.sh disable-vanityurl-support -DPortalAdminPwd=password -DWasPassword=password`

    -   **Windows™**

        Enable: `ConfigEngine.bat enable-vanityurl-support -DPortalAdminPwd=password -DWasPassword=password`

        Disable: `ConfigEngine.bat disable-vanityurl-support -DPortalAdminPwd=password -DWasPassword=password`

!!!note "Remember"
    After you run the enable-vanityurl-support or disable-vanityurl-support task, restart the server. Go to [Starting and stopping servers, deployment managers, and node agents](../../../../../../deployment/manage/stopstart.md) for specific instructions.


???+ info "Related information"  
    -   [Migration: Enabling managed pages](../../../../../../deployment/manage/migrate/next_steps/enable_func_migrated_portal/mig_t_enable_mngpages.md)

