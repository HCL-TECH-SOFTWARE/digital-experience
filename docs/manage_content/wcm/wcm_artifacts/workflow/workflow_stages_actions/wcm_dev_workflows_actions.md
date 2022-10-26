# Workflow actions

Each workflow stage contains sets of actions; actions that are run when an item enters the stage, and actions run when an item exits the stage. The exit actions are restricted to non-scheduled actions, since they must be run immediately.

The following table describes the actions that you can choose for workflow stages.

|Action|Details|
|------|-------|
|**Publish**|Changes an item's Status from **Draft** to **Published**. The item is available on the rendered site.An item is published when it enters a workflow stage that contains a publish action, and when the selected published date and time are reached.|
|**Expire**|Changes an item's Status from **Published** to **Expired**. The document is no longer available on the site.An item is expired when it enters a workflow stage that contains an expire action, and when the selected expire date and time are reached.|
|**Email**|This action sends emails when run. You can create new email actions and specify who the recipients are. You can select to email approvers, authors, and owners. You can also create a list of other users or groups to email.A link to the Item to be reviewed is included in the email.|
|**Scheduled Move**|Runs a scheduled move to the next stage on a specified date. A list-box allows users to select one of four date types that are entered on each individual document, or you can specify a static date.|
|**Version**|This action creates a version of an item when run.|
|**Custom**|You can also create custom workflow actions by creating a custom workflow plug-in. These actions can be used and scheduled within a workflow like other workflow actions.|


