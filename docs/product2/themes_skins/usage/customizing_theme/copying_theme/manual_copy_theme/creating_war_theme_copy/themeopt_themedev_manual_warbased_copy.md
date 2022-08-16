# Copying the static theme and skin resources

Making a unique copy of your static theme resources is the first step toward creating a WAR-based theme copy.

Make sure that Eclipse, IBM® Rational® Application Developer, or Rational Team Concert with the Java EE developer tools add-on is installed.

1.  Connect your WebDAV client to http://host:port/wps/mycontenthandler/dav/themelist/.

2.  Create the folder themes on your local disk. Then, copy the folder ibm.portal.85Theme into the new themes folder.

3.  Rename the folder to the name of your theme, such as customTheme.

4.  Rename the Hidden folder in themes/customTheme/skins to customSkin. Delete all other skins.

5.  Switch to the Java EE perspective, and select **File** \> **New** \> **Dynamic Web Project**.

6.  In the Project field, enter the name of your theme, such as CustomThemeStatic.

7.  If it is not already selected, select **2.4** for the Dynamic Web Module version.

8.  Select **Add project to an EAR**, enter the name customThemeEAR, and click **Next to the Web Module page**.

9.  On the Web Module page, change **Context Root** to customThemeStatic, or whatever you want your context root to be, and click **Finish**.

10. Expand your new CustomThemeStatic project. Then, find and expand the WebContent folder.

11. Copy the themes folder that contains customTheme that you created in Step 2 to the WebContent folder.

12. Modify `web.xml` from the WebContent\\WEB-INF directory with the following code:

    ```
    <display-name>CustomThemeStatic</display-name>
    <context-param>
        <description>A regular expression that defines which of the resources in the war file can be served by the portal war datasource.</description>     
        <param-name>com.ibm.portal.whitelist</param-name>
        <param-value>.*</param-value>
    </context-param>
    <context-param>
        <description>A regular expression that defines which of the resources in the war file cannot be served by the portal war datasource.</description>
        <param-name>com.ibm.portal.blacklist</param-name>
        <param-value>WEB-INF/.*</param-value>
    </context-param>
    </web-app>
    ```


**Parent topic:**[Creating a WAR-based theme copy](../dev-theme/themeopt_themedev_manual_warbased.md)

