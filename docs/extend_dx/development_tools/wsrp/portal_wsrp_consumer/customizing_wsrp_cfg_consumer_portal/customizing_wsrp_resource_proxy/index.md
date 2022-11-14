# Customizing the WSRP resource proxy

The WSRP resource proxy is used by the WSRP Consumer to load resources that are referenced by remote portlets.

Depending on your environment, it can be necessary to customize the resource proxy behavior with regards to the following aspects:

-   SSL settings for secure connections to remote resources
-   LTPA token forwarding for single sign-on scenarios
-   Proxy server settings for outbound connections
-   Support for relative URLs
-   HTTP basic authentication for outbound connections
-   HTTP headers that are not forwarded.

-   **[Customizing the WSRP resource proxy SSL settings](../admin-system/wsrpt_cons_cust_resproxy_ssl.md)**  
The WSRP resource proxy uses one SSL configuration for all secure outbound connections.
-   **[Customizing the WSRP resource proxy for LTPA token forwarding](../admin-system/wsrpt_cons_cust_resproxy_ltpa.md)**  
The WSRP resource proxy can forward single sign-on cookies \(LTPA, LTPA2\) from the client requests to resources in the same single sign-on domain.
-   **[Customizing the WSRP resource proxy for proxy server support](../admin-system/wsrpt_cons_cust_resproxy_srv.md)**  
The WSRP resource proxy supports HTTP proxy servers. It can connect directly to remote resources or to a proxy server that forwards the requests to remote resources.
-   **[Disabling support for relative URLs for the WSRP resource proxy](../admin-system/wsrpt_cons_cust_resproxy_dsbl.md)**  
By default, the WSRP resource proxy serves resources relative to the current resource proxy URI. You can disable the support for relative URLs.
-   **[Customizing the WSRP resource proxy for basic authentication](../admin-system/wsrpt_cons_cust_resproxy_basauth.md)**  
You can customize the WSRP resource proxy for HTTP basic authentication.
-   **[Customizing the WSRP resource proxy HTTP header forwarding behavior](../admin-system/wsrpt_cons_cust_resproxy_frwrd.md)**  
By default, the WSRP resource proxy forwards all HTTP headers from the client request except for the host header and cookie headers. You can define further headers that you do not want to be forwarded.


**Related information**  


[Cookie support](../admin-system/wsrpc_cookie.md)

