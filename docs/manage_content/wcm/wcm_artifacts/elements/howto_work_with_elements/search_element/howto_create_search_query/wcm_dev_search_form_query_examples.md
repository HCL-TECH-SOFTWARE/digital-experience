# Search query examples

These are examples of search queries you can create by using an HTML element.

The query parameters can be set in the request parameters. For instance, a search component that is displayed on a page whose URL contained a search query `?search_query=shoes` displays search results for shoes.

## Simple search query

This is an example of a simple search query form:

|Code example|Description|
|------------|-----------|
|`<form`<br> `action='<PathCmpnt type="servlet" />`<br>`/library/sitearea/content' method="post">`|This is the form header where you specify the location of the content item containing the search element that is used to display the search result.This is typically the same content item that this HTML element is stored in.|
|`<table>`<br>`<tr><td>`<br>`<input type="text" name="search_query"/>`<br>`</td></tr>`<br>`<tr><td align="right">`<br>`<input type="submit" value="Search"/>`<br>`</td></tr>`<br>`</table>`|This is the body of the search form. Like any standard HTML form, it contains an input field and a submit button.In this example, a table has been used to format the search query form.|
|`</form>`|This closes the form.|

## Searching metadata

In this example, two more fields have been added allowing users to search both content title and author name:

|Code example|Description|
|------------|-----------|
|`<form`<br> `action='<PathCmpnt type="servlet" />`<br>`/library/sitearea/content' method="post">`|This is the form header where you specify the location of the content item containing the search element that is used to display the search result.This is typically the same content item that this HTML element is stored in.|
|`<table>`<br>`<tr>`<br>`<td>Content Title</td>`<br>`<td><input type="text" name="search_title"/></td>`<br>`</tr>`<br>`<tr>`<br>`<td>Author's Name</td>`<br>`<td><input type="text" name="search_authors"/></td>`<br>`</tr>`<br>`<tr>`<br>`<td>Content Body</td>`<br>`<td>`<br>`<input type="text" name="search_query"/>`<br>`</td></tr>`<br>
`<tr><td align="right">`<br>`<input type="submit" value="Search"/>`<br>`</td></tr>`<br>`</table>`|This is the body of the search form. Like any standard HTML form, it contains input fields and a submit button.|
|`</form>`|This closes the form.|

## Including hidden data

In this example, a hidden field has been added to restrict the search to content that use the authoring template called "Press Release":

|Code examples|Description|
|-------------|-----------|
|`<form`<br>`action='<PathCmpnt type="servlet" />`<br>`/library/sitearea/content' method="post">`|This is the form header where you specify the location of the content item containing the search element used to display the search result.This is typically the same content item that this HTML element is stored in.|
|`<input type="hidden"`<br>`name="search_authoringtemplate"`<br>`value="Press Release"/>`|Here a hidden input field has been added that searches for content that use the authoring template called "Press Release".|
|`<table>`<br>`<tr>`<br>`<td>Content Title</td>`<br>`<td><input type="text" name="search_title"/></td>`<br>`</tr>`<br>`<tr>`<br>`<td>Author's Name</td>`<br>`<td><input type="text" name="search_authors"/></td>`<br>`</tr>`<br>
`<tr>`<br>`<td>Content Body</td>`<br>`<td>`<br>`<input type="text" name="search_query"/>`<br>`</td></tr>`<br>`<tr><td align="right">`<br>`<input type="submit" value="Search"/>`<br>`</td></tr>`<br>`</table>`|This is the body of the search form. Like any standard HTML form, it contains input fields and a submit button.|
|`</form>`|This tag closes the form.|

## Setting the search query in the request attributes

The query parameters can also be set in the request attributes on the server. For instance, a search component that is displayed after the following tag is used: `[Plugin:RequestAttribute key="search_query" value="shoes" compute="once"]` displays search results for shoes.


