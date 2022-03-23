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

**Parent topic:**[Using your portal as a WSRP Producer ](../admin-system/wsrpt_prod_use.md)

**Previous topic:**[Providing WSRP services as a Producer ](../admin-system/wsrpt_prod_prvd_ws.md)

**Next topic:**[Changing the WSRP Producer context root ](../admin-system/wsrpt_chg_prod_uri.md)

**Related information**  


[Working with the XML configuration interface](../admin-system/adxmltsk.md)

[The XML configuration interface ](../admin-system/admxmlai.md)

