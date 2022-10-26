# Installing a Portal Application Archive (PAA) file

After you install HCL Digital Experience, you can use the Solution Installer to install applications that are in the Portal Application Archive (PAA) format.

Before you install the application, review the included readme file for extra installation information. The readme file is either in the extracted PAA file in the documentation directory or outside the PAA file in a higher level compression file. Include information such as assembly names and extra parameters that you might need for the install-paa, update-paa-components, or deploy-paa tasks in the readme file.

!!!note "Cluster note"
    Complete these steps on the primary node and then on all additional nodes.

1.  Open a command prompt.

2.  Change to the wp_profile_root/ConfigEngine directory.

3.  Run the following command:

    -   AIX®: `./ConfigEngine.sh install-paa -DPAALocation=paa_file_location -DWasPassword=password -DPortalAdminPwd=password`
    -   Linux™: `./ConfigEngine.sh install-paa -DPAALocation=paa_file_location -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows™: `ConfigEngine.bat install-paa -DPAALocation=paa_file_location -DWasPassword=password -DPortalAdminPwd=password`
  
    **Optional parameter:** You can add the following optional parameter to your install-paa command: -Dwcmdetect=true. This parameter controls the behavior of the installed HCL Web Content Manager libraries. If you include this parameter, a properties file is created in the paa/ComponentName directory. The name of the properties file matches the PAA file name.

4.  After the task successfully completes, verify that the following sub-directory exists:

    -   AIX: wp_profile_root/paa/paa_filename
    -   Linux: wp_profile_root/paa/paa_filename
    -   Windows: wp_profile_root\paa\paa_filename

5.  From the PAA file sub-directory, open the components.properties file. Complete the following steps to check for and resolve conflicts with previously installed components:

    1.  Search for the component parameters. Parameters that are set to true are not already installed. Parameters that are set to false are already installed.

    2.  To update existing components, change their value in the components.properties file to true.

    3.  Save your changes to the components.properties file.

6.  Complete the following steps if you included the -Dwcmdetect=true parameter:

    1.  Open the properties file in the paa/ComponentName directory.

    2.  Set the value of all the Web Content Manager libraries that you want to update to true.

    3.  Set the value of all the Web Content Manager libraries that you want to keep the old version to false.

    4.  Save your changes.

7.  Run the following task if you changed values in the components.properties file:

    This task updates the registration of the existing components with the new assembly.

    -   AIX: `./ConfigEngine.sh update-paa-components -DappName=assemblyName -DWasPassword=password -DPortalAdminPwd=password`
    -   Linux: `./ConfigEngine.sh update-paa-components -DappName=assemblyName -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows: `ConfigEngine.bat update-paa-components -DappName=assemblyName -DWasPassword=password -DPortalAdminPwd=password`
    
8.  If you are using the Simple and Protected GSS-API Negotiation Mechanism \(SPNEGO\) for single sign-on, complete the following steps to disable SPNEGO:

    1.  Log on to WebSphere® Integrated Solutions Console.

    2.  Go to **Security > Global security > Web and SIP security > SPNEGO Web authentication**.

    3.  Clear the **Enable SPNEGO** check box.

    4.  Save your changes.

9.  Run the following task to deploy the PAA content to HCL Portal:

    -   AIX: `./ConfigEngine.sh deploy-paa -DappName=assemblyName -DWasPassword=password -DPortalAdminPwd=password`
    -   Linux: `./ConfigEngine.sh deploy-paa -DappName=assemblyName -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows: `ConfigEngine.bat deploy-paa -DappName=assemblyName -DWasPassword=password -DPortalAdminPwd=password`

    **Clustered environment parameters:** If you are deploying to a clustered environment and your PAA file contains XMLAccess script files, add the following two parameters to the deploy-paa task:

    -   -DmaxTimeToWait
    -   -DmaxAppTimeToWait
    
    These values define the time that the wplc-wait-for-sync-to-complete task waits to synchronize your nodes. The default values are -DmaxTimeToWait=30 and -DmaxAppTimeToWait=5. The values are in minutes. Add these parameters to your deploy-paa task with values that meet your requirements.

    **Virtual portal parameters:** If you are deploying to a virtual portal, you must include the context root and host name parameters for the virtual portal. Add the -DVirtualPortalHostName and -DVirtualPortalContext parameters to the deploy-paa task. Read [Virtual portals](../../../../../build_sites/virtual_portal/index.md) for information.

    !!!note
        By default, only components that are set to true in the components.properties file are deployed. To deploy all components, add the -DforceDeploy=true parameter to the deploy-paa task.

10. Complete the following steps to enable SPNEGO:

    1.  Log on to WebSphere Integrated Solutions Console.

    2.  Go to **Security > Global security > Web and SIP security > SPNEGO Web authentication**.

    3.  Clear the **Enable SPNEGO** check box.

    4.  Save your changes.



