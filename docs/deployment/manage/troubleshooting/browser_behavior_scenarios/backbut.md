# Back button behavior

Learn how the behavior of the web browser Back button can affect portal navigation.

With HCL Portal users can use the Back button of the browser to navigate back through the recent history of the **views** of the pages that they visited.

When a user navigates backwards by using the browser Back button, the portal restores the views of pages that the user visited recently. This behavior of the portal might affect the following aspects of the pages:

-   The sequence by which the user navigated through the portal and selected the pages.
-   The expanded or collapsed state of the tree hierarchy that the navigation shows.
-   The lateral scrolling position of the register tabs that users can use to switch between pages.
-   The information of the user's default selection for a label. For example, this can be the information which page is selected for a label by default for that user. If the user selects a different page from that label, the portal displays that page as the default page for that label from then on.
-   The portlet window information that distinguishes between different instances of the same portlet on different pages.
-   Modifications of the view or window state of a portlet, such as the minimized, maximized, or normal or default state. For example, if a user views a portlet in its default view state, and then maximizes the portlet, clicking the Back button returns the portlet to its previous state, that is the portlet is displayed with its default size.
-   The portlet mode selection options, such as View, Personalize, Edit Shared Settings, or Configure.
-   The information as to whether a portlet is displayed in solo state, and the information which portlet is displayed in solo state.
-   The information as to whether the link for toggling between **Show layout tools** and **Hide layout tools** is displayed. For example these tools include options for moving portlets on a page.
-   If the portlet complies with the standard portlet API, the view state of the portlet is preserved as it is determined by the render parameters of the portlet. For detail about state changes to standard API compliant portlets, refer to Using the Back button with standard API portlets.

**Terminology:** The following terminology conventions are used for this topic:

1.  The terms **view** state and **navigational** state are used synonymously here. Render parameters in the sense of the standard portlet API also refers to the same.
2.  Everything that is said about the browser Back button here applies to the browser Forward button respectively.
3.  The browser Back button does not have an undo function. It interacts with the view or navigational state only, not with the application state.

## User experience

Users can click the Back button of the browser as many times as the browser history mechanism allows. In such cases the markup comes from the history cache of the browser and is served without an additional request to the server. Users see exactly the same markup as they saw when they visited the page previously.

When users use the Back button to return to a page, they can use any link on that previously visited page to navigate further as follows:

-   If the link is only a render link and does not result in a portlet action, then no special case applies.
-   If the link is an action link and includes a portlet action, the behavior differs, depending on whether the user had already clicked the same action link during a previous visit to the page in the same session:
    -   If the user has not clicked the action link previously, the portal performs the action.
    -   If the user has already clicked the action link previously, then the portal displays the markup of the state that resulted from the last invocation of the action link. In other words, the portal does not perform the same action twice.

From a user point of view the consequences of considering these parameters as view state are as follows:

-   Each different combination of states is part of the address of the page, that is its URL, and can be bookmarked. Users can set separate bookmarks for different states of the same page.
-   Users can use the Back button to navigate through modifications of the view states. For example, if a user maximized a portlet, the user can use the browser Back button to switch back to the previous window state of this portlet.
-   The effect of the Back button on interactions with individual portlets strongly depends on the implementation of the portlet. If the portlet implements its links as render links by changing render parameters on a per-link basis, then the Back button can be used to navigate through the history of the interactions with the portlet. This however is only possible for portlets written against the standard portlet API.

## Example scenarios

Example scenario 1: Maximizing or minimizing portlets

1.  The user views a page A with two portlets A1 and A2, both in their normal default window state.
2.  The user maximizes portlet A1.
3.  The user clicks the Back button. Portlet A1 is displayed in normal state again.

Example scenario 2: Switching between pages

1.  The user views a page A with two portlets A1 and A2, both in their normal default window state.
2.  The user maximizes portlet A1.
3.  The user selects page B. The portal displays page B.
4.  The user clicks the Back button. The portal returns to page A. Portlet A1 is displayed in maximized state.
5.  The user clicks the Back button once more. Portlet A1 is displayed in normal state again.

