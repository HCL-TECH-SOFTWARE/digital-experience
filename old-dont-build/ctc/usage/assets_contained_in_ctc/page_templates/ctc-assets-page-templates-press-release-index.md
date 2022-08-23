# Press Releases Page Template

Use this page template to display a list of content items that use the Press Release content template.

## Press Releases Index Page

This page is associated with this site area: Your Library/Your Site Path/Your Page Name

This page includes the following portlets:

-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Index Page Signpost and Promotions Slideshow. This displays a slideshow of promoted content.
    -   Content for the list is retrieved by using this component: CTC Design/List Components/All Items by Order
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name/Promotions
    -   The content that is displayed in the slideshow is formatted by using this list presentation: CTC Design/List Presentation Components/Large Captions Slideshow List Design for Promotions
    -   The CSS class of promoSlideshow full is applied to the container DIV.
-   A Dynamic Body portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Latest Press Releases. This displays a heading and body field for the Press Releases section of the page.
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Index List. This displays a search form and a list of press releases items.

    -   Content for the list is retrieved by using this component: CTC Design/List Components/Filtered Items by Publish Date
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name/Content
    -   The content that is displayed in the slideshow is formatted by using this list presentation: CTC Design/List Presentation Components/Index Filter List Design for Posts with Attribution
    -   The CSS class of contentIndex is applied to the container DIV.
    **Note:** This page template uses the JCRSource content source. Changes made to the content of these pages will not appear in results of the search form until the content source is refreshed. Administrators can modify this content source so that it is refreshed more often.

    The JSP located at [wp\_profile\_root](../reference/wpsdirstr.md)/installedApps/CTC.ear/ctc.war/jsp/searchFilter.jsp is used by this page template and might need to be customized. This JSP sets up the attributes that are required for the menu, navigator, and personalization components to display the correct results.

-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Connect Tools. This displays a set of social media tools.
    -   This item is configured to display this block component: CTC Design/Block Components/Social Tools
    -   This item is configured to display this header component: CTC Design/Component Headers/Component Title
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name
    -   The CSS class of contentBlock is applied to the container DIV.

## Press Releases Details Page

When added to a site, this page is associated with this site area: Your Library/Your Site Path/Your Page Name/Content

This page includes the following portlets:

-   A Web Content Viewer \(JSR 286\) portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Detail Page Signpost. This displays a heading and breadcrumb for the page.
    -   This item is configured to display this block component: CTC Design/Block Components/Detail Signpost
    -   The CSS class of contentSignpost is applied to the container DIV.
-   A Dynamic Body portlet. The context for this portlet is inherited from the parent page. This displays the current content item.
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Item Details.. This displays further information from the current content item.
    -   This item is configured to display this block component: CTC Design/Block Components/Press Release Details
    -   This item is configured to display this header component: CTC Design/Component Headers/Component Title
    -   The CSS class of contentBlock is applied to the container DIV.
-   A Web Content Viewer \(JSR 286\) portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Connect Tools. This displays a set of social media tools.
    -   This item is configured to display this block component: CTC Design/Block Components/Social Tools
    -   This item is configured to display this header component: CTC Design/Component Headers/Component Title
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name
    -   The CSS class of contentBlock is applied to the container DIV.


