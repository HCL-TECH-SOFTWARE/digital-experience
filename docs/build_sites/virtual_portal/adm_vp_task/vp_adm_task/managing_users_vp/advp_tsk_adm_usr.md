# Administering the users for virtual portals

As the master administrator of the portal installation you assign administrative users for the virtual portals. These virtual portal sub-administrators can manage the access rights of the user population of the virtual portal for which they are responsible.

When you use realms to separate the user populations of the virtual portals from each other, you need to configure the realms manually in a Virtual Member Manager configuration file. This is typically done by the master administrator of the portal installation.

When you create a virtual portal, be aware of the following implications:

-   For scoped resources: Access rights that you configured for users on scoped resources of the initial portal installation are not passed on to similar resources of a virtual portal. This statement applies only to resources that are scoped for each virtual portal, such as pages or portlet instances, but not for shared resources. For example, if you restricted access rights to some pages or portlet instances for users on the initial portal installation, these restrictions do not apply for the users of the virtual portal. For more detailed information about scoped resources see *Planning for virtual portals* and *Separating and sharing resources between virtual portals*.
-   The All Authenticated Portal Users group and the All Portal User Groups are valid over all portals that share the same realm. This means that users who are in a realm or user group that belongs to more than one virtual portal, these users have the assigned access rights on all virtual portals to which they have access.

If you want to change these default access rights for the users, you can do one of the following:

-   To configure the scope of access rights for users before creating a virtual portal, configure your realms and user groups accordingly.
-   To change the access rights of users of a virtual portal after creating a virtual portal, use the Portal Access Control portlets in that virtual portal. You can have the sub-administrators of the virtual portal perform this task.


