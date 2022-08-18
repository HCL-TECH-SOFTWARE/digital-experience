# Transferring portal configuration data by using the XML configuration interface

When you use the XML configuration interface to transfer HCL Portal configuration data, you export or import an XML script file. In most cases, you can use the result file from an XML export for an XML import. Sometimes you can use the export result file directly, sometimes you must modify it.

An XML file that you process must always be in UTF-8 encoding. It must specify the root element and schema that is given in the following example code snippet.

```
   <?xml version="1.0" encoding="UTF-8"?>
   <request xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
            xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd"
**            type="export\|update"\>**
         . . . configuration  . . .    
      </portal>       
   </request>

```

For an XML export, specify export for the request type. For an XML import, specify a request type of update. The line where you specify either of these request types is highlighted in the example. For more information about the structure of an XML input script file, see the reference topics about the *XML input script file structure*.

1.  Run the XML command-line interface with a file that has a request type of export in it. For example, you can use one of the XML sample files with request type export provided with HCL Portal. The XML command-line interface returns a result file that contains the resources that are specified in the XML file that you used for the export. This file can be, for example a resource and all dependent resources. The file that XML command-line interface returns specifies update for the request type and locate or update for the individual resources actions. This file is ready to be used for an XML import.

2.  Modify the XML result file from the export as required. For example, to create extra resources, use the actions create or update.

3.  Run the XML command-line interface, and specify the XML file that resulted from the XML export and that you might have modified in the previous steps. You can also use one of the XML sample files with request type update in it. The XML command-line interface returns a result file that indicates whether the specified resources were imported successfully, or what errors might have occurred.


**Usage notes:**

-   **Using the XML output result file for further processing:**

    When the XML request finishes processing on the server, the resulting XML output is sent back to the client and written to the standard output. You can write the output to an XML file by using the -out command-line option. Using this option always writes the output in UTF-8 encoding, so you can usually use that file for further XML processing. If you do not use this option, the output is written in a console encoding that depends on your operating system and active locale. It might therefore be invalid XML. For more information, see the topics about using the XML command-line client.

-   **Usage notes on the difference between XML exports and imports:**

    -   The command-line syntax and XML processing is the same for both exports and imports. You specify an XML input file to the XML configuration interface, and the XML configuration interface returns a resulting XML export file.
    -   The difference between export and import is determined by whether you set the request type to export or update in the XML input file that you specify in the command-line request. When you run an XML import, the resources action attribute can have the following values: locate, create or update. For more information about XML resources, elements, and attributes, see the topics about the *XML configuration reference* and *Types of portal resources*.

For more information about XML exports and imports and transfers of portal configuration, see the following topics. For more information about the structure of an XML input script file, see the reference topics about the XML configuration interface.

-   **[Transferring a complete configuration](../admin-system/adxmltsk_xfer_compl_cfg.md)**  
For transferring complete portal configurations, HCL Digital Experience provides a Release Builder tool.
-   **[Exporting and transferring parts of a portal configuration](../admin-system/adxmltsk_xfer_partl_cfg.md)**  
You can also export partial configurations.

**Parent topic:**[Using the XML configuration command line client](../admin-system/adxmltsk_cmdln.md)

**Related information**  


[Creating the initial release](../deploy/dep_cir.md)

[Using the XML configuration command line client](../admin-system/adxmltsk_cmdln.md)

[XML input script file structure](../admin-system/adxmlref_input_structure.md)

[Types of portal resources](../admin-system/adxmlref_resrc_types.md)

[Sample XML configuration files](../admin-system/admxmsmp.md)

