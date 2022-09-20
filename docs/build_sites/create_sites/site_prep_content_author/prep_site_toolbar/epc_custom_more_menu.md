# Customizing the More menu of the action bar

The More menu is a public extension point that you can use to plug in your own menu actions that you want to make available in the action bar.

The **More** menu is based on the simple context menu framework of HCL Digital Experience. The menu identifier is `moreActions`. For more details on the simple menu framework as well as how to implement and register your own menu actions, read *Simple menu framework*.

By default, the context menu is empty. If you do not plan to plug in your own menu contributions, you can disable it globally or for individual virtual portals. If you disable it, the portal no longer shows the **More** menu in the action bar.

You can disable the **More** menu in the virtual portal configuration service.

1.  Log in to the WebSphere® Integrated Solutions Console as an administrator.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Click **WP VirtualPortalConfigService**.

4.  Update the appropriate configuration properties, depending on whether you want to disable the feature globally or for a specific virtual portal only:

    -   To disable the **More** menu in the entire portal, including all virtual portals, proceed as follows:
        1.  Click **Custom properties**.
        2.  Edit or create the property `global.wp_toolbar_moremenu.enabled`, and set its value to `false`.
        3.  Save your changes.
        4.  Restart the Portal server to apply your changes.

    -   To disable the **More** menu for a specific virtual portal, proceed as follows:

        1.  Click **Custom properties**.
        2.  To disable the **More** menu for the default virtual portal, edit or create the property `default.wp_toolbar_moremenu.enabled`, and set its value to `false`.
        3.  To disable the **More** menu for any other virtual portal than the default virtual portal, specify the following properties:

            -   **context.virtual\_portal\_context.property.wp\_toolbar\_moremenu.enabled = false**

                Set the value for this property to `false`. Replace `virtual_portal_context` with the context of the target virtual portal. Example: `context.vp1.property.wp_toolbar_moremenu.enabled = false`.

            -   **hostname.virtual\_portal\_hostname.property.wp\_toolbar\_moremenu.enabled = false**

                Set the value for this property to `false`. Replace `virtual_portal_hostname` with the host name of the target virtual portal. Example: `hostname.vp.example.com.property.wp_toolbar_moremenu.enabled = false`.

        4.  Restart the Portal server to apply your changes.
        If you defined the property `global.wp_toolbar_moremenu.enabled` listed earlier, it acts as a fallback setting for virtual portals that do not have the **More** menu property set. For more information about prefixes, placeholders, and the order in which properties are evaluated, read *Virtual Portal Configuration Service*.
    




???+ info "Related information:"
    - [Simple menu framework](../../../themes_skins/customizing_theme/menus/simple_menu_framework/index.md)
    - [Virtual Portal Configuration Service](../../../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/srvcfg_virtual_portal.md)

