# Troubleshooting: Migrate node profiles for a cluster environment

If you encounter a failure during the migration of the node profiles for a cluster environment, learn how to correct the issue and recover from the failure.

Each potential step in the migrate node profiles option is included. Since the steps vary, depending on your selections, the steps are not numbered. Find the step that failed to learn more about correcting and recovering from the failure.

# Manual Step: Stop the source deployment manager and node agents

Since this is a manual step, any error that occurs is outside the context of the wizard.

|Actions|Notes®|
|-------|------|
|Run the step again|You can run this step again if it was not successful.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|None required|

# Manual Step: Start the target deployment manager

Since this is a manual step, any error that occurs is outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|You can run this step again if it was not successful.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|None required|

# Generate the files for remote migration

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|If this step fails, review the parameters and values that you entered in the Configuration Wizard, specifically the target temporary path and the application server path.

If the parameter and values that you entered are correct, and the step fails again, use the wp-collector tool to gather the files that are needed to contact support for help. See [Data collection and symptom analysis](tbl_apdt_over.md) for information about using the wp-collector tool.

|

# Manual Step: Copy the remote migration package to the source environment

Since this is a manual step, any error that occurs is outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|Not applicable|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|None required|

# Create a backup of the source portal profile

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|If this step fails, delete the path to the temporary backup profile, and run the step again. For more information about troubleshooting the WASPreUpgrade command, see the WebSphere® Application Server documentation on [Troubleshooting migration](http://www-01.ibm.com/support/knowledgecenter/SSEQTP_8.5.5/com.ibm.websphere.migration.base.doc/ae/tmig_troubleshoot.md).

|

# Manual Step: Create a backup of the remote source portal profile

Since this is a manual step, any error that occurs is outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|If this step fails, delete the path to the temporary backup profile, and run the step again. For more information about troubleshooting the WASPreUpgrade command, see the WebSphere Application Server documentation on [Troubleshooting migration](http://www-01.ibm.com/support/knowledgecenter/SSEQTP_8.5.5/com.ibm.websphere.migration.base.doc/ae/tmig_troubleshoot.md).

|

# Manual Step: Update the deployment manager settings

Since this is a manual step, any error that occurs is outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|Not applicable|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|None required|

# Manual Step: If the backup profile is larger than 2 GB, clean up the backup profile

Since this is a manual step, any error that occurs is outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|Not applicable|
|Skip the step|If you are running the configuration again, you can skip this step only if you skipped all the previous steps.|
|Clean up step|None required|

# Create a default profile

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
3.  Then, run the **Create a default profile** step again.

|

# Import the backup profile

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|Do not skip this step, if you are running the configuration again. If you re-create the default profile from the **Create a default profile** step, then you must run this step again to import the new default profile.|
|Clean up step|If an unrecoverable error occurs and the import backup profile step fails, remove the profile. 1.  Use the manageprofiles command to remove the profile.

The command file is in the app\_server\_root/bin directory. The command file is a script that is named manageprofiles.sh\|bat.

Example:

    ```
 /opt/IBM/WebSphere/AppServer/bin/manageprofiles.sh -delete 
 -profileName profile\_name
    ```

2.  Delete the profile directory.
3.  Then, run the **Create a default profile** step again before you rerun this step.

|

# Manual Step: If you cleaned up the backup profile, restore the JCR content

Since this is a manual step, any error that occurs is outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|Not applicable|
|Skip the step|Do not skip this step, if you are running the configuration again. You must restore the JCR content, if you completed the previous manual step to clean up the backup profile that is over 2 GB.|
|Clean up step|None required|

