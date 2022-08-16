# Delegated Access Control Administration

HCL Digital Experience supports delegated access control administration.

## Description of delegated administration and policy

This topic describes the delegation of access control administration and policy, and gives an example of the delegated administrative policy.

## Delegated Administration

HCL Digital Experience supports delegated access control administration. An administrator is a user who is authorized to modify the access control configuration by changing role assignments and creating or deleting role blocks. Administrators can delegate specific subsets of their administrative privileges to other users or groups. These users or groups can in turn delegate subsets of their privileges to additional users and groups. The delegated administration policy determines how users are permitted to delegate their privileges.

Delegated Administration Policy:

The delegated administration policy defines which role assignments are necessary in order to perform specific changes to the access control configuration.

The general policy for creating or deleting role assignments is as follows: A user U can create or delete a role assignment for a specific user or group UG to a role identified by role type RT and resource R in either of the following cases:

-   All of the following criteria are met:
    -   U has the Security Administrator@R or Administrator@R role
    -   U has at least a role of type RT on R
    -   U has the Delegator@UG, Security Administrator@UG, or Administrator@UG role.
-   U has the Administrator@Portal or Security Administrator@Portal role

For example, in order to assign a group to a role of type Editor on a resource, you must have at least the Delegator@Group + Security\_Administrator@Resource + Editor@Resource roles.

**Note:** The Security Administrator@Portal and Administrator@Portal roles allow users to make unrestricted changes to the access control configuration of resources that are under internal portal control. Users also need the Administrator@External Access Control role or the Security Administrator@External Access Control role in order to change the access control configuration for resources that are externally controlled by a security manager such as Security Access Manager.

The general policy for creating or deleting role blocks is as follows: A user U can create or delete a role block on a specific resource R and a role type RT in either of the following cases:

-   If both of the following criteria are met:
    -   U has the `Security Administrator@R` or `Administrator@R` role
    -   U has at least a role of type RT on R
-   **or** if U has the Security Administrator@Portal or Administrator@Portal role.

## Example of the delegated administration policy

Mary needs the authority to delete Hans from the Editor@Market News Page role. Hans is a member of the Marketing group. She can do this if all of the following conditions are true:

-   Mary is either Security Administrator@Market News Page or Administrator@Market News Page. She can acquire this role through an explicit role assignment, through an Administrator or Security Administrator role assignment on a parent resource, or by belonging to a group that has the appropriate role assignment.
-   Mary is at least Editor@Marketing News Page, since Hans will be deleted from the Editor role type.
-   Mary has a Delegator@Marketing Group role. Mary cannot delete arbitrary users or groups from the Editor@Market News Page role. She can delete only those users and groups for which she has a Delegator role. Because Hans is a member of the Marketing group, Mary has a Delegator role for Hans.

**Parent topic:**[Controlling access](../admin-system/control_access.md)

