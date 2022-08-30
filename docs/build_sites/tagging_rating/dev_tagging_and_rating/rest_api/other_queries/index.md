# Other queries

You can add other query parameters, for example for related tags.

The query for related tags can be useful to search for related content, that is for resources that are or can be similar to a given resource. Resources are considered to be similar if they share at least one tag with a given resource.

Example: To search for resources `r2 . . . rn` that are related to a resource `r1`, you determine the tags of resource `r1` and hand them over to the following query:

```
tm:ts:related&tmparam=tm:name:tagname
```

This query returns a feed that contains all tags related to the tag names or set of tags that you specified. The query results in a list of all tags assigned to all resources that have been assigned at least one of the tags that resource `r1` has also been assigned. In other words, This query lists all tags of all similar or related resources `r2 . . . rn`. You can now use this list to query for all these listed resources `r2...rn`.

-   **[Type-ahead with the deprecated tag widget](../admin-system/tag_rate_api_rest_oth_qu_typahed.md)**  
The tag widget from earlier HCL Portal versions provided a query for the type-ahead feature. With portal V 8.5, that tag widget is deprecated. The type-ahead feature makes it easier for users to find suitable tags. Type-ahead supports users when they work with tags. For example, when users apply tags using the tag widget, or when they search for tags, for example by using the open search functionality, type-ahead provides users suggestions for tags that other users have applied already before. Type-ahead can also help reduce the number of variants of tags.
-   **[Search suggestions for tag names](../admin-system/tag_rate_api_rest_oth_qu_opsrchsug.md)**  
To make search for tag names by users easier, search suggestions provide suggestions for tag names as they appear in the tag cloud and in the tag result portlet.
-   **[Querying for the OpenSearch description document](../admin-system/tag_rate_api_rest_oth_qu_opsrchdoc.md)**  
You can query for the OpenSearch description document.


**Related information**  


[Basic addressing](../admin-system/tag_rate_api_rest_addr.md)

