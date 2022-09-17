# Crawling a multilingual portal site

View the steps to set up search on a multilingual portal for users with different language preferences.

If your portal site is multilingual and your users use different languages to search your portal, you set up multiple search collections under one scope. Proceed as follows:

1.  Before you start creating search collections, make sure that the parameter `MULTILINGUAL_COLLECTION_ENABLED` is set to `false` for the search service. If the parameter is not set, add it and set it to `false`.

2.  Create a portal content search collection for each language that your users might use. Set that language for the collection by selecting it from the pull-down list within **Specify Collection Language**.

3.  Create a single content source for each of these collections. When you save the content source settings, Manage Search appends the locale information of the collection to the content source URL, unless you already added locale information.

4.  Populate the collections by starting crawls on them. For load and performance reasons, run the crawls one after another rather than all at the same time. Refer to the topic about Hints and tips for Portal Search crawls.

5.  Create a scope and add all collections that you created. You can name this scope My preferred language.


The Search Center portlet returns results only from the collection in the user's preferred language, unless the Search Center is configured to display search results of all available content sources regardless of their language information. For more information on setting up search in multilingual sites, go to [Configuring search for multilingual sites](../language_region_support/config_search_multi.md).


???+ info "Related information:"
    - [Indexing web content in a multilingual environment](../../search/indexing_webcontent/wcm_dev_search_portal_multi.md)
    - [Resetting the default search collection](../portal_search/administer_portal_search/searching_crawling_portal_sites/srtcrtprtlstecllc.md)
    - [Users cannot see portal site search results in their preferred language](../portal_search/hint_tips/srrhinttips_no_lang.md)

