# Exporting a Producer definition by using the XML configuration interface

You can use the XML configuration interface to export a Producer definition. You might, for example, export the Producer from a test portal to update your production portal with it later.

The following example shows how you use the portal XML configuration interface to export a Producer definition.

```

<?xml version="1.0" encoding="UTF-8" ?> 
<request xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
         xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd" type="export">
   <portal action="locate">
      **<wsrp-producer action="export" objectid="*" \> **
   </portal>
</request>

```

???+ info "Related information"  
   -  [Sample XML configuration files](../../../../portal_admin_tools/xml_config_interface/xml_config_ref/admxmsmp.md)
   -  [The XML configuration interface](../../../../portal_admin_tools/xml_config_interface/index.md)
   -  [Working with the XML configuration interface](../../../../portal_admin_tools/xml_config_interface/working_xml_config_interface/index.md)

