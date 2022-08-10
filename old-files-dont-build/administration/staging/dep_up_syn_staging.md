# Staging artifacts that are not transferred by syndication

The ExportManagedPagesRelease.xml file provides an example that you can use with the XML configuration interface to export all portal artifacts except pages and wires. You can use this file when staging to production with managed pages.

Stage artifacts that are not part of the syndication, such as portlet definitions, themes, and personalization rules with the release builder Portal staging tool. It ensures that the artifacts have the same object IDs across the staging systems because they are referenced by this object ID.

The file is in the `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/doc/xml-samples` directory.

1.  2.  To export these artifacts with the ExportManagedPagesRelease.xml file, use the xmlaccess command.

    -   **AIX® Solaris Linux™**

        ./xmlaccess.sh -in /opt/IBM/WebSphere/PortalServer/doc/xml-samples/ExportManagedPagesRelease.xml -out /Sample1/content/xmlaccess/install/staging-version1.xml -url "http://stagingserver.example.com:port/wps/config" -user wpsadmin\_user\_ID -password wpsadmin\_pwd

    -   **IBM® i**

        xmlaccess.sh -in /QIBM/ProdData/WebSphere/PortalServer/V8/product\_offering/doc/xml-samples/ExportManagedPagesRelease.xml -out /Sample1/content/xmlaccess/install/staging-version1.xml -url "http://stagingserver.example.com:port/wps/config" -user wpsadmin\_user\_ID -password wpsadmin\_pwd

    -   **Windows™**

        xmlaccess.bat -in C:\\IBM\\WebSphere\\PortalServer\\doc\\xml-samples\\ExportManagedPagesRelease.xml -out \\Sample1\\content\\xmlaccess\\install\\staging-version1.xml -url "http://stagingserver.example.com:port/wps/config" -user wpsadmin\_user\_ID -password wpsadmin\_pwd

    -   **z/OS®**

        ./xmlaccess.sh -in /opt/IBM/WebSphere/PortalServer/doc/xml-samples/ExportManagedPagesRelease.xml -out /Sample1/content/xmlaccess/install/staging-version1.xml -url "http://stagingserver.example.com:port/wps/config" -user wpsadmin\_user\_ID -password wpsadmin\_pwd

    The exported configuration is stored in the staging-version1.xml file.

3.  You can use the exported file to import these artifacts. Use the /Sample1/content/xmlaccess/install/staging-version1.xml file and use the xmlaccess command.

    -   **AIX® Solaris Linux™**

        ./xmlaccess.sh -in /Sample1/content/xmlaccess/install/staging-version1.xml -out /Sample1/content/xmlaccess/install/staging-version1-Output.xml -url "http://productionserver.example.com:port/wps/config" -user wpsadmin\_user\_ID -password wpsadmin\_pwd

    -   **IBM® i**

        xmlaccess.sh -in /Sample1/content/xmlaccess/install/staging-version1.xml -out /Sample1/content/xmlaccess/install/staging-version1-Output.xml -url "http://productionserver.example.com:port/wps/config" -user wpsadmin\_user\_ID -password wpsadmin\_pwd

    -   **Windows™**

        xmlaccess.bat -in C:\\Sample1\\content\\xmlaccess\\install\\staging-version1.xml -out C:\\Sample1\\content\\xmlaccess\\install\\staging-version1-Output.xml -url "http://stagingserver.example.com:port/wps/config" -user wpsadmin\_user\_ID -password wpsadmin\_pwd

    -   **z/OS®**

        ./xmlaccess.sh -in /Sample1/content/xmlaccess/install/staging-version1.xml -out /Sample1/content/xmlaccess/install/staging-version1-Output.xml -url "http://stagingserver.example.com:port/wps/config" -user wpsadmin\_user\_ID -password wpsadmin\_pwd


**Parent topic:**[Updates with syndication](../deploy/dep_up_syn_main.md)

**Related information**  


[Syndication and staging](../deploy/dep_up_syn.md)

