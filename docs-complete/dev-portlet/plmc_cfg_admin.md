# Configuring and administering Portlet load monitoring 

Here is an overview of the configuration and administration tasks and parameters for Portlet load monitoring.

-   **Portal wide configuration**

    You can do the following configuration tasks for Portlet load monitoring:

    -   Enabling or disabling Portlet load monitoring in your portal.
    -   Setting the sample number of requests by which the average response time for portlets is calculated. For example, if you set the sample number to 50, the average response time is calculated from the latest 50 requests that this portlet served. This setting is related to the average response time setting listed under administrative tasks.
    Perform both of these tasks in the WebSphere® Integrated Solutions Console. These settings apply to all portlets that Portlet load monitoring monitors.

-   **Portlet preferences configuration and administration**

    You can set the following parameters for individual portlets in the portlet preferences. You can either configure these parameters in the portlet.xml file before you deploy the portlet or administer them later by using the **Manage Portlets** administration portlet:

    -   Maximum number of concurrent requests that are allowed for a portlet
    -   Reactivation limit of concurrent requests that are allowed for reactivating the portlet
    -   Allowed average response time. You can configure the sample number of requests by which this average response time for portlets is calculated as mentioned previously under configuration tasks.
-   **Portlet load monitoring administration**

    You can also do the following administrative tasks on individual portlets by using the **Manage Portlets** portlet only:

    -   Check whether a portlet is being monitored by Portlet load monitoring
    -   Manually reenable a portlet that Portlet load monitoring has blocked
    -   Manually block a portlet that is being monitored by Portlet load monitoring from responding to requests.

**Parent topic:**[Portlet load monitoring for HCL Portal ](../dev-portlet/plmc.md)

