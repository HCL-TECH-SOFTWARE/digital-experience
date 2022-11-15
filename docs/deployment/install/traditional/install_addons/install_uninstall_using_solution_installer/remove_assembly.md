# Removing a PAA assembly

You must remove the installed content and resources of a Portal Application Archive (PAA) assembly from HCL Digital Experience. Then, you can remove the associated PAA assembly from the ConfigEngine.

1.  Open a command prompt.

2.  Change to the wp_profile_root/ConfigEngine directory.

3.  If you are using the Simple and Protected GSS-API Negotiation Mechanism (SPNEGO) for single sign-on, complete the following steps to disable SPNEGO:

    1.  Log on to WebSphere® Integrated Solutions Console.

    2.  Go to **Security > Global security > Web and SIP security > SPNEGO Web authentication**.

    3.  Clear the **Enable SPNEGO** check box.

    4.  Save your changes.

4.  Run the following command to remove the assembly:

    This command checks for any dependencies from other assemblies that are registered to the current offering.

    -   AIX®: `./ConfigEngine.sh remove-paa –DappName=assemblyName -DforceRemove=true -DWasPassword=password -DPortalAdminPwd=password`

    -   Linux™: `./ConfigEngine.sh remove-paa –DappName=assemblyName -DforceRemove=true -DWasPassword=password -DPortalAdminPwd=password`

    -   Windows™: `ConfigEngine.bat remove-paa –DappName=assemblyName -DforceRemove=true -DWasPassword=password -DPortalAdminPwd=password`

    !!!note "Optional parameter"
        The `-DforceRemove=true` parameter is optional. If the parameter is not set, only components in the components.properties file with a value of true are removed.

5.  Run the following command to uninstall the assembly:

    The uninstall-paa command checks for any dependencies from other assemblies. Only components that are not registered as dependencies are removed. Add the -DforceUninstall=true parameter to the uninstall-paa task to ignore the dependencies and uninstall the assembly.

    -   AIX: `./ConfigEngine.sh uninstall-paa –DappName=assemblyName -DWasPassword=password -DPortalAdminPwd=password`

    -   Linux: `./ConfigEngine.sh uninstall-paa –DappName=assemblyName -DWasPassword=password -DPortalAdminPwd=password`

    -   Windows: `ConfigEngine.bat uninstall-paa –DappName=assemblyName -DWasPassword=password -DPortalAdminPwd=password`
    
    !!!note "Optional parameter"
        The -DforceUninstall=true parameter is optional. If the parameter is not set, only components in the components.properties file with a value of true are uninstalled.

6.  Complete the following steps to enable SPNEGO:

    1.  Log on to WebSphere Integrated Solutions Console.

    2.  Go to **Security > Global security > Web and SIP security > SPNEGO Web authentication**.

    3.  Clear the **Enable SPNEGO** check box.

    4.  Save your changes.



