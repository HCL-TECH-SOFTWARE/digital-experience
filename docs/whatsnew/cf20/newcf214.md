# What's new in CF214

The following features and updates are available to customers installing HCL Digital Experience Container Update and CF214 on supported platforms:

**All  Digital Experience Versions (8.5, 9.0, 9.5)**

- Web Content Manager - Rendering WCM comments in external components
- Web Content Manager REST API v2 - AI Analysis API supports custom content AI providers
- New guidance for configuring developer mode for MacOS
- Web Content Manager - Parameters for item-path-full and details-full options
- DXClient - Theme List feature for LiveSync and Disable Prompt attribute
- Updated PZN UI

**Digital Experience 9.5 Version**

- Web Content Manager - Content Reporting enabled by default

**Digital Experience 9.5 Container Version**

- Content Composer – AI-assisted content analysis supports custom content AI providers
- Content Composer - Create content in Managed Pages
- Updated version of Amazon RDS with Oracle in the System requirements page
- New guidance for performance sizing for rendering with a small configuration
- DX Cloud Native 9.5.1 offering includes limited Volt Foundry entitlements
- Support for DAM staging on different users for subscribers and publishers
- Scaffolding framework for picker plugins and Picker Basic Version

## All  Digital Experience Versions (8.5, 9.0, 9.5)

### Web Content Manager - Rendering WCM comments in external components

=== "Containers"
    WCM comments can be rendered in external components such as Page Components and Rich Text, Script applications or Custom Portlet. You can also now soft delete orphaned WCM comments data stored in the library. See the Help Center topic [Comments in WCM](../../build_sites/create_sites/developing_managing_content/comments_wcm.md) for more information. 

=== "On-Premises"
    WCM comments can be rendered in external components such as Page Components and Rich Text, Script applications or Custom Portlet. You can also now soft delete orphaned WCM comments data stored in the library. See the Help Center topic [Comments in WCM](../../build_sites/create_sites/developing_managing_content/comments_wcm.md) for more information. 

### Web Content Manager REST API v2 - AI Analysis API supports custom content AI providers

=== "Containers"
    The Web Content Manager REST V2 AI Analyzer APIs supports the use of custom content AI providers. For instructions on how to configure, see the Help Center topic WCM Content Analysis enablement for [Kubernetes](../../get_started/plan_deployment/container_deployment/wcm_content_ai_analysis.md) deployment.

=== "On-Premises"
    The Web Content Manager REST V2 AI Analyzer APIs supports the use of custom content AI providers. For instructions on how to configure, see the Help Center topic WCM Content Analysis enablement for [Traditional](../../get_started/plan_deployment/traditional_deployment/wcm_env/wcm_ai_analysis.md) deployment.

### New guidance for configuring developer mode for MacOS

=== "Containers"
    Instructions on how to change to a developer mode environment is now available. See the Help Center topic [MacOS: Configuring a developer mode environment](../../deployment/manage/change_dev_mode_env/cfg_dev_mode-MacOS.md) for more information. 

=== "On-Premises"
    Instructions on how to change to a developer mode environment is now available. See the Help Center topic [MacOS: Configuring a developer mode environment](../../deployment/manage/change_dev_mode_env/cfg_dev_mode-MacOS.md) for more information.

### Web Content Manager - Parameters for item-path-full and details-full options

[Adding item path information to the REST API search query results](../../manage_content/wcm_development/wcm_rest/wcm_rest_query/wcm_rest_adhoc.md#adding-item-path-information-to-the-rest-api-search-query-results)

[Adding more detailed information to the REST API search query results](../../manage_content/wcm_development/wcm_rest/wcm_rest_query/wcm_rest_adhoc.md#adding-more-detailed-information-to-the-rest-api-search-query-results)

### DXClient - Theme List feature for LiveSync and Disable Prompt attribute

[LiveSync](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md)

### Updated PZN UI
(no doc yet)

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

### Content Composer - Create content in Managed Pages
[Managing Content Items](../../manage_content/wcm_authoring/content_composer/usage/author_and_manage_content_items/manage_content_items.md)

[Author Content Items](../../manage_content/wcm_authoring/content_composer/usage/author_and_manage_content_items/author_content_items.md)

### Updated version of Amazon RDS with Oracle in the System requirements page
(doc in progress)

### New guidance for performance sizing for rendering with a small configuration

=== "Containers"
    Results of DX Sizing Tests for rendering with a small configuration are now available. This guidance presents the important KPIs and discusses how adjustments to the pod configuration can make significant improvements in the responsiveness of the system. For more information, see the topic [Performance Sizing Guidance for Rendering with a Small Configuration](../../get_started/plan_deployment/container_deployment/rm_container/dx_performance_small_cfg.md).

### HCL Digital Experience Cloud Native 9.5 Offering

[HCL Volt MX](https://www.hcl-software.com/volt-mx) Foundry on premises components supporting K8s Helm deployments are now available with the [HCL Digital Experience Cloud Native 9.5 offering](https://blog.hcltechsw.com/digital-experience/simplified-pricing-more-value-hcl-digital-experience-cloud-native-9-5-bundle-with-user-session-pricing/). Learn how to greatly simplify backend integrations and present the results to DX target audiences through DX web site pages. See the Help Center topic [Digital Experience Cloud Native 9.5 Offering](../../get_started/product_overview/offerings.md) for more information.  

###  Support for DAM staging on different users for subscribers and publishers
(doc in progress)

### Scaffolding framework for picker plugins and Picker Basic Version
(doc in progress)
