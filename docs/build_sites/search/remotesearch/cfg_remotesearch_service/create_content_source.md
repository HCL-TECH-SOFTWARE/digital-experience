# Creating a new content source

Before you can begin using remote search service, you must create three new content sources, one for the Web Content Manager, one for your portal site, and one for JCR search.

Create the new search collection for the remote search service. For detailed instructions about how to create new search collections, see *Creating new search collections*.

**Important:** The steps that you used to create the JCR search collection in *Setting up a JCR search collection* also included instructions about how to create the new JCR content source. If you created the JCR content source immediately after creating the JCR search collection, you do not need to create the JCR content source again.

1.  If you did not manually create a new JCR content source when you created the JCR search collection, create the JCR content source now. For detailed instructions about how to create JCR content sources, see *Setting up a JCR search collection*.

2.  Manually create the new content source for your Portal site by completing the following steps:

    1.  Click the name of the search collection that you created in *Creating new search collections*.

    2.  Click **New Content Source**.

    3.  In the **Content source type** field, specify **Portal site**. The portal URL is completed by default.

        **Note:** If you are using a webserver, change the portal URL to specify the webserver host name and port.

    4.  Click the **Security** tab.

    5.  Specify your portal user name and password.

    6.  Specify the host name.

    7.  In the Define security realm pane, click **Create**.

        The security realm displays in the Security realms pane.

    8.  In the Manage Search pane, click **Create**.

        If the content source was created successfully, the following message displays: EJPJB0025I: Content source source\_name in collection collection\_name is OK.

    9.  Start the crawler to verify that the content source is working.

3.  Manually create the new content source for your Web Content Manager site by completing the following steps:

    1.  Click the name of the search collection that you created in *Creating new search collections*.

    2.  Click **New Content Source**.

    3.  In the **Content source type** field, specify **WCM site**.

    4.  In the **Collect documents linked from this URL** field, specify the following URL: http://server\_name:port\_number/wps/seedlist/myserver?SeedlistId=&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments

        **Note:** If you are using a webserver, in the **Collect documents linked from this URL** field, specify the webserver host name and port.

    5.  Click the **Security** tab.

    6.  Specify your portal user name and password.

    7.  Specify the host name.

    8.  In the Define security realm pane, click **Create**.

        The security realm displays in the Security realms pane.

    9.  In the Manage Search pane, click **Create**.

        If the content source was created successfully, the following message displays: EJPJB0025I: Content source source\_name in collection collection\_name is OK.

    10. Start the crawler to verify that the content source is working.



**Previous topic:**[Creating new search collections](../admin-system/create_search_coll.md)

