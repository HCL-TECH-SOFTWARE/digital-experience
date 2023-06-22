# Limitations

The following limitations exist in HCL Content Reporting:

-   Users need Editor access to generate a query.
-   Users need to run JCR textsearch to use content reporting.
-   Content Reporting report can be generated only by limited search criteria Expiry date, Authors, Owners, Item type, Words ,and Phrases.
-   Selecting a subset of items in the report for export or update is not allowed.
-   No results will be returned if the same date is used as the From and To dates for the Expiry date criteria.
-   Content Reporting Author/Owner cannot be searched by email, job title etc.
-   Content Reporting Author/Owner cannot be searched per user group category (e.g. Authenticated users, Anonymous users).
-   Content Reporting search table doesn't have sorting support.
-   Content Reporting clicking on individual content of search result doesn't navigate to actual item detail page.
-   Content Reporting bulk updates were tested to work with 5000 items.
-   Content Reporting bulk updates don't have project scope (HCL Digital Experience Projects) capabilities.
-   Content Reporting bulk updates only support updating the expiration date of items.
-   Updates can only be applied in bulk to content items, site areas, authoring templates, components, categories, and items with edit access.
-   Only the expiry date can by updated in bulk at the moment. Items that are not assigned a workflow will be excluded from the updates.
-   Content Reporting bulk updates for expiry is date-only, and the default time will be 12:00 a.m.
-   The status of bulk update requests is not tracked in real-time; instead, the status is updated every 10 seconds.
-   The CSV export function uses Blob storage in the browser, if a very large CSV export is attempted, a user may run into an out of memory conditions with the browser that prevents the large file from successfully downloading.

The following issues to be aware of in HCL Content Reporting:

- Content Reporting Updates page doesn't support server-side pages, which might cause an unstable UI when the data is too large.
    ![](../../../../assets/HCL_Content_Reporting_Updates_Page.png)

- Content Reporting Update Report Dialog page doesn't support server-side pages, which might cause an unstable UI when the data is too large.
    ![](../../../../assets/HCL_Content_Reporting_Update_Dialog_Clean.png)
