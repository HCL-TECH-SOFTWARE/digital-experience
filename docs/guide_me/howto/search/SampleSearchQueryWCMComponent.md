# How to implement a search query using WCM HTML Component and Search Component

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

This article describes sample steps that can be used for implementing a search query using WCM HTML Component and Search Component.

???+ info "Disclaimer of warranties"
    The following code is sample code created by HCL Corp.
    This sample code is provided to you solely for the purpose of assisting you in the development of your applications.
    The code is provided "AS IS", without warranty of any kind. HCL shall not be liable for any damages arising out of your use of the sample code, even if they have been advised of the possibility of such damages.

## Instructions

1. Create a HTML Component with these contents:

    ```js
    <script>
    function addFilter(queryIn)
    {
        return queryIn;
    }
    </script>

    <form onSubmit="this.search_query.value=addFilter(this.query.value)">
        Query: <input name="query"/>
        <input type=hidden name="search_query"/>
    </form>
    ```

2. Next create a Search Component with these contents:

    ```html
    Header:

    <table>        
        Results:
        <tr><td>
        [AttributeResource attributeName="namelink" separator=","]<br>
        [AttributeResource attributeName="summary" separator=","]
        </td></tr>

        Footer:

        <tr><td>
        </td></tr>
    </table>

    Separator:

    <tr><td bgcolor="#FFFAA" colspan="2"/></tr>

    NoResultDesign:

    There are no results for your query. Please refine your search and try again.
    ```

Be sure to select the desired collection to search when creating the Search Component.  
For this to work, you need to reference both components created above in the SAME presentation template.  
