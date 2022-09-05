# Disabling the toolbar logo

You can disable the toolbar logo for the entire portal that includes all the virtual portals or for a specific virtual portal.

!!! note
    The capabilities of the site toolbar are tightly connected with its theme, the toolbar Theme 8.5. Therefore, it is not possible to operate the site toolbar with a customized theme.

1.  Log in to the WebSphere® Integrated Solutions Console as an administrator.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **WP VirtualPortalConfigService**.

3.  Click **Custom properties** to update the configuration properties.

4.  Update the appropriate property based on whether you want to disable the feature globally or only for a specific virtual portal.

    -   To disable the toolbar logo in the entire portal, including all virtual portals edit or create the property:

        `global.wp_toolbar_logo.enabled` and set its value to false.

    -   To disable the toolbar logo for a specific virtual portal.
        -   To disable the toolbar logo for the default virtual portal, edit or create the property:

            `default.wp_toolbar_logo.enabled` and set its value to false.

        -   To disable the toolbar logo for any other virtual portal than the default virtual portal, specify the following properties:
            -   `context.virtual\_portal\_context.property.wp\_toolbar\_logo.enabled= false`

                Set the value of this property to false. Replace virtual\_portal\_context with the context of the target virtual portal. For example, `context.vp1.property.wp\_toolbar\_logo.enabled= false`

            -   `hostname.virtual\_portal\_hostname.property.wp\_toolbar\_logo.enabled= false`

                Set the value of this property to false. Replace virtual\_portal\_hostname with the host name of the target virtual portal. For example, `hostname.vp.example.com.property.wp\_toolbar\_logo.enabled= false`

5.  Save your changes.

6.  Restart the Portal server to apply your changes.


If you defined the property `global.wp_toolbar_logo.enabled`, it acts as a fallback setting for virtual portals that do not have the toolbar logo property set. For more information about prefixes, placeholders, and the order in which properties are evaluated, go to *Virtual Portal Configuration Service*.


???+ info "Related information:"
    - [Virtual Portal Configuration Service](../../../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/srvcfg_virtual_portal.md)

