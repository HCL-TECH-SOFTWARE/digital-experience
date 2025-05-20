# What's new in CF226 

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF226 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

- My HCLSoftware delivery portal
- Presentation Designer - Canvas settings
- DXClient - TLS certificate validation
- DXClient - New limitations for LiveSync
- New section for How-to articles

**Digital Experience 8.5 and 9.0 Versions**

- Extended Support option now available for DX versions 8.5 and 9.0
- Automatically apply 9.5 from a later CF installation

**Digital Experience 9.5 Container Version**

- WAS and JDK versions
- RingAPI - Extending the trust store
- DAM - New parameter for access control
- People Service and Search V2 integration
- Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository
- Removal of automated Pod restart on ConfigMap updates

Go to the [HCL Software Support Site/HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959){target="_blank"} for the list of software fixes, including Container Update releases.

## All Digital Experience Versions (8.5, 9.0, 9.5)

### My HCLSoftware delivery portal

=== "Containers"
    HCL DX software is now available through the new [My HCLSoftware portal](https://my.hcltechsw.com/){target="_blank"} for customers licensed for the HCL Digital Experience v9.5 offering. This is in parallel to the existing HCL Software License Portal delivered in FlexNet, through June 30, 2025. For more information, refer to the following knowledge article and help center topics:

    - [HCL Digital Experience offerings are now available for download from the MyHCLSoftware portal](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0120373){target="_blank"}
    - [Downloading and installing HCL DX from a software licensing portal](../../get_started/download/software_licensing_portal/index.md)
    - [HCL Digital Experience Cloud Native 9.5 entitlement checks](../../get_started/download/software_licensing_portal/configure_entitlement_checks/index.md)
    - [Entitlement checking in the My HCLSoftware delivery portal](../../get_started/download/software_licensing_portal/configure_entitlement_checks/mhs_license_and_delivery.md)
    - [Entitlement checking in the FlexNet software delivery portal](../../get_started/download/software_licensing_portal/configure_entitlement_checks/flexnet_license_and_delivery.md)

=== "On-Premises"
    HCL DX software is now available through the new [My HCLSoftware portal](https://my.hcltechsw.com/){target="_blank"} for customers licensed for the HCL Digital Experience v9.5 offering. This is in parallel to the existing HCL Software License Portal delivered in FlexNet, through June 30, 2025. For more information, refer to the following knowledge article and help center topics:

    - [HCL Digital Experience offerings are now available for download from the MyHCLSoftware portal](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0120373){target="_blank"}
    - [Downloading and installing HCL DX from a software licensing portal](../../get_started/download/software_licensing_portal/index.md)
    - [HCL Digital Experience Cloud Native 9.5 entitlement checks](../../get_started/download/software_licensing_portal/configure_entitlement_checks/index.md)
    - [Entitlement checking in the My HCLSoftware delivery portal](../../get_started/download/software_licensing_portal/configure_entitlement_checks/mhs_license_and_delivery.md)
    - [Entitlement checking in the FlexNet software delivery portal](../../get_started/download/software_licensing_portal/configure_entitlement_checks/flexnet_license_and_delivery.md)

### Presentation Designer - Canvas settings

=== "Containers"
    Canvas settings are now available in Presentation Designer. With these settings, you can configure various aspects of the presentation such as canvas dimensions, direction, zoom level, and orientation. For more information, see [Accessing the Presentation Designer](../../manage_content/wcm_authoring/presentation_designer/access/index.md) and [Canvas settings in Presentation Designer](../../manage_content/wcm_authoring/presentation_designer/usage/canvas_settings.md).

=== "On-Premises"
    Canvas settings are now available in Presentation Designer. With these settings, you can configure various aspects of the presentation such as canvas dimensions, direction, zoom level, and orientation. For more information, see [Accessing the Presentation Designer](../../manage_content/wcm_authoring/presentation_designer/access/index.md) and [Canvas settings in Presentation Designer](../../manage_content/wcm_authoring/presentation_designer/usage/canvas_settings.md).

### DXClient - TLS certificate validation

=== "Containers"
    To improve security and maintain best practices in development and production environments, DXClient no longer ignores certificates that cannot be properly validated when using Transport Layer Security (TLS) connections. You can validate and trust custom certificates such as self-signed or third-party CAs without entirely disabling validation. For more information, see [Configuring TLS certificate validation for secure connections](../../extend_dx/development_tools/dxclient/index.md#configuring-tls-certificate-validation-for-secure-connections).

=== "On-Premises"
    To improve security and maintain best practices in development and production environments, DXClient no longer ignores certificates that cannot be properly validated when using Transport Layer Security (TLS) connections. You can validate and trust custom certificates such as self-signed or third-party CAs without entirely disabling validation. For more information, see [Configuring TLS certificate validation for secure connections](../../extend_dx/development_tools/dxclient/index.md#configuring-tls-certificate-validation-for-secure-connections).

### DXClient - New limitations for LiveSync

=== "Containers"
    New limitations are documented for using LiveSync. For [Themes](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md#themes), if files are deleted from the DX server while the LiveSync process is in progress, the files will not be restored from the local system. For [WCM Design Library](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md#wcm-design-library), various scenarios and their limitations for concurrent users are added. Steps on how to resolve these limitations to the LiveSync process are also provided.

=== "On-Premises"
    New limitations are documented for using LiveSync. For [Themes](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md#themes), if files are deleted from the DX server while the LiveSync process is in progress, the files will not be restored from the local system. For [WCM Design Library](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md#wcm-design-library), various scenarios and their limitations for concurrent users are added. Steps on how to resolve these limitations to the LiveSync process are also provided.

### New section for How-to articles

=== "Containers"
    There is a new section in the DX Help Center containing How-to articles. For more information, see [How-to articles](../../guide_me/howto/index.md).

=== "On-Premises"
    There is a new section in the DX Help Center containing How-to articles. For more information, see [How-to articles](../../guide_me/howto/index.md).

## Digital Experience 8.5 and 9.0 Versions

### Extended Support option now available for DX versions 8.5 and 9.0 

=== "On-Premises"
    HCLSoftware announced End of Support for HCL Digital Experience versions 8.5 and 9, effective June 30, 2025. Customers are encouraged to upgrade to HCL Digital Experience version 9.5, released in a continuous delivery model. Refer to the [Deprecated features](../deprecated_features.md) page for more information.

    To accommodate customers who might be unable to update from DX versions 8.5 and 9.0 to DX version 9.5 by that date, customers can sign up for Extended Support until June 30, 2025. For more information, see the article [Starting on August 30, 2024, Extended Support will be available for HCL Digital Experience V8.5.x and 9](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0115794){target="_blank"}. Extended support will be offered from June 30, 2025 until June 30, 2026.
    
### Automatically apply 9.5 from a later CF installation

=== "On-Premises"
    In CF219, a feature was introduced where [DX version 9.5 is automatically applied](../../deployment/install/traditional/cf_install/index.md) to an 8.5 or 9.0 installation if the configuration setting `install_95=true` is set. Note that a later CF might apply 9.5 by default unless you set `install_95=false`. This statement is not a guarantee of future releases or their features.

## Digital Experience 9.5 Container Version

### WAS and JDK versions

=== "Containers"
    HCL DX 9.5 CF226 contains the following:

    - WebSphere Application Server 9.0.5.22
    - Java Development Kit 8.0.8.35

### RingAPI - Extending the trust store

=== "Containers"
    You can now add additional certificate authorities to the trust store of RingAPI. This enables support for self-signed certificates in hybrid deployments. For more information, see [Adding additional CA to the DAM or RingAPI trust store](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-additonal-ca.md).

### DAM - New parameter for access control

=== "Containers"
    New parameter `allowEditorToCreateCollections` is available to enable or disable creating collections for users assigned the Editor role. By default, this parameter is set to `true`. For more information, see [DAM Access Control Management](../../manage_content/digital_assets/usage/managing_dam/dam_access_control.md#dam-access-control-in-detail).

### People Service and Search V2 integration

=== "Containers"
    You can integrate [People Service](../../extend_dx/integration/people_service/index.md) with [Search V2](../../build_sites/search_v2/index.md) to enhance user discoverability and search performance. With this integration, you can access user profile data with real-time synchronization. For more information, see [People Service and Search V2 Integration](../../extend_dx/integration/people_service/integration/people_service_search_v2_integration.md).

### Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository

=== "Containers"
    Starting CF216, the Harbor repository is updated with an OCI-based registry and the Helm chart command is updated to be OCI-compliant. Instructions on how to pull Helm charts using OCI commands are now available. For more information, see the Help Center topics [Configure Harbor Helm Repository](../../deployment/install/container/helm_deployment/preparation/get_the_code/configure_harbor_helm_repo.md) and [Download and Deploy from HCL Harbor Repository](../../get_started/download/harbor_container_registry.md).

### Removal of automated Pod restart on ConfigMap updates

=== "Containers"
    Runtime Controller triggering Pod restarts for [direct configuration changes](../../deployment/manage/container_configuration/index.md#rollout-of-configuration-changes) in ConfigMaps is removed. You must restart the appropriate Pods manually to apply the changes made to the ConfigMaps for testing configurations. For more information, see [Deprecated features](../deprecated_features.md).

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/hcl-dx){target="_blank"} section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=){target="_blank"} section for more information.