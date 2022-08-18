# WSRP Consumer portal

Learn how to configure and use a handler on a WSRP Consumer portal.

You can configure handlers for the WSRP Consumer in the web.xml file of the wps.ear portal application.

Starting with CF05, you can register handlers that implement the SOAPHandler interface as an extension of a WSRP extension point. In this case, you do not need to modify the web.xml file of the portal application. For details, read the information in a later section.

**Parent topic:**[Using handlers for WSRP web services](../admin-system/wsrpt_websrvc_handlers.md)

# Using a handler on a WSRP Consumer portal

1.  Create a handler implementation according to the JAX-WS specification.

    For details about the handler framework, read the JAX-WS specification. For information about using handlers with JAX-WS web services, read the appropriate information in the WebSphere® Application Server documentation.

2.  Provide the handler implementation in the class path of the wps.ear portal application, for example in the portal shared application directory.

3.  Export the wps.ear portal application.

    The exported wps.ear file contains a wps.war file, which in turn contains a file that is named web.xml.

4.  Modify the web.xml file by adding a `handler-chains` element to the service reference for which you want to deploy the handler.

5.  Update the wps.ear portal application.

6.  Restart your WSRP Consumer portal.


You can now use the handler in your Consumer portal

The following samples show excerpts from the file web.xml. The samples contain a handler definition for the WSRP Consumer.

Before CF 05:

```
<service-ref>
   <description>WSRP 2.0 Default Service Reference</description>
   <service-ref-name>service/wsrp/WSRPService_v2</service-ref-name>
   <service-interface>javax.xml.ws.Service</service-interface>
   <service-qname 
      xmlns:pfx="http://www.ibm.com/xmlns/prod/websphere/portal/wsrp/wsdl/v2">pfx:WSRPService_v2</service-qname>
   <handler-chains>
      <handler-chain>
         <handler>
            <handler-name>sample handler</handler-name>
            <handler-class>sample.handler.ConsumerHandler</handler-class>
         </handler>
      </handler-chain>
   </handler-chains>
</service-ref>
```

With CF 05 and later fix packs, you must not modify the default handler definition named `WSRP 2.0 Default Consumer Handler`. You can add more handlers as shown in the following example:

```
<service-ref>
   <description>WSRP 2.0 Default Service Reference</description>
   <service-ref-name>service/wsrp/WSRPService_v2</service-ref-name>
   <service-interface>javax.xml.ws.Service</service-interface>
   <service-qname 
      xmlns:pfx="http://www.ibm.com/xmlns/prod/websphere/portal/wsrp/wsdl/v2">pfx:WSRPService_v2</service-qname>
   <handler-chains>
      <handler-chain>
**         <handler\>
            <handler-name\>WSRP 2.0 Default Consumer Handler</handler-name\>
            <handler-class\>com.ibm.wps.wsrp.consumer.handler.ConsumerHandlerChain</handler-class\>
         </handler\>**
         <handler>
            <handler-name>sample handler</handler-name>
            <handler-class>sample.handler.ConsumerHandler</handler-class>
         </handler>
      </handler-chain>
   </handler-chains>
</service-ref>
```

# Registering a SOAPHandler as a WSRP extension

To register a handler that implements the SOAPHandler interface, you can use a WSRP extension point. In this case, you do not need to modify the web.xml file of the portal application. To do so, provide a JAR file that contains the handler implementation and a plugin.xml file that defines an extension of extension point `com.ibm.portal.wsrp.consumer.SOAPHandler`. You can also define multiple handlers inside one plugin.xml file as shown in the following example. The class attribute must specify the handler implementation class.

```
<?xml version="1.0" encoding="UTF-8"?>
<plugin
   id="sample.handler"
   name="Sample WSRP Handlers"
   version="1.0.0">
	
   <extension point="com.ibm.portal.wsrp.consumer.SOAPHandler" id="SampleConsumerHandler1">
      <impl class="com.ibm.wps.wsrp.test.handler.ConsumerHandler1" weight="100"/>
   </extension>
   <extension point=" com.ibm.portal.wsrp.consumer.SOAPHandler" id="SampleConsumerHandler2">
      <impl class="com.ibm.wps.wsrp.test.handler.ConsumerHandler2" weight="110/>
   </extension>
</plugin>
```

