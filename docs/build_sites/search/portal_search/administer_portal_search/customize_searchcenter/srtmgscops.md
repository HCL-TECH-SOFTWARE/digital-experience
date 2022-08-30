# Managing search scopes and custom links

Get an overview of search scopes and custom links and how you can manage them.

Search Scopes: You can define Search Scopes to limit search results to specific content locations and specific document types. This enables users to target their searches better. The portal is shipped with two scopes:

-   **All sources**

    This includes documents with all features from all content sources in the search by a user.

-   **Managed Web Content**

    This restricts the user's search to sites that were created by HCL Web Content Manager. This scope is only enabled when there is a search collection that is associated with a Web Content Manager site and the site has been crawled.


You can create your own custom search scopes and specify which search locations or content sources they cover.

**Note:** If you delete a content source, then the documents that were collected from this content source remains available for search by users under all scopes, which included the content source before it was deleted. These documents are available until their expiration time ends. You can specify this expiration time under **Links expire after \(days\):** under **General Parameters** when you create the content source.

Custom Links: You can add Custom Links with web link shortcuts to search locations. This includes links to external web locations. For example, you can enable users to do direct searches to popular web search engines, such as Google or Yahoo!

Users can select the scopes and custom links from a selection menu that is provided with the search box in the theme and with the Search Center portlet.

You can add icons for the scopes and custom links. Users see these icons in the pull-down selection list of scopes with the Search box and the Search Center.

**Note:** When you create a custom link, you enter the URL to the target web search engine. Be careful to use the correct format for the URL, as the user query search terms are appended to the URL. For the correct web interface syntax, refer to the help documentation of the target search engine. In some cases it might be possible to determine the web interface syntax as follows:

1.  Perform a search with some distinctive search text on the target search engine, for example, an unusual name.
2.  Review the browser **URL** field and locate your search string. The part of the URL that precedes your search string is likely to be the Link URL for your target search engine.
3.  If your search string is not at the end of the URL, it might be helpful to edit the URL and experiment with different versions with a search string added.

Examples for web interface syntax are:

-   For Google: http://www.google.com/search?&q=
-   For Yahoo: http://search.yahoo.com/search?p=

Working with search scopes and custom links: To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**. To work with search scopes and custom links, click **Search Scopes** Portal Search displays the Search Scopes panel. It lists the search scopes and the custom links, shows their status and related information. You can do tasks on the scopes and custom links. For more information about these tasks and the available options, see the **Manage Search** portlet help.


**Related information**  


[Configuring search scopes for the Search Center portlet](../admin-system/srtcfg_sc_scopes.md)

