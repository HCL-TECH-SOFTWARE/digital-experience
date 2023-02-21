# Resources, roles, access rights, and initial access control settings

In order to fine-tune the security measures of your HCL Digital Experience environment, the administrator creates resources, roles, and access rights, which allows the administrator to control who has access to various information based on their roles and the access rights to that information.

Review the following information to learn more about resources, roles, access rights, and initial access control settings:

-   **[Resources](../resources_roles/resources)**  
Resources are organized in a hierarchy. Resources in the hierarchy propagate their access control configuration to all of their child resources. If a user has the Editor role on the Market News page, then that user also has the Editor role on child pages of the Market News page. Resource instances are specific resources, such as a single portlet or page. Each resource instance belongs to only one resource type. For example, the resource instance Market News Page would belong to the Content Nodes resource type.
-   **[Roles](../resources_roles/sec_roles.md)**  
Roles provide task permissions for users on resources. For example, Editor is a role that allows users to view, modify, and create resources. Roles are denoted as Role@Resource; for example, Editor@Portal Page.
-   **[Access permissions](../resources_roles/sec_acc_rights.md)**  
Learn about sensitive operations for resources and the roles that are required to perform those operations. Sensitive operations include common tasks such as viewing portlets on specific pages and complex, high-risk tasks like running XML configuration interface scripts.
-   **[Initial Access Control Settings](../resources_roles/init_acc_cntl_set.md)**  
The administrative user who installs HCL Digital Experience has a default set of access rights.


