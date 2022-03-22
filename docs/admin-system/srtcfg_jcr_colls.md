# Setting up a JCR search collection

A JCR search collection is a special purpose search collection that is used by HCL Portal applications. It is not designed to be used alongside user-defined search collections. A JCR search collection requires a special setup. This setup includes the creation of a new content source for the search collection. Under normal circumstances, you do not need to re-create the JCR search collection. However, in rare cases you might need to re-create it, for example if you deleted the default JCR search collection.

The portal installation has the JCR search collection that is created by default. It is named JCRCollection1. If this collection is removed or does not exist for other reasons, you can manually re-create the JCR search collection. The portal also re-creates the JCR search collection if you edit Web Content Manager content. Web Content Manager Authoring and its search capability are required to have the JCR search collection available, paired with the respective content source. If the JCR search collection gets deleted, a search is not possible by using the Authoring portlet. The JCR search collection can be used only by a search portlet that knows what to do with the search result in which the returned information is useless in a more generic context of search. This search collection is also flagged so that it does not participate in search by using the All Sources search scope. An administrator cannot manually add it. The JCR search collection is a special purpose search collection that the JCR requires to allow specialized application to do low-level searches in the repository. The JCR search collection is required to be available only once.

**Notes:**

-   **For Web Content Manager:**

    If you use Web Content Manager, the `JCRCollection1` collection is created the first time that you create a web content item, if it does not exist. In this case, it might not be necessary to create the collection manually, although it is fine to create it manually first, if required. It is used by the search feature within the Web Content Manager authoring portlet. If you delete this search collection, you might not be able to search for items within the authoring portlet.

-   **For virtual portals:**

    When you create a virtual portal, the creation of the JCR search collection depends on whether you create the virtual portal with or without content:

    -   If you create the virtual portal with content, the portal creates the JCR collection for the virtual portal by default.
    -   If you create only the virtual portal and add no content to it, the portal creates no JCR collection with it. It gets created only when content is added to the virtual portal.
    You can view the URL of the JCR search collection in the search administration portlet Manage Search of the virtual portal. The URL looks as follows: `http://host_name:port_number/wps/seedlist/myserver?Action=GetDocuments&Format=ATOM&Locale=en_US&Range=100&Source=com.ibm.lotus.search.plugins.seedlist.retriever.jcr.JCRRetrieverFactory&Start=0&SeedlistId=wsid@ootb_crawlerwsid`Where wsid is the actual workspace ID of the virtual portal. The workspace ID is the identifier of the workspace in which the content item is created, stored, and maintained. For example, if the workspace ID of the virtual portal is 10, then the URL looks as follows:`http://host_name:port_number/wps/seedlist/myserver?Action=GetDocuments&Format=ATOM&Locale=en_US&Range=100&Source=com.ibm.lotus.search.plugins.seedlist.retriever.jcr.JCRRetrieverFactory&Start=0&SeedlistId=10@ootb_crawler10` If the JCR search collection was deleted, or if you added content to an originally empty virtual portal and the JCR search collection was not automatically created, complete the following steps:

    -   If you are using a virtual portal, go to the Security tab of the content source to verify that the workspace ID of the virtual portal is correct.
    -   If the JCR search collection was deleted, run the ConfigEngine task `create-textsearch-collections` to re-create the JCR search collection.
    If neither of the preceding options succeed in creating the JCR search collection, manually set up the JCR search collection.


To set up a JCR search collection manually, proceed as follows:

1.  To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**.

2.  Click **Search collections.**

3.  To create a new search collection, click **New collection**.

4.  Specify the following values for the parameters:

    -   **Search Service**

        Select the required search service the JCR collection uses. If you have a stand-alone environment, select **Default Portal Service**. If you have a clustered environment, select **Remote Search Service**.

    -   **Location of collection**

        The directory location for the collection where you intend the search collection to be created. This parameter is to be specified as index directory location/collection name. For example, if the index directory is c:/JCR and the collection name is JCRCollection1, then the location of the collection must be specified as c:/JCR/JCRCollection1.

        **Note:** Verify that the jcr.textsearch.indexdirectory resource value is updated with c:/JCR. To view this resource and corresponding value, complete the following steps:

        1.  Go to **Resources** \> **Resource Environment** \> **Resource Environment Providers** and select **JCR ConfigService PortalContent**.
        2.  In the Additional Properties section of the Configuration window, select **Custom properties**.
        3.  Find jcr.textsearch.indexdirectory and update the value if needed.
    -   **Name of collection.**

        The name of the collection must be JCRCollection1.

    -   **Description of collection**

        This parameter is optional. Specify JCR seedlist collection.

    -   **Specify Collection language**

        Specify the collection language. By default this parameter is set to English \(United States\).

    After you create the new collection, you can see the name of the collection you created in the list.

5.  Double-click the collection that you created.

6.  To create the content source for the new search collection, click **New Content Source**.

7.  Specify the collection parameters as follows:

    -   For the type of the content source, select **Seedlist Provider**.
    -   Provide the name for the new Content Source in the field **Content Source Name**. For example, you can specify JCRSource.
    -   Specify the value for the **URL** field **Collect documents linked from this URL:** as follows:

        ```
        http://server\_name:port\_number/wps/seedlist/myserver?Action=GetDocuments
           &Format=ATOM&Locale=en_US&Range=100
           &Source=com.ibm.lotus.search.plugins.seedlist.retriever.jcr.JCRRetrieverFactory&Start=0
           &SeedlistId=1@OOTB_CRAWLER1
        ```

        In this URL the range parameter specifies 100 documents in one page of a session and the workspace ID of the base portal is 1.

        If you are working in a virtual portal, specify the content source URL for the virtual portal as follows:

        ```
        http://server\_name:port\_number/wps/seedlist/myserver/
           **virtual\_portal\_context**?Action=GetDocuments
           &Format=ATOM&Locale=en_US&Range=100
           &Source=com.ibm.lotus.search.plugins.seedlist.retriever.jcr.JCRRetrieverFactory&Start=0
           &SeedlistId=1@OOTB_CRAWLERwsid
        ```

        Where wsid is the workspace ID of the virtual portal. To determine the workspace ID of the virtual portal, complete the following steps:

        1.  Click the **Administration menu** icon. Then, click **Portal Analysis** \> **Enable Tracing**.
        2.  In the **Append these trace settings:** field, add `com.ibm.icm.ts.*=finest` to enable the JCR TextSearch trace.
        3.  Save all Web Content Manager documents in the virtual portal.
        4.  In trace.log, you can find trace information similar to the following:

            ```
            [6/5/13 18:51:04:337 IDT] 000001c3 BaseDBImpl 3 insertSeedlistEvents: 
             Inserted event: Event: 
            action='Update_Node(3)', timestamp='2013-06-05 18:51:04.337', document id=,<workspace: 3, itemid:AB001001N13F05B8320005B295>', parentID:<workspace: 3, itemid: >', wsid: 3 
            ```

8.  Go to the **Security** tab.

9.  Enter the user ID and password of the HCL Portal administrator.

10. Click **Create** to create the new content source.

    If the Content Source was created successfully, the following message is displayed on the page:

    ```
    EJPJB0025I: Content source source\_name in collection collection\_name is OK.
    ```

11. You can start the crawler manually or schedule it to run at regular intervals.

    -   To start the crawler manually, go to the content source and click **Start Crawler** for the content source.
    -   To schedule the seedlist crawler, click **Edit Content Source**, and click the **Scheduler** tab. Specify the date and time and the frequency for the crawl. The crawler is triggered automatically at the time that you scheduled.

