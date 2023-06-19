# Limitations

The following limitations exist in HCL Content Reporting:

-   Content Reporting report can be generated only by limited search criteria Expiry date, Authors, Owners, Item type, Words ,and Phrases in HCL DX 9.5 Container Update CF213.
-   Content Reporting multiple selection of content items are not allowed in HCL DX 9.5 Container Update CF213.
-   Content Reporting does not return any result if entering the same date in the From and To dates in Expiry date criteria.
-   Content Reporting Author/Owner cannot be searched by email, job title etc. in HCL DX 9.5 Container Update CF213.
-   Content Reporting Author/Owner cannot be searched per user group category (e.g. Authenticated users, Anonymous users) in HCL DX 9.5 Container Update CF213.
-   Content Reporting can search only one phrase per criteria line in HCL DX 9.5 Container Update CF213.
-   Content Reporting will search the more specific sub-types in case of user input of both a main item type and one or more of its sub types, (e.g. Component + Date + Image) in HCL DX 9.5 Container Update CF213.
-   Content Reporting search table doesn't have sorting support in HCL DX 9.5 Container Update CF213.
-   Content Reporting clicking on individual content of search result doesn't navigate to actual item detail page in HCL DX 9.5 Container Update CF213.
-   Content Reporting cannot cherry pick items from the search results, by checkbox or  row selection, to use in the bulk update for HCL DX 9.5 Container Update CF213.
-   Content Reporting bulk updates don't have project scope (HCL Digital Experience Projects) capabilities in HCL DX 9.5 Container Update CF213.
-   Content Reporting bulk updates only support updating the expiration date of items in HCL DX 9.5 Container Update CF213.
-   Content Reporting bulk updates will only be applied to content items, site areas, authoring templates, components, categories, and items with edit access. Items assigned to a workflow will also be included.
-   Content Reporting bulk updates for expiry is date-only, and the default time will be 12:00 a.m.
-   Content Reporting bulk updates don't track items in real time; instead, we are pulling data every 10 seconds in HCL DX 9.5 Container Update CF213.
-   Content Reporting Updates page doesn't have server-side pagination and sorting support in HCL DX 9.5 Container Update CF213.
-   Content Reporting Update Report Dialog doesn't have server-side pagination and sorting support in HCL DX 9.5 Container Update CF213.

The following issues to be aware of in HCL Content Reporting:

- Content Reporting Updates page doesn't support server-side pages, which might cause an unstable UI when the data is too large.
    ![](../../../../assets/HCL_Content_Reporting_Updates_Page.png)

- Content Reporting Update Report Dialog page doesn't support server-side pages, which might cause an unstable UI when the data is too large.
    ![](../../../../assets/HCL_Content_Reporting_Update_Dialog_Clean.png)
