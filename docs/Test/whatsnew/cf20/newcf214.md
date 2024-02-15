# What's new in CF214

The following features and updates are available to customers installing HCL Digital Experience Container Update and CF214 on supported platforms:

**All  Digital Experience Versions (8.5, 9.0, 9.5)**

- Updated version of Amazon RDS with Oracle in System Requirements
- Web Content Manager - Rendering WCM comments in themes and external components
- Web Content Manager REST API v2 - AI Analysis API supports custom content AI providers
- New documentation for configuring developer mode for MacOS
- Web Content Manager - Parameters for item-path-full and details-full options
- DXClient - Theme List feature for LiveSync and Disable Prompt attribute
- Updated Personalization UI
- New documentation for setting up OIDC in HCL DX
- Notice of deprecation of Textbox.io Rich Text Editor

**Digital Experience 9.5 Version**

- Web Content Manager - Content Reporting enabled by default

**Digital Experience 9.5 Container Version**

- Content Composer – AI-assisted content analysis supports custom content AI providers
- Content Composer - Create content in Managed Pages
- New guidance for performance sizing for rendering with a small configuration
- Support for DAM staging on different users for subscribers and publishers
- Scaffolding framework for picker plugins and Picker Basic Version

**HCL Digital Experience Cloud Native 9.5 Offering**

- HCL Volt MX Foundry components supporting K8s Helm deployments are now available

## All  Digital Experience Versions (8.5, 9.0, 9.5)

### Updated version of Amazon RDS with Oracle in System Requirements 

=== "Containers"
    Oracle Database Standard and Enterprise Edition 21c and Oracle on Amazon Relational Database Service are added as supported databases in the System requirements. See the topic [Databases](../../get_started/system_requirements/kubernetes/databases.md) for more information.

=== "On-Premises"
    Oracle Database Standard and Enterprise Edition 21c and Oracle on Amazon Relational Database Service are added as supported databases in the System requirements. See the topic [Databases](../../get_started/system_requirements/kubernetes/databases.md) for more information.

### Web Content Manager - Rendering WCM comments in themes and external components

=== "Containers"
    WCM comments can be rendered in external components such as Page Components and Rich Text, Script applications or Custom Portlet. In addition, you can configure WCM comments in a theme. You can also now soft delete orphaned WCM comments data stored in the library. See the Help Center topic [Comments in WCM](../../build_sites/create_sites/developing_managing_content/comments_wcm.md) for more information. 

=== "On-Premises"
    WCM comments can be rendered in external components such as Page Components and Rich Text, Script applications or Custom Portlet. In addition, you can configure WCM comments in a theme. You can also now soft delete orphaned WCM comments data stored in the library. See the Help Center topic [Comments in WCM](../../build_sites/create_sites/developing_managing_content/comments_wcm.md) for more information. 

### Web Content Manager REST API v2 - AI Analysis API supports custom content AI providers

=== "Containers"
    The Web Content Manager REST V2 AI Analyzer APIs supports the use of custom content AI providers. For instructions on how to configure, see the Help Center topic WCM Content Analysis enablement for [Kubernetes](../../get_started/plan_deployment/container_deployment/wcm_content_ai_analysis.md) deployment.

=== "On-Premises"
    The Web Content Manager REST V2 AI Analyzer APIs supports the use of custom content AI providers. For instructions on how to configure, see the Help Center topic WCM Content Analysis enablement for [Traditional](../../get_started/plan_deployment/traditional_deployment/wcm_env/wcm_ai_analysis.md) deployment.

### New documentation for configuring developer mode for MacOS

=== "Containers"
    Instructions on how to change to a developer mode environment is now available. See the Help Center topic [MacOS: Configuring a developer mode environment](../../deployment/manage/change_dev_mode_env/cfg_dev_mode-MacOS.md) for more information. 

=== "On-Premises"
    Instructions on how to change to a developer mode environment is now available. See the Help Center topic [MacOS: Configuring a developer mode environment](../../deployment/manage/change_dev_mode_env/cfg_dev_mode-MacOS.md) for more information.

### Web Content Manager - Parameters for item-path-full and details-full options

