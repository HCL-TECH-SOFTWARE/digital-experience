# Resetting the web content event log

From time to time, you might need to reset the web content event log. The event log can be reset only on a syndicator server. Any changes that are made by resetting the event log are then syndicated to its corresponding subscribers. In most cases, you reset the event log on the server you imported or migrated data onto, or on a syndicator to troubleshoot syndication problems in a syndication relationship.

You must reset the web content event log under these circumstances:

-   The contents of the repository is modified through an external mechanism such as a JCR import or some other custom application.
-   As a post migration step during migration before syndication.
-   To troubleshoot syndication problems such as items on the syndicator not being sent.

!!! note
    -   Before you reset the web content event log, you must edit the wkplc_dbtype.properties file and ensure the DbSafeMode property is set to false. This file is located in wp_profile_root/ConfigEngine/properties.
    -   In clustered environments, you must reset only the event log on the primary node.
    -   Any objects that were purged on the syndicator since the last syndication is not purged on the subscriber. Purged objects are lost since the event log does not maintain records of objects that were deleted. To clean up purged items on a subscriber, you need to go the subscriber and manually delete them.

-   **To reset**

    Run the `run-wcm-admin-task-reset-event-log` task from the wp_profile_root/ConfigEngine directory.

    -   **UNIX™ and Linux™**

        `./ConfigEngine.sh run-wcm-admin-task-reset-event-log -Dlibrary="library_name" -Dfix=true`

    -   **Windows™**

        `ConfigEngine.bat run-wcm-admin-task-reset-event-log -Dlibrary="library_name" -Dfix=true`

    !!! note
        If -Dfix=true is omitted, then the task runs in report-mode only.

    !!! note
        The library that is specified in the command is the library to be scanned by the reset event log task. If the query parameter "library" is omitted, the default library that is configured with the defaultLibrary property in the **WCM WCMConfigService** service is used.

    !!! note
        When you run this task on a virtual portal, you must add either `-DVirtualPortalHostName`=name or `-DVirtualPortalContext=virtual_portal_context` to the command.



???+ info Related information"
    - [Syndication troubleshooting](../../wcm_delivery/syndication/wcm_syndication_troubleshooting.md)
    - [Exporting and importing web content libraries](../wcm_adm_tools/wcmlibrary_export/index.md)

