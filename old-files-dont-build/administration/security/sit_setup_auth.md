# Configuring eTrust SiteMinder to perform authentication

HCL Digital Experience includes a configuration task called enable-sm-tai. This task interacts with IBM WebSphere Application Server security configuration to enable the eTrust SiteMinder TAI and to create it as one of the interceptors. You can configure eTrust SiteMinder to provide authentication independently from configuring it to provide authorization. Using it to perform authorization only is not supported at this time.

Install Computer Associates eTrust SiteMinder Trust Association Interceptor \(TAI\) distribution on the same machine as HCL Portal. If you are performing this task in a clustered environment, you must install the eTrust SiteMinder TAI distribution on each node in the cluster.

**Important:** If you have completed the TAI installation and configuration instructions included with the Computer Associates eTrust SiteMinder distribution, including registering the TAI with WebSphere® Application Server, execution of this configuration task is not required.

Perform the following steps to enable the eTrust SiteMinder TAI and create a new interceptor:

1.  Copy the smagent.properties file from the eTrust SiteMinder application server agent installation directory to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/properties directory:

    **Clustered environments:** Complete this step on all nodes.

2.  By default, the Application Server Agent installation enables agents other than the one used for authentication. These agents are not tested with HCL Digital Experience and must be disabled. Modify the following files in the eTrust SiteMinder installation directory to set EnableWebAgent=no:

    -   AsaAgent-az.conf
    -   AsaAgent-auth.conf
    **Clustered environments:** Complete this step on all nodes.

3.  Run the following task to enable eTrust SiteMinder TAI:

    -   Windows™: ConfigEngine.bat enable-sm-tai -DWasPassword=password from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\ConfigEngine directory
    -   AIX®SolarisLinux™: ./ConfigEngine.sh enable-sm-tai -DWasPassword=password from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory
4.  Stop and restart the appropriate servers to propagate the changes. For specific instructions, see [Starting and stopping servers, deployment managers, and node agents](../admin-system/stopstart.md).

5.  Go to the [Verifying Trust Association Interceptors for authentication](verify_tai.md) file to verify that the TAI is working properly.


Depending on your configuration, the XML configuration interface might not be able to access HCL Digital Experience through eTrust SiteMinder. To allow the XML configuration interface access, use eTrust SiteMinder to define the configuration URL \(/wps/config\) as unprotected. Refer to the eTrust SiteMinder documentation for specific instructions.

**Parent topic:**[Configuring eTrust SiteMinder](../security/cfg_siteminder.md)

**Related information**  


[Customizing Collaborative Services user credentials for eTrust SiteMinder](../collab/i_domi_t_csenvir_user_credential.md)

