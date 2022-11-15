# XML input script file structure

When you use the XML configuration interface command line client, the XML script you use specifies the root element, the XML schema, the portal resources, and actions to be performed.

The main level structure of an XML request or response is always as follows:

```

<?xml version="1.0" encoding="UTF-8"?>
   <request
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd"
    type="export|update"> 
      <portal . . . >
      definition of configuration parts to be exported or updated
      </portal>
      <status . . . >
      success or failure indication for the processing
      </status>
   </request>

```

The main request element specifies the XML schema used by the XML configuration interface. You must always use the schema reference that is shown in the example, that is a reference with no namespace to the schema `PortalConfig_8.5.0.xsd`. All XML requests must conform to this schema. For your reference, you can find the schema declaration in the JAR file wp.xml.jar under the location `com/ibm/wps/command/xml/PortalConfig_8.5.0.xsd`. The JAR file wp.xml.jar is located under the following directory:

-   **For UNIX™Linux™:** PortalServer_root/base/wp.xml/shared/app
-   **For Windows™:** PortalServer_root\base\wp.xml\shared\app

All other XML sample files are located in the following directory:

-   **For UNIXLinux:** PortalServer_root/doc/xml-samples
-   **For Windows:** PortalServer_root\doc\xml-samples

Before you send requests to the portal, you can verify them against this schema using a suitable editor or parser to ensure syntactic correctness. The schema also contains annotations that give detailed information on the meaning and possible values of all configuration entries.

The type attribute indicates whether the XML request contains specifications for exporting or for updating portal resources.

The portal section describes the parts of the portal configuration that should be exported or updated. The contents of the hierarchy used are described in more detail in the following sections.

The status section is optional; in an XML response it indicates success or failure of the requested operation. If a status element is present in a XML request, the server simply ignores it.

The simplest request that you can send to a server is the following:

```
   <?xml version="1.0" encoding="UTF-8"?>
      <request xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
         xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd"
            type="export"> 
         <portal action="export"/>
      </request>

```

This request exports the entire configuration of the portal. You can look at the contents of the response to see how the configuration of individual portal resources, such as portlets or pages, is represented in XML elements and attributes.

Additional to the `export` and `update` request types, a third request type `export-orphaned-data` is available for the special scenario of preparing the deletion of orphaned data.


???+ info "Related information" 
   -  [Transferring portal configuration data by using the XML configuration interface](../../../portal_admin_tools/xml_config_interface/working_xml_config_interface/using_xml_config_cmd_line/transfer_portal_cfg_using_xml_config_int/index.md)

