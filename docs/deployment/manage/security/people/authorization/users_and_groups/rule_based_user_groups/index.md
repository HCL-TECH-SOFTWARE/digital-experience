# Rule-based user groups

Rule-based user groups for HCL Portal allow you to define dynamic portal user groups.

Rule-based user groups are implemented as a custom repository adapter for Virtual Member Manager \(VMM\). Rule based user groups are represented by a unique group name, the Lightweight Directory Access Protocol \(LDAP\) search filter rule expression, and an optional description. The portal handles them as normal portal user groups. They are in a special base distinguished name in the user realm hierarchy. Administrators can create, define, update, or delete them by using the VMM API in WebSphere® Application Server or the Portal User Management Architecture \(PUMA\) in HCL Portal like other groups. You can use these soft groups to assign security role mappings, portal access permissions, or visibility rules the same way as other portal user groups. The rule-based user groups feature handles the correct membership determination for the users during run time. Advantages:

-   Rule-based user groups allow you to define and assemble dynamic portal user groups. They are based on LDAP search filter expressions applied to user attributes.
-   These groups are persisted in the portal database, not in the main portal user repository. You do not need to enter them into the LDAP.

## What you can do with rule-based user groups

-   Define a rule-based user group including the syntax validation of the rule.
-   Modify the rule or description of an existing rule-based user group including the syntax validation of the rule.
-   Search for rule-based user groups based on the group name.
-   Resolve the rule-based user group membership for particular users during run time.
-   Display the members of a particular rule-based user group.

    **Note:** This operation can have an impact on the performance of your portal. Perform it only to verify the resulting set of members after defining a rule base group.

-   Delete an existing rule-based user group.

**Notes:**

1.  Rule based user groups can contain only individual users, but not groups.
2.  After defining a rule-based user group, you cannot change the unique group name.

-   **[Configuring the rule-based user groups adapter](../rule_based_user_groups/cfg_rule_based_user_groups)**  
To install rule-based user groups on your HCL Portal, you must set up a database, and configure VMM rule based groups.


**Related information**  


[Choose the type of group to use](/digital-experience/deployment/manage/security/people/authorization/users_and_groups/type_of_group)

