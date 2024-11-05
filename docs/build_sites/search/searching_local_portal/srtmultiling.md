# Crawling a multilingual portal site

View the steps to set up search on a multilingual portal for users with different language preferences.

If your portal site is multilingual and your users use different languages to search your portal, you set up multiple search collections under one scope. Proceed as follows:

1.  Before you start creating search collections, make sure that the parameter `MULTILINGUAL_COLLECTION_ENABLED` is set to `false` for the search service. If the parameter is not set, add it and set it to `false`.

2.  Create a portal content search collection for each language that your users might use. Set that language for the collection by selecting it from the pull-down list within **Specify Collection Language**.

3.  Create a single content source for each of these collections. When you save the content source settings, Manage Search appends the locale information of the collection to the content source URL, unless you already added locale information.

4.  Populate the collections by starting crawls on them. For load and performance reasons, run the crawls one after another rather than all at the same time. Refer to the topic about Hints and tips for Portal Search crawls.

5.  Create a scope and add all collections that you created. You can name this scope My preferred language.


The Search Center portlet returns results only from the collection in the user's preferred language, unless the Search Center is configured to display search results of all available content sources regardless of their language information. For more information on setting up search in multilingual sites, go to [Configuring search for multilingual sites](../language_region_support/config_search_multi.md).

## HCLSoftware U learning materials

For an introduction and a demo on how to manage multilingual sites as a business user, go to [Multilingual for Business Users](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D2792){target="_blank"}. You can try it out using the [Multilingual Lab for Business Users](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Business_User/HDX-BU-200_Multilingual_Lab.pdf){target="_blank"} and corresponding [Multilingual Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Business_User/HDX-BU-200_Multilingual_Lab_Resources.zip).

To learn more about multilingual deployment options, go to [Multilingual for Administrators](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3364){target="_blank"}. In this course, you will learn about language support and selection, page translation, search, and the built-in multilingual solution for web content. You will also learn how to manage the locale URL, plan site capacity, and optimize performance. You can try it out using the [Multilingual Lab for Administrators](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3364){target="_blank"}.

???+ info "Related information"
    - [Indexing web content in a multilingual environment](../../search/indexing_webcontent/wcm_dev_search_portal_multi.md)
    - [Resetting the default search collection](../portal_search/administer_portal_search/searching_crawling_portal_sites/srtcrtprtlstecllc.md)
    - [Users cannot see portal site search results in their preferred language](../portal_search/hint_tips/srrhinttips_no_lang.md)
