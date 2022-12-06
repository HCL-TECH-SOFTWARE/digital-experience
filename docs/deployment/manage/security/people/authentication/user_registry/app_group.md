# Enabling application groups

You can define user groups within the database user registry with members (users or groups) contained in the federated LDAP user registry you configured with application groups. The benefit of application groups is that you can create groups that are only used in HCL Digital Experience.

Before you enable application groups, from the Configuration Wizard run the Enable Federated Security configuration option to add all required federated LDAP user registries. Then, add all required database user registries.Before you enable application groups, add all required federated database user registries and federated LDAP user registries. You must also set the Group entity type to the database user registry and the Person entity type to the LDAP user registry.

Before you complete this task, you might want to view and print the appropriate worksheet. See [HCL Portal Enable for zOS worksheets](../../../../db_mgmt_sys/dbtransfer_zOS/cw_db_ws_db2z.md).

You can use application groups in the following scenarios:

-   **Read-only LDAP**

    If you have a read-only LDAP, you cannot change the group membership of users and groups. If you need to define access rights for certain users that are in different groups, you can create an application group for these users with the required access rights.


-   **Special group setup for HCL Portal**

    In this scenario, you need to set up a special group hierarchy that is used only by HCL Portal and not by other applications that access your LDAP server. This set up can help you apply special access control rules just for HCL Portal because the roles assigned to the application group also apply to all of its members.


!!!note
    Application groups apply only to HCL Portal; it does not apply to external security managers. Also, application groups are not supported when you use the built-in file repository.

Perform the following steps to enable application groups:

1.  Run the following task to enable application groups:

    |Operating system|Task|
    |----------------|----|
    |AIX®|./ConfigEngine.sh wp-update-group-repository-relationship -DWasPassword=password -Drepository.id=ldapid -Drepository.forgroups=dbid from the [wp\_profile\_root](../../../../../../guide_me/wpsdirstr#wp_profile_root)/ConfigEngine directory|
    |IBM® i|ConfigEngine.sh wp-update-group-repository-relationship -DWasPassword=password -Drepository.id=ldapid -Drepository.forgroups=dbid from the [wp\_profile\_root](../../../../../../guide_me/wpsdirstr#wp_profile_root)/ConfigEngine directory|
    |Linux™|./ConfigEngine.sh wp-update-group-repository-relationship -DWasPassword=password -Drepository.id=ldapid -Drepository.forgroups=dbid from the [wp\_profile\_root](../../../../../../guide_me/wpsdirstr#wp_profile_root)/ConfigEngine directory|
    |Solaris|./ConfigEngine.sh wp-update-group-repository-relationship -DWasPassword=password -Drepository.id=ldapid -Drepository.forgroups=dbid from the [wp\_profile\_root](../../../../../../guide_me/wpsdirstr#wp_profile_root)/ConfigEngine directory|
    |Windows™|ConfigEngine.bat wp-update-group-repository-relationship -DWasPassword=password -Drepository.id=ldapid -Drepository.forgroups=dbid from the [wp\_profile\_root](../../../../../../guide_me/wpsdirstr#wp_profile_root)\\ConfigEngine directory|
    |z/OS®|Complete the following steps: 1. Start the HCL Portal Customization dialog.<br> 2. In the Portal configuration panel, select **Advanced configuration tasks**.<br> 3. Select **Security configuration tasks**.<br> 4. Select **Advanced security tasks**.<br> 5. Select **Miscellaneous tasks**.<br> 6. Select **Enabling application groups**.<br> 7. Select **Define variables**.<br> **Reminder:** Press F1 to display the help panel if you need assistance to define the variables.<br> 8. Generate the customization jobs.<br> 9. Follow the Customization dialog instructions for submitting the customization jobs.|

    When you run the wp-create-ldap task, ldapid is the value that is specified in federated.ldap.id and when you run the wp-create-db task, the dbid is the value that is specified in federated.db.id

2.  Stop and restart the HCL Portal server.



