# Exchanging the required information between Producer and Consumer portals

The WSRP standard defines the interfaces and the protocol for communication between the Producer portal and the Consumer portal. The Producer portals provide WSRP services that can be called to invoke provided portlets. The Consumer portals request WSRP services to call the remote portlets.

Currently, there are two versions of the WSRP standard, WSRP 1.0 and WSRP 2.0. HCL Portal supports both versions of the WSRP standard.

WSRP builds upon existing web service technology and web service standards. The WSRP implementation of HCL Portal 8.5 is built on the JAX-WS based web service stack of IBM® WebSphere® Application Server. The WSRP implementation in earlier versions of HCL Portal was based on the web service stack that is based on the JAX-RPC standard. WSRP in HCL Portal 8.5 can interoperate with WSRP counterparts that are built on other web service stacks, such as JAX-RPC. In particular, WSRP in HCL Portal 8.5 can communicate and interoperate with WSRP counterparts in HCL Portal Version 8.0 and earlier versions.

WSRP defines a set of four web service interfaces. Two of these web service interfaces are mandatory and two are optional. The following table shows how the WSRP Producer and the WSRP Consumer support the interfaces:

|Web service interface|Supported by HCL Portal WSRP Producer|Supported by HCL Portal WSRP Consumer|
|---------------------|-------------------------------------|-------------------------------------|
|Service Description|Yes|Yes|
|Markup|Yes|Yes|
|Registration (optional)|No|Yes|
|Portlet Management (optional)|Yes|Yes|

Currently, the WSRP Producer implementation of the portal does not support the Registration interface of the WSRP specification. However, the Consumer implementation of the portal can interoperate with Producers that support WSRP Registration interfaces.

To set up communication with a Producer portal, the Consumer portal requires the following information from the Producer portal:

-   The WSDL (Web Services Description Language) service description document, which provides the following information:
    -   Descriptions of the WSRP interfaces and WSRP services that the Producer provides.
    -   Technical information, such as the service endpoint addresses.
-   Information about the quality of service and security configuration of the WSRP services on the Producer portal.

When the Consumer has this information, the administrator of the Consumer portal can configure the Consumer portal accordingly. After this configuration, the Consumer can consume remote portlets from the Producer portal.

Depending on the overall WSRP setup, the Consumer might in turn provide information to the Producer. For example, if the Producer portal has security configured, the Consumer can send user IDs of Consumer portal users to the Producer. The Producer can then give these users access to the provided portlets. The Consumer portal users can then work with the portlets that the Consumer portal consumes from the Producer.

The information that follows here describes details of the WSRP Producer and the WSRP Consumer. These details are relevant for the administrators of their respective portals. For example, an administrator of the WSRP Producer must know which service providers the WSRP Producer supports. An administrator of the WSRP Consumer normally does not need to know about the implementation details of a WSRP Producer.

## Service providers of the WSRP Producer

To comply with the JAX-WS standard, the WSRP Producer of HCL Portal provides a set of service providers that implement the WSRP web service interfaces. The following table lists the supported service providers:

|Web service interface|WSRP 1.0 service provider|WSRP 2.0 service provider|WSRP 2.0 service provider for portal-internal WSRP communication|
|---------------------|-------------------------|-------------------------|----------------------------------------------------------------|
|Service Description|`WSRPServiceDescriptionService`|`WSRPServiceDescriptionService_v2`|`WSRPServiceDescriptionService_v2_internal`|
|Markup|`WSRPBaseService`|`WSRPBaseService_v2`|`WSRPBaseService_v2_internal`|
|Portlet Management|`WSRPPortletManagementService`|`WSRPPortletManagementService_v2`|`WSRPPortletManagementService_v2_internal`|

You can administer and configure each of the WSRP 1.0 and 2.0 service providers separately. You administer and configure them by using the administration clients of WebSphere Application Server. For example, you can use the WebSphere Integrated Solutions Console.

!!!note
    Do not change the configuration of the WSRP 2.0 service providers for portal-internal WSRP communication. These service providers are used internally by HCL Portal during client side aggregation. Remote consumer portals cannot access these service providers.

## Service clients and references of the WSRP Consumer

The WSRP Consumer of HCL Portal provides a set of service clients and default service references. The set includes two service clients, one each to support WSRP 1.0 and WSRP 2.0 and the respective port types or web service interfaces. There is one default service reference per service client. You can configure and administer the service clients and service references by using the WebSphere Integrated Solutions Console. For example, you can use the WebSphere Integrated Solutions Console to configure WSRP service providers and WSRP service clients by attaching policy sets. You can configure each service client and service reference separately.

The following table lists the supported service clients and service references:

| |WSRP 1.0|WSRP 2.0|
|--|--------|--------|
|Service client|`WSRPService`|`WSRPService_v2`|
|Service reference|service/wsrp/WSRPService|service/wsrp/WSRPService_v2|

The service clients support all WSRP service interfaces: Service Description, Markup, Portlet Management, and Registration.

!!!note
    The configuration of the WSRP service clients is managed outside HCL Portal. The portal WSRP Consumer supports all service client configurations that are configured in WebSphere Application Server. This support includes message level security, transport level security, and other quality of service configuration. However, the service client configuration of the WSRP Consumer must be compatible with the web service configuration of the WSRP Producer. Example: If the service providers of the Producer portal are configured for WS-Security, the service references of the Consumer portal must also be configured for WS-Security. Otherwise, the WSRP communication fails.


???+ info "Related information"  
    -   [How Producer and Consumer portals communicate](../../wsrp/learning_wsrp/wsrpc_comint.md)

