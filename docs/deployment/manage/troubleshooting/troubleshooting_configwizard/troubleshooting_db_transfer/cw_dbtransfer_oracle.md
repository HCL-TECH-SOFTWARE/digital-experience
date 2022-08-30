# Oracle: Troubleshooting Database Transfer

If you encounter a failure during the configuration process, determine whether you can run the step again, skip the step, or if you must clean up the step. For some failed steps, learn how to correct the issue and recover from the failure.

Each potential step in the configuration is included. Because the steps vary depending on your selections, the steps are not numbered. Find the step that failed to learn more about correcting and recovering from the failure. If you need to change a value that you entered in the wizard, then you must run the configuration again.

**Tip:** If you must go through the wizard again, download the wizard selections that you made to save time. Then, cancel the configuration. Start the process over and upload your saved selections. Correct or enter values for the parameters that caused the failure.

## Back up the properties files that the wizard uses during the configuration

**About this task:** During this step, the wizard attempts to back up the wkplc.properties, wkplc\_dbdomain.properties, and wkplc\_dbtype.properties files.

|Actions|Notes|
|-------|-----|
|Run the step again|You can run the step again without causing any harm. Alternatively, you can manually back up the properties files instead of running the step again.

|
|Skip the step|If you already backed up your properties files before you started this configuration, you can skip this step.If this step is successful, you can skip it if you encounter a failure in a later step and need to run the configuration again.

|
|Clean up step|None required|

## Manual Step: Create the database users and groups

**About this task:**

During this step, you create the database configuration users and groups on the database server.

If you need a runtime user for day-to-day operations, you must create the runtime database users and groups on the database server.

Use the database user IDs and group names that are entered in the wizard when you create the database users and groups.

|Actions|Notes|
|-------|-----|
|Run the step again|You cannot rerun a manual step, but you can perform the instructions for the step again without harm.If you realize later in the configuration that the database users and groups were not created correctly, you can repeat these instructions.

For example, you might encounter a failure in the setup database step if the database users and groups are created incorrectly. You can repeat these instructions to correct the issue and then perform the setup database step again.

|
|Skip the step|If you successfully created the database users and groups before you started this configuration, you can skip this step.If this step is successful, you can skip it if you encounter a failure in a later step and need to run the configuration again.|
|Clean up step|None required|

## Create your databases

|Actions|Notes|
|-------|-----|
|Run the step again|The type of failure that you encounter determines whether you can run the step again.Use the ERRORCODE and SQLSTATE associated with the error message in the ConfigTrace.log to determine the reason for the failure.

You can run the step again if the reason for the failure does not affect any values that you entered in the wizard. For example, if you forgot to copy the JDBC JAR files from your database to the portal server, you can copy the files to the portal server. Then, you can run the step again.

If you need to update wizard values to correct the issue, do not run the step again. You must create new scripts in the wizard. Upload your saved selections, update your values, and create scripts. Examples of issues that result in you updating your values include entering the wrong port number or entering an incorrect host name into the wizard.

|
|Skip the step|If this step is successful, you can skip it if you encounter a failure in a later step and need to run the configuration again.|
|Clean up step|None required. If the step fails because you entered incorrect values in the wizard, remove the database manually, enter correct values to create your scripts, then run the configuration again.

|

## Manual Step: Download the script and run it on the database server to create your database

During this step, you download a script to create your database.

|Actions|Notes|
|-------|-----|
|Run the step again|You cannot rerun a manual step, but you can perform the instructions for the step again without harm. In this step, you download a script to run. The type of failure you encounter determines whether you can run the script again.Use the ERRORCODE and SQLSTATE associated with the error message in the ConfigTrace.log to determine the reason for the failure.

You can run the step again if the reason for the failure does not affect any values that you entered in the wizard. For example, if you forgot to copy the JDBC JAR files from your database to the portal server, you can copy the files to the portal server. Then, you can run the step again.

If you need to update wizard values to correct the issue, do not run the step again. You must create new scripts in the wizard. Upload your saved selections, update your values, and create scripts. Examples of issues that result in you updating your values include entering the wrong port number or entering an incorrect host name into the wizard.

|
|Skip the step|If this step is successful, you can skip it if you encounter a failure in a later step and need to run the configuration again.|
|Clean up step|Not applicable|

## Set up your database

Use the ERRORCODE and SQLSTATE associated with the error message in the ConfigTrace.log to determine the source of the problem.

|Actions|Notes|
|-------|-----|
|Run the step again|The type of failure that you encounter determines whether you can run the step again. You can run the step again if the issue for the failure does not affect any values that you entered in the wizard.If you need to update values, you must create new scripts in the wizard. Upload your saved selections, change the affected values, and create new scripts to run. For example, if you entered the wrong path to your database library, you must upload your saved selections, correct the path, and then configure your system with new scripts.

|
|Skip the step|If this step is successful, you can skip it if you encounter a failure in a later step and need to run the configuration again.|
|Clean up step|None required|

