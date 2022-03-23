# Publishing synchronization extension  Multilingual Solution

This extension uses projects to ensure that the base item and any draft localized items are published at the same time.

To use the project synchronized publishing extension, set **syncPublish.useProjects=true** in the multilingual configuration file.

**Note:** Individual workflows can be excluded from using synchronized publishing by specifying their name in the **SyncPublish.workflowsToExcludeFromSyncProjectPublishing** setting in the multilingual configuration file.

**Note:** The **syncPublish.useProjects** and **SyncPublish.workflowsToExcludeFromSyncProjectPublishing** settings must be the same across all associated multilingual configuration files.

## How it works

When an item enters a publish workflow stage the following things happen:

-   If any draft localized copies of the current item are not in the pending publish state, then nothing happens.
-   If all draft localized copies of the current item are in the pending publish state, then the current item and its copies are moved to the next workflow stage and a notification sent to relevant locale owners.

**Parent topic:**[Extensions for multilingual sites  Multilingual Solution](../wcm/wcm_mls_extensions.md)

