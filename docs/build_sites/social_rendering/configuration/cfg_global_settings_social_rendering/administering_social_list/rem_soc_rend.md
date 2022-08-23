# Removing the previous version of social rendering

You can remove the Social Lists 1.0 library and its configuration to remove it from the toolbar after you deploy the Social Lists 1.1 Library. Once you have removed the library, remove the drag and drop configuration with a separate command.

The difference between the deprecated Social Lists 1.0 library and the Social lists 1.1 library is the use of OneUI styles. The latest versions of the social rendering uses the Social Lists 1.1 library and does not depend on the OneUI styles.

1.  In the Web Content Manager Authoring portlet, click **Social Lists 1.0** \> **Content** \> **Social Content site area**.

2.  Click **Show hidden fields**.

3.  Select the **Properties** tab.

4.  In the Keywords text field, remove the text ibm.portal.toolbar.NewContent.

5.  Click **Save**.

6.  Remove references in your applications to Social Lists 1.0 library and its related configuration artifacts.

7.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

8.  Run the following command.

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh remove-social-rendering-library -DPortalAdminPwd=password -DWasPassword=password
    -   IBM® i: ConfigEngine.sh remove-social-rendering-library -DPortalAdminPwd=password -DWasPassword=password
    -   Windows™: ConfigEngine.bat remove-social-rendering-library -DPortalAdminPwd=password -DWasPassword=password
    -   z/OS®: ./ConfigEngine.sh remove-social-rendering-library -DPortalAdminPwd=password -DWasPassword=password
9.  Examine the log output with the console, or the ConfigTrace.log file. If the remove-social-rendering-library task completed successfully, continue to the next step and remove the configuration that removes the drag and drop configurations for social rendering view definitions in the toolbar..

10. Run the following command.

    -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh remove-social-rendering-config -DPortalAdminPwd=password -DWasPassword=password
    -   IBM i: ConfigEngine.sh remove-social-rendering-config -DPortalAdminPwd=password -DWasPassword=password
    -   Windows: ConfigEngine.bat remove-social-rendering-config -DPortalAdminPwd=password -DWasPassword=password
    -   z/OS: ./ConfigEngine.sh remove-social-rendering-config -DPortalAdminPwd=password -DWasPassword=password


**Related information**  


[Static resources](../dev-theme/themeopt_defaultparts_static.md)

