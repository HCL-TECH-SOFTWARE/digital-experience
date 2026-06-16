# How to implement a search query using WCM HTML and search components

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

Integrating search functionality into web content structures allows users to query specific collections and display targeted results. This article describes how to implement a search query using a Web Content Manager (WCM) HTML component and a search component.

???+ info "Disclaimer of warranties"
    The following code is sample code created by HCL Corp.
    This sample code is provided to you solely for the purpose of assisting you in the development of your applications.
    The code is provided "AS IS", without warranty of any kind. HCL shall not be liable for any damages arising out of your use of the sample code, even if they have been advised of the possibility of such damages.

## Instructions

To implement a search query, perform the following steps:

1. Create an HTML component with the following contents:

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

2. Create a search component with the following contents:

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

3. Select the desired collection to search when creating the search component.

4. Reference both created components within the same presentation template for the search functionality to work.
