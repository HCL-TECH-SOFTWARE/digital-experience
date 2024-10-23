# Configuring Web Content Manager search options

Configure the **WCM SearchService** search properties from the WebSphere Integrated Solutions Console to manage how the search service works with Web Content Manager search forms.

1.  Go to **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

2.  Select **WCM SearchService, Custom** properties.

3.  Specify values for the search parameters.

    -   **SearchService.DateFormatString**

        Use this parameter to set the date format when dates are entered in search forms. Enter a supported Java date format string. If this property is not set, then the default format is `MMM dd yyyy HH:mm:ss z`.

    -   **SearchService.RecrawlInterval**

        This parameter is the recrawl interval in hours.

    -   **SearchService.BrokenLinksExpirationAge**

        This parameter is the default broken links expiration age in days.

    -   **SearchService.MetaFields**

        Use this parameter to specify extra elements to crawl when searching for metadata.

        The format for this parameter value is: `elementName,key1`

        To specify more than one metadata field maps, use the following format:

        ```
        elementName1,key1;elementName2,key2;elementName3,key3
        ```

        For example, to crawl for metadata in a text element named `metaText`:

        ```
        SearchService.MetaFields=metaText,meta
        ```

        -   `elementName` is the name of the element you would like to search for metadata. Any valid element with that name in a searchable site area or content item is crawled.
        -   `key` is the key specified in an element tag that is used as part of a search element design. In the previous example, the key `meta` is used. To render the content of the `metaText` element in a search element design, use the following tag: `<Element context="autoFill" type="content" key="meta"/>`

        !!! note
            -   Only text elements and short text elements can be searched.
            -   Only site areas that are configured to be searchable are crawled.
            
    -   **SearchService.SearchSeed.ExcludeFileAttachments**

        Set this parameter to `true` to prevent file resource component attachments from being included in the search results.
        
        Set this parameter to `false` to allow files stored in file resource elements in content items to become searchable. Files stored in file resource elements in a site area also become searchable if a default content item is selected.

    -   **SearchService.SearchSeed.excludeExtensions**

        Set this parameter to a list of file name extensions that you want to exclude from search results. Separate each item in the list with a comma. Any file resource component attachments and file resource element attachments that have these extensions are excluded from search results. For example, `SearchService.SearchSeed.excludeExtensions=avi,mpeg,zip`.

    -   **Searchservice.searchseed.excludeContentResourceTypeElement**

        Set this parameter to `true` to exclude the default file resource element of a content item that is already included through its resource type from the seedlist. The default file resource element is excluded since it is already being pointed to by the content item. The default setting is `false`.

    -   **Searchservice.SearchSeed.excludeFields**

        Set this parameter to a list of meta fields you want to exclude from the search seedlist.

4.  Click **Apply** > **OK**.

5.  Restart the portal for the new settings to take effect.

6.  Delete and create a new search collection for changes to take effect.
