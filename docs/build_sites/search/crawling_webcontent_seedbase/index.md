# Crawling web content with search seedlists

Portal Search supports the use of seedlists to make crawling websites and their metadata more efficient and to provide content owners fine-grained control over how content and metadata are crawled. You can configure the portal to use seedlist support when crawling content generated with HCL Web Content Manager.

By default Portal Search is configured to use seedlist format 1.0 when indexing content for search collections. When used with web content, seedlist format 1.0 makes it possible to use the web content page type to render content that is found in the search results on the corresponding web content page. You can also include custom metadata fields from a web content item that appears in the search seedlist but not in the HTML source.

Search seedlist 1.0 can make access control information available in a way that makes pre-filtering of contents possible. Pre-filtering provides the fastest filtering approach because it takes place in the search index level. An extra advantage of pre-filtering is that remote secured content sources can be searched from the portal. The filtering mode is defined as part of the search service configuration parameters.

!!! important
    - When changing access control on libraries or setting access on the library root, note that seedlist requests relative to a timestamp will not list items affected by an access control change. To retrieve those updates, it is recommended to trigger a full crawl. 
    - DX classic Search, either local or remote, uses post-access control filtering and is therefore not affected.
    - Starting CF225, you can have the seedlist return items affected by library access control changes. To enable this feature, set ```seedlistUpdateLibrariesForAccessControl=true``` in `WCM WCMConfigService`.


-   **[The search seedlist 1.0 format](../crawling_webcontent_seedbase/wcm_searchseed/index.md)**  
Portal Search is configured to support the HCL Web Content Manager search seedlist 1.0 format by default.

<!---
**Previous topic:**[Language and region support in Portal Search](../admin-system/srr_lng_regio_spprt.md)

**Next topic:**[Searching your local portal](../admin-system/srclocportal.md) --->
