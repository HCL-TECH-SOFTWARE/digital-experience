# WSRP Producer portal

Learn how to configure and use a handler on a WSRP Producer portal.

You can configure handlers for the WSRP Producer in the wps.ear portal application.

Starting with CF05, you can register handlers that implement the SOAPHandler interface as an extension of a WSRP extension point. In this case, you do not need to modify the portal application. For details, read the information in a later section.

**Parent topic:**[Using handlers for WSRP web services](../admin-system/wsrpt_websrvc_handlers.md)

# Using a handler on a WSRP Producer portal

1.  Create a handler implementation according to the JAX-WS specification.

    For details about the handler framework, read the JAX-WS specification. For information about using handlers with JAX-WS web services, read the appropriate information in the WebSphere® Application Server documentation.

2.  Provide the handler implementation in the class path of the wps.ear portal application, for example in the portal shared application directory.

3.  Export the wps.ear portal application.

    The exported wps.ear file contains a wps.war. The WEB-INF/classes directory in the wps.war file contains two files wp.wsrp.producer-v1-handlerchain.xml and wp.wsrp.producer-v2-handlerchain.xml.

4.  Modify either one of the files wp.wsrp.producer-v1-handlerchain.xml or wp.wsrp.producer-v2-handlerchain.xml.

    Update the default `handler-chains` element by adding one or more `handler` elements.

5.  Update the wps.ear portal application.

6.  Restart your WSRP Producer portal.


You can now use the handler in your Producer portal

The following samples show excerpts from the file wp.wsrp.producer-v2-handlerchain.xml. The samples contain a handler definition for the WSRP Producer.

Before CF 05:

```
<?xml version="1.0" encoding="UTF-8"?>
<ns:handler-chains xmlns:ns="http://java.sun.com/xml/ns/javaee">
    <ns:handler-chain name="wp.wsrp.producer-v2-handlerchain">
        <ns:handler>
            <ns:handler-class>sample.handler.ProducerHandler</ns:handler-class>
        </ns:handler>
    </ns:handler-chain>
</ns:handler-chains>
```

With CF 05 and later fix packs, you must not modify the default handler definition for the handler class `com.ibm.wps.wsrp.producer.handler.ProducerHandlerChain`. You can add more handlers as shown in the following example:

```
<?xml version="1.0" encoding="UTF-8"?>
<ns:handler-chains xmlns:ns="http://java.sun.com/xml/ns/javaee">
    <ns:handler-chain name="wp.wsrp.producer-v2-handlerchain">
**        <ns:handler\>
            <ns:handler-class\>com.ibm.wps.wsrp.producer.handler.ProducerHandlerChain</ns:handler-class\>
        </ns:handler\>**
        <ns:handler>
            <ns:handler-class>sample.handler.ProducerHandler</ns:handler-class>
        </ns:handler>
    </ns:handler-chain>
</ns:handler-chains>
```

# Registering a SOAPHandler as a WSRP extension

To register a handler that implements the SOAPHandler interface, you can use a WSRP extension point. In this case, you do not need to modify the portal application. To do so, provide a JAR file that contains the handler implementation and a plugin.xml file that defines an extension of extension point `com.ibm.portal.wsrp.producer.SOAPHandler`. You can also define multiple handlers inside one plugin.xml file as shown in the following example. The class attribute must specify the handler implementation class.

```
<?xml version="1.0" encoding="UTF-8"?>
<plugin
    id="sample.handler"
    name="Sample WSRP Handlers"
    version="1.0.0">
	
    <extension point="com.ibm.portal.wsrp.producer.SOAPHandler" id="SampleProducerHandler1">
        <impl class="com.ibm.wps.wsrp.test.handler.ProducerHandler1" weight="100"/>
    </extension>
    <extension point=" com.ibm.portal.wsrp.producer.SOAPHandler" id="SampleProducerHandler2">
        <impl class="com.ibm.wps.wsrp.test.handler.ProducerHandler2" weight="110"/>
    </extension>
</plugin>

```

