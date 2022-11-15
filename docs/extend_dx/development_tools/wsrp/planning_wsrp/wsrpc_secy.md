# Security for WSRP services

HCL Portal supports two security mechanisms for WSRP.

You can configure security for WSRP in your HCL Portal, but you do not need to configure security.

If security is configured for both the WSRP Producer and the WSRP Consumer, the WSRP Consumer sends a security token to the WSRP Producer as part of the WSRP request message. The security token represents the identity of the current user of the Consumer portal. The WSRP Producer uses this security token to authenticate and identify the user. The WSRP Producer processes the WSRP request under this user identity and performs access control for the provided portlets. If the WSRP Producer cannot process the security token or cannot authenticate the user on the WSRP Consumer side, the WSRP Producer rejects the WSRP request.

HCL Portal supports the following security mechanisms:

-   **HTTP-cookie-based single sign-on**

    You can configure the WSRP Consumer to forward LTPA V2 cookies to the WSRP Producer as part of the WSRP request messages. The WSRP Producer uses these cookies to authenticate and identify the user and establish the security context for processing the WSRP request. This security option has the following advantages:

    -   It does not require configuration of the WSRP web services.
    -   It makes it possible for the WSRP Producer to accept and process both unauthenticated and authenticated requests. The Producer processes unauthenticated requests that do not contain an LTPA V2 cookie without establishing an individual security context. This way, it can serve requests from anonymous users.
-   **Web Services Security \(WSS\)**

    You can configure the WSRP Consumer and WSRP Producer for Web Services Security according to the WS-Security standard. With a WS Security configuration, the WSRP Consumer sends a header that complies with the WS-Security standard as part of the WSRP request messages. The header contains credentials that identify and authenticate the user. For this option, both the WSRP Consumer and the WSRP Producer must be configured for Web Services Security.


For a WSRP Producer, security configuration is optional. A WSRP Consumer must use the same security configuration as the WSRP Producer from which it consumes portlets. If the request message that is sent by the WSRP Consumer does not comply to the security configuration of the WSRP Producer, the WSRP Producer does not accept the message. If the request message from the WSRP Consumer contains the security token that the WSRP Producer expects, the Producer processes the request under the appropriate user identity. If the WSRP Producer is not configured for security, it processes WSRP requests under the anonymous user identity.

**Considerations for configuring security:**

-   **For Producer portals:**

    For a Producer portal, security for WSRP services is **optional**. You can configure securityt if required, but you do not have to do so.

    When you configure security, you must also configure Portal Access Control and assign access rights for the Consumer portal users on the Producer portal. Assign the access rights based on the security configuration information as follows:

    -   If you use security, assign access rights on the Producer portal to the actual Consumer portal users.
    -   If you do not use security, assign access rights to the anonymous user, or disable Portal Access Control for the WSRP Producer.
    By default, Portal Access Control is enabled for the WSRP Producer. For details about how to disable and enable Portal Access Control for the WSRP Producer, read *Configuring Portal Access Control for a WSRP Producer portal*.

-   **For Consumer portals:**

    -   For a Consumer portal, you must define a security configuration that is compatible with the security configuration of the Producer portal from which you consume WSRP services. This configuration must include all the appropriate security aspects.
    -   On the Consumer portal, the consumed portlets behave like local portlets. Therefore, you can configure Portal Access Control for the remote portlets on the Consumer portal the in same way as for local portlets. If you use Web Services Security, do not make the affected remote portlets available to anonymous users on the Consumer portal. Instead, configure Portal Access Control to make the affected remote portlets available to authenticated users only.
-   **For portals that work as both a Producer and a Consumer portal:**

    -   If you use your portal as both a Producer and a Consumer portal, the security configurations for both these roles are independent of each other.

For more detailed information about Portal Access Control, read the sections about *Configuring Portal Access Control for a WSRP Producer portal* and *Managing Access Control*.


**Related information**  


[Configuring Portal Access Control for a WSRP Producer portal](../admin-system/wsrpt_prod_sec_pac.md)

[Managing Access Control](../admin-system/sec_ac_adm.md)

[WebSphere Application Server product documentation version 8.5](http://www-01.ibm.com/software/webservers/appserv/was/library/)

[Updating a WSRP Producer](../migrate/mig_post_wsrp_producer.md)

[Updating a WSRP Consumer](../migrate/mig_post_wsrp_consumer.md)

