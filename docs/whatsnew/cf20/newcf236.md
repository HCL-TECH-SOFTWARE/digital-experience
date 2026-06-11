# What's new in CF236

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF236 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

- Blueprint updates
- My HCLSoftware delivery portal
- New How-to articles now available
- Presentation Designer - DAM integration and feature updates

**Digital Experience 8.5 and 9.0 Versions**

- Extended Support option now available for DX versions 8.5 and 9.0
- Automatically apply 9.5 from a later CF installation

**Digital Experience 9.5 Container Version**

- Helm values updates
- IQ assistant now available
- OpenTelemetry Integration Guide
- Search V2 - Automatically generate certificates and Kubernetes secrets
- WAS, JDK, UBI, and iFix versions

**Notices of deprecation**

- CKEditor Rich Text Editor (8.5, 9.0, and 9.5)
- Removal of automated Pod restart on ConfigMap updates (9.5)
- Removal of unused DAM Helm keys (9.5)
- Woodburn Studio demo site (9.5)

Go to the [HCL Software Support Site/HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959){target="_blank"} for the list of software fixes, including Container Update releases.

## All Digital Experience Versions (8.5, 9.0, 9.5)

### Blueprint updates

=== "Containers"
    The HCL DX Blueprint design system has been updated for CF236. For more information on the changes, improvements, and bugfixes, refer to the [Blueprint changelog](https://opensource.hcltechsw.com/dx-blueprint-storybook/latest/?path=/docs/overview-changelog--documentation){target="_blank"}.

=== "On-Premises"
    The HCL DX Blueprint design system has been updated for CF236. For more information on the changes, improvements, and bugfixes, refer to the [Blueprint changelog](https://opensource.hcltechsw.com/dx-blueprint-storybook/latest/?path=/docs/overview-changelog--documentation){target="_blank"}.

### My HCLSoftware delivery portal

=== "Containers"
    HCL DX software is available through the [My HCLSoftware portal](https://my.hcltechsw.com/){target="_blank"} for customers licensed for the HCL Digital Experience v9.5 offering. For more information, refer to the following knowledge article and help center topics:

    - [HCL Digital Experience offerings are now available for download from the MyHCLSoftware portal](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0120373){target="_blank"}
    - [Downloading and installing HCL DX from a software licensing portal](../../get_started/download/software_licensing_portal/index.md)
    - [HCL Digital Experience Cloud Native 9.5 entitlement checks](../../get_started/download/software_licensing_portal/configure_entitlement_checks/index.md)
    - [Entitlement checking in the My HCLSoftware delivery portal](../../get_started/download/software_licensing_portal/configure_entitlement_checks/mhs_license_and_delivery.md)

=== "On-Premises"
    HCL DX software is available through the [My HCLSoftware portal](https://my.hcltechsw.com/){target="_blank"} for customers licensed for the HCL Digital Experience v9.5 offering. For more information, refer to the following knowledge article and help center topics:

    - [HCL Digital Experience offerings are now available for download from the MyHCLSoftware portal](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0120373){target="_blank"}
    - [Downloading and installing HCL DX from a software licensing portal](../../get_started/download/software_licensing_portal/index.md)
    - [HCL Digital Experience Cloud Native 9.5 entitlement checks](../../get_started/download/software_licensing_portal/configure_entitlement_checks/index.md)
    - [Entitlement checking in the My HCLSoftware delivery portal](../../get_started/download/software_licensing_portal/configure_entitlement_checks/mhs_license_and_delivery.md)

### New How-to articles now available

=== "Containers"
    A new batch of How-to articles has been migrated from the knowledge base to the HCL DX Help Center. For more information, refer to the [New and migrated articles](../../guide_me/howto/whatsnew.md#cf236) section.

=== "On-Premises"
    A new batch of How-to articles has been migrated from the knowledge base to the HCL DX Help Center. For more information, refer to the [New and migrated articles](../../guide_me/howto/whatsnew.md#cf236) section.

### Presentation Designer - DAM integration and feature updates

=== "Containers"
    You can now insert Digital Asset Management (DAM) assets directly into your Presentation Designer canvas. The **Image configuration** panel now includes a native DX picker dialog to choose and apply DAM assets directly to the canvas, eliminating manual URL copying and ensuring automatic metadata cleanup when switching asset sources. For more information, refer to [Static elements - Images](../../manage_content/wcm_authoring/presentation_designer/usage/user_elements.md#static-elements).

    Additional updates include the following enhancements:

    - Multiple workspace notifications now queue vertically in the bottom-left corner instead of overwriting active messages, allowing you to track rapid operations sequentially. For more information, refer to [Accessing Presentation Designer - Notifications](../../manage_content/wcm_authoring/presentation_designer/access.md#notifications).
    - **Grid** elements now include **Auto-flow** and **Area layout** configurations to support independent layout behavior across **Desktop**, **Tablet**, and **Mobile** viewports. **Tablet** and **Mobile** layouts allow count-based overrides that automatically recalculate row or column tracks without modifying the baseline **Desktop** layout. For more information, refer to [Static elements - Grid](../../manage_content/wcm_authoring/presentation_designer/usage/user_elements.md#static-elements).
    - The **Back** button now synchronizes the return URL during initialization, ensuring you return to your previous workspace view with your context intact, even if the user interface language changes mid-session. For more information, refer to [Accessing Presentation Designer - Toolbar](../../manage_content/wcm_authoring/presentation_designer/access.md#toolbar).

=== "On-Premises"
    You can now insert Digital Asset Management (DAM) assets directly into your Presentation Designer canvas. The **Image configuration** panel now includes a native DX picker dialog to choose and apply DAM assets directly to the canvas, eliminating manual URL copying and ensuring automatic metadata cleanup when switching asset sources. For more information, refer to [Static elements - Images](../../manage_content/wcm_authoring/presentation_designer/usage/user_elements.md#static-elements).

    Additional updates include the following enhancements:

    - Multiple workspace notifications now queue vertically in the bottom-left corner instead of overwriting active messages, allowing you to track rapid operations sequentially. For more information, refer to [Accessing Presentation Designer - Notifications](../../manage_content/wcm_authoring/presentation_designer/access.md#notifications).
    - **Grid** elements now include **Auto-flow** and **Area layout** configurations to support independent layout behavior across **Desktop**, **Tablet**, and **Mobile** viewports. **Tablet** and **Mobile** layouts allow count-based overrides that automatically recalculate row or column tracks without modifying the baseline **Desktop** layout. For more information, refer to [Static elements - Grid](../../manage_content/wcm_authoring/presentation_designer/usage/user_elements.md#static-elements).
    - The **Back** button now synchronizes the return URL during initialization, ensuring you return to your previous workspace view with your context intact, even if the user interface language changes mid-session. For more information, refer to [Accessing Presentation Designer - Toolbar](../../manage_content/wcm_authoring/presentation_designer/access.md#toolbar).

## Digital Experience 8.5 and 9.0 Versions

### Extended Support option now available for DX versions 8.5 and 9.0

=== "On-Premises"
    HCLSoftware announced End of Support for HCL Digital Experience versions 8.5 and 9, effective June 30, 2025. Customers are encouraged to upgrade to HCL Digital Experience version 9.5, released in a continuous delivery model. Refer to the [Deprecated features](../deprecated_features.md) page for more information.

    To accommodate the customers who might be unable to update from DX versions 8.5 and 9.0 to DX version 9.5 by that date, customers can sign up for Extended Support. For more information, see the article [Starting on August 30, 2024, Extended Support will be available for HCL Digital Experience V8.5.x and 9](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0115794){target="_blank"}. Extended support will be offered from June 30, 2025 until June 30, 2026.

### Automatically apply 9.5 from a later CF installation

=== "On-Premises"
    In CF219, a feature was introduced where [DX version 9.5 is automatically applied](../../deployment/install/traditional/cf_install/index.md) to an 8.5 or 9.0 installation if the configuration setting `install_95=true` is set. Note that a later CF might apply 9.5 by default unless you set `install_95=false`. This statement is not a guarantee of future releases or their features.

## Digital Experience 9.5 Container Version

### Helm values updates

=== "Containers"
    Helm value properties in HCL DX that were added, removed, deprecated, or changed for this release are documented in [DX Helm values updates](../dx_helm_values_updates.md#cf236).

### IQ assistant now available

=== "Containers"
    IQ is an AI-powered assistant integrated into HCL DX that handles content creation and management through real-time, context-aware automation. Built on the Model Context Protocol (MCP), IQ offers a conversational interface directly within the DX environment where you can ask questions or have the assistant perform actions for you, such as creating templates, updating content, and searching for assets.

    You can interact with the assistant in two ways:

    - **In the DX toolbar:** Select the **Open IQ chat** sparkle button in the top toolbar on standard DX pages to open the panel view sidebar.
    - **In Site Templates pages:** Select the **Open IQ chat** floating sparkle button to open the compact view chat window.

    For more information, refer to the [IQ documentation](../../build_sites/iq/index.md).

### OpenTelemetry Integration Guide

=== "Containers"
    The new OpenTelemetry (OTel) Integration Guide provides comprehensive instructions for integrating OTel with HCL DX to enable distributed tracing, metrics, and log collection across your deployment. For more information, refer to the [OpenTelemetry Integration Guide](../../guide_me/guides/opentelemetry_integration/index.md).

### Search V2 - Automatically generate certificates and Kubernetes secrets

=== "Containers"
    You can now automatically generate certificates and Kubernetes secrets to secure communication during the deployment phase. To use automated generation, specify a value for the `configuration.opensearch.security.rootCASubjectDN` property in your `values.yaml` file. The value must use the X.509 Distinguished Name (DN) format. For more information, refer to [Preparing certificates for inter-service communication](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_install_new_search.md#preparing-certificates-for-inter-service-communication).

### WAS, JDK, UBI, and iFix versions

=== "Containers"
    HCL DX 9.5 CF236 contains the following:

    - [WebSphere Application Server (WAS) 9.0.5.27](../../get_started/system_requirements/traditional/supported_config.md#websphere-application-server)
    - [Java Development Kit (JDK) 8.0.8.60](../../get_started/system_requirements/traditional/supported_config.md#java-sdk)
    - [Red Hat Universal Base Image (UBI)](../../deployment/install/container/image_list.md#hcl-dx-ubi-levels):
        - Core and Remote Search: 8.10-1776104706
        - Other Images: 9.7-1776104705
    - No iFixes

    For more information, refer to [WAS, JDK, UBI, and iFix versions](../../get_started/system_requirements/kubernetes/kubernetes-runtime.md#was-jdk-ubi-and-ifix-versions).

## Notices of deprecation

### Advanced Rich Text Editor (CKEditor) (8.5, 9.0, and 9.5)

=== "Containers"
    The Advanced Rich Text Editor (CKEditor) component in HCL DX was deprecated on August 05, 2025 and will reach End of Support (EOS) on August 04, 2026. For more information, refer to [Deprecated features](../deprecated_features.md).

=== "On-Premises"
    The Advanced Rich Text Editor (CKEditor) component in HCL DX was deprecated on August 05, 2025 and will reach End of Support (EOS) on August 04, 2026. For more information, refer to [Deprecated features](../deprecated_features.md).

### Removal of automated Pod restart on ConfigMap updates (9.5)

=== "Containers"
    Runtime Controller triggering Pod restarts for [direct configuration changes](../../deployment/manage/container_configuration/index.md#rollout-of-configuration-changes) in ConfigMaps is removed. You must restart the appropriate Pods manually to apply the changes made to the ConfigMaps for testing configurations. For more information, see [Deprecated features](../deprecated_features.md).

### Removal of unused DAM Helm keys (9.5)

=== "Containers"
    The following unused DAM Helm keys in HCL DX are deprecated in CF236 and scheduled for removal in CF237:

    - `incubator.configuration.digitalAssetManagement.enableRootCollectionSort`
    - `incubator.configuration.digitalAssetManagement.enableSoftDelete`
    - `incubator.configuration.digitalAssetManagement.renderNewUI`

    For more information, refer to [DX Helm values updates](../dx_helm_values_updates.md#cf236).

### Woodburn Studio demo site (9.5)

=== "Containers"
    The Woodburn Studio demo site in HCL DX has been deprecated on August 05, 2025 and will reach End of Support (EOS) on August 04, 2026. For more information, refer to [Deprecated features](../deprecated_features.md). It has been replaced by [Nex Haven](../../build_sites/nex_haven.md).

=== "On-Premises"
    The Woodburn Studio demo site in HCL DX has been deprecated on August 05, 2025 and will reach End of Support (EOS) on August 04, 2026. For more information, refer to [Deprecated features](../deprecated_features.md). It has been replaced by [Nex Haven](../../build_sites/nex_haven.md).

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcl-software.com/hcl-dx){target="_blank"} section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcl-software.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=){target="_blank"} section for more information.
