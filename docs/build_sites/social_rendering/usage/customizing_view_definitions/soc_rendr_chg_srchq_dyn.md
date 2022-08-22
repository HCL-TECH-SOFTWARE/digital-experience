# Request attributes for changing search queries dynamically

The definitions of your list views are represented by content items of the Social List Definition authoring template. You can override specific elements of such list view definitions by using the request attributes that are described here. To work with request attributes in your web content, use the RequestAttribute rendering plug-in. Changing a list view definition by using request attributes is a way to modify the content of your lists dynamically, for example based on user input.

You can use the following request attributes:

-   **ibm.portal.sr.search.access**

    Use this request attribute to dynamically set the type of access that you want to use for filtering the list. This request attribute overrides the Filter by Type of Access setting of your list view definition. You can use the following values:

    -   **public**

        Use this value to include only public objects in the list.

    -   **private**

        Use this value to include public objects and private objects to which the user has access. The value `private` corresponds to the value `personalOnly` of the HCL Connections Scopes API. This value `personalOnly` is described in the scopes feed summary element as `Search for your content`. This scope matches public documents and documents that are private and to which the user has access based on the user ID, group IDs, communities to which the user belongs.

    -   **shared**

        Use this value to include only private objects to which the user has access. The value `shared` corresponds to the value `personalOnlyByACL` of the HCL Connections Scopes API. This value `personalOnlyByACL` is described in the scopes feed summary element as `Search for your private content`. This scope matches only documents to which the user has access based on the user ID, group IDs, communities to which the user belongs. This scope includes only documents that the user owns or that were explicitly or implicitly shared with the user.

-   **ibm.portal.sr.search.authorid**

    Use this request attribute to dynamically set the external ID \(`extID`\) of the user that you want to use for filtering the list. The external ID is specific to HCL Connections. You can retrieve the `extID` that belongs to the user of a selected HCL Connections user profile by using the `ConnectionsContext` rendering plug-in. With regards to author filtering, this request attribute overrides the Dynamic Filtering setting of your list view definition.

-   **ibm.portal.sr.search.community**

    Use this request attribute to dynamically set the UUID of a specific HCL Connections community. If you specify a community, the list contains only social objects from that community. This request attribute overrides the Filter by Community setting of your list view definition.

-   **ibm.portal.sr.search.max**

    Use this request attribute to dynamically set the maximum number of items that you want to include in the list. This request attribute overrides the Maximum Results setting of your list view definition.

-   **ibm.portal.sr.search.queryURI**

    Use this request attribute to override the URI used to query the HCL Connections server. Normally, the portal generates the query URI based on the list view definition and the request attributes described here. By using this request attribute, you can provide a URI that replaces the one computed by the portal. You can use the following placeholders in a custom query URI:

    -   **\{$search.public\}**

        If your custom query URI starts with this string, the portal replaces it with the HTTP link of the Search service of the HCL Connections server.

    -   **\{$search.protected\}**

        If your custom query URI starts with this string, the portal replaces it with the HTTPS link of the Search service of the HCL Connections server.

-   **ibm.portal.sr.search.searchterm**

    Use this request attribute to dynamically set the search term that you want to use for filtering the list. With regards to search term filtering, this request attribute overrides the Filter by Search Term setting and the Dynamic Filtering setting of your list view definition.

-   **ibm.portal.sr.search.sortby**

    Use this request attribute to dynamically set the criteria that you want to use for sorting the list. Supported values depend on the Search service of your HCL Connections server. Usually, the following values are supported:

    -   **date**

        Use this value to sort your list by the last modified date of the list entries.

    -   **relevance**

        Use this value to sort your list by the relevance of the list entries.

    In addition to these two values, you can also specify the name of any other sortable field of HCL Connections objects, for example the `title`. This request attribute overrides the Sorting Criteria setting of your list view definition.

-   **ibm.portal.sr.search.sortdir**

    Use this request attribute to dynamically set the order by which you want to sort the list. You can use the following values:

    -   **asc**

        Use this value to sort your list in ascending order.

    -   **desc**

        Use this value to sort your list in descending order.

    This request attribute overrides the Sorting Order setting of your list view definition.

-   **ibm.portal.sr.search.source**

    Use this request attribute to dynamically set the type of content source that you want to use for filtering the list. This request attribute overrides the Filter by Content Source setting of your list view definition. You can use the following values:

    -   **allconnections**

        Use this value to get results from all content sources. This value is the default value.

    -   **activities**

        Use this value to get results from activities only.

    -   **blogs**

        Use this value to get results from blogs only.

    -   **communities**

        Use this value to get results from communities only.

    -   **dogear**

        Use this value to get results from dogears and bookmarks only.

    -   **events**

        Use this value to get results from events only.

    -   **forums**

        Use this value to get results from forums only.

    -   **profiles**

        Use this value to get results from profiles.

    -   **wikis**

        Use this value to get results from wikis only.

    -   **files**

        Use this value to get results from files only.

    To combine different content source types for your search, provide multiple values and separate them by commas. Example: `ibm.portal.sr.search.source=blogs,forums,files`.

-   **ibm.portal.sr.search.tags**

    Use this request attribute to dynamically set the tags that you want to use for filtering the list. To specify more than one tag as a filter, use blanks or commas as separator characters between the tags. This request attribute overrides the Filter by Tags setting of your list view definition.



