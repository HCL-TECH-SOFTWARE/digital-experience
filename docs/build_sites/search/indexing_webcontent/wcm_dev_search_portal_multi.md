# Indexing web content in a multilingual environment

Learn about the best practices for indexing web content if you are working with a multilingual Web Content Manager site.

For example, if you work in French and Italian languages in your Web Content Manager site, consider the following recommendations:

1.  Organize your web content in language-specific libraries. Create one library per language, for example, one library for French and one library for Italian. You can specify the language when you create the library.
2.  Create language-specific search collections for the libraries you created. For example, create a search collection for your French library and a separate search collection for your Italian library. You can specify the language when you create the collection.
3.  For each search collection, create one content source for each content source type. For example, for the French library search collection, create one content source for French site content and one for French Portal site content. Similarly, create content sources for your Italian library search collection as well.
    -   To create a content source for site content, in the **Content source type** field, specify **WCM site**. In the **Collect documents linked from this URL** field, enter the URL that refers to the language-specific library that you want to use. Ensure that the language of your library matches the language of the search collection.
    -   To create a content source for each of your supported portal site languages. In the **Content source type** field, specify **Portal site**. Add the content source to the search collection that you already created for the web content of the same language.

For more information about searching multilingual sites, go to Crawling a multilingual portal site in the related links.

## HCLSoftware U learning materials

For an introduction and a demo on how to manage multilingual sites as a business user, go to [Multilingual for Business Users](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D2792){target="_blank"}. You can try it out using the [Multilingual Lab for Business Users](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Business_User/HDX-BU-200_Multilingual_Lab.pdf){target="_blank"} and corresponding [Multilingual Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Business_User/HDX-BU-200_Multilingual_Lab_Resources.zip).

To learn more about multilingual deployment options, go to [Multilingual for Administrators](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3364){target="_blank"}. In this course, you will learn about language support and selection, page translation, search, and the built-in multilingual solution for web content. You will also learn how to manage the locale URL, plan site capacity, and optimize performance. You can try it out using the [Multilingual Lab for Administrators](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3364){target="_blank"}.

???+ info "Related information" 
    - [Crawling a multilingual portal site](../searching_local_portal/srtmultiling.md)
