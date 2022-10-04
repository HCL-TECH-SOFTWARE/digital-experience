# HCL Digital Experience Portal Search

Use HCL Digital Experience Portal Search to facilitate indexing content sources and searching for information. You can administer search services, search collections, and search scopes, as well as enhance the search experience of your portal site with the portal search portlets. Refer to the topics below for additional information.

## Default search features

A default installation of HCL Digital Experience Portal provides the following features:

-   A search box in the default Portal theme and the Search Center.
-   A search service.
-   A ready-to-run search collection for Portal pages and web content.
-   Search enabled for web content authoring environment.
-   Default search scopes for filtering search results.

You can add, modify, and remove search services. You can also configure your own search collections and search scopes.

## Features for DX Portal site visitors

Site visitors who are working with search can now experience enhanced features, including:

-   The new 'Did you mean?' feature, which makes it easier for visitors to run searches.
-   The new faceted search feature is available through the search REST API, which enables site visitors to limit their searches by using dynamic search filters.
-   Globalized and multilingual search features for site visitors in different countries.

To enhance the possibilities available to site visitors who are working with search, administrators can customize Portal search as follows:

-   Configuration of additional search portlets that are already deployed on the Search Center page. These portlets include the *Suggested Links* portlet, which can be used to promote certain pages, and the *External Results* portlet, which reaches out to additional search services with the same search request and renders their RSS or Atom feeds to the user.
-   Simplified administration of Suggested Links by using a concept similar to tagging.

## Benefits for DX Portal administrators

Portal site administrators who are working with search also benefit from enhanced search administration features. By using portal search, site administrators can complete the following tasks:

-   Setting up security as required. Administrators can provide a portal search on public content for anonymous site visitors and a portal search on secured content for authenticated visitors.
-   Configuring portal search for local operation or remote search service. Depending on your portal deployment \(single noder,  portal cluster or Kubernetes\), remote search service handles requests that come from cluster nodes as well as providing performance benefits by balancing system load.
-   Simplified setting up remote search service by using IBM Installation Manager or Helm processes for DX deployments on Kubernetes platforms.
-   Administer portal search by using the Manager Search administration portlet.

<!--
-   **[Portlets for working with Search](../admin-system/srrsrchportletslist.md)**  
Get an overview of the portal search portlets.
-   **[Administering Portal Search](../admin-system/srtadmsrch.md)**  
You can administer and configure many details for Portal Search.
-   **[Hints and tips for using Portal Search](../admin-system/srrhinttips.md)**  
View some useful tips for using Portal Search.
-   **[The portal site search collection fails](../admin-system/srrhinttips_crt_scoll_fails.md)**  
Creating the portal site search collection can fail due to a file path length restriction.
-   **[Portal Search trace and log files](../admin-system/srrlogtrac.md)**  
Portal Search provides logging and tracing so that you can get additional information for resolving possible problems. -->


*Related information*
    - [Exporting and importing search collections](../../search/portal_search/administer_portal_search/setup_search_collections/srtexpimp.md)
    - [Improving Search Quality in HCL Digital Experience Search](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0076375)