=== "Containers"
    New parameters `options=item-path-full` and `options=details-full` are now available to add more information to REST API search query results. See [Adding item path information to the REST API search query results](../../manage_content/wcm_development/wcm_rest/wcm_rest_query/wcm_rest_adhoc.md#adding-item-path-information-to-the-rest-api-search-query-results) and [Adding more detailed information to the REST API search query results](../../manage_content/wcm_development/wcm_rest/wcm_rest_query/wcm_rest_adhoc.md#adding-more-detailed-information-to-the-rest-api-search-query-results) for more information. 

=== "On-Premises"
    New parameters `options=item-path-full` and `options=details-full` are now available to add more information to REST API search query results. See [Adding item path information to the REST API search query results](../../manage_content/wcm_development/wcm_rest/wcm_rest_query/wcm_rest_adhoc.md#adding-item-path-information-to-the-rest-api-search-query-results) and [Adding more detailed information to the REST API search query results](../../manage_content/wcm_development/wcm_rest/wcm_rest_query/wcm_rest_adhoc.md#adding-more-detailed-information-to-the-rest-api-search-query-results) for more information. 

### DXClient - Theme List feature for LiveSync and Disable Prompt attribute

=== "Containers"
    Livesync is now supported in scaled DX environment setups. New attributes are also added: the Disable Prompt attribute to disable the confirmation prompt for overwriting local and server files, and the attribute to specify the path to the contenthandler servlet on the DX server. For more information, see the topic [LiveSync](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md).

=== "On-Premises"
    Livesync is now supported in scaled DX environment setups. New attributes are also added: the Disable Prompt attribute to disable the confirmation prompt for overwriting local and server files, and the attribute to specify the path to the contenthandler servlet on the DX server. For more information, see the topic [LiveSync](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md).

### Updated Personalization UI

=== "Containers"
    The user interface (UI) for Personalization is restyled. For more information about this feature, see the [product overview](../../get_started/product_overview/personalization.md) and the topic [Personalization](../../manage_content/pzn/personalization/index.md).

=== "On-Premises"
    The user interface (UI) for Personalization is restyled. For more information about this feature, see the [product overview](../../get_started/product_overview/personalization.md) and the topic [Personalization](../../manage_content/pzn/personalization/index.md).

### New documentation for setting up OIDC in HCL DX

=== "Containers"
    New guidance on how to configure your HCL Digital Experience (DX) installation to leverage OpenID Connect (OIDC) based authentication with an OIDC compatible Identity Provider (IdP) is available. For more information, see the topic [Setting up OIDC for HCL Digital Experience](../../deployment/manage/security/people/authentication/Set_up_OIDC_for_DX.md).

=== "On-Premises"
    New guidance on how to configure your HCL Digital Experience (DX) installation to leverage OpenID Connect (OIDC) based authentication with an OIDC compatible Identity Provider (IdP) is available. For more information, see the topic [Setting up OIDC for HCL Digital Experience](../../deployment/manage/security/people/authentication/Set_up_OIDC_for_DX.md).

### Notice of deprecation of Textbox.io Rich Text Editor

=== "Containers"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and will End of Support (EOS) on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

=== "On-Premises"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and will End of Support (EOS) on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

## Digital Experience 9.5 Version

### Web Content Manager - Content Reporting enabled by default

=== "Containers"
    Starting CF214, the Content Reporting feature is installed and deployed by default as part of the CF update process. See the Help Center topic [Installing and Deploying Content Reporting](../../manage_content/wcm_authoring/content_reporting/installation/index.md) for additional information.


=== "On-Premises"
    Starting CF214, the Content Reporting feature is installed and deployed by default as part of the CF update process. See the Help Center topic [Installing and Deploying Content Reporting](../../manage_content/wcm_authoring/content_reporting/installation/index.md) for additional information.


## Digital Experience 9.5 Container Version

### Content Composer – AI-assisted content analysis supports custom content AI providers

=== "Containers"
    The AI-assisted content analysis feature now supports the use of custom content AI providers. See the Help Center topics WCM Content Analysis enablement for [Kubernetes](../../get_started/plan_deployment/container_deployment/wcm_content_ai_analysis.md) and [hybrid](../../get_started/plan_deployment/traditional_deployment/wcm_env/wcm_ai_analysis.md) platforms for more information.

### Content Composer – Create content in Managed Pages

=== "Containers"
    The topics [Managing Content Items](../../manage_content/wcm_authoring/content_composer/usage/author_and_manage_content_items/manage_content_items.md) and [Author Content Items](../../manage_content/wcm_authoring/content_composer/usage/author_and_manage_content_items/author_content_items.md) have been updated to replace instances of "site area" with "location". The location can either be a site area or a page.

### New guidance for performance sizing for rendering with a small configuration

=== "Containers"
    Results of DX Sizing Tests for rendering with a small configuration are now available. This guidance presents the important KPIs and discusses how adjustments to the pod configuration can make significant improvements in the responsiveness of the system. For more information, see the topic [Performance Sizing Guidance for Rendering with a Small Configuration](../../get_started/plan_deployment/container_deployment/rm_container/dx_performance_small_cfg.md).


###  Support for DAM staging on different users for subscribers and publishers

=== "Containers"
    DAM staging supports different Lightweight Directory Access Protocol (LDAP) for publishers and subscribers. For more information, see the topic [Staging DAM to rendering environments](../../manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging.md).

### Scaffolding framework for picker plugins and Picker Basic Version

=== "Containers"
    HCL DX Picker is a web component that allows users to view and select an asset from Digital Asset Management and use it in their custom web application. For more information on how to install, access, and use this feature, see [HCL DX Picker](../../manage_content/wcm_authoring/dx_picker/index.md). 

## HCL Digital Experience Cloud Native 9.5 Offering

### HCL Volt MX Foundry components supporting K8s Helm deployments are now available

[HCL Volt MX](https://www.hcl-software.com/volt-mx) Foundry on-premises components supporting K8s Helm deployments are now available with the [HCL Digital Experience Cloud Native 9.5 offering](https://blog.hcltechsw.com/digital-experience/simplified-pricing-more-value-hcl-digital-experience-cloud-native-9-5-bundle-with-user-session-pricing/). Learn how to simplify backend integrations and present the results to DX target audiences through DX web site pages. See the Help Center topic [Digital Experience Cloud Native 9.5 Offering](../../get_started/product_overview/offerings.md) for more information.  

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/hcl-dx) section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=) section for more information.
