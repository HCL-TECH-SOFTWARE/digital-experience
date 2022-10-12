# Securing the WSRP Consumer by HTTP-cookie-based single sign-on

You can configure your WSRP Consumer for using HTTP-cookie-based single sign-on. For this option, you must configure the WSRP Consumer to send or forward LTPA V2 single sign-on cookies as part of the WSRP request message to the WSRP Producer.

The single sign-on cookie represents a security credential that both by the WSRP Consumer and the WSRP Producer understand. The WSRP Producer receives the cookie and establishes the corresponding security context for the user on the Producer side. For using HTTP-cookie-based single sign-on, the WSRP Consumer must not use Web Services Security. In particular, if you plan to use this security option, you must not configure Web Services Security for the respective Producer definition.

-   **Prerequisites for using HTTP-cookie-based single sign-on:**

    For using HTTP-cookie-based single sign-on \(SSO\), single sign-on must be configured between the WSRP Consumer and the WSRP Producer. This configuration requires the following two prerequisites:

    -   The WSRP Consumer and the WSRP Producer must be configured to use a shared user registry.
    -   The LTPA keys must be exchanged between WSRP Consumer and WSRP Producer.

-   **Configuring the WSRP Consumer for HTTP-cookie-based single sign-on:**

    For cookie forwarding of the LTPA v2 cookie, follow the description given in *Customizing client cookie forwarding*. You need to create a cookie forwarding rule for the cookie named LtpaToken2. To include the Producer host and the hosts of all resources that are linked by the remote portlets, choose the `hostdomainname` parameter.


The following example properties contain cookie forwarding rules for using HTTP-cookie-based single sign-on:

-   **wsrp.consumer.cookieforward.LtpaToken2 = alpha.domain.com wsrp.consumer.cookieforward.LtpaToken = alpha.domain.com**

    With these settings, the WSRP Consumer forwards the LTPA v1 and LTPA v2 cookies that it received from the clients to the Producers and resources on host `alpha.domain.com`.

-   **wsrp.consumer.cookieforward.LtpaToken2 = .domain1.com,.domain2.com**

    With this setting, the WSRP Consumer forwards the LTPA v2 cookie that it received from the clients to all Producers and resources on hosts in the domains `domain1.com` and `domain2.com`



???+ info "Related information"  
    -   [Securing the WSRP Producer by HTTP-cookie-based single sign-on](../../../../wsrp/portal_wsrp_producer/securing_wsrp_prod_portal/cfg_security_producer_portal/wsrpt_prod_sec_ws_http_cb_sso.md)
    -   [Customizing Client Cookie Forwarding](../../../../wsrp/portal_wsrp_consumer/customizing_wsrp_cfg_consumer_portal/wsrpc_clnt_cook_frwrd.md)

