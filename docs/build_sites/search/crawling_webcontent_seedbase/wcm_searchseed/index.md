# The search seedlist 1.0 format

Portal Search is configured to support the HCL Web Content Manager search seedlist 1.0 format by default.

Search seedlist 1.0 provides several features:

-   You can use the web content page type to render content that is found in the search results on the corresponding web content page.
-   You can include custom metadata fields from a web content item that appear in the search seedlist but not in the HTML source.
-   You can search within a specific library or site area, across all web content libraries, or across a list of libraries.
-   You can run incremental crawling of libraries for faster seedlist processing. With incremental crawling, when a crawl requests new items, only items that have been added, changed, or deleted since the previous crawl are retrieved.

!!! important
    The syntax of the seedlist URL has changed with seedlist format 1.0. Older search collections that are created by using seedlist format 0.9 cannot be reused or migrated to the new format. Be sure that you index all your content again after you update the Web Content Manager seedlist format from 0.9 to 1.0.

**Software note:** As of fix pack 43 for Web Content Manager, search seedlist 1.0 uses a cache to improve the time that is required to process large content libraries. To ensure that the cache is available, you must install fix pack 10 or later for HCL Portal.

Search seedlist 1.0 can make access control information available in a way that makes pre-filtering of contents possible. Pre-filtering provides the fastest filtering approach because it takes place in the search index level. Another advantage of pre-filtering is that remote secured content sources can be searched from the portal. The filtering mode is defined as part of the search service configuration parameters.

**Restriction:** The seedlist must only be used for search. For example, do not use the seedlist as an alternative logging method. For the purposes of event logging, the Java messaging service \(JMS\) is used.

-   **[Enabling support for search seedlist 1.0](wcm_dev_search_enableseed.md)**  
If you want to use Portal Search to crawl your web content and use features like web content pages, you must enable seedlist 1.0 support for the Portal Search crawler.
-   **[Customizing metadata field search support](wcm_dev_search_custmeta.md)**  
With the search seedlist 1.0 support, custom metadata fields that are specified on content items are added to the search seedlist as metadata information, without requiring the metadata to appear in the HTML source for the content items.
-   **[Seedlist 1.0 REST service API](wcm_dev_search_seedrestapi.md)**  
The HCL Web Content Manager API for retrieving application content through a seedlist is based on the REST architecture style. To obtain seedlist content, third-party crawlers or administrator applications need to construct and send only HTTP requests to the application servlet.


