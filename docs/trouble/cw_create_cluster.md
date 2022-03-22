# Troubleshooting: Create a cluster option

Creating a cluster is part of setting up a clustered environment.If you encounter a failure during the configuration process, determine whether you can run the step again, skip the step, or if you must clean up the step. For some failed steps, learn how to correct the issue and recover from the failure.

Each potential step in the configuration is included. Because the steps vary depending on your selections, the steps are not numbered. Find the step that failed to learn more about correcting and recovering from the failure. If you need to change a value that you entered in the wizard, then you must run the configuration again.

**Tip:** If you must go through the wizard again, download the wizard selections that you made to save time. Then, cancel the configuration. Start the process over and upload your saved selections. Correct or enter values for the parameters that caused the failure.

# Manual Step: Verify that the portal node and deployment manager system clocks are within 5 minutes of each other

Manual step errors occur outside the context of the wizard.

|Actions|Notes|
|-------|-----|
|Run the step again|Not applicable|
|Skip the step|If you successfully completed the step before, then skip this step.|
|Clean up step|None required|

# Federate the node

When you federate the node, it becomes a managed node in the deployment manager cell.

If this step fails see the addNode.log to determine why the step failed. In most cases, you can correct the error condition and run the step again. You do not have to cancel or reset the configuration steps.

The log is in the /wp\_profile/logs directory

|Actions|Notes|
|-------|-----|
|Run the step again|If the step did not complete successfully during the previous configuration, run it again.|
|Skip the step|If you successfully completed the step before, then skip this step.|
|Clean up step|Based on where the step failed during the addNode task, you might need to remove the node and run the step again. Run the removeNode command from the wp\_profile/bin directory. Example:

```
wp_profile/bin/removeNode.sh
```

|

# Configure the dynamic cluster node

Applies to dynamic clusters only.

|Actions|Notes|
|-------|-----|
|Run the step again|You can run this step repeatedly without causing harm.|
|Skip the step|If you successfully completed the step before, then skip this step.|
|Clean up step|None required|

# Prepare the node for clustering

If this step fails, click **View Results** to see the applicable section of the ConfigTrace.log.

|Actions|Notes|
|-------|-----|
|Run the step again|You can run this step repeatedly without causing harm.|
|Skip the step|If you successfully completed the step before, then skip this step.|
|Clean up step|None required|

# Complete the cluster setup

|Actions|Notes|
|-------|-----|
|Run the step again|You can run this step repeatedly without causing harm.|
|Skip the step|If you successfully completed the step before, then skip this step.|
|Clean up step|None required|

