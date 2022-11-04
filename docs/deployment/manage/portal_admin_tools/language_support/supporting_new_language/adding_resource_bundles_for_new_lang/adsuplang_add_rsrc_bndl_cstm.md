# Resource bundles to support a Portal based custom theme

You can add supported locale to the system. You must provide resource bundles for the new language to the Portal based custom theme to enable them.

Vietnamese is used as an example language in the following steps.

1.  Run the following XML to create the "Vietnamese" language. Click the **Administration menu** icon. Then, click **Portal Settings > Import XML**.

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <request xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    	type="update" 
    	xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd">
    	<portal action="locate">
    		<language action="update" bidi="false" domain="rel" locale="vi_vn">
    			<localedata locale="en_us">
    				<title>Vietnamese</title>
    			</localedata>
    		</language>
    	</portal>
    </request>
    ```

2.  Copy the contents of the following files from your Portal server into a new file called language\_vi\_vn.js:

    -   PortalServer_root/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/modules/pagebuilder/js/nls/pb_ui_layer_en_us.js
    -   PortalServer_root/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/modules/portalclient/js/nls/rest_utils_en_us.js
    -   If you use Active Site Analytics (PortalServer_root/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/modules/asa/js/nls/asa_layer_en_us.js)
    -   If you use Tagging and Rating P(ortalServer_root/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/modules/portalclient/js/nls/tagging_rating_en_us.js)
3.  In the language_vi_vn.js file, replace all instances of:

    ```
    en_us")
    ```

    with:

    ```
    vi_vn")
    ```

    and all instances of:

    ```
    .en_us=
    ```

    with:

    ```
    .vi_vn=
    ```

4.  Place the language_vi_vn.js file into the js folder of your custom theme.

    For example, dav:fs-type1/themes/custom_theme/js.

5.  Create a theme module for the language_vi_vn.js file by creating a languages.json file with the following contents:

    ```
    {
    	"modules":[{
    		"id":"custom_languages",
    		"prereqs":[{
    			"id":"dojo"
    		}],
    		"contributions":[{
    			"type":"head",
    			"sub-contributions":[{
    				"type":"js",
    				"uris":[{
    					"value":"/js/language_vi_vn.js",
    					"lang":"vi_vn"
    				}]
    			}]
    		}]
    	}]
    }
    ```

    For more information about theme modules, see Registering theme modules.

6.  Place languages.json into the contributions folder of your custom theme.

    For example, dav:fs-type1/themes/custom_theme/contributions.

7.  Add custom_languages as the first module in the section that includes Dojo for each profile in your custom theme.

    For example, in the Portal theme, the custom_languages module would be added to the **moduleIDs** section of the Lightweight profile and the **deferredModuleIDs** section of the Deferred profile.

    For more information, see *Adding or removing a ready-to-use module to a theme*.

8.  Restart your portal to pick up the new language and module contribution.



???+ info "Related information"  
    -   [Defining theme modules](../../../../../../build_sites/themes_skins/the_module_framework/writing_module/themeopt_mod_register.md)
    -   [Adding or removing a module from a profile](../../../../../../build_sites/themes_skins/the_module_framework/add_remove_oob_modules/index.md)

