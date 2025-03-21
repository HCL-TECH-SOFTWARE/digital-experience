# What's new in CF225

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF225 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

- Adjustment of seedlists for access control changes
- DXClient - LiveSync enabled for Presentation Templates

**Digital Experience 8.5 and 9.0 Versions**

- Extended Support option now available for DX versions 8.5 and 9.0
- Automatically apply 9.5 from a later CF installation

**Digital Experience 9.5 Container Version**

- Search V2 - Styling customizations
- Custom `liveness` probe target value
- New sizing guidance for rendering in a large configuration
- Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository
- Removal of automated Pod restart on ConfigMap updates

Go to the [HCL Software Support Site/HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959){target="_blank"} for the list of software fixes, including Container Update releases.

## All Digital Experience Versions (8.5, 9.0, 9.5)

### Adjustment of seedlists for access control changes

=== "Containers"
    A new option is available where you can have the seedlist return items affected by library access control changes. To enable this feature, set ```seedlistUpdateLibrariesForAccessControl=true``` in `WCM WCMConfigService`. For more information, see [Crawling web content with search seedlists](../../build_sites/search/crawling_webcontent_seedbase/index.md).

=== "On-Premises"
    A new option is available where you can have the seedlist return items affected by library access control changes. To enable this feature, set ```seedlistUpdateLibrariesForAccessControl=true``` in `WCM WCMConfigService`. For more information, see [Crawling web content with search seedlists](../../build_sites/search/crawling_webcontent_seedbase/index.md).

### DXClient - LiveSync enabled for Presentation Templates

=== "Containers"
    LiveSync now supports Presentation Templates. For more information, see [DXClient](../../extend_dx/development_tools/dxclient/index.md) and [LiveSync](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md).

=== "On-Premises"
    LiveSync now supports Presentation Templates. For more information, see [DXClient](../../extend_dx/development_tools/dxclient/index.md) and [LiveSync](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md).

## Digital Experience 8.5 and 9.0 Versions

### Extended Support option now available for DX versions 8.5 and 9.0 

=== "On-Premises"
    HCLSoftware announced End of Support for HCL Digital Experience versions 8.5 and 9, effective June 30, 2025. Customers are encouraged to upgrade to HCL Digital Experience version 9.5, released in a continuous delivery model. Refer to the [Deprecated features](../deprecated_features.md) page for more information.
    
    To accommodate customers who might be unable to update from DX versions 8.5 and 9.0 to DX version 9.5 by that date, customers can sign up for Extended Support until June 30, 2025. For more information, see the article [Starting on August 30, 2024, Extended Support will be available for HCL Digital Experience V8.5.x and 9](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0115794){target="_blank"}. Extended support will be offered from June 30, 2025 until June 30, 2026.
    
### Automatically apply 9.5 from a later CF installation

=== "On-Premises"
    In CF219, a feature was introduced where [DX version 9.5 is automatically applied](../../deployment/install/traditional/cf_install/index.md) to an 8.5 or 9.0 installation if the configuration setting `install_95=true` is set. Note that a later CF might apply 9.5 by default unless you set `install_95=false`. This statement is not a guarantee of future releases or their features.

## Digital Experience 9.5 Container Version

### Search V2 - Styling customizations

=== "Containers"
    You can customize Search V2 by providing custom CSS modules. For more information, see [Customizations for Search V2](../../build_sites/search_v2/customizations.md).

### Custom `liveness` probe target value

=== "Containers"
    In previous releases, the `liveness` probe target values are fixed because they are specific to the application and should not be changed. Starting CF225, Core provides a `customProbeURL` value that allows you to configure the `liveness` probe target value. If the `customProbeURL` is empty, the `liveness` probe target value for Core is `"/ibm/console"` by default. For more information, see [Probes configuration in values.yaml file](../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/probes_configuration.md).

### New sizing guidance for rendering in a large configuration

=== "Containers"
    Results of DX sizing tests for rendering in a large Kubernetes configuration are now available. This guidance presents the key performance indicators (KPIs) and discusses how adjustments to the pod configuration can make improvements in the responsiveness of the system. For more information, see the topic [Sizing guidance for rendering in a large-sized Kubernetes configuration](../../guide_me/performance_tuning/kubernetes/rendering_large_config.md).

### Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository

=== "Containers"
    Starting CF216, the Harbor repository is updated with an OCI-based registry and the Helm chart command is updated to be OCI-compliant. Instructions on how to pull Helm charts using OCI commands are now available. For more information, see the Help Center topics [Configure Harbor Helm Repository](../../deployment/install/container/helm_deployment/preparation/get_the_code/configure_harbor_helm_repo.md) and [Download and Deploy from HCL Harbor Repository](../../get_started/download/harbor_container_registry.md).

### Removal of automated Pod restart on ConfigMap updates

=== "Containers"
    Runtime Controller triggering Pod restarts for [direct configuration changes](../../deployment/manage/container_configuration/index.md#rollout-of-configuration-changes) in ConfigMaps is removed. You must restart the appropriate Pods manually to apply the changes made to the ConfigMaps for testing configurations. For more information, see [Deprecated features](../deprecated_features.md).
    
## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/hcl-dx){target="_blank"} section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=){target="_blank"} section for more information.
