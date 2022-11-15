# Removing Security Access Manager

After you install and use IBM Security Access Manager, you might find that you no longer require its use. You can then remove it from the HCL Digital Experience environment and restore authentication capabilities to IBM WebSphere Application Server and authorization capabilities to HCL Digital Experience.

Complete the following steps to remove Security Access Manager from the HCL Digital Experience environment:

1.  Complete the following steps, from the WebSphere® Integrated Solutions Console, if you configured Security Access Manager for authentication:

    1.  Select **Security > Global security > Web and SIP security > Trust association > Interceptors**.

    2.  Delete **com.ibm.sec.authn.tai.TAMETai** or if you are still using the deprecated Trust Association Interceptors (TAIs) implementation, delete **com.ibm.ws.security.web.TAMTrustAssociationInterceptorPlus**.

    3.  Click **OK** then **Save**.

2.  Complete the following steps, from the WebSphere Integrated Solutions Console (WAS), if you configured Security Access Manager for authorization:

    1.  Login to the WAS console/DMGR.

    2.  Navigate to **Resources > Resource Environment > Resource Environment Providers**. Then, click on **All Scopes**.

    3.  Navigate to **WP ExternalAccessControlService**, then select **Custom Properties**.

    4.  Delete all custom properties in this section, then save changes.

    5.  Navigate to **WP AccessControlService**, then select **Custom Properties**.

    6.  Update the property **accessControlConfig.enableExternalization** from TRUE to FALSE.

    7.  Navigate to **Resources > Resource Environment > Resource Environment Providers** one more time.

    8.  Select **WP AccessControlDataManagementService**, then select **Custom Properties**.

    9.  Delete the **accessControlDataManagement.cacheTimeout** and **accessControlDataManagement.reorderRoleNames** custom properties.

    10. Save all changes and sync the nodes, if cluster

    11. On the Portal server itself, edit the services.properties file that is found in the wp\_profile\_root/PortalServer/config/config directory.

    12. Find the value com.ibm.wps.services.ac.ExternalAccessControlService and change it to com.ibm.wps.ac.impl.ExternalAccessControlDefaultImpl.

    13. Restart the Portal server(s).

3.  Complete the following steps to remove the credential vault adapter and its associated segments if you configured it for Security Access Manager:

    1.  Use the **Credential Vault portlet** to remove any segments that are added since installation.

        !!!note
            Do not remove DefaultAdminSegment.

    2.  Remove the Vault.AccessManager Credential Vault adapter implementation properties; including class, config, manager, and read-only; from the portal Credential Vault Service configuration.

        !!!note
            The systemcred.dn property cannot be removed.

    3.  Remove the accessmanagervault.properties file from the wp_profile_root/PortalServer/config/config directory.

        !!!note
            Complete step 3.c. on all nodes.

4.  If you enabled user provisioning, go to [Disabling user provisioning](../../../../../manage/security/external_sec_mgmt/security_access_manager/usr_prov_dis.md).

5.  Restore the backup copy of the theme so that the login and logout pages restore to the default before Security Access Manager was enabled.

6.  Remove all junction points, access control lists (ACLs), protected objectspace entries (POS entries), custom actions, and custom action groups.

7.  Run the following task to remove the connection to Security Access Manager:

    -   AIX® and Linux™: `./ConfigEngine.sh run-svrssl-unconfig -DWasPassword=password -Dwp.ac.impl.PDAdminPwd=password` from the wp_profile_root/ConfigEngine directory
    -   Windows™: `ConfigEngine.bat run-svrssl-unconfig -DWasPassword=password -Dwp.ac.impl.PDAdminPwd=password` from the wp_profile_root\ConfigEngine directory

    **Clustered environments:**

    -   Complete this step on all nodes.
    -   WasPassword is the Deployment Manager administrative password.
    
    !!!note
        If the connection still shows up after you run this task, go to [Invalid or Stale Server Definitions](https://support.hcltechsw.com/csm) for more information.

8.  If necessary, uninstall any Security Access Manager components.

9.  Stop and restart the appropriate servers to propagate the changes. For specific instructions, see [Starting and stopping servers, deployment managers, and node agents](../../../../../manage/stopstart.md).



