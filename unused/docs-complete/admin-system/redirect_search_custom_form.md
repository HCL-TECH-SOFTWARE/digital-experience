# Redirecting search requests from a custom search form to the Search Center 

If you plan to develop a custom search form, you might want to redirect search requests issued by the search form to the Search Center.

The following example form implements a **Search** feature:

```
<form name="myQueryForm" method="get" action=".">
     <input type="hidden" name="uri" value="searchCenter:query"> 
     <input type="hidden" name="contentNode" value="ibm.portal.Search Center">
     <input type="hidden" name="layoutNode" value="ibm.portal.Search Center Portlet Window">
     <input type="text" name="query"> 
     <input type="Submit" name="SearchButton" value="Search">
</form>
```

If a user selects **Search**, the form sends a request to the Portal server. The Portal server redirects the request to the Search Center by using the following parameters:

-   **uri**

    This parameter must be set to `searchCenter:query` to address the query functionality of the Search Center portlet.

-   **contentNode**

    This parameter is optional and specifies the unique name of the page where the Search Center portlet is placed. The default value is `ibm.portal.Search Center.`

-   **layoutNode**

    This parameter is optional and specifies the unique name of the Search Center portlet window. The default value is `ibm.portal.Search Center Portlet Window`.

-   **query**

    The Search Center uses the value of this parameter to search for the terms that a user specified.


If you placed the Search Center on a different page, for example, a public page, the values for the parameters contentNode and layoutNode might be different.

For more information, see *Placing the Search Center on a public portal page*.

**Parent topic:**[Search ](../wcm/wcm_dev_search.md)

**Previous topic:**[Configuring your custom portal themes to include the search box ](../admin-system/srcconfthmsforsrch.md)

**Next topic:**[Remote search service ](../admin-system/srcusgrmtsrchsrv.md)

