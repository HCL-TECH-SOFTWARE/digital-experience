# Planning for changes to web content when migrating from Web Content Manager version 7.0

Migration projects require careful planning to synchronize changes from the old production system with the new system. Content creation can still continue on the old system while the new system is installed. A typical migration plan includes time for provisioning, configuring, testing, and tuning infrastructure and software. Custom or third-party applications require their own migration procedures.

In addition to continuous content updates, many organizations plan to restructure their website, or introduce new websites or new sections and to have these changes go live with the migrated system. During migration planning and execution, it is important to understand how to manage structural change at the same time as keeping regular content updates synchronized.

## Options for keeping data synchronized during migration

-   **Cross-version syndication**

    Cross version syndication is supported on these versions:

    -   From Web Content Manager version 7.0.0.2 with CF26 or higher.
    -   From Web Content Manager version 8.0.0.1 with CF09 or higher.
    On these systems, syndication is used to synchronize web content after an initial migration. Syndication replaces the existing function of a post migration data update. See [Cross version syndication](mig_content_options_cross-version.md) for details.

-   **Web content library export and import**

    A Web content library export and import can be used during migration. However, there are important limitations which preclude the usage of these tools in most migrations. A Web content library export and import can be used when updates are isolated to a small library on the source system. Export and import should only be used where simple modifications or additions are happening in the source system. A Web content library import must not be used to update content which has changed since the last import.


## Syndication strategies

-   Use cross-version syndication to keep the syndicator on your new system synchronized with the syndicator on your old system. These are usually your authoring servers.
-   Updates that are applicable to both the old and new systems are made on the old syndicator.
-   Updates that are only applicable to the new system should be made on the new syndicator.

**Note:** Any changes made on your old system will override changes made on your new system. If making updates on both systems, it is recommended that the items updated or added to the new system are unique to that system. If not, changes on your new system can be replaced by changes from the old system.

## Recent items and favorites

Recent items and favorites are not preserved during migration. Lists of favorite items will need to be recreated post-migration. Users should make note of any favorite items prior to migration.


