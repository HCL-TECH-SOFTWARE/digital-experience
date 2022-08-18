# What is new in WSRP

WSRP in HCL Portal 8.5 is now based on the JAX-WS standard for Java based web services. It takes advantage of the improvements of the current JAX-WS based web services stack that is part of IBM WebSphere Application Server. The WSRP services are implemented as JAX-WS compliant service providers and service clients. To configure web service security and quality of service, you can manage them in the WebSphere Integrated Solutions Console by using policy sets.

HCL Portal now offers an extra security mechanism for WSRP. Besides, web services security, WSRP also supports HTTP-cookie-based Single Sign On \(SSO\). This security mechanism does not require web service configuration and allows the WSRP Producer to process both authenticated and unauthenticated requests. The WSRP Producer works with WSRP Consumer portals that are built either on JAX-WS or on other web service stacks, such as JAX-RPC. In particular, WSRP in HCL Portal Version 8.5 works with WSRP counterparts in earlier versions of HCL Portal. The WSRP implementation in earlier versions of HCL Portal was based on the JAX-RPC API and the JAX-RPC web service stack.

## New in CF 05

The WSRP Consumer markup caching feature now offers better performance. You can now use WSRP markup caching without enabling the portlet container fragment caching. With a new configuration parameter, you can enable and disable markup caching specifically for selected remote portlets or for all remote portlets of a Consumer portal.

The WSRP Consumer provides multiple new configuration parameters for defining two-phase rendering behavior, WSRP response timeouts, and a limit for the size of file uploads.

## New in CF 06

You can now configure the WSRP Consumer to invalidate the remote session when a user explicitly logs out of the Consumer portal.

**Parent topic:**[WSRP services](../admin-system/wsrpc.md)

