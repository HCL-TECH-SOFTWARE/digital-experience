# Interoperability between JSR 286 portlet events and JSR 168 cooperative portlets

By concept, cooperative portlets are similar to JSR 286 portlet events. Both concepts describe publish/subscribe communication patterns that are based on typed information that is published and received by portlets and propagated via communication links.

Because the concepts are quite similar, the portal supports data exchange between JSR 168 cooperative portlets and JSR 286 portlets that support events. This means that you can extend an existing setup using JSR 168 cooperative portlets with new JSR 286 portlets and that you can smoothly migrate individual cooperative portlets to the new API without losing communication possibilities.

The following table lists the similarities:

|Aspect of similarity|Cooperative portlets|JSR 286 events|
|--------------------|--------------------|--------------|
|Event declaration|in a WSDL deployment descriptor|as part of `portlet.xml`|
|Sending data|as a side effect of action processing, for example by setting a request attribute that is declared as an output property|by using the portlet API `setEvent()` call on an action or event response|
|Receiving data|as a portlet action with input properties, for example, request parameters|by using the portlet API `processEvent()` callback|

## Writing interoperable portlets

In both models, portlets declare their external inputs and outputs so that they can be matched for communication. The outputs and inputs are matched based on an XML qualified name, which is associated with an XML namespace to make it globally unique. For JSR 286 portlets, the matching information is denoted by the event name while for cooperative portlets, the matching is based on XML data type declared or referenced in the WSDL. In addition, inputs and outputs carry data that has a specific Java language data type.

Consequently, it is possible to connect a cooperative portlet action to a JSR 286 processing event if these two conditions are met:

-   The XML type name of the action's output property matches the name or an alias of the processing event.
-   The Java type of the output property is the same as the Java type of the procesing event payload.

You can connect JSR 286 publishing event to a cooperative portlet action if these two conditions are met:

-   The name or an alias of the publishing event matches the XML type name of the action's input property.
-   The Java type of the publishing event payload is the same as the Java type of the input property.

These rules also have the following implications:

-   A JSR 286 event without an associated Java type \(no `<value-type>` declaration\) cannot be connected with a cooperative portlet.
-   Exchanged data types must be primitive types or they must be Java and JAXB serializable \(because JSR 286 requires this\) and deployed in a shared class loader \(because cooperative portlets do not support cross-class loader marshalling\).

## Example for migrating deployment descriptors

The following cooperative portlet WSDL declares a portlet action **OrdersForMonth** that takes a month name as input and produces an order ID and a customer ID as outputs.

```
   <definitions name="OrderDetail_Service"
  xmlns="http://schemas.xmlsoap.org/wsdl/"
  targetNamespace="http://www.ibm.com/wps/c2a/examples/shipping"
  xmlns:shipping="http://www.ibm.com/wps/c2a/examples/shipping"
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
<types>
  <xsd:schema targetNamespace="http://www.ibm.com/wps/c2a/examples/shipping">
    <xsd:simpleType name="MonthType">
      <xsd:restriction base="xsd:string"/>

    </xsd:simpleType>
    <xsd:simpleType name="OrderIDType">

      <xsd:restriction base="xsd:string"/>

    </xsd:simpleType>
    <xsd:simpleType name="CustomerIDType">

      <xsd:restriction base="xsd:string"/>

    </xsd:simpleType>
  </xsd:schema>
</types>
<message name="OrderMonthRequest">
  <part name="order_month" type="shipping:MonthType"/>
</message>
<message name="OrderMonthResponse">
  <part name="order_Id" type="shipping:OrderIDType"/>
  <part name="customer_Id" type="shipping:CustomerIDType"/>
</message>
<portType name="OrderMonth_Service">
  <operation name="order_Month">
     <input message="shipping:OrderMonthRequest"/>
     <output message="shipping:OrderMonthResponse"/>
  </operation>
</portType>

<binding name="OrderMonthBinding" type="shipping:OrderMonth_Service">
  <portlet:binding/>
  <operation name="order_Month">
    <portlet:action name="OrdersForMonth" type="standard"/>
    <input>
      <portlet:param name="month" partname="order_month" class="java.lang.String"/>
    </input>
    <output>
      <portlet:param name="orderId" partname="order_Id"/>
      <portlet:param name="customerId" partname="customer_Id"/>
    </output>
  </operation>
</binding>
</definitions>

```

The containing portlet can be converted to a JSR 286 portlet that exposes the same external behavior. Each action that has an input property becomes a processing event that can be sent to the portlet. Each output property of an action becomes a publishing event that can be emitted by the portlet. The wiring behavior can be maintained by declaring an alias for each event that has the same name as the WSDL data type of the corresponding input or output parameter: For example, the `customerId.published` event declares an alias `shipping:CustomerIDType` so that it can be wired to any processing event or portlet action that takes a customer ID as input.

```
<portlet-app xmlns="http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd"
xmlns:shipping="http://www.ibm.com/wps/c2a/examples/shipping"
version="1.0"> 
<portlet ...>
...
   <supported-processing-event>
      <qname>shipping:OrdersForMonth</qname> 
   </supported-processing-event>
   <supported-publishing-event>
      <qname>shipping:orderId.published</qname>
   </supported-publishing-event>
   <supported-publishing-event>
      <qname>shipping:customerId.published</qname>
   </supported-publishing-event>
</portlet>
<event-definition>
  <qname>shipping:OrdersForMonth</qname> 
  <alias>shipping:MonthType</name>
  <value-type>java.lang.String</value-type>
</event-definition>
<event-definition>
  <qname>shipping:orderId.published</qname> 
  <alias>shipping:OrderIDType</name>
  <value-type>java.lang.String</value-type>
</event-definition>
<event-definition>
  <qname>shipping:customerId.published</qname> 
  <alias>shipping:CustomerIDType</name>
  <value-type>java.lang.String</value-type>
</event-definition>
</portet-app>

```

!!!note "Notes"
    - The fact that the cooperative portlet properties use `java.lang.String` as data type and that the corresponding events must be declared with `<value-type>java.lang.String` depends only on the `class="java.lang.String"` attribute of the <portlet:param\>WSDL element. If no class attribute is present, `java.lang.String` is also used as default value. The XML type declarations in the WSDL are not used to determine the Java type of a property.
    - The declaration of cooperative portlet actions does not allow multiple input parameters. Actions or events that require multiple inputs must instead be declared with a single compound input property or event payload that combines all required data.


