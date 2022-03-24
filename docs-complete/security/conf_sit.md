# Configuring eTrust SiteMinder for authentication and authorization 

You can configure Computer Associates eTrust SiteMinder to perform both authentication and authorization for HCL Digital Experience. Using eTrust SiteMinder to perform only authorization is not supported at this time.

Install Computer Associates eTrust SiteMinder Trust Association Interceptor \(TAI\) distribution on the same machine as HCL Digital Experience. If you are completing this task in a clustered environment, you must install the eTrust SiteMinder TAI distribution on each node in the cluster.

Complete the following steps to configure eTrust SiteMinder for authentication and authorization:

1.  Copy the smagent.properties file from the eTrust SiteMinder application server agent installation directory to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/properties directory.

    **Clustered environments:** Complete this step on all nodes.

2.  By default, the Application Server Agent installation enables agents other than the one used for authentication. These agents are not tested with HCL Digital Experience and must be disabled. Modify the following files in the eTrust SiteMinder installation directory to set EnableWebAgent=no:

    -   AsaAgent-az.conf
    -   AsaAgent-auth.conf
    **Clustered environments:** Complete this step on all nodes.

3.  Use a text editor to open the wkplc\_comp.properties file in the following directory:

    -   AIX® HP-UX Linux™Solaris: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties
    -   IBM® i: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties
    -   Windows™: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\ConfigEngine\\properties
    -   z/OS®: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties
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

6.  Save your changes to the properties file.

7.  Run the following task to configure eTrust SiteMinder for authentication and authorization:

    -   AIX HP-UXLinux Solaris: ./ConfigEngine.sh enable-sm-all from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory
    -   IBM i: ConfigEngine.sh enable-sm-all from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory
    -   Windows: ConfigEngine.bat enable-sm-all from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\ConfigEngine directory
    -   z/OS:./ConfigEngine.sh enable-sm-all from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory
    **Clustered environments:** Complete this step on all nodes.

8.  Stop and restart the appropriate servers to propagate the changes. For specific instructions, see [Starting and stopping servers, deployment managers, and node agents](../admin-system/stopstart.md).


Depending on your configuration, the XML configuration interface might not be able to access HCL Portal through eTrust SiteMinder. To allow the XML configuration interface access, use eTrust SiteMinder to define the configuration URL \(/wps/config\) as unprotected. Refer to the eTrust SiteMinder documentation for specific instructions.

**Parent topic:**[Configuring eTrust SiteMinder ](../security/cfg_siteminder.md)

