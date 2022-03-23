# Search suggestions for tag names 

To make search for tag names by users easier, search suggestions provide suggestions for tag names as they appear in the tag cloud and in the tag result portlet.

This is important with respect to normalization as you can configure the display mode of the tags in a tag cloud independently from the type-ahead suggestions. Compared to the query for the type-ahead feature, the search suggestions behave in terms of normalization like the display mechanism of the Tag Cloud.

To query for search suggestions, use the following query:

```
tos:searchsuggestions&term=term
```

where term represents the beginning of a term that a user is typing for which you want the portal to provide search suggestions.

The returned feed is by default sorted by relevance. This means that tags that have been applied more often are displayed before tags that have been applied less often.

This query allows you to modify all of the following:

-   The parameters `order`, `orderMetric`, `locales` . The parameters control how the type-ahead result looks. For more details see the topic about *Adding query parameters* under the sections about *Sorting the results* and *Locale sensitive queries*.
-   The pagination of the type-ahead results, that is with which item the result list starts and how many results are displayed. For more details see the topic about *Adding query parameters* under the section about *Limiting the results*.

**Note:** The type-ahead feature works only with the dialog tag widget of the default tagging user interface of portal versions earlier than V 8.5. With HCL Portal V 8.5, the tag and rating widgets of earlier portal versions are deprecated.

You can configure how the tag names are displayed in terms of normalization. To do this, use the setting `com.ibm.wps.cp.tagging.normalization.displayNormalizedName` in the CP Configuration Service. The response of the suggestions is in the JSON \(JavaScript Object Notation\) format and consists of an array that contains the searched partial term and suggestions.

Example: If the search term is `web`, then the response to tos:searchsuggestion&term=web contains the search suggestions `WebSphere`, `Website`, and `WebBrowser`. The notation in JSON is as follows in the mime type application/json: `["Web",["WebSphere", "Website", "WebBrowser"]]` . This is the format proposed by OpenSearch Suggestions extension Version 1.1 draft 1.

**Parent topic:**[Other queries](../admin-system/tag_rate_api_rest_oth_queries.md)

**Related information**  


[Adding query parameters](../admin-system/tag_rate_api_rest_add_qparms.md)

[Normalizing tags ](../admin-system/tag_rate_adm_norm_local.md)

[OpenSearch Suggestions extension Version 1.1](https://github.com/dewitt/opensearch/blob/master/mediawiki/Specifications/OpenSearch/Extensions/Suggestions/1.1/Draft%201.wiki)

