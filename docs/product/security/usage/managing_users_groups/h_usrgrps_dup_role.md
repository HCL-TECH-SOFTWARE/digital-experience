---
id: h_usrgrps_dup_role
title: Duplicating role assignments
---
import useBaseUrl from '@docusaurus/useBaseUrl';



Use this feature to assign one member to the same role assignments as a group without the member joining the group.

Suppose you want to give Mary, who is a member of the Research group, the same explicit role assignments as the Sales group, but you do not want her to be a member of the Sales group. The Sales group has the Privileged User@Market News Page role explicitly assigned. You can use the duplicate role assignments feature to give Mary the same explicit role assignments as the Sales group.

**Note:** Only explicit role assignments will be duplicated. Role assignments that are inherited through group membership are not duplicated. For example, if the Sales group is a subgroup of the Marketing group, Mary does not automatically receive or inherit any of the role assignments that the Marketing group has.

In order to duplicate role assignments, you must have sufficient permissions. If you do not have sufficient permissions to make any one of the role assignments, then none of the assignments are made.

In the previous example, you must have either of the following permissions:

-   At least the Privileged User@Market News Page, Security Administrator@Market News Page, and Delegator@Research Group roles. This allows you to assign the Research group \(or individual members of this group\) to the Privileged User@Market News Page role or the User@Market News Page role.
-   The Administrator@Portal role. This allows you to assign any user or group to any role on any resource.

Perform these steps to duplicate role assignments:

1.  Choose one of the following methods to find the user or group that will inherit the role assignment:

    -   Search for the user or group
    -   Click the **All Portal User Groups** link for a list of all groups
    -   Click the **All Authenticated Portal Users** for a list of all users
2.  Click the **Duplicate role assignments** icon for the user or group that will inherit the role assignments.

3.  Click the **Select** radio button for the user or group that will serve as the model for the role assignment.

4.  Click **OK** to save your changes, or **Cancel** to exit without saving your changes.


