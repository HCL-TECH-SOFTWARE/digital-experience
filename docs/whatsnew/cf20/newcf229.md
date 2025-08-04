# What's new in CF229

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF229 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

- My HCLSoftware delivery portal
- Blueprint design system
- Presentation Designer - Default and Override stylesheets now available
- TinyMCE Enhanced Rich Text Editor - Additional configuration settings now available
- User Session Reporting Tool - Removed `-productFeatureIdName` as a command-line parameter
- Notice of deprecation of the CKEditor Rich Text Editor
- Notice of deprecation of the Woodburn Studio demo site

**Digital Experience 8.5 and 9.0 Versions**

- Extended Support option now available for DX versions 8.5 and 9.0
- Automatically apply 9.5 from a later CF installation

**Digital Experience 9.5 Container Version**

- DAM - Cancel ongoing uploads through the progress bar
- DAM - Collection sorting
- Integrating HCL Leap and HCL Volt MX Foundry with HCL DX
- Search V2 Authoring - Deleting items from search results now available
- Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository
- Removal of automated Pod restart on ConfigMap updates
- WAS, JDK, and iFix versions

Go to the [HCL Software Support Site/HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959){target="_blank"} for the list of software fixes, including Container Update releases.

## All Digital Experience Versions (8.5, 9.0, 9.5)

### My HCLSoftware delivery portal

