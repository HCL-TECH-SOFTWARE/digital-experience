# Indexing web content

To search for web content, your content must first be indexed by the HCL Portal search engine. When the content is indexed, you can run searches by using the search center or by using a search component. If you search for documents in the WebSphere Portal search center, be aware that you see search results for published documents only. Unpublished pending changes in a project are not included in the results.

## Creating a content source for a site area

The HCL Portal search engine defines content sources that index your web content. All the child site areas and content items of the selected site area is included in the index. Related content sources are grouped in a search collection.

1.  To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**.
2.  Select or create a new collection. The default search collection that is named **WebContentCollection** is provided by default.
3.  Click **New Content Source**.
4.  Select **WCM site** as the content source type.
5.  Enter a name in the **Content Source Name** field.
6.  Enter the following URL in the **Collect documents linked from this URL** field:

    -   **For a stand-alone server:**

        ```
        http://hostname:port\_number/wps/seedlist/myserver?SeedlistId=library/sitearea1/childsitearea2
        &Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments
        ```

        You need to replace hostname, port\_number, library, and site area with values appropriate for your site. If your library name or site area names contain spaces, you need to replace the spaces with a "+" symbol. For example, the path `library one/site area one` would instead be defined as `library+one/site+area+one`

    -   **For a cluster:**

        In this case you to use the host and port of the HTTP server:

        ```
        http://*httpserver:port\_number*/wps/seedlist/myserver?SeedlistId=*library/sitearea1/childsitearea2*
        &Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments
        ```

        You need to replace httpserver, port\_number, library, and site area with values appropriate for your site. If your library name or site area names contain spaces, you need to replace the spaces with a "+" symbol. For example, the path `library one/site area one` would instead be defined as `library+one/site+area+one`

    -   **For a virtual portal configured to use the URL Context as its access point:**

        ```
        http://httpserver:port\_number/wps/seedlist/myserver/virtualPortalContext?SeedlistId=library/sitearea1/childsitearea2
        &Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments
        ```

        You need to replace httpserver, port\_number, virtualPortalContext, library, and site area with values appropriate for your site. If your library name or site area names contain spaces, you need to replace the spaces with a "+" symbol. For example, the path `library one/site area one` would instead be defined as `library+one/site+area+one`

    -   **For a virtual portal configured to use a different hostname as its access point:**

        ```
        http://vphostname:port\_number/wps/seedlist/myserver/?SeedlistId=library/sitearea1/childsitearea2
        &Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments
        ```

        You need to replace vphostname, port\_number, library, and site area with values appropriate for your site. If your library name or site area names contain spaces, you need to replace the spaces with a "+" symbol. For example, the path `library one/site area one` would instead be defined as `library+one/site+area+one`

    !!! note
        The seedlist ID can be any of the following:
        -   library
        -   library/site area
        -   library/site area/sub-site area/...
        -   the JCRID of a site area

7.  If the content to be indexed is secured, go to the **Security** tab. Then, enter the user name and password of the user that is used to access the secured site. You must then click **Create** on the search tab itself.

8.  Click **Create**.

If you have multiple parent site areas and want your searches to run across all site areas, create a content source for each of them in the same collection. If you do not want your searches to run across all parent site areas, create a separate collection for each parent site area or group of related parent site areas.

## Searching web content in a virtual portal

Search services and search collections are separate for individual virtual portals and are not shared between individual virtual portals. You set up an individual search service and separate search collections for each virtual portal. These collections can be used to crawl and search the same set of documents.

If you are using a website that is shared across virtual portals, then to search that website in a virtual portal environment you must:

1.  Create new search collection for the virtual portal. You can create a new content source by copying the URL from your original search collection.
2.  Create new search component, or copy an existing search component, and configure it to use the new virtual portal search collection that is created in step 1.
3.  Create new search form, by using an HTML component, which is configured to use the search component that is created in step 2.
4.  Create new content item to display the HTML component that you created in the previous step.

You must do these steps for each virtual portal in your system.


-   **[Indexing web content in a multilingual environment](wcm_dev_search_portal_multi.md)**  
Learn about the best practices for indexing web content if you are working with a multilingual Web Content Manager site.

<!--
**Previous topic:**[Planning and preparing for Portal Search](../admin-system/srcbfrwrkgwtprtlsrch.md)

**Next topic:**[Configuring Web Content Manager search options](../wcm/wcm_config_search.md)-->

???+ info "Related information"
    - [Searching on secured portal sites and pages and content management items](../../search/planning_portal_search/security_considerations/srtsrchscrprtlstepgs.md)
