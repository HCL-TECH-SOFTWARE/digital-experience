# Copying the dynamic resources for your theme 

You need to make a unique copy of the dynamic resources for your theme. Make sure that Eclipse, IBM Rational Application Developer or Rational Team Concert with the Java EE developer tools add-on is installed.

1.  Switch to the Java EE perspective, and select **File** \> **New** \> **Dynamic Web Project**.

2.  In the **Project name** field, enter the name of your theme, such as CustomTheme.

3.  If it is not already selected, select **2.4** for the Dynamic Web Module version.

4.  Select **Add project to an EAR** and click **Next to the Web Module page**.

5.  On the Web Module page, change **Context Root** to customTheme, or whatever you want your context root to be, and click **Finish**.

6.  Expand your new CustomTheme project and find and expand the WebContent folder.

7.  Find the [PortalServer\_root](../reference/wpsdirstr.md#wp_root)\\theme\\wp.theme.themes\\default85\\installedApps\\DefaultTheme85.ear\\DefaultTheme85.war\\skins folder on file system and drag it onto the WebContent folder. This step copies and imports the skins folder into your dynamic web project.

8.  Find the [PortalServer\_root](../reference/wpsdirstr.md#wp_root)\\theme\\wp.theme.themes\\default85\\installedApps\\DefaultTheme85.ear\\DefaultTheme85.war\\themes folder on file system and drag it onto the WebContent folder. This step copies and imports the themes folder into your dynamic web project.

9.  In your CustomTheme project, find the WEB-INF folder inside the WebContent folder.

10. Find the [PortalServer\_root](../reference/wpsdirstr.md#wp_root)\\theme\\wp.theme.themes\\default85\\installedApps\\DefaultTheme85.ear\\DefaultTheme85.war\\WEB-INF\\decorations.xml file on file system and drag it onto the WEB-INF folder. This step copies and imports the file into your dynamic web project.

11. Find the [PortalServer\_root](../reference/wpsdirstr.md#wp_root)\\theme\\wp.theme.themes\\default85\\installedApps\\DefaultTheme85.ear\\DefaultTheme85.war\\WEB-INF\\tld folder on file system and drag it onto the WEB-INF folder. This step copies and imports the tld folder into your dynamic web project.

12. Copy the following plugin.xml file into your dynamic resources and drag it into the WEB-INF folder: [PortalServer\_root](../reference/wpsdirstr.md#wp_root)\\theme\\wp.theme.themes\\default85\\installedApps\\DefaultTheme85.ear\\DefaultTheme85.war\\WEB-INF\\plugin.xml.

13. Create a whitelist and a blacklist. For security reasons, the WAR data source does not serve content until a special context parameter is set. This context parameter defines which files from your web module HCL Portal is able to serve. You can set your whitelist and blacklist in two ways: in a context parameter in the web.xml of the web application, or in the Resource Environment Provider settings.

    -   **In a context parameter in the web.xml of the web application**

        You can define a whitelist by using a regular expression that matches the files that you want to make available. Then, in a blacklist, you can remove certain entries from the set of files that are available in the whitelist. A blacklist is helpful if you want to serve a folder but not a certain file within that folder. The expressions are case-sensitive. For example, WEB-INF is different than Web-Inf.

        The parameters are set in the web.xml file of the web module that contains the static theme content. In the following example, the context parameter is set to serve all files that are not part of the WEB-INF folder:

        ```
        <web-app>
        ...
           <context-param>
              <description>A regular expression that defines which of the resources in the war file can be
                served by the portal res datasource.</description>
              <param-name>com.ibm.portal.resource.whitelist</param-name>
              <param-value>.*</param-value>
           </context-param>
           <context-param>
              <description>A regular expression that defines which of the resources in the war file cannot be served by the portal res
                datasource.</description>
              <param-name>com.ibm.portal.resource.blacklist</param-name>
              <param-value>WEB-INF/.*</param-value>
           </context-param>
        ...    
        </web-app>    
        ```

    -   **In the Resource Environment Provider settings**

        Each web application defines three custom properties in the WP ConfigService Resource Environment Provider. All three properties are required.

        **Note:** The variable your\_key\_for\_web\_app is used during parsing to identify the three properties that belong together for one web application, so you must use a different key for each web application.

        |Name|Value|
        |----|-----|
        |`com.ibm.portal.resource.your\_key\_for\_web\_app.contextroot`|The context root under which the WAR file is deployed. You can use the variable'$\{URI\_CONTEXT\_PATH\}' to avoid a hardcoded reference to the context root because the context root can be changed. The variable '$\{URI\_CONTEXT\_PATH\}' resolves the correct context root, which by default is `'/wps'`.Example:

        -   Name: `com.ibm.portal.resource.my\_web\_app\_1.contextroot`
        -   Value: `${URI_CONTEXT_PATH}/PA_My_Web_App`
|
        |`com.ibm.portal.resource.your\_key\_for\_web\_app.whitelist`|A regular expression that defines the resources in the WAR file that can be served by the portal resource data source.Example:

        -   Name: `ibm.portal.resource.my\_web\_app\_1.whitelist`
        -   Value: `.*`
|
        |`com.ibm.portal.resource.your\_key\_for\_web\_app.blacklist`|A regular expression that defines the resources in the WAR file that cannot be served by the portal resource data source.Example:

        -   Name: `com.ibm.portal.resource.my\_web\_app\_1.blacklist`
        -   Value: `WEB-INF/.*`
|


**Parent topic:**[Creating a WebDAV-based theme copy ](../dev-theme/themeopt_themedev_manual_webdav.md)

**Related information**  


[Modify the dynamic resource references for your theme ](../dev-theme/themeopt_cust_copy_modifystatres.md)

