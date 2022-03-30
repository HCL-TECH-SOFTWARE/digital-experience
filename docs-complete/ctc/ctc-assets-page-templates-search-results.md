# Search Results Page Template 

Use this page template to display a list of search results from a search query. This page can be placed anywhere in your site and will automatically display the search results from the search form in the portal theme instead of being display in the search center.

When added to a site, this page is associated with this site area: Your Library/Your Site Path/Your Page Name

This page includes the following portlets:

-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Index Signpost. This displays a breadcrumb and heading for the page.
    -   This item is configured to display this block component: CTC Design/Block Components/Index Signpost
    -   The CSS class of contentSignpost is applied to the container DIV.
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Index List. This displays the search results.
    -   Content for the list is retrieved by using this component: CTC Design/List Components/Search Results
    -   This list is pre-configured with a context override of: CTC Design/List Presentation Components/Index List Design for Search Results
    -   The CSS class of contentIndex is applied to the container DIV.
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Connect Tools. This displays a set of social media tools.
    -   This item is configured to display this block component: CTC Design/Block Components/Social Tools
    -   This item is configured to display this header component: CTC Design/Component Headers/Component Title
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name
    -   The CSS class of contentBlock is applied to the container DIV.

## Configuring the search results

The Search Results page template uses the search component **CTC Design** \> **Components** \> **List Components** \> **Search Results List**. This search component is configured to use the "Default Search Service" and "Default Search Collection" that is installed with.HCL Portal. The search results are limited to the current site. For instance, searches done in the CTC Demo site are limited to content in the CTC Demo library.

In addition, some content is filtered out, so that the search results represent real site content, such as articles, events, or offerings. You can define what content types are filtered our by opening the Search Results page in edit mode and editing the Index List content item. The List Templates field contains a list of authoring templates. Content that is created with these templates are filtered out.

By default, the excluded authoring templates are Block, Carousel, Content Feed, Landing Page, Index Page, List, Promotion, Teaser, and Slideshow.

There are 2 JSPs located at [wp\_profile\_root](../reference/wpsdirstr.md)/installedApps/CTC.ear/ctc.war/jsp that are used by the search results page template that might need to be customized:

-   **searchFilter.jsp**

    Filters the search terms that are set as request parameters and redirect to the Portal URL that shows the appropriate search results.

-   **search.jsp**

    Overrides the default search component in the theme and redirect to the CTC search page if one exists.


**Parent topic:**[Page Templates ](../ctc/ctc-assets-page-templates.md)

**Related information**  


[Localized site search ](../ctc/ctc_deploy_locale_search.md)

