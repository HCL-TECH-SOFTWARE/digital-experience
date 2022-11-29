# Users and groups

HCL Digital Experience offers you centralized administration of users and user groups, allowing you to better define users and manage user access rights. Users can register and manage their own account information, or an administrator can provision and manage users. Group memberships can be used to give the required permissions to access an object or perform a request.

-   **[Choose the type of group to use](../users_and_groups/type_of_group.md)**  
HCL Digital Experience offers many types of groups and locations to store the groups. Choosing the type of group and the location the groups are stored is an important step in planning for using groups with HCL Portal.
-   **[Rule-based user groups](../users_and_groups/rule_based_user_groups)**  
Rule-based user groups for HCL Portal allow you to define dynamic portal user groups.
-   **[Creating new users and groups](../users_and_groups/adctnewu.md)**  
Use this topic to create new users and groups by using the portlet and adding them to an existing group.
-   **[Reusing group information](../users_and_groups/reuse_group_info.md)**  
During the authentication of a user, IBM WebSphere Application Server stores information about which groups users belong to. This information is static for the authentication session of the user. In addition, it can be provided by an External Security Manager through a Trust Association Interceptor. In this case, IBM WebSphere Application Server does not load the information on its own. HCL Digital Experience can participate in this flow and reuse the information from the WebSphere Application Server security context instead of retrieving it from the LDAP server. This function is also referred to as group assertion or WebSphere Application Server group assertion.
-   **[Virtual users and user groups](../users_and_groups/adusrgrp_user.md)**  
There are two predefined virtual user groups \(All Authenticated Portal Users and All Portal User Groups\) and one virtual user \(Anonymous Portal User\). These predefined virtual groups and user allow for access control configuration that applies to abstract sets of users. They are not stored in the user registry. They only exist within the access control context. You cannot change group membership or other attributes of these virtual usergroups and user.
-   **[Administering user impersonation](../users_and_groups/impersonation)**  
Use the impersonation feature to access another user's system as though you are that user. Use caution with this configuration. The user who is doing the impersonation might get more permissions than initially granted to them.
-   **[Customize common name generation](../users_and_groups/sec_cust_names.md)**  
 By default, HCL Digital Experience generates common names that consists of the user's first name followed by the last name. You can change the order that common names are generated.
-   **[Nested groups](../users_and_groups/adusrgrp_nested.md)**  
Two groups are nested if one of the groups contains the other group as a member. The access control system treats nested groups as though all members of the contained group are also members of the containing group. In other words, permissions for nested groups are treated as cumulative.
-   **[Registration/Edit My Profile and Login portlets](../users_and_groups/sec_subman.md)**  
In HCL Portal, the Registration/Edit My Profile and Login portlets reside on special pages where the anonymous user has access rights based on the User role.
-   **[Removing users and groups](../users_and_groups/adxmltsk_del_usrs_grps.md)**  
Depending on circumstances, you might want to remove users or groups from your HCL Digital Experience that are no longer used or required. You can use the XML configuration interface \(XML Access\) to list such users and groups. You can also remove only some selected users and groups, and keep others for further use.


<!--
**Related information**  


[Work with the Portal Scripting Interface](../admin-system/adpsitsk.md)

[Administering user impersonation](/digital-experience/deployment/manage/security/people/authorization/users_and_groups/impersonation)
-->
