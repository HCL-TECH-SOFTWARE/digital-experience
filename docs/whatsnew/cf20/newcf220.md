# What's new in CF220

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF220 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

- Web Content Manager - Drafts not exposed with WebDAV for WCM
- Web Content Manager - New query parameter in WCM Multilingual Solution API
- Huddo Boards integration with HCL DX
- HCL Commerce integration with HCL DX
- Notice of deprecation of Textbox.io Rich Text Editor

**Digital Experience 8.5 and 9.0 Versions**

- End of Support Announced for Digital Experience v8.5 and 9
- Change in the application of 9.5 during 8.5/9.0 installation for CF221

**Digital Experience 9.5 Version**

- Web Content Manager - Cherry picking items for bulk update 

**Digital Experience 9.5 Container Version**

- Exporting a user session usage report in CSV format
- New search configuration using OpenSearch
- Digital Asset Management - Access control for nested collections
- Digital Asset Management - Postgres version upgrade
- Added guidance for upgrading a Helm deployment
- New guidance for performance sizing for rendering with maximum throughput on a single node
- Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository
- Notice of deprecation of automated Pod restart on ConfigMap updates

Go to the [HCL Software Support Site/HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959) for the list of software fixes, including Container Update releases.

## All Digital Experience Versions (8.5, 9.0, 9.5)

### Web Content Manager - Drafts not exposed with WebDAV for WCM

=== "Containers"
    In previous versions, drafts are exposed by default. Starting CF220, drafts are not exposed with WebDAV for WCM. This is to avoid issues with drafts having the same name as the live or expired items. For more information, see [WebDAV](../../manage_content/wcm_delivery/webdav/index.md).

=== "On-Premises"
    In previous versions, drafts are exposed by default. Starting CF220, drafts are not exposed with WebDAV for WCM. This is to avoid issues with drafts having the same name as the live or expired items. For more information, see [WebDAV](../../manage_content/wcm_delivery/webdav/index.md).

### Web Content Manager - New query parameter in WCM Multilingual Solution API

=== "Containers"
    The query parameter `updateSource=true` is now available for the [Translated Content API](../../manage_content/wcm_development/wcm_dev_api/wcm_mls_api.md#translated-content-api).

=== "On-Premises"
    The query parameter `updateSource=true` is now available for the [Translated Content API](../../manage_content/wcm_development/wcm_dev_api/wcm_mls_api.md#translated-content-api).

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
    
### DX upgrades starting CF221 automatically applies 9.5 to an 8.5/9.0 installation

=== "On-Premises"
    In CF219, a feature was introduced where [9.5 is automatically applied](../../deployment/install/traditional/cf_install/index.md) to an 8.5 or 9.0 installation if the configuration setting `install_95=true` is set. Note that starting CF221, 9.5 is applied by default unless you set `install_95=false`.

## Digital Experience 9.5 Version

### Web Content Manager - Cherry picking items for bulk update 

(Doc in progress)

## Digital Experience 9.5 Container Version

### Exporting a user session usage report in CSV format

=== "Containers"
    [Exporting the report in CSV format](../../get_started/download/software_licensing_portal/configure_entitlement_checks/export_usage_report.md#exporting-the-user-session-usage-report-in-csv-format) is the default option when exporting the usage report to the data table. In addition, you can also [export the usage report in human readable format](../../get_started/download/software_licensing_portal/configure_entitlement_checks/export_usage_report.md#exporting-the-user-session-usage-report-in-human-readable-format).

### New search configuration using OpenSearch

=== "Containers"
    There is a new search configuration for DX that is based on OpenSearch. The search currently provides the following capabilities: WCM crawling, push API for use with WCM Content Sources, and searching using REST API. For more information, see [Installing search based on OpenSearch](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_install_new_search.md) and [Configuring OpenSearch](../../deployment/manage/container_configuration/configure_opensearch/index.md). 

### Digital Asset Management - Access control for nested collections

=== "Containers"
    Access control for nested collections is enabled in DAM. For more details, see [Nested collection permissions](../../manage_content/digital_assets/usage/managing_dam/dam_access_control.md#nested-collection-permissions). While upgrading to CF220, resources are created for all nested collections. It is recommended to disable DAM Staging during the upgrade and re-enable DAM Staging after both the publisher (source) and the subscriber (target) are on the same CF version.


### Digital Asset Management - Postgres version upgrade

=== "Containers"
    Postgres version 11 is no longer supported. The Postgres version in the persistence node is upgraded from version 11 to version 16. It is recommended to back up your database dump before upgrading to CF220 and later versions. For more details, see [Postgres version upgrade](../../get_started/plan_deployment/container_deployment/dam_persistence_architecture.md#postgres-version-upgrade).


### Added guidance for upgrading a Helm deployment

=== "Containers"
    Information about the [prerequisites](../../deployment/install/container/helm_deployment/update_helm_deployment.md#prerequisites) when upgrading a Helm deployment and the [recommended actions during a CF upgrade for Kubernetes](../../deployment/install/container/helm_deployment/update_helm_deployment.md#recommended-actions-during-a-cf-upgrade) are now available. 

### New guidance for performance sizing for rendering with maximum throughput on a single node

=== "Containers"
    Results of DX sizing tests for rendering with maximum throughput on a single node are now available. This guidance presents the important KPIs and discusses how adjustments to the pod configuration can make significant improvements in the responsiveness of the system. For more information, see the topic [Performance-sizing guidance for rendering with maximum throughput on a single node](../../get_started/plan_deployment/container_deployment/rm_container/dx_performance_small_cfg.md#performance-sizing-guidance-for-rendering-with-maximum-throughput-on-a-single-node).


### Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository

=== "Containers"
    Starting CF216, the Harbor repository is updated with an OCI-based registry and the Helm chart command is updated to be OCI-compliant. Instructions on how to pull Helm charts using OCI commands are now available. For more information, see the Help Center topics [Configure Harbor Helm Repository](../../deployment/install/container/helm_deployment/preparation/get_the_code/configure_harbor_helm_repo.md) and [Download and Deploy from HCL Harbor Repository](../../get_started/download/harbor_container_registry.md).

###  Notice of deprecation of automated Pod restart on ConfigMap updates

=== "Containers"
     Beginning with CF221, Runtime Controller will not restart Pods automatically when a ConfigMap is changed manually. For production deployments, always use the Helm custom values and `helm upgrade` to change configuration. Using Helm upgrade for configuration changes triggers the appropriate restart processes. For development and testing when a ConfigMap is changed, you have to restart the appropriate Pod manually. For more information, see the Help Center topic [Container Configuration](../../deployment/manage/container_configuration/index.md#rollout-of-configuration-changes).

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/hcl-dx) section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=) section for more information.
