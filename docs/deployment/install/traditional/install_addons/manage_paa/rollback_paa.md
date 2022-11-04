# Uninstalling a Portal Application Archive (PAA) file update

If there are issues with the Portal Application Archive (PAA) file update, you can uninstall the update and return to the previous version of the file.

The remove-paa-update command uninstalls the updates to your HCL Digital Experience server. It then installs and deploys the original PAA file in the wp_profile_root/paa/backup directory.

**PAA file developer note:** Custom code is used to remove updates and restore the previous version of the PAA file. The Solution Installer does not generate code for this task. However, the previously generated code is called from the custom tasks. Previously generated tasks are not run automatically.

!!!note "Cluster note"
    Complete these steps on the primary node and then on all additional nodes.

1.  If you use the Simple and Protected GSS-API Negotiation Mechanism (SPNEGO) for single sign-on, complete the following steps to disable SPNEGO:

    1.  Log on to WebSphere® Integrated Solutions Console.

    2.  Go to **Security > Global security > Web and SIP security > SPNEGO Web authentication**.

    3.  Clear the **Enable SPNEGO** check box.

    4.  Save your changes.

2.  Open a command prompt.

3.  Change to the wp_profile_root/ConfigEngine directory.

4.  Run the following task to update the PAA file:

    -   AIX® and Linux™: `./ConfigEngine.sh remove-paa-update -DappName=assemblyName -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows™: `ConfigEngine.bat remove-paa-update -DappName=assemblyName -DWasPassword=password -DPortalAdminPwd=password`

5.  Complete the following steps to enable SPNEGO:

    1.  Log on to WebSphere Integrated Solutions Console.

    2.  Go to **Security > Global security > Web and SIP security > SPNEGO Web authentication**.

    3.  Check the **Enable SPNEGO** check box.

    4.  Save your changes.



