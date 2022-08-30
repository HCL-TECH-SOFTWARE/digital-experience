# Configuring search integration

HCL Connections search integration in HCL Digital Experience allows users to do search queries and view query results for HCL Connections content within the context of their portal environment.

This integration point is enabled by configuring the portal search center component to include HCL Connections content as part of the related search results. You also must configure a component to allow the navigation from the portal search center to the portlets so that users can view the Connections-related search results.

## Understanding the search architecture

Portal currently provides the following two search frameworks. The one you use depends on whether you value performance or ease of maintenance.

-   -   **Search Service**

    Search Service is a live search and uses REST \(along with other technologies\) to search on a target information source and fetch the matching results. Connections/Portal integration uses the "Remote Content Server Search Service Type" \(referred to as RCSS type\), by using the ATOM/REST APIs displayed by Connections. This approach would tag relevance score of connections content, in isolation, to the portal relevance score. It is a federated approach in which the search is federated between Portal and HCL Connections instances.

-   -   **Search Collections**

    Search Collections use a seedlist framework to crawl and index all of the HCL Connections data locally on a Portal server. The advantage of this approach is that it removes extra network traffic to the HCL Connections server during the search process, making information retrieval fast. One disadvantage is that the crawler must run frequently to synchronize local content with all the latest content on the HCL Connections server. It can do a better relevance ranking of search results, as search results \(including Portal and Connections\) are served by the Portal engine only.


**Restriction:** Currently, you must implement the search integration of Connections Content Manager Documents by using the Search Service approach. The Search Collections method is not supported currently.

-   **[Deploying search integration prerequisites](../connect/t_connections_portlets_search_prereq.md)**  
Follow these steps to configure search integration.
-   **[Configuring search with Remote Content Server Search Service Type \(RCSS\)](../connect/connectors_portlets_search_rcss.md)**  
Use the Remote Content Server Search Service Type \(RCSS\) to implement live search for HCL Connections content from an HCL Portal application.
-   **[Additional configuration to support the HTTPS protocol](../connect/connection_portlets_search_rcss_https.md)**  
If you are using the HTTPS security protocol with RCSS, you must import a certificate to support that configuration.
-   **[Configuring a search collection](../connect/connections_portlets_search_collections.md)**  
Search Collections use a seedlist framework to crawl and index all of the HCL Connections data locally on an HCL Portal server.
-   **[Setting the Search Scope](../connect/connections_portlets_set_search_scope.md)**  
Define search scopes for the content from HCL Connections that is returned from a search in HCL Digital Experience applications.