Example scenario 3: Different user action leads to same result.

Initial scenario and user actions:

1.  The user views a page A with a number of portlets on this page.
2.  The user interacts with the portlets.
3.  The user puts portlet A1 into edit mode.
4.  The user clicks A2 into minimized state.
5.  The user makes the document viewer portlet A3, which is a standard API portlet, display page 2 of the document that it shows.
6.  Now the user switches to page B with portlet B1. Portlet B1 is displayed in normal state, view mode and in its default application state.
7.  The user minimizes portlet B1.

Despite different subsequent user actions, the following sub-scenarios have the same final outcome:

Scenario 3a: Using the Back button

1.  The user clicks the Back button. The portal displays portlet B1 in normal state.
2.  The user clicks the Back button once more. The portal changes to page A. It displays portlet A1 in edit mode and portlet A2 in minimized state. Portlet A3 shows page 2 of the document.

Scenario 3b: Making a new selection

1.  The user clicks page A in the navigation to "return" to page A. Conceptually this change is not considered a change back to page A, but forward to page A. As a result, the portal displays page A. It shows portlet A1 in edit mode and portlet A2 in minimized state. Portlet A3 shows page 2 of the document.

## Setting bookmarks

All state information except the portlet application state is bookmarked, for example render parameters, window states, and modes. The invocation of a bookmark resets the application state to the default state as defined by that bookmark.

**Note:** The user can set several independent bookmarks for different windows of the same page. Therefore the result of the previous example scenario is independent of other bookmarks that the user might have set on different window states of the same page.

Example scenario: Setting bookmarks

1.  The user selects a page A with portlets A1 and A2.
2.  The user maximizes portlet A1 and minimizes portlet A2.
3.  The user sets a bookmark on the page. The user names the bookmark A1min\_A2max.
4.  The user logs out and logs back in.
5.  The user selects the bookmark A1min\_A2max. The portal displays page A with portlet A1 maximized and portlet A2 minimized.

The user can set another separate bookmark A1Edit\_A2Default on the same page A with portlet A1 in Edit mode and portlet A2 in its default state. Both bookmark will work independently of each other.

## Considerations for administrators about Back button behavior

The Back button behavior of the portal is internally achieved by coding the combination of all states into the address of the view, that is into its URL. Thus each different combination of navigational states results in a different URL. This has the following additional advantages:

-   Users can set separate bookmarks for different states of the same page.
-   You can have pages cached by configuring specific requirements.

However, make no assumptions about the syntax or structure of portal URLs. For example, you cannot create valid URLs by simple concatenation. This will automatically be true if only the public API is used to create URLs.

## Using the Back button with standard API portlets

If a portlet complies to the standard portlet API, users can use the Back button to navigate backwards through the view states of that portlet as determined by the render parameters of the portlet. When the user clicks the Back button after working with that type of portlet, all information defined by the render parameters is reversed. There is no general rule as to which information is stored in cache as render parameters for a portlet. The effect of the Back button on interactions with individual portlets depends on the implementation of the portlet. This is determined by the person who developed the portlet.

If the portlet implements its links as render links by changing render parameters on a per-link basis, then users can use the Back button to navigate through the history of the interactions with the portlet. However, this is only possible for portlets written against the standard portlet API.

As a general rule, all information that influences the view of the portlet rather than its application state should be implemented as render parameters. For more details about how to develop standard API compliant portlets for HCL Portal, refer to Best practices: Developing portlets using JSR 168 and HCL Portal.

## Configuring the history expiration limit for portal pages

You can configure the portal so that it discards the render parameters for pages that the user has not visited recently within the same session. The purpose of this setting is to limit the URL length which might benefit your portal performance. The portal discards the navigational state of the portlet application of standard API portlets on pages that are too far back in the history.

