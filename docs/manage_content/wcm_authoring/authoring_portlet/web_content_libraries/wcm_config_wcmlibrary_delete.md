# Deleting a web content library

When a web content library is no longer required, you can delete the library.

-   You must be an administrator to delete web content libraries.
-   A library cannot be deleted if there are references to items in the library that is being deleted from items in other libraries.
-   A library is only deleted on the current server. If you are syndicating to other servers, you must delete each library on each server separately.
-   If you want to prevent any changes from being made to items stored in a library, but would like those items to still appear on a rendered site, you must disable the library instead.
-   You must back up your library before you delete it.
-   Do not shut down your server during deletion as this action corrupts the library. If the library gets corrupted, you must reinstall your library from your backup.
-   Deleting a library is an intensive process and increases the load on your server. A less load intensive alternative to deleting a library is disabling a library. For more information, see [Disabling a web content library](wcm_config_wcmlibrary_disable.md). Disabling a library can also be used as an alternative to deleting a library when a library cannot be deleted because there are references from items in other libraries.

To delete a library:

1.  Click the **Administration menu** icon in the toolbar. Then, click **Portal Content** \> **Web Content Libraries**.

2.  Click the Delete library icon for the library you would like to delete.

3.  Click **System Reports** to open a list of library deletion reports.

4.  Click the most recent report to review the library deletion.

    !!! note
        Items that were previously deleted but not purged from the library are not included in the "total items deleted successfully" count.


???+ info "Related information:"
    - [Staging to production list](../../../../deployment/manage/staging_to_production/overview_of_staging_to_prod/dep_stage_check.md)

