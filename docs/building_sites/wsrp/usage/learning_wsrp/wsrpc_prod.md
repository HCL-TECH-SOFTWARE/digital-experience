# WSRP Producer

WSRP Producers provide portlets for Consumers who integrate them into their portal for their users.

A WSRP Producer is a portal that provides WSRP services. These WSRP services make it possible for Consumers to access and call portlets on the Producer portal. Consumer portals can then consume portlets from the Producer portal as remote portlets by calling these WSRP services. The Producer works as the "server" of the WSRP communication.

A WSRP Producer provides one or more portlets through WSRP services for invocation by Consumer applications from remote sites. The Producer portal receives the requests from the Consumer portal to the WSRP service. The Producer portal generates the markup as required and sends it to the Consumer portal, where it is displayed for the user who started the request.

To allow communication between the Producer portal and the Consumer portal, the Producer provides a set of web service interfaces to the Consumers. These interfaces are defined by the WSRP standard. The Producer can make some or all of these interfaces available to the Consumers as appropriate. The Producer provides a description for the WSRP service interfaces and WSRP services in a service description document. The format of the service description document is defined in the Web Services Description Language \(WSDL\) standard. This WSDL service description also provides general technical information, for example, the endpoint addresses of the WSRP services.

**Parent topic:**[Learning about WSRP](../admin-system/wsrpc_learn.md)

