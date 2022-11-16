---
id: h_rperm_create_role_block
title: Creating a role block
---




You can remove inherited role assignments by creating a role block. Inserting a role block affects all users and groups who do not have explicitly assigned roles on a resource. You can create a propagation block for a resource so that children of the resource will not inherit any assignments for the role type, and you can create an inheritance block so that a resource will no longer inherit any assignments for the role type from the parent resource.

Perform the following steps to create a role block:

1.  On the initial **Resource Permissions** screen, click the appropriate **Resource Type**. If necessary, search for a specific resource instance.

2.  Click the **Assign Access** icon of the required resource type.

3.  Remove the check mark from the **Allow Propagation** check box to create a propagation block. Children of the resource will no longer inherit any assignments for this role type.

4.  Remove the check mark from the **Allow Inheritance** check box to create an inheritance block. This resource will no longer inherit any assignments for this role type from the parent resource.

5.  Click **OK** to save changes.


