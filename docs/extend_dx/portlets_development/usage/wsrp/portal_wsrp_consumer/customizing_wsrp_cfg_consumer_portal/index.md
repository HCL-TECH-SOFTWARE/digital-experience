# Customizing the WSRP configuration of your Consumer portal

You can customize some aspects of you WSRP Consumer portal.

This customization is optional.

-   **[Customizing the WSRP resource proxy](../admin-system/wsrpt_cons_res_proxy.md)**  
The WSRP resource proxy is used by the WSRP Consumer to load resources that are referenced by remote portlets.
-   **[Configure timeout properties for the WSRP communication](../admin-system/wsrp_config_tmeout_prop.md)**  
You can configure web service timeout properties for the WSRP communication on the Consumer. You can configure the timeout properties in the WP Configuration Service or as a preference specifically for remote portlets.
-   **[Configure a limit for the size of file uploads](../admin-system/wsrp_config_limit_size_file_uplds.md)**  
You can configure a limit for the size of file uploads during an action request. You can also configure the Consumer behavior if a file upload exceeds the defined limit.
-   **[Switch off the caching of Producer service descriptions](../admin-system/wsrp_cons_switch_cach.md)**  
By default, the Consumer portal caches the WSRP service descriptions that it receives from Producers. If required, you can switch off the caching.
-   **[Customizing Client Cookie Forwarding](../admin-system/wsrpc_clnt_cook_frwrd.md)**  
A client can send cookies to the WSRP Consumer as part of an HTTP request. You can customize the WSRP Consumer to forward specific client cookies to the Producer ports or to other resources that are served by the WSRP Consumer as a proxy.
-   **[Configuring remote session invalidation](../admin-system/wsrpt_config_rem_sessn_invalid.md)**  
You can configure the WSRP Consumer to invalidate the remote session when a user explicitly logs out of the Consumer portal. If you enable remote session invalidation and a user logs out of the Consumer portal, the Consumer sends a releaseSessions WSRP request to all the Producers with which the user interacted. The Producers portals can then invalidate these sessions.


**Previous topic:**[Consuming portlets in a Consumer portal](../admin-system/wsrpt_cons_prtlt.md)

