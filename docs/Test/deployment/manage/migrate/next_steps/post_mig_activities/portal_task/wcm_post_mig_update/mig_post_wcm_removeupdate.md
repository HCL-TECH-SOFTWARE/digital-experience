# Updates for Web Content Manager

These are additional migration steps required for Web Content Manager after data migration is complete.

## Authoring portlet preferences

Authoring portlet preferences, such as configured libraries and default rich text editor, are not migrated. You must re-configure your authoring portlet after migration to restore your preferences.

## JSP files and Web content plug-ins

-   Any JSP files used on your old system must be manually copied to your new system.
-   Any Web content plug-ins used on your old system, such as custom workflows, must be manually copied to your new system and enabled.

## Syndication

If the hostname or context root of your migrated server is different to the original server, you will need to edit the syndicators or subscribers to use the new hostname or context root.

-   Edit the Subscriber URL of any syndicators that are syndicating to the migrated server. See [Cross version syndication](../../../../planning_migration/migration_consideration/migrating_wcm_70_80/mig_content_options_cross-version.md) for details on what versions of HCL Portal support cross version syndication.
-   Edit the Syndicator URL of any subscribers that are subscribing to the migrated server. See [Cross version syndication](../../../../planning_migration/migration_consideration/migrating_wcm_70_80/mig_content_options_cross-version.md) for details on what versions of HCL Portal support cross version syndication.


