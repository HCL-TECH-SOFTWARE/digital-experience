# Dynamically extending an existing menu item from a module

You can use a module to add menu items to a menu where the menu item displays only on certain pages.

There are three changes that are needed to add menu items with a module.

1.  Define a module that includes the menu item you want to add.
2.  Include the module in a profile.
3.  Apply the profile to a page hierarchy.

1.  Define the module as a JSON file or as part of a plugin.xml file.

    If you define it as a JSON file, put this file in WebDAV at fs-type1/themes/YourTheme/contributions/. If you define it as a plugin.xml system module, put it in the application .war file in the WEB-INF directory.

    -   Define the override module as a JSON file.

        ```
        {
        "modules":[{
        		"id":"menuModule",
        		"contributions":[{
        			"type":"menu",
        			"sub-contributions":[{
        				"type":"json",
        				"ref-id":"pageAction",
        				"uris":[{
        					"value":"/menuTest/menuItem.json"
        				}]
        			}]
        		}]
        	}]
        }
        ```

        -   **`ref-id`**

            The reference ID of the menu you want to use - this example uses the Action menu for the page.

        -   **`value`**

            A pointer to the file that includes your menu item specifications - this example points to a path relative to your theme location.

    -   Define the override module in a plugin.xml file.

        ```
        <extension point="com.ibm.portal.resourceaggregator.module" id="staticMenuModule" >
            <module id="staticMenuModule">
                <contribution type="config">
          			    <sub-contribution type="config_dynamic" ref-id="pageAction">
          			    <uri value="res://wps/defaultTheme80/themes/html/menuTest/menuAction.jsp" /> 
          			    </sub-contribution>
                </contribution>
        
                <contribution type="menu">
          			    <sub-contribution type="json" ref-id="pageAction">
          			    <uri value="res://wps/defaultTheme80/themes/html/menuTest/menuItem.json" /> 
          			    </sub-contribution>
                </contribution>
            </module>	
        </extension>
        ```

        -   **`extension id`**

            Any meaningful ID.

        -   **`module id`**

            Any meaningful ID.

        -   **`sub-contribution ref-id`**

            The reference ID of the menu you want to use, this example uses the **Action** menu for the page.

        -   **`uri value`**

            A pointer to the files is required to create your menu or other content. In the previous example, there are two contribution types listed. For the `menu` contribution and its `json` subcontribution, this example shows that the uri points to a JSON format file within the theme that defines one or more menu items in the JSON menu definition file syntax.

2.  Create the menuitem.json that you defined in step 1. For more information, see *Server-side framework*.

3.  Include the override module in a profile.

    For example, in profile\_menuModule.json:

    ```
    {
    	"moduleIDs": [
    		"menuModule",
    		...
    ```

    The profile\_menuModule.json file must be copied to WebDAV at fs-type1/themes/YourTheme/profiles/.

4.  Open the desired menu json and add an entry for the module to the menu. Use the following example.

    ```
    {
    "type":"ModuleRef",
    "id":"menuModule"
    } 
    ```


**Parent topic:**[Writing modules](../dev-theme/themeopt_mod_plugin_xml.md)

**Related information**  


[Server-side framework](../dev-theme/themeopt_cust_serverframe.md)

