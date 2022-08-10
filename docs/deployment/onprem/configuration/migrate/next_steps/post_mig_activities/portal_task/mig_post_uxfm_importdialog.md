# Importing UX Screen Flow Manager dialog definitions

If you migrated from Version 8.0.0.1 with the UX Screen Flow Manager \(UXFM\) enabled, then you exported and removed your dialog definitions before migrating to Version 8.5. Run the following task to import the dialog definitions into your upgraded system.

1.  Save the following sample of code as ImportSampleCode.xml to use when importing your dialog definitions.

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <request type="update" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="PCM_1.0.xsd">
    
        <!-- import all dialog definitions that are currently deployed -->
        <portal action="import">
            <dialog-set>
                <dialog name="*" />
            </dialog-set>
        </portal>
    </request>
    ```

2.  Run the following task to import your dialog definitions:

    -   AIX® HP-UX Linux™ Solaris: ./xmlaccess.sh -user userID -password password -url url -in ImportSampleCode.xml -in import.xml
    -   IBM® i: xmlaccess.sh -user userID -password password -url url -in ImportSampleCode.xml -in import.xml
    -   Windows™: xmlaccess.bat -user userID -password password -url url -in ImportSampleCode.xml -in ImportSampleCode.xml -in import.xml
    -   z/OS®: ./xmlaccess.sh -user userID -password password -url url -in ImportSampleCode.xml -in import.xml

**Parent topic:**[Portal tasks](../migrate/mig_post_portaltasks.md)

**Related information**  


[Exporting UXFM dialog definitions](../migrate/mig_pre_uxfm_exportdialog.md)

