# Troubleshooting: Upgrade node profiles for a cluster environment

If you encounter a failure while upgrading the node profiles for a cluster environment, learn how to correct the issue and recover from the failure.

Each potential step in the upgrade node profiles option is included. Since the steps vary, depending on your selections, the steps are not numbered. Find the step that failed to learn more about correcting and recovering from the failure.

# Manual Step: Update the ports for the deployment manager and nodes

Since this is a manual step, any error that occurs is outside the context of the wizard.

|Actions|Notes®|
|-------|------|
|Run the step again|You can run this step again if it fails.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|None required|

## Upgrade the ConfigEngine

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again. If you re-create your profile for any reason, you must run this step again.

|
|Clean up step|If this step fails, review the parameters and values that you entered in the Configuration Wizard, specifically the new host name, passwords, port numbers, and the Portal server path.If the parameter and values that you entered are correct, and the step fails again, use the wp-collector tool to gather the files that are needed to contact support for help. See [Data collection and symptom analysis](tbl_apdt_over.md) for information about using the wp-collector tool.

|

## Update database settings

|Actions|Notes|
|-------|-----|
|Run the step again|Not applicable|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.If you re-create your profile for any reason, you must run this step again.

|
|Clean up step|None required|

## Validate the database settings

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.If you re-create your profile for any reason, you must run this step again.

|
|Clean up step|Check your properties files to make sure that you have all of your parameters and values set correctly before you run the step again.|

## Connect to new databases

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run the step again.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.If you re-create your profile for any reason, you must run this step again.

|
|Clean up step|None required|

## Manual Step: Review database schema changes

Since this is a manual step, any error that occurs is outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again.|
|Skip the step|This step is optional. You can skip this step if you do not want to review the database schema changes.|
|Clean up step|None required|

## Upgrade the base portal database component

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|Do not skip this step, if you are running the configuration again.|
|Clean up step|If this step fails, delete the database, create a new copy, and run the step again.|

## Manual Step: Remove check pending statuses from table spaces

Since this is a manual step, any error that occurs is outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, clean up the issue and start back with the **Upgrade the base portal database components** step, and then run this step again.|
|Skip the step|Do not skip this step, if you are running the configuration again.|
|Clean up step|If this step fails, delete the database, create a new copy, and run the **Upgrade the portal database component** step again before you rerun this step again.|

## Upgrade the remaining portal databases

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, clean up the issue and start back with the **Upgrade the base portal database components**.|
|Skip the step|Do not skip this step, if you are running the configuration again. You must complete the **Upgrade the base portal database components** and **Remove check pending statuses from table spaces** steps before you run this step again.|
|Clean up step|If this step fails, delete the database, create a new copy, and rerun the **Upgrade the portal database component** and **Remove check pending statuses from table spaces** steps before you run this step again.|

## Upgrade the portal profile

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

## Apply the latest Combined Cumulative Fix updates to your system.

|Actions|Notes|
|-------|-----|
|Run the step again|If this step fails, you can run this step again after you clean up the issue.|
|Skip the step|If this step was successful, you can skip it if you run the configuration process again.|
|Clean up step|If this step fails, contact support and report the error message to get assistance on how to fix this issue before you run the step again.|

