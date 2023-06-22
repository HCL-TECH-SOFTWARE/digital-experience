# Limitations

The following limitations exist in HCL Content Reporting:

-   An Editor access is required to generate a query.
-   Users must run JCR textsearch to use content reporting.
-   The Content Reporting report can be generated only by the following search criteria: 
        - Expiry date
        - Authors
        - Owners
        - Item type
        - Words
        - Phrases
-   Selecting a subset of items in the report for export or update is not allowed.
-   For the Expiry date criteria, no results are returned if the same date is used in the **From date** and **To date** fields. 
-   The Content Reporting search table does not have sorting capabilities.
-   Content Reporting clicking on individual content of search result does nit navigate to the item detail page.
-   Content Reporting bulk updates were tested to work with 5000 items.
-   Content Reporting bulk updates do not have project scope (HCL Digital Experience Projects) capabilities.
-   Content Reporting bulk updates only support updating the expiration date of items.
-   Updates can only be applied in bulk to content items, site areas, authoring templates, components, categories, and items with Edit access.
-   Only the expiry date can be updated in bulk at the moment. Items that are not assigned a workflow are excluded from the updates.
-   Content Reporting bulk updates for expiry is date-only, and the default time is 12:00 a.m.
-   The status of bulk update requests is not tracked in real-time; the status is updated every 10 seconds.
-   The CSV export function uses the browser's blob storage. If a large CSV export is attempted, users might encounter out-of-memory errors with the browser. This prevents the successful download of any large file.

The following issues to be aware of in HCL Content Reporting:

- Content Reporting Updates page doesn't support server-side pages, which might cause an unstable UI when the data is too large.
    ![](../../../../assets/HCL_Content_Reporting_Updates_Page.png)

- Content Reporting Update Report Dialog page doesn't support server-side pages, which might cause an unstable UI when the data is too large.
    ![](../../../../assets/HCL_Content_Reporting_Update_Dialog_Clean.png)
