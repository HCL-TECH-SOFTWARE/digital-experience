# History manager for pages

The history manager allows you to control for how many visited pages navigational state you want to tracked. In other words it controls the maximum number of pages whose state is contained in the portal URLs. The visited pages are tracked within the navigational state in a LRU algorithm based way.

The history manager provides a configurable threshold to define the maximum number of pages that are tracked. If the number of different tracked pages exceeds that threshold, the history manager discards the page that was visited the longest time ago is dropped out. With this page the portal also drops the state of the portlets on this page. Furthermore, the history manager this functionality allows you to define strategies for how to proceed with public render parameters. Limiting the navigational state to a maximum number of pages can reduce the length of the portal URLs.

**Notes:**

1.  The history manager applies to both anonymous and authenticated users, in other words it works on public and protected pages.
2.  The history manager is independent of the history expiration limit for swapped render parameters, which determines how long render parameters are kept for swapping into the session.

## Configuration of the history manager

The history manager provides the configuration settings listed in the following. You configure them in the WP State Manager Service in the WebSphere® Integrated Solutions Console. For details about this service and how to configure these settings see the topics about Setting service configuration properties and the State Manager Service.

-   **historymanager.enabled = \(true\)**

    This parameter allows you to disable \( `false` \) or enable \( `true` \) the history manager. The default value is `true`, that is the history manager is enabled.

-   **historymanager.threshold = \(10\)**

    This parameter allows you to configure the maximum number of different pages for which the navigational state is tracked. Set this parameter to a positive integer value. The default value is `10`.

-   **historymanager.prp.removalstrategy = \[no\_removal \| wcm\_id \| explicit\_bucket\_assignment\]**

    This parameter allows you to specify a strategy that defines how to proceed with public render parameters if the history manager removes the state of a page and the portlets on this page. As public render parameters might be used by portlets on different pages, the removal of public render parameters needs special handling. The possible values have the following meaning:

    -   **no\_removal**

        Public render parameters are not removed. This means that only the portlet specific state is removed, for example private render parameters.

    -   **wcm\_id**

        Public render parameters are removed if the expired page has an explicit shared state bucket assigned that starts with the String `ibm.wcm.`.

    -   **explicit\_bucket\_assignment**

        Public render parameters are removed if the expired page has an explicit shared state bucket assigned, regardless of a prefix. This is a more general strategy than `wcm_id`. This is the default value.


## Example scenarios

The following examples can help explain the history manager functionality. For all examples the maximum configured number of pages that are tracked in the navigational state is set to `3`.

-   **Example 1:**

    A user visits portal pages in the following order: P1, P2, P3, P4. When the user navigates to page P4, the history manager removes the navigational state of page P1 and the states of all portlets on that page from the state.

-   **Example 2:**

    A user visits portal pages in the following order: P1, P1, P2, P3, P2, P3, P1. The history manager removes no state.

-   **Example 3:**

    A user visits portal pages in the following order: P1, P2, P3, P1, P4. When the user navigates to page P4, the history manager removes the navigational state of page P2 and the states of all portlets on that page.



