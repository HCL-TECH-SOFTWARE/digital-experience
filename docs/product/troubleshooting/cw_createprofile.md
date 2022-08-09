# Troubleshooting: Create an HCL Digital Experience profile

View troubleshooting information for creating an HCL Digital Experience profile.

Each potential step in the configuration is included. Because the steps vary depending on your selections, the steps are not numbered. Find the step that failed to learn more about correcting and recovering from the failure. If you need to change a value that you entered in the wizard, then you must run the configuration again.

**Tip:** If you must go through the wizard again, download the wizard selections that you made to save time. Then, cancel the configuration. Start the process over and upload your saved selections. Correct or enter values for the parameters that caused the failure.

If you are on HCL Portal Version 8.5 without a Combined Cumulative Fix applied, then you can use this option in the Configuration Wizard to create an additional profile.

**Important:** You cannot complete this configuration option, if you have CF01 or a later Combined Cumulative Fix applied.

## Create the target profile for HCL Digital Experience in the WebSphere Application Server

**About this task:**

If the step fails, see the logs for the manageprofiles command to determine why the step failed. The wizard uses the portal profile templates to create the deployment manager profile. An error might result from a problem with the profile templates. The error message in the log provides more information.

The log files are in the app\_server\_root/logs/manageprofiles directory.

**Important:** WebSphere® Application Server Version 8.5.5.5 requires that fix PI37248 is applied when creating the managed portal profile. This step fails if PI37248 is not installed.

|Actions|Notes®|
|-------|------|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|If an unrecoverable error occurs and this step fails, remove the profile. Use the manageprofiles command to remove the profile. The command file is in the app\_server\_root/bin directory. The command file is a script that is named manageprofiles.sh\|bat.

Example:

```
 /opt/IBM/WebSphere/AppServer/bin/manageprofiles.sh -delete 
 -profileName dmgr01
```

Delete the profile directory only if the manageprofiles command completes successfully.

Then, run **Create the target profile for HCL Digital Experience** again.

|

## Install the ConfigEngine into the target HCL Digital Experience profile

**About this task:**

If you completed a binary installation, this is your first step.

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|If this step fails, look in configtrace.log for any failures.|

## Register the HCL Digital Experience components with the ConfigEngine

**About this task:**

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again provided you keep the same profile name.|
|Clean up step|If this step fails, look in configtrace.log for any failures.|

## Consolidate the properties files for HCL Digital Experience components used in this configuration into a single properties file

**About this task:**

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|If this step fails, look in configtrace.log for any failures.|

## Prepare the profile for basic configuration

**About this task:**

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|If this step fails, look in configtrace.log for any failures.|

## Validate the database connection and environment

**About this task:**

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|Contact support.|

## Deploy applications into the portal profile

**About this task:**

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|If this step fails, look in configtrace.log for any failures.|

## Configure the JCR, theme, and core runtime components of your portal server

**About this task:**

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|If this step fails, look in configtrace.log for any failures.|

## Deploy the administration portlets and pages to the portal

**About this task:**

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|If this step fails, look in configtrace.log for any failures.|

## Deploy the out-of-box pages and portlets to the portal

**About this task:**

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|If this step fails, look in configtrace.log for any failures.|

## Remove the application server \(server1\) from the profile

**About this task:**

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If you already removed server1, you do not need to run this step again.|
|Clean up step|If this step fails, look in configtrace.log for any failures.|

## Stop the portal server

**About this task:**

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|Do not skip this step, if you are running the configuration again.|
|Clean up step|Check for failures in the systemout and systemerror logs for starting or stopping the portal server.|

## Collect the deployment manager augmentation files and profile templates that are required to build a cell

**About this task:**

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|If this step fails, look in configtrace.log for any failures.|

## Restart the HCL Portal server

**About this task:**

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|Do not skip this step, if you are running the configuration again.|
|Clean up step|Check for failures in the systemout and systemerror logs for starting or stopping the portal server.|

**Parent topic:**[Troubleshooting the Configuration Wizard](../trouble/cw_troubleshooting.md)

**Related information**  


[Create an HCL Portal profile](../config/cw_create_profile.md)

[Accessing the Configuration Wizard](../config/cw_run.md)

