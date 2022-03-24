# The localized CTC demonstration sites 

Four localized CTC demonstration sites can be optionally installed to add multilingual content and features to the CTC Demo site.

When you install or upgrade by using the option `CTC_MLS=true` the following features are enabled:

-   The Multilingual Solution.
-   Four sample libraries:
    -   CTC Demo AR \(Arabic\)
    -   CTC Demo DE \(German\)
    -   CTC Demo ES \(Spanish\)
    -   CTC Demo ZH \(Chinese\)
-   The Multilingual Solution context processor is applied to all the CTC Demo site portlets.
-   The CTC Demo site pages have their page mappings set for the four sample site languages.

When the localized CTC sites are installed, users who have their preferred language set as Arabic, German, Spanish or Chinese, in their browser or in the Portal, sees the CTC Demo site in their local language.

To show links that allow a user to switch between the language sites, use the Multilingual solution [Portlet Render-time navigation extension](../wcm/wcm_mls_ext_portlet.md).

## Localized site searching

In order to search the localized CTC Demo sites, you must create different search collections for each language:

1.  Create a search collection for each locale and specify the appropriate language by copying the **Default Search Collection**. The names of the new search collections should be:
    -   CTC Search Collection AR
    -   CTC Search Collection DE
    -   CTC Search Collection ES
    -   CTC Search Collection ZH
2.  In each search collection, create a content source. For example, for the search Collection "CTC Search Collection ZH".
    -   Create a New Content Source called "CTC ZH".
    -   Select the content type to be "WCM Site"
    -   Enter a name.
    -   Enter a URL. You can find the URL by looking in at the search collection "Default Search Collection" and checking the content source named "WCM Content Source".
    -   Save the content source

These new search collections are referred to by the search components that are in **CTC Design** \> **Components** \> **List Components**. The search components are called:

-   Search Results List.
-   Search Results List AR.
-   Search Results List DE.
-   Search Results List ES.
-   Search Results List ZH.

The search results index list in the localized CTC Demo sites refer to the search component for each language. For example, **CTC Demo ZH** \> **Content** \> **CTC Demo** \> **Home** \> **Search Results** \> **Page Components** \> **Index List** refers to the search component Search Results List ZH.

**Parent topic:**[Sample sites, site templates, groups, and users ](../ctc/ctc-assets-sample-sites.md)

