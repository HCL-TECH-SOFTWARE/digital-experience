# Topics Page Template

Use this page template to create a parent page for items that use the Topic content template.

## Topics Index Page

This page is associated with this site area: Your Library/Your Site Path/Your Page Name

This page includes the following portlets:

-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Index Signpost. This displays a breadcrumb and header for the page.
    -   This item is configured to display this block component: CTC Design/Block Components/Index Signpost
    -   The CSS class of contentSignpost is applied to the container DIV.
-   A Dynamic Body portlet. The context for this portlet is inherited from the parent page. This displays a heading a body field for the list of topics.
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Index List. This displays a list of topics.
    -   Content for the list is retrieved by using this component: CTC Design/List Components/All Items by Order
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name/Content
    -   The content that is displayed in the slideshow is formatted by using this list presentation: CTC Design/List Presentation Components/Index List Design for Static Content
    -   The CSS class of contentIndex is applied to the container DIV.
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Connect Tools. This displays a set of social media tools.
    -   This item is configured to display this block component: CTC Design/Block Components/Social Tools
    -   This item is configured to display this header component: CTC Design/Component Headers/Component Title
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name
    -   The CSS class of contentBlock is applied to the container DIV.
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Sidebar Featured Slideshow List. This displays a set of featured topics.
    -   Content for the list is retrieved by using this component: CTC Design/List Components/Latest Featured Items by Publish Date
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name/Content
    -   The content that is displayed in the slideshow is formatted by using this list presentation: CTC Design/List Presentation Components/Feature Slideshow List Design for Scheduled Events, with overflow list
    -   The CSS class of contentSlideshow is applied to the container DIV.

You must add a Topic Details page as a child of this page to display a single topic content item.

## Topics Details Page

This page is associated with this site area: Your Library/Your Site Path/Your Page Name/Content

This page includes the following portlets:

-   A Web Content Viewer \(JSR 286\) portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Detail Page Signpost. This displays a heading and breadcrumb for the page.
    -   This item is configured to display this block component: CTC Design/Block Components/Detail Signpost
    -   The CSS class of contentSignpost is applied to the container DIV.
-   A Dynamic Body portlet. The context for this portlet is inherited from the parent page. This displays the current content item.
-   A page component configuration Reference portlet configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Item Details.. This displays further information from the current content item.
    -   This item is configured to display this block component: CTC Design/Block Components/Topic Details
    -   This item is configured to display this header component: CTC Design/Component Headers/Component Title
    -   The CSS class of contentBlock is applied to the container DIV.
-   A Web Content Viewer \(JSR 286\) portlet configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Connect Tools. This displays a set of social media tools.
    -   This item is configured to display this block component: CTC Design/Block Components/Social Tools
    -   This item is configured to display this header component: CTC Design/Component Headers/Component Title
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name
    -   The CSS class of contentBlock is applied to the container DIV.


