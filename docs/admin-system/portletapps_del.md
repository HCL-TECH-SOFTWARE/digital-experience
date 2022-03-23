# Deleting Web modules, portlet applications, or portlets

Web modules can be deleting or uninstalled in Manage Web Modules and portlet applications can be deleted using Manage Applications. Portlets can be deleted using Manage Portlets.

After selecting an object for deletion, the system waits until all outstanding requests for the portlet application or portlet have been completed and then removes all related files and resources from the portal server. Before removing a portlet application, you must first delete all of its copied portlet applications. If you have the portlet WAR file, you may reinstall the portlet components after deleting it from the system by updating the WAR file in Manage Web Modules. You can reinstall the deleted portlet after ensuring all portlet applications installed in the portlet WAR file have been removed and that the WAR file has been uninstalled.

**Important:** Do not delete any of the portal administration portlets.

For instructions about the tasks and detailed steps for deleting Web modules, portlet applications, or portlets refer to the **Manage Applications** or **Manage Portlets** helps.

**Parent topic:**[Managing portlets, portlet applications, and iWidgets](../admin-system/adpltadmwork.md)

