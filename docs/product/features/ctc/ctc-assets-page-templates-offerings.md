# Offerings Page Template

Use this page template to display content about a product or service for sale.

The offering template is the most powerful template that is used by Content Template. It uses a content item like other templates, but also multiple images and videos that are stored in site areas in the same location as the content item. The content author adds and removes images and videos as required. These are displayed along with the content on the page. When creating pages from most page templates, a single content item is copied into the site. However, when a new offering is created, a whole micro-site is copied from the template into your site, consisting of multiple site areas and content.

This pattern can be copied to create templates for other micro-sites, or when an arbitrary number of elements of a certain type are required in a content.

-   The offering code plugs into the Web Content Manager inline item creation JavaScript code by using the plug-in point `wcmModules.inplace.create.showForm()`. This is located in `content.js`.
-   The site area branch creation can be found in `CopyBranch.jsp`.

## Offerings Index Page

This page is associated with this site area: Your Library/Your Site Path/Your Page Name

This page includes the following portlets:

-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Index Signpost. This displays a page heading and breadcrumb.
    -   This item is configured to display this block component: CTC Design/Block Components/Index Signpost
    -   The CSS class of contentSignpost is applied to the container DIV.
-   A Dynamic Body portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Our Offerings. This displays a heading and body field for the offerings section of the page.
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Index List. This displays a list of offerings.
    -   Content for the list is retrieved by using this component: CTC Design/List Components/All Items by Title including Descendents
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name/Content
    -   The content that is displayed in the slideshow is formatted by using this list presentation: CTC Design/List Presentation Components/Index List Design for Offerings
    -   The CSS class of contentIndex is applied to the container DIV.
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Connect Tools. This displays a set of social media tools.
    -   This item is configured to display this block component: CTC Design/Block Components/Social Tools
    -   This item is configured to display this header component: CTC Design/Component Headers/Component Title
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name
    -   The CSS class of contentBlock is applied to the container DIV.
-   A News Featured with Overflow portlet configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Featured Offerings. This displays a list of featured offerings.
    -   Content for the list is retrieved by using this component: CTC Design/List Components/Landing Latest Featured Items by Publish Date
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name/Content
    -   The content that is displayed in the slideshow is formatted by using this list presentation: CTC Design/List Presentation Components/Feature Slideshow List Design for Offerings, with Overflow
    -   The CSS class of contentSlideshow is applied to the container DIV.

## Offerings Details Page

This page is associated with this site area: Your Library/Your Site Path/Your Page Name/Content

This page includes the following portlets:

-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Detail Signpost. This displays a heading and breadcrumb for the page.
    -   This item is configured to display this block component: CTC Design/Block Components/Detail Signpost
    -   The CSS class of contentSignpost is applied to the container DIV.
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Image Gallery. This displays a set of images.
    -   Content for the list is retrieved by using this component: CTC Design/List Components/All Items by Title Including Descendents
    -   The content that is displayed in the gallery is formatted by using this list presentation: CTC Design/List Presentation Components/Lightbox gallery
    -   This list is pre-configured with an authoring template override of: CTC Design/Image
    -   The CSS class of contentImageGallery is applied to the container DIV.
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Offering Summary. This displays a summary text for the offerings.
    -   This item is configured to display this block component: CTC Design/Block Components/Offering Summary
-   A Dynamic Body portlet. The context for this portlet is inherited from the parent page. This displays the current content item.
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Connect Tools. This displays a set of social media tools.
    -   This item is configured to display this block component: CTC Design/Block Components/Social Tools
    -   This item is configured to display this header component: CTC Design/Component Headers/Component Title
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name
    -   The CSS class of contentBlock is applied to the container DIV.
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Video Gallery. This displays a featured video.
    -   This item is configured to display this block component: CTC Design/List Components/All Items by Title including Descendents
    -   This item is configured to display this header component: CTC Design/List Presentation Components/Video List
    -   The CSS class of contentBlock is applied to the container DIV.
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Related Offerings. This displays a list of related offerings.
    -   Content for the list is retrieved by using this component: CTC Design/List Components/Related Offerings
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name/Content
    -   The content that is displayed in the slideshow is formatted by using this list presentation: CTC Design/List Presentation Components/List Design for Related Offerings
    -   The CSS class of contentList photo is applied to the container DIV.
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Featured Offerings. This displays a list of featured offerings.
    -   Content for the list is retrieved by using this component: CTC Design/List Components/Landing Latest Featured Items by Publish Date
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name/Content
    -   The content that is displayed in the slideshow is formatted by using this list presentation: CTC Design/List Presentation Components/Feature Slideshow List Design for Offerings, with Overflow
    -   The CSS class of contentSlideshow is applied to the container DIV.

**Parent topic:**[Page Templates](../ctc/ctc-assets-page-templates.md)

