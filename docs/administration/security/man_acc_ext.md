# Managing access control with external security managers

HCL Digital Experience externalizes roles and uses access control to control role membership. From the perspective of the external security manager, these externalized roles contain only one permission: membership in the role. HCL Portal always determines the permissions associated with each role.

**Note:** It is not possible to combine the usage of externalizes roles and externalized role mappings with portal managed pages feature. Portal pages cannot be externalized when being edited within a project and externalized resources cannot be added to projects.

For example, if you externalize the Editor@Market News Page role, you must use the external security manager to edit the access control for that role. HCL Portal still determines the permissions that are associated with the Editor role type. Roles are always associated with a specific resource, so the role Editor@Market News Page contains specific permissions on the Market News Page only. Use the Resource Permissions portlet or the XML configuration interface to move resources back and forth from internal to external access control.

By default, externalized roles appear in the external security manager as Role Type@Resource Type/Name/Object ID. For example, Administrator@PORTLET\_APPLICATION/Welcome/1\_1\_1G.

You can change this format to Resource Type/Name/Object ID@Role type. This format change groups the roles by resource name instead of by role type. For example, PORTLET\_APPLICATION/Welcome/1\_0\_1G@Administrator. This format change is visible only when the roles are externalized. This change does not affect the way roles are displayed in HCL Portal.

The `Administrator@VIRTUAL/wps.EXTERNAL ACCESS CONTROL/1` role is never affected by this format change. This role always appears with the role type Administrator.

Complete the following steps to manage access control with external security managers:

1.  Use the Resource Permissions portlet to internalize any external roles.

2.  Log on to the WebSphere® Integrated Solutions Console.

3.  Modify the **WP AccessControlDataManagementService** Resource Environment Provider; change the accessControlDataManagement.reorderRoleNames parameter to true.

    **Note:** Add the accessControlDataManagement.reorderRoleNames parameter if it does not exist.

4.  Save your changes and restart the WebSphere\_Portal server.

5.  Use the **Resource Permissions** portlet to externalize the resources you internalized in the first step.


Example of roles list with reorderRoleNames=false:

```
Administrator@WEB_MODULE/Tracing.war/1_0_3K
Administrator@PORTLET_APPLICATION/Welcome/1_0_1G
User@WEB_MODULE/Tracing.war/1_0_3K
Privileged User@WEB_MODULE/Tracing.war/1_0_3K
Privileged User@PORTLET_APPLICATION/Welcome/1_0_1G

```

Example of roles list with reorderRoleNames=true:

```
PORTLET_APPLICATION/Welcome/1_0_1G@Administrator
PORTLET_APPLICATION/Welcome/1_0_1G@Privileged User
WEB_MODULE/Tracing.war/1_0_3K@Administrator
WEB_MODULE/Tracing.war/1_0_3K@Privileged User
WEB_MODULE/Tracing.war/1_0_3K@User

```

**Parent topic:**[External security managers](../security/sec_ext_man.md)

**Related information**  


[Starting and stopping servers, deployment managers, and node agents](../admin-system/stopstart.md)

