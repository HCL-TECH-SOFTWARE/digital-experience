# Portlet wires 

Portlet Wires are used to direct the information flow between portlets that communicate using JSR 286 Portlet events or the WebSphere Portal Cooperative portlets API.

A wire connects a JSR 286 publishing event or an output property of a cooperative portlet to a JSR 286 processing event or a cooperative portlet action of another portlet. When the source portlet fires an event or produces a property, and that source event or property has outgoing wires, the information is propagated to the target portlet\(s\). At the same time the corresponding handler code, `processAction` or `processEvent` is invoked. Conversely, if an event is produced that is not wired to any targets, the event is simply discarded.

Creating wires is a part of page administration and requires appropriate access permissions. It is separated from the portlet development or deployment process, so that the portlet developer does not need to know the actual structure of inter-portlet communication. Communicating portlets can be developed independent of each other, as long as they agree on the same data type and semantics for data exchange. Wires between portlets are usually created by using the portlet wiring tool. It is available as a tab in the Edit Page user interface.

**Parent topic:**[Communication with persistent wires ](../dev-portlet/pltcom_pubsub_perstwire.md)

## Creating wires

You can create wires only between portlets of the same API type, either standard API or HCL API based; for communication between HCL and Standards-based portlets, you need to use other means, such as cross page links. However, you can create wires between JSR 168 portlets and JSR 286 portlets, This allows you a smooth upgrade from the proprietary collaborative portlet API to the new standard based portlet events.

To create a wire between two portlets, the output that the source portlet declares must match the input that the target portlet declares. This match can be on either of the following two levels:

1.  The XML name that describes the semantic content of the data:
    1.  For JSR 286 events this is represented by the event names declared in `portlet.xml`.
    2.  For collaborative portlets, this is represented by the XML name of the property type declared in the collaborative portlet WSDL.
2.  The actual Java class representation of the data.

By default, the wiring tool requires a match of the semantic XML name. To avoid the requirement for a coordinated global namespace, JSR 286 portlets can declare multiple alias names for an event. This allows a portlet to connect to multiple other portlets that use different naming conventions. If the semantic XML name in the portlet section of the `portlet.xml` ends with a period \( . \), it works as a wildcard character. You can use it to match other semantic XML names defined in the portlet application section of the `portlet.xml` that have the same prefix. This matching scheme can be useful for handling a group of similar portlet events that have the same payload format in a uniform way.

In a case where you know that two portlets are using the same data format but have declared different XML names, for example, for common formats such as email addresses, you can switch to matching on payload type, which allows you to create wires between sources and targets regardless of the XML semantic name. This can also be useful for very generic target portlets that can accept any string as input.

In addition to the portlet wiring tool, you can also create wires by using the portal configuration interface \(XMLAccess\). Note that this interface does not perform any consistency checks on declared output or input data. Of course, the option to create a wire does not necessarily mean that the portlets will communicate as expected. For example, if the portlets make different assumptions about the format of the payload, this leads to run time exceptions when the wire is executed.

## Remote portlet support

The portal also allows you to create wires between remote portlets that use the WSRP 2.0 protocol for event transfer. You can wire remote portlets that have been integrated into the portal and placed on portal pages, even if they were consumed from different Producers. You can also wire remote portlets to local standard based portlets.

Payload data for remote events is transported as XML content. Therefore local portlets that want to communicate with remote portlets must either declare event payloads with appropriate XML serialization definitions by using the Java XML Binding framework \(JAXB\) or process the raw XML strings. If the remote portlet Producer is also a HCL Portal Version 8.5 or another JSR 286 compliant portal and local and remote portlets are using the same JAXB definitions, the correct XML translations happens automatically.

