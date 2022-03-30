# Library export and import and migration 

Web content libraries can be exported from one system and imported onto another. This tool can be used as part of a migration, but there are some limitations to the use of this tool.

**Important:** A library import must not be used to replace previously imported web content library if the previously imported library contains subsequent modifications.

## Supported data

Only published and expired web content items are exported. The following data is not supported:

-   Draft, deleted, purged web content items are not exported.
-   Saved versions of web content items are not exported.
-   Theme resources stored in WebDAV are not exported.
-   Projects are not exported.

## Performance

The library export and import tool is slower than the data migration tool because the library export and import tool creates copies of each item from the web content library. Data migration updates items in the database itself.

**Parent topic:**[Migrating from Web Content Manager version 7.0 or 8.0 ](../migrate/mig_content_from_7-0.md)

