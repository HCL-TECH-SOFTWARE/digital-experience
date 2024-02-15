# How to use REST to work with favorite items

You can use REST service to display a list of favorite items. This function is the equivalent of the Favorite Items view in the library explorer.

-   **URI:**

    `/favorite-items`

-   **Example:**

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm">
        <id>wcmrest:favorite-items</id>
        <title>wcmrest:favorite-items</title>
        <updated>2012-01-31T01:19:00.564Z</updated>
        <entry>
            <id>wcmrest:438dc2be-dbda-40bb-ad78-3c0f4bd11107</id>
            <title lang="en">Sample Article 2</title>
            <wcm:displayTitle lang="en">Sample Article 2</wcm:displayTitle>
            <summary lang="en"></summary>
            <wcm:name>Sample Article 2</wcm:name>
            <wcm:type>Content</wcm:type>
            <updated>2012-01-24T01:13:45.194Z</updated>
            <wcm:lastModifier>
                <wcm:distinguishedName>Replicator</wcm:distinguishedName>
            </wcm:lastModifier>
            <link label="Edit" rel="edit" href="/wps/mycontenthandler/!ut/p/digest!PQo5Yhy68oeppWcEz2sddA/wcmrest/Content/438dc2be-dbda-40bb-ad78-3c0f4bd11107" lang="en"/>
            <link label="Read" rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!PQo5Yhy68oeppWcEz2sddA/wcmrest/Content/438dc2be-dbda-40bb-ad78-3c0f4bd11107" lang="en"/>
            <link label="Library" rel="library" href="/wps/mycontenthandler/!ut/p/digest!PQo5Yhy68oeppWcEz2sddA/wcmrest/item/a423287f-b0ce-4ee3-9c95-aa0939382228" lang="en"/>
            <category label="Published" scheme="wcmrest:workflowState" term="PUBLISHED" lang="en"/>
        </entry>
        <entry>
            <id>wcmrest:715cd5e8-ec36-420b-ad1c-fff80f39462b</id>
            <title lang="en">Sample Article</title>
            <wcm:displayTitle lang="en">Sample Article</wcm:displayTitle>
            <summary lang="en"></summary>
            <wcm:name>Sample Article</wcm:name>
            <wcm:type>Content</wcm:type>
            <updated>2012-01-24T01:13:47.981Z</updated>
            <wcm:lastModifier>
                <wcm:distinguishedName>Replicator</wcm:distinguishedName>
            </wcm:lastModifier>
            <link label="Edit" rel="edit" href="/wps/mycontenthandler/!ut/p/digest!PQo5Yhy68oeppWcEz2sddA/wcmrest/Content/715cd5e8-ec36-420b-ad1c-fff80f39462b" lang="en"/>
            <link label="Read" rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!PQo5Yhy68oeppWcEz2sddA/wcmrest/Content/715cd5e8-ec36-420b-ad1c-fff80f39462b" lang="en"/>
            <link label="Library" rel="library" href="/wps/mycontenthandler/!ut/p/digest!PQo5Yhy68oeppWcEz2sddA/wcmrest/item/a423287f-b0ce-4ee3-9c95-aa0939382228" lang="en"/>
            <category label="Published" scheme="wcmrest:workflowState" term="PUBLISHED" lang="en"/>
        </entry>
    </feed>
    ```


## Parameters

The following parameters, along with mime-type, are the only parameters that work with the returned feed. All other parameters are ignored.

|Parameter|Details|
|---------|-------|
|`sort`|The `sort` parameter is appended to queries to determine how query results are sorted. The following values can be used with the `sort` parameter.-   `author`
-   `created`
-   `modified`
-   `name`
-   `title`

The values `_ascending` or `_descending` are appended to the query to determine sort order.

For example, to sort a presentation template query in ascending order of creation, you would use:

```
/favorite-items?type=PresentationTemplate&sort=created_ascending
```

To sort a presentation template query in descending order of creation, you would use:

```
/favorite-items?type=PresentationTemplate&sort=created_descending
```

If `_ascending` or `_descending` are not specified, the results as displayed in ascending order.

|
|`type`|This parameter is used to query items of a specific item type.For example, to query a list of components:

```
`/favorite-items?type=LibraryHTMLComponent`
```

|
|`page`|This parameter is used with the `pagesize` parameter to define what set of results to display. For example, if `pagesize` is set to 5, and the `page` parameter is set to 2, then only results 6 - 10 are displayed.For example:

```
/favorite-items?type=PresentationTemplate&pagesize=5&page=2
```

|
|`pagesize`|This parameter is used to restrict the number of items that are returned by a query to a set number. It can be used with the `page` parameter to return specific pages of results.For example, to restrict the number of queries to be returned to 5:

```
/favorite-items?type=PresentationTemplate&pagesize=5
```

|

## Adding and removing favorite items

For item types that have an explicit REST URI, such as types that can be created or updated, the item can be added by performing an HTTP PUT to update the item, with the PUT request containing the favorites category.

For example:

```
HTTP 1.1 PUT /wps/mycontenthandler/wcmrest/LibraryHTMLComponent/47018149-fc6b-46af-a54d-1eab89a6fed7
<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm">
  ... data ...
    <category scheme="wcmrest:favorite" term="true" lang="en"/>
    ... data ...
</entry>
```

-   `term="true"` will add an item to the list of favorite items.
-   `term="false"` will remove an item from the list of favorite items.
-   If the "term" parameter is not present, the item will be removed from the list of favorite items.

For items that do not have an explicit REST URI, an HTTP POST request can be made specifying the generic URI of the item. For this to work the item must be created already.

For example:

-   **Adding:**

    ```
    HTTP 1.1 POST /wps/mycontenthandler/wcmrest/favorite-items/additem?item-uri=/wps/mycontenthandler/!ut/p/digest!yGIcBv5sO9Vb0EY9LLhJyQ/wcmrest/item/65a46943-ed1c-4f5d-b497-03c18886ca8e
    ```

-   **Removing:**

    ```
    HTTP 1.1 POST /wps/mycontenthandler/wcmrest/favorite-items/removeitem?item-uri=/wps/mycontenthandler/!ut/p/digest!yGIcBv5sO9Vb0EY9LLhJyQ/wcmrest/item/65a46943-ed1c-4f5d-b497-03c18886ca8e
    ```


!!! note
    The item-uri parameter specifies the item to add, and can be in the expanded form, as shown in the previous examples, or the compact form. For example:

```
wcmrest:item/65a46943-ed1c-4f5d-b497-03c18886ca8e
```


