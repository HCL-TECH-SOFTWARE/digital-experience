# Information that the Producer exchanges with the Consumer

As a WSRP Producer, you must provide information to Consumers of your WSRP services so that they can prepare for consuming them as remote portlets. Depending on the configuration, you might also need information from the Consumer.

The exchange between Producers and Consumers includes the following information:

-   [WSRP service description](wsrpc_prod_prep_info.md#web_srvc_dscrpt)
-   [WSRP services configuration](wsrpc_prod_prep_info.md#wsrp_secy)
-   [Information about portal users](wsrpc_prod_prep_info.md#inf_ptl_usrs)
-   [Registration information](wsrpc_prod_prep_info.md#rgstr_info)

## WSRP service description

WSRP Consumers need information about how to bind to the WSRP services that the Producer provides. This information is described in the Web Service Description Language \(WSDL\) document of the Producer. The WSDL document provides general technical information about how the Consumer connects to the Producer and about the related infrastructure. The Consumer can use the information in the WSDL document to bind to the Producer and retrieve the Producer's service description for further details about the Producer.

The WSDL document provides information about various aspects and properties of the Producer:

-   The WSRP services that the Producer provides
-   The end-point addresses of the WSRP services.

As a Producer you can customize the content of the WSDL service document that you provide to WSRP Consumer portals.

## WSRP services configuration

The Producer must provide information about the configuration of the WSRP web services to the Consumer. The Producer web service configuration is not described in the WSDL service description document. For WSRP communication to be successful, the WSRP producer web service configuration and the WSRP Consumer web service configuration must be compatible. The administrator of the WSRP Consumer portal must ensure that the WSRP Consumer portal uses a web services configuration that is compatible with the configuration of the Producer portal.

Example: The Producer configures web service security by using LTPA V2 tokens for WSRP services. If the Consumer sends messages that are secured by a different mechanism or not secured at all, the Producer cannot accept the messages.

Depending on the mechanism that is used for security, the Producer and Consumer portals must be set up specifically. For example, a security mechanism can require a user repository that is shared between the Consumer and Producer portals. Other security mechanisms can also require an exchange of certificates or public keys between the Consumer and Producer portals. For details about the prerequisites and implications of web service configuration and security, read the WebSphere® Application Server product documentation.

## Information about portal users

If the Producer portal has security for its WSRP services set up, the administrator of the Producer portal must assign access permissions to the users of the Consumer portal by using Portal Access Control. In this case, the Producer must obtain the required user information from the Consumer.

## Registration information

If the Producer requires registration by the Consumer portal, the Producer must provide the required registration information to the Consumer.

-   **[Producer checklist for exchanging information with a Consumer](../admin-system/wsrpr_prod_chklst.md)**  
Use this list to check whether you provided and obtained all required information that you must exchange with the Consumer.

**Parent topic:**[Using your portal as a WSRP Producer](../admin-system/wsrpt_prod_use.md)

**Previous topic:**[Securing a WSRP Producer portal](../admin-system/wsrpt_prod_prep_sec.md)

**Next topic:**[Providing WSRP services as a Producer](../admin-system/wsrpt_prod_prvd_ws.md)

**Related information**  


[How Producer and Consumer portals communicate](../admin-system/wsrpc_comint.md)

