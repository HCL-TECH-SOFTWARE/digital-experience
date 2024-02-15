# Configuring security on the Producer portal

You can configure security for the WSRP Producer portal and the provided portlets. If you enable security, the WSRP Producer processes the WSRP requests from the WSRP Consumer under the user identity that is associated with the WSRP request that the Consumer sent. This user identity is represented by a security credential that is included in the WSRP request message. The security credential is provided by the WSRP Consumer. Normally, it represents the identity of the user who is logged in to the Consumer Portal.

!!! note
    For the WSRP Producer, security for WSRP services is optional. You can configure it if required, but you do not have to provide security. If you provide security for your WSRP services, the WSRP Consumer must be configured to use the same security mechanism as the WSRP Producer from which the Consumer consumes portlets.

You can configure security for the WSRP Producer by using either of the following two authentication mechanisms:

-   **HTTP-cookie-based single sign-on**

    This security option is newly available with HCL Portal Version 8.5. To authenticate and identify the user and establish the security context for processing the WSRP request, the WSRP Producer uses LTPA V2 HTTP cookies that the WSRP Consumer sends as part of the WSRP request messages. The WSRP Producer receives the cookie and establishes the corresponding security context on the Producer side. This option requires configuration of the WSRP Consumer to forward HTTP cookies. It has the following advantages:

    -   It does not require configuration of the WSRP web services. It makes it possible for the WSRP Producer to accept and process both unauthenticated and authenticated requests.
    -   The Producer processes unauthenticated requests that do not contain an LTPA V2 cookie without establishing an individual security context.

-   **Web Service Security**

    You can configure the WSRP web service providers for Web Service Security according to the WS-Security standard. The WSRP Consumer sends a header that complies with the WS-Security standard as part of the WSRP request messages. The header contains credentials that identify and authenticate the user. For example, you can configure the Consumer portal to include Lightweight Third-Party Authentication \(LTPA\) version 1 or version 2 tokens or Username tokens in the WS-Security header. For this option, both the WSRP Consumer and the WSRP Producer must be configured for Web Services Security.

    The Web Service Security configuration is based on policy sets. HCL Portal provides a set of default policy sets and provider policy set bindings that can be attached to the WSRP service providers. If you configure your WSRP Producer for WS-Security, the Producer accepts and processes only authenticated requests. It rejects unauthenticated requests that do not contain a WS-Security compliant header.


For both security setup options, the WSRP Producer and the WSRP Consumer must be configured for Single Sign-On \(SSO\). The requirements for SSO depend on the authentication method that is used. For example, if you use LTPA version 1 or version 2, the WSRP Consumer and the WSRP Producer must use the same user registry or use the same realm. In addition, the WSRP Producer and the WSRP Consumer must exchange shared keys that are used to sign the security credentials.

If you use the Web Services Security option, the WSRP Producer accepts only authenticated request messages and rejects request messages that do not contain a suitable security header. In contrast, if you use the HTTP-cookie-based single sign-on security option, the WSRP Producer accepts both authenticated and unauthenticated request messages. If the message does not contain a security credential, the WSRP Producer does not establish a security context for processing the request. By default, the WSRP Producer performs access control for provided portlets.

You can choose to not set up security for the WSRP Producer and Consumer portals. In this case, the WSRP Producer does not process the WSRP requests from the Consumer under a specific user identity. Instead, the Producer processes the WSRP requests anonymously. In this case, the Consumer must not be configured for Web Service Security.

-   **[Securing the WSRP Producer by HTTP-cookie-based single sign-on](wsrpt_prod_sec_ws_http_cb_sso.md)**  
You can provide security for your WSRP Producer by using HTTP-cookie-based single sign-on \(SSO\). For using this security option, the WSRP Producer requires no configuration. The WSRP Consumer must be configured to send or forward LTPA V2 single sign-on cookies as part of the WSRP request message to the WSRP Producer.
-   **[Securing the WSRP Producer by WS-Security](wsrpt_prod_sec_ws_wss.md)**  
You can configure Web Services Security according to the WS-Security standard for your WSRP Producer and the provided web services.


