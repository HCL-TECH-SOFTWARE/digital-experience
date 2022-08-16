# Preparing the deletion of orphaned resources

You can use the XML configuration interface to delete orphaned data from your HCL Digital Experience.

1.  To prepare for deleting orphaned data, use the example XML script ExportIncludingOrphanedData.xml. This script runs an export that includes all orphaned data.

    The resulting XML output file lists the affected portal resources with their action set to delete.

2.  Check the output file from the previous step and remove all resources that you want to keep in the portal.

3.  Import the modified XML file into your portal.

    The portal removes all resources that you retained in the XML file during the previous step.


**Parent topic:**[Using the XML configuration command line client](../admin-system/adxmltsk_cmdln.md)

**Related information**  


[Deleting orphaned data](../admin-system/adelorph.md)

