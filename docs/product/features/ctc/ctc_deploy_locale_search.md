# Localized site search

To search localized sites using the Search Results page template, you must create different search collections for each language. If you installed the CTC Demo site with the option CTC\_MLS set to true, then the search components are already set up for the localized versions of the Arabic, Spanish, German, and Chinese CTC Demo sites. However, the search collections for these languages still have to be created.

1.  Create a search collection for each locale specifying the appropriate language by copying the **Default Search Collection**. For example, copy and create a new search collection that is named **CTC Search Collection RU** for Russian.

2.  Create a content source for each site by copying the **WCM Content Source**.

3.  Copy the search component **CTC Design \> Components \> List Components \> Search Results List**. For example, copy and create a new search component named **Search Results List RU**. This has already been done for Arabic, Spanish, German, and Chinese.

4.  Change the search component to reference the newly created collection.

5.  Change the search results index list to reference the new search component. For example, for the CTC Demo site, the item to update is in under **Home** \> **Search Results** \> **Page Components** \> **Index List**.


**Parent topic:**[How to apply the multilingual solution to Content Template sites](../ctc/ctc_deploy_locale.md)

**Related information**  


[Search Results Page Template](../ctc/ctc-assets-page-templates-search-results.md)

