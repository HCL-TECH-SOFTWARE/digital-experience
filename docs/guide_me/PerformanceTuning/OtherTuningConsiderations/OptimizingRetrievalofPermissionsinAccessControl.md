# Optimizing Retrieval of Permissions in Access Control

In HCL Portal, permissions are granted by assigning a principal to a specific role. There are four types of principals:
- Users
- Groups
- Virtual users (the anonymous "user")
- Virtual groups (all authenticated users).

When determining a user’s permissions, HCL Portal will check for permission assignments in its access
control database for all of these types of principals. However, in some Portal sites, one or more of these
classes of principals has no roles assigned. For example, if groups are not used for access control, then
there would presumably be no roles assigned to groups.

In this case, a performance optimization is possible. By telling HCL Portal that no roles are assigned to
certain types of principals, these queries will never be run. This can save processing time on the Portal
server and the database server.

Since roles are always on resources within a specific domain, this performance optimization is specified at
the level of a resource domain. Thus the configuration will tell HCLPortal that "No role assignments exist for
this type of principal in this domain". For example, "No role assignments exist for Groups in the Community
domain".

To enable this performance optimization, first determine which types of principals won't have role
assignments and in which domains. Then, for each principal type + domain pair which will not have role
assignments, add an entry to `AccessControlDataManagementService.properties`. The format is:
`accessControlDataManagement.domain.domain-name.disableRolesFor.principal-type=true`

Replace `domain-name` with the desired resource domain and `principal-type` with the desired type of
principal. For example, to indicate that no role assignments exist for Groups in the Community domain, the
setting would be `accessControlDataManagement.domain.comm.disableRolesFor.groups=true`.

The principal types are specified as follows:
- Users: `users`
- Groups: `groups`
- Virtual `users: v_users`
- Virtual `groups: v_groups`

The domain name can be any of the valid domains (i.e. rel, jcr, comm, or cust).

If requirements change and role assignments which have been disabled are again needed, this setting can
be undone by setting the value to ‘false’. For example, to make use of role assignments for Groups in the
Community domain, the setting would be changed to:
`accessControlDataManagement.domain.community.disableRolesFor.groups=true`.

See http://www-01.ibm.com/support/docview.wss?uid=swg1PK85714 for more information.