# Configuring WSRP Producer ports for Web Service Security on the Consumer portal 

You can configure each WSRP port of a particular Producer definition for web service security by using LTPA or username tokens.

If you configure web service security for a Producer port, the WSRP Consumer creates a WS-Security-compliant header. The header contains a security token. When the Producer receives a WSRP request message that contains a WS-Security header, it processes the request under the user identity that is represented by the security token and performs access control for provided portlets.

HCL Portal Version 8.5 provides three security token types for the most common scenarios. The following list describes these scenarios. In a default portal installation, none of the Producer ports is configured for message authentication or a token type. If your setup does not require security, you do not need to configure the Producer ports.

-   **LTPAv2\_Token**

    The Consumer portal provides an LTPA version 2 token in the WS-Security message header. This token type requires that Consumer and Producer portals share their user registry and LTPA configuration.

-   **LTPA\_Token**

    The Consumer portal provides an LTPA version 1 token in the WS-Security message header. This token type requires that the Consumer and Producer portals share their user registry and LTPA configuration.

    **Note:**

    IBM® WebSphere® Application Server Version 8.5 supports the LTPA v2 token by default. Use the LTPA\_Token only if a Producer requires an LTPA v1 token and cannot be configured to use LTPA v2 tokens. A HCL Portal Version 8.5 Producer does not require LTPA v1 tokens. If you use a HCL Portal V 8.5 Producer, do not use this token type.

    As WebSphere® Application Server Version 8.5 does not support LTPA v1 by default, you need to enable the single sign-on interoperability mode in WebSphere® Application Server to use LTP v1. To do so, use the single sign-on \(SSO\) panel within the WebSphere® Integrated Solutions Console. For more information about this option, read the documentation about single sign-on settings in the WebSphere® Application Server product documentation. If you select this token type and did not enable LTPA v1 tokens before, the WSRP Consumer throws an exception when trying to create the security token for a WSRP request message.

-   **Username\_Token**

    The Consumer portal provides a username token in the WS-Security message header. The username token specifies the user name in clear text.


You can set the token types by either of the following two ways:

-   You can use the portal administration portlet Web Service Configuration.

    Proceed as follows:

    1.  In the portlet, go to the section for the port settings of the specific Producer for which you want to set the token types.

    2.  From the list of service references and token types, select the token type for each port.

        By default, this list offers the three security token types. If you have defined custom service references, the list also offers these services. You can select either of the token types and custom service references from this list:

        -   If you select a token type, the WSRP Consumer uses the default WSRP service reference for this port. Additionally, it includes a security token of the specified type in the WS-Security header of the WSRP request messages.
        -   If a custom service reference is available and you select it, the WSRP Consumer uses this service reference. It does not generate extra security tokens.
        -   If you do not select anything from this list, the WSRP Consumer uses the default WSRP service reference. It does not generate security tokens.
-   You can use the portal XML configuration interface \(XMLAccess\) to set port specific settings, for example token types.

    For information about the XML configuration interface and how to use it, read the information about the *XML configuration interface*.


The WSRP Consumer provides a token of the selected type in the WS-Security header of WSRP request messages that are sent to the appropriate Producer port. No further security mechanism, such as message integrity or message confidentiality, is used. If you plan a more complex service configuration or if you plan to use another token type, read *Configuring WSRP web service clients*.

The token types correspond to the default WSRP policy sets and provider policy bindings that are available for the configuration of Producers. The tokens are also compatible to a corresponding HCL Portal Version 7 or 8 Producer security configuration.

**Parent topic:**[Configuring security on the Consumer portal ](../admin-system/wsrpt_cons_prep_sec.md)

**Related information**  


[Updating a WSRP Consumer ](../migrate/mig_post_wsrp_consumer.md)

