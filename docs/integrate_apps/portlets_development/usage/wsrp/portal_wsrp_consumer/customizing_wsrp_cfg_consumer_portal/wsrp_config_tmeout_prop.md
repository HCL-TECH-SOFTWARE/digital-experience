# Configure timeout properties for the WSRP communication

You can configure web service timeout properties for the WSRP communication on the Consumer. You can configure the timeout properties in the WP Configuration Service or as a preference specifically for remote portlets.

For a description of the timeout properties and the respective default values, go to *JAX-WS timeout properties* in the WebSphere® Application Server HCL Product Documentation.

To define the timeout properties, configure the following configuration parameters on the Consumer:

wsrp.consumer.connectiontimeout = \(timeout in seconds\)

wsrp.consumer.writetimeout = \(timeout in seconds\)

wsrp.consumer.responsetimeout = \(timeout in seconds\)

By default each of these parameters is `undefined`. The default setting means that the Consumer does not set a timeout property on an outgoing WSRP request. In this case, WebSphere Application Server uses the default timeout properties as described in *JAX-WS timeout properties.*

If timeout properties are configured, the Consumer passes the timeout properties to WebSphere Application Server in the MessageContext of an outgoing WSRP request. You therefore do not need to configure timeout settings in WebSphere Application Server in a policy set.

You can set these parameters specifically for a remote portlet. To do so, set this parameter in the portal WP Configuration Service by using the WebSphere Integrated Solutions Console.

If you set a parameter both as a preference of a remote portlet and in the WP Configuration Service, the value that is defined in the preference of the remote portlet takes precedence.