=== "Containers"
    HCL DX software is now available through the new [My HCLSoftware portal](https://my.hcltechsw.com/){target="_blank"} for customers licensed for the HCL Digital Experience v9.5 offering. This is in parallel to the existing HCL Software License Portal delivered in FlexNet, through June 30, 2025. For more information, refer to the following knowledge article and help center topics:

    - [HCL Digital Experience offerings are now available for download from the MyHCLSoftware portal](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0120373){target="_blank"}
    - [Downloading and installing HCL DX from a software licensing portal](../../get_started/download/software_licensing_portal/index.md)
    - [HCL Digital Experience Cloud Native 9.5 entitlement checks](../../get_started/download/software_licensing_portal/configure_entitlement_checks/index.md)
    - [Entitlement checking in the My HCLSoftware delivery portal](../../get_started/download/software_licensing_portal/configure_entitlement_checks/mhs_license_and_delivery.md)

=== "On-Premises"
    HCL DX software is now available through the new [My HCLSoftware portal](https://my.hcltechsw.com/){target="_blank"} for customers licensed for the HCL Digital Experience v9.5 offering. This is in parallel to the existing HCL Software License Portal delivered in FlexNet, through June 30, 2025. For more information, refer to the following knowledge article and help center topics:

    - [HCL Digital Experience offerings are now available for download from the MyHCLSoftware portal](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0120373){target="_blank"}
    - [Downloading and installing HCL DX from a software licensing portal](../../get_started/download/software_licensing_portal/index.md)
    - [HCL Digital Experience Cloud Native 9.5 entitlement checks](../../get_started/download/software_licensing_portal/configure_entitlement_checks/index.md)
    - [Entitlement checking in the My HCLSoftware delivery portal](../../get_started/download/software_licensing_portal/configure_entitlement_checks/mhs_license_and_delivery.md)

### Blueprint design system

=== "Containers"
    Blueprint is a design system aimed at accelerating the implementation of new sites in the HCL DX platform. The Blueprint design system will be automatically installed as part of this CF and future release. For more information, refer to the [Blueprint](../../build_sites/blueprint.md) page or visit the [HCL DX Blueprint Storybook](https://opensource.hcltechsw.com/dx-blueprint-storybook/){target="_blank"}.

=== "On-Premises"
    Blueprint is a design system aimed at accelerating the implementation of new sites in the HCL DX platform. The Blueprint design system will be automatically installed as part of this CF and future release. For more information, refer to the [Blueprint](../../build_sites/blueprint.md) page or visit the [HCL DX Blueprint Storybook](https://opensource.hcltechsw.com/dx-blueprint-storybook/){target="_blank"}.

### Presentation Designer - Default and Override stylesheets now available

=== "Containers"
    Default and Override stylesheets have been added to Presentation Designer. The Default stylesheet provides a foundational set of styles that are automatically applied to various elements while the Override stylesheet allows users to customize styles for specific elements. These stylesheets support the handling of type selectors and class selectors. For more information, refer to [Default and Override stylesheets in Presentation Designer](../../manage_content/wcm_authoring/presentation_designer/usage/default_and_override_stylesheet.md).

=== "On-Premises"
    Default and Override stylesheets have been added to Presentation Designer. The Default stylesheet provides a foundational set of styles that are automatically applied to various elements while the Override stylesheet allows users to customize styles for specific elements. These stylesheets support the handling of type selectors and class selectors. For more information, refer to [Default and Override stylesheets in Presentation Designer](../../manage_content/wcm_authoring/presentation_designer/usage/default_and_override_stylesheet.md).

### TinyMCE Enhanced Rich Text Editor - Additional configuration settings now available

=== "Containers"
    Additional configuration options for web content in-place editing are now available for the TinyMCE Enhanced Rich Text Editor. Currently, the following TinyMCE configuration options are supported: `valid_children`, `toolbar`, and `toolbar_mode`. The value must be in an array format. For more information, refer to [Using a custom TinyMCE editor configuration with in-place editing](../../manage_content/wcm_configuration/cfg_webcontent_auth_env/wcm_config_ephox_custom.md#using-a-custom-tinymce-editor-configuration-with-in-place-editing).

=== "On-Premises"
    Additional configuration options for web content in-place editing are now available for the TinyMCE Enhanced Rich Text Editor. Currently, the following TinyMCE configuration options are supported: `valid_children`, `toolbar`, and `toolbar_mode`. The value must be in an array format. For more information, refer to [Using a custom TinyMCE editor configuration with in-place editing](../../manage_content/wcm_configuration/cfg_webcontent_auth_env/wcm_config_ephox_custom.md#using-a-custom-tinymce-editor-configuration-with-in-place-editing).

### User Session Reporting Tool - Removed `-productFeatureIdName` as a command-line parameter

=== "Containers"
    In the User Session Reporting Tool, `productFeatureIdName` has been removed as a command-line parameter. The `productFeatureId` will now be read from the License Manager’s environment variable instead of being passed in the command. For more information, refer to [Configuring MHS file-based session reporting](../../get_started/download/software_licensing_portal/configure_entitlement_checks/configuring_mhs_file_base_session_reporting.md).

=== "On-Premises"
     In the User Session Reporting Tool, `productFeatureIdName` has been removed as a command-line parameter. The `productFeatureId` will now be read from the License Manager’s environment variable instead of being passed in the command. For more information, refer to [Configuring MHS file-based session reporting](../../get_started/download/software_licensing_portal/configure_entitlement_checks/configuring_mhs_file_base_session_reporting.md).

### Notice of deprecation of the CKEditor Rich Text Editor

=== "Containers"
    The CKEditor Rich Text Editor component in HCL DX will be deprecated on August 05, 2025 and will reach End of Support (EOS) on August 04, 2026. For more information, refer to [Deprecated features](../deprecated_features.md).

=== "On-Premises"
    The CKEditor Rich Text Editor component in HCL DX will be deprecated on August 05, 2025 and will reach End of Support (EOS) on August 04, 2026. For more information, refer to [Deprecated features](../deprecated_features.md).

### Notice of deprecation of the Woodburn Studio demo site

=== "Containers"
    The Woodburn Studio demo site in HCL DX will be deprecated on August 05, 2025 and will reach End of Support (EOS) on August 04, 2026. For more information, refer to [Deprecated features](../deprecated_features.md).

=== "On-Premises"
    The Woodburn Studio demo site in HCL DX will be deprecated on August 05, 2025 and will reach End of Support (EOS) on August 04, 2026. For more information, refer to [Deprecated features](../deprecated_features.md).

## Digital Experience 8.5 and 9.0 Versions

### Extended Support option now available for DX versions 8.5 and 9.0

=== "On-Premises"
    HCLSoftware announced End of Support for HCL Digital Experience versions 8.5 and 9, effective June 30, 2025. Customers are encouraged to upgrade to HCL Digital Experience version 9.5, released in a continuous delivery model. Refer to the [Deprecated features](../deprecated_features.md) page for more information.

    To accommodate customers who might be unable to update from DX versions 8.5 and 9.0 to DX version 9.5 by that date, customers can sign up for Extended Support until June 30, 2025. For more information, see the article [Starting on August 30, 2024, Extended Support will be available for HCL Digital Experience V8.5.x and 9](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0115794){target="_blank"}. Extended support will be offered from June 30, 2025 until June 30, 2026.
    
### Automatically apply 9.5 from a later CF installation

=== "On-Premises"
    In CF219, a feature was introduced where [DX version 9.5 is automatically applied](../../deployment/install/traditional/cf_install/index.md) to an 8.5 or 9.0 installation if the configuration setting `install_95=true` is set. Note that a later CF might apply 9.5 by default unless you set `install_95=false`. This statement is not a guarantee of future releases or their features.

## Digital Experience 9.5 Container Version

### DAM - Cancel ongoing uploads through the progress bar

=== "Containers"
    The upload progress bar now includes controls to cancel uploads that are in-progress. You can cancel individual file or folder uploads using the Cancel Uploading button next to each in-progress item. You can also use the Cancel All button to stop all pending items at once. For more information, refer to [Uploading rich media assets](../../manage_content/digital_assets/usage/managing_dam/upload_rich_media_assets.md#cancelling-uploads).

### DAM - Collection sorting

=== "Containers"
    You can now sort collections and their contents to find them more efficiently. Sorting options are available for root-level collections and the assets and sub-collections within them. This feature is available in both Grid and List views. A dedicated icon allows you to switch between ascending and descending order. For more information, refer to [Uploading rich media assets](../../manage_content/digital_assets/usage/managing_dam/upload_rich_media_assets.md#sorting-root-and-nested-collections).

### Integrating HCL Leap and HCL Volt MX Foundry with HCL DX

=== "Containers"

The Access Layer documentation has been thoroughly revised to provide clearer guidance on integrating an external Access Layer with HAProxy, which continues to serve as the internal reverse proxy and load balancer. This update details how to effectively leverage external access solutions for robust traffic management.

The Ingress documentation has also been updated to reflect current best practices and address common configuration scenarios. Additionally, new documentation for the Gateway API has been introduced, offering it as an optional, modern alternative to Ingress for managing external access to cluster services.

For more information, refer to the following topics:

- [Configuring Access Layer for DX deployments](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-access-layer.md)
- [Configuring HCL Leap for integration with HCL DX](../../extend_dx/integration/leap/configuration.md)
- [Configuring HCL Volt MX Foundry for integration with HCL DX](../../extend_dx/integration/mx/configuration/index.md)
- [Installing HCL Leap to integrate with HCL Digital Experience](../../extend_dx/integration/leap/installation.md)
- [Installing HCL Volt MX Foundry to Kubernetes with Helm](../../extend_dx/integration/mx/installation.md)

### Search V2 Authoring - Deleting items from search results now available

=== "Containers"
    In Search V2 Authoring, you can now delete items from the search results. The item will be removed during the next crawler run that updates the search index. For more information, refer to [Using Search V2 Authoring - Deleting an item from search results](../../build_sites/search_v2_authoring/usage.md#deleting-an-item-from-search-results).

### Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository

=== "Containers"
    Starting CF216, the Harbor repository is updated with an OCI-based registry and the Helm chart command is updated to be OCI-compliant. Instructions on how to pull Helm charts using OCI commands are now available. For more information, see the Help Center topics [Configure Harbor Helm Repository](../../deployment/install/container/helm_deployment/preparation/get_the_code/configure_harbor_helm_repo.md) and [Download and Deploy from HCL Harbor Repository](../../get_started/download/harbor_container_registry.md).

### Removal of automated Pod restart on ConfigMap updates

=== "Containers"
    Runtime Controller triggering Pod restarts for [direct configuration changes](../../deployment/manage/container_configuration/index.md#rollout-of-configuration-changes) in ConfigMaps is removed. You must restart the appropriate Pods manually to apply the changes made to the ConfigMaps for testing configurations. For more information, see [Deprecated features](../deprecated_features.md).

### WAS, JDK, and iFix versions

=== "Containers"
    HCL DX 9.5 CF229 contains the following:

    - [WebSphere Application Server 9.0.5.24](../../get_started/system_requirements/traditional/supported_config.md#websphere-application-server)
    - [Java Development Kit 8.0.8.45](../../get_started/system_requirements/traditional/supported_config.md#java-sdk)
    - iFix PH66674

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/hcl-dx){target="_blank"} section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=){target="_blank"} section for more information.
