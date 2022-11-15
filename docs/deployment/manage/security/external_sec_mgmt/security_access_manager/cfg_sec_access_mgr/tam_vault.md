# Configuring the Credential Vault adapter for Security Access Manager

You can use IBM Security Access Manager in the HCL Digital Experience Credential Vault service. HCL Portal includes a vault adapter to access the Security Access Manager Global Sign-on \(GSO\) lockbox. Any existing Tivoli resource or resource credentials can be used in your portlets that access the credential vault service without any additional configuration. In addition, the credential vault service and credential vault management portlet can create or update an existing GSO lockbox entry.

!!!note
    Users who are storing credentials in the accessmanagervault.properties file must be defined in Security Access Manager as global sign-on (GSO) users.

!!!note "Clustered note"
    In a clustered environment, complete steps 1 and 2 on each node. The WasPassword value is the Deployment Manager administrative password.

1.  **Clustered environments:** Complete this step on all nodes.

    Run the following task in the wp_profile_root/ConfigEngine directory to validate that the PdPerm.properties file is correct and that communication between HCL Portal and the Security Access Manager server works:

    !!!note "Tip"
        Run the validate-pdadmin-connection task on the HCL Portal node or on each node in a clustered environment. In a clustered environment, WasPassword is the Deployment Manager administrator password. The wp.ac.impl.PDAdminPwd is the Security Access Manager administrative user password.

    |Operating system|Task|
    |----------------|----|
    |AIX®|`./ConfigEngine.sh validate-pdadmin-connection -DWasPassword=password -Dwp.ac.impl.PDAdminPwd=password`|
    |Linux™|`./ConfigEngine.sh validate-pdadmin-connection -DWasPassword=password -Dwp.ac.impl.PDAdminPwd=password`|
    |Windows™|`ConfigEngine.bat validate-pdadmin-connection -DWasPassword=password -Dwp.ac.impl.PDAdminPwd=password`|

    **If the task does not run successfully:** Run the run-svrssl-config task to create the properties file. For information, refer to *Creating the PdPerm.properties file*. Then, run the validate-pdadmin-connection task again. If the task is not successful after a second attempt, do not proceed with any subsequent steps. The fact that the task does not run successfully indicates that your portal cannot connect to the Security Access Manager server. Troubleshoot the connectivity issue between your portal instance and the Security Access Manager server.

2.  Run the following task to create and populate the wp_profile_root/PortalServer/config/config/accessmanagervault.properties file:

    |Operating system|Task|
    |----------------|----|
    |AIX|`./ConfigEngine.sh enable-tam-vault -DWasPassword=password -Dwp.ac.impl.PDAdminPwd=password`|
    |Linux|`./ConfigEngine.sh enable-tam-vault -DWasPassword=password -Dwp.ac.impl.PDAdminPwd=password`|
    |Windows|`ConfigEngine.bat enable-tam-vault -DWasPassword=password -Dwp.ac.impl.PDAdminPwd=password`|

3.  Complete the following steps to set the value for the systemcred.dn property:

    !!!note
        The systemcred.dn property defines the distinguished name of the vault administrative user. All system credentials are stored under the user account. For Security Access Manager, this user must be an existing Security Access Manager user. The Security Access Manager adapter checks if the user exists in Security Access Manager before the slots are accessed.

    1.  Log on to the WebSphere® Integrated Solutions Console.

    2.  Go to **Resources > Resource Environment > Resource Environment Providers**.

    3.  Click **WP CredentialVaultService**.

    4.  Under **Additional Properties**, click **Custom properties**.

    5.  Edit the systemcred.dn property. Set the value to an existing Security Access Manager user.

4.  Stop and restart the appropriate servers to propagate the changes. For specific instructions, see [Starting and stopping servers, deployment managers, and node agents](../../../../../manage/stopstart.md).

5.  Create a Credential Vault segment and slot to be used by Security Access Manager:

    1.  Click the **Administration menu** icon. Then, click **Access > Credential Vault**. Then, click **Add a vault segment**.

    2.  Select the **AccessManager** vault from the **Vaults** list, by default it is named AccessManager.

    3.  Enter a **Vault segment name** and click **OK**.

    4.  Click **Add a vault slot**.

    5.  Select the AccessManager vault from the **Vault** menu.

    6.  Enter a **Name** for the vault slot and click **OK**.

6.  Use the WebSphere Application Server encoding mechanism to mask the passwords in the accessmanagervault.properties file and the Security Access Manager administrative password in the pdpw property.


???+ info "Related information"  
    -   [Creating the PdPerm.properties file](../../../../../manage/security/external_sec_mgmt/security_access_manager/cfg_sec_access_mgr/run_svrssl_config.md)
    -   [Encoding passwords in files](https://www.ibm.com/docs/en/was-nd/8.5.5)

