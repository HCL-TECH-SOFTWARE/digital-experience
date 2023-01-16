# Embedding a toolbar into a theme by adding a dynamic content spot to an HTML template

Embedding a toolbar into a theme with a dynamic content spot provides an optimized user experience when compared to embedding it dynamically.

1.  Configure the site toolbar. To add the site toolbar theme modules to the theme profiles of your theme, choose one of the three different theme modules.

    -   **wp\_toolbar\_host**

        The first level module of the HCL Portal 8.5 site toolbar. It groups all of the resources that are required to run the toolbar in your theme. It supports view mode and edit mode.

    -   **wp\_toolbar\_host\_view**

        Contains all toolbar resources that are needed for view mode.

    -   **wp\_toolbar\_host\_edit**

        Contains all toolbar resources that are needed for edit mode.

2.  Use `wp_toolbar_host` alone, or combine `wp_toolbar_host_view` with the `wp_toolbar_host_edit` module.

    -   If you have a theme profile which does not have a deferred section, you need to add the `wp_toolbar_host` theme module.

        ```
        {
        "moduleIDs" : [
        "getting_started_module",
        "wp_toolbar_host",
        ...
        ]
        ...
        }
        ```

    -   If you have a theme profile with a non-deferred and a deferred section, it is recommended to combine the `wp_toolbar_host_view` with the `wp_toolbar_host_edit` module. In that case you must add the `wp_toolbar_host_view` to the non-deferred section and `wp_toolbar_host_edit` to the deferred section.

        ```
        {
        "moduleIDs" : [
        "getting_started_module",
        "wp_toolbar_host_view",
        ...
        ],
        "deferredModuleIDs" : [
        "wp_toolbar_host_edit",
        ...
        ],
        ...
        }
        ```

        The theme module `wp_toolbar_host_edit` will not be loaded until you enter edit mode.

3.  Add the dynamic content spot of the version 8.5 toolbar to the theme templates. To integrate the new toolbar to your theme, you must add a dynamic content spot to the theme HTML templates of your theme. The ID of the dynamic content spot is `85toolbar`.

4.  To add this dynamic content spot, create a HTML anchor element which references this dynamic content spot. Embed the dynamic content spot in the header of your page

    ```
    <div class="wpthemeFrame">
    <header role="banner">
    <a rel="dynamic-content" href="dyn-cs:id:85toolbar"></a>
    ...
    ```

5.  Add this dynamic content spot to the locale-specific versions of your theme templates.

6.  In the default version 8.0 theme, the names of the theme template files are theme.html and theme\_sidenav.html. The localized versions of theme.html can be found in the locale subfolder, nls.

    For example theme\_en.html.

7.  After you embed a toolbar, you must either restart your portal server. Or, you must use the WebSphere® Integrated Solutions Console to invalidate the resource aggregator cache. To invalidate your cache, click **Theme Analyzer** \> **Utilities** \> **Control Center** \> **Invalidate Cache**. Auto invalidation recognizes your changes automatically for WebDAV based themes. No further action is required. For more information, see [Utilities](../../../../../../../build_sites/themes_skins/the_module_framework/themeopt_analyzer/utilities/index.md).



