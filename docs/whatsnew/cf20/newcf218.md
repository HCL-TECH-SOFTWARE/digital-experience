# What's new in CF218

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF218 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

- Web Content Manager REST API v2 - New APIs available in Swagger Explorer
- Site Manager - Resizable navigation panel 
- DXClient - New repositories in GitHub and Harbor
- DX Search - Configuring DX Search and Improving Search Quality documentation
<!-- - HCL DX APIs in HCL Volt MX Foundry -->
- Notice of deprecation of Textbox.io Rich Text Editor

**Digital Experience 8.5 and 9.0 Versions**

- End of Support Announced for Digital Experience v8.5 and 9

**Digital Experience 9.5 Version**

- Web Content Manager - New filters to enhance search for users and groups in Content Reporting
- Web Content Manager - Resuming bulk updates in Content Reporting 

**Digital Experience 9.5 Container Version**

- Exporting a user session usage report
- New diagram for blue/green deployments
- Digital Asset Management - Uploading with drag-and-drop
- Digital Asset Management - Performance enhancement for DAM Staging Mismatch and Resync

**Digital Experience Early Access Program**

- Open Liberty Portlet Container Milestone 2 - Support for extensions and trimming of portlet.xml whitespace

Go to the [HCL Software Support Site/ HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959) for the list of software fixes, including Container Update releases.

## All Digital Experience Versions (8.5, 9.0, 9.5)

### Web Content Manager REST API v2 - New APIs available in Swagger Explorer

