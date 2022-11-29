# Controlling access

After creating users and groups, you can assign them different levels of access to specific resources, roles, and policies. This access controls what actions they can perform on various pages, portlets, and applications.

Review the following information and perform the following tasks to control access within HCL Digital Experience:

**Note:** If a page or label is not accessible for a user, the user is taken to any page or label higher up in the navigation that is accessible to them. For more information about setting page permissions, see [Manage pages portlets](/digital-experience/deployment/manage/portal_admin_tools/portal_user_interface/managing_pages/manage_pages_portlets).


-   **[Managing users and groups](../controlling_access/managing_user_groups)**  
View, create, and delete users and user groups. You can also change group memberships. Before you can modify user and group information, you must have the appropriate level of authorization.
-   **[Working with resource permissions](../controlling_access/working_with_resource_permission)**  
You can control whether a resource propagates or inherits its role assignments, assign roles explicitly to specific users and groups, place resources under the control of an external security manager or bring externalized resources back under the control of portal, create or delete roles on externalized resources, view inherited role assignments for specific users and groups, and modify resource owners.
-   **[Managing permissions for users and groups](../controlling_access/user_group_permission)**  
View and modify the access rights that users and user groups have for resources. Access rights are determined by role assignments.
-   **[Managing credential information](../controlling_access/managing_cred_info)**  
Credential Vault holds credential information and allows portlets to access the credentials to provide single sign-on authentication. Credential Vault allows you to add and manage vault segments and resources as well as managing system and user vault slot. You can create a vault slot for each known application in the portal that requires access to secure resources.
-   **[Managing Access Control](../controlling_access/sec_ac_adm.md)**  
Get familiar with concepts related to administering HCL Digital Experience access control. To administer access control, use the Resource Permissions portlet, the User and Group Permissions portlet, the Manage Users and Groups portlet, the XML configuration interface, or the Portal Scripting Interface.
-   **[Resources, roles, access rights, and initial access control settings](../controlling_access/resources_roles)**  
In order to fine-tune the security measures of your HCL Digital Experience environment, the administrator creates resources, roles, and access rights, which allows the administrator to control who has access to various information based on their roles and the access rights to that information.
-   **[Access control scenarios](../controlling_access/sec_acc_scen.md)**  
These scenarios provide helpful illustrations on how access control can be set up.
-   **[Web Content Manager access control](../controlling_access/wcm_security)**  
You can restrict access to selected users and groups to the views within a Web Content Manager authoring portlet, the items that are managed by the authoring portlet, and to elements and pages that are displayed within a website.
-   **[Setting user and group permissions](../controlling_access/sec_ugpp.md)**  
The User and Group Permissions portlet lets you view and modify the roles that users and groups have on resources.
-   **[Setting resource permissions](../controlling_access/sec_rpp.md)**  
Assign and control access for different types of resources.  
-   **[Delegated Access Control Administration](../controlling_access/d_acc_cntl_admin.md)**  
HCL Digital Experience supports delegated access control administration.  
-   **[Access Control Caching](../controlling_access/acc_control_cache.md)**  
Access Control internally uses several caches to improve the access control decision times. You can improve access control performance for special scenarios by setting the lifetime and size properties of these caches in the Cache Manager Service. In most cases, HCL Digital Experience will run smoothly with the default cache settings. However, if you have a large number of resources or a large number of customized resources, you may want to adjust cache settings and conduct some tests to find the best performance trade-offs.


**Related information**  


[Administering user impersonation](/digital-experience/deployment/manage/security/people/authorization/users_and_groups/impersonation)

[Managing the user population for virtual portals](/digital-experience/build_sites/virtual_portal/vp_planning/advppln_mgupop)

[Planning for virtual portals](/digital-experience/build_sites/virtual_portal/vp_planning/advppln_mgupop)

[The master administrator](/digital-experience/build_sites/virtual_portal/vp_planning/vp_roles/advppln_roles_mastr_adm)

[Sub-administrators of a virtual portal and their access roles and permissions](/digital-experience/build_sites/virtual_portal/vp_planning/vp_roles/advppln_roles_subadm)

