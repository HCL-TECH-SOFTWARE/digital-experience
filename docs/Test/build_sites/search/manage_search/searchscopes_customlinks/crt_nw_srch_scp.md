---
id: crt_nw_srch_scp
title: Creating a search scope
---


Create a search scope by completing the following steps.

1.  To create a new search scope, click the **New Scope** to display the New Search scope page. Enter the needed data in the fields and select from the available options.

2.  Enter a name for the new search scope in the **Scope Name** field. The name must be unique within the current portal or virtual portal.

3.  Provide a description of the scope in the description field.

4.  Enter the URL location where the portal can locate the scope icon that you want to be displayed with the search options in the Custom Icon URL field. If the icon file exists in the default icon directory wps/images/icons, you need to type only the icon file name. If the icon file is in a different directory path type the absolute file path with the file name. Click **Check icon path** to ensure that the icon is available at the URL you specified.

5.  Set the status of the search scope as you require. To make the scope available to users, set the status to Active.

6.  Customize the visibility of the search scope available to anonymous users. Selecting **Yes** makes the search scope available to anonymous users who use portal without logging in and selecting **No** makes the search scope available only to authenticated users.

7.  You can enter a query text that is invisibly appended to all searches in this scope. Searches return results that match both the user search and the query text that you enter in this field. Both sets of results are weighted with the same relevance in the result list. The query text that you enter must conform to the syntax rules of entering a query in the Search Center.

8.  Select the locations as needed. Only documents from these search locations or content sources are searched when users select this scope for their search.

    !!! note
        The location tree also shows content sources that are deleted if they still contain documents in the collection. After a deleted content source has no documents, the cleanup daemon removes it from the location tree.

    !!! note
        To set names and descriptions for the search scope, you must create and save the scope first. Then, locate the scope on the scopes list and edit the scope by clicking the **Edit** icon. The option for setting names and descriptions in other locales is available only on the Edit search scope page.

    !!! note
        If you modify a content source that belongs to search scope, update the scope manually to make sure that the scope still covers that content source. Especially if you changed the name of the content source, edit the scope and make sure that it is still listed there if not add it again.

9.  Select the features as needed. Only documents of the selected content source types are searched and returned.


