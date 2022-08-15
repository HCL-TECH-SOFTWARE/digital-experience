# Indexing web content in a multilingual environment

Learn about the best practices for indexing web content if you are working with a multilingual Web Content Manager site.

For example, if you work in French and Italian languages in your Web Content Manager site, consider the following recommendations:

1.  Organize your web content in language-specific libraries. Create one library per language, for example, one library for French and one library for Italian. You can specify the language when you create the library.
2.  Create language-specific search collections for the libraries you created. For example, create a search collection for your French library and a separate search collection for your Italian library. You can specify the language when you create the collection.
3.  For each search collection, create one content source for each content source type. For example, for the French library search collection, create one content source for French site content and one for French Portal site content. Similarly, create content sources for your Italian library search collection as well.
    -   To create a content source for site content, in the **Content source type** field, specify **WCM site**. In the **Collect documents linked from this URL** field, enter the URL that refers to the language-specific library that you want to use. Ensure that the language of your library matches the language of the search collection.
    -   To create a content source for each of your supported portal site languages. In the **Content source type** field, specify **Portal site**. Add the content source to the search collection that you already created for the web content of the same language.

For more information about searching multilingual sites, go to Crawling a multilingual portal site in the related links.

**Parent topic:**[Indexing web content](../wcm/wcm_dev_search_portal.md)

**Related information**  


[Crawling a multilingual portal site](../admin-system/srtmultiling.md)

