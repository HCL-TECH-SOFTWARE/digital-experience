# Adding realm support

A realm is a group of users from one or more user registries that form a coherent group within HCL Digital Experience. Realms allow flexible user management with various configuration options. A realm must be mapped to a Virtual Portal to allow the defined users to log in to the Virtual Portal. When you configure realm support, complete these steps for each base entry that exists in your LDAP and database user registry to create multiple realm support.

Before you configure realm support, add all LDAP user registries and database user registries to the federated repository. To create multiple realms, you must create all required base entries within your LDAP user registries and database user registries. All base entry names must be unique within the federated repository. Use either the IBM® WebSphere® Application Server operations (the [addIdMgrRealmBaseEntry](https://www.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.doc/ae/rxml_atidmgrrealmconfig.html#rxml_atidmgrrealmconfig__cmd1) command) or the HCL Portal Configuration Wizard (**Add new LDAP**) to add base entries.

In a stand-alone server environment, you can complete this task when the servers are either stopped or started. In a clustered environment, start the deployment manager and node agent and verify that they are able to synchronize.

1.  Use the WebSphere Application Server backupConfig task to create and store a backup of the HCL Portal configuration. Read [backupConfig command](http://pic.dhe.ibm.com/infocenter/wasinfo/v8r5/topic/com.ibm.websphere.nd.doc/ae/rxml_backupconfig.html) for information.

2.  Use a text editor to open the wkplc.properties file in the [wp\_profile\_root](../../../../../../guide_me/wpsdirstr#wp_profile_root)/ConfigEngine/properties directory.

3.  Enter a value for the following parameters in the VMM realm configuration section:

    !!!note
        Review the properties file for specific information about the parameters.

    -   realmName
    -   securityUse
    -   delimiter
    -   addBaseEntry

4.  Save your changes.

5.  Open a command line and change to the [wp\_profile\_root](../../../../../../guide_me/wpsdirstr#wp_profile_root)/ConfigEngine directory.

6.  Run the following task to add a realm to the Virtual Member Manager configuration:

    !!!important
        To create multiple realms, ensure that your federated repository contains the correct unique base entries. Stop and restart the appropriate servers for your installation environment, and then update the wkplc.properties file with the base entry information and rerun the wp-create-realm task. Repeat these steps until all realms are created.

    -   AIX® HP-UX Linux™ Solaris z/OS®:./ConfigEngine.sh wp-create-realm -DWasPassword=password
    -   IBM i: ConfigEngine.sh wp-create-realm -DWasPassword=password
    -   Windows™: ConfigEngine.bat wp-create-realm -DWasPassword=password

7.  Stop and restart the appropriate servers to propagate the changes. For instructions, go to [Starting and stopping servers, deployment managers, and node agents](../../../../stopstart.md).

8.  Enter a value for the following parameters in the wkplc.properties file in the VMM realm configuration section:

    -   realmName
    -   realm.personAccountParent
    -   realm.groupParent
    -   realm.orgContainerParent

9.  Run the following task to update the default parents per entity type and realm:

    -   AIX HP-UX Linux Solaris z/OS:./ConfigEngine.sh wp-modify-realm-defaultparents -DWasPassword=password
    -   IBM i: ConfigEngine.sh wp-modify-realm-defaultparents -DWasPassword=password
    -   Windows: ConfigEngine.bat wp-modify-realm-defaultparents -DWasPassword=password

10. Stop and restart the appropriate servers to propagate the changes. Re-run the wp-modify-realm-defaultparents task to create more entity types and realms.

11. Complete the following steps to add more base entries to the realm configuration:

    For example, you have two more base entries (base entry 1 and base entry 2) to add to the realm you created. You must update the wkplc.properties file with the information from base entry 1 and then run this task. Then, update the properties file with the information for base entry 2 and then run this task.

    1.  Enter a value for the following parameters in the wkplc.properties file in the VMM realm configuration section:

        -   realmName
        -   addBaseEntry

    2.  Run the following task to add more LDAP base entries to the realm configuration:

        -   AIX HP-UX Linux Solaris z/OS:./ConfigEngine.sh wp-add-realm-baseentry -DWasPassword=password
        -   IBM i: ConfigEngine.sh wp-add-realm-baseentry -DWasPassword=password
        -   Windows: ConfigEngine.bat wp-add-realm-baseentry -DWasPassword=password

    3.  Stop and restart all necessary servers to propagate your changes.

12. Complete the following steps to replace the WebSphere Application Server and HCL Portal administrator user ID:

    !!!tip
        Complete these steps if you changed the default realm.

    1.  Create a user in the **Manage Users and Groups** portlet to replace the current WebSphere Application Server administrative user.

    2.  Create a user in the **Manage Users and Groups** portlet to replace the current HCL Portal administrative user.

    3.  Create a group in the **Manage Users and Groups** portlet to replace the current group.

    4.  Run the following task to replace the old WebSphere Application Server administrative user ID and group ID with the new user and group:

        -   AIX HP-UX Linux Solaris z/OS:./ConfigEngine.sh wp-change-was-admin-user -DWasUser=adminid -DWasPassword=password -DnewAdminId=newadminid -DnewAdminPw=newpassword -DnewAdminGroupId=newadmingroupid
        -   IBM i: ConfigEngine.sh wp-change-was-admin-user -DWasUser=adminid -DWasPassword=password -DnewAdminId=newadminid -DnewAdminPw=newpassword -DnewAdminGroupId=newadmingroupid
        -   Windows: ConfigEngine.bat wp-change-was-admin-user -DWasUser=adminid -DWasPassword=password -DnewAdminId=newadminid -DnewAdminPw=newpassword -DnewAdminGroupId=newadmingroupid

    5.  Verify that the task completed successfully. Stop and restart all servers.

    6.  Run the following task to replace the old HCL Portal administrative user ID and group ID with the new user and group:

        -   AIX HP-UX Linux Solaris z/OS:./ConfigEngine.sh wp-change-portal-admin-user -DWasPassword=password -DnewAdminId=newadminid -DnewAdminPw=newpassword -DnewAdminGroupId=newadmingroupid
        -   IBM i: ConfigEngine.sh wp-change-portal-admin-user -DWasPassword=password -DnewAdminId=newadminid -DnewAdminPw=newpassword -DnewAdminGroupId=newadmingroupid
        -   Windows: ConfigEngine.bat wp-change-portal-admin-user -DWasPassword=password -DnewAdminId=newadminid -DnewAdminPw=newpassword -DnewAdminGroupId=newadmingroupid

        !!!important
            You must provide the full distinguished name (DN) for the newAdminId and newAdminGroupId parameters.

        **Additional parameter for stopped servers:** This task verifies the user against a running server instance. If the server is stopped, add the -Dskip.ldap.validation=true parameter to the task to skip the validation.

    7.  Verify that the task completed successfully. Stop and restart all servers.

13. Complete the following steps to set the realm you created as the default realm:

    !!!important
        Only users that are defined in base entries that exist in the default realm are able to log in to HCL Portal. If a user cannot log in to HCL Portal, check whether the base entry that contains the user exists in the default realm. You can run the wp-query-realm-baseentry task to see what base entries are part of the default realm. If the default realm is missing the base entry, run the wp-add-realm-baseentry task to add the base entry to the default realm.

    1.  Open the wkplc.properties file.

    2.  For defaultRealmName, type the realmName property value you want to use as the default realm.

    3.  Save your changes.

    4.  Run the following task to set this realm as the default realm:

        -   AIX HP-UX Linux Solaris z/OS:./ConfigEngine.sh wp-default-realm -DWasPassword=password
        -   IBM i: ConfigEngine.sh wp-default-realm -DWasPassword=password
        -   Windows: ConfigEngine.bat wp-default-realm -DWasPassword=password

    5.  Stop and restart all necessary servers to propagate your changes.

14. Complete the following steps to query a realm for a list of its base entries:

    1.  Open the wkplc.properties file.

    2.  For realmName, type the name of the realm you want to query.

    3.  Save your changes.

    4.  Run the following task to list the base entries for a specific realm:

        -   AIX HP-UX Linux Solaris z/OS:./ConfigEngine.sh wp-query-realm-baseentry -DWasPassword=password
        -   IBM i: ConfigEngine.sh wp-query-realm-baseentry -DWasPassword=password
        -   Windows: ConfigEngine.bat wp-query-realm-baseentry -DWasPassword=password

15. Complete the following steps to enable the full distinguished name login if the short names are not unique for the realm:

    !!!tip
        Run this task if the administrator name is in conflict with another user name in the attached repository. This command allows the Administrator to log in using the fully distinguished name instead of the short name.

    1.  Open the wkplc.properties file.

    2.  Enter a value for realmName or leave blank to update the default realm.

    3.  Save your changes.

    4.  Run the following task to list the base entries for a specific realm:

        -   AIX HP-UX Linux Solaris z/OS:./ConfigEngine.sh wp-modify-realm-enable-dn-login -DWasPassword=password
        -   IBM i: ConfigEngine.sh wp-modify-realm-enable-dn-login -DWasPassword=password
        -   Windows: ConfigEngine.bat wp-modify-realm-enable-dn-login -DWasPassword=password

        !!!note
            You can run the wp-modify-realm-disable-dn-login task to disable the feature.

    5.  Stop and restart all necessary servers to propagate your changes.



???+ info "Related information"
    - [Managing the user population for virtual portals](../../../../../../build_sites/virtual_portal/vp_planning/advppln_mgupop.md)
    - [Migration: Virtual portals](../../../../migrate/planning_migration/mig_plan_expectations/mig_plan_expect_vp.md)

