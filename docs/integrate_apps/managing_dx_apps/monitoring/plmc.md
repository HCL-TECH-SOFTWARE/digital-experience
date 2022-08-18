# Portlet load monitoring for HCL Portal

HCL Digital Experience now provides Portlet load monitoring. This can make your portal safer and more responsive.

Portlet load monitoring allows HCL Portal administrators to protect their portal by limiting the number of concurrent requests and the average response time allowed for JSR 168 or JSR 286 portlets. If a portlet exceeds either the defined maximum number of concurrent requests, or the average response time, then Portlet Load Monitoring no longer allows further requests by the portlet. Instead, the portal renders the portlet as unavailable, and the portlet code is no longer called for further requests. This way, the portal installation is protected from non-responsive portlets consuming an increasing number of threads.

These topics describe how you configure, administer, and use Portlet load monitoring and provides other useful information about it.

**Note:** Portlet load monitoring monitors JSR 168 and JSR 286 portlets only.

-   **[Configuring and administering Portlet load monitoring](../dev-portlet/plmc_cfg_admin.md)**  
Here is an overview of the configuration and administration tasks and parameters for Portlet load monitoring.
-   **[Portlet load monitoring properties](../dev-portlet/plmt_configuration.md)**  
By setting the portal and portlet configuration parameters, you can monitor the session load and configure the parameters to increase performance.
-   **[Administering Portlet load monitoring](../dev-portlet/plmt_admin.md)**  
You can administer Portlet load monitoring and the portlets that it monitors. You can determine whether and in which cases Portlet load monitoring blocks or reenables a portlet by setting its portlet preferences. You can also check which portlets Portlet load monitoring monitors, and you can manually block or activate these portlets. For example, you can reenable a portlet after Portlet load monitoring has blocked it.
-   **[Logging and auditing events](../dev-portlet/plmt_logging.md)**  
Portlet load monitoring allows you to log events. For example, this can help you audit events. When Portlet load monitoring blocks or enables a portlet, it creates a log file entry in the HCL Digital Experience log file SystemOut.log. This log file entry contains the portlet object ID, the portlet name, the WAR file name of the portlet and the EAR file display name. The log file entries consist of translated messages. If you use tools that monitor log files for events, you can check for log file entries that are related to Portlet load monitoring as described here.
-   **[API for accessing Portlet load monitoring data](../dev-portlet/plmr_api.md)**  
Portlet load monitoring provides an API for accessing the monitoring data. You can use this API to write custom code to access that data.

**Parent topic:**[Monitoring](../admin-system/monitoring_parent.md)

