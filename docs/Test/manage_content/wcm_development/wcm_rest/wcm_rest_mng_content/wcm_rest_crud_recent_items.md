# Using REST to work with recent items

You can use REST service to display a list of recently accessed items. This is the equivalent of the Recent Items view in the library explorer.

!!! note
    By default, items accessed through the REST service are added to the recent items list. To stop items accessed through the REST service appearing in the list of recent items, change the rest.default.add-recent parameter to false in the `WCM WCMConfigService` service using the WebSphere® Integrated Solutions Console. The rest.default.add-recent parameter can be overridden on a per-request basis by specifying `recent=true` or `recent=false` in the query string.

-   **URI:**

    `/recent-items`

-   **Example:**

    ```
    HTTP 1.1 GET /wps/mycontenthandler/wcmrest/recent-items
    
    <feed xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm">
        <id>wcmrest:recent-items</id>
        <title>wcmrest:recent-items</title>
        <updated>2011-09-28T02:51:47.228Z</updated>
        <link rel="next-page" href="/wps/mycontenthandler/!ut/p/wcmrest/recent-items?page=2"/>
        <entry>
            <id>wcmrest:8b629b12-e16a-4afa-bbf5-a37ebee5a5b8</id>
            <title xml:lang="en">Articles List</title>
            <summary xml:lang="en"></summary>
            <wcm:name>Articles List</wcm:name>
            <wcm:description xml:lang="en"></wcm:description>
            <wcm:type>LibraryMenuComponent</wcm:type>
            <updated>2011-09-21T06:21:11.701Z</updated>
            <wcm:lastAccessed>2011-09-26T05:41:50.874Z</wcm:lastAccessed>
            <wcm:lastModifier>
                <wcm:distinguishedName>Replicator</wcm:distinguishedName>
            </wcm:lastModifier>
            <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/item/8b629b12-e16a-4afa-bbf5-a37ebee5a5b8"/>
            <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/item/8c01ede8-4ccd-410e-9e21-c4c37114f5f2"/>
            <wcm:displayTitle xml:lang="en">Articles List</wcm:displayTitle>
            <category label="Published" scheme="wcmrest:workflowState" term="PUBLISHED" xml:lang="en"/>
        </entry>
        <entry>
            <id>wcmrest:4ffeefcc-5539-4271-936a-7bd0ddf1644d</id>
            <title xml:lang="en">Article Toolbar</title>
            <summary xml:lang="en"></summary>
            <wcm:name>Article toolbar</wcm:name>
            <wcm:description xml:lang="en"></wcm:description>
            <wcm:type>LibraryAuthoringToolsComponent</wcm:type>
            <updated>2011-09-21T06:21:21.452Z</updated>
            <wcm:lastAccessed>2011-09-26T05:41:55.544Z</wcm:lastAccessed>
            <wcm:lastModifier>
                <wcm:distinguishedName>Replicator</wcm:distinguishedName>
            </wcm:lastModifier>
            <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/item/4ffeefcc-5539-4271-936a-7bd0ddf1644d"/>
            <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/item/8c01ede8-4ccd-410e-9e21-c4c37114f5f2"/>
            <wcm:displayTitle xml:lang="en">Article toolbar</wcm:displayTitle>
            <category label="Published" scheme="wcmrest:workflowState" term="PUBLISHED" xml:lang="en"/>
        </entry>
    </feed>
    ```


There is one additional field present in each of the entries when a recent items query is performed. This field is the last accessed date of the item. This indicates the date and time at which the item was last viewed or edited through the authoring portlet. For example:

```
`<wcm:lastAccessed>2011-09-26T05:41:55.544Z</wcm:lastAccessed>`
```

## Parameters

The following parameters, along with mime-type, are the only parameters that will work with the returned feed. All other parameters will be ignored.

|Parameter|Details|
|---------|-------|
|`sort`|The `sort` parameter is appended to queries to determine how query results are sorted. The following values can be used with the `sort` parameter.-   `accessed` <br>-   `author` <br>-   `created` <br>-   `modified` <br>-   `name` <br>-   `title` <br>The values `_ascending` or `_descending` are appended to the query to determine sort order. <br>For example, to sort a presentation template query in ascending order of creation, you would use: <br/>\``` <br>/recent-items?type=PresentationTemplate&sort=created_ascending <br/>\``` <br>To sort a presentation template query in descending order of creation, you would use:<br/>\``` <br>/recent-items?type=PresentationTemplate&sort=created_descending<br/>\``` <br> If `_ascending` or `_descending` are not specified, the results as displayed in ascending order.|
|`type`|This parameter is used to query items of a specific item type.For example, to query a list of components:<br/>\``` <br>/recent-items?type=LibraryHTMLComponent<br/>\``` <br>|
|`page`|This parameter is used with the `pagesize` parameter to define what set of results to display. For example, if `pagesize` is set to 5, and the `page` parameter is set to 2, then only results 6 - 10 are displayed.For example:<br/>\``` <br>/recent-items?type=PresentationTemplate&pagesize=5&page=2<br/>\``` <br>|
|`pagesize`|This parameter is used to restrict the number of items that are returned by a query to a set number. It can be used with the `page` parameter to return specific pages of results.For example, to restrict the number of queries to be returned to 5:<br/>\``` <br>/recent-items?type=PresentationTemplate&pagesize=5<br/>\``` <br>|


