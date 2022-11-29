# Replacing the WebSphere Application Server administrator user ID

If you change your security configuration, you might need to replace your old IBM WebSphere Application Server administrator user ID with a new WebSphere Application Server administrator user ID.

Complete the following steps to replace the WebSphere® Application Server administrator user ID:

1.  Create a user in the **Manage Users and Groups** portlet to replace the current WebSphere Application Server administrative user.

2.  Run the following task to replace the old WebSphere Application Server administrative user with the new user:


    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh wp-change-was-admin-user -DWasPassword=password -DnewAdminId=newadminid -DnewAdminPw=newpassword from the [wp\_profile\_root](../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.
    -   IBM® i: ConfigEngine.sh wp-change-was-admin-user -DWasPassword=password -DnewAdminId=newadminid -DnewAdminPw=newpassword from the [wp\_profile\_root](../../../../../../guide_me/wpsdirstr.md#wp_profile_root)\\ConfigEngine directory.
    -   Windows™: ConfigEngine.bat wp-change-was-admin-user -DWasPassword=password -DnewAdminId=newadminid -DnewAdminPw=newpassword from the [wp\_profile\_root](../../../../../../guide_me/wpsdirstr.md#wp_profile_root)\\ConfigEngine directory.
    -   z/OS®: ./ConfigEngine.sh wp-change-was-admin-user -DWasPassword=password -DnewAdminId=newadminid -DnewAdminPw=newpassword from the [wp\_profile\_root](../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine directory. The -DnewAdminGroupID parameter is needed only if you plan to replace the old administrative group ID.

    !!!note
        Refer to the description of the newAdminId property in wkplc.properties under wp\_profile\_root\\ConfigEngine\\properties\\ for guidance on populating the value in the command line.


    **Additional parameter for stopped servers:** This task verifies the user against a running server instance. If the server is stopped, add the -Dskip.ldap.validation=true parameter to the task to skip the validation.

3.  Verify that the task completed successfully. Stop and restart all required servers.

!!!note
    If you use an external security manager such as Security Access Manager, you must manually remove the old administrator user ID from the external security manager.



???+ info "Related information"
    - [Applying fix packs to your portal](../../../../manage_portal_using_iim/apply_fixpacks.md)
    - [Target environment considerations](../../../../migrate/settingup_target_env/mig_plan_targetenvironment.md)


