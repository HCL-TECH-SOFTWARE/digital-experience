# Client identification for external search engines

For the portal to recognize external search engines, HCL Digital Experience provides a client that covers several popular search engines.

This client is implemented according to the Composite Capability/Preference Profiles \(CC/PP\) standard. It has the capability `HTML_SEARCH` set. If you want to add more search engines, you can configure the client as required.

## Client settings

The client has been implemented with the following settings:

-   **User agent:**

    `(.*(B|b)ot.*)|(.*BOT.*)|(.*(S|s)pider.*)|(.*(S|s)earch.*)|(.*(C|c)rawl(er)?.*)|(.*(G|g)rabber.*)|(.*(Y|y)ahoo.*)|(.*(S|s)lurp.*)|(.*Lycos.*)|(.*Wget.*)`

    This user agent covers most available large search engines, such as Google, Yahoo!, Lycos, or MSN. This pattern list also accommodates all other search engines that include segments of `bot, spider, search`, or `crawler`.

-   **Capability:**

    For each search engine that you want to be able to crawl your portal, you need to set the capability `HTML_SEARCH`. Search engines usually visit a website twice, the first time to crawl the site, and the second time to validate the content. When a search engine visits a site for the second time, it usually does so by using a normal browser. Therefore enter additional capabilities for supporting the different browser settings. Examples: `(HTML_4_0, HTML_IFRAME, HTML_FRAME, HTML_NESTED_TABLE, HTML_2_0, HTML_JAVASCRIPT, HTML_3_2, HTML_3_0, HTML_CSS, HTML_TABLE)`.

-   **Manufacturer:**

    Search

-   **Markup:**

    HTML


If you want to include search engines that are not covered by the default set, you can do so by using either the administration portlet Manage Clients or the XML configuration interface. For more information see the following topics.

!!! note
    1.  The search mechanism works correctly for the portal only if the search engine robots are identified to the portal in advance.
    2.  Search on your portal by external search engines requires additional configuration beyond client identification. For more details about this see the topics about *Configuring your portal site for search by external search services* and *Configuring the Search Sitemap portlet for search by external search engines*.

<!--
-   **[Adding search engines by using the administration portlet Manage Clients](../admin-system/srrclientid_mng_clients.md)**  
To add search engines by using the administration portlet Manage Clients, follow the procedure that is given here.
-   **[Adding search engines by using the XML configuration interface](../admin-system/srrclientid_xml.md)**  
To add search engines by using the XML configuration interface, you import them by an XML script file. To make sure that the search mechanism works correctly, you need to add the capability HTML\_SEARCH. -->


