# CORS and remote web content rendering with WSRP and the Web Content Viewer 

Cross-origin resource sharing \(CORS\) describes a mechanism for supporting requests that a web page sends to a server that is not in the same domain as the originating web page. The CORS concept must be supported by both the web browser and the server.

For more information about the CORS support in HCL Digital Experience, read *Manage CORS in HCL Portal*.

If you use remote rendering with WSRP and the Web Content Viewer portlet as your web content delivery model, you must make yourself familiar with CORS. In the **Edit shared settings** and **Configure** modes, a consumed Web Content Viewer portlet uses XMLHttpRequests to load information from the remote web content portal. CORS can prevent this remote connection from being successful. Usually, the remote web content portal that acts as the WSRP Producer is in a different domain than the portal with the Web Content Viewer portlet that acts as the WSRP Consumer. Therefore, the Producer portal can reject XMLHttpRequests when you try to configure the consumed Web Content Viewer portlet on your Consumer portal.

Web browsers can implement CORS in different ways or not at all. Therefore, you might experience issues only when you use a specific web browser. In case of such issues, the JavaScript console shows that requests made by the Web Content Viewer portlet result in an error with HTTP status code 403 \(Forbidden\). Example: `PROPFIND http://WSRP\_CONSUMER\_HOSTNAME:WSRP\_CONSUMER\_PORT/WSRP\_CONSUMER\_CONTEXT\_ROOT/WsrpProxyPortlet/ResourceProxy/.../WSRP\_PRODUCER\_CONTEXT\_ROOT/mycontenthandler/dav/content/libraries/ 403 (Forbidden)`

If you experience issues when you use the **Edit shared settings** or **Configure** mode of the consumed Web Content Viewer portlet as described earlier, you can choose one of the following options:

-   The best solution is to add the WSRP consumer as a trusted origin to the whitelist of the WSRP Producer. For more information, read *Manage CORS in HCL Portal*.

    **Note:** If you choose this option, be aware that you might need to repeat this configuration after you upgrade or migrate your HCL Portal to a newer version.

-   Configure the WSRP resource proxy of the WSRP consumer to prevent it from forwarding the `Origin` HTTP header that CORS uses. If the requests do not contain the header, the remote web content portal does not reject the requests. For more information, read *Customizing the WSRP resource proxy HTTP header forwarding behavior*.

    **Note:** If you choose this option, make sure that you fully understand the implications of removing the `Origin` HTTP header. The target server treats all requests that are made through the WSRP resource proxy as same-origin requests, even if the target server supports CORS and normally rejects requests from that domain.

-   Disable the CORS support of the WSRP Producer portal. To disable CORS, set the property `com.ibm.portal.csrf.enabled` of the portal WP Configuration Service resource environment provider to `false`. Then, restart your portal for the changes to take effect. For details, about how to set portal service configuration properties, read *Setting service configuration properties*.

    **Note:** If you choose this option, make sure that you fully understand the implications of disabling the CORS support. With disabled CORS support, the portal accepts all cross-origin requests that it rejects if the CORS support is enabled.


**Parent topic:**[Enabling remote rendering with WSRP and the Web Content Viewer ](../wcm/wcm_config_wcmviewer_wsrp.md)

**Related information**  


[Customizing the WSRP resource proxy HTTP header forwarding behavior](../admin-system/wsrpt_cons_cust_resproxy_frwrd.md)

[Setting service configuration properties ](../admin-system/adsetcfg.md)

