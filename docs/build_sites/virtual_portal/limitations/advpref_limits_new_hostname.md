# Using a new host name for an existing virtual portal

If you want to use a new host name for an existing virtual portal, you must delete the virtual portal. Then, re-create it with the new host name.

1.  Export the contents of the virtual portal by using the XML configuration interface.
2.  Delete the virtual portal.
3.  Clean up references to the deleted virtual portal by using the Task.xml script of the XML configuration interface.
4.  Create a new empty virtual portal by using the configuration task create-virtual-portal. Use the context of the deleted virtual portal, and specify the new host name as required.
5.  Import the contents to the new virtual portal by using the XML configuration interface.


**Related information**  


[Using the Virtual Portal Manager administration portlet](../admin-system/advp_vpmgr_use.md)

[Working with the XML configuration interface](../admin-system/adxmltsk.md)

