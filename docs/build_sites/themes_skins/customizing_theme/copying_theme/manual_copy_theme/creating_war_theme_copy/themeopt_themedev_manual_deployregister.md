# Deploying and registering your theme

After you copy your static and dynamic theme resources and modify your dynamic resource references, you are ready to deploy and register your theme on the server.

1.  Navigate to the CustomThemeEAR project that you created when you copied your static theme and skin resources. Right-click on the project and select **Export** \> **EAR file**.

2.  Click **Browse**, then select the folder to which you want to export your EAR file.

3.  Click **Save**, then click **Finish**.

4.  Log on to the WebSphere® Integrated Solutions Console and click **Applications** \> **Application Types** \> **WebSphere Enterprise Applications**.

5.  Click **Install**.

6.  Click **Browse**. Then, find and select the EAR file that you exported and click **Next**.

7.  Select **Fast Path**. Then, expand **Choose**, select **Generate Default Bindings**, and click **Next**.

8.  Select your installation option values and click **Next**.

9.  For **Map Modules to Servers**, select the custom theme module. Then, select `server=HCL Portal and HCL Web Content Manager` and click **Apply** \> **Next**.

10. Click **Finish**.

11. When the EAR file is installed, click **Save directly to the master configuration**.

12. Check your CustomThemeEAR file in the table of enterprise applications and click **Start**.

13. In the PortalServer\_root\\bin directory, create the file input.xml with the following contents:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <request xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd"
    type="export">
       <portal action="locate">
          <skin action="export" objectid="*" />
          <theme action="export" objectid="*" />
       </portal>
    </request>
    ```

14. From the command line, change to the PortalServer\_root\\bin directory and run the following XMLAccess command to export all skin and theme definitions to the file registerTheme.xml:

    ```
    xmlaccess -user <admin userid> -password <admin password> -url
    <hostname>:10039/wps/config -in input.xml -out registerTheme.xml
    ```

15. Find the `Portal 8.5 - Hidden` skin in the file registerTheme.xml and delete all other skins.

16. Make the following modifications to the Portal 8.5 - Hidden skin:

    1.  Delete the `objectid`.

    2.  Set the correct `context-root`, `resourceroot`, `uniquename`, `title`, and `com.ibm.portal.skin.template.ref` parameter for your skin.

    3.  Set `default` to `false` in the following code block:

        ```
        <skin action="update" active="true" context-root="/customTheme"
        default="false" domain="rel" resourceroot="customSkin"
        type="default" uniquename="customSkin">
        ...
        <localedata locale="en">
        <title>Custom Skin</title>
        </localedata>
        ...
        <parameter name="com.ibm.portal.skin.template.ref" type="string"
        update="set"><!
        [CDATA[war:customThemeStatic/themes/customTheme/skins/customSkin/]
        ]></parameter>
        ```

17. Find the `Portal 8.5` theme in the registerTheme.xml file and delete all other themes.

18. Make the following modifications to the `Portal 8.5` theme:

    1.  Delete the `objectid`.

    2.  Set the correct `context-root`, `uniquename`, `title`, `com.ibm.portal.theme.template.ref`, and `com.ibm.portal.layout.template.ref` parameters for your theme.

    3.  In the following code block, set `default` to `false`, and `defaultskinref` and the first occurrence of `allowed-skin` to the unique name of your custom skin. Delete all other `allowed-skin` entries.

        ```
        <theme action="update" active="true" context-root="/customTheme"
        default="false" defaultskinref="customSkin" domain="rel"
        resourceroot="dynamicSpots" uniquename="customTheme">
        ...
        <localedata locale="en"> <title>Custom
        Theme</title> <description>My custom theme copied
        from the Portal 8.5 theme.</description>
        </localedata>
        ...
        <allowed-skin skin="customSkin" update="set"/>
        ...
        <parameter name="com.ibm.portal.theme.template.ref" type="string"
        update="set"><!
        [CDATA[war:customThemeStatic/themes/customTheme/]]></parameter>
        ...
        <parameter name="com.ibm.portal.layout.template.href"
        type="string" update="set"><!
        [CDATA[war:customThemeStatic/themes/customTheme/layouttemplates/
        TopColumn2ColumnUnequal/]]></parameter>
        ```

19. Save all of your changes in the registerTheme.xml file. Then, from the command line, run the following XMLAccess command to register your theme and skin in the PortalServer\_root\\bin directory:

    ```
    xmlaccess -user <admin userid> -password <admin password> -url
    <hostname>:10039/wps/config -in registerTheme.xml -out output.xml
    ```

20. From the command line, run the following XMLAccess command to export all of the theme and skin definitions again to the file output2.xml:

    ```
    xmlaccess -user admin userid -password admin password -url
    hostname:10039/wps/config -in input.xml -out output2.xml
    ```

21. Edit the output2.xml file to verify that your theme and skin updates are correct. Then, delete the input.xml, output.xml, and output2.xml files.

22. Save the file registerTheme.xml. You can use this XML file to register your custom theme and skin in the future.


Your theme is now available for use on your portal. To verify, create a page, edit the page properties, and assign your theme to the page.

**Note:** Your custom theme includes ready-to-use modules that are shared across themes and intentionally remain uncopied in the Theme Modules web application. The Theme Modules web application and the web application for your theme must remain started for your theme to operate.


