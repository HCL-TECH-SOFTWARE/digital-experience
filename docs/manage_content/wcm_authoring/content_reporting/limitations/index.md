# Limitations

Take note of the following limitations when using HCL Content Reporting:

-   Selecting a subset of items in the report for export or update is not allowed.
-   For the Expiry date criteria, no results are returned if the same date is used in the **From** and **To** fields. 
-   There is no option to sort the report table.
-   The Content Reporting bulk updates feature has been tested to work with a maximum of 5000 items. Working with items more than this amount might lead to performance issues.
-   Content Reporting bulk updates do not have project scope (HCL Digital Experience Projects) capabilities.
-   Content Reporting bulk updates only support updating the expiration date of items.
-   Updates can only be applied in bulk to content items, site areas, authoring templates, components, categories, and items with Edit access.
-   Items that are not assigned a workflow are excluded from the updates.
-   Content Reporting bulk updates for expiry is date-only, and the default time is 12:00 a.m.
-   The status of bulk update requests is not tracked in real-time; the status is updated every 10 seconds.
-   The CSV export function uses the browser's blob storage. If a large CSV export is attempted, users might encounter out-of-memory errors with the browser. This prevents the successful download of any large file.
-   Content Reporting is not supported in Hebrew or Arabic at this point. It is supported in other supported languages, but it is not currently translated.

Note that the following pages do not support server-side pages, which might cause an unstable UI when processing large amounts of data.

- Content Reporting Updates page
    ![](../../../../assets/HCL_Content_Reporting_Updates_Page.png)

- Content Reporting Update Report Dialog page
    ![](../../../../assets/HCL_Content_Reporting_Update_Dialog_Clean.png)
