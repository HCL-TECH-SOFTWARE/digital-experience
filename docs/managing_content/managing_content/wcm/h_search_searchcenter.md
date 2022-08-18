# Search Center

Use the Search Center to search for documents.

You can use the Search Center to search and retrieve internal documents. Depending on what your administrator has set, you might also be able to search documents from intranet sources of your organization or from additional sources.

## Terminology

This explains some terms used in this documentation.

-   **Scope**

    Search scopes are used to group or limit searches to one or multiple content locations or document types or a combination of both. You can select scopes from the pull-down list next to the search text entry field.

-   **Facet**

    Facets are used to filter search results based on different attributes of the search results. For example, this can be by the document or file type, or by the last modified date contained in the search results. Facets are available above the search results list. You can select different values for each facet. For example, for the facet Last Modified, you can select values such as Last 30 Days or Last 12 Months.


For details about how to limit search results by scopes refer to [Searching by scopes](#sc_scopes). For details about how to refine search results by facets refer to [Searching by facets](#sc_faucets).

## Searching for content

To submit your search query, use the Search box that is available at the side of the portal theme bar.

**Note:** Depending on your installation and its customization, search might be available by other than the default means.

1.  Click the arrow near Search text input field, and select a scope to search from the drop-down list of available scopes. The Search field displays the name of scope you picked. If you do not pick a scope, All Sources \(the default\) will be searched. For details about search scopes refer to [Searching by scopes](#sc_scopes).
2.  To enter a search query, type your search string over the name of the selected scope in the entry field. For details about the search syntax refer to [Search syntax](#sc_syntax).
3.  Click the **Search** icon \(magnifying glass\) to launch your query. Search displays the items that match your search terms on the Search Center tab page. The information about the search results appears grouped by columns for relevance, title, owner, and date. For details refer to [Search result list details](#sc_res_details).
4.  Change or refine your search using one of the following methods:
    -   Refine your search by typing additional words in the Search text entry field. For details about the search syntax refer to [Search syntax](#sc_syntax).
    -   Launch a search to a different content location by selecting the search scope as required. For details refer to [Searching by scopes](#sc_scopes).
    -   Refine your search further by using the advanced search options. For details refer to [Advanced search](#sc_advanced).
    -   Refine your search by using the search result facets. For details refer to [Searching by facets](#sc_faucets).
    -   Optional: if your administrator has enabled search on metadata, you can narrow your search by specifying metadata of the searched documents. For example, you can search for documents by their title or description.
5.  Click **Close Search** to leave the search results.

## Searching by scopes

-   **Scope**

    Search scopes are used to group or limit searches to one or multiple content locations or document types or a combination of both. You can select scopes from the pull-down list next to the search text entry field.


The following search scopes are available by default:

|Search collection|Contents of Result List|
|-----------------|-----------------------|
|All Sources|Documents from Managed Web Content, from any indexed content that you have access to, and from any custom third-party links that have been configured by an administrator display in the same list. This does not pertain to external search services.|
|My Favorites|Documents from places that you have marked as your favorites. These can be public places or places that require your membership. **Note:** After you add a place to **My Favorites**, it can take up to one hour until that place is available for selection under the scope **My Favorites**.

|
|My Places|Documents originating from all places to which you have explicit membership. **Notes:**

1.  Public places, that is places which do not require membership, fall under the **All Scopes** scope.
2.  After a place is added to the **My Places** scope, for example, when you become a member to a new place, it can take up to one hour until that place is available for selection under the scope **My Places**.

|
|Managed Web Content|Documents originating from the Managed Web Content source. This scope is available only if you have a Managed Web Content site.|
|Custom links|Custom links are displayed in the pull-down selection list next to the search text entry field. They are typically third-party search facilities configured by your administrator|

The following contextual scopes are added and made available dynamically, depending on where you navigate. When you work with HCL, searching by the contextual scopes might yield the best results.

|Search collection|Contents of Result List|
|-----------------|-----------------------|
|Current\_place|When you navigate to a place, a scope to that place alone becomes available.|
|Current\_component\(s\)|When you navigate to a place or a page of a place, all components listed on that page are available by separate scopes in the scopes list. For example, this can be a Blog.|
|This\_folder|Documents originating from the Document Manager folder. This collection type becomes available after you selected to search a PDM folder from the folder menu. You can launch the Search Center from Document Manager. To do this, hover over the down arrow icon of the folder that you want to search, left click and select **More Actions** \> **Search This Folder**.|

## Search syntax

To improve the effectiveness of your search queries, follow these guidelines:

-   Use more than one word in your search queries.

    The search engine employs a free-text ranking mechanism to locate the best matches for your query. Documents containing more query terms and in close proximity to each other, will receive a higher score.

-   Use quotation marks \(" "\) to retrieve an exact match for your search string.

    When you use quotation marks, Search checks the position of words in the quoted phrase to make sure they are next to each other and in the order entered, for example:

    -   Entering the phrase stock discount can be less precise since it will find results with the word *stock* or the word *discount*.
    -   Entering the phrase "stock discount" returns results where this phrase appears exactly as you entered it.
    When using quotation marks, the following rules apply:

    -   If you forget to use the closing quotation mark, Portal Search supplements the closing quotation mark and treats your search as a phrase search.
    -   If you search for strings with special query characters, such as a blank or a colon \( : \), you must enclose the whole search string within the quotation marks.
    -   Single quotation marks \('\) are not valid operators. Always use double quotation marks \("\).
-   Use the plus sign \(+\) or minus sign \(-\) symbolic operators to help narrow the search. A plus sign \(+\) in front of a term guarantees that every document contains that term. A minus sign \(-\) in front of a term ensures that every document returned excludes that term, for example: `"status reports" -weekly +monthly`.

    The minus sign eliminates or rejects the weekly status reports from the returned result set while the plus sign narrows the search to monthly reports.

    **Note:** Do not use the minus sign \(-\) symbolic operator with a one-word search query alone. The minus sign \(-\) works only in combination with other search terms. For example, the following queries return the same results:

    -   -weekly +monthly
    -   -weekly monthly
    -   +monthly -weekly
    -   monthly -weekly
-   Use an asterisk \(\*\) as a trailing wildcard at the end of a search term, in the format wildcar\*, but not \*ildcard or wil\*card.
-   You can search documents by date and date ranges. The used date formats can be changed by the Portal administrator. Dates can be specified by using the format yyy-MM-dd. You can also specify the time as well as the date by using the format yyy-MM-dd,hh:mm. The following search terms are supported:

    -   **update\_date:"yyyy-MM-dd"**

        Finds all documents that were updated on the specified day.

    -   **update\_date:"yyyy-MM-dd,hh:mm"**

        Finds all documents that were updated in the specified minute on the specified day. By default, the hour and minute are specified in the 24-hour format. For instance, the number `18` specifies 6 PM. However, you can specify a custom format that uses the 12-hour time format instead.

    -   **\#update\_date::\>=yyyy-MM-dd<yyyy-MM-dd**

        Finds all documents that were updated between the two specified dates. For instance, if you used the following search term \#update\_date::\>=2014-10-14<2014-10-19, documents that were updated between October 14, 2014 and October 19, 2014 would be returned. Range queries support the following characters:

        -   \>
        -   \>=
        -   <
        -   <=
        If a beginning boundary is specified, an ending boundary can be specified as well, but is not required. Similarly, if an ending boundary is specified, a beginning boundary can be specified as well. The range can begin with either the ending or beginning boundary.

    Date queries can be combined with other terms. For instance, to find all status reports from 2014, you can use the following query: "status reports" \#creation\_date::\>=2014-01-01<2015-01-01

-   The Did You Mean? feature is now included in WebSphere® Portal v8.5 or later. If your search query has a typographical error, the Did You Mean? feature suggests different search results other than the search terms that you entered. The Did You Mean? feature works by recognizing and retrieving similar terms that are used in the indexed data. Since the Did You Mean? feature is based on indexed terms, the use of “AND” in your search query might return fewer suggested search results.

Search has the following limitations:

-   Search is not case-sensitive.

    For example, if you search for content about the country China, the result set might include other documents associated with china \(of the pottery kind\) unless you include or exclude certain words using symbolic operators. For example, `+china -pottery +asia`.

-   Search ignores punctuation, such as periods or commas, unless they are enclosed in a quoted phrase.
-   Search does not support the use of the logical operators AND, OR, and NOT.
-   The less than \( **<** \) and greater than \( **\>** \) symbols are special HTML characters that Search cannot handle.
-   You cannot search for the values of date and time properties.

## Search result list details

The following additional information about the search results is shown:

|Data|Description|
|----|-----------|
|Relevance|A graphical representation indicates the relevance rank of each item returned in the result set.|
|Title|This displays the item title. Results typically display the file type icon, or the source icon, if the result is not a file, with the returned result title as a link. Clicking the result title leaves Search and takes you to that search result. Comments are listed together with the main result component. For example, comments to an entry of a blog entry XYZ are listed as **Comment on Blog Entry XYZ**.|
|Person|This shows the name of the person most recently associated with the result, such as owner, contributor, sender, or directory listing.|
|Date|This shows when an item was last updated.|
|Summary|This shows a summary of a returned result item if one has been created by the owner of the returned item.|

If the option **Show details** is on, the following additional information is shown in the Title column:

-   **Place:**

    The place to which the search result belongs.

-   **Blog:**

    The blog to which the search result belongs.

-   **Wiki:**

    The wiki to which the search result belongs.

-   **Similar Documents by Title**

    Clicking this link starts a new search for documents that contain the same terms in their title as the title of the listed document.

-   **Documents of the Same Owner**

    Clicking this link results in a list of documents by the same owner.


## Advanced search

For more advanced searches, use one of the following options:

-   Click the **Show** link for the **Advanced Options**. You can also **Hide** the advanced search options.
-   Select the **Advanced Search** option from the Search box menu.

In both cases the Search Center shows more options for search:

-   **Title:** Refine your search by adding a title here.
-   **Owner:** Refine your search by specifying one or more owners. The following choices are available as links:

    -   **Select users**: Use this link to select one or more users as owners of the documents that you search. A dialog window pops up and allows you to search and select users.
    -   **Current user**: Use this link to search documents that you own yourself.
    To remove a user from the search restriction, click the **x** icon next to the appropriate user.

    The search options Title and Owner apply to all search results.

-   **Document Types:** Click the link **Select document types**. The dialog window for selecting a document type opens. Select a document type as required.
-   **Categories:** Click the link **Select categories**. The dialog window for selecting categories opens. Select a category. You can select multiple categories in the same action.
-   **Other Document Properties:** Click the link **Select properties**. The dialog window for selecting properties opens. Select a property and specify a value for it. The properties are grouped by document type. Your search will be restricted to results with the value that you specified for that property. You can select multiple properties in the same action. You cannot select date and time properties.

**Note:** When you search Places in HCL Version 8.0, the Advanced search options can show the document owner's Distinguished Name rather than the real name. In this case contact your administrator.

## Searching by facets

-   **Facet**

    Facets are used to filter search results based on different attributes of the search results. For example, this can be by the document or file type, or by the last modified date contained in the search results. Facets are available above the search results list. You can select different values for each facet. For example, for the facet Last Modified, you can select values such as Last 30 Days or Last 12 Months.


The Search Center provides facets for search over common attributes. The facets are shown above the search result list. They are available contextually, based on what type of results your search gave. Click the facets to refine your search to variable degrees. Examples of available facets are:

-   **Last Modified.** Use this to refine your search to one of the available time spans, such as **Last 7 Days, Last 30 Days, Last 3 Months, Last 6 Months, Last 12 Months, Older**. Search displays only time spans for which search results were found.
-   **File Type.** Use this to refine your search to documents of a specific file type and file name extension, such as .PDF, .html, or .Doc.
-   **Component.** Use this to refine your search to results from a specific component. This can be a **Blog, Discussion, Document, List**, or **Wiki**. Comments are listed under the component to which they were written; for example, the **Blog** facet lists results for blogs and blog comments.
-   **Document Type.** Use this to refine your search to documents of a specific Document Manager document type, such as a contract or an order form.

The count of results from your search for each facet is shown in parentheses after that facet.

When you click the facets, the selected facet is shown at the top under **Selections** and the search result list is restricted accordingly.

To refine your search, you can select one or multiple facets.

To return and view a less restricted search result list, click the link **Remove selection** or the square box icon next to the appropriate facet. To clear **all** facet restrictions and return to the full search result list, click **Clear selections**.

**Parent topic:**[Search](../wcm/wcm_dev_search.md)

**Previous topic:**[Searching pages](../admin-system/mp_search_pages.md)

**Next topic:**[Searching for tagged content](../admin-system/tag_rate_search.md)

**References:**  


[Portal Search](../panel_help/welcome_search.md)

