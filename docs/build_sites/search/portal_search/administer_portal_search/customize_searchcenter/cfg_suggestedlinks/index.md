# Adding and configuring suggested links

As an administrator you can promote specific pages, documents, or other pieces of content by adding search keywords to them in the search results list. The portal then lists these documents as suggested links.

-   You must be logged in as an administrator to add the Suggested Links portlet to the search center.
-   Ensure that tagging is enabled. For more information, see [Tagging and rating](../../../../../tagging_rating/index.md).
-   Ensure that Dojo tagging and rating options are enabled for your Search and Tag Center profile. For more information, see [Enabling and disabling the Dojo tagging and rating options for additional profiles](../../../../../tagging_rating/cfg_reference/tag_rate_nbldsbl_dojo_options.md).

To add or edit keywords for suggested links, proceed as follows:

1.  Use the portal Search Center to search for the kind of documents that you want to promote. The Search Center lists the documents in the search results list.

2.  Click the option **Edit keywords for Suggested Links** for the document that you want to promote. The Search Center opens a dialog window named **Edit keywords for Suggested Links**. This option is available only for users with the administrator role on the Search Center.

3.  Add one or more keywords to the selected document. Separate the individual keywords by blanks. You can also edit or delete keywords as required.

4.  Click **Save**.

5.  Add more keywords as required and save them.

6.  Click **Close**.


-   When your users search for a search string that you added to documents as a keyword, these documents display in the **Suggested Links** portlet.
-   For assigned administrators, the **Suggested Links** portlet provides an **Edit**link for each suggested link. When an administrator clicks that link, the portlet opens the dialog box **Edit keywords for Suggested Links**. The administrator can now add more tags or delete existing tags. This administrator role assignment must be the same as for the Search Center to display the option **Edit keywords for Suggested Links**.

Adding keywords to documents uses the portal tagging functions. You can configure the Tag Cloud to display a **Suggested links** tab and a corresponding view to users. When you click that tab, the tag cloud shows only tags that you added as keywords, and the related documents to which those keywords were added. You can use the **Suggested Links** tab of the Tag Center to view all suggested links that you created by adding your keywords.

In a typical example scenario, you can work in two stages:

1.  To add new tags or edit or delete existing keywords, you can use the Search Center, either from the main results view or from the Suggested Links portlet.
2.  To browse an overview of the keywords that exist already, you can use the Suggested Links tab of the Tag Center. You can add and remove keywords from documents as required.

!!! note
    Suggested links are case-sensitive. The tagging and rating normalization parameter `com.ibm.wps.cp.tagging.normalization.displayNormalizedNames` does not apply to suggested links. For example, if an administrator adds a suggested link of `WebSphere`, a user search for `websphere` does not return `WebSphere` as a result. This action is independent of whether the tagging and rating parameter `com.ibm.wps.cp.tagging.normalization.displayNormalizedNames` is set to `true` or `false`.


-   **[Configuring the Suggested Links view](srtrecommendedlinks.md)**  
Customize the display of search results to show users the preferred or recommended results and associated links.


