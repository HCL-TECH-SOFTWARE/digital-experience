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

Metadata fields such as categories and keywords are not treated as content text by default. They must be explicitly enabled through the WCM SearchService configuration to ensure they are included in search results. To enable these fields, set the `SearchService.MetaFields` property as follows:
```
SearchService.MetaFields=categories,categories;keywords,keywords
```

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

For more details on keywords and categories on search, including address with API, refer to [Configuring the Search Sitemap portlet for search by external search engines](../../../build_sites/search/cfg_dx_search/cfg_search_by_internetsearch/srtcfgsitemap1.md).

!!! note
    -   Only text elements and short text elements can be searched.
    -   Only site areas that are configured to be searchable are crawled.

## Enable indexing for WCM categories and keywords

In HCL Digital Experience Search V1, WCM categories and keywords are **not indexed by default** because they are classified as metadata rather than content text. You must manually enable these fields in the **WCM SearchService** configuration.

### Step 1: Access the WCM SearchService configuration
1. Open the **WebSphere Integrated Solutions Console**.  
2. Navigate to:  
   **Applications > WebSphere enterprise applications > WP ConfigService > Resource environment providers**  
3. Select **WCM SearchService**.

### Step 2: Configure metadata fields for indexing
To tell the search service which metadata to include, update the `SearchService.MetaFields` property.

In the **Custom properties** section, add or update the property:

| Property name          | Property value                           |
|------------------------|-----------------------------------------|
| SearchService.MetaFields | categories,categories;keywords,keywords |

**Mapping explanation:**  
- The first value = WCM internal name  
- The second value = search index field name  
- You can rename the index field, but keeping the same name is standard practice.

### Step 3: Enable faceting on metadata (optional)
If you plan to filter or facet by categories or keywords, also define the facet fields:

| Property name                  | Property value       |
|--------------------------------|--------------------|
| SearchService.MetaFieldsToFacet | categories;keywords |

### Step 4: Restart and rebuild
Changes to **WCM SearchService** do not take effect until the system is refreshed and the search collection is rebuilt.

1. **Restart the portal** – a full restart of HCL Digital Experience is required.  
2. **Rebuild the search collection**:  
   - Go to **Administration > Manage Search**  
   - Delete or reset the existing WCM search collection  
   - Recreate or perform a full crawl of the collection  

!!! warning
If you do not rebuild the search collection, categories and keywords will **not appear** in the search index, even if the configuration is correct.

### Search V1 results and query logic
After reindexing, categories and keywords are available as metadata fields. You can query them using:  
- DX Search REST V1 API  
- Search Center  
- Custom search components  

**Example query logic (conceptual):**  
To find documents within a specific category, target the `categories` metadata field defined in Step 2:
            
- **SearchService.SearchSeed.ExcludeFileAttachments**

        Set this parameter to `true` to prevent file resource component attachments from being included in the search results.
        
        Set this parameter to `false` to make files stored in file resource elements in content items searchable. Files stored in file resource elements in a site area also become searchable if a default content item is selected.

    -   **SearchService.SearchSeed.excludeExtensions**

        Set this parameter to a list of file name extensions that you want to exclude from search results. Separate each item in the list with a comma. Any file resource component attachments and file resource element attachments that have these extensions are excluded from search results. For example, `SearchService.SearchSeed.excludeExtensions=avi,mpeg,zip`.

    -   **Searchservice.searchseed.excludeContentResourceTypeElement**

        Set this parameter to `true` to exclude the default file resource element of a content item that is already included through its resource type from the seedlist. The default file resource element is excluded since it is already being pointed to by the content item. The default setting is `false`.

    -   **Searchservice.SearchSeed.excludeFields**

        Set this parameter to a list of meta fields you want to exclude from the search seedlist.

4.  Click **Apply** > **OK**.

5.  Restart the portal for the new settings to take effect.

6.  Delete and create a new search collection for changes to take effect.
