# Resetting the web content event log

From time to time, you might need to reset the web content event log. The event log can be reset only on a syndicator server. Any changes that are made by resetting the event log are then syndicated to its corresponding subscribers. In most cases, you reset the event log on the server you imported or migrated data onto, or on a syndicator to troubleshoot syndication problems in a syndication relationship.

You must reset the web content event log under these circumstances:

-   The contents of the repository is modified through an external mechanism such as a JCR import or some other custom application.
-   As a post migration step during migration before syndication.
-   To troubleshoot syndication problems such as items on the syndicator not being sent.

**Note:**

-   Before you reset the web content event log, you must edit the wkplc\_dbtype.properties file and ensure the DbSafeMode property is set to false. This file is located in `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties`.
-   In clustered environments, you must reset only the event log on the primary node.
-   Any objects that were purged on the syndicator since the last syndication is not purged on the subscriber. Purged objects are lost since the event log does not maintain records of objects that were deleted. To clean up purged items on a subscriber, you need to go the subscriber and manually delete them.

-   **To reset**

    Run the `run-wcm-admin-task-reset-event-log` task from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory.

    -   **IBM® i**

        ConfigEngine.sh run-wcm-admin-task-reset-event-log -Dlibrary="library\_name" -Dfix=true

    -   **UNIX™Linux™**

        ./ConfigEngine.sh run-wcm-admin-task-reset-event-log -Dlibrary="library\_name" -Dfix=true

    -   **Windows™**

        ConfigEngine.bat run-wcm-admin-task-reset-event-log -Dlibrary="library\_name" -Dfix=true

    -   **z/OS®**

        ./ConfigEngine.sh run-wcm-admin-task-reset-event-log -Dlibrary="library\_name" -Dfix=true

    **Note:** If -Dfix=true is omitted, then the task runs in report-mode only.

    **Note:** The library that is specified in the command is the library to be scanned by the reset event log task. If the query parameter "library" is omitted, the default library that is configured with the defaultLibrary property in the **WCM WCMConfigService** service is used.

    **Note:** When you run this task on a virtual portal, you must add either `-DVirtualPortalHostName`=name or `-DVirtualPortalContext=virtual\_portal\_context` to the command.



**Related information**  


[Syndication troubleshooting](../wcm/wcm_syndication_troubleshooting.md)

[Exporting and importing web content libraries](../wcm/wcm_config_wcmlibrary_export_main.md)

