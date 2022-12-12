# Virtual users and user groups

There are two predefined virtual user groups (All Authenticated Portal Users and All Portal User Groups) and one virtual user (Anonymous Portal User). These predefined virtual groups and user allow for access control configuration that applies to abstract sets of users. They are not stored in the user registry. They only exist within the access control context. You cannot change group membership or other attributes of these virtual usergroups and user.

This section describes the following virtual user and user groups:

-   Anonymous Portal User
-   All Authenticated Portal Users
-   All Portal User Groups

## Anonymous Portal User

This virtual user models a user who has not yet logged in. Assigning roles to this user on a resource allows access to this resource prior to authentication. This is useful for creating public welcome pages. The **Anonymous Portal User** is not considered to be a member of any group. On pages and their virtual resource parents **CONTENT\_NODES** and **PORTAL**, you can only assign the **Anonymous Portal User** to the **User** role type. Delegated Administration on the **Anonymous Portal User** are derived from privileges on the virtual resource **Users**. In other words, the delegating user must have at least Delegator role on the virtual resource **Users** before being allowed to delegate role assignments to **Anonymous Portal Users**.

## All Authenticated Portal Users

This virtual user group models the set of all known users. After successfully logging in, users lose the **Anonymous Portal User** identity and become authenticated members of the **All Authenticated Portal Users** virtual user group. Roles assigned to this user group allow establishment of permissions that will apply to all authenticated users and thus support setting up the default privileges for authenticated portal access.

## All Portal User Groups

This virtual user group contains all non-virtual user groups.


