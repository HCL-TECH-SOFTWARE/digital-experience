# Configuring eTrust SiteMinder to perform authorization

You can configure Computer Associates eTrust SiteMinder to perform authorization independently from configuring it to perform authentication. However, if you use eTrust SiteMinder to perform authorization for HCL Digital Experience, you should also use it to perform authentication. Using eTrust SiteMinder to perform only authorization is not supported at this time.

Complete the following steps to configure eTrust SiteMinder for authorization:

1.  In eTrust SiteMinder version 5.5 and higher, the configuration for eTrust SiteMinder Web Agents, including shared secrets, is centrally administered and can be dynamic. You may create a new custom agent to ensure a static shared secret. Follow these steps to create a custom agent in eTrust SiteMinder:

    1.  Open the eTrust SiteMinder Administration console.

    2.  Select **Agent Types** from the **View** \> **Agent Types** menu.

    3.  Right-click **Agent Types**, and select **Create Agent Type** from the pop-up menu.

    4.  Enter a **Name** and an **Action** for the new agent type. Other fields are optional.

    5.  Click **OK**.

    6.  Select **Agents** from the **View** \> **Agents** menu.

    7.  Right-click **Agent**, and select **Create Agent** to create an agent object of the new agent type.

2.  Ensure that users are no longer created through HCL Digital Experience.

    If you use eTrust SiteMinder, you probably have a user provisioning process for creating and updating users and groups and administering group membership. You will probably want to continue using that user provisioning process instead of managing your directory through HCL Digital Experience. HCL Digital Experience creates entries in the directory in two ways:

    -   Administrators can create entries with the Manage Users and Groups portlet
    -   Users can create entries with the self-registration screen
3.  Use a text editor to open the wkplc\_comp.properties file in the following directory:

    -   AIX® HP-UX Linux™Solaris: [wp\_profile\_root](/digital-experience/deployment/manage/wpsdirstr#wp_profile_root)/ConfigEngine/properties
    -   IBM® i: [wp\_profile\_root](/digital-experience/deployment/manage/wpsdirstr#wp_profile_root)/ConfigEngine/properties
    -   Windows™: [wp\_profile\_root](/digital-experience/deployment/manage/wpsdirstr#wp_profile_root)\\ConfigEngine\\properties
    -   z/OS®: [wp\_profile\_root](/digital-experience/deployment/manage/wpsdirstr#wp_profile_root)/ConfigEngine/properties
4.  Update the Namespace management parameters in the wkplc\_comp.properties file

    1.  For wp.ac.impl.EACserverName, type the Namespace context information to further distinguish externalized portal role names from other role names in the namespace.

        **Note:** If set, wp.ac.impl.EACcellName and wp.ac.impl.EACappname must also be set. All three parameters must be set or none of them.

    2.  For wp.ac.impl.EACcellName, type the Namespace context information to further distinguish externalized portal role names from other role names in the namespace.

        **Note:** If set, wp.ac.impl.EACserverName and wp.ac.impl.EACappname must also be set.

    3.  For wp.ac.impl.EACappname, type the Namespace context information to further distinguish externalized portal role names from other role names in the namespace.

        **Note:** If set, wp.ac.impl.EACcellName and wp.ac.impl.EACserverName must also be set.

    4.  For wp.ac.impl.reorderRoles, type false to keep the role order or true to reorder the roles by resource type first.

5.  Enter the following parameters in the wkplc\_comp.properties file; go to the SiteMinder heading:

    **Clustered environments:** Complete this step on all nodes.

    **Cluster note:** Complete this step on all nodes in the cluster. The following parameters must match on all nodes in the clustered environment. The one exception is the wp.ac.impl.PDServerName parameter.

    1.  For wp.ac.imp.SMDomain, type the eTrust SiteMinder Domain containing all externalized resources.

    2.  For wp.ac.impl.SMScheme, type the eTrust SiteMinder Authentication scheme object name to use when you create realms.

    3.  For wp.ac.impl.SMAgent, type the agent name that is created on eTrust SiteMinder for a specific external security manager instance.

    4.  For wp.ac.impl.SMAgentPwd, type the password for wp.ac.impl.SMAgent.

    5.  For wp.ac.impl.SMadminId, type the administrative user ID that eTrust SiteMinder uses to access the eTrust SiteMinder policy server.

    6.  For wp.ac.impl.SMAdminPwd, type the password for wp.ac.impl.SMadminId.

    7.  For wp.ac.impl.SMUserDir, type the eTrust SiteMinder User Directory object that references the LDAP user registry.

    8.  For wp.ac.impl.SMFailover, type true if more than one server is listed in wp.ac.impl.SMServers or type false if no additional servers are available for failover.

    9.  For wp.ac.impl.SMServers, type a comma-delimited list of servers for the eTrust SiteMinder agent.

6.  If any of the policy servers listed in the wp.ac.impl.SMServers parameter are configured to use ports other than the defaults, you can customize the following values for each server listed:

    -   ipaddress.accountingPort=44441
    -   ipaddress.authenticationPort=44442
    -   ipaddress.authorizationPort=44443
    -   ipaddress.connectionMax=30
    -   ipaddress.connectionMin=10
    -   ipaddress.connectionStep=5
    -   ipaddress.timeout=60
    Where ipaddress is the specific server IP listed in the wp.ac.impl.SMServers parameter.

    **Clustered environments:** Complete this step on all nodes.

7.  Save your changes to the properties file.

8.  Run the following task to configure eTrust SiteMinder for authorization:

    -   Windows: ConfigEngine.bat enable-sm-authorization -DWasPassword=password -Dwp.ac.impl.SmAgentPw=password -Dwp.ac.impl.SmAdminPw=password from the [wp\_profile\_root](/digital-experience/deployment/manage/wpsdirstr#wp_profile_root)\\ConfigEngine directory
    -   AIXSolarisLinux: ./ConfigEngine.sh enable-sm-authorization -DWasPassword=password -Dwp.ac.impl.SmAgentPw=password -Dwp.ac.impl.SmAdminPw=password from the [wp\_profile\_root](/digital-experience/deployment/manage/wpsdirstr#wp_profile_root)/ConfigEngine directory
    **Clustered environments:** Complete this step on all nodes.

9.  Stop and restart the appropriate servers to propagate the changes. For specific instructions, see [Starting and stopping servers, deployment managers, and node agents](/digital-experience/deployment/manage/stopstart).

10. If users other than the administrator are allowed to externalize resources, add those users to the eTrust SiteMinder realm representing the Administrator of EXTERNAL\_ACCESS\_CONTROL.

11. Complete the following steps from the Resource Permissions portlet:

    1.  Select a resource type.

    2.  Click the **Assign Access** icon for the specific resource.

    3.  Click the **Edit Role** icon for a role that you want to externalize.

    4.  Click **Add** to explicitly assign at least one user or group to your chosen role for the resource.

    5.  Select the specific users or user groups by clicking on **Search for Users or User Groups** or clicking on the pull down for the **Search by** option where the default is set to All available. Click **OK**.

    6.  An informational message box should display the message that members were successfully added to the role.

    7.  Explicitly assign additional roles. If you do not assign at least one user or group to each role type for the resource, you must use the external security manager interface to create this role type later. For example, if you do not assign any users or groups to the Editor role type for the resource, then you must use the external security manager interface to create the Editor role type later.

    8.  Click the **Externalize** icon for the resource. These steps move every role that is defined for each resource you assigned to the eTrust SiteMinder Policy Domain. One policy is defined for each externalized role.

12. Add users and groups to the eTrust SiteMinder policies corresponding to the appropriate roles.



