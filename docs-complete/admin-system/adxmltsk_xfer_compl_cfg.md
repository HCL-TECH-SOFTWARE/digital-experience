# Transferring a complete configuration 

For transferring complete portal configurations, HCL Digital Experience provides a Release Builder tool.

To transfer a complete portal configuration, use the ReleaseBuilder. For information about how to use it see the topics about ReleaseBuilder.

If you want to move a complete configuration from a test to a production server by using the portal ReleaseBuilder tool, use the XML sample file ExportRelease.xml provided with the portal. The attribute `domain="rel"` indicates that only shared and no private resources are exported. This sample file exports the complete portal configuration without private resources as required by the portal ReleaseBuilder tool.

**Parent topic:**[Transferring portal configuration data by using the XML configuration interface](../admin-system/adxmltsk_use.md)

**Related information**  


[Using administrative portlets for XML configuration ](../admin-system/adxmltsk_portlets.md)

[ReleaseBuilder](../deploy/dep_rbabout.md)

[Sample XML configuration files ](../admin-system/admxmsmp.md)

