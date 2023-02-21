# Configuring security on the Consumer portal

You can configure security for the WSRP Consumer. If you enable security, the WSRP Consumer sends a security token as part of the WSRP request message to the WSRP producer. The security token represents the identity of the user who is logged in to the Consumer Portal. The WSRP Producer uses the security token to process the WSRP requests under the user identity that is represented by the security token.

For a WSRP Producer, security for WSRP services is optional. If a WSRP Producer requires security, the WSRP Consumer must be configured to use the same security mechanism as the WSRP Producer. Otherwise, the Consumer cannot consume the portlets that the Producer provides.

Example: A Producer might configure message authentication Web Service Security for the WSRP services by using a particular security token type according to the WS-Security standard. In this case, the WSRP Consumer web services must also be configured for web service security, and they must use the same security token type message authentication. You can configure security for the WSRP Consumer by using either of the following two authentication mechanisms:

-   **HTTP-cookie-based single sign-on**

    The WSRP Consumer forwards LTPA v2 HTTP cookies that it receives from the client to the Producer as part of the WSRP request messages. The WSRP Producer receives the cookie and establishes the corresponding security context on the Producer side. This option requires configuration of the WSRP Consumer to forward HTTP cookies. It has the following advantages:

    -   It does not require configuration of the WSRP web services. It makes it possible for the WSRP Producer to accept and process both unauthenticated and authenticated requests.
    -   The Producer processes unauthenticated requests that do not contain an LTPA V2 cookie without establishing an individual security context.
    
-   **Web Services Security**

    You can configure the WSRP Consumer to use Web Service Security according to the WS-Security standard. The WSRP Consumer sends a header that complies with the WS-Security standard as part of the WSRP request messages. The header contains credentials that identify and authenticate the user. For example, you can configure the Consumer portal to include Lightweight Third-Party Authentication (LTPA) tokens or Username tokens in the WS-Security header. For this option, both the WSRP Consumer and the WSRP Producer must be configured for Web Services Security.

    When you configure the WSRP Consumer for Web Service Security, you can choose the security token type for the WSRP ports of a Producer definition. If you configured the security token type, the WSRP Consumer portal creates a security token of the selected type when it sends a request to the respective WSRP port of the Producer.

    By alternative, you can manage the configuration of the WSRP service clients in IBM® WebSphere® Application Server by using policy sets. This type of management includes the security-related aspects and the quality of service related aspects of the service configuration. You configure the service clients and service references of the WSRP Consumer by attaching an appropriate policy set to the service client. HCL Digital Experience provides a set of default policy sets and client policy set bindings. To configure them, you use the WebSphere® Application Server administration functions.

For both setup options, the WSRP Producer and the WSRP Consumer must be configured for Single Sign-On (SSO). The requirements for SSO depend on the authentication method that is used. For example, if you use LTPA V2, the WSRP Consumer and the WSRP Producer must use the same user registry or use the same realm. In addition, the WSRP Producer and the WSRP Consumer must exchange shared keys that they use to sign the security credentials.

???+ info "Related information"
    -   [Access permissions](../../../../../../../deployment/manage/security/people/authorization/controlling_access/resources_roles/sec_acc_rights.md)
    -   [Enabling remote rendering with WSRP and the Web Content Viewer](../../../../../../../manage_content/wcm_delivery/deliver_webcontent_on_dx/enable_remote_render_wsrp/index.md)
    -   [Updating a WSRP Consumer](../../../../../../../deployment/manage/migrate/next_steps/post_mig_activities/portal_task/wsrp/mig_post_wsrp_consumer.md)

