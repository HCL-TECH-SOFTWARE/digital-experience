---
id: h_rperm_assign_roles
title: Viewing and assigning explicit roles
---
import useBaseUrl from '@docusaurus/useBaseUrl';



View, assign, or edit roles for a resource type.

Perform the following steps to edit explicit roles.

1.  Select a resource type from the **Resource types** list. A list of resource instances appears.

2.  Click the **Assign Access** icon for the required resource type. A list of roles associated with the resource appears.

3.  Click the **Edit Role** icon for the required role. A list of members appears.

    **Note:** The **Delete Member from Role** icon indicates that the member has an explicit role assignment, which can be deleted. A check mark in the **Inherited** column indicates that the role is acquired via the resource hierarchy. Implicit roles are not displayed in the **Resource Permissions** portlet. To view implicit roles, use the **User and Group Permissions** portlet.


Follow these steps to add a user or group to a role:

1.  Click **Add**.
2.  Browse or search for the appropriate user or user group.
3.  Select the appropriate users or user groups from the search results.
4.  Click **OK** to save changes. The user or group is now explicitly assigned to the role.

Follow these steps to remove a user or group from an explicit role assignment:

1.  Click the **Delete from Role** icon.
2.  Click **Yes** when the confirmation dialog box appears.

**Note:** Removing a user or user group from a role does not delete the user or group from the portal. The previous procedure removes the member from explicit assignments to the specified role. This procedure does not affect explicit assignments to other roles on the specified resource. For example, removing a user from the Editor@Market News Page role does not affect the user's assignment to the User@Market News Page role. This procedure does not affect implicit or inherited role assignments.

To remove implicit role assignments, do one of the following:

-   Use the **Manage Users and Groups** portlet to remove the member from the user group.
-   Use the **Resource Permissions** portlet or the **User and Group Permissions** portlet to remove the role from the group to which the member belongs.

To remove inherited role assignments, do one of the following:

-   Use the **Resource Permissions** portlet to create a role block. Inserting a role block affects all users and groups who do not have explicitly assigned roles on a resource. See the **Creating a role block** section for instructions.
-   Use the **Resource Permissions** portlet or the **User and Group Permissions** portlet to change the role that the member has on the parent resource.

