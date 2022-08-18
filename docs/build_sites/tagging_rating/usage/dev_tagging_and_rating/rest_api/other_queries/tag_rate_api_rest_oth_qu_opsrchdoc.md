# Querying for the OpenSearch description document

You can query for the OpenSearch description document.

To query for the OpenSearch description document, use the following query:

```
tos:search&osbu=bundle-name&osde=key-description&ossn=key-short-name&osic16=url-icon-16
```

The following query parameters are mandatory with this query:

-   **osbu**

    Use this query parameter to specify the base name of a resource bundle. Specify a fully qualified Java class name.

-   **osde**

    Use this query parameter to specify the key within the previous given resource bundle the value of which you want to be used as the description of the OpenSearch description document.

-   **ossn**

    Use this query parameter to specify the key within the previous given resource bundle the value of which you want to be used as the short name of the OpenSearch description document.


Optionally, you can specify the following query parameter:

-   **osic16**

    Use this query parameter to pass a URL for an icon that browsers can render to visualize the OpenSearch description document. For details about the characteristics of the icon refer to the JavaDoc of the interface `com.ibm.portal.resolver.opensearch.DefaultOpenSearchContentHandler.startImage(int, int, String)` . Note that the icon must be 16 pixels by 16 pixels.


**Parent topic:**[Other queries](../admin-system/tag_rate_api_rest_oth_queries.md)

**Related information**  


[Searching for tagged content](../admin-system/tag_rate_search.md)

[OpenSearch](https://opensearch.org)

