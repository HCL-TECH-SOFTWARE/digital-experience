# Portal Access Control with virtual portals

You can scope some portal resources for your virtual portals by using portal administration and Portal Access Control. For example, you can scope portlet applications. These resources are available to all virtual portals. You can scope these resources to specific virtual portals by limiting their accessibility to the user populations of the required virtual portals. To make this limit, you use Portal Access Control. Resources that you scoped this way for one virtual portal cannot be accessed from other virtual portals.

Portal Access Control provides a flexible concept to grant certain users or user groups access privileges to specific pages and other resources of a portal. A super administrator can delegate a subset of the administration privileges to other administrative users. You can use this flexibility to enable separation between different virtual portals in the following ways:

-   Use the delegated administration model to set up individual partitions in your portal for the virtual portals.
-   Define separate subadministrator users who administer the individual virtual portals and give each of the sub-administrators the access permissions for their virtual portals.
-   Define separate user populations who can access the individual virtual portals. For more detail about how this setting is supported see *Managing the user population for virtual portals*.

The inheritance concept of Portal Access Control allows this setup. The combination of access permissions that a subadministrator has on portal resources and on users and groups defines the scope of the virtual portal of that subadministrator:

-   By inheritance, sub-administrators of virtual portals implicitly have the administrative access permissions for all the child pages of their respective root content nodes, and of the content of their virtual portals. The subadministrator of a virtual portal cannot assign any access permission on resources that are scoped for other virtual portals.
-   Depending on the access permissions to users and groups that the master administrator gives the sub-administrators, they can grant access to users who belong to the user population of their virtual portals. The subadministrator of a virtual portal cannot assign any access permissions to users or groups of other virtual portals.

This way, each virtual portal represents a certain sub area of the main portal and can be managed individually.


**Related information**  


[Managing the user population for virtual portals](../admin-system/advppln_mgupop.md)

