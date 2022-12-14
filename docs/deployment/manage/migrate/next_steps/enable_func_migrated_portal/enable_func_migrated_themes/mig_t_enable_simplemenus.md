# Updating your theme to use simple context menus

The theme context menu framework that is provided with the module wp\_theme\_menus in Portal 8.0 and earlier versions is relabeled and improved in HCL Digital Experience 8.5. The new Simple Menu Framework is compatible with all previous versions of the wp\_theme\_menus.

If you want to use the HCL Digital Experience simple context menus, you must complete the following steps on your migrated theme.

1.  Update the existing module wp\_theme\_menus in WebDAV/themes/your\_theme/contributions/theme.json and replace it with:

    ```
    {
    	"id":"wp_theme_menus",
    	"prereqs":[{
    		"id":"wp_simple_contextmenu_main"
    }]
    }
    ```

2.  Copy the following artifacts from the Portal 8.5 theme to your migrated theme in the same directory:

    -   WebDAV/themes/Portal 8.5/contributions/simple\_contextmenu.json
    -   WebDAV/themes/Portal 8.5/css/wp\_simple\_contextmenu.css
    -   WebDAV/themes/Portal 8.5/css/wp\_simple\_contextmenu.css.uncompressed.css
    -   WebDAV/themes/Portal 8.5/css/wp\_simple\_contextmenuRTL.css
    -   WebDAV/themes/Portal 8.5/css/wp\_simple\_contextmenuRTL.css.uncompressed.css
    -   WebDAV/themes/Portal 8.5/css/default/contextmenu.css
    -   WebDAV/themes/Portal 8.5/css/default/contextmenu.css.uncompressed.css
    -   WebDAV/themes/Portal 8.5/css/default/contextmenuCommon.css
    -   WebDAV/themes/Portal 8.5/css/default/contextmenuCommon.css.uncompressed.css
    -   WebDAV/themes/Portal 8.5/css/default/contextmenuRTL.css
    -   WebDAV/themes/Portal 8.5/css/default/contextmenuRTL.css.uncompressed.css
    -   WebDAV/themes/Portal 8.5/menuDefinitions/templates/simpleMenuTemplate.html
3.  Click the **Administration menu** icon. Then, click **Portal Analysis** \> **Theme Analyzer**. Then, click **Utilities** \> **Control Center** \> **Invalidate Cache** to invalidate the theme cache. You must invalidate the cache so that your profile and module changes are picked up by the Portal server. Auto invalidation recognizes your changes automatically for WebDAV based themes. No further action is required. For more information, see [Utilities](../../../../../../build_sites/themes_skins/the_module_framework/themeopt_analyzer/utilities/index.md).



