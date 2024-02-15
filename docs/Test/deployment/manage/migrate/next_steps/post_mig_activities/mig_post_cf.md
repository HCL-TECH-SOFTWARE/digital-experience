# For CF07 and earlier: Applying the latest Combined Cumulative Fix updates

This task is a required if you are on CF07 or earlier. After you migrate using the Configuration Wizard, you must run two tasks to ensure that all of the Combined Cumulative Fix updates are applied to your system before you complete other post-migration or enablement tasks. If you are on CF08 or later, the Configuration Wizard automatically runs these commands.

1.  Stop the target environment:

    -   If you migrated a stand-alone server, stop the HCL Portal server.
    -   If you migrated a cluster, stop the HCL Portal server and node agent. Then, ensure that the deployment manager is started.

2.  Run the PRE-APPLY-FIX task from the wp_profile_root/ConfigEngine directory:

    -   **AIX® and Linux™**

        `./ConfigEngine.sh PRE-APPLY-FIX -DWasPassword=password -DPortalAdminPwd=password`

    -   **Windows™**

        `ConfigEngine.bat PRE-APPLY-FIX -DWasPassword=password -DPortalAdminPwd=password`

3.  Run the APPLY-FIX task from the wp_profile_root/ConfigEngine directory:

    !!!important
        If you are migrating to Portal 8.5 CF03 or CF04, you must specify the -DForceRun=true parameter when you run APPLY-FIX.

    -   **AIX® and Linux™**

        `./ConfigEngine.sh APPLY-FIX -DWasPassword=password -DPortalAdminPwd=password`

    -   **Windows™**

        `ConfigEngine.bat APPLY-FIX -DWasPassword=password -DPortalAdminPwd=password`

4.  **Cluster only:** Complete each step on every node in the cluster.



