# Using handlers for WSRP web services

You can extend your WSRP Producer or WSRP Consumer portal by handlers that comply with JAX-WS.

The WSRP web services conform to the JAX-WS standard. To create and process custom extensions of WSRP messages, you can create and deploy JAX-WS compliant handlers for the WSRP web services.

By default, the WSRP Producer and WSRP Consumer do not use any handler.

!!!note "Migration note"
    Up to HCL Portal Version 8.0, WSRP was based on the JAX-RPC standard. If you upgrade your HCL Digital Experience from Version 8.0 to Version 8.5, you must reimplement your existing JAX-RPC compliant handlers to comply with JAX-WS.

Before you can use a custom handler, you must first create a handler implementation according to the JAX-WS specification. For details about the handler framework, read the JAX-WS specification. For information about how to use handlers with JAX-WS web services, read the appropriate information in the WebSphere® Application Server documentation.



