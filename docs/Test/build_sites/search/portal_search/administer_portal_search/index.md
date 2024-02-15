# Administering Portal Search

You can administer and configure many details for Portal Search.

!!! note
    Before you start administering Portal Search, review the topic about Planning and Preparing for Portal Search.

**Manage Search** is the Portal Search administration portlet. It has three main sections:

-   Search Services: Use this section to manage search services.
-   Search Collections: Use this section to manage search collections and their content sources.
-   Search Scopes: Use this section to manage search scopes and custom links to Web search locations.

In order to enable Portal Search and make documents available for search by users, you perform administrative tasks such as the following:

1.  Create search services. You can use the default search services provided with portal, or you can create additional search services, for example, for setting up remote search or search in a portal cluster.
If no search services exist, Portal will automatically create one at Portal initialization time.
Note that the default search service is only for "local" search.
If the Portal exists in a WebSphere cluster or if this is a multi-pod Kubernetes deployement, the default search collection should be deleted and "Remote Search" used instead.

2.  Configure Portal Search. You do this by configuring the search service.

3.  Configure the search portlets for various environments and requirements, for example, for local or remote search service, or for search on anonymous pages.

4.  Manage Portal Search for users:

    1.  Create a search collection and define its properties, thereby allowing for fast and efficient searches.

    2.  Create one or more content sources for that collection and have them crawled.

    For more details about these tasks refer to the topic about Setting up search collections.

Portal Search is pre-configured with a search service, a portal site search collection, and scopes. You can add and remove search services, collections, and scopes.

You can perform most of the configuration tasks for Portal Search by using the administration portlet **Manage Search**. By alternative, you can also administer Portal Search by using the WebSphere® Integrated Solutions Console and resource providers in XML format.

All search collections are available by the **All Sources** selection option of the Search Center portlet.

-   **[Managing search services](srtmgsrchsrvc.md)**  
Get an overview of how you manage the portal search services. This task includes creating a new search service or editing an existing search service.
-   **[Search service configuration parameters](../administer_portal_search/search_service_params/index.md)**  
Learn about the portal search service parameters and possible values.
-   **[Configuring the default location for search collections](srtcfgdfltlctsrchcllc.md)**  
You can modify the default directory location under which search collections are created on a per search service basis. View some related information.
-   **[Configuring the Search Center portlet](../administer_portal_search/cfg_searchcenter/index.md)**  
Get an overview of how you configure the Search Center.
-   **[Replacing the search administrator user ID](srt_srch_admin_id.md)**  
If you changed the portal administrator user ID or password, you need to update the search administrator user ID to match the same values.
-   **[Customizing the Search Center](../administer_portal_search/customize_searchcenter/index.md)**  
Customize the Search Center by adding, removing and configuring additional portlets, such as External Search Results or Recommended Links. The external search results portlet displays search results from third-party external search engines such as Yahoo and Google. Using the recommended links portlet, display search results from a collection of predefined links with predefined keywords. You can also configure the All Sources scope or replace it with a customized scope.
-   **[Using the WebSphere Integrated Solutions Console to administer Portal Search](srtadmsrchadmcnsl.md)**  
You can administer Portal Search by using the WebSphere Integrated Solutions Console and using resource providers in XML format.
-   **[Setting up search collections](../administer_portal_search/setup_search_collections/index.md)**  
View information on setting up search collections for search by users. This also includes creating content sources and managing search scopes and custom links.
-   **[Searching and crawling Portal and other sites](../administer_portal_search/searching_crawling_portal_sites/index.md)**  
You can configure your local Portal site and crawl remote Portal sites so that they are searchable by users. Run crawlers against other external websites to make them searchable by local portal users.  


???+ info "Related information"
    - [Planning and preparing for Portal Search](../../../../build_sites/search/planning_portal_search/index.md)
    - [Exporting and importing search collections](../../../../build_sites/search/portal_search/administer_portal_search/setup_search_collections/srtexpimp.md)
    - [Using the view definitions provided with social rendering on your portal pages](../../../social_rendering/working_with_social_objects/soc_rendr_use_oob_socl_list.md)
    - [Customizing social list definitions by using inline editing](../../../social_rendering/customizing_view_definitions/soc_rendr_cust_socl_list.md)

