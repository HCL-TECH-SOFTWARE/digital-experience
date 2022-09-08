# Configuring your portal site for search by internet search engines

You can enable your portal site for search by using search services such as Google or Yahoo! Search on your portal site by external search services works for public portal pages only, that is, for pages that users can access without a user ID and password.

To make your portal available for search by internet search engines, you configure search with external search services. Register your portal with the external search service\(s\) of your choice. Give the URL of your portal to the search service providers so that they can crawl and index your portal site. Depending on how you customize your portal, you might consider indicating the Site Map page rather than your portal home page, or otherwise enhancing the configuration.

Optionally, you can configure several additional aspects for search on your portal by external search services:

-   By default, the Site Map portlet is available on the portal Welcome page. This way the external crawler crawls only the links of the Site Map portlet. If you change your portal, place the Site Map portlet on your portal home page. Otherwise the crawler can crawl all portal links and might trigger unwanted actions by action links, such as a Delete button. If you do not want your users to be able to see the Site Map portlet, choose one of the following options for placing the Site Map portlet:

    -   Place the Site Map portlet in the theme of the portal home page.
    -   Place the Site Map portlet on a separate page, and omit that page from the portal navigation.
    The location of the Site Map portlet in your portal determines the URL by which you register to the external search service.

-   You can configure the Site Map portlet to determine the depth to which your portal can be searched.
-   You can configure client identification for the external search engines.
-   You can configure the URL normalization. You do this by setting a property in the portal configuration service named portal WP State Manager Service in the WebSphere® Integrated Solutions Console.

<!--
-   **[Configuring the Search Sitemap portlet for search by external search engines](../admin-system/srtcfgsitemap1.md)**  
The Search Sitemap portlet generates a navigable list of all public pages of the portal. You can configure the Search Sitemap portlet to determine the limit to the number of links that are displayed per page.
-   **[Client identification for external search engines](../admin-system/srrclientid.md)**  
For the portal to recognize external search engines, HCL Digital Experience provides a client that covers several popular search engines.


**Previous topic:**[Searching your local portal](../admin-system/srclocportal.md)

**Next topic:**[Enabling anonymous users to search public pages of your portal](../admin-system/srtusgsrchbrwanonpgs.md) -->

