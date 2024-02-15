---
id: h_mport_plm_block
title: Blocking or unblocking requests to a portlet
---




You can block or unblock requests to a portlet. Usually you do this with portlets that Portlet load monitoring monitors. You can also check whether requests to a portlet have been blocked or whether the portlet can receive requests.

Portlets that Portlet load monitoring monitors show an icon for blocking or unblocking requests to the portlet. Depending on whether requests have been blocked for a portlet, Manage Portlets can also show the status for such a portlet in the status column.

-   **Unblocked**

    This portlet is enabled to receive requests. To block requests to the portlet, click the icon. On the confirmation prompt click **OK**.

-   **Blocked**

    This portlet is blocked for requests. It has either been blocked by Portlet load monitoring, or an administrator has blocked it manually, depending on what the status column shows:

    -   **Exceeded limit**

        Portlet load monitoring has blocked requests to the portlet.

    -   **Admin blocked**

        An administrator has blocked requests to the portlet.

    **Notes:**

    1.  If Portlet load monitoring blocked this portlet from requests for exceeding the maximum number of concurrent requests and the number of requests did not decrease and you did not set the value for maximum number of requests to a higher value, clicking this icon has no effect. In this case, the portlet is blocked again with the next request that arrives for this portlet.
    2.  Activating a blocked portlet clears the response times stored for this portlet.

