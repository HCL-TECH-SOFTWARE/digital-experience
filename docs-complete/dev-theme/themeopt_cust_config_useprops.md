# Using your configuration properties 

Create a JavaScript object for your theme on the client side. Theme metadata properties must be loaded dynamically. If you must load a property statically, use a resource environment provider custom property instead.

Configuration properties can be loaded either statically, `type="config_static"`, or dynamically, `type="config_dynamic"`. You can use one or the other or both depending on your needs. Static is intended for property values that do not commonly change after they are loaded initially, and is better for performance because the values are cached. Dynamic is intended for property values that change more frequently.

All configuration properties that your module must reference on the client side are merged together into a single convenient global config object. They are merged whether they are theme metadata properties or resource environment provider custom properties. You can then easily reference any property within the yourcoCfg.themesConfig object, such as yourcoCfg.themesConfig.yourTheme\_yourRepProperty.

The theme and the modules that are provided with HCL Portal merge their configuration properties into the ibmCfg global variable. You can run this variable in a browser console and inspect what the property names and values are. Changes to values in the WP GlobalThemeConfig REP are global to all themes. You can override certain values on the client side if you need the values to be different in only your themes that include your module. You can do so with syntax similar to the following example in one of the config\*.jsp files for your module:

```
i$.merge({<%--
  --%>ibmCfg: {<%--
  --%>themeConfig: {<%--
  --%>loadingImage: "css/images/yourloading.gif"<%--
  --%>}}});
```

If your module requires the module,wp\_portal then the portal configuration loads before the configuration for your module, ensuring that your override is merged in last.

Replace occurrences of your\* in italics with the actual names of your items.

1.  Create an extension point \(module definition\) in the plugin.xml file for your theme with subcontributions for the configuration of the module.

    ```
    <extension point="com.ibm.portal.resourceaggregator.module" id="yourprefix_yourmodule_config">
     <module id="yourprefix_yourmodule">
      <prereq id="wp_portal"/>
      <contribution type="config">
       <sub-contribution type="config_static">
        <uri value="res:{war:context-root}/yourmodule/markup/config_global.jsp" /> 
       </sub-contribution>
       <sub-contribution type="config_dynamic">
        <uri value="res:{war:context-root}/yourmodule/markup/config.jsp" /> 
       </sub-contribution>
      </contribution>
     </module> 
    </extension>
    ```

2.  Add yourmoduleID to the profile file for your theme so that your module loads.

    1.  Connect your WebDAV client to http://localhost:port/wps/mycontenthandler/dav/fs-type1/.

    2.  From the profiles folder within the folder for your theme, copy the profile\_deferred.json file to a local drive.

    3.  Rename the profile\_deferred.json file to create a custom profile.

    4.  Modify the local copy of the file and add your moduleID at the end of the list:

        ```
        ,
        "yourprefix_yourmodule"
        ```

    5.  Copy your custom profile JSON file into the profiles folder in the folder for your theme in fs-type1 on the portal server.

3.  Create the config\_global.jsp file, config.jsp file, or both in your modules web application in the \\yourmodule\\markup folder.

    The following example of config.jsp file loads dynamically. A config\_global.jsp file \(static\) would look similar, only without any theme metadata properties in it.

    ```
    <%@ page session="false" contentType="text/javascript;charset=ISO-8859-1" buffer="none" %>
    <%@ page trimDirectiveWhitespaces="true" %>
    <%@ taglib uri="http://www.ibm.com/xmlns/prod/websphere/portal/v8.5/portal-fmt" prefix="portal-fmt" %>
    i$.merge({<%--
        --%>yourcoCfg: {<%--
         --%>themesConfig: {<%--
          --%>modules_contextRoot: "<portal-fmt:out escape="json">${wp.rep["REP.YourPrefix ThemesConfig"]["modules.contextRoot"]}</portal-fmt:out>",<%--
          --%>yourTheme_contextRoot: "<portal-fmt:out escape="json">${wp.rep["REP.YourPrefix ThemesConfig"]["yourTheme.contextRoot"]}</portal-fmt:out>",<%--
          --%>yourTheme_yourRepProperty: "<portal-fmt:out escape="json">${wp.rep["REP.YourPrefix ThemesConfig"]["yourTheme.yourRepProperty"]}</portal-fmt:out>",<%--
          --%>yourTheme_yourMetadataProperty: "<portal-fmt:out escape="json">${wp.themeConfig["yourTheme.yourMetadataProperty"]}</portal-fmt:out>"<%--
          --%>yourModule_yourRepProperty: "<portal-fmt:out escape="json">${wp.rep["REP.YourPrefix ThemesConfig"]["yourModule.yourRepProperty"]}</portal-fmt:out>",<%--
    --%>}}});
    ```

    If the yourcoCfg global variable and themesConfig child property do not exist, the merge automatically creates them. You can also mix in your properties with any other properties that might already be present if the yourcoCfg object exists.

4.  If you have JSP reloading turned on in your web applications, then restart the web application for your modules and the web application for your theme. Otherwise, restart the portal server.

5.  Restart your portal server.


**Parent topic:**[Configuring the portal theme and modules ](../dev-theme/themeopt_cust_config.md)

