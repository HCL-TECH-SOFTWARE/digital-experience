# Portlets for working with Search 

Get an overview of the portal search portlets.

The portal search portlets are briefly described in the following sections:

-   Overview of Portal Search portlets
-   Search administration portlet **Manage Search**
-   **Search Center** portlet for search by users

For more details about enhancements to the search portlets for HCL Digital Experience Version 8.5, refer to Portal Search.

## Overview of Portal Search portlets

The following portlets are all installed and deployed as part of the default portal installation:

-   For use by administrators: Manage Search
-   For users: Search Center

If you want to use the other search-related portlets in your portal, you have to install them and configure them according to your requirements. Here is an overview of the Portal Search administration and user portlets:

|Administration portlet|Installation status|
|----------------------|-------------------|
|Manage Search|Installed and deployed|

|User portlets|Installation status|
|-------------|-------------------|
|Search Center|Installed and deployed|
|Suggested Links|Installed and deployed|
|External Search Results|Installed and deployed|

You can install additional copies of the Suggested Links and External Search Results portlets and apply special configurations. For details refer to the topics about adding and configuring these portlets and about customizing the Search Center.

## Portal Search portlets are not compatible with WSRP

The Portal Search portlets cannot be provided as WSRP services, as some additional and more advanced HCL Portal concepts and features are not yet reflected by the current WSRP standard. This includes the Portal Search portlets Manage Search and the Search Center.

## Search administration portlet Manage Search

**Manage Search** is the Portal Search administration portlet. It has three main sections:

-   **Search Services**: Use this section to manage search services.
-   **Search Collections**: Use this section to manage search collections and their content sources.
-   **Search Scopes**: Use this section to manage search scopes and custom links to web search locations.

You can use the Manage Search portlet to perform the following administrative tasks:

1.  Manage search services. You can use the search services that are provided with portal, or you can add one or more search services to Portal Search. For example, this is required in scenarios where you set up remote search or your portal is set up in a cluster.
2.  Manage search collections. You can define one or more search collections for a search service.
3.  Manage the content sources of search collections. You can combine content sources of different types in one search collection.
4.  Perform administrative tasks required as preparatory steps for the search feature, such as indexing.
5.  Manage search scopes. You can define search scopes to limit search results to specific content locations and specific document types. This enables users to target their searches better.
6.  Manage custom links. You can add custom links with web link shortcuts to search locations. This enables users to do direct searches to popular web search engines, such as Google or Yahoo!
7.  Search and browse a search collection. Manage Search provides a user interface with administrative tasks for search collections. For example, you can edit documents, or you can select documents that you do not want to make available to users for search and delete them.

For detailed information about how to use the Manage Search portlet, refer to the portlet help. Depending on your requirements, you might have to perform other administrative tasks for Portal Search. For example, you can prepare security for Portal Search, or configure remote search or search in a portal cluster. For more information about the Manage Search portlet and other administrative tasks related to search, refer to the other topics in the Portal Search section.

## Search Center portlet for search by users

The Search Center portlet provides a central starting point to all searchable content sources made available to the Portal. Users can use the Search Center to search documents and content. The default search scope is **All Sources**. This searches through all search collections that are available to the user by the access permission rights. You can allow more focused searches by providing additional search scopes. Refer to Search scopes for more information.

The Search Center portlet is installed as part of the default portal installation. Note that it is deployed and placed on a hidden portal page. The portal takes users to the Search Center when they enter a search using the portal Search Box.

Starting with Version 8 of HCL Portal the Search and Browse portlet provided with earlier portal versions is no longer available. The Search Center has been enhanced with advanced search options previously available in the Search and Browse portlet. Categorization and taxonomy are no longer available.

**Note:** By default both the Search Center portlet and the Search box are available only to authenticated users, that is for users who have logged on with a user ID and password. Anonymous users, that is users who access the portal without logging in, cannot use the Search Center or the search box. For more information about how to use the search portlets on anonymous pages refer to Enabling anonymous users to search public pages of your portal.

For more details about the Search Center portlet, refer to the following information:

-   For more information about how to work with the Search Center, refer to the portlet help.
-   For hints about using the Search Center for remote search on web sites with different languages, refer to Hints and tips for using Portal Search.

**Parent topic:**[Portal Search ](../admin-system/admsrch.md)

**Related information**  


[Planning and preparing for Portal Search ](../admin-system/srcbfrwrkgwtprtlsrch.md)

