# Viewing role assignments




Determine whether roles are implicitly assigned via group membership, inherited via the resource hierarchy, or explicitly assigned.

Perform the following steps to view role assignments:

1.  Click **Users** or **User Groups**.

2.  Search for the required user or user group.

3.  Click the **Select Resource Type** icon for the required user or user group. A list of resource types appears.

4.  Click the required **Resource Type**. A list of resource instances appears for the specified resource type. The following two columns display information about roles:

    -   **Explicitly Assigned:** A check mark in this column indicates that the role is explicitly assigned. If no check mark is placed here the role is inherited via the resource hierarchy or via group membership.
    -   **Role\(s\):** This column lists the roles that the user or group has on the resource instance. Users and groups can have multiple role assignments on a single resource instance.
5.  Click the **Assign access** icon of the required Page Title to view whether the role was inherited via the resource hierarchy or group membership. A check mark in the Inherited/Group Member column can indicate any of the following conditions:

    -   The role is inherited through the resource hierarchy. The user has a role assignment on a parent resource and that role propagates to all child resources. To remove or edit this role assignment, you must either use the Resource Permissions portlet to insert a role block or change the role that the member has on the parent resource. Inserting a role block affects all users and groups who do not have explicitly assigned roles on a resource.
    -   The role is implicitly assigned through group membership. When a role is assigned to a user group, all group members receive the role automatically. To remove or change this role you must either remove the member from the user group or change the role assigned to the user group.
    -   The role is both implicitly assigned and inherited through the resource hierarchy. To change this role, you must change both the implicit role assignment and the inherited role assignment.

