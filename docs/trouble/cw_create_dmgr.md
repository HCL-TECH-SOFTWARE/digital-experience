# Troubleshooting: Create a deployment manager

Create a deployment manager for clustered environments. If you encounter a failure during the configuration process, determine whether you can run the step again, skip the step, or if you must clean up the step. For some failed steps, learn how to correct the issue and recover from the failure.

Each potential step in the configuration is included. Because the steps vary depending on your selections, the steps are not numbered. Find the step that failed to learn more about correcting and recovering from the failure. If you need to change a value that you entered in the wizard, then you must run the configuration again.

**Tip:** If you must go through the wizard again, download the wizard selections that you made to save time. Then, cancel the configuration. Start the process over and upload your saved selections. Correct or enter values for the parameters that caused the failure.

# Manual Step: Install the deployment manager software

This is a manual step; any errors that occur are outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|Not applicable|
|Skip the step|If you successfully completed the step before, then skip this step.|
|Clean up step|None required|

# Create the deployment manager profile

If the step fails, see the logs for the manageprofiles command to determine why the step failed. The wizard uses the portal profile templates to create the deployment manager profile. An error might result from a problem with the profile templates. The error message in the log provides more information.

The log files are in the app\_server\_root/logs/manageprofiles directory.

|Actions|Notes|
|-------|-----|
|Run the step again|Run the step again, if it did not complete successfully before.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|If an unrecoverable error occurs and the create deployment manager profile step fails, remove the profile. 1.  Use the manageprofiles command to remove the profile.

The command file is in the app\_server\_root/bin directory. The command file is a script that is named manageprofiles.sh\|bat.

Example:

    ```
 /opt/IBM/WebSphere/AppServer/bin/manageprofiles.sh -delete 
 -profileName dmgr01
    ```

2.  Delete the profile directory.
3.  Then, run the **Create a Deployment Manager Profile** step again.

|

# Start the deployment manager server

If the step fails, check the systemout.log for the deployment manager. The log file is in the dmgr\_profile/log/dmgr01 directory.

|Actions|Notes|
|-------|-----|
|Run the step again|Run this step again if the deployment manager is not running.|
|Skip the step|Do not skip this step if the deployment manager is not running. You cannot successfully run the step to augment the profile unless the deployment manager is running.|
|Clean up step|None required|

# Augment the deployment manager profile with the portal profile template

If the step fails, see the logs for the manageprofiles command to determine why the step failed. The wizard uses the portal profile templates to create the deployment manager profile. An error might result from a problem with the profile templates. The error message in the log provides more information.

The log files are in the app\_server\_root/logs/manageprofiles directory.

|Actions|Notes|
|-------|-----|
|Run the step again|Run the step again, if it did not complete successfully before.|
|Skip the step|If you successfully completed the step before, then skip this step.|
|Clean up step|If an unrecoverable error occurs and the augment deployment manager profile step fails, remove the profile. 1.  Use the manageprofiles command to remove the profile.

The command file is in the app\_server\_root/bin directory. The command file is a script that is named manageprofiles.sh\|bat.

Example:

    ```
 /opt/IBM/WebSphere/AppServer/bin/manageprofiles.sh -delete 
 -profileName dmgr01
    ```

2.  Delete the profile directory.
3.  Then, run the **Create a Deployment Manger Profile** step again.

|

# Stop the deployment manager

If the step fails, check the systemout.log for the deployment manager. The log file is in the dmgr\_profile/log/dmgr01 directory.

|Actions|Notes|
|-------|-----|
|Run the step again|You can run this step again.|
|Skip the step|Do not skip this step.|
|Clean up step|None required|

# Start the deployment manager after the profile augmentation is complete

If the step fails, check the systemout.log for the deployment manager. The log file is in the dmgr\_profile/log/dmgr01 directory.

|Actions|Notes|
|-------|-----|
|Run the step again|You can run this step again.|
|Skip the step|Do not skip this step.|
|Clean up step|None required|

