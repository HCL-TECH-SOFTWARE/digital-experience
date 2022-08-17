# Installing a portlet

Installing a portlet makes it available to portal users. Adding a portlet to a page makes the portlet accessible to users with the appropriate rights.

Before you install a portlet, you must be aware of the following requirements:

-   An administrator must have the Manager role on the portal to install portlets. Therefore, you must log in with a user ID with the Manager role access rights.
-   Windows limits the maximum path length to 260 characters, the name of the WAR file must be 25 characters or less. Installing a WAR file with a name that is more than 25 characters results in an error.
-   You cannot install a portlet more than once. If you want two instances of a portlet application or portlet, use the copy command to create a second instance.

Each WAR file includes descriptive information about the portlet, which is placed in a database that can be queried by other portal components. During installation, Application Server unpacks the WAR file and places the portlet classes and resources in a file system.

During the installation, the portlet state is set to active, and a new rule is automatically added to Access Control that defines the user who installed the portlet as the owner, granting management access for that portlet. The user must assign the appropriate user roles to the appropriate users and groups so that they can access and use that portlet.

1.  Click the **Administration menu** icon. Then, click **Portlet Management** \> **Web Modules**.

2.  Click **Install**.

3.  Enter the location of the WAR file or click **Browse** to find the location of the file to install.

4.  Click **Next**.

5.  Verify WAR file information and click **Finish** to install the WAR file.


By default, portlet applications and portlets are set to an active state after installation. After you install a portlet, you can add the portlet to a page with the Portlet Palette. Add the installed portlet to a category in the Portlet Palette and then drag the portlet to the page. If you do not plan to frequently add this portlet to other pages, you can still add the portlet to a page without adding the portlet to a category. To add a portlet to the page without adding it a category, search for the installed portlet in the Portlet Palette and drag the portlet to the page.

After the installation is complete, a message appears at the start of the page that indicates a successful installation. If there are any problems during the process, an error message appears in the Manage Web Modules page. Click the **View Details** link to examine the error log.

**Parent topic:**[Managing portlets, portlet applications, and iWidgets](../admin-system/adpltadmwork.md)

**Parent topic:**[Portal administration](../practitioner_studio/administration.md)

**Related information**  


[Administering user impersonation](../admin-system/impers_user.md)

