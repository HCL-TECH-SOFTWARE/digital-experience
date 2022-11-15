# Enabling user provisioning

When users are created in HCL Digital Experience, they are not automatically imported into Security Access Manager. Enabling automatic user provisioning to Security Access Manager changes this behavior. After this feature is enabled, users are automatically imported into Security Access Manager whenever they are created in HCL Digital Experience. When user provisioning is enabled, anyone with access to the public URL can become an active user in Security Access Manager if the self-registration feature remains enabled.

!!!note
    There are two ways to create users in HCL Digital Experience:
        -   **Self-registration:** This feature is enabled by default.
        -   **Manage Users and Groups portlet:** Administrators can use this portlet to create HCL Digital Experience users.

Complete the following steps to enable user provisioning within Security Access Manager:

!!!note
    In a clustered environment, run the following tasks on each node in the cluster.

1.  **Clustered environments:** Complete this step on all nodes.

    Run the following task in the wp_profile_root/ConfigEngine directory to validate that the PdPerm.properties file is correct and that communication between HCL Digital Experience and the Security Access Manager server works:

    !!!note "Tip"
        Run the validate-pdadmin-connection task on the HCL Digital Experience node or on each node in a clustered environment. In a clustered environment, WasPassword is the Deployment Manager administrator password. The wp.ac.impl.PDAdminPwd is the Security Access Manager administrative user password.

    |Operating system|Task|
    |----------------|----|
    |AIX®|`./ConfigEngine.sh validate-pdadmin-connection -DWasPassword=password -Dwp.ac.impl.PDAdminPwd=password`|
    |Linux™|`./ConfigEngine.sh validate-pdadmin-connection -DWasPassword=password -Dwp.ac.impl.PDAdminPwd=password`|
    |Windows™|`ConfigEngine.bat validate-pdadmin-connection -DWasPassword=password -Dwp.ac.impl.PDAdminPwd=password`|

    **If the task does not run successfully:** Run the run-svrssl-config task to create the properties file. For information, refer to *Creating the PdPerm.properties file*. Then, run the validate-pdadmin-connection task again. If the task is not successful after a second attempt, do not proceed with any subsequent steps. The fact that the task does not run successfully indicates that your portal cannot connect to the Security Access Manager server. Troubleshoot the connectivity issue between your portal instance and the Security Access Manager server.

2.  Start all servers before you run the enable-tam-userprov task.

3.  Run the following task to enable user provisioning:

    |Operating system|Task|
    |----------------|----|
    |AIX and Linux|`./ConfigEngine.sh enable-tam-userprov -DPortalAdminId=password -DPortalAdminPwd=password from the wp_profile_root/ConfigEngine directory`|
    |Windows|`ConfigEngine.bat enable-tam-userprov -DPortalAdminId=password -DPortalAdminPwd=password from the wp_profile_root\ConfigEngine directory`|

4.  Stop and restart the appropriate servers to propagate the changes. For specific instructions, see [Starting and stopping servers, deployment managers, and node agents](../../../../../deployment/manage/stopstart.md).

???+ info "Related information*" 
    -   [Creating the PdPerm.properties file](../../../../../deployment/manage/security/external_sec_mgmt/security_access_manager/cfg_sec_access_mgr/run_svrssl_config.md)

