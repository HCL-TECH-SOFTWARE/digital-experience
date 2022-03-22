# Troubleshooting: Remove a WebSphere Portal profile

View troubleshooting information for creating a HCL Portal profile.

Each potential step in the configuration is included. Because the steps vary depending on your selections, the steps are not numbered. Find the step that failed to learn more about correcting and recovering from the failure. If you need to change a value that you entered in the wizard, then you must run the configuration again.

**Tip:** If you must go through the wizard again, download the wizard selections that you made to save time. Then, cancel the configuration. Start the process over and upload your saved selections. Correct or enter values for the parameters that caused the failure.

# Manual Step: Prepare your system

|Actions|Notes®|
|-------|------|
|Run the step again|Not applicable|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|None required|

# Remove portal node from cluster

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|Review removeNode.log in wp\_profile/logs for any failures that are indicated by the words "exception" or "error."|

# Remove portal profile

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|1.  Use the manageprofiles command to remove the profile.

The command file is in the app\_server\_root/bin directory. The command file is a script that is named manageprofiles.sh\|bat.

Example:

    ```
 /opt/IBM/WebSphere/AppServer/bin/manageprofiles.sh -delete 
 -profileName profile\_name
    ```

2.  Manually delete the profile directory only if the `manageprofiles -delete` command completes successfully.

The manageprofiles command creates a log for every profile that it creates, deletes, or augments. If the `manageprofiles -delete` command does not complete successfully, review the logs that are named profile\_name\_create.log and profile\_name\_augment.log in install\_root/logs/manageprofiles.

|

# Stop the deployment manager

|Actions|Notes|
|-------|-----|
|Run the step again|Run this step again, only if you are running the configuration again and removing the deployment manager profile.|
|Skip the step|Do not skip this step, if you are running the configuration again to remove the deployment manager profile. The deployment manager must be stopped to remove the deployment manager profile.|
|Clean up step|None requiredYou can check the status of the deployment manager by running server-status.sh\|bat.

|

# Remove the deployment manager profile

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|1.  Use the manageprofiles command to remove the profile.

The command file is in the app\_server\_root/bin directory. The command file is a script that is named manageprofiles.sh\|bat.

Example:

    ```
 /opt/IBM/WebSphere/AppServer/bin/manageprofiles.sh -delete 
 -profileName profile\_name
    ```

2.  Manually delete the profile directory only if the `manageprofiles -delete` command completes successfully.

The manageprofiles command creates a log for every profile that it creates, deletes, or augments. If the `manageprofiles -delete` command does not complete successfully, review the log named delete.log in install\_root/logs/dmgr\_01.

|

