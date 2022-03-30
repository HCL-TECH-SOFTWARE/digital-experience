# Enabling anonymous users to search public pages of your portal 

You can enable anonymous users \(sometimes also called unauthenticated users\) to search public pages of your portal by using the portal Search Center portlet. Search by anonymous users works only on public pages of your portal, as the users are not logged in to your portal.

To enable anonymous users to search public pages of your portal, you need to complete the following tasks:

-   Make the Search Center portlet available on a public page of your portal so that users can access it without having to log in to the portal.
-   Enable public sessions for your portal. The reason is that the Search Center portlet needs a valid session for its run time, and by default, sessions are not enabled on anonymous pages in the portal. By default, sessions are only created when a user authenticates and logs in to the portal.
-   Have or create your own custom search scope. You can edit your own custom scopes, but you cannot modify the default search scopes to give anonymous users access.

Proceed as follows:

1.  Place the Search Center portlet on a public page.

    For more information, see the following subtopic.

2.  Give the Anonymous Portal User group access permission to the Search portlet that you make available to anonymous users, and to the page on which that portlet is. To give access permission, you can use the User and Group Permissions portlet, the Resource Permissions portlet, or the Manage Portlets and Manage Pages portlets.

3.  Give the Anonymous Portal User group access to the Search collections. To complete this step, use the User and Group Permissions portlet or the Resource Permissions portlet. From the list of Resource Types, select PSE Sources, then select the required search collections that you make available to public users, and assign the Anonymous Portal User access to those search collections.

4.  Create a custom search scope, if you did not create one before already.

    For more information, see *Managing and administering Portal Search*, section *Creating a new search scope*.

5.  Give the Anonymous Portal User group access to the Search scope:

    1.  To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**.

    2.  Click **Search Scopes**

    3.  Locate the scope that you want the anonymous user to use and click **Edit Search Scope**.

    4.  Click **Yes** to enable the option **Visible to Anonymous Users**.

6.  Enable public sessions by setting the parameter public.session to true in the portal Navigator Service in the WebSphere® Integrated Solutions Console.

    For details about the portal Navigator Service and about how to set portal service configuration parameters see the respective topics.

7.  Restart both WebSphere Application Server and HCL Portal for your changes to take effect.


-   **[Placing the Search Center on a public portal page ](../admin-system/srt_sc_public.md)**  
Depending on your environment, you might want to place the Search Center portlet on a public page of your HCL Digital Experience and have the search box in the portal theme take users who do a search to that public Search Center.

**Parent topic:**[Search ](../wcm/wcm_dev_search.md)

**Previous topic:**[Configuring your portal site for search by internet search engines ](../admin-system/srccfgextsrch.md)

**Next topic:**[Configuring your custom portal themes to include the search box ](../admin-system/srcconfthmsforsrch.md)