## Manual Step: Download the script and run it on the database server to set up your database

During this step, you set permissions on your database.

|Actions|Notes|
|-------|-----|
|Run the step again|You cannot rerun a manual step, but you can perform the instructions for the step again without harm. In this step, you download a script to run. The type of failure you encounter determines whether you can run the script again.Use the ERRORCODE and SQLSTATE associated with the error message in the ConfigTrace.log to determine the reason for the failure.

You can run the downloaded script again if the issue for the failure does not affect any values that you entered in the wizard. For example, if you created database users and groups incorrectly on your database server, you can correct the issue and run the step again.

If you need to update values, you must create new scripts in the wizard. Upload your saved selections, change the affected values, and create new scripts to run.

|
|Skip the step|If this step is successful, you can skip it if you encounter a failure in a later step and need to run the configuration again.|
|Clean up step|None required|

## Manual Step: Set up JCR collation for correct language locale order

|Actions|Notes|
|-------|-----|
|Run the step again|You cannot rerun a manual step, but you can perform the instructions for the step again without harm.|
|Skip the step|If this step is successful, you can skip it if you encounter a failure in a later step and need to run the configuration again.|
|Clean up step|You must remove the database and create the database again.|

## Manual Step: Restart the DB2® server

During this step, you set global database default values that are required for the database that you created. These global values do not take effect until you restart your database server.

|Actions|Notes|
|-------|-----|
|Run the step again|You cannot rerun a manual step, but you can perform the instructions for the step again without harm.|
|Skip the step|If this step is successful, you can skip it if you encounter a failure in a later step and need to run the configuration again.If you already restarted your database server, you can skip this step.

|
|Clean up step|None required|

## Validate the database connection and environment

During this step, you are validating that the database is still available and that you can successfully connect to the database.

|Actions|Notes|
|-------|-----|
|Run the step again|You cannot rerun a manual step, but you can perform the instructions for the step again without harm.|
|Skip the step|If this step is successful, you can skip it if you encounter a failure in a later step and need to run the configuration again.|
|Clean up step|None required|

## Stop the portal server

|Actions|Notes|
|-------|-----|
|Run the step again|You can run the step again without causing any harm.|
|Skip the step|If you already stopped the portal server, you can skip this step.|
|Clean up step|None required|

## Transfer the database

|Actions|Notes|
|-------|-----|
|Run the step again|The type of failure that you encounter determines whether you can run the step again.Use the ERRORCODE and SQLSTATE associated with the error message in the ConfigTrace.log to determine the reason for the failure.

You might have a portal failure that does not have a SQLSTATE error code that is associated with the error message.

You can run the step again if the issue for the failure does not affect any values that you entered in the wizard.

If you need to update values in the wizard, you must create new scripts in the wizard. Upload your saved selections, change the affected values, and create new scripts to run. You do not need to run previous successful steps.

|
|Skip the step|If this step is successful, you can skip it if you encounter a failure in a later step and need to run the configuration again.|
|Clean up step|None required|

## Grant privileges to the database runtime users

|Actions|Notes|
|-------|-----|
|Run the step again|The type of failure that you encounter determines whether you can run the step again.You can run the step again if the issue for the failure does not affect any values that you entered in the wizard.

If you need to update values in the wizard, you must create new scripts in the wizard. Upload your saved selections, change the affected values, and create new scripts to run. You do not need to run previous successful steps.

|
|Skip the step|If this step is successful, you can skip it if you encounter a failure in a later step and need to run the configuration again.|
|Clean up step|None required|

## Manual Step: Download the script and run it on the database server to grant privileges to the runtime user

|Actions|Notes|
|-------|-----|
|Run the step again|You cannot rerun a manual step, but you can perform the instructions for the step again without harm. In this step, you download a script to run. The type of failure you encounter determines whether you can run the script again.You can run the downloaded script again if the issue for the failure does not affect any values that you entered in the wizard. For example, if you created runtime users and groups incorrectly on your database server, you can correct the issue and run the script again.

If you need to update values in the wizard, you must create new scripts in the wizard. Upload your saved selections, change the affected values, and create new scripts to run. You do not need to run previous successful steps.

|
|Skip the step|If this step is successful, you can skip it if you encounter a failure in a later step and need to run the configuration again.|
|Clean up step|None required|

## Configure the JCR domain to support large files

|Actions|Notes|
|-------|-----|
|Run the step again|You cannot rerun a manual step, but you can perform the instructions for the step again without harm.|
|Skip the step|If this step is successful, you can skip it if you encounter a failure in a later step and need to run the configuration again.|
|Clean up step|None required|

## Start the portal server

|Actions|Notes|
|-------|-----|
|Run the step again|You can run the step again without causing any harm|
|Skip the step|If you already started the portal server, you can skip this step.|
|Clean up step|None required|


**Related information**  


[Accessing the Configuration Wizard](../config/cw_run.md)