You can specify the number of different page visits after which the history mechanism can discard the render parameters of the portlet. Your setting determines how far backwards users can at least navigate in the recent history of portal pages that they visited. The number that you specify defines the minimum number of different pages selected by the user after which the portal can discard the render parameters of a page. \(The decision whether the render parameters of the page are actually discarded depends on the expiration policy of the internal cache that stores the render parameters of those pages.\) If the user returns to a page after visiting the specified number of other pages and if the render parameters of that page have expired, the portal displays that page in its default state.

You configure this expiration limit by setting the value for the property keymanager.lru.size= \(integer\). You set this property in the StateManagerService.

You can specify by which circumstances the render parameters of a page are stored or discarded:

-   **1**

    Each time that the user selects a different page, the render parameters of the portlets on the previously selected page can be discarded.

-   **A positive integer**

    Specify the required number of pages. The render parameters of a given page can be discarded after the user has visited that number of other pages.

-   **0**

    Render parameters are always stored in the portal session memory and never discarded.


Note: Do not specify a value smaller than zero \( **0** \). Negative values are considered to be not valid.

**Example scenario:** Configuring a limit to the history of viewed pages

1.  The configuration setting is set to a history value of 2.
2.  The portal pages A, B, and C contain separate instances of the standard portlet API compliant document viewer portlet A1, B1, and C1. Each of the portlets display page 1 of the same document on each page A, B, and C. This is the default for the portlet.
3.  The user selects portal page A and navigates to page 2 of the document in portlet A1.
4.  The user selects portal page B and navigates to page 3 of the document in portlet B1.
5.  The user selects portal page C and navigates to page 4 of the document in portlet C1.
6.  The user selects portal page B. Portlet B1 displays page 3 of the document as before.
7.  The user selects portal page C. Portlet C1 displays page 4 of the document as before.
8.  The user selects portal page A. Portlet A1 displays page 1 of the document because this is the default state for this portlet. The previous state has been discarded because it is back in the view history by 3 pages already, and thereby exceeds the configuration setting of only 2 pages.
9.  The user selects page C. Portlet C1 still displays page 4 as before as it is within the configured history value of two stored pages.

Configuring the history setting might result in an inconsistent user experience, depending on the browser cache. If the user uses the Back button to navigate backwards rather than use explicit navigation, the user experience can be inconsistent if the user exceeds the configured view history size on the server. In this case the browser might display the portlets in their previous application state rather than the default state, because the markup is served from the client browser cache without a request to the server. However, if the view history has been exceeded, the server resets the portlet state to its default. Refreshing such a page displays the affected portlet in its default state rather than in the state that was displayed before the refresh operation. If you do not want to accept this behavior, set the size of the view history to the value 0. This means that the portlet application state never expires.

## View history limit influences only the navigational state of the application

The configured limit to the view history influences only the navigational state of portlet applications. It does not influence any of the following:

-   The **portal** view or navigational state.
-   The **session** state of a portlet application, that is any actions or transactions performed with the portlet.

Example scenario: View history limit influences only the navigational state of the application

1.  The configuration setting is set to a history value of 3.
2.  The user navigates to a shopping site.
3.  The user navigates through several views of pages and looks at various products.
4.  On a page X the user picks an item and puts it in the virtual shopping cart.
5.  The user navigates through four more page views and looks at more products.
6.  The user clicks the browser Back button four times to navigate backward to where the user placed the item in the shopping cart. The portal displays page X in its default state and not in the state in which it was when the user navigated to the next page. The reason is that the page view is back in the history by 4 navigational steps already and thereby exceeds the configuration setting of 3 views. However, the product that the user wants to purchase is not removed from the shopping cart as that information is part of the session state of the application.


**Related information**  


[URL generation by using the Navigational State SPI](../../../../extend_dx/apis/url_generation/urlgen_navstate_spi/index.md)

[Caching](../../../manage/config_portal_behavior/index.md)

[JSR 168: Portlet Specification](http://jcp.org/en/jsr/detail?id=168)

