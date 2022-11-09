# Search result examples

These are examples of how to design your search results.

## Search element design example for use in a website

In this example, a table is used to lay out the search results.

**Table 1. Search element design example for use in a website**

<table>
<tr>
<td> <b>Design field</b> </td> <td> <b>Details</b> </td><td> <b>Code example</b> </td>
</tr>
<tr>
<td> 

Header

</td>
<td> 

</td>
<td> 

```
<table>
```

</td>
</tr>
<tr>
<td> 

Result

</td>
<td> 

The attributes to display in each search result are defined here.

</td>
<td> 

```
<tr><td>
    <attributeResource attributeName="namelink"/><br>
    <attributeResource attributeName="summary"/>
</td></tr>
```

</td>
</tr>
<tr>
<td> 

Separator

</td>
<td> 

A separator can be used to delineate each search result.

</td>
<td> 

```
<tr><td  bgcolor="#FFFAA" colspan="2"/></tr>
```

</td>
</tr>
<tr>
<td> 

Footer

</td>
<td> 

A page navigation element that is stored in a component is referenced here to add page navigation to the search results.

</td>
<td> 

```
    <tr><td>
        <component name="pagenavigationcomponent"/>
    </td></tr>
</table>
```

</td>
</tr>
<tr>
<td> 

No results

</td>
<td> 

</td>
<td> 

There are no results for your query. Please refine your search and try again.

</td>
</tr>
</table>

## Search element design example for use in a rendering portlet

In this example, a table is used to lay out the search results.

**Table 2. Search element design example for use in a rendering portlet**

<table>
<tr>
<td> <b>Design field</b> </td> <td> <b>Details</b> </td><td> <b>Code example</b> </td>
</tr>
<tr>
<td> 

Header

</td>
<td> 

</td>
<td> 

```
<table>
```

</td>
</tr>
<tr>
<td> 

Result

</td>
<td> 

The attributes to display in each search result are defined here.
When displaying search results in a rendering portlet, you must specify the page that the linked content is displayed in when opened.

A URL map to the portal page that contains the rendering portlet is required.

</td>
<td> 

```
<tr><td>
<a href="/[PORTAL_CONTEXT_ROOT]/
[PORTAL_PAGE_URL_MAPPING]/?WCM_GLOBAL_CONTEXT=
<AttributeResource attributeName="url" />">
<AttributeResource attributeName="title" /></a>
<attributeResource attributeName="summary"/>
</td></tr>
```

</td>
</tr>
<tr>
<td> 

Separator

</td>
<td> 

A separator can be used to delineate each search result.

</td>
<td> 

```
<tr> <td  bgcolor="#FFFAA" colspan="2"/>  </tr>
```

</td>
</tr>
<tr>
<td> 

Footer

</td>
<td> 

A page navigation element that is stored in a component is referenced here to add page navigation to the search results.

</td>
<td> 

```
    <tr><td>
        [component name="pagenavigationcomponent"]
    </td></tr>
</table>
```

</td>
</tr>
<tr>
<td> 

No results

</td>
<td> 

</td>
<td> 

There are no results for your query. Please refine your search and try again.

</td>
</tr>
</table>

## Search parameters using attribute resource tag

The following parameters can be used to display data in a search result design using an attribute resource tag:

```
<attributeResource attributeName="parameter" separator=" " format=" "/>
```

<table>
<tr>
<td>

```
attributeName=authoringtemplate
```

</td> 
<td> 

The name of the authoring template, if available, that was used to create the content item.

</td>
</tr>
<tr>
<td>

```
attributeName=author
```

</td> 
<td> 

The name or names of the authors of the content item, if any are defined. If there is more than one author, then they will be rendered with the string specified in the optional separator attribute between each value.

</td>
</tr>
<tr>
<td>

```
attributeName=category
```

</td> 
<td> 

The categories of the content item if any are defined. If there is more than one category, then they will be rendered with the string specified in the optional separator attribute between each value.

</td>
</tr>
<tr>
<td>

```
attributeName=contentid
```

</td> 
<td> 

The id of the content item.

</td>
</tr>
<tr>
<td>

```
attributeName=contentpath
```

</td> 
<td> 

