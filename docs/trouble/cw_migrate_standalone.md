# Troubleshooting: Migrate a stand-alone server

If you encounter a failure during the configuration process, determine whether you can run the step again, skip the step, or if you must clean up the step. For some failed steps, learn how to correct the issue and recover from the failure.

Each potential step in the configuration is included. Because the steps vary depending on your selections, the steps are not numbered. Find the step that failed to learn more about correcting and recovering from the failure. If you need to change a value that you entered in the wizard, then you must run the configuration again.

**Tip:** If you must go through the wizard again, download the wizard selections that you made to save time. Then, cancel the configuration. Start the process over and upload your saved selections. Correct or enter values for the parameters that caused the failure.

# Manual Step: Install the latest fix packs

Since this is a manual step, any error that occurs is outside the context of the wizard.

|Actions|Notes®|
|-------|------|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|If you encounter an issue when you are installing the fix, refer to the documentation for the fix.|

# Generate the files for remote migration

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|If this step fails, review the parameters and values that you entered in the Configuration Wizard, specifically the target temporary path and the application server path.If the parameter and values that you entered are correct, and the step fails again, use the wp-collector tool to gather the files that are needed to contact support for help. See [Data collection and symptom analysis](tbl_apdt_over.md) for information about using the wp-collector tool.

|

# Manual Step: Copy the remote migration package to the source environment

Since this is a manual step, any error that occurs is outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|Not applicable|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|None required|

# Create a backup of the remote source portal profile

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|If this step fails, delete the path to the temporary backup profile, and run the step again. For more information about troubleshooting the WASPreUpgrade command, see the WebSphere® Application Server documentation on [Troubleshooting migration](http://www-01.ibm.com/support/knowledgecenter/SSEQTP_8.5.5/com.ibm.websphere.migration.base.doc/ae/tmig_troubleshoot.md).

|

# Create a backup profile of the source portal profile

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|If this step fails, delete the path to the temporary backup profile, and run the step again. For more information about troubleshooting the WASPreUpgrade command, see the WebSphere Application Server documentation on [Troubleshooting migration](http://www-01.ibm.com/support/knowledgecenter/SSEQTP_8.5.5/com.ibm.websphere.migration.base.doc/ae/tmig_troubleshoot.md).

|

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

# Import backup profile

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

# Upgrade the ConfigEngine

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|Do not skip this step, if you are running the configuration again.|
|Clean up step|If this step fails, review the parameters and values that you entered in the Configuration Wizard, specifically the new host name, passwords, port numbers, and the Portal server path.If the parameter and values that you entered are correct, and the step fails again, use the wp-collector tool to gather the files that are needed to contact support for help. See [Data collection and symptom analysis](tbl_apdt_over.md) for information about using the wp-collector tool.

|

# Manual Step: Update the ports on the target environment

Since this is a manual step, any error that occurs is outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|Not applicable|
|Skip the step|Do not skip this step, if you are running the configuration again.|
|Clean up step|None required|

# Manual Step: Update database settings

Since this is a manual step, any error that occurs is outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|Not applicable|
|Skip the step|Do not skip this step, if you are running the configuration again.|
|Clean up step|None required|

# Validate database settings

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|Do not skip this step, if you are running the configuration again.|
|Clean up step|Check your properties files to make sure that you have all of your parameters and values set correctly before you run the step again.|

# Connect to new database copies

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run the step again.|
|Skip the step|Do not skip this step, if you are running the configuration again.|
|Clean up step|None required.|

# Manual Step: Review database schema changes

Since this is a manual step, any error that occurs is outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again.|
|Skip the step|This step is optional. You can skip this step if you do not want to review the database schema changes.|
|Clean up step|None required|

# Upgrade the base portal database component

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|Do not skip this step, if you are running the configuration again.|
|Clean up step|If this step fails, delete the database, create a new copy, and run the step again.|

# Manual Step: Remove check pending statuses from table spaces

Since this is a manual step, any error that occurs is outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, clean up the issue and start back with the **Upgrade the base portal database components** step, and then run this step again.|
|Skip the step|Do not skip this step, if you are running the configuration again.|
|Clean up step|If this step fails, delete the database, create a new copy, and rerun the **Upgrade the portal database component** step before you rerun this step again.|

# Upgrade the remaining portal databases

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, clean up the issue and start back with the **Upgrade the base portal database components**.|
|Skip the step|Do not skip this step, if you are running the configuration again. You must complete the **Upgrade the base portal database components** and **Remove check pending statuses from table spaces** steps before you run this step again.|
|Clean up step|If this step fails, delete the database, create a new copy, and rerun the **Upgrade the portal database component** and **Remove check pending statuses from table spaces** steps before you run this step again.|

# Upgrade the portal profile

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you must contact support.**Note:** Contact support before you start the Portal server.

|
|Skip the step|Do not skip this step, if you are running the configuration again.|
|Clean up step|Contact support.|

When you run this step, the sub task that is named action-deploy-portlets-applyMIGStatic-wp.oob.full runs and completes successfully. However, the following error messages are shown. You can ignore these error messages:

-   EJPXA0161W: The web module ContactList could not be activated. Please see previous messages for reasons and possible corrective actions.
-   EJPPH0048W: The synchronization mode of all nodes in the portal cluster is not consistently set. The portlet application PA\_ContactList will not be started in the Application Server. Manual synchronization is assumed for all nodes. Manually start the application after all nodes were synchronized.
-   EJPXA0067E: The following configuration data is needed to create a content-node resource: content-parentref.

