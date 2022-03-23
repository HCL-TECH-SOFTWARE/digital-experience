# Updates with syndication

After setting up your initial staging and production servers and deploying the initial release, you can use the syndication feature of HCL Web Content Manager to update content in web content libraries. If managed pages are enabled, syndication also ensures that all required page artifacts are transferred along with the content.

-   **[Syndication and staging ](../deploy/dep_up_syn.md)**  
You can use syndication to update content that was originally created by deploying portal solution releases with either the XML configuration interface or through a Portal Application Archive \(PAA\) file. You can also set up syndication between virtual portals or primary portals on the same system or between virtual portals on different systems.
-   **[Staging artifacts that are not transferred by syndication ](../deploy/dep_up_syn_staging.md)**  
The ExportManagedPagesRelease.xml file provides an example that you can use with the XML configuration interface to export all portal artifacts except pages and wires. You can use this file when staging to production with managed pages.
-   **[Creating a syndication relationship from the command line ](../wcm/wcm_syndication_settingup_cmdline.md)**  
You can set up syndication relationships by using the Administration Portlets or the command line. To set up a syndication relationship from the command line, use the XML configuration interface \(XML access\) and the ConfigEngine command to configure the subscriber.

**Parent topic:**[Staging to production ](../deploy/dep_intr.md)