The path excluding the server address, port or servlet context (`/wps/wcm`) for this search result.

</td>
</tr>
<tr>
<td>

```
attributeName=date
```

</td> 
<td> 

The value of the date field from the SIAPI result. The format of the date can be specified by using the optional format attribute. See the [Javadoc HTML documentation](https://help.hcltechsw.com/digital-experience/8.5/dev/reference_docs.html) for `SimpleDateFormat` in the Java SDK for details.

</td>
</tr>
<tr>
<td>

```
attributeName=description
```

</td> 
<td> 

The description of the content item.

</td>
</tr>
<tr>
<td>

```
attributeName=effectivedate
```

</td> 
<td> 

The effective date of the content item. The format of the date can be specified by using the optional format attribute. See the [Javadoc HTML documentation](https://help.hcltechsw.com/digital-experience/8.5/dev/reference_docs.html) for `SimpleDateFormat` in the Java SDK for details.

</td>
</tr>

<tr>
<td>

```
attributeName=expirationdate
```

</td> 
<td> 

The expiration date of the content item. The format of the date can be specified by using the optional format attribute. See the [Javadoc HTML documentation](https://help.hcltechsw.com/digital-experience/8.5/dev/reference_docs.html) for `SimpleDateFormat` in the Java SDK for details.

</td>
</tr>

<tr>
<td>

```
attributeName=keywords
```

</td> 
<td> 

The keywords of the content item if any are defined. If there is more than one keyword, then they will be rendered with the string specified in the optional separator attribute between each value.

</td>
</tr>

<tr>
<td>

```
attributeName=lastmodifieddate
```

</td> 
<td> 

The last modified date of the content item. The format of the date can be specified by using the optional format attribute. See the [Javadoc HTML documentation](https://help.hcltechsw.com/digital-experience/8.5/dev/reference_docs.html) for `SimpleDateFormat` in the Java SDK for details.

</td>
</tr>
<tr>
<td>

```
attributeName=modifier
```

</td> 
<td> 

The name of the last person to modify the content item.

</td>
</tr>
<tr>
<td>

```
attributeName=name
```

</td> 
<td> 

The name of the content item.

</td>
</tr>

<tr>
<td>

```
attributeName=namelink
```

</td> 
<td> 

This assembles a complete link based on the name of the item being returned.

</td>
</tr>

<tr>
<td>

```
attributeName=owner
```

</td> 
<td> 

The name or names of the owners of the content item, if any are defined. If there is more than one author, then they will be rendered with the string specified in the optional separator attribute between each value.

</td>
</tr>

<tr>
<td>

```
attributeName=parentcontentpath
```

</td> 
<td> 

This is used to return the content path excluding the server address, port or Servlet context for the parent content item of this search result. For example: `/wps/wcm`.

This parameter is valid when the search results include a link to a file resource element in the parent content item and is used to give context to the attached file. When the search result is not for an attached file in a file resource element, this value will be an empty string.

</td>
</tr>

<tr>
<td>

```
attributeName=relevance
```

</td> 
<td> 

The relevance “score” for this search result from the search engine.

</td>
</tr>

<tr>
<td>

```
attributeName=summary
```

</td> 
<td> 

The summary of the content item as generated by Portal Search.

</td>
</tr>

<tr>
<td>

```
attributeName=title
```

</td> 
<td> 

This is the title of a content item.

</td>
</tr>

<tr>
<td>

```
attributeName=titlelink
```

</td> 
<td> 

This assembles a complete link based on the title of the item being returned.

</td>
</tr>

<tr>
<td>

```
attributeName=url
```

</td> 
<td> 

Displays the URL of a content item. 

</td>
</tr>

<tr>
<td>

```
separator=" "
```

</td> 
<td> 

Enter text or code to be used to separate multiple search results. For example: `separator=" - "`

</td>
</tr>

<tr>
<td>

```
format=" "
```

</td> 
<td> 

The format of date parameters can be set using this parameter. See the [Javadoc HTML documentation](https://help.hcltechsw.com/digital-experience/8.5/dev/reference_docs.html) for `SimpleDateFormat` in the Java SDK for details.

</td>
</tr>


</table>


