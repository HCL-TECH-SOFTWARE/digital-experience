# Replacing the HCL Digital Experience administrator user ID

If you change your security configuration, you might need to replace your old HCL Digital Experience administrator user ID with a new HCL Digital Experience administrator user ID.

Complete the following steps to replace the HCL Digital Experience administrator user ID:

**Important cluster note:** If you are using HCL Web Content Manager within your clustered environment, you must complete these steps on every node in the cluster. If Web Content Manager is not configured, complete these steps only on the primary node.

1.  Create a user in the **Manage Users and Groups** portlet to replace the current HCL Digital Experience administrative user.

2.  Run the following task to replace the old HCL Digital Experience administrative user with the new user:

    -   **AIX® HP-UX Linux™ Solaris:** ./ConfigEngine.sh wp-change-portal-admin-user -DWasPassword=password -DnewAdminId=newadminid -DnewAdminPw=newpassword -DnewAdminGroupId=newadmingroupid from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory. The -DnewAdminGroupId parameter is required only if you plan to replace the old administrative group ID.
    -   **IBM® i:** ConfigEngine.sh wp-change-portal-admin-user -DWasPassword=password -DnewAdminId=newadminid -DnewAdminPw=newpassword -DnewAdminGroupId=newadmingroupid from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory. The -DnewAdminGroupId parameter is required only if you plan to replace the old administrative group ID.
    -   **Windows™:** ConfigEngine.bat wp-change-portal-admin-user -DWasPassword=password -DnewAdminId=newadminid -DnewAdminPw=newpassword -DnewAdminGroupId=newadmingroupid from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\ConfigEngine directory. The -DnewAdminGroupId parameter is required only if you plan to replace the old administrative group ID.
    -   **z/OS®:** ./ConfigEngine.sh wp-change-portal-admin-user -DWasPassword=password -DnewAdminId=newadminid -DnewAdminPw=newpassword -DnewAdminGroupId=newadmingroupid from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory. The -DnewAdminGroupId parameter is required only if you plan to replace the old administrative group ID.
    **Additional parameter for stopped servers:** This task verifies the user against a running server instance. If the server is stopped, add the -Dskip.ldap.validation=true parameter to the task to skip the validation.

3.  Verify that the task completed successfully. Stop and restart all required servers.

4.  Complete the following steps to change the information stored in the **SearchAdminUser** alias:

    1.  Log in to the WebSphere® Integrated Solutions Console.

    2.  Click **Security** \> **Global security**.

    3.  Under Authentication, click **Java Authentication and Authorization Service** \> **J2C authentication data**.

    4.  Edit the **SearchAdminUser** alias.

    5.  Update the user ID and/or password to match your HCL Digital Experience administrator information.

5.  Clustered environments: Synchronize the nodes.

    1.  Log on to the Deployment Manager.

    2.  Go to **System Administration** \> **Nodes**.

    3.  Select the nodes to synchronize from the list.

    4.  Click **Full Resynchronize**.

6.  **Note:** This step is required only if you have HCL Digital Experience Version 8.5 with CF03 through CF07. CF02 and earlier cumulative fixes do not have the StartupCheck application yet. CF08 and later cumulative fixes do not require this manual step any more.

    Update the user ID and password for the RunAs role mapping for the StartupCheck application.

    To do so, proceed as follows:

    1.  Log in to the WebSphere Integrated Solutions Console.

    2.  Select **Enterprise Applications** \> **StartupCheck** \> **User RunAs roles**.

    3.  Update the user ID and password for the RunAs role mapping for the StartupCheck application.


**Notes:**

-   If you use an external security manager such as Security Access Manager, you must manually remove the old administrator user ID from the external security manager.
-   If you set the default portal administrator user ID to be used as the crawler user ID for Portal Search, you need to adapt that crawler user ID accordingly. For more information, read [Managing the content sources of a search collection](../admin-system/srtmngcontsrc.md#).
-   If you have HCL Digital Experience Version 8.5 with CF08 or an earlier version and you have the Script Portlet V 1.3 PAA from the catalog installed, make sure that the security constraints of the Script Portlet reflect the new portal administrator group. If they do not match, update them manually to match the new portal administration group. For information about how to do so, read the section about the *Security overview for Script Portlet V 1.3* in the Script Portlet V 1.3 documentation.


**Related information**  


[Managing the content sources of a search collection](../admin-system/srtmngcontsrc.md)

[Applying fix packs to your portal](../security/apply_fixpacks.md)

[Script Application security overview](../script-portlet/security.md)

[Target environment considerations](../plan/mig_plan_targetenvironment.md)

