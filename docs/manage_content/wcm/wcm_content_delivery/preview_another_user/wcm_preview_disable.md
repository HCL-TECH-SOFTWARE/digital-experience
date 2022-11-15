# Disabling the preview option

If you do not want to offer the preview option in your authoring system, you can disable it globally or for individual virtual portals. If you disable the preview option, the portal no longer shows the preview context menu in the action bar of the site toolbar.

You disable the preview option in the virtual portal configuration service.

1.  Log in to the WebSphere® Integrated Solutions Console as an administrator.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Click **WP VirtualPortalConfigService**.

4.  Update the appropriate configuration properties, depending on whether you want to disable the feature globally or for a specific virtual portal only:

    -   To disable preview in the entire portal, including all virtual portals, proceed as follows:
        1.  Click **Custom properties**.
        2.  Edit the property `global.wp_toolbar_sitepreview.enabled`, and set its value to `false`.
        3.  Save your changes.
    -   To disable preview for a specific virtual portal, proceed as follows:

        1.  Click **Custom properties**.
        2.  To disable preview for the default virtual portal, edit the property `default.wp_toolbar_sitepreview.enabled`, and set its value to `false`.
        3.  To disable preview for any other virtual portal than the default virtual portal, specify the following properties:
            -   **context.virtual\_portal\_context.property.wp\_toolbar\_sitepreview.enabled = false**

                Set the value for this property to `false`. Replace `virtual_portal_context` with the context of the target virtual portal. Example: `context.vp1.property.wp_toolbar_sitepreview.enabled = false`.

            -   **hostname.virtual\_portal\_hostname.property.wp\_toolbar\_sitepreview.enabled = false**

                Set the value for this property to `false`. Replace `virtual_portal_hostname` with the host name of the target virtual portal. Example: `hostname.vp.example.com.property.wp_toolbar_sitepreview.enabled = false`.

        If you defined the property `global.wp_toolbar_sitepreview.enabled` listed earlier, it acts as a fallback setting for virtual portals that do not have the preview option set. For more information about prefixes, placeholders, and the order in which properties are evaluated, read *Virtual Portal Configuration Service*.



**Related information**  


[Virtual Portal Configuration Service](../admin-system/srvcfg_virtual_portal.md)

