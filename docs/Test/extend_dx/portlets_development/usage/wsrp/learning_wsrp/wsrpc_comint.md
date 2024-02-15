# How Producer and Consumer portals communicate

The WSRP standard defines the interfaces and the protocol for communication between the Producer portal and the Consumer portal.

To set up communication with a Producer portal, the Consumer portal requires the following information from the Producer portal:

-   The WSDL \(Web Services Description Language\) service description document, which provides the following information:
    -   Descriptions of the WSRP interfaces and WSRP services that the Producer provides.
    -   Technical information, such as the service endpoint addresses.

-   Information about the quality of service and security configuration of the WSRP services on the Producer portal.

When the Consumer has this information, the administrator of the Consumer portal can configure the Consumer portal accordingly. After this configuration, the Consumer can consume remote portlets from the Producer portal.

Depending on the overall WSRP setup, the Consumer might in turn provide information to the Producer. For example, if the Producer portal has security configured, the Consumer can send user IDs of Consumer portal users to the Producer. The Producer can then give these users access to the provided portlets. The Consumer portal users can then work with the portlets that the Consumer portal consumes from the Producer.


???+ info "Related information"
    - [Exchanging the required information between Producer and Consumer portals](../planning_wsrp/wsrpc_xchg_info.md)
    - [Information that the Producer exchanges with the Consumer](../portal_wsrp_producer/wsrp_producer_info/index.md)
    - [Information that the Consumer exchanges with the Producer](../portal_wsrp_consumer/wsrp_consumer_info/index.md)

