# Updating your user registry

After you deploy HCL Digital Experience, you can adjustment your federated user repository configurations. You can update these configurations to achieve the correct user registry configuration.

Choose from the following tasks to update your user registry configurations:

-   **[Updating the context pool configuration](contextpool.md)**  
After you configure your LDAP user registry, you can adjust the number of context instances that the context pool concurrently maintains to improve performance.
-   **[Creating the entity type](create_et.md)**  
If an entity type exists within HCL Digital Experience but not within your LDAP user registry, create the entity type within your LDAP user registry. Then, add the relative distinguished name (RDN) to the entity type to map it between HCL Portal and your LDAP user registry.
-   **[Changing from a stand-alone repository to a federated repository](mod_fed_sec.md)**  
If you originally configured a stand-alone LDAP user registry but require a robust security configuration, you can change to the federated user repository.
-   **[Restoring the VMM setup with a federated file repository](restore_vmm.md)**  
If your business changes or your user registry configuration is inoperable, run the wp-restore-default-repository-configuration task to restore the default VMM setup with a federated file repository. Then, reconfigure your user registry. The task deletes all existing repositories, creates a realm, and configures a file repository in VMM. The task also creates a user and group, which is set to the HCL Digital Experience administrator.
-   **[Updating an entity type](ud_et.md)**  
After you add your user registry, you can update a single entity type with the value of the default parent. For example, if you delete a repository, you must update the entity type if it points to the deleted repository.
-   **[Updating the base entry](update_be.md)**  
After you create your base entries, you can update the distinguished name (DN) in the repository that uniquely identifies the base entry name. This task applies only to federated repository configurations. This task does not update the base DN entry if you use a stand-alone repository.
-   **[Updating the database user registry](update_db_ureg.md)**  
After you create and use the database user registry, you can update the database user ID, password, and where the data is stored. This task does not change the DN structure that is stored in the database repository.
-   **[Updating a group member](update_gm.md)**  
After you create your LDAP user registry, you might find that your group member is not correct. You can update the group member in your LDAP user registry configuration.
-   **[Updating the federated LDAP user registry](update_ldap_ureg.md)**  
After you create and use the LDAP user registry in the default federated repository, you might find that your LDAP user registry is not working correctly. You can update the LDAP user registry and make the necessary changes. For example, you can change your LDAP Bind password.
-   **[Updating the realm configuration](update_realm.md)**  
After you create and use the realm in the default federated repository, you might find that your realm configuration is not working correctly. You can update the realm configurations and make the necessary changes.
-   **[Configuring a property extension database](lookaside_db.md)**  
A property extension database stores attributes that the LDAP directory does not or cannot store, but that you want to include in your portal user registry. This situation often occurs when you are using an LDAP directory that does not allow schema extensions for new attributes to support portal applications. When you configure a property extension database, you effectively extend the user registry to make new attributes available as part of your portal user profile. However, it is preferable to store all user attributes in the main user registry. Complete this task only if you cannot add attributes to your LDAP directory.


