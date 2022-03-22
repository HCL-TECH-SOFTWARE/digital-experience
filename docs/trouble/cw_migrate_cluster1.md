# Troubleshooting: Migrate the deployment manager profile for a cluster environment

If you encounter a failure during the configuration process, determine whether you can run the step again, skip the step, or if you must clean up the step. For some failed steps, learn how to correct the issue and recover from the failure.

Each potential step in the configuration is included. Because the steps vary depending on your selections, the steps are not numbered. Find the step that failed to learn more about correcting and recovering from the failure. If you need to change a value that you entered in the wizard, then you must run the configuration again.

**Tip:** If you must go through the wizard again, download the wizard selections that you made to save time. Then, cancel the configuration. Start the process over and upload your saved selections. Correct or enter values for the parameters that caused the failure.

# Manual Step: Disable automatic synchronization on all nodes in the cluster

Since this is a manual step, any error that occurs is outside the context of the wizard.

|Actions|Notes®|
|-------|------|
|Run the step again|You can run this step again if it was not successful.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|None required|

# Manual Step: Install the latest fix packs

Since this is a manual step, any error that occurs is outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|If you encounter an issue when you are installing the fix, refer to the documentation for the fix.|

# Manual Step: Install the Portal and WebSphere binary files

Since this is a manual step, any error that occurs is outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, do not run this step again.|
|Clean up step|Complete an uninstall of the product, and delete the remaining file structure. Then, start the configuration from the beginning.|

# Manual Step: Copy required portal binary files to the target deployment manager

Since this is a manual step, any error that occurs is outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|Not applicable|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|None required|

# Manual Step: Generate files for remote migration on the deployment manager

Since this is a manual step, any error that occurs is outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.This step is optional. You do not need to complete this step, if the deployment manager is in the same binary as the primary node.

|
|Clean up step|If this step fails, review the parameters and values that you entered in the Configuration Wizard, specifically the target temporary path and the application server path.If the parameter and values that you entered are correct, and the step fails again, use the wp-collector tool to gather the files that are needed to contact support for help. See [Data collection and symptom analysis](tbl_apdt_over.md) for information about using the wp-collector tool.

|

# Manual Step: Copy the remote migration package to the source environment

Since this is a manual step, any error that occurs is outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|Not applicable|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|None required|

# Manual Step: Create a backup of the source deployment manager

Since this is a manual step, any error that occurs is outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|If this step fails, delete the path to the temporary backup profile, and run the step again. For more information about troubleshooting the WASPreUpgrade command, see the WebSphere Application Server documentation on [Troubleshooting migration](http://www-01.ibm.com/support/knowledgecenter/SSEQTP_8.5.5/com.ibm.websphere.migration.base.doc/ae/tmig_troubleshoot.md).

**IBMi only:** If this step fails, remove the oldProfile parameter and run the step again.

|

# Manual Step: Create a default deployment manager profile

Since this is a manual step, any error that occurs is outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|If an unrecoverable error occurs and the create default profile step fails, remove the profile. 1.  Use the manageprofiles command to remove the profile.

The command file is in the app\_server\_root/bin directory. The command file is a script that is named manageprofiles.sh\|bat.

Example:

    ```
 /opt/IBM/WebSphere/AppServer/bin/manageprofiles.sh -delete 
 -profileName profile\_name
    ```

2.  Delete the profile directory.
3.  Then, run the **Create a default deployment manager profile** step again.

|

# Manual Step: Import the backup profile

Since this is a manual step, any error that occurs is outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|Do not skip this step, if you are running the configuration again. If you re-create the default profile from the **Create a default deployment manager profile** step, then you must run this step again to import the new default profile.|
|Clean up step|If an unrecoverable error occurs and the import backup profile step fails, remove the profile. 1.  Use the manageprofiles command to remove the profile.

The command file is in the app\_server\_root/bin directory. The command file is a script that is named manageprofiles.sh\|bat.

Example:

    ```
 /opt/IBM/WebSphere/AppServer/bin/manageprofiles.sh -delete 
 -profileName profile\_name
    ```

2.  Delete the profile directory.
3.  Then, run the **Create a default deployment manager profile** step again before you rerun this step.

|

# Apply the latest Combined Cumulative Fix updates to your system.

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|If this step fails, contact support and report the error message to get assistance on how to fix this issue before you run the step again.|

