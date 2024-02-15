# Exporting customized WSRP portlet instances by using the XML configuration interface

If consumed portlets are customized on the Consumers portal, then the Producer can export the customized instances of those portlets by using the XML configuration interface.

Users of the Consumer portal can customize the consumed portlets, if the Producer gave them the required access rights. The customized portlet instances are created on the Producer portal. The Producer portal administrator can export the customized portlet instances by using the XML configuration interface for later import into another portal.

Here is an example XML script for exporting all customized WSRP portlet instances:

```
<request
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd"
    type="export">

    <!-- Sample for exporting the customized portlet instances of a WSRP Producer -->
    <portal action="locate">
    
        **<wsrp-customized-portletinstance objectid="\*" action="export"/\>**

    </portal>
</request>

```


???+ info  "Related information"  
    -   [Working with the XML configuration interface](../../../../../../deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/index.md)
    -   [The XML configuration interface](../../../../../../deployment/manage/portal_admin_tools/xml_config_interface/index.md)

