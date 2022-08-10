# Creating a Producer definition and consuming a portlet by a single XML script

You can use a single XML script to create a Producer definition and then consume portlets from that same Producer.

If you consume the portlet in an XML script that has already created the Producer in a previous step, you must specify the following items in the XML script:

1.  A locate action on the Producer.
2.  A locate action on the web-app tag with the uid="com.ibm.wps.wsrp.proxyportletapp.webmod" attribute.
3.  The servlet subtag with the remotehandle and wsrp-producerref attributes.
4.  A locate action on the portlet-app subtag with the uid="com.ibm.wps.wsrp.proxyportletapp" attribute.
5.  The portlet subtag with the servletref attribute.

The following XML sample shows how you use the XML configuration interface to integrate a remote portlet:

```

<?xml version="1.0" encoding="UTF-8" ?>
<request type="update" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
   xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd">
   <portal action="locate">
      <wsrp-producer action="locate" objectid="Producer_OID" uniquename="wps.myProducer1">
      <web-app action="locate" uid="com.ibm.wps.wsrp.proxyportletapp.webmod">
         <servlet action="update" objectid="Servlet_OID" remotehandle="Remote_handle" 
             wsrp-producerref="Producer_OID"/>
         <portlet-app action="locate" uid="com.ibm.wps.wsrp.proxyportletapp">
            <portlet action="update" active="true" defaultlocale="en" 
               servletref="Servlet_OID" name="Sample_Portlet">
               <localedata locale="en">
                  <title>Sample Portlet</title>
                  <description>Simple sample portlet as Web service</description>
               </localedata>
               <access-control externalized="false" owner="undefined" private="false"/>
            </portlet>
         </portlet-app>
      </web-app>
   </portal>
</request>

```

**Parent topic:**[Using the XML configuration interface to work with Producer definitions](../admin-system/wsrpt_cons_wrkprd_xml.md)

**Parent topic:**[Using the XML configuration interface to consume portlets from a Producer portal](../admin-system/wsrpt_cons_consrv_xml.md)

**Related information**  


[Sample XML configuration files](../admin-system/admxmsmp.md)

[The XML configuration interface](../admin-system/admxmlai.md)

[Working with the XML configuration interface](../admin-system/adxmltsk.md)

