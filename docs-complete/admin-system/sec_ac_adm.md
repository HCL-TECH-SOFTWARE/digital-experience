# Managing Access Control

Get familiar with concepts related to administering HCL Digital Experience access control. To administer access control, use the Resource Permissions portlet, the User and Group Permissions portlet, the Manage Users and Groups portlet, the XML configuration interface, or the Portal Scripting Interface.

## Authorization

Authorization is sometimes referred to as access control. Authorization determines what interactions a user is permitted to have with a resource or a service. Administrators configure access to resources or services by assigning roles to users and groups.

HCL Portal supports fine-grained access control over resources. Users can select and view only those resources for which they have appropriate access rights. When rendering a resource, HCL Portal verifies that the user has appropriate rights to use the requested resource. You can administer access rights by using the following portal tools:

-   Dedicated access control administration portlets called **User and Group Permissions** and **Resource Permissions**
-   The group membership portlet called **Manage Users and Groups**
-   The Portal Scripting Interface
-   The XML configuration interface \(XML Access\)
-   The Manage Pages portlet
-   The Portal 8.5 theme.

Access control information is accessible through the XML configuration interface. By default access control data is stored in the HCL Portal database. Alternately, you can configure an external security manager, such as IBM® Security Access Manager, to host parts of the access control data and to manage role assignments.

All unauthenticated users are considered anonymous users. The access control component provides a dedicated virtual principal called Anonymous Portal User to represent such users. Prior to authenticating, an anonymous user, represented by this virtual principal, has specific access to a resource or service. In order for users to benefit from user and group specific privileges, they must be successfully authenticated by the system. Access control is dependent on the authentication of actual users.

HCL Portal only protects resources and services. WebSphere® Application Server protects J2EE artifacts \(for example servlet URLs and Enterprise Java Beans&trade; methods\) and its artifacts \(like server or node configurations\).

## HCL Portal Administrator and Security Administrator

The `Administrator@Portal` and `Security Administrator@Portal` roles contain a special permission that is not available to any other role. This permission allows the Administrator or Security Administrator to make arbitrary changes to the access control configuration of all resources. The Administrator and Security Administrator can create and delete roles, role assignments, and role blocks. If the configuration allows an external security manager such as IBM Security Access Manager to manage role assignments, additional privileges need to be set to allow arbitrary changes to the access control configuration. To change the access control configuration for resources that are externally managed, you must have the `Administrator@External Access Control` or the `Security Administrator@External Access Control` role.

**Parent topic:**[Controlling access](../admin-system/control_access.md)

**Related information**  


[Security for WSRP services ](../admin-system/wsrpc_secy.md)

