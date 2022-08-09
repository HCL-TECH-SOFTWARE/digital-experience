# Alerts Page Template

Use this to display summaries of content items created by using the Alert content template.

## Alerts Index Page

This page is associated with this site area: Your Library/Your Site Path/Your Page Name

This page includes the following portlets:

-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Index Page Signpost and Promotions Slideshow
    -   Content for the slideshow is retrieved by using this component: CTC Design/List Components/All Items by Order
    -   This slideshow is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name/Promotions
    -   The content that is displayed in the slideshow is formatted by using this list presentation: CTC Design/List Presentation Components/Slideshow List Design for Promotions
    -   The CSS class of promoSlideshow is applied to the container DIV.
-   A Dynamic Body portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Latest Alerts. This displays a heading and body field for the list of latest alerts.
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Index List. This displays a form that is used to search for communication topics, as well as a list of results.

    -   Content for the list is retrieved using this component: CTC Design/List Components/Filtered Items by Publish Date
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name/Content
    -   The content that is displayed in the slideshow is formatted by using this list presentation: CTC Design/List Presentation Components/Index Filter List Design for Posts with No Attribution
    -   The CSS class of contentIndex is applied to the container DIV.
    **Note:** This page template uses the JCRSource content source. Changes made to the content of these pages will not appear in results of the search form until the content source is refreshed. Administrators can modify this content source so that it is refreshed more often.

    The JSP located at [wp\_profile\_root](../reference/wpsdirstr.md)/installedApps/CTC.ear/ctc.war/jsp/searchFilter.jsp is used by this page template and can need to be customized. This JSP sets up the attributes that are required for the menu, navigator, and personalization components to display the correct results.

-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Connect Tools. This displays a set of social media tools.
    -   This item is configured to display this block component: CTC Design/Block Components/Social Tools
    -   This item is configured to display this header component: CTC Design/Component Headers/Component Title
    -   This item is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name
    -   The CSS class of contentBlock is applied to the container DIV.

## Alerts Details Page

This page is associated with this site area: Your Library/Your Site Path/Your Page Name/Content

This page includes the following portlets:

-   A Web Content Viewer \(JSR 286\) portlet that is configured to display this content item: CTC Content/Micro-sites/News/Components/Detail Page Signpost. This displays a breadcrumb and a page heading.
    -   This item is configured to display this block component: CTC Design/Block Components/Detail Signpost
    -   The CSS class of contentSignpost is applied to the container DIV.
-   A Dynamic Body portlet. The context for this portlet is inherited from the parent page. This displays the current Alert content item.
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Item Details. This displays further details from the current Alert content item.
    -   This item is configured to display this block component: CTC Design/Block Components/Alert Details
    -   This item is configured to display this header component: CTC Design/Component Headers/Component Title
    -   The CSS class of contentBlock is applied to the container DIV.
-   A Web Content Viewer \(JSR 286\) portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Connect Tools. This displays a set of social media tools.
    -   This item is configured to display this block component: CTC Design/Block Components/Social Tools
    -   This item is configured to display this header component: CTC Design/Component Headers/Component Title
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name
    -   The CSS class of contentBlock is applied to the container DIV.

**Parent topic:**[Page Templates](../ctc/ctc-assets-page-templates.md)

