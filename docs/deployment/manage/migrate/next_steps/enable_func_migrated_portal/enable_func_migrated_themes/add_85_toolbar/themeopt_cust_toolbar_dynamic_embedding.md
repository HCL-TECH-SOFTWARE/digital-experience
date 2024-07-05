# Embedding the HCL Portal 8.5 site toolbar dynamically without a dynamic content spot

Embedding a toolbar into a theme dynamically integrates the toolbar without editing the theme HTML template.

1.  Add `wp_toolbar_host_dynamic` to the non-deferred section of your theme profiles. This theme module contains both the resources for view mode and edit mode.

    ```
    {
    "moduleIDs" : [
    "getting_started_module",
    "wp_toolbar_host_dynamic",
    ...
    ]
    ...
    }
    ```

2.  See *Adding or removing a ready-to-use module to a theme* to add a module to your profile.

3.  If you are not using WebDAV to connect to your theme resources, see [Setting a profile override on a page](https://help.hcltechsw.com/digital-experience/9.5/dev-theme/themeopt_cust_changepro_override.html).

4.  After you embed a toolbar, you must either restart your portal server. Or, you must use the WebSphere® Integrated Solutions Console to invalidate the resource aggregator cache. To invalidate your cache, click **Theme Analyzer > Utilities > Control Center > Invalidate Cache**. Auto invalidation recognizes your changes automatically for WebDAV based themes. No further action is required. For more information, see [Utilities](../../../../../../../build_sites/themes_skins/the_module_framework/themeopt_analyzer/utilities/index.md).



???+ info "Related information" 
    -   [Adding or removing a module from a profile](../../../../../../../build_sites/themes_skins/the_module_framework/add_remove_oob_modules/index.md)
    -   [Using WebDAV file store](../../../../../../../manage_content/wcm_delivery/webdav/administer_webdav/mash_webdav_store.md)
    <!-- -   [Setting a profile override on a page](../dev-theme/themeopt_cust_changepro_override.md) -->

