# Build applications with the Script Application

After the cumulative fix that includes the Script Application is installed, you can create and edit applications with the Script Application Editor, import items to existing applications, or upload content from the command line.

-   **[Script Application Editor](../script-portlet/script_portlet_editor.md)**  
You can take any existing web page, pick out individual parts, and enter them into corresponding tabs in the Script Application Editor. The Preview window displays the results as you edit.
-   **[Script Application Improvements](../script-portlet/script_app_improvements.md)**  
In CF201, some improvements are made to the Script Applications. You can now upload minified content, use a new configuration task to set the required WCM properties for script applications such as React or Angular, and make use of the new **Deferred with React** theme profile.
-   **[Add tokens to generate unique namespace IDs when applications are pushed or imported to a Script Application](../script-portlet/cmd_line_push_cmd_patt_rep.md)**  
Associating JavaScript variable names and HTML IDs with a unique portlet namespace prevents applications from colliding with each other and uniquely identifies HTML element ID values and JavaScript variables. To use a unique portlet namespace, you can prefix or suffix any imported JavaScript, HTML, CSS, or JSON variable or ID with the token \_\_SPNS\_\_. The Script Application replaces the \_\_SPNS\_\_ token with the Web Content Manager ScriptPortletNamespace plug-in markup when a script application is pushed or imported from the developer client to the server. The Web Content Manager ScriptPortletNamespace plug-in markup generates the unique namespace for the application when it is rendered.
-   **[Import applications that include links to JavaScript frameworks](../script-portlet/theme_script_ref.md)**  
To use a JavaScript framework or library from an application, use portal theme modules to load the shared JavaScript. Do not load them from the application.
-   **[Script Application Editor actions menu overview](../script-portlet/actions_menu.md)**  
You can insert tags, preferences, and parameters and export a Script Application with the Actions menu in the Script Application Editor.
-   **[Combine local JavaScript files when you import applications](../script-portlet/combine_js_files.md)**  
You can import Script Applications with multiple JavaScript files.
-   **[Adding an existing Script Application from the toolbar ](../script-portlet/drop_app_toolbar.md)**  
You can add a Script Application to a page directly from the toolbar when a Script Application is created and added to a site area.
-   **[Updating an existing Script Application instance with the command line push application](../script-portlet/cmd_line_push_cfg.md)**  
You can use the Script Application push function to update an existing application on a portal page or to update an application in an HCL Web Content Manager site area.
-   **[Generating a URL Map from local application paths to runtime Web Content Manager URLs ](../script-portlet/gen_url_map.md)**  
You can generate a JavaScript based URL map from local application file system paths to runtime Web Content Manager Library URL paths to application artifacts, when necessary. This feature is advanced and is disabled by default.
-   **[JavaScript API for spHelper ](../script-portlet/cmd_line_api.md)**  
This API reference can help you customize an instance of your Script Application further.

**Parent topic:**[The Script Application ](../script-portlet/script_portlet.md)

