# OpenAjax security and remote web content rendering with WSRP and the Web Content Viewer

The Enabler from the Mashups 3.0.0.1 component that is included in HCL Digital Experience as a theme module implements some features that are specified by the OpenAjax Alliance. One of them is a generic override for Dojo XMLHttpRequests.

It adds the following extra HTTP request headers:

-   **com.ibm.lotus.openajax.virtualhost**

    This header specifies the virtual host name that the portal uses to create absolute URLs.

-   **com.ibm.lotus.openajax.virtualport**

    This header specifies the virtual host port that the portal uses to create absolute URLs.


As a consumed Web Content Viewer portlet uses Dojo XMLHttpRequests in specific situations, those HTTP request headers can cause issues. For example, to configure the portlet to render a web content element remotely, the portlet dynamically loads the elements of the selected web content item from the remote web content portal, that is the WSRP Producer. The corresponding requests include the `com.ibm.lotus.openajax.*` HTTP request headers that are mentioned before. They identify the WSRP Consumer portal that renders the web content as a virtual host. The WSRP resource proxy then uses the virtual host as the target server. As a result, the WSRP resource proxy uses the web content delivery portal \(the WSRP Consumer\) as the target server instead of the remote web content portal. Eventually, the WSRP resource proxy requests fail with HTTP status code 404 \(Not Found\).

If you experience issues when you configure the consumed Web Content Viewer portlet as described earlier, you can choose one of the following options:

-   As the Enabler component implements the override for Dojo XMLHttpRequests, check whether your portal really requires that component. If you find that you do not need any Enabler functions on your web content delivery portal, you can change your theme and theme modules to prevent the mm\_enabler theme module from being loaded. For more information, read *The module framework*.
-   Configure the WSRP resource proxy of the WSRP Consumer to prevent it from forwarding the `com.ibm.lotus.openajax.virtualhost` and `com.ibm.lotus.openajax.virtualport` HTTP headers that are set by the Enabler component. If the headers are not present in the Dojo XMLHttpRequests, the WSRP resource proxy addresses the remote web content portal correctly. For more information, read *Customizing the WSRP resource proxy HTTP header forwarding behavior*.


**Related information**  


[The module framework](../dev-theme/themeopt_module.md)

[Customizing the WSRP resource proxy HTTP header forwarding behavior](../admin-system/wsrpt_cons_cust_resproxy_frwrd.md)

