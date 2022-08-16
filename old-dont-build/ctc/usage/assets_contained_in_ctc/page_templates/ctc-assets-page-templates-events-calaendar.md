# Events Calendar Page Template

Use this page template to display an events calendar.

This template displays a list of date-based content in a calendar format. It is used as an alternative template to the Events, Courses, and Meetings templates, that display information as lists. New events can be created in edit mode, and when the event is published it appears on the calendar. The content is created with the Event authoring template.

The calendar uses a JavaScript widget that is implemented as a Dojo dijit. When changes to events are made in the calendar, an Ajax request is sent to the Web Content Manager REST API to update the event on the server. This process ensures that the user gets a responsive experience in the browser, while also maintaining the state of the content on the server.

This page template is an example of how to create your own browser widgets that use the Web Content Manager REST API. The widgets can be created with any JavaScript API, such as JQuery or Dojo.

-   Events on calendar are populated by using searchFilter.jsp:
    -   This jsp searches for published upcoming and past events under content site area.
    -   It is deployed in WebSphere Install Root/wp\_profile/installedApps/node/ctc.ear/ctc.war/.
-   When creating your own client-side widgets backed by Web Content Manager content:
    -   The events calendar uses the JavaScript file ItemRepository.js that is part of a JavaScript API for sending requests to the Web Content Manager REST API
    -   The JavaScript API for sending requests to the Web Content Manager REST API is contained in the in place edit WAR on the server. This WAR is deployed at WebSphere Install Root/wp\_profile/installedApps/node/wcm.ear/wcm-inplaceEdit.war/.

## Events Calendar Index Page

This page is associated with this site area: Your Library/Your Site Path/Your Page Name

This page includes the following portlets:

-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Index Page Signpost and Promotions Slideshow. This displays a slideshow of items you want to promote on your site.
    -   Content for the list is retrieved by using this component: CTC Design/List Components/All Items by Order
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name/Promotions
    -   The content that is displayed in the slideshow is formatted by using this list presentation: CTC Design/List Presentation Components/Large Captions Slideshow List Design for Promotions
    -   The CSS class of promoSlideshow full is applied to the container DIV.
-   A Dynamic Body portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Events Calendar. This displays a heading and body field for the events calendar.
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Events Calendar Index List. This displays the events calendar.
    -   Content for the list is retrieved by using this component: CTC Design/List Components/All Items by Order
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name/Content
    -   The content that is displayed in the slideshow is formatted by using this list presentation: CTC Design/List Presentation Components/Index Calendar Design for Scheduled Events
    -   The CSS class of contentIndex is applied to the container DIV.
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Connect Tools. This displays a set of social media tools.
    -   This item is configured to display this block component: CTC Design/Block Components/Social Tools
    -   This item is configured to display this header component: CTC Design/Component Headers/Component Title
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name
    -   The CSS class of contentBlock is applied to the container DIV.
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Sidebar Recent Slideshow List. This displays a slideshow or recent events.
    -   Content for the list is retrieved by using this component: CTC Design/List Components/Recent Featured Items by Start Date
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name/Content
    -   The content that is displayed in the slideshow is formatted by using this list presentation: CTC Design/List Presentation Components/Feature Slideshow List Design for Scheduled Events, with overflow list
    -   The CSS class of contentSlideshow is applied to the container DIV.

## Events Calendar Details Page

This page is associated with this site area: Your Library/Your Site Path/Your Page Name/Content

This page includes the following portlets:

-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Detail Page Signpost. This displays a heading and body field for the page.
    -   This item is configured to display this block component: CTC Design/Block Components/Detail Signpost
    -   The CSS class of contentSignpost is applied to the container DIV.
-   A Dynamic Body portlet. The context for this portlet is inherited from the parent page. This displays the current content item.
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Item Details. This displays further details from the current content item.
    -   This item is configured to display this block component: CTC Design/Block Components/Event Details
    -   This item is configured to display this header component: CTC Design/Component Headers/Component Title
    -   The CSS class of contentBlock is applied to the container DIV.
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Connect Tools. This displays a set of social media tools.
    -   This item is configured to display this block component: CTC Design/Block Components/Social Tools
    -   This item is configured to display this header component: CTC Design/Component Headers/Component Title
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name
    -   The CSS class of contentBlock is applied to the container DIV.
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Sidebar Recent Slideshow List. This displays a slideshow or recent events.
    -   Content for the list is retrieved by using this component: CTC Design/List Components/ Recent Featured Items by Start Date
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name/Content
    -   The content that is displayed in the slideshow is formatted by using this list presentation: CTC Design/List Presentation Components/Feature Slideshow List Design for Scheduled Events, with overflow list
    -   The CSS class of contentSlideshow is applied to the container DIV.

**Parent topic:**[Page Templates](../ctc/ctc-assets-page-templates.md)

