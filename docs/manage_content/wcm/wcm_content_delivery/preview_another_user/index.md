# Previewing as another user

You can preview changes to your website without logging out and logging on again as another user. This preview capability is used to quickly verify that users with different access levels see only content that they are authorized to see. You can preview changes as a specific user or as an unauthenticated user.

To use the preview option, proceed as follows:

1.  Change to Edit mode.
2.  Open the Preview menu in the action bar.
3.  Click either **As User** or **As Unauthenticated User**. The page is updated according to the user that you impersonate.
4.  To stop previewing, click **Stop Previewing**.

You can modify the preview function to tailor preview behavior in the following scenario:

-   User1 creates a project and a page within the project. The new page contains a portlet.
-   User1 then attempts to preview the page as User2. In this case, User2 has the permissions to view the page but does not have the permissions to view the portlet that is on the page.
-   User1 receives the following message: You are not authorized to use this portlet. This message displays to make it clear that a portlet is rendered here, if the user has the required permissions.

You can suppress the message in this scenario.

For more information about the access permissions that are required for previewing as another user, see *Access control for managed pages.*

1.  Log on to the WebSphere® Integrated Solutions Console as an administrator.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Click **WP ConfigService**, and then click **Custom properties**.

4.  Locate and click the property `portlets.unauthorized.visible.project`.

    If the property is not listed yet, create it new.

5.  Set the value of the property to false to suppress the message. The default value is true.


-   **[Disabling the preview option](../wcm/wcm_preview_disable.md)**  
If you do not want to offer the preview option in your authoring system, you can disable it globally or for individual virtual portals. If you disable the preview option, the portal no longer shows the preview context menu in the action bar of the site toolbar.
-   **[Disabling the More menu](../wcm/wcm_moremenu_disable.md)**  
If you do not want to offer the More menu and the information mode toggle in your authoring system, you can disable it globally or for individual virtual portals. If you disable the More menu, the portal no longer shows the preview context menu in the action bar of the site toolbar.


