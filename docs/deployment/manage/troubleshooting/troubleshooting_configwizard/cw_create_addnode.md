---
Title: Create an additional cluster node
---

# Troubleshooting: Create an additional cluster node

Adding a node to a cluster is part of setting up a clustered environment. If you encounter a failure during the configuration process, determine whether you can run the step again, skip the step, or if you must clean up the step. For some failed steps, learn how to correct the issue and recover from the failure.

Each potential step in the configuration is included. Because the steps vary depending on your selections, the steps are not numbered. Find the step that failed to learn more about correcting and recovering from the failure. If you need to change a value that you entered in the wizard, then you must run the configuration again.

!!!note "Tip"
    If you must go through the wizard again, download the wizard selections that you made to save time. Then, cancel the configuration. Start the process over and upload your saved selections. Correct or enter values for the parameters that caused the failure.

# Manual Step: Install profile templates

Manual step errors occur outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|Not applicable|
|Skip the step|If you successfully completed the step before, then skip this step.|
|Clean up step|None required|

# Manual Step: Install portal binary files on the server where you plan to add a node to your cluster

Manual step errors occur outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|Not applicable|
|Skip the step|If you successfully completed the step before, then skip this step.|
|Clean up step|None required|

# Manual Step: Copy the database drivers from the primary node to the additional node

Manual step errors occur outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|Not applicable|
|Skip the step|If you successfully completed the step before, then skip this step.|
|Clean up step|None required|

# Manual Step: Verify that the portal node and deployment manager system clocks are within 5 minutes of each other

Manual step errors occur outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|Not applicable|
|Skip the step|If you successfully completed the step before, then skip this step.|
|Clean up step|None required|

# Create the profile for the secondary portal node

If the step fails, see the logs for the manageprofiles command to determine why the step failed. The wizard uses the portal profile templates to create the deployment manager profile. An error might result from a problem with the profile templates. The error message in the log provides more information.

The log files are in the app_server_root/logs/manageprofiles directory.

Use the following table for manual instructions on recovering from a failure. If you prefer to use the Configuration Wizard option, **Remove the HCL Portal profile**, to remove the profile in the event of a failure, go to **More options > Remove the HCL Portal profile** and remove the profile. When the profile is removed successfully, you can run the **Create an Additional Cluster Node** configuration again.

|Actions|Notes|
|-------|-----|
|Run the step again|Run the step again, if it did not complete successfully before.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|If an unrecoverable error occurs and the create deployment manager profile step fails, remove the profile. <br> 1.  Use the manageprofiles command to remove the profile. <br> The command file is in the app_server_root/bin directory. The command file is a script that is named `manageprofiles.sh\|bat`. <br> Example: <br>
`/opt/IBM/WebSphere/AppServer/bin/manageprofiles.sh -delete -profileName dmgr01` <br> 2.  Delete the profile directory. <br> 3.  Then, run the **Create an Additional Cluster Node** again. |

# Federate the node

If this step fails see the addNode.log to determine why the step failed. In most cases, you can correct the error condition and run the step again. You do not have to cancel or reset the configuration steps.

The log is in the /wp_profile/logs directory

|Actions|Notes|
|-------|-----|
|Run the step again|If the step did not complete successfully during the previous configuration, run it again.|
|Skip the step|If you successfully completed the step before, then skip this step.|
|Clean up step|Based on where the step failed during the addNode task, you might need to remove the node and run the step again. Run the removeNode command from the wp_profile/bin directory. Example: <br> `wp_profile/bin/removeNode.sh`|

# Configure the dynamic cluster node

If this step fails, click **View Results** to see the applicable section of the ConfigTrace.log.

|Actions|Notes|
|-------|-----|
|Run the step again|You can run this step repeatedly without causing harm.|
|Skip the step|If you successfully completed the step before, then skip this step.|
|Clean up step|None required|

# Add a secondary node to the cluster

|Actions|Notes|
|-------|-----|
|Run the step again|You can run this step repeatedly without causing harm.|
|Skip the step|If you successfully completed the step before, then skip this step.|
|Clean up step|None required|

# Start the portal server

|Actions|Notes|
|-------|-----|
|Run the step again|You can run this step repeatedly without causing harm.|
|Skip the step|Not applicable|
|Clean up step|None required|

**Related information**  
[Accessing the Configuration Wizard](../../portal_admin_tools/cfg_wizard/configuration/cw_run.md)