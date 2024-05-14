# What's new in CF220

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF220 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

- Web Content Manager - Drafts not exposed with WebDAV for WCM
- Huddo Boards integration with HCL DX
- HCL Commerce integration with HCL DX
- Notice of deprecation of Textbox.io Rich Text Editor

**Digital Experience 8.5 and 9.0 Versions**

- End of Support Announced for Digital Experience v8.5 and 9

**Digital Experience 9.5 Version**


**Digital Experience 9.5 Container Version**

- Exporting a user session usage report in CSV format
- New search configuration using OpenSearch
- New guidance for performance sizing for rendering with maximum throughput on a single node
- Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository

Go to the [HCL Software Support Site/HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959) for the list of software fixes, including Container Update releases.

## All Digital Experience Versions (8.5, 9.0, 9.5)

## Web Content Manager - Drafts not exposed with WebDAV for WCM

=== "Containers"
    Starting CF220, drafts are not exposed with WebDAV for WCM. This is to avoid issues with drafts having the same name as the live or expired items. For more information, see [WebDAV](../../manage_content/wcm_delivery/webdav/index.md).

=== "On-Premises"
    Starting CF220, drafts are not exposed with WebDAV for WCM. This is to avoid issues with drafts having the same name as the live or expired items. For more information, see [WebDAV](../../manage_content/wcm_delivery/webdav/index.md).

### Huddo Boards integration with HCL DX

=== "Containers"
    [Huddo Boards](https://www.huddo.com/boards) is a team collaboration tool that you can now use in an HCL DX environment. For installation and configuration instructions, see [Integrating Huddo Boards with HCL DX](../../extend_dx/integration/huddo_boards/index.md).

=== "On-Premises"
    [Huddo Boards](https://www.huddo.com/boards) is a team collaboration tool that you can now use in an HCL DX environment. For installation and configuration instructions, see [Integrating Huddo Boards with HCL DX](../../extend_dx/integration/huddo_boards/index.md).

### HCL Commerce integration with HCL DX

=== "Containers"
    Documentation for integrating HCL Commerce with HCL DX is now available. The three integration patterns are discussed in [Integrating HCL Commerce with HCL Digital Experience](../../extend_dx/integration/commerce.md).

=== "On-Premises"
    Documentation for integrating HCL Commerce with HCL DX is now available. The three integration patterns are discussed in [Integrating HCL Commerce with HCL Digital Experience](../../extend_dx/integration/commerce.md).

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

## Digital Experience 9.5 Container Version

### Exporting a user session usage report in CSV format

=== "Containers"
    [Exporting the report in CSV format](../../get_started/download/software_licensing_portal/configure_entitlement_checks/export_usage_report.md#exporting-the-user-session-usage-report-in-csv-format) is the default option when exporting the usage report to the data table. In addition, you can also [export the usage report in human readable format](../../get_started/download/software_licensing_portal/configure_entitlement_checks/export_usage_report.md#exporting-the-user-session-usage-report-in-human-readable-format).

### New search configuration using OpenSearch

=== "Containers"
    There is a new search configuration for DX that is based on OpenSearch. The search currently provides the following capabilities: WCM crawling, push API for use with WCM Content Sources, and searching using REST API. For more information, see [](). 

### New guidance for performance sizing for rendering with maximum throughput on a single node

=== "Containers"
    Results of DX sizing tests for rendering with maximum throughput on a single node are now available. This guidance presents the important KPIs and discusses how adjustments to the pod configuration can make significant improvements in the responsiveness of the system. For more information, see the topic [Performance-sizing guidance for rendering with maximum throughput on a single node](../../get_started/plan_deployment/container_deployment/rm_container/dx_performance_small_cfg.md#performance-sizing-guidance-for-rendering-with-maximum-throughput-on-a-single-node).


### Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository

=== "Containers"
    Starting CF216, the Harbor repository is updated with an OCI-based registry and the Helm chart command is updated to be OCI-compliant. Instructions on how to pull Helm charts using OCI commands are now available. For more information, see the Help Center topics [Configure Harbor Helm Repository](../../deployment/install/container/helm_deployment/preparation/get_the_code/configure_harbor_helm_repo.md) and [Download and Deploy from HCL Harbor Repository](../../get_started/download/harbor_container_registry.md).

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/hcl-dx) section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=) section for more information.