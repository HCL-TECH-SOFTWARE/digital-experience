# What's new in CF226

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF226 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

- MyHCLSoftware delivery portal
- Presentation Designer - Canvas settings
- DXClient - New limitations for LiveSync
- New section for How-to articles

**Digital Experience 8.5 and 9.0 Versions**

- Extended Support option now available for DX versions 8.5 and 9.0
- Automatically apply 9.5 from a later CF installation

**Digital Experience 9.5 Container Version**

- RingAPI - Extending the trust store
- People Service and Search V2 integration
- Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository
- Removal of automated Pod restart on ConfigMap updates

Go to the [HCL Software Support Site/HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959){target="_blank"} for the list of software fixes, including Container Update releases.

## All Digital Experience Versions (8.5, 9.0, 9.5)

### MyHCLSoftware delivery portal

=== "Containers"
    HCL DX software is now available through the new [MyHCLSoftware portal](https://my.hcltechsw.com/){target="_blank"} for customers licensed for the HCL Digital Experience Compose v9.5 offering. This in parallel to the existing HCL Software License Portal delivered in FlexNet. For more information, see the topics [HCL Digital Experience Cloud Native 9.5 entitlement checks](../../get_started/download/software_licensing_portal/configure_entitlement_checks/index.md), [Entitlement checking in the My HCLSoftware delivery portal](../../get_started/download/software_licensing_portal/configure_entitlement_checks/configuring_mhs.md), [Entitlement checking in the My HCLSoftware delivery portal](../../get_started/download/software_licensing_portal/configure_entitlement_checks/flexnet_license_and_delivery.md), and [](../../get_started/download/software_licensing_portal/index.md).

=== "On-Premises"
    HCL DX software is now available through the new [MyHCLSoftware portal](https://my.hcltechsw.com/){target="_blank"} for customers licensed for the HCL Digital Experience Compose v9.5 offering. This in parallel to the existing HCL Software License Portal delivered in FlexNet. For more information, see the topics [HCL Digital Experience Cloud Native 9.5 entitlement checks](../../get_started/download/software_licensing_portal/configure_entitlement_checks/index.md), [Entitlement checking in the My HCLSoftware delivery portal](../../get_started/download/software_licensing_portal/configure_entitlement_checks/configuring_mhs.md), [Entitlement checking in the My HCLSoftware delivery portal](../../get_started/download/software_licensing_portal/configure_entitlement_checks/flexnet_license_and_delivery.md), and [](../../get_started/download/software_licensing_portal/index.md).

### Presentation Designer - Canvas settings

=== "Containers"
    Canvas settings are now available in Presentation Designer. With these settings, you can configure various aspects of the presentation such as canvas dimensions, direction, zoom level, and orientation. For more information, see []() and []().

=== "On-Premises"
    Canvas settings are now available in Presentation Designer. With these settings, you can configure various aspects of the presentation such as canvas dimensions, direction, zoom level, and orientation. For more information, see []() and []().

### DXClient - New limitations for LiveSync

=== "Containers"
    New limitations are documented for using LiveSync for [Themes](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md#themes) and [WCM Design Library](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md#wcm-design-library).

=== "On-Premises"
    New limitations are documented for using LiveSync for [Themes](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md#themes) and [WCM Design Library](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md#wcm-design-library).

### New section for How-to articles
<No doc yet>

## Digital Experience 8.5 and 9.0 Versions

### Extended Support option now available for DX versions 8.5 and 9.0 

=== "On-Premises"
    HCLSoftware announced End of Support for HCL Digital Experience versions 8.5 and 9, effective June 30, 2025. Customers are encouraged to upgrade to HCL Digital Experience version 9.5, released in a continuous delivery model. Refer to the [Deprecated features](../deprecated_features.md) page for more information.
    
    To accommodate customers who might be unable to update from DX versions 8.5 and 9.0 to DX version 9.5 by that date, customers can sign up for Extended Support until June 30, 2025. For more information, see the article [Starting on August 30, 2024, Extended Support will be available for HCL Digital Experience V8.5.x and 9](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0115794){target="_blank"}. Extended support will be offered from June 30, 2025 until June 30, 2026.
    
### Automatically apply 9.5 from a later CF installation

=== "On-Premises"
    In CF219, a feature was introduced where [DX version 9.5 is automatically applied](../../deployment/install/traditional/cf_install/index.md) to an 8.5 or 9.0 installation if the configuration setting `install_95=true` is set. Note that a later CF might apply 9.5 by default unless you set `install_95=false`. This statement is not a guarantee of future releases or their features.

## Digital Experience 9.5 Container Version

### RingAPI - Extending the trust store

=== "Containers"
    You can now add additional certificate authorities to the trust store of RingAPI. This enables support for self-signed certificates in hybrid deployments. For more information, see [Adding additional CA to the DAM or RingAPI trust store](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-additonal-ca.md).

### People Service and Search V2 integration
<No doc yet>

### Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository

=== "Containers"
    Starting CF216, the Harbor repository is updated with an OCI-based registry and the Helm chart command is updated to be OCI-compliant. Instructions on how to pull Helm charts using OCI commands are now available. For more information, see the Help Center topics [Configure Harbor Helm Repository](../../deployment/install/container/helm_deployment/preparation/get_the_code/configure_harbor_helm_repo.md) and [Download and Deploy from HCL Harbor Repository](../../get_started/download/harbor_container_registry.md).

### Removal of automated Pod restart on ConfigMap updates

=== "Containers"
    Runtime Controller triggering Pod restarts for [direct configuration changes](../../deployment/manage/container_configuration/index.md#rollout-of-configuration-changes) in ConfigMaps is removed. You must restart the appropriate Pods manually to apply the changes made to the ConfigMaps for testing configurations. For more information, see [Deprecated features](../deprecated_features.md).

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/hcl-dx){target="_blank"} section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=){target="_blank"} section for more information.