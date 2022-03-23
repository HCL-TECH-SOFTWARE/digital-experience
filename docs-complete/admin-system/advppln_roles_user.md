# Users of a virtual portal and their access roles and permissions

When you create a virtual portal, you need to be aware of the implications listed here.

-   The All Authenticated Users group is common across all virtual portals that share the same realm. When you create virtual portals, this group is given the Privileged User role on resources of all those virtual portals, independent of the role assignments that its users have on the initial portal installation. Restrict role assignments and thereby access permissions for the All Authenticated Users group, and assign access to user groups or users as required.

    Note that role assignments that you configured for users on the initial portal installation are not passed on to the virtual portal. For example, if you restricted access permissions to some virtual resources for users on the initial portal installation, these restrictions do not apply to the users in the context of the virtual portal.

-   The All Authenticated Users group is valid over all virtual portals that share the same realm. This means that users who are in a realm that belongs to more than one virtual portal, these users have the assigned roles on all virtual portals to which they have access by membership to that realm.

If you want to change these default roles and the access permissions for the users, you can do this by one of the following ways:

-   To configure the scope of access permissions for users before creating a virtual portal, configure your realms and user groups accordingly.
-   To change the access permissions of users of a virtual portal after creating a virtual portal, use the Portal Access Control portlets in that virtual portal. You can have the sub-administrators of the virtual portal perform this task.

**Parent topic:**[Virtual portal roles and their capabilities ](../admin-system/advppln_roles.md)

