---
id: wcm_dev_search_form_query_filtering
title: Filtering search results
---
import useBaseUrl from '@docusaurus/useBaseUrl';



Often you want certain types of content to not be shown in your search results. By filtering your search results to ensure that certain types of content are not displayed.

A search component uses a set of fields, such as "search\_query", "search\_categories" and "search\_authoringtemplate", to construct a single query to send to the search engine. This constructed search does not explicitly perform a filter. It does not mark any of the criteria as required and therefore the search that is performed is a "best fit" search where the results can match any of the criteria that are mentioned, but is ordered so that the best fitting results are displayed first.

If you want to force the results to be filtered, you must construct the query yourself. This allows you to force either that the results must use a specified parameter, or that they must not use a specified parameter. You can then send the constructed query to the search component by using the "search\_query" field, which is passed on to the search engine.

## Filtering by authoring template

To include only content that is using a specific authoring template, append this string to the end of the search query:

```
^authoringtemplate::"Template Title" 
```

To specify multiple authoring templates, append the appropriate string to the end of the search query:

-   For query results that match either template:

    ```
    ^(authoringtemplate::"Template Title 1" authoringtemplate::"Template Title 2")
    
    ```

-   For query results that match all templates:

    ```
    ^(+authoringtemplate::"Template Title 1"  +authoringtemplate::"Template Title 2")
    ```


To include only content that does not use a specific authoring template, append this string to the search query:

```
-authoringtemplate::"Template Title" 
```

To exclude multiple authoring templates, append this string to the end of the search query:

```
-authoringtemplate::"Template Title 1" -authoringtemplate::"Template Title 2" 
```

You can also construct your query by using some JavaScript. For example:

```
<script language="Javascript">

function addFilter(queryIn)

{

return queryIn + ' -authoringtemplate::"Template Title";

}

</script> 
```

In your search form, hide the "search\_query" query field and compute it during the submit by using what the user typed in plus the template filter:

```
<form onSubmit="this.search_query.value=addFilter(this.query.value)">

Query: <input name="query"/>

<input type=hidden name="search_query"/>

</form> 
```

## Filtering by content path

To include only content that is on a specific path, append this string to the end of the search query:

```
^contentpath::"/LibraryName/SiteName/SiteArea1Name/SiteArea1.1Name" 
```

To include only content that is not on a specific path, append this string to the search query:

```
-contentpath::"/LibraryName/SiteName/SiteArea1Name/SiteArea1.1Name"
```

You can also construct your query by using some JavaScript. For example:

```
<script language="Javascript">

function addFilter(queryIn)

{

return queryIn + ' -contentpath::"/LibraryName/SiteName/SiteArea1Name/SiteArea1.1Name";

}

</script>  
```

In your search form, hide the "search\_query" query field and compute it during the submit by using what the user typed in plus the path filter:

```
<form onSubmit="this.search_query.value=addFilter(this.query.value)">

Query: <input name="query"/>

<input type=hidden name="search_query"/>

</form>  
```

