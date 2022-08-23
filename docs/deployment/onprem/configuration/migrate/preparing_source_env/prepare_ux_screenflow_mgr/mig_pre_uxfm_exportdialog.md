# Exporting UXFM dialog definitions

Export and save your dialog definitions before you migrate to Version 8.5.

1.  Save the following example of code as ExportSampleCode.xml to use when exporting your dialog definitions.

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <request type="update" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="PCM_1.0.xsd">
    
        <!-- export all dialog definitions that are currently deployed -->
        <portal action="export">
            <dialog-set>
                <dialog name="*" />
            </dialog-set>
        </portal>
    </request>
    ```

2.  Run the following task from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/bin directory to export your dialog definitions:

    -   AIX® HP-UX Linux™ Solaris: ./xmlaccess.sh -user userID -password password -url http://local\_host:local\_port/wps/config -in ExportSampleCode.xml -out export.xml
    -   IBM® i: xmlaccess.sh -user userID -password password -url http://local\_host:local\_port/wps/config -in ExportSampleCode.xml -out export.xml
    -   Windows™: xmlaccess.bat -user userID -password password -url http://local\_host:local\_port/wps/config -in ExportSampleCode.xml -out export.xml
    -   z/OS®: ./xmlaccess.sh -user userID -password password -url http://local\_host:local\_port/wps/config -in ExportSampleCode.xml -out export.xml
3.  Back up the file that contains the exported dialog definitions to a secure location. You can import your dialog definitions after you migrate to V8.5.



**Next topic:**[Removing UXFM dialog definitions](../migrate/mig_pre_uxfm_remove.md)

**Related information**  


[Importing UX Screen Flow Manager dialog definitions](../migrate/mig_post_uxfm_importdialog.md)

[Uninstalling UX Screen Flow Manager](../migrate/mig_pre_uxfm_uninstall.md)

[Syntax elements for the XML configuration interface command line](../admin-system/adxmltsk_cmdln_sntx_elements.md)

