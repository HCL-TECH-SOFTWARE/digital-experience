# Communications Page Template

Use this page template to display summaries of content items created using the Communication content template.

## Communications Index Page

This page is associated with this site area: Your Library/Your Site Path/Your Page Name

This page includes the following portlets:

-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Index Signpost. This displays a breadcrumb and a page header.
    -   This item is configured to display this block component: CTC Design/Block Components/Index Signpost
    -   The CSS class of contentSignpost is applied to the container DIV.
-   A Dynamic Body portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Latest Communications. This displays a heading and body field for the list of communication.
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Index List. This displays a form used to search for communication topics, as well as a list of results.

    -   Content for the list is retrieved by using this component: CTC Design/List Components/Filtered Items by Publish Date
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name/Content
    -   The content displayed in the slideshow is formatted by using this list presentation: CTC Design/List Presentation Components/Index Filter List Design for Posts with Attribution
    -   The CSS class of contentIndex is applied to the container DIV.
    **Note:** This page template use the JCRSource content source. Changes made to the content of these pages will not appear in results of the search form until the content source is refreshed. Administrators can modify this content source so that it is refreshed more often.

    The JSP located at [wp\_profile\_root](../reference/wpsdirstr.md)/installedApps/CTC.ear/ctc.war/jsp/searchFilter.jsp is used by this page template and may need to be customized. This JSP sets up the attributes that are required for the menu, navigator, and personalization components to display the correct results.

-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Connect Tools. This displays a set of social media tools.
    -   This item is configured to display this block component: CTC Design/Block Components/Social Tools
    -   This item is configured to display this header component: CTC Design/Component Headers/Component Title
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name/Meet the Team
    -   The CSS class of contentBlock is applied to the container DIV.

## Communications Details Page

This page is associated with this site area: Your Library/Your Site Path/Your Page Name/Content

This page includes the following portlets:

-   A Web Content Viewer \(JSR 286\) portlet that is configured to display this content item: CTC Content/Micro-sites/News/Components/Detail Page Signpost. This displays a breadcrumb and a page heading.
    -   This item is configured to display this block component: CTC Design/Block Components/Detail Signpost
    -   The CSS class of contentSignpost is applied to the container DIV.
-   A Dynamic Body portlet. The context for this portlet is inherited from the parent page. This displays the current Communication content item.
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Communication Details. This displays further details from the current content item.
    -   This item is configured to display this block component: CTC Design/Block Components/Communication Details
    -   This item is configured to display this header component: CTC Design/Component Headers/Component Title
    -   The CSS class of contentBlock is applied to the container DIV.
-   A Web Content Viewer \(JSR 286\) portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Connect Tools. This displays a set of social media tools.
    -   This item is configured to display this block component: CTC Design/Block Components/Social Tools
    -   This item is configured to display this header component: CTC Design/Component Headers/Component Title
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name
    -   The CSS class of contentBlock is applied to the container DIV.


