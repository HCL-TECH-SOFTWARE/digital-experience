# Content Reporting limitations

Take note of the following limitations when using HCL Content Reporting:

## Enabling HCL Content Reporting

- You cannot enable Content Reporting in a Virtual Portal.

## Generating a report

- For the **Expiry date** criteria, no results are returned if the same date is used in the **From** and **To** fields.
- For the **Word** criteria, a dash (-) is considered a delimiter for splitting the text entered. For example, if you search for "AT-Product-Item", results are returned for three different words: AT, Product, and Item.
- After generating a report, there is no option to sort using certain fields such as **Location**, **Status**, **Type**, **Expires on**, **Owners**, and **Authors**.
- For the **Owner** and  **Author** criteria, user and group attributes only display attributes that can be searched through text input or whose data type is string. For more information about adding more attributes with data type string, see [Adding attributes](../../../../deployment/manage/security/people/authentication/user_registry/vmm_atts/add_attributes.md).

## Using the Bulk Updates feature

-   The bulk updates feature has been tested to work with a maximum of 5000 items. Working with items more than this amount might lead to performance issues. It is recommended to avoid using the Derby database when working with more than 500 items because it may lead to performance degradation.
-   The bulk updates feature does not have project scope (HCL Digital Experience Projects) capabilities.
-   Only the following actions are currently available:
    - Update the expiration date of content items
    - Add, remove, and replace owners and authors of content items
-   When updating expiration dates, updates can only be applied in bulk to content items, site areas, authoring templates, components, categories, and items with Edit access.
-   When updating expiration dates, items that are not assigned a workflow are excluded from the updates.
-   When updating expiration dates, you can only select a date and the default time is 12:00 a.m.
-   When updating owners or authors, updates cannot be applied in bulk to Libraries.
-   The status of bulk update requests is not tracked in real-time; the status is updated every 10 seconds.
-   Selecting a subset of items in the report for update is not allowed.
-   You can only resume a paused bulk update process for owners and authors if the update involves a limited number of users and groups. There is a size limitation in the database column that stores the action string that specifies the owners or authors used in an update. If the action string exceeds 255 characters, you cannot resume the paused bulk update process. It is recommended to create a user group instead. Add all of the users to the group and then select the new group when initiating the bulk update operation. For more information, see [Managing users and groups](../../../../deployment/manage/security/people/authorization/controlling_access/).

## Exporting reports to a CSV file

-   The CSV export function uses the browser's blob storage. If a large CSV export is attempted, users might encounter out-of-memory errors with the browser. This prevents the successful download of any large file.
-   Selecting a subset of items in the report for export is not allowed.

## Bookmarking reports

-   When you go to a bookmarked report and then change the language using the language switcher, the system fails to retain the report and redirects you to the HCL Content Reporting landing page.
- You cannot bookmark filtered results from the Bulk Update page because the selections and records are huge and storing them in URL is not feasible.

## User interface

Note that the following pages do not support server-side pages, which might cause an unstable UI when processing large amounts of data.

- Content Reporting Updates page
    ![](../../../../assets/HCL_Content_Reporting_Updates_Page.png)

- Content Reporting Update Report Dialog page
    ![](../../../../assets/HCL_Content_Reporting_Update_Dialog_Clean.png)
