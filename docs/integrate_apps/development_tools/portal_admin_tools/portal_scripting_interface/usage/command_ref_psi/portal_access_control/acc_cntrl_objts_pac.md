# Access control objects

The complete access control data for a resource is represented on the client by a PacList object. PAC stands for Portal Access Control. PacList objects are opaque, they cannot be manipulated directly. Instead, they are loaded into the PacList bean, which provides the operations to view and edit the objects. PacList objects are obtained from and written back by using the Access bean.

The access control data for a resource is split in similar data groups for several action sets. It is also referred to as role types. The term action set is used here, as it has the smaller potential for misinterpretation. The portal uses predefined action sets, which combine the actions for the following types of portal users. One name for each action set is given in parentheses. Alternative names are documented in the help of the PacList bean.

-   User \(User\)
-   Privileged User \(PrivilegedUser\)
-   Editor \(Editor\)
-   Manager \(Manager\)
-   Delegator \(Delegator\)
-   Security Administrator \(SecurityAdmin\)
-   Administrator \(Admin\)

For each action set, a list of principals are explicitly allowed to complete the corresponding actions. A principal is a group or user, which are specified by a name or distinguished name \(DN\). There are three special principals, which represent an anonymous user, all authenticated users, and all user groups.

In addition to the list of principals, two flags control the implicit distribution of permissions through resource hierarchies. The inheritance flag controls distribution of permissions from parent to child nodes. If inheritance is not blocked, a principal that has permission on the parent has permission on the child as well. This kind of permission is useful for administrative actions. The propagation flag controls the other direction. If propagation is not blocked, a principal that has permission on at least one child has permission on the parent as well. This kind of permission is useful for simple actions, such as viewing a page, which requires view access to all parents.

Although the flags can be manipulated for each action set, they are ignored for security administrators and administrators. For these two action sets, inheritance and propagation are never blocked.

**Parent topic:**[Portal Access Control](../admin-system/ptl_acc_con.md)

