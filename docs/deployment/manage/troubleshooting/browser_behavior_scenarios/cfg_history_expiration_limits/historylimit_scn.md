# History expiration limit for render parameters

You can configure the portal so that it discards the render parameters for pages that the user has not visited recently within the same session. The purpose of this setting is to limit the URL length. This might be of benefit for the performance of your portal. The portal discards the navigational state of the portlet application of standard API portlets on pages that are too far back in the history.

You can specify the number of different page visits after which the history mechanism can discard the render parameters of the portlet. Your setting determines how far backwards users can at least navigate in the recent history of portal pages that they visited. The number that you specify defines the minimum number of different pages selected by the user after which the portal can discard the render parameters of a page. The decision whether the render parameters of the page are actually discarded depends on the expiration policy of the internal cache that stores the render parameters of those pages. If the user returns to a page after visiting the specified number of other pages and if the render parameters of that page have expired, the portal displays that page in its default state.

You configure the expiration limit for render parameters by setting the following property to an integer in the WP State Manager Service in the WebSphere® Integrated Solutions Console. For details about this service and how to configure these settings see the topics about Setting service configuration properties and the State Manager Service. You can specify by which circumstances the render parameters of a page are stored or discarded.

-   **keymanager.lru.size**

    Specify one of the following values:

    -   **1**

        Each time that the user selects a different page, the render parameters of the portlets on the previously selected page can be discarded.

    -   **A positive integer**

        Specify the required number of pages. The render parameters of a given page can be discarded after the user has visited that number of other pages.

    -   **0**

        Render parameters are always stored in the portal session memory and never discarded.

    **Note:** Do not specify a value less than zero \( **0** \). Negative values are considered to be not valid.


Example scenario: Configuring a limit to the history of viewed pages

1.  The configuration setting is set to a history value of 2.
2.  The portal pages A, B, and C contain separate instances of the standard portlet API compliant document viewer portlet A1, B1, and C1. Each of the portlets display page 1 of the same document on each page A, B, and C. This is the default for the portlet.
3.  The user selects portal page A and navigates to page 2 of the document in portlet A1.
4.  The user selects portal page B and navigates to page 3 of the document in portlet B1.
5.  The user selects portal page C and navigates to page 4 of the document in portlet C1.
6.  The user selects portal page B. Portlet B1 displays page 3 of the document as before.
7.  The user selects portal page C. Portlet C1 displays page 4 of the document as before.
8.  The user selects portal page A. Portlet A1 displays page 1 of the document because this is the default state for this portlet. The previous state has been discarded because it is back in the view history by 3 pages already, and thereby exceeds the configuration setting of only 2 pages.
9.  The user selects page C. Portlet C1 still displays page 4 as before as it is within the configured history value of two stored pages.


