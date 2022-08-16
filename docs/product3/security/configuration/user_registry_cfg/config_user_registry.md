# User registry

User information is stored in your user registry. You can enable LDAP referrals, configure HCL Digital Experience to use dynamic groups, update your user registry, or delete your user registry configurations.

-   **[Enable federated security](../config/cw_ldap.md)**  
You can use the Configuration Wizard to configure HCL Portal to use a federated LDAP for security. Use the following information to get familiar with the information you must provide in the wizard and the configuration procedure that it generates.
-   **[Adding more attributes to VMM](../install/manage_atts.md)**  
After you install HCL Digital Experience and configuring your LDAP user registries, you must adapt the attribute configuration to match the configured LDAP servers and your business needs. However, do not complete these steps if you configured only a database user registry or the default federated file-based repository for out-of-box installations.
-   **[Enabling application groups](../security/app_group.md)**  
You can define user groups within the database user registry with members \(users or groups\) contained in the federated LDAP user registry you configured with application groups. The benefit of application groups is that you can create groups that are only used in HCL Digital Experience.
-   **[Advanced group configurations](../security/adv_sec_ov.md)**  
It is possible to use HCL Digital Experience ConfigEngine helper tasks to set up advanced Virtual Member Manager \(VMM\) group configurations. Specifically, it is possible to configure VMM to understand and use the "Group membership attribute" that many directories support.
-   **[Adding a database user registry](../config/add_db_usr_reg.md)**  
Add a database user registry to the default federated repository to store user account information for authentication and authorization. You can add multiple database user registries to the default federated repository although you can add only one database user registry at a time.
-   **[Adding realm support](../security/cfg_realm.md)**  
A realm is a group of users from one or more user registries that form a coherent group within HCL Digital Experience. Realms allow flexible user management with various configuration options. A realm must be mapped to a Virtual Portal to allow the defined users to log in to the Virtual Portal. When you configure realm support, complete these steps for each base entry that exists in your LDAP and database user registry to create multiple realm support.
-   **[Updating your user registry](../security/update_ureg.md)**  
After you deploy HCL Digital Experience, you can adjustment your federated user repository configurations. You can update these configurations to achieve the correct user registry configuration.
-   **[Deleting your user registry configurations](../security/delete_ureg.md)**  
After you deploy HCL Digital Experience, you might not require some of the LDAP entity types, realms, realm base entries, or repositories that you created. You can delete these configurations to achieve the correct user registry configuration.
-   **[Setting limits on searches for users and groups](../admin-system/adusrgrp_search.md)**  
Searching for users or groups is a time consuming task. A search may time out or return more results than the system can handle or the user may expect. To prevent this behavior, you can set limits on searches for users or groups.
-   **[LDAP search filter expressions](../admin-system/rbug_ldapfltrxprns.md)**  
The rules for rule-based user groups are based on the LDAP search filter syntax.

**Parent topic:**[Configuring](../config/configuring_parent2.md)

