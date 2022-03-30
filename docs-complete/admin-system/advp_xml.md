# Using the XML configuration interface to work with virtual portals

You can export and import the contents of individual virtual portals by using the XML configuration interface. For example, you can use the XML configuration interface to fill a newly created virtual portal with content. As each virtual portal has its own globally unique portal ID, you can determine all resources that are associated with that virtual portal clearly and individually.

Address the virtual portal by the URL context or the host name that you specified when you created the virtual portal. Specify the unique virtual portal URL or host name with your XML request by either of the following options:

**Note:** In the following examples, the commands are shown on three lines, but you must enter them as one line.

-   If you created the virtual portal by specifying a URL context:

    ```
        xmlaccess -user user -password password -url 
        my\_host:port\_number/wps/config/URL\_Context\_of \_the\_Virtual\_Portal 
        -in XML\_file -out result.xml
    
    ```

    For the variable `URL\_Context\_of \_the\_Virtual\_Portal` use the URL context that you specified when you created the virtual portal. For more information, see *Creating a virtual portal* and *Task create-virtual-portal*.

-   If you created the virtual portal by specifying a host name:

    ```
        xmlaccess -user user -password password -url 
        host\_name:port\_number/wps/config -in XML\_file -out result.xml
    
    ```

    For the variable `host\_name` use the host name that you specified when you created the virtual portal. For more information, see *Creating a virtual portal* and *Task create-virtual-portal*.


**Note:** When you use the XML configuration interface to work with virtual portals, be aware of the following rules:

1.  You cannot export or import a complete virtual portal by using the XML configuration interface. You can export or import only the contents of a virtual portal. If you want to transfer a virtual portal from a source server to a target server, proceed as follows:

    1.  Create the virtual portal on the target server.
    2.  Export the contents of the virtual portal from the source server. Specify the URL context or host name of the source virtual portal as described previously.
    3.  Import the XML result script from the previous step to the target server. Specify the URL context or host name that you used to create the target virtual portal to which you want to import the content.
    For more information about how to export and import portal configurations by using the XML configuration interface, see *Working with the XML configuration interface*.

2.  You can export and import the contents of a single individual virtual portal at a time by using the XML configuration interface. You cannot export or import multiple virtual portals at the same time or an entire portal installation with multiple virtual portals. You must specify a separate XML request for each virtual portal. You can also export content from one virtual portal and import it into a different virtual portal.
3.  The access rights for the XML configuration interface are limited to the master administrator of the portal installation as a whole. Subadministrators for the virtual portals cannot use the XML configuration interface to export or import the virtual portal that they administer.
4.  Apply special care when you configure unscoped resources by using the XML configuration interface. Unscoped resources are shared between all virtual portals across the entire portal installation. A change of unscoped resources by the XML configuration interface affects all other virtual portals. For example, this feature applies to the following tasks and types of XML processing:
    -   Updating URL mappings by using the XML configuration interface: A URL mapping of a URL context in one virtual portal can be unintentionally updated by XML import into another virtual portal to point to a resource in that second virtual portal. Therefore, if you export the content of one virtual portal and import it into a different virtual portal, make sure that you do not include the URL mappings of virtual portal URL contexts in the XML script. Otherwise, you might make the virtual portal unusable in the following two circumstances:

        -   If the source virtual portal and the target virtual portal are on the same portal server, the URL mappings of the source virtual portal are updated to point to resources in the target virtual portal into which you imported the content. You can no longer use such a URL context to access the resource in the source virtual portal.
        -   If the source virtual portal and the target virtual portal are not on the same portal server, but there is another virtual portal on the target portal server that has the same URL context as the source virtual portal. The URL mappings of this virtual portal are updated to point to resources in the target virtual portal into which you imported the content. And you can no longer use such a URL context to access the resource in this virtual portal.
        **Note:** This step is critical for the URL mapping of a URL context that is created for a virtual portal during its creation. Updating this initial URL mapping of a virtual portal URL context makes that virtual portal unusable.

    -   Deploying portlet applications into a virtual portal by using the XML configuration interface: If you deploy a portlet, that portlet is available to all virtual portals in the portal installation, unless you restrict this deployment by using Portal Access Control. If that portlet was already deployed in other virtual portals, errors can occur during the execution of the XML request.

**Parent topic:**[Virtual portals command reference ](../admin-system/advpref_cmd.md)

**Related information**  


[Staging to production list](../deploy/dep_stage_check.md)

[Creating the initial release ](../deploy/dep_cir.md)

[The XML configuration interface ](../admin-system/admxmlai.md)

[Working with the XML configuration interface](../admin-system/adxmltsk.md)

[Creating a virtual portal ](../admin-system/advp_tsk_create_vp.md)

[Task: create-virtual-portal ](../admin-system/advp_cfgtsk_create.md)

[Configuring the sub administrators for virtual portals](../admin-system/advp_tsk_cfg_subadmin.md)

