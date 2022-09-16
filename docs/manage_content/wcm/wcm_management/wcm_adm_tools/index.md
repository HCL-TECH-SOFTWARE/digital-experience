# Web content administration tools

HCL Web Content Manager includes tasks and tools to help maintain your content management system. For example, use the member fixer task to resolve renamed or deleted users and user groups. Use the workflow checker and updater tools to modify workflow security settings, reschedule pending actions, and add workflow to items. Web Content Manager also includes tools to assist with library and item management, and item and version history management.

<!--
-   **[Web content maintenance](../admin-system/web-content-maintenance.md)**  
Over time the number of web content items will grow. It is important to clean up from time to time old items that are no longer needed to maintain good performance and make it easier for the content authors to do their daily work. This maintenance is especially important after you migrate from an earlier release.
-   **[Configuring Web content cleanup tasks](../wcm/wcm_config_clean_tasks.md)**  
These background tasks are configured to automatically delete or purge web content items from your system. Using these automated cleanup tasks helps you to save space on your server and maintain server performance.
-   **[The web content member fixer task](../wcm/wcm_admin_member-fixer_overview.md)**  
Use the member fixer task to check whether any users or groups that are referenced in HCL Web Content Manager items have been renamed or deleted and fix these references.
-   **[Running the profile enablement tool](../wcm/wcm_admin_profile_enable.md)**  
Use the profile enablement tool to enable or disable the profile feature on web content items.
-   **[The update keyword tool](../wcm/wcm_admin_keyword_update.md)**  
Use the update keyword tool to add a keyword to the profile settings on multiple web content items.
-   **[Managing workflows by using the workflow checker tool](../wcm/wcm_admin_workflow_check.md)**  
Use the workflow checker tool to update workflow security settings, reschedule pending workflow actions, or to detect and fix items with an invalid workflow.
-   **[Updating workflows by using the workflow update tool](../wcm/wcm_admin_workflow.md)**  
Use the workflow update tool to add a workflow to existing items that aren't already workflow enabled.
-   **[Clearing item history](../wcm/wcm_admin_clear_history.md)**  
You use the clear history tool to clear the history of an item.
-   **[Clearing version history](../wcm/wcm_admin_clear_versions.md)**  
You use the clear versions tool to clear the version history of an item.
-   **[Resetting the web content event log](../wcm/wcm_config_reset_event_log.md)**  
From time to time, you might need to reset the web content event log. The event log can be reset only on a syndicator server. Any changes that are made by resetting the event log are then syndicated to its corresponding subscribers. In most cases, you reset the event log on the server you imported or migrated data onto, or on a syndicator to troubleshoot syndication problems in a syndication relationship.
-   **[The export cache settings task](../wcm/wcm_admin_display_cache.md)**  
Use the export cache settings task to display a summary of the current cache settings of your system.
-   **[How to manage plug-in tag usage](../wcm/wcm_admin_plugin_tags.md)**  
Plug-in tags are used to reference rendering plug-ins in Web content. Use the run-wcm-admin-task-tag-usage task to find or update plug-in tags in your Web content.
-   **[Exporting and importing web content libraries](../wcm/wcm_config_wcmlibrary_export_main.md)**  
HCL Web Content Manager provides two methods for exporting and importing web content libraries: an export or import that operates on one library, and an export or import that creates a separate copy of a library. With either method, you can export the contents of a web content library to disk and import this data into another web content server. If you're working with a copy of a library, you can also import that library into the same web content server multiple times, resulting in a new library after each import without affecting previous copies. Exporting and importing libraries can be used to make a backup copy of a web content library and can also be used to move data between servers. However, this function cannot be used to send updates, deletes, and moves. It is only suitable for populating new items.
-   **[Deleting libraries by using the delete libraries tool](../wcm/wcm_admin_library_delete.md)**  
Use the delete libraries tool to delete multiple libraries, even when references exist to other libraries.
-   **[How to clone a web content repository](../wcm/wcm_cloning.md)**  
Syndicating items from one server to another, either after migration or to roll out a new server, can take a long time. Your database backup and restore features can be used to clone data from one repository to another, making your system ready for syndication to be used from then on for incremental updates. -->


???+ info "Related information:"
    - [Staging to production process](../../../../deployment/manage/staging_to_production/overview_of_staging_to_prod/dep_ovr.md)

