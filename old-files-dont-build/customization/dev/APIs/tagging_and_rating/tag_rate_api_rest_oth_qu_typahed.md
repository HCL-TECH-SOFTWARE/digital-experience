# Type-ahead with the deprecated tag widget

The tag widget from earlier HCL Portal versions provided a query for the type-ahead feature. With portal V 8.5, that tag widget is deprecated. The type-ahead feature makes it easier for users to find suitable tags. Type-ahead supports users when they work with tags. For example, when users apply tags using the tag widget, or when they search for tags, for example by using the open search functionality, type-ahead provides users suggestions for tags that other users have applied already before. Type-ahead can also help reduce the number of variants of tags.

**Note:** The type-ahead feature works only with the dialog tag widget of the default tagging user interface of portal versions earlier than V 8.5. With HCL Portal V 8.5, the tag and rating widgets of earlier portal versions are deprecated.

To query for the type-ahead feature, use the following query:

```
tos:typeahead&term=term
```

where term represents the beginning of a term that a user is typing for which you want the portal to provide typeahead suggestions.

The returned feed is by default sorted by relevance. This means that tags that have been applied more often are displayed before tags that have been applied less often.

This query allows you to modify all of the following:

-   The parameters `order`, `orderMetric`, `locales` . The parameters control how the type-ahead result looks. For more details see the topic about *Adding query parameters* under the sections about *Sorting the results* and *Locale sensitive queries*.
-   The pagination of the type-ahead results, that is with which item the result list starts and how many results are displayed. For more details see the topic about *Adding query parameters* under the section about *Limiting the results*.

You can configure how the tag names are displayed in terms of normalization. To do this, use the setting `com.ibm.wps.cp.tagging.normalization.typeAhead` in the CP Configuration Service. The response of the suggestions is in the JSON \(JavaScript Object Notation\) format and consists of an array that contains the searched partial term and suggestions.

Example: If the search term is `web`, then the response to tos:typeahead&term=web contains the suggestions `WebSphere`, `Website`, and `WebBrowser`. The notation in JSON is as follows in the mime type application/json: `["Web",["WebSphere", "Website", "WebBrowser"]]` . This is the format proposed by OpenSearch Suggestions extension Version 1.1 draft 1.

**Parent topic:**[Other queries](../admin-system/tag_rate_api_rest_oth_queries.md)

**Related information**  


[Adding query parameters](../admin-system/tag_rate_api_rest_add_qparms.md)

[Type-ahead feature for the deprecated tag widget](../admin-system/tag_rate_adm_typeahead.md)

[Normalizing tags](../admin-system/tag_rate_adm_norm_local.md)

[OpenSearch Suggestions extension Version 1.1](https://github.com/dewitt/opensearch/blob/master/mediawiki/Specifications/OpenSearch/Extensions/Suggestions/1.1/Draft%201.wiki)

