# Removing the site toolbar on a production server

The site toolbar provides access to editing features for managed pages, including adding and editing pages and web content. Although essential for an authoring server, it is recommended that you disable the site toolbar on a delivery server. You can disable the toolbar for an entire portal or for specific virtual portals.

The site toolbar function is not typically needed on a delivery server, and disabling the site toolbar can improve performance on the delivery server.

1.  Log in to the WebSphere® Integrated Solutions Console as an administrator.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Click **WP VirtualPortalConfigService**.

4.  Update the appropriate configuration properties, depending on whether you want to affect the entire portal or a specific virtual portal.

    -   To affect the entire portal, complete the following steps:

        1.  Click **Custom properties**.
        2.  Edit the global.toolbar.enabled property, and set the value to false.
        This setting disables the site toolbar for all virtual portals.

    -   To affect a specific virtual portal, complete the following steps:
        1.  Click **Custom properties**.
        2.  To disable the site toolbar for the default virtual portal, edit the default.toolbar.enabled property, and set the value to false.
        3.  For each virtual portal other than the default where you want to disable the site toolbar, specify the following properties.

            -   **`context.virtual\_portal\_context.property.toolbar.enabled`**

                Set the value to false. Replace virtual\_portal\_context with the context of the target virtual portal \(for example, `context.vp1.property.toolbar.enabled`\).

            -   **`hostname.virtual\_portal\_hostname.property.toolbar.enabled`**

                Set the value to false. Replace virtual\_portal\_hostname with the host name of the target virtual portal \(for example, `hostname.vp.example.com.property.toolbar.enabled`\).

            If defined, the global.toolbar.enabled property acts as a fallback setting for virtual portals that have no values defined.

            For more information about prefixes, placeholders, and the order in which properties are evaluated, see *Virtual Portal Configuration Service*


**Parent topic:**[Preparing the site toolbar](../dev-theme/themeopt_themeshelf.md)

**Related information**  


[Virtual Portal Configuration Service](../admin-system/srvcfg_virtual_portal.md)

[Controlling the visibility of the site toolbar and toolbar tabs](../admin-system/cntrl_vsblty_ste_tlbr.md)

