# Search result examples

These are examples of how to design your search results.

## Search element design example for use in a website

In this example, a table is used to lay out the search results.

|Design field|Details|Code example|
|------------|-------|------------|
|Header| |```
<table>
```

|
|Result|The attributes to display in each search result are defined here.|```
<tr><td>
    <attributeResource attributeName="namelink"/><br>
    <attributeResource attributeName="summary"/>
</td></tr>

```

|
|Separator|A separator can be used to delineate each search result.|```
<tr><td  bgcolor="#FFFAA" colspan="2"/></tr>
```

|
|Footer|A page navigation element that is stored in a component is referenced here to add page navigation to the search results.|```
    <tr><td>
        <component name="pagenavigationcomponent"/>
    </td></tr>
</table>

```

|
|No results| |There are no results for your query. Please refine your search and try again.|

## Search element design example for use in a rendering portlet

In this example, a table is used to lay out the search results.

|Design field|Details|Code example|
|------------|-------|------------|
|Header| |```
<table>
```

|
|Result|The attributes to display in each search result are defined here.When displaying search results in a rendering portlet, you must specify the page that the linked content is displayed in when opened.

A URL map to the portal page that contains the rendering portlet is required.

|```
<tr><td>
<a href="/[PORTAL_CONTEXT_ROOT]/
[PORTAL_PAGE_URL_MAPPING]/?WCM_GLOBAL_CONTEXT=
<AttributeResource attributeName="url" />">
<AttributeResource attributeName="title" /></a>
<attributeResource attributeName="summary"/>
</td></tr>

```

|
|Separator|A separator can be used to delineate each search result.|```
<tr> <td  bgcolor="#FFFAA" colspan="2"/>  </tr>
```

|
|Footer|A page navigation element that is stored in a component is referenced here to add page navigation to the search results.|```
    <tr><td>
        [component name="pagenavigationcomponent"]
    </td></tr>
</table>

```

|
|No results| |There are no results for your query. Refine your search and try again.|

## Search parameters using attribute resource tag

The following parameters can be used to display data in a search result design using an attribute resource tag:

```
<attributeResource attributeName="parameter" separator=" " format=" "/>
```

|`attributeName=authoringtemplate`|The name of the authoring template, if available, that was used to create the content item.|
|`attributeName=author`|The name or names of the authors of the content item, if any are defined. If there is more than one author, then they will be rendered with the string specified in the optional separator attribute between each value.|
|`attributeName=category`|The categories of the content item if any are defined. If there is more than one category, then they will be rendered with the string specified in the optional separator attribute between each value.|
|`attributeName=contentid`|The id of the content item.|
|`attributeName=contentpath`|The path excluding the server address, port or servlet context \(/wps/wcm\) for this search result.|
|`attributeName=date`|The value of the date field from the SIAPI result. The format of the date can be specified by using the optional format attribute. See the [Javadoc HTML documentation](../dev/reference_docs.md) for SimpleDateFormat in the Java SDK for details.|
|`attributeName=description`|The description of the content item.|
|`attributeName=effectivedate`|The effective date of the content item. The format of the date can be specified by using the optional format attribute. See the [Javadoc HTML documentation](../dev/reference_docs.md) for SimpleDateFormat in the Java SDK for details.|
|`attributeName=expirationdate`|The expiration date of the content item. The format of the date can be specified by using the optional format attribute. See the [Javadoc HTML documentation](../dev/reference_docs.md) for SimpleDateFormat in the Java SDK for details.|
|`attributeName=keywords`|The keywords of the content item if any are defined. If there is more than one keyword, then they will be rendered with the string specified in the optional separator attribute between each value.|
|`attributeName=lastmodifieddate`|The last modified date of the content item. The format of the date can be specified by using the optional format attribute. See the [Javadoc HTML documentation](../dev/reference_docs.md) for SimpleDateFormat in the Java SDK for details.|
|`attributeName=modifier`|The name of the last person to modify the content item.|
|`attributeName=name`|The name of the content item.|
|`attributeName=namelink`|This assembles a complete link based on the name of the item being returned.|
|`attributeName=owner`|The name or names of the owners of the content item, if any are defined. If there is more than one author, then they will be rendered with the string specified in the optional separator attribute between each value.|
|`attributeName=parentcontentpath`|This is used to return the content path excluding the server address, port or Servlet context for the parent content item of this search result. For example: /wps/wcm.

 This parameter is valid when the search results include a link to a file resource element in the parent content item and is used to give context to the attached file. When the search result is not for an attached file in a file resource element, this value will be an empty string.

|
|`attributeName=relevance`|The relevance “score” for this search result from the search engine.|
|`attributeName=summary`|The summary of the content item as generated by Portal Search.|
|`attributeName=title`|This is the title of a content item.|
|`attributeName=titlelink`|This assembles a complete link based on the title of the item being returned.|
|`attributeName=url`|Displays the URL of a content item. |
|`separator=" "`|Enter text or code to be used to separate multiple search results. For example: `separator=" - "`|
|`format=" "`|The format of date parameters can be set using this parameter. See the [Javadoc HTML documentation](../dev/reference_docs.md) for SimpleDateFormat in the Java SDK for details.|

