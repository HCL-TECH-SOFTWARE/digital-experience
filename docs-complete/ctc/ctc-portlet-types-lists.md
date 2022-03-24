# Lists 

These list portlets can be added to your page from the Create Content Lists view when in Edit mode.

When a user selects a List Component, the component queries for content. The list then pulls in the formatting that is stored in the List Presentation component, such as the header, result design, and footer, from the List configuration item that triggered it. This separation of the query from the presentation allows the same list component to be used many times and formatted differently in each case. This design is also used to build in your own custom list querying component \(for example, menus, personalization rules, searches, or navigator components\) and your own header, footer, and result design components. You can use your custom queries and formatting with the ones included with Content Template in the same List configuration items.

For lists that require parameterization, the following fields are set up in the contextual rendering code:

-   Context Override overrides the current page context and sets a selected context for rendering, which can be accessed in the list components. For use in personalization rules, this context is set to a request attribute.
-   List Templates: a list of template names that can be used in menus.
-   List Categories: a list of categories that can be used in menus.

The following example shows a landing page with a short list of upcoming items.

![This picture shows a list portlet that contains images and short descriptions in a two-column format.](../images/ListExample1_small.jpg)

This second example shows an index page with an index list.

.![This picture shows a list portlet that contains images and short descriptions in a row format.](../images/ListExample2_small.jpg)

When a list is instantiated, it retrieves content from all areas beneath their current location. When they are first created, the headings of the lists are not linked to any location in the site. Often it makes sense to scope a list to a particular subarea to avoid pulling content from other areas. Do this by editing the configuration of the item after you create it and selecting a site area in the Context Override field. This setting overrides the current page context and the list is scoped to that area only. This also triggers the list title to be linked to that area, allowing the list to double as in-page navigation.

## List configuration

Each list type uses a configuration document based on the **List** authoring template that is in the **CTC Design** library. The following configuration parameters are used by lists:

-   **List Title**

    Some list designs include a title in their header design. The title entered here is displayed in those list designs.

-   **CSS Style**

    Much of the design of each portlet is defined in the CSS file that is linked to that portlet. You can enter the name of alternative CSS files here to change some design elements of the content that is displayed in the portlet.

-   **List component**

    The list component that is selected here defines what content is displayed in the portlet.

-   **List Presentation Component**

    The list presentation that is selected here defines the layout of the header, footer, and body of the content that is retrieved by the list component.

-   **Context Override**

    You can select a site, site area, content item to use as the default context of the list. This is used instead of the default portlet context.

-   **Setup Component**

    The component that is selected here is rendered prior before running the list.

-   **List Templates**

    Some list components display content that uses a specific authoring template. Extra authoring templates can be specified here.

-   **List Categories**

    Some list components display content that is profiled by using specific categories. Extra authoring templates can be specified here.


## List Palette

When these portlets are instantiated, they retrieve content from all areas beneath their current location. When they are first created, the headings of the lists are not linked to any location in the site. Often it makes sense to scope a list to a particular subarea to avoid pulling content from other areas. Do this by editing the configuration of the item after you create it and selecting a site area in the Context Override field. This setting overrides the current page context and the list is scoped to that area only. This also triggers the list title to be linked to that area, allowing the list to double as in-page navigation.

Here are two examples of lists from the CTC list portlets palette:

![This picture shows a landing page with a list of upcoming event sessions in a two-column format. Users can click a link to get more information.](../images/ListExample1_small.jpg)

![This picture shows a slideshow list. One list item shows at a time. Users click the next slideshow number to see another list item.](../images/SlideshowExample2.jpg)

-   **[List Builder ](../ctc/ctc-portlet-list-builder.md)**  
Displays a list that is configured by using a wizard to set up a custom list.
-   **[Alerts Latest List ](../ctc/ctc-portlet-alerts-latest.md)**  
Displays a list of the most recent alerts, based on content items created by using the Alert content template.
-   **[Communications Latest List ](../ctc/ctc-portlet-communications-latest.md)**  
Displays a list of the most recent content items that are created by using the Communication content template.
-   **[Courses Upcoming List ](../ctc/ctc-portlet-courses-upcoming.md)**  
Displays a list of the most recent content items created by using the Course content template.
-   **[Events Upcoming ](../ctc/ctc-portlet-events-upcoming.md)**  
Displays a set of featured upcoming events in a list. By default, any items that are created by using the Event content template are displayed in this portlet.
-   **[Events Upcoming List No Heading ](../ctc/ctc-portlet-events-upcoming-no-heading.md)**  
Displays a set of featured upcoming events in a list. By default, any items that are created by using the Event content template are displayed in this portlet. This is similar to the Events Upcoming portlet, except no heading is displayed.
-   **[Events Upcoming Grid Design ](../ctc/ctc-portlet-events-grid-design.md)**  
Displays a set of featured upcoming events in a list. By default, any items that are created by using the Event content template are displayed in this portlet.
-   **[Events Recent List ](../ctc/ctc-portlet-events-recent.md)**  
Displays a set of featured recent events in a list. By default, any items that are created by using the Event content template are displayed in this portlet.
-   **[Events Recent List No Heading ](../ctc/ctc-portlet-events-recent-no-heading.md)**  
Displays a set of featured recent events in a list. By default, any items created using the Event content template will be displayed in this portlet. This is similar to the Events Recent portlet, but no heading is displayed.
-   **[General Latest List ](../ctc/ctc-portlet-general-latest.md)**  
Displays a list of the most recent items of any type in your website.
-   **[General Latest Grid Design List ](../ctc/ctc-portlet-general-latest-grid-design.md)**  
Displays a list of the most recent items of any type in your website. This is similar to the General Latest portlet, but the results are displayed in a grid design.
-   **[Jobs Openings List ](../ctc/ctc-portlet-jobs-latest.md)**  
Displays a list of the most recent content items that are created by using the Job Opening content template.
-   **[Meetings Upcoming List ](../ctc/ctc-portlet-meetings-upcoming.md)**  
Displays a list of the most recent content items that are created by using the Meeting content template.
-   **[Meetings Recent List ](../ctc/ctc-portlet-meetings-recent.md)**  
Displays a list of the most recent content items created by using the Meeting content template.
-   **[News Latest List ](../ctc/ctc-portlet-news-latest.md)**  
Displays a list of the most recent news items, based on content items created by using the News content template.
-   **[News Latest Grid Design List ](../ctc/ctc-portlet-news-latest-grid-design.md)**  
Displays a list of the most recent news items, based on content items that are created by using the News content template.
-   **[News Latest List No Heading ](../ctc/ctc-portlet-news-latest-without-heading.md)**  
Displays a list of the most recent news items, based on content items that are created by using the News content template.
-   **[Press Releases Latest List ](../ctc/ctc-portlet-releases-latest.md)**  
Displays a list of the most recent Press Releases, based on content items that are created by using the Press Release content template.
-   **[Topics Latest List ](../ctc/ctc-portlet-topics-latest.md)**  
Displays a list of the most recent topics, based on content items created by using the Topics content template.

**Parent topic:**[Page components ](../ctc/ctc-portlet-types.md)

