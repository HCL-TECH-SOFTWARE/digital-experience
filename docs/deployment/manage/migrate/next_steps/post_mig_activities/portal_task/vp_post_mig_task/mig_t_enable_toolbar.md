# Enabling the 8.5 site toolbar on migrated Virtual Portals

During migration, the HCL Digital ExperienceVersion 8.5 theme is deployed. The 8.5 theme includes the site toolbar. However, the toolbar is enabled only for the default virtual portal. You must install the site toolbar on every migrated Virtual Portal.

The site toolbar requires a Portal 8.0 theme or a custom Portal 8.0 theme. The theme must be a modularized theme, which supports theme profiles and theme modules. For more information, see *Add the WebSphere® Portal Version 8.5 site toolbar to a WebSphere Portal 8.0 theme*.

If you want to use the HCL Digital ExperienceVersion 8.5 site toolbar on other migrated virtual portals, complete the following configuration task after you remove the old toolbar from your theme.

!!!note "Cluster only"
    Complete this step only on the primary node.

1.  Go to the wp_profile_root/ConfigEngine directory of your portal installation and run:

    -   AIX® and Linux™: `./ConfigEngine.sh install-toolbar -DWasPassword=password -DPortalAdminPwd=password -DVirtualPortalContext=virtual_portal_context_url`
    -   Windows™: `ConfigEngine.bat install-toolbar -DWasPassword=password -DPortalAdminPwd=password -DVirtualPortalContext=virtual_portal_context_url`

    !!!note
        Run the `list-all-virtual-portals` ConfigEngine task to find your virtual portal context.


You must restart the Portal server after you run the install-toolbar task.

For more information about using the 8.5 toolbar, see the site toolbar documentation.

