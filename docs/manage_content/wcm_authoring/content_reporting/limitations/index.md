# Limitations

The following limitations exist in HCL Content Reporting:

-   Content Reporting bulk updates don't have  project scope (HCL Digital Experience Projects) capabilities in HCL DX 9.5 Container Update CF213.
-   Content Reporting bulk updates only support updating the expiration date of items in HCL DX 9.5 Container Update CF213.
-   Content Reporting bulk updates will only be applied to content items, site areas, authoring templates, components, categories, and items with edit access. Items assigned to a workflow will also be included.
-   Content Reporting bulk updates don't track items in real time; instead, we are pulling data every 10 seconds in HCL DX 9.5 Container Update CF213.
-   Content Reporting Update page doesn't have server-side pagination and sorting support in HCL DX 9.5 Container Update CF213.
-   Content Reporting Update Report Dialog doesn't have server-side pagination and sorting support in HCL DX 9.5 Container Update CF213.
-   Content Reporting Update Report Dialog doesn't have a redirect to item capability in HCL DX 9.5 Container Update CF213.

The following issues to be aware of in HCL Content Reporting:

- Content Reporting Update's page doesn't support server-side pages, which might cause an unstable UI when the data is too large.
    ![](../../../../assets/HCL_Content_Reporting_Updates_Page.png)

- Content Reporting Update Report Dialog page doesn't support server-side pages, which might cause an unstable UI when the data is too large.
    ![](../../../../assets/HCL_Content_Reporting_Update_Dialog_Clean.png)
