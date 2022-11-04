# Removing search collections

If you plan to use search in a cluster, you must configure a remote search server. If you created any search collections, you must re-create them on the remote search server. If your search collection has data, export the collection before you delete it. Then, import it to the remote server.

1.  Prevent the creation of search collections. To do so, complete the substeps listed here.

    !!! note
        If you have CF07 or a later fix pack installed, start the portal configuration engine task `suppress-automatic-search-service-creation` to prevent the creation of search collections. You do not need to perform the substeps listed here. After running the configuration task, continue with the next main step that deletes all search collections from the primary node.

    1.  Log in to the WebSphere® Integrated Solutions Console.

        **Cluster note:** If this web content server is part of a cluster, log on to the Deployment Manager WebSphere Integrated Solutions Console.

    2.  Go to **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **JCR ConfigService PortalContent** \> **Custom properties**.

    3.  Set the jcr.textsearch.enabled parameter to false.

    4.  Go to **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **WP ConfigService** \> **Custom properties**.

    5.  Set the `search.service.suppress_automatic_creation` property to `true`. If the property does not exist, create it.

    6.  Click **Apply** and save your changes to the master configuration.

    7.  Restart your server.

2.  Delete all existing search collections from the primary node. To do so, complete the following substeps:After you submit all customized jobs for this task, complete the following steps to delete all existing search collections from the primary node:

    1.  Log on to HCL Portal.

    2.  To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**.and then click **Search Collections**.

    3.  Click the **Delete Collection** icon for each search collection and then click **OK** until they are all deleted.

    4.  Restart the WebSphere\_Portal server and then go back to the **Search Collections** page to verify that all search collections are deleted.



