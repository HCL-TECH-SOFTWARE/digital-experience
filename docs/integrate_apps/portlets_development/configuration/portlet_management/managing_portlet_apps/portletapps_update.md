# Updating Web modules, portlet applications, and portlets

Update a portlet application by updating the WAR file in Manage Web Modules. The newer version of the resource in the WAR file updates the existing portlet application, without breaking the links between user data and the resource. User-specific settings for portlets within the updated resource remain unchanged.

Before a selected Web module is updated, HCL Portal checks for an identical resource name in the selected WAR file. If the name of the selected object and the object name in the deployment descriptor of the WAR file do not match, the update is not performed, and a message is displayed.

When a Web module is updated, WebSphere® Application Server removes the existing files and installs the updated application in the same directory.

New parameters that are introduced by the updated Web module are always added to the Web module.


