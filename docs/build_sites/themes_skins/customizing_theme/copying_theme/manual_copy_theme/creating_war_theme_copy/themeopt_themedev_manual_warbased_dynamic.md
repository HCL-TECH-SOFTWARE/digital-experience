# Copying the dynamic theme resources

Making a copy of the dynamic theme resources for your theme is the second step toward creating a WAR-based theme copy.

Only the files that are specified in this procedure need to be copied. Your theme might not work if other files are copied.

1.  Open the workspace that contains your CustomThemeStatic project and select **File** \> **New** \> **Dynamic Web Project**.

2.  In the **Project** field, enter the name of your theme, such as CustomThemeDynamic.

3.  If it is not already selected, select **2.4** for the Dynamic Web Module version.

4.  Select **Add project to an EAR** and add to CustomThemeEAR.

5.  Click **Next to the Web Module page**.

6.  On the Web Module page, change **Context Root** to customTheme, or whatever you want your context root to be, and click **Finish**.

7.  Expand your new CustomThemeDynamic project and find and expand the WebContent folder.

8.  Find the [PortalServer\_root](../../../../../../guide_me/wpsdirstr.md)\\theme\\wp.theme.themes\\default85\\installed Apps\\DefaultTheme85.ear\\DefaultTheme85.war\\skins folder on file system and drag it onto the WebContent folder. This step copies and imports the skins folder into your dynamic web project.

9.  Find the [PortalServer\_root](../../../../../../guide_me/wpsdirstr.md)\\theme\\wp.theme.themes\\default85\\installed Apps\\DefaultTheme85.ear\\DefaultTheme85.war\\themes folder on file system and drag it onto the WebContent folder. This step copies and imports the themes folder into your dynamic web project.

10. In your CustomTheme project, find the WEB-INF folder inside the WebContent folder.

11. Find the [PortalServer\_root](../../../../../../guide_me/wpsdirstr.md)\\theme\\wp.theme.themes\\default85\\installed Apps\\DefaultTheme85.ear\\DefaultTheme85.war\\WEBINF\\ decorations.xml file on file system and drag it onto the WEB-INF folder. This step copies and imports the file into your dynamic web project.

12. Find the [PortalServer\_root](../../../../../../guide_me/wpsdirstr.md)\\theme\\wp.theme.themes\\default85\\installed Apps\\DefaultTheme85.ear\\DefaultTheme85.war\\WEB-INF\\tld folder on file system and drag it onto the WEB-INF folder. This step copies and imports the tld folder into your dynamic web project.

13. Find the [PortalServer\_root](../../../../../../guide_me/wpsdirstr.md)\\theme\\wp.theme.themes\\default85\\installed Apps\\DefaultTheme85.ear\\DefaultTheme85.war\\WEBINF\\ plugin.xml file on the file system and drag it onto the WEB-INF folder. This step copies and imports the file into your dynamic web project.

14. Modify web.xml from the WebContent\\WEB-INF directory with the following code:

    ```
    <context-param>
    <description>A regular expression that defines which of the resources in the war file can be served by the portal res datasource.</description>
    <param-name>com.ibm.portal.resource.whitelist</param-name>
    <param-value>.*</param-value>
    </context-param>
    <context-param>
    <description>A regular expression that defines which of the resources in the war file cannot be served by the portal res datasource.</description>
    <param-name>com.ibm.portal.resource.blacklist</param-name>
    <param-value>WEB-INF/.*</param-value>
    </context-param>
    ```



