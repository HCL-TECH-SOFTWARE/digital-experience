# Securing the WSRP Producer by HTTP-cookie-based single sign-on

You can provide security for your WSRP Producer by using HTTP-cookie-based single sign-on \(SSO\). For using this security option, the WSRP Producer requires no configuration. The WSRP Consumer must be configured to send or forward LTPA V2 single sign-on cookies as part of the WSRP request message to the WSRP Producer.

The single sign-on cookie represents a security credential that can be understood both by the WSRP Consumer and the WSRP Producer. The WSRP Producer receives the cookie and establishes the corresponding security context for the user on the Producer side.

For using HTTP-cookie-based single sign-on, the WSRP Producer must not be configured for Web Services Security.

-   **Prerequisites for using HTTP-cookie-based single sign-on:**

    For using HTTP-cookie-based single sign-on \(SSO\), single sign-on must be configured between the WSRP Consumer and the WSRP Producer. This configuration requires the following two prerequisites:

    -   The WSRP Consumer and the WSRP Producer must be configured to use a shared user registry.
    -   The LTPA keys must be exchanged between WSRP Consumer and WSRP Producer.
-   **Required WSRP Consumer configuration:**

    For using HTTP-cookie-based single sign-on, the WSRP Consumer must be configured to forward single sign-on cookies to the WSRP Producer. For more information, read *Securing the WSRP Consumer by HTTP-cookie-based single sign-on*.


**Parent topic:**[Configuring security on the Producer portal](../admin-system/wsrpt_prod_sec_ws.md)

**Related information**  


[Securing the WSRP Consumer by HTTP-cookie-based single sign-on](../admin-system/wsrpt_cons_sec_ws_http_cb_sso.md)

