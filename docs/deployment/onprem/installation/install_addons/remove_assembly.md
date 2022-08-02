# Removing a PAA assembly

You must remove the installed content and resources of a Portal Application Archive \(PAA\) assembly from HCL Digital Experience. Then, you can remove the associated PAA assembly from the ConfigEngine.

1.  Open a command prompt.

2.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

3.  If you are using the Simple and Protected GSS-API Negotiation Mechanism \(SPNEGO\) for single sign-on, complete the following steps to disable SPNEGO:

    1.  Log on to WebSphere® Integrated Solutions Console.

    2.  Go to **Security** \> **Global security** \> **Web and SIP security** \> **SPNEGO Web authentication**.

    3.  Clear the **Enable SPNEGO** check box.

    4.  Save your changes.

4.  Run the following command to remove the assembly:

    This command checks for any dependencies from other assemblies that are registered to the current offering.

    -   AIX®: ./ConfigEngine.sh remove-paa –DappName=assemblyName -DforceRemove=true -DWasPassword=password -DPortalAdminPwd=password
    -   HP-UX: ./ConfigEngine.sh remove-paa –DappName=assemblyName -DforceRemove=true -DWasPassword=password -DPortalAdminPwd=password
    -   IBM® i: ConfigEngine.sh remove-paa –DappName=assemblyName -DforceRemove=true -DWasPassword=password -DPortalAdminPwd=password
    -   Linux™: ./ConfigEngine.sh remove-paa –DappName=assemblyName -DforceRemove=true -DWasPassword=password -DPortalAdminPwd=password
    -   Solaris: ./ConfigEngine.sh remove-paa –DappName=assemblyName -DforceRemove=true -DWasPassword=password -DPortalAdminPwd=password
    -   Windows™: ConfigEngine.bat remove-paa –DappName=assemblyName -DforceRemove=true -DWasPassword=password -DPortalAdminPwd=password
    -   z/OS®: Complete the following steps:
        1.  In the Portal configuration panel, select **Application configuration tasks**.
        2.  Select **Configure content with Solution Installer**.
        3.  Select **Uninstall and remove a solution**.
        4.  Select **Define variables**.

            **Reminder:** Press F1 to display the help panel if you need assistance to define the variables.

        5.  Generate the customization jobs.
        6.  Follow the Customization dialog instructions for submitting the customization jobs. If the job ends abruptly or is canceled without a failure message, remove all log files from the ConfigEngine/log directory before you rerun the job.
    **Optional parameter:** The -DforceRemove=true parameter is optional. If the parameter is not set, only components in the components.properties file with a value of true are removed.

5.  Run the following command to uninstall the assembly:

    The uninstall-paa command checks for any dependencies from other assemblies. Only components that are not registered as dependencies are removed. Add the -DforceUninstall=true parameter to the uninstall-paa task to ignore the dependencies and uninstall the assembly.

    -   AIX: ./ConfigEngine.sh uninstall-paa –DappName=assemblyName -DWasPassword=password -DPortalAdminPwd=password
    -   HP-UX: ./ConfigEngine.sh uninstall-paa –DappName=assemblyName -DWasPassword=password -DPortalAdminPwd=password
    -   IBM i: ConfigEngine.sh uninstall-paa –DappName=assemblyName -DWasPassword=password -DPortalAdminPwd=password
    -   Linux: ./ConfigEngine.sh uninstall-paa –DappName=assemblyName -DWasPassword=password -DPortalAdminPwd=password
    -   Solaris: ./ConfigEngine.sh uninstall-paa –DappName=assemblyName -DforceUninstall=true -DWasPassword=password -DPortalAdminPwd=password
    -   Windows: ConfigEngine.bat uninstall-paa –DappName=assemblyName -DWasPassword=password -DPortalAdminPwd=password
    -   z/OS: Complete the following steps:
        1.  In the Portal configuration panel, select **Application configuration tasks**.
        2.  Select **Configure content with Solution Installer**.
        3.  Select **Uninstall and remove a solution**.
        4.  Select **Define variables**.

            **Reminder:** Press F1 to display the help panel if you need assistance to define the variables.

        5.  Generate the customization jobs.
        6.  Follow the Customization dialog instructions for submitting the customization jobs. If the job ends abruptly or is canceled without a failure message, remove all log files from the ConfigEngine/log directory before you rerun the job.
    **Optional parameter:** The -DforceUninstall=true parameter is optional. If the parameter is not set, only components in the components.properties file with a value of true are uninstalled.

6.  Complete the following steps to enable SPNEGO:

    1.  Log on to WebSphere Integrated Solutions Console.

    2.  Go to **Security** \> **Global security** \> **Web and SIP security** \> **SPNEGO Web authentication**.

    3.  Clear the **Enable SPNEGO** check box.

    4.  Save your changes.


**Parent topic:**[Install and uninstall add-ons using the Solution Installer](../install/inst_si_addons.md)

