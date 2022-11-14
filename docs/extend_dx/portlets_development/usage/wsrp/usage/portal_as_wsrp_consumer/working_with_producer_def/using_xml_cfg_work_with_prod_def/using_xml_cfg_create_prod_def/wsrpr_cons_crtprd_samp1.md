# XML samples for creating Producer definitions

You can modify use these XML samples and use them to create Producer definitions,

You can use these samples to create the Producer definition online or offline.

## XML sample script for creating a Producer definition

The following XML sample shows how you use the XML configuration interface to create a Producer if you work offline:

```
<?xml version="1.0" encoding="UTF-8" ?> 
<request type="update" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd" create-oids="true">
   <portal action="locate">
      <wsrp-producer action="update" uniquename="ibm.portal.MySampleProducer1">
         <porttype type="service-description" update="set">
             <unsecure-url> http://producer_portal_host:producer_port/wp_contextRoot/WSRPServiceDescriptionService</unsecure-url>
         </porttype>
         <porttype type="markup" update="set">
             <unsecure-url>http producer_portal_host:producer_port/wp_contextRoot/WSRPBaseService</unsecure-url>
         </porttype>
         <localedata locale="en">
             <title>My Sample Producer 1</title> 
         </localedata>
      </wsrp-producer>
   </portal>
</request>

```

Replace http://producer\_portal\_host:producer\_port/wp\_contextRoot with the appropriate values for the environment of your Producer.

This sample specifies the minimum required mandatory WSRP interfaces Service Description and Markup.

## XML sample script for creating a Producer definition for a Producer who requires registration

The following XML sample shows how you use the XML configuration interface to create a Producer who requires registration. You can use this sample if you work online and have access to the Producer's WSDL document.

```

<?xml version="1.0" encoding="UTF-8" ?>
<request type="update" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd" create-oids="true">
   <portal action="locate">
      <wsrp-producer action="update" **registration-required="true"** uniquename="ibm.portal.MySampleProducer2">
         <wsdl-url>  http://producer\_portal\_host:producer\_port/wp\_contextRoot/wsdl/wsrp\_service.wsdl</wsdl-url>
         **<parameter name="regprop1" type="string" update="set"\>value1</parameter\>
         <parameter name="regprop2" type="string" update="set"\>value2</parameter\>**
         <preferences name="userattributes" update="set">
            <value>cn</value>
            <value>o</value>
            <value>uid</value>
         </preferences>
         <localedata locale="en">
            <title>Producer **2**</title>
         </localedata>
      </wsrp-producer>
   </portal>
</request>

```

Replace http://producer\_portal\_host:producer\_port/wp\_contextRoot/wsdl/wsrp\_service.wsdl with the appropriate values for the environment of your Producer.

This sample also includes specification of user attributes.

To use this sample with a HCL Portal Producer portal, set registration-required="false" and remove the parameter tags. This modification is necessary because the HCL Portal Producer does not support registration.


**Related information**  


[Sample XML configuration files](../admin-system/admxmsmp.md)

[The XML configuration interface](../admin-system/admxmlai.md)

[Working with the XML configuration interface](../admin-system/adxmltsk.md)