=== "Containers"
    There are new V2 APIs related to Components (such as LibraryAuthoringToolsComponent and LibraryListPresentationComponent), Custom Workflow Actions Factory, Item Version Update and Restore, Syndication, Presentation Template, Favorite Items, Recent Items, Apply Content Templates, Page References, and Rendering Content. See [REST service for Web Content Manager v2](../../manage_content/wcm_development/wcm_rest_v2/wcm_rest_v2_starting.md) for more information. There is also new documentation that discusses the [differences between V1 and V2 APIs](../../manage_content/wcm_development/wcm_rest_v2/comparison_v1_v2.md). 
    
    You can check the APIs in [WCM REST v2 Swagger API Explorer](https://opensource.hcltechsw.com/experience-api-documentation/wcm-api/).

=== "On-Premises"
    There are new V2 APIs related to Components (such as LibraryAuthoringToolsComponent and LibraryListPresentationComponent), Custom Workflow Actions Factory, Item Version Update and Restore, Syndication, Presentation Template, Favorite Items, Recent Items, Apply Content Templates, Page References, and Rendering Content. See [REST service for Web Content Manager v2](../../manage_content/wcm_development/wcm_rest_v2/wcm_rest_v2_starting.md) for more information. There is also new documentation that discusses the [differences between V1 and V2 APIs](../../manage_content/wcm_development/wcm_rest_v2/comparison_v1_v2.md). 
    
    You can check the APIs in [WCM REST v2 Swagger API Explorer](https://opensource.hcltechsw.com/experience-api-documentation/wcm-api/).

### Site Manager - Resizable navigation panel 

=== "Containers"
    In the Site Manager, you can now control the size of your side toolbar. For more information, see [Site toolbar](../../manage_content/wcm_authoring/inline_editing/index.md#site-toolbar).

=== "On-Premises"
    In the Site Manager, you can now control the size of your side toolbar. For more information, see [Site toolbar](../../manage_content/wcm_authoring/inline_editing/index.md#site-toolbar).

### New DXClient repository in GitHub and Harbor

=== "Containers"
    New DXClient repositories are available. For open distribution of the DXClient container package, go to [HCL DX Open Harbor](https://hclcr.io/harbor/projects/95/repositories/dxclient/artifacts-tab). You can find the installation and usage details in [dxclient-scripts](https://github.com/HCL-TECH-SOFTWARE/dxclient-scripts) of the HCL-TECH-SOFTWARE GitHub repository.

=== "On-Premises"
    New DXClient repositories are available. For open distribution of the DXClient container package, go to [HCL DX Open Harbor](https://hclcr.io/harbor/projects/95/repositories/dxclient/artifacts-tab). You can find the installation and usage details in [dxclient-scripts](https://github.com/HCL-TECH-SOFTWARE/dxclient-scripts) of the HCL-TECH-SOFTWARE GitHub repository.

### DX Search - Configuring DX Search and Improving Search Quality documentation

=== "Containers"
    The topics [Configuring DX Search](../../build_sites/search/cfg_dx_search/index.md) and [Improving search quality in HCL Digital Experience](../../build_sites/search/improving_search_quality/index.md) are available in the DX Help Center. 

=== "On-Premises"
    The topics [Configuring DX Search](../../build_sites/search/cfg_dx_search/index.md) and [Improving search quality in HCL Digital Experience](../../build_sites/search/improving_search_quality/index.md) are available in the DX Help Center. 
<!--
### HCL DX APIs in HCL Volt MX Foundry

(No doc yet)
-->
### Notice of deprecation of Textbox.io Rich Text Editor

=== "Containers"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and will End of Support (EOS) on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

=== "On-Premises"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and will End of Support (EOS) on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

## Digital Experience 8.5 and 9.0 Versions

### End of Support Announced for Digital Experience v8.5 and 9

=== "On-Premises"
    On June 30, 2023, HCL Software announced end of support for HCL Digital Experience versions 8.5 and 9, effective June 30, 2025. Customers are encouraged to upgrade to HCL Digital Experience version 9.5, released in a continuous delivery model. Refer to the [Deprecated features](../deprecated_features.md) page for more information.

## Digital Experience 9.5 Version

### Web Content Manager - New filters to enhance search for users and groups in Content Reporting

=== "Containers"
    There are new attributes for users and groups that you can select as additional filters when searching for items in HCL Content Reporting. With these new fields, you can filter the items owned and authored by users and groups when generating a report or when updating existing items in a report. For more information, see [Generating a report](../../manage_content/wcm_authoring/content_reporting/usage/generate_content_report.md#generating-a-report) and [Using the Content Reporting Bulk Update Owners/Authors feature](../../manage_content/wcm_authoring/content_reporting/usage/bulk_update_report.md#using-the-content-reporting-bulk-update-ownersauthors-feature).

=== "On-Premises"
    There are new attributes for users and groups that you can select as additional filters when searching for items in HCL Content Reporting. With these new fields, you can filter the items owned and authored by users and groups when generating a report or when updating existing items in a report. For more information, see [Generating a report](../../manage_content/wcm_authoring/content_reporting/usage/generate_content_report.md#generating-a-report) and [Using the Content Reporting Bulk Update Owners/Authors feature](../../manage_content/wcm_authoring/content_reporting/usage/bulk_update_report.md#using-the-content-reporting-bulk-update-ownersauthors-feature).


### Web Content Manager - Resuming bulk updates in Content Reporting

=== "Containers"
    If a bulk update process is running and the server restarts, the system pauses the update process. When the server is available again, you can resume the paused bulk update process through the **Updates** page. For more information, see [Resuming a paused bulk update process](../../manage_content/wcm_authoring/content_reporting/usage/bulk_update_report.md#resuming-a-paused-bulk-update-process).

=== "On-Premises"
    If a bulk update process is running and the server restarts, the system pauses the update process. When the server is available again, you can resume the paused bulk update process through the **Updates** page. For more information, see [Resuming a paused bulk update process](../../manage_content/wcm_authoring/content_reporting/usage/bulk_update_report.md#resuming-a-paused-bulk-update-process).

## Digital Experience 9.5 Container Version

### Exporting a user session usage report

=== "Containers"
    You can configure user session tracking, view DX 9.5 user session consumption, and manually export a report of the number of sessions used in specified time periods. Note that user session tracking and reporting support the protection of the Personally Identifiable Information (PII) of users. Data such as the User ID and the IP Address are not stored in the server logs or presented in user session usage reports. For more information, see [Tracking user session consumption and exporting usage reports](../../get_started/download/software_licensing_portal/configure_entitlement_checks/export_usage_report.md).

### New diagram for blue/green deployments

=== "Containers"
    A new diagram is added in [Difference and Similarities Between Traditional and Kubernetes DX Deployments](../../deployment/manage/container_configuration/deploy_container_artifact_updates.md#difference-and-similarities-between-traditional-and-kubernetes-dx-deployments) showing how a DX solution could be deployed for high availability and blue/green deployments in a single Kubernetes cluster.

### Digital Asset Management - Uploading with drag-and-drop

=== "Containers"
    You can drag and drop multiple files and folders to upload them to Digital Asset Management (DAM). The hierarchy of nested folders during the upload process is preserved. For more information, see [Uploading using drag-and-drop](../../manage_content/digital_assets/usage/managing_dam/upload_rich_media_assets.md#uploading-using-drag-and-drop).

### Digital Asset Management - Performance enhancement for DAM Staging Mismatch and Resync

=== "Containers"
    In previous versions, if the process to find the staging mismatch exceeds 30 minutes, the process fails because of the excessive amount of data. Starting CF218, there is no longer a 30-minute limitation for finding the staging mismatch. The recommended `maxRecordsToCompare` value is now 1000. For more information, see [DAM Staging Mismatch and Resync](../../manage_content/digital_assets/configuration/staging_dam/dam_staging_mismatch.md).

## Digital Experience Early Access Program

### Open Liberty Portlet Container Milestone 2 - Support for extensions and trimming of portlet.xml whitespace

=== "Containers"
    **HCL DX Early Access Program - Milestone 2** is now available. Milestone 2 includes support for extensions such as [global portlet filters](https://www.ibm.com/docs/en/was/8.5.5?topic=container-portlet-filters#cport_portlet_filters__title__3) and trimming of portlet.xml whitespace. For more information, see [HCL Digital Experience Early Access Program](../../early_access/index.md).

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/hcl-dx) section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=) section for more information.
