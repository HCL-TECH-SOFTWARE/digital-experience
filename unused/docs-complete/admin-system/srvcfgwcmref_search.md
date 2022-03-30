# Web Content Manager search service 

The HCL Web Content Manager search service \(WCM SearchService\) defines settings that control how web content is crawled and indexed for searching.

-   **SearchService.DateFormatString**

    Indicates the date format to use when entering dates in search forms and for displaying search results. Enter a supported Java date format string. If this property is not set, then the default format is `MMM dd yyyy HH:mm:ss z`.

    Default value: None

-   **SearchService.RecrawlInterval**

    Indicates the interval in hours between crawling of new web content search sources.

    Default value: `4`

-   **SearchService.BrokenLinksExpirationAge**

    Indicates the expiration age in days for broken links in new web content search sources.

    Default value: `1`

-   **SearchService.MetaFields**

    Specifies additional elements to crawl when searching for metadata. The format for this property is `elementName,key1`. To specify more than one metadata field maps, use the following format: `elementName1,key1;elementName2,key2;elementName3,key3`. For example: `metaText,meta`.

    -   `elementName` is the name of element you want to search for metadata. Any valid element with that name in a searchable site area or content item will be crawled.
    -   `key` is the "key" that is specified in an element tag used as part of a search element design. In the previous example, the key of `meta` has been used. To render the content of the `metaText` element in a search element design, you would use the following tag: `<Element context="autoFill" type="content" key="meta"/>`.
    **Notes:**

    -   Only text elements and short text elements can be searched.
    -   Only site areas that have been configured to be searchable will be crawled.
    Default value: None

-   **SearchService.SearchSeed.ExcludeFileAttachments**

    Indicates whether resource component attachments are included in the search results. If this property is set to `false`, the files stored in file resource elements in content items can also be searched. Files stored in file resource elements in a site area can also be searched as long as a default content item has been selected.

    Default value: `false`

-   **SearchService.SearchSeed.excludeExtensions**

    Set this to a list of file name extensions that you want to exclude from search results. Separate each item in the list with a comma. Any file resource component attachments and file resource element attachments that have these extensions are excluded from search results. For example, `SearchService.SearchSeed.excludeExtensions=avi,mpeg,zip`.

    Default value: None

-   **SearchService.DefaultResultPageSize**

    Specifies the default number of items displayed per page for new web content search components.

    Default value: `10`

-   **SearchService.Siapi.IIOP\_URL**

    The IIOP URL created for the default search service.

    Default value: None

-   **SearchService.Siapi.EJB**

    The EJB name for the JNDI associated with the default search service.

    Default value: None

-   **SearchService.Siapi.SOAP\_URL**

    The SOAP URL created for the default search service.

    Default value: None

-   **SearchService.Siapi.PSE.Type**

    The type of search service used for the default search service.

    Default value: None

-   **SearchService.DefaultCollectionName**

    The default web content search collection created during installation.

    Default value: `WebContentCollection`

-   **SearchService.DefaultSeedPageSize**

    Specifies the number of items displayed per page for the HCL Web Content Manager search seed servlet.

    Default value: `200`


**Parent topic:**[Web Content Manager service configuration ](../admin-system/srvcfgwcmref.md)

