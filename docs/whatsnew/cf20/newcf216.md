# What's new in CF216

The following features and updates are available to customers installing HCL Digital Experience Container Update and CF216 on supported platforms:

**All  Digital Experience Versions (8.5, 9.0, 9.5)**

- Friendly Action URLs
- Web Content Manager - AI assistance for descriptions and keyword generation
- Web Content Manager REST API v2 - Updated custom configurations for Open AI
- Updated documentation for setting up OIDC in HCL DX
- DXClient - Version compatibility
- HCL DX Extensions for Visual Studio Code
- Notice of deprecation of Textbox.io Rich Text Editor

**Digital Experience 9.5 Version**

- Web Content Manager - Updates on the Content Reporting Bulk Updates feature

**Digital Experience 9.5 Container Version**

- OCI-based registry for Harbor repository
- Digital Asset Management - Resync DAM Staging environments
- DX Picker - Preview an asset
- Digital Asset Management - Moving a collection 

## All Digital Experience Versions (8.5, 9.0, 9.5)

### Friendly Action URLs

=== "Containers"
    While DX allows for [friendly URLs](../../manage_content/wcm_delivery/deliver_webcontent_on_dx/customizing_content/friendlyurl_wcmviewer/index.md), actions in portlets still trigger state information for bookmarkability and caching. A new configuration option is available where you can redirect a URL after action execution to a friendly URL. For more information, see [Friendly Action URLs](../../build_sites/create_sites/url_addressing/index.md#friendly-action-urls).

=== "On-Premises"
    While DX allows for [friendly URLs](../../manage_content/wcm_delivery/deliver_webcontent_on_dx/customizing_content/friendlyurl_wcmviewer/index.md), actions in portlets still trigger state information for bookmarkability and caching. A new configuration option is available where you can redirect a URL after action execution to a friendly URL. For more information, see [Friendly Action URLs](../../build_sites/create_sites/url_addressing/index.md#friendly-action-urls).

### Web Content Manager - AI assistance for descriptions and keyword generation

=== "Containers"
    AI-assisted summarization and keyword extraction from content elements are now available. For more information, see the Help Center topic [AI assistance for descriptions and keyword generation in a content item](../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/elements/wcm_dev_elements_ai_assistance.md).

=== "On-Premises"
    AI-assisted summarization and keyword extraction from content elements are now available. For more information, see the Help Center topic [AI assistance for descriptions and keyword generation in a content item](../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/elements/wcm_dev_elements_ai_assistance.md).

### Web Content Manager REST API v2 - Updated custom configurations for Open AI 

=== "Containers"
    The OpenAI model is switched to ```gpt-3.5-turbo``` because of OpenAI discontinuing support for ```text-davinci-003``` starting January 4, 2024. For more information, see [OpenAI ChatGPT custom configurations](../../get_started/plan_deployment/container_deployment/wcm_content_ai_analysis.md#openai-chatgpt-specific-custom-configurations).

=== "On-Premises"
    The OpenAI model is switched to ```gpt-3.5-turbo``` because of OpenAI discontinuing support for ```text-davinci-003``` starting January 4, 2024. For more information, see [OpenAI ChatGPT custom configurations](../../get_started/plan_deployment/container_deployment/wcm_content_ai_analysis.md#openai-chatgpt-specific-custom-configurations).    

### Updated documentation for setting up OIDC in HCL DX

=== "Containers"
    Instructions for setting up OIDC has been updated to include a reference to the open source repository [hclds-keyclak](https://github.com/HCL-TECH-SOFTWARE/hclds-keycloak). In this repository, you can find Keycloak as a reference implementation of an Identity Provider (IdP) to serve as an internal validation tool for HCL Digital Solutions products. For more information, see [Setting up OIDC for HCL Digital Experience](../../deployment/manage/security/people/authentication/Set_up_OIDC_for_DX.md)

=== "On-Premises"
    Instructions for setting up OIDC has been updated and a reference to the open source repository [hclds-keyclak](https://github.com/HCL-TECH-SOFTWARE/hclds-keycloak). In this repository, you can find Keycloak as a reference implementation of an Identity Provider (IdP) to serve as an internal validation tool for HCL Digital Solutions products. Steps for traditional architecture have also been added in the documentation. For more information, see [Setting up OIDC for HCL Digital Experience](../../deployment/manage/security/people/authentication/Set_up_OIDC_for_DX.md).

### DXClient - Version compatibility

=== "Containers"
    You can use the version compatibility command to check the version details of DX Core and DXClient. For more information, see the Help Center topic [Version Compatibility ](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/versionCompat.md).

=== "On-Premises"
    You can use the version compatibility command to check the version details of DX Core and DXClient. For more information, see the Help Center topic [Version Compatibility ](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/versionCompat.md).

### HCL DX Extensions for Visual Studio Code

=== "Containers"
    The HCL DX Extensions feature for Visual Studio Code provides a user interface experience for DX developers during the development life cycle. Through this extension, DX developers can do shorter coding cycles between local editing events to server rendering and validation. For more information, see the Help Center topic [HCL DX Extensions for Visual Studio Code](../../extend_dx/development_tools/hcl_dx_extensions/index.md).

=== "On-Premises"
    The HCL DX Extensions feature for Visual Studio Code provides a user interface experience for DX developers during the development life cycle. Through this extension, DX developers can do shorter coding cycles between local editing events to server rendering and validation. For more information, see the Help Center topic [HCL DX Extensions for Visual Studio Code](../../extend_dx/development_tools/hcl_dx_extensions/index.md).

### Notice of deprecation of Textbox.io Rich Text Editor

=== "Containers"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and will End of Support (EOS) on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

=== "On-Premises"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and will End of Support (EOS) on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

## Digital Experience 9.5 Version

### Web Content Manager - Updates on the Content Reporting Bulk Updates feature

=== "Containers"
    Starting CF216, you can update the expiration date and add, remove, or replace an owner or author using the Bulk Updates feature. See the Help Center topic [Accessing the Content Reporting portlet](../../manage_content/wcm_authoring/content_reporting/usage/bulk_update_report.md) for additional information.

=== "On-Premises"
    Starting CF216, you can update the expiration date and add, remove, or replace an owner or author using the Bulk Updates feature. See the Help Center topic [Accessing the Content Reporting portlet](../../manage_content/wcm_authoring/content_reporting/usage/bulk_update_report.md) for additional information.

## Digital Experience 9.5 Container Version

### OCI-based registry for Harbor repository

=== "Containers"
    Starting CF216, the Harbor repository is updated with an OCI-based registry and the helm chart command is updated to be OCI-compliant. Instructions on how to pull helm charts using OCI commands are now available. For more information, see the Help Center topics [Configure Harbor Helm Repository](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_configure_harbor_helm_repo.md) and [Download and Deploy from HCL Harbor Repository](../../get_started/download/harbor_container_registry.md).

### Digital Asset Management - Resyncing the DAM Staging environments

=== "Containers"
    DAM staging supports resyncing of identified the discrepancies between a publisher and a subscriber environment. For more information, see the Help Center topic [DAM Staging mismatch](../../manage_content/digital_assets/configuration/staging_dam/dam_staging_mismatch.md).

### DX Picker - Previewing an asset

=== "Containers"
    With DX Picker, you can now open an image in Preview mode. When in Preview mode, you can view image renditions, download or select an image, navigate between assets, and zoom in and out of an image. For more information, see [Using DX Picker](../../manage_content/wcm_authoring/dx_picker/usage/index.md).

### Digital Asset Management - Moving a collection 

=== "Containers"
    DX 9.5 Container Update CF216 adds capability to move a collection to a new location, either to another collection or to the root level. This includes an option to save the collection under a new name if naming conflicts occur. For more information, see [Moving a collection](../../manage_content/digital_assets/usage/managing_dam/manage_collections.md#moving-a-collection).

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/hcl-dx) section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=) section for more information.


