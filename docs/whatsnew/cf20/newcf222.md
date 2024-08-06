# What's new in CF222

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF222 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

- Updated documentation for creating categories by using external URLs
- Updated documentation for WAB filters
- Updated documentation for generating WCM search URLs
- Notice of deprecation of Textbox.io Rich Text Editor

**Digital Experience 8.5 and 9.0 Versions**

- End of Support announced for Digital Experience v8.5 and 9
- Automatically apply 9.5 from CF223 installation

**Digital Experience 9.5 Container Version**

- Values moved from incubator to the main section of `values.yaml`
- DAM Indexing - Updated API endpoints
- New sizing guidance for rendering in a medium configuration
- Documentation for using Logstash to push pod logs to OpenSearch
- Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository
- Notice of deprecation of customized OpenLDAP container starting CF223
- Removal of automated Pod restart on ConfigMap updates

Go to the [HCL Software Support Site/HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959) for the list of software fixes, including Container Update releases.

## All Digital Experience Versions (8.5, 9.0, 9.5)

### Updated documentation for creating categories by using external URLs

=== "Containers"
    The topic [Creating categories by using external URLs](../../build_sites/create_sites/site_prep_content_author/prep_site_toolbar/customizing_applications_palette/epc_using_external_urls.md) is updated to contain instructions on how to create portlet entity feeds.

=== "On-Premises"
    The topic [Creating categories by using external URLs](../../build_sites/create_sites/site_prep_content_author/prep_site_toolbar/customizing_applications_palette/epc_using_external_urls.md) is updated to contain instructions on how to create portlet entity feeds.

### Updated documentation for WAB filters

=== "Containers"
    The topic [Content provider policy requests and responses](../../extend_dx/integration/wab/wab/h_wab_response.md#filters) is updated to include a sample code of a Web Application Bridge (WAB) filter and instructions on how to add a filter.

=== "On-Premises"
    The topic [Content provider policy requests and responses](../../extend_dx/integration/wab/wab/h_wab_response.md#filters) is updated to include a sample code of a Web Application Bridge (WAB) filter and instructions on how to add a filter.

### Updated documentation for generating WCM Search URLs

=== "Containers"
    The topic [HCL Web Content Manager Support Tools](../../deployment/manage/troubleshooting/wcm_support_tools.md#generate-wcm-search-url) is updated to include steps on how to generate a WCM search URL to be used within a content source. Note that Administrator access is required to generate a WCM Search URL.

=== "On-Premises"
    The topic [HCL Web Content Manager Support Tools](../../deployment/manage/troubleshooting/wcm_support_tools.md#generate-wcm-search-url) is updated to include steps on how to generate a WCM search URL to be used within a content source. Note that Administrator access is required to generate a WCM Search URL.

### Notice of deprecation of Textbox.io Rich Text Editor 

=== "Containers"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and End of Support (EOS) is on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

=== "On-Premises"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and End of Support (EOS) is on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

## Digital Experience 8.5 and 9.0 Versions

### End of Support announced for Digital Experience v8.5 and 9

=== "On-Premises"
    On June 30, 2023, HCL Software announced End of Support for HCL Digital Experience versions 8.5 and 9, effective June 30, 2025. Customers are encouraged to upgrade to HCL Digital Experience version 9.5, released in a continuous delivery model. Refer to the [Deprecated features](../deprecated_features.md) page for more information.
    
### Automatically apply 9.5 from CF223 installation

=== "On-Premises"
    In CF219, a feature was introduced where [DX version 9.5 is automatically applied](../../deployment/install/traditional/cf_install/index.md) to an 8.5 or 9.0 installation if the configuration setting `install_95=true` is set. Note that starting with the next DX release, CF223, 9.5 is applied by default unless you set `install_95=false`.

## Digital Experience 9.5 Container Version

### Values moved from incubator to the main section of `values.yaml`

=== "Containers"
    Values for heartbeat intervals and threshold times are moved from the incubator to the main section. If those values are changed in your [`values.yaml` or custom `values.yaml` file](../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configuration.md#helm-chart-valuesyaml), adjust them accordingly. For more information, see [Cleanup and Rendition Version Regeneration](../../manage_content/digital_assets/configuration/rendition_version_regeneration_and_cleanup.md).

### DAM Indexing - Updated API endpoints 

=== "Containers" 
    The API endpoint used for [creating the `damContentSourceID`](../../manage_content/digital_assets/configuration/dam_indexing/configure_dam_indexing.md#configuring-dam-indexing) is now `/dx/api/search/v2/contentsources` while the endpoint for [starting the reindexing process](../../manage_content/digital_assets/configuration/dam_indexing/using_dam_indexing.md#reindexing) is `/dx/api/dam/v1/reindex`. 

### New sizing guidance for rendering in a medium configuration

=== "Containers"    
    Results of DX sizing tests for rendering in a Kubernetes medium configuration are now available. This guidance presents the key performance indicators (KPIs) and discusses how adjustments to the pod configuration can make improvements in the responsiveness of the system. For more information, see the topic [Sizing guidance for rendering in a Kubernetes medium configuration](../../guide_me/performance_tuning/kubernetes/rendering_medium_config.md).

### Documentation for using Logstash to push pod logs to OpenSearch

=== "Containers"
    As applications scale, managing Kubernetes logs is important for monitoring, debugging, and compliance. The new topic [Using Logstash to push pod logs to OpenSearch]() outlines the steps for configuring Logstash and Filebeat so that Kubernetes pod logs are forwarded to OpenSearch, an open source search and analytics engine. 

### Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository

=== "Containers"
    Starting CF216, the Harbor repository is updated with an OCI-based registry and the Helm chart command is updated to be OCI-compliant. Instructions on how to pull Helm charts using OCI commands are now available. For more information, see the Help Center topics [Configure Harbor Helm Repository](../../deployment/install/container/helm_deployment/preparation/get_the_code/configure_harbor_helm_repo.md) and [Download and Deploy from HCL Harbor Repository](../../get_started/download/harbor_container_registry.md).
    
### Notice of deprecation of customized OpenLDAP container starting CF223

=== "Containers"
    Starting CF223, HCL DX will no longer build and ship its custom OpenLDAP container and will instead use an open source container. By using the robust and well-maintained Bitnami&copy; OpenLDAP image, HCL DX can focus on delivering enhanced features and support without the overhead of maintaining its customized container. This shift is to provide you with more reliable and up-to-date solutions for your test environments. The new alternative, Bitnami&copy;, will be provided but will not ship with the release. Sample LDIF (LDAP data interchange format) files for your OpenLDAP configuration will also be available.
    
### Removal of automated Pod restart on ConfigMap updates

=== "Containers"
    Runtime Controller triggering Pod restarts for [direct configuration changes](../../deployment/manage/container_configuration/index.md#rollout-of-configuration-changes) in ConfigMaps is removed. You must restart the appropriate Pods manually to apply the changes made to the ConfigMaps for testing configurations. For more information, see [Deprecated features](../deprecated_features.md).

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/hcl-dx){target="_blank"} section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=){target="_blank"} section for more information.
