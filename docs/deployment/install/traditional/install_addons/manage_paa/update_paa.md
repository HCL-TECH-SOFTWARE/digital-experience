# Updating an existing Portal Application Archive (PAA) file

You can update an existing Portal Application Archive (PAA) file when a new version is available. The process is not as simple as overwriting the file with the new content. There might be large differences between the content in both versions of the file.

The install-paa-update command creates a backup of your current PAA file. It is stored in the wp_profile_root/paa/backup directory. The command then completes the following actions:

-   Uninstalls the PAA file from HCL Digital Experience
-   Deletes the content from the expanded PAA file
-   Installs the new version of the PAA file

After you run the install-paa-update command, you must deploy the changes to your system.

!!!note "PAA file developer note"
    Make all updates in the custom code. No code generation is available for an upgrade through the regular install-paa process. Read the guide about creating updated PAA files for information.

!!!note "Cluster"
    Complete these steps on the primary node and then on all additional nodes.

1.  Open a command line.

2.  Change to the wp_profile_root/ConfigEngine directory.

3.  Run the following task to update the PAA file:

    -   AIX®, Linux™: `./ConfigEngine.sh install-paa-update -DPAALocation=paaLocation/yourPaa.paa -DappName=assemblyName -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows™: `ConfigEngine.bat install-paa-update -DPAALocation=paaLocation/yourPaa.paa -DappName=assemblyName -DWasPassword=password -DPortalAdminPwd=password`

    !!!note "Optional parameter"
        You can add the following parameter to your install-paa-update command: -Dwcmdetect=true. This parameter controls the behavior of the installed HCL Web Content Manager libraries. If you include this parameter, a properties file is created in the paa/ComponentName directory. The name of the properties file matches the PAA file name.

4.  After the task successfully completes, verify that the following sub-directory exists:

    -   AIX, Linux: wp_profile_root/paa/paa\_filename
    -   Windows: wp_profile_root\\paa\\paa\_filename

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

    -   AIX, Linux: `./ConfigEngine.sh update-paa-components -DappName=assemblyName -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows: `ConfigEngine.bat update-paa-components -DappName=assemblyName -DWasPassword=password -DPortalAdminPwd=password`

8.  If you use the Simple and Protected GSS-API Negotiation Mechanism (SPNEGO) for single sign-on, complete the following steps to disable SPNEGO:

    1.  Log on to WebSphere® Integrated Solutions Console.

    2.  Go to **Security > Global security > Web and SIP security > SPNEGO Web authentication**.

    3.  Clear the **Enable SPNEGO** check box.

    4.  Save your changes.

9.  Run the following task to deploy the updated PAA content to HCL Portal:

    -   AIX, Linux: `./ConfigEngine.sh deploy-paa -DappName=assemblyName -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows: `ConfigEngine.bat deploy-paa -DappName=assemblyName -DWasPassword=password -DPortalAdminPwd=password`

    !!!note "Clustered environment parameters"
        If you are deploying to a clustered environment and your PAA file contains XMLAccess script files, add the following two parameters to the deploy-paa task:

            -   -`DmaxTimeToWait`
            -   -`DmaxAppTimeToWait`

    These values define the time that the wplc-wait-for-sync-to-complete task waits to synchronize your nodes. The default values are -DmaxTimeToWait=30 and -DmaxAppTimeToWait=5. The values are in minutes. Add these parameters to your deploy-paa task with values that meet your requirements.

    !!!note "Virtual portal parameters"
        If you are deploying to a virtual portal, you must include the context root and host name parameters for the virtual portal. Add the -DVirtualPortalHostName and -DVirtualPortalContext parameters to the deploy-paa task. Read [Virtual portals](../../../../../build_sites/virtual_portal/index.md) for information.

    !!!note
        By default, only components that are set to true in the components.properties file are deployed. To deploy all components, add the -DforceDeploy=true parameter to the deploy-paa task.

10. Complete the following steps to enable SPNEGO:

    1.  Log on to WebSphere Integrated Solutions Console.

    2.  Go to **Security > Global security > Web and SIP security > SPNEGO Web authentication**.

    3.  Check the **Enable SPNEGO** check box.

    4.  Save your changes.



