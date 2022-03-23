# Configuring JCR search in a cluster 

To enable search in a cluster for content that is stored in the JCR database, you must configure each server in the cluster to access a directory. JCR-based content includes content that is created with Web Content Manager or Personalization.

Set up remote search service on the primary node of the cluster. For more information about setting up remote search service, see *Configuring a remote search service* in the related links.

1.  Log in to the WebSphere® Integrated Solutions Console of the deployment manager.

2.  Select **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  In the Resource environment providers page, make the appropriate selection to update the custom properties for all of the servers in the cluster. Choose one of the following two options:

    -   Select the appropriate cluster from the Scopes list.
    -   Clear the **Show Scope** check box and select **Browse Clusters** to specify the portal cluster.
4.  Select **JCR ConfigService PortalContent** \> **Custom properties**.

5.  Change the value of the jcr.textsearch.indexdirectory property to point to a directory on the remote search server.

    For example, jcr.textsearch.indexdirectory=C:/JCR.

6.  Change the jcr.textsearch.PSE.type property to `EJB`.

7.  Change the jcr.textsearch.EJB.IIOP.URL property to the URL of the naming service that is used to access the WebScanner EJB.

    For example, iiop://localhost:2811.

8.  Change the jcr.textsearch.EJB.EJBName property to the name of the WebScanner EJB.

    For example, ejb/com/ibm/hrl/portlets/WsPse/WebScannerLiteEJBHome.

9.  Change thejcr.textsearch.enabled value to true.

10. Save your changes.

11. Restart your servers.

12. In a cluster, you must drop the JCRCollections in the default search service and then re-create them in a remote search service, otherwise you receive display errors in your search. Complete the following steps to delete the JCRCollections from the Manage Search portlet:

    1.  Log on to HCL Portal as an administrator.

    2.  To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**.

    3.  Click **Search Collections**.

    4.  Click the **Delete Collection** icon for the JCRCollection1 search collection.

    5.  Click **OK**.

    6.  Restart the WebSphere Portal Server.

    7.  Go to the Manage Search portlet and confirm that the JCRCollection1 search collection was deleted.

    8.  Manually create a JCR search collection called JCRCollection1. For more information about creating the JCR search collection, see *Setting up a JCR search collection* in the related links.


**Parent topic:**[Configuring search in a cluster ](../config/config_search_clus.md)

