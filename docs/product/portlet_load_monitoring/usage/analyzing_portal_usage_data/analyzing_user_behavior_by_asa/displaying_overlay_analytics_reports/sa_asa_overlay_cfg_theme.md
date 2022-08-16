# Configuring the theme for overlay reports

To integrate the overlay analytics features into your theme, add a theme module to the theme profiles of your modular theme. If you do not add the theme, the overlay menu items are not displayed.

Locate the **overlay analytics features** that are provided by the theme module `wp_analytics_overlay_reports`. This theme module contains a menu contribution, which defines the menu entries that display or hide the overlay reports in the portal user interface. In the default theme, these menu entries are integrated into the **Actions** menu of the theme.

The theme module for analytics overlay reports is not part of the theme profiles that are provided by the default theme. You need to explicitly add this module to one or multiple theme profiles.

1.  Open the menu definition file for the **Actions** menu. It is in WebDAV at fs-type1/themes/Portal8.5/menuDefinitions/pageAction.json

2.  In the menu definition file, find the menu entry of type `ModuleRef`, which references the theme module `wp_analytics_overlay_reports`.

    For example:

    ```
            {
                    "type":"ModuleRef",
                    "id":"wp_analytics_overlay_reports"
            },
    ```

3.  To add the theme module for analytics overlay to a deferred theme profile, add the module code to the deferred section of the profile in WebDAV to fs-type1/themes/Portal8.5/profiles/profile\_deferred.json.

    In the following example, add the `deferredModuleIDs` code between the `ModuleIDs` and the `wp_analytics_overlay_reports` line.

    ```
    {
       "moduleIDs": [
            ... modules that are loaded immediately...
            ...
       ],
       "deferredModuleIDs": [
           ... modules that are deferred...
           ...
           "wp_analytics_overlay_reports",
           ...
       ],
       ...
    }
    ```

4.  Restart your Portal server or invalidate the resource aggregator cache. To invalidate your cache, click **Theme Analyzer** \> **Utilities** \> **Control Center** \> **Invalidate Cache**. Auto invalidation recognizes your changes automatically for WebDAV based themes. No further action is required. For more information, see [Utilities](../dev-theme/themeopt_an_util.md#).


The theme module menu entries are displayed only if the theme module `wp_analytics_overlay_reports` is part of the theme profile. The theme profile is associated with the portal page that is being rendered.

If you have a custom modular theme, you can use the same approach to integrate the overlay features into a different menu.

**Parent topic:**[Displaying overlay analytics reports](../admin-system/sa_asa_overlay_stats.md)

**Previous topic:**[Configuring a Credential Vault for overlay reports](../admin-system/sa_asa_overlay_cfg_crd_vlt.md)

**Next topic:**[Viewing overlay analytics statistics](../admin-system/sa_asa_ovrly_stats_ui.md)

