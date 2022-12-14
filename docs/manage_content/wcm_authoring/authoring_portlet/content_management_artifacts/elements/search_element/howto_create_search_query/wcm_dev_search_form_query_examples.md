# Search query examples

These are examples of search queries you can create by using an HTML element.

The query parameters can be set in the request parameters. For instance, a search component that is displayed on a page whose URL contained a search query `?search_query=shoes` displays search results for shoes.

## Simple search query

This is an example of a simple search query form:

**Table 1. Simple search query**

<table>
<tr>
<td> <b>Code example</b> </td> <td> <b>Description</b> </td>
</tr>
<tr>
<td> 

```
<form 
action='<PathCmpnt type="servlet" />
/library/sitearea/content' method="post">
```

</td>
<td> 

This is the form header where you specify the location of the content item containing the search element that is used to display the search result.
This is typically the same content item that this HTML element is stored in.

</td>
</tr>
<tr>
<td> 

```
<table>
   <tr><td>
        <input type="text" name="search_query"/>
    </td></tr>
    <tr><td align="right">
        <input type="submit" value="Search"/>
    </td></tr>
</table>
``` 

</td>
<td> 

This is the body of the search form. Like any standard HTML form, it contains an input field and a submit button.
In this example, a table has been used to format the search query form.

</td>
</tr>
<tr>
<td> 

```
</form>
``` 

</td>
<td> 

This closes the form.

</td>
</tr>
</table>

## Searching metadata

In this example, two more fields have been added allowing users to search both content title and author name:

**Table 2. Searching metadata**

<table>
<tr>
<td> <b>Code example</b> </td> <td> <b>Description</b> </td>
</tr>
<tr>
<td> 

```
<form 
action='<PathCmpnt type="servlet" />
/library/sitearea/content' method="post">
```

</td>
<td> 

This is the form header where you specify the location of the content item containing the search element that is used to display the search result.
This is typically the same content item that this HTML element is stored in.

</td>
</tr>
<tr>
<td> 

```
<table>
    <tr>
        <td>Content Title</td>
        <td><input type="text" name="search_title"/></td>
    </tr>
    <tr>
        <td>Author's Name</td>
        <td><input type="text" name="search_authors"/></td>
    </tr>
    <tr>
        <td>Content Body</td>
        <td>
        <input type="text" name="search_query"/>
    </td></tr>
        <tr><td align="right">
        <input type="submit" value="Search"/>
    </td></tr>
</table>
``` 

</td>
<td> 

This is the body of the search form. Like any standard HTML form, it contains input fields and a submit button.

</td>
</tr>
<tr>
<td> 

```
</form>
``` 

</td>
<td> 

This closes the form.

</td>
</tr>
</table>

## Including hidden data

In this example, a hidden field has been added to restrict the search to content that use the authoring template called "Press Release":

**Table 3. Including hidden data**

<table>
<tr>
<td> <b>Code example</b> </td> <td> <b>Description</b> </td>
</tr>
<tr>
<td> 

```
<form 
action='<PathCmpnt type="servlet" />
/library/sitearea/content' method="post">
```

</td>
<td> 

This is the form header where you specify the location of the content item containing the search element used to display the search result.
This is typically the same content item that this HTML element is stored in.

</td>
</tr>
<tr>
<td> 

```
<input type="hidden"
       name="search_authoringtemplate"
       value="Press Release"/>
``` 

</td>
<td> 

Here a hidden input field has been added that searches for content that use the authoring template called "Press Release".

</td>
</tr>
<tr>
<td> 

```
<table>
    <tr>
        <td>Content Title</td>
        <td><input type="text" name="search_title"/></td>
    </tr>
    <tr>
        <td>Author's Name</td>
        <td><input type="text" name="search_authors"/></td>
    </tr>
    <tr>
        <td>Content Body</td>
        <td>
        <input type="text" name="search_query"/>
    </td></tr>
    <tr><td align="right">
        <input type="submit" value="Search"/>
    </td></tr>
</table>
``` 

</td>
<td> 

This is the body of the search form. Like any standard HTML form, it contains input fields and a submit button.

</td>
</tr>
<tr>
<td> 

```
</form>
``` 

</td>
<td> 

This closes the form.

</td>
</tr>
</table>

## Setting the search query in the request attributes

The query parameters can also be set in the request attributes on the server. For instance, a search component that is displayed after the following tag is used displays search results for shoes: 

```
[Plugin:RequestAttribute key="search_query" value="shoes" compute="once"]
```


