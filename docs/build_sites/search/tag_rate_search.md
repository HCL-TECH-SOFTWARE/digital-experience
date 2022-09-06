# Searching for tagged content

Users can search the tag space by using the browser search box.

This works only for browsers that support OpenSearch. For details refer to http://www.opensearch.org/Home. OpenSearch is a collection of technologies that allow publishing of search results in a format suitable for syndication and aggregation. It is a way for websites and search engines to publish search results in a standardized and accessible format.

To be able to search for tagged content from non-portal pages, visit the portal site, navigate to where your browser allows you to add or remove search engines and add the search engine named HCL Portal Tagging Search Service. For details about how to do this refer to the documentation for your browser. After you added the search service to your browser, you can search the tag space of the Portal via this search service.

The tagging search service searches only the portal site at which the service was added. For example, if you use Firefox to access two different portal servers `server1` and `server2`, and you then add the HCL Portal Tagging Search Service at server1. If you then navigate to server2 and try to search for a tag, the search service searches server1 for the specified tag, not server2.

Advantages are as follows:

-   Users can search for tagged content from pages that do not have a tag cloud, for example from Web pages external to the portal.
-   When a user searches for a tag, the portal redirects the user to the All view of the tag cloud. The search results are shown in the tag results list. The user can now work the results.
-   The tag result list shows **all** resources that have the searched tag.
-   The search has type-ahead support. The following features make tag search easier:
    -   As the user types text, one or more possible matches for the text are found and immediately presented to the user. This immediate feedback allows the user to stop short of typing the entire word or phrase they were looking for. The user can also choose a closely related tag from the presented list.
    -   It starts after the user has typed the third character of the searched tag.
    -   As the user types more characters, the type-ahead support filters and narrows the search progressively.
    -   The suggested tags are sorted by their relevance: tags that have been applied more often will be suggested before tags that have not been assigned often.
    -   Suggestions and the search results are provided according to the normalization configuration: if no normalization is configured, the suggestions and the search is case sensitive.

By default the searches are case sensitive. If you want to perform a case insensitive search, an administrator needs to enable tag normalization in the CP Configuration Service. For details refer to the topic about the CP Configuration Service for tagging and rating

<!-- 
**Previous topic:**[Search Center](../wcm/h_search_searchcenter.md)

**Next topic:**[Planning and preparing for Portal Search](../admin-system/srcbfrwrkgwtprtlsrch.md)

**Related information**  


[Querying for the OpenSearch description document](../admin-system/tag_rate_api_rest_oth_qu_opsrchdoc.md)

[CP Configuration Service for tagging and rating](../admin-system/srvcfg_cpcfg4tr.md)

[Type-ahead feature for the deprecated tag widget](../admin-system/tag_rate_adm_typeahead.md)

[Searching for tagged content](../admin-system/tag_rate_search.md)

[Open Search - http://www.opensearch.org/Home](https://www.opensearch.org/Home) -->

