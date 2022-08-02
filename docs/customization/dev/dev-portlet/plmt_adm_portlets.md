# Administering portlets for Portlet load monitoring

You can administer the portlets that Portlet load monitoring monitors. You can check which portlets Portlet load monitoring monitors, and you can manually block or activate these portlets. For example, you can reenable a portlet after Portlet load monitoring blocked it.

1.  Log in to the portal by using a portal administrator user ID.

2.  Click the **Administration menu** icon. Then, click **Portlet Management** \> **Portlets**. The Manage Portlets portlet is displayed. It lists the portlets in your portal.

3.  Search for the portlet that you want to administer.

4.  Administer the portlet as required:

    -   For each portlet that is monitored by Portlet load monitoring, the Manage Portlets portlet displays an icon for disabling or enabling that portlet.
    -   If a portlet that is monitored by Portlet load monitoring is active, the list shows an icon for disabling that portlet. If you click this icon, the portlet is blocked by Portlet load monitoring and is no longer rendered in the portal.
    -   If a portlet that is monitored by Portlet load monitoring is blocked and inactive, the list shows an icon for enabling that portlet. If you click this icon, the portlet is enabled for rendering again.

        **Notes:**

        1.  If the portlet was blocked for exceeding the maximum number of concurrent requests and the number of requests did not decrease and you did not set the value for maximum number of requests to a higher value, clicking this icon has no effect. In this case, the portlet is blocked again with the next request that arrives for this portlet.
        2.  Activating a blocked portlet clears the response times that are stored for this portlet.

**Parent topic:**[Administering Portlet load monitoring](../dev-portlet/plmt_admin.md)

