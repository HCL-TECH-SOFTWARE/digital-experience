# Performing a manual in-place migration

If you proceed with this method of migration for Portal Version 8.0.0.1 on WebSphere® Application Server Version 8.5.5.2, be aware that you cannot use the WebSphere remote migration tool because the WebSphere version of the source and target environments are the same. This migration is an in-place migration, and the source environment will no longer be available after the migration is complete.

If you are performing an in-place update of a stand-alone server, complete steps 1 - 10. Then, continue with the upgradeConfigEngine step of the **Migrate a Stand-alone Server** option in the Configuration Wizard as it is detailed in steps 11 - 16.

If you are performing an in-place update of a cluster, the deployment manager should already have the WebSphere Application Server Version 8.5.5.2 installed. Therefore, you do not need to complete the **Migrate a Cluster Step 1: Migrate the Deployment Manager Profile** option in the Configuration Wizard. You can also skip **Migrate a Cluster Step 2: Migrate Node Profiles** option, but you must complete the following steps 1 - 9 on all nodes. Then, you must complete **Migrate a Cluster Step 3: Upgrade Node Profiles** on all nodes as detailed in steps 11 - 16.

1.  Back up your databases.

2.  Clear out the temp and wstemp paths in [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root). If you do not complete this step, it can create long path names that prevent the restoreProfile task from working successfully.

3.  Back up the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root) using `manageprofiles -backupProfile` from AppServer/bin.

    For example: `./manageprofiles.sh -backupProfile -profileName wp_profile -backupFile /tmp/wp_profile_bak`.

4.  Uninstall HCL Portal Version 8 using the IBM® Installation Manager. Do not uninstall WebSphere Application Server 8.5.5.

5.  Delete the following files from the WebSphere Application Server AppServer path:

    -   lib/ext/commons-codec-1.3.jar
    -   lib/ext/commons-httpclient-3.0.1.jar
    -   lib/ext/openid4java-full-0.9.5.jar
    -   lib/ext/wp.auth.base.sua\_RedirectServletFilter.jar
    -   lib/ext/wp.auth.base.sua\_loginmodule.jar
    -   lib/ext/wp.auth.tai.jar
    -   lib/wp.user.connections.jar
    -   lib/wp.wire.jar
    -   plugins/com.ibm.patch.was.plugin.jar
    -   plugins/com.ibm.wp.was.plugin.jar
    -   plugins/wp.ext.jar
    -   properties/jndi.properties
6.  Ensure that the wp\_profile and cw\_profile are cleaned up and the paths are deleted.

7.  Install only the Portal 8.5 binary. Do not create a Portal profile.

8.  Test connecting to the Configuration Wizard in a browser. http://your\_server:10200/hcl/wizard

    **Note:** If working with HCL Digital Experience 8.5 or 9 software level prior to CF18, the wizard address will be: http://your\_server:10200/ibm/wizard. After installing CF18, the configuration wizard will automatically be adjusted to http://your\_server:10200/hcl/wizard.

9.  Restore the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root) using `manageprofiles restoreConfig` from AppServer/bin.

    For example, `./manageprofiles.sh -restoreProfile -backupFile /tmp/wp_profile_bak`.

    **Note:** The [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root) is restored to the original path.

10. If you are migrating a cluster, copy the filesForDmgr.zip in the PortalServerRoot/filesForDmgr path on your target primary node server to the existing WebSphere Application Server 8.5.5.2 deployment manager. Then, extract the files in the AppServer path.

    **Note:** This task is essential to update the deployment manager to user the portal 8.5 plug-ins. Complete this step once. Do not repeat this step on all nodes.

11. Complete the remaining steps for using the Configuration Wizard:

12. Access the Configuration Wizard. http://your\_server:10200/hcl/wizard.

    **Note:** If working with HCL Digital Experience 8.5 or 9 software level prior to CF18, the wizard address will be: http://your\_server:10200/ibm/wizard. After installing CF18, the configuration wizard will automatically be adjusted to http://your\_server:10200/hcl/wizard.

13. Click **Migrate to a New Version** \> **Migrate a Stand-alone Server** or **Migrate to a New Version** \> **Migrate a Cluster Step 3: Upgrade Node Profiles**.

14. Select **Same server** when you answer questions about your system.

15. Enter your properties with the correct values.

16. Mark all steps complete before **Upgrade the ConfigEngine**.

17. Start your configuration with the **Upgrade the ConfigEngine** step.



**Related information**  


[Configuration Wizard](../config/cw_overview.md)

