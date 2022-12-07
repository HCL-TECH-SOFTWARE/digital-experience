# External authorization

HCL Digital Experience always determines the permissions that are associated with each role, whether the role is externalized or not.

Roles are always associated with a specific resource. Resources can be moved back and forth from internal to external control with the Resource Permissions portlet. Explicit role assignments are preserved when moving in both directions. However, inherited role memberships are blocked for externalized resources. When you externalize access control for a resource, the resource is administered only through the external security manager interface. After externalizing the resource, role membership must be assigned and removed using the external security manager. The Resource Permissions portlet can no longer control user access to the resource; however, the Resource Permissions portlet can move the object back to internal control.

**Note the following issues:**

-   Private pages cannot be externalized.
-   When you use the Resource Permissions portlet to externalize or internalize access control for a resource, access control for all of its public child resources moves with it. When you use the XML configuration interface \(XMLAccess\) to externalize or internalize access control for a resource, access control for public child resources does not change.
-   After you externalize access control for a resource, you must use the external security manager to assign users to roles on the resource.
-   After access control for a resource is externalized, you can use either the Resource Permissions portlet or the XML configuration interface to create additional role types on the resource. For example, suppose that you create only the Administrator and Manager role types on the Market News Page. Then you externalize access control for the Market News Page. You must use the external security manager to assign users to the Administrator@Market News Page or Manager@Market News Page roles. If you decide that you want to assign users to the Editor@Market News Page role, which is not yet externalized, follow these steps:

    1.  Use the Resource Permissions portlet to create the Editor role type for the Market News Page.
    2.  Use the external security manager to assign users to the Editor@Market News Page role by editing the ACL.
    Remember that HCL Digital Experience still determines the permissions that are associated with the externalized Editor role type.

-   If a user inherits access to a resource from a parent resource, the user loses the inherited access when the resource is externalized. If the user needs access to that resource, you must assign access through the external security manager.
-   The user, who externalizes the resource, automatically receives the Administrator role on the parent resource of the externalized resource tree (if using the Resource Permissions portlet) or the resource (if using the XML configuration interface).

The decision to use an external security manager must be made with the understanding that the external security manager software's ACL semantics override HCL Digital Experience semantics. For example, if you use Security Access Manager to grant anonymous membership on a role for an externally controlled portlet, you must set the ACL for that portlet to include the Security Access Manager unauthenticated user group.

!!!note
    If you use Security Access Manager for authorization, you must also use it for authentication. Using Security Access Manager to perform only authorization is not supported.


