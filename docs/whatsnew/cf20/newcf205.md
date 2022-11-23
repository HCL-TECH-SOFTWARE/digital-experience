# What's new in CF205

The HCL Digital Experience 9.5 Container Update and CF205 release includes the following new features and updates:

-	Enhanced configurable log support for HA Proxy
-	Option for entitled customers to download HCL DX 9.5 Docker images from HCL Harbor 
-	Design Studio (Beta) Content list item and Data container extensions
-	Personalization API binding rules
-	Digital Asset Management extension plugin to Google Vision API service 
-	Updated Digital Asset Management Kaltura Video extension plugin support 
-	Removal and replacement of Document Conversion Services 
-	HCL Web Experience Factory V8.5.1 (available in the DX 8.5 offerings)
-	End of Support is announced for the Digital Experience Pattern v8.5 offerings
-   The Ring API strictly enforces the case on query parameters
-	New complementary DX training modules in the HCL Software Academy, and more

Go to the [HCL Software Support Site/ HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959) for the list of software fixes, including Container Update releases. 

For the HCL DX 9.5 Container Update CF205 image list, see the [Container Image listings](../../deployment/install/docker/index.md) topic. 

The following features and updates are available to customers installing HCL Digital Experience Container Update CF205 on [supported container platforms](../../get_started/system_requirements/index.md):

## Deploy HCL DX 9.5 Container Update to container platforms using Helm 
Beginning with HCL Digital Experience 9.5 Container Update CF196, administrators can deploy HCL DX 9.5 CF196 and later images to supported container platforms using Helm. Using a Helm Chart deployment can provide administrators more transparency and control in deployment operations. Beginning with Container Update CF203, the Ambassador shipped as part of the DX Helm deployment is deprecated and a required process to migrate from the Amabassador to HAProxy Service is provided.  Beginning in CF204, the HAProxy should be used in your DX deployments on Kubernetes. 

In Container Update CF205, configurable logging support for HAProxy is enhanced. For more information, see [Configure and Access logs](../../deployment/manage/container_configuration/troubleshooting/configure_access_helm_logs.md#default-log-output).

## Option for entitled customers to download HCL DX 9.5 Docker images from HCL Harbor 
For customers considering or managing deployments to supported Kubernetes platforms, beginning with HCL Digital Experience V9.5 Container Update 205 the 
For customers considering or managing deployments to supported Kubernetes platforms, beginning with HCL Digital Experience V9.5 Container Update 205, the Docker images for deployment to Kubernetes environments can be optionally accessed via Helm charts in the HCL Harbor repository at https://hclcr.io . Customers with credentials to access entitled software in the HCL Software Licensing Portal may apply those credentials to optionally access the Docker components of Digital Experience v9.5 Container Update CF205 or later releases. Customers with credentials to access entitled software in the HCL Software Licensing Portal may apply those credentials to optionally access the Docker components of Digital Experience v9.5 Container Update CF205 or later releases. For more information, see the [Getting the Software and Access](../../get_started/download/software_licensing_portal/index.md) and [Deploy DX 9.5 Docker components from HCL Harbor](../../get_started/download/harbor_container_registry.md) topics. 

## Design Studio (Beta) Content list item and Data container extensions 
Reusable elements for use with Content lists are added to Design Studio (Beta). APIs are added to support integration with data containers to provide the capability of rendering information from an external data source, such as HCL Volt MX Foundry. For more information, see the [Design Studio (Beta) Reusable blocks](https://opensource.hcltechsw.com/digital-experience/cf205/productfeatures/design_studio/building_content/use_reusable_blocks/) and [Data Containers](https://opensource.hcltechsw.com/digital-experience/cf205/productfeatures/design_studio/building_content/use_data_containers/) topics.


## Personalization REST APIs
Personalization Selection REST API rules add new Binding rules and Embedded WCM select action rule to add capabilities for developers and marketers to fine-tune delivery of personalized content to the end users. For more information, see below topics for more information:

- [Personalization Embedded WCM Select Action rule](../../manage_content/pzn/pzn_apis/pzn_rest_API_explorer/pzn_rules_api/pzn_embedded_select_action_rule.md)

- Binding rules: [Personalization rules REST API content details](../../manage_content/pzn/pzn_apis/pzn_rest_API_explorer/pzn_rules_api/rules_api_contents_details.md)

- [Personalization APIs](../../manage_content/pzn/pzn_apis/index.md)

- [Personalization REST API explorer](../../manage_content/pzn/pzn_apis/pzn_rest_API_explorer/index.md)

- [Application object](../../manage_content/pzn/pzn_terms/application_object/index.md)

## Notice of deprecation and replacement of Document Conversion Services
Document Conversion Services components in the HCL Digital Experience software will be updated and replaced in the HCL DX CF205 release. HCL Digital Experience will remove the DCS component supplied by Oracle, and replace it with HCL supported functions. After that point, HCL Digital Experience v8.5, v9.0, and v9.5 Container Update and CF releases will include the newer HCL supported component. For more information, see the [Replacement of DCS component](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0096908) knowledge article.

!!! important "Replacement of HCL Digital Experience v8.5, v9.0, and v9.5 base installers and Removal of CFs prior to CF205 due to Oracle DCS deprecation"
    
    On August 20, 2022, [HCL Software License & Delivery Portal](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0073344) (Flexnet) and repositories [managed by Immix Group for Federal customers](https://support.hcltechsw.com/csm?id=federal) will remove all CFs prior to CF205 ([CF01](https://help.hcltechsw.com/digital-experience/9.5/overview/soft_fixes95.html){:target="_blank"} – [CF204](https://help.hcltechsw.com/digital-experience/9.5/overview/soft_fixes95.html){:target="_blank"}). HCL will also replace the HCL Digital Experience v[8.5](https://help.hcltechsw.com/digital-experience/8.5/welcome/wp_welcome.html){:target="_blank"}, v[9.0](https://help.hcltechsw.com/digital-experience/9.0/welcome/wp9_welcome.html){:target="_blank"}, and v[9.5](../../index.md) base installers that contain the Oracle supplied Document Conversion Services component. The HCL Software License & Delivery Portal repositories will contain only the latest HCL Digital Experience v8.5, v9.0, and v9.5 base installers and Container Update and CF versions, which will contain the HCL supplied Document Conversion Services component.

    !!! attention
        CFs versions prior to CF205 of the HCL Digital Experience 8.5, 9.0, and 9.5 base installers and Container Update and CF releases will not be available for download after August 20, 2022.

For more information, refer to the following documents:

- [Creating a back up](../../manage_content/dcs/dcs_backup.md)

- [Disabling Stellent for DCS](https://help.hcltechsw.com/digital-experience/9.5/admin-system/disable_3rdparty_dcs.html){:target="_blank"}

- [Enabling Apache Tika for Search](https://help.hcltechsw.com/digital-experience/9.5/admin-system/enable_3rdparty_tika.html){:target="_blank"}

## Digital Asset Management extension plugin to Google Vision API service 
Beginning with HCL Digital Experience 9.5 Container Update CF205, using a custom Digital Asset Management extension that provides integration with the Google Vision API, DX practitioners can leverage the integration to automate additional asset tagging to the DAM media item details. This feature can be used alongside traditional DAM asset tagging methods and can help content authors and marketing professionals fine-tune the relevance of their DAM assets in search results for target audiences. For more information, see the following documents:

- [Image tagging](../../manage_content/digital_assets/configuration/dam_extensibility/image_tagging.md)

- [Configuration DAM extension for Google Vision API](../../manage_content/digital_assets/configuration/dam_extensibility/configure_DAM_extension_to_google_vision_API.md)

- [Media Asset metadata HCL Digital Asset Management](../../manage_content/digital_assets/usage/managing_dam/manage_media_assets.md).

## Updated Digital Asset Management Kaltura Video extension Plugin support
The Digital Asset Management plugin extension method available to integrate the [Kaltura Video Content Management](https://corp.kaltura.com/video-content-management-system/){:target="_blank"} platform assets is updated. For more information, see [Configure DAM - Kaltura Integration](https://opensource.hcltechsw.com/digital-experience/cf205/productfeatures/digital_asset_mgmt/configure_dam_kaltura/), and [DAM Extensibility Configure of Kaltura](../../manage_content/digital_assets/configuration/dam_extensibility/kaltura_configuration.md) topics.

## HCL Web Experience Factory V8.5.1
Along with the release of HCL Digital Experience CF205, HCL has released an updated version of HCL Web Experience Factory, version 8.5.1. This release includes support for Java 1.8 and Eclipse 4.2.2. For additional information, see [HCL Web Experience Factory](../../extend_dx/development_tools/wef/index.md).

## End of Support is announced for the Digital Experience Pattern v8.5 offerings
Effective on June 30, 2022, HCL announces the withdrawal of support for the Digital Experience Patterns for HCL Portal Server and Web Content Manager v8.5. For more information including recommended Digital Experience replacement offerings, see the [HCL Digital Experience Patterns for Web Content Manager and Portal v8.5](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0099137){:target="_blank"} and [HCL Digital Experience deprecated features and themes for HCL Digital Experience 8.5 and 9.0](../../whatsnew/deprecated_features.md).

## Ring API query parameters
Refer to the Limitations table in [REST API Explorers](../../extend_dx/apis/hcl_experience_api/api_explorers.md) to learn the query parameters enforced for Ring API.

## Site Manager - Delete pages and their contents
Beginning with CF205, a new feature is added, which allows you to delete a page and its contents along with the content that is referenced by the WCM rendering portlets on the page. For more information, see [Delete pages and their contents](https://help.hcltechsw.com/digital-experience/9.5/admin-system/delete_page_and_contents.html){:target="_blank"}. 

## Access the latest HCL Digital Experience 9.5 Education Materials on HCL Software Academy
The HCL Software Academy offers technical education for the HCL Software portfolio of products, organized by practitioner role. New **What’s New in the latest DX CF** release modules are available for Digital Experience business users, developers and administrators. See the [HCL Digital Experience section](https://academy.hcltechsw.com/#HCLDXLearningJourneys){:target="_blank"} of the HCL Software Academy and [What’s New for Digital Experience section](https://academy.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=){:target="_blank"} for more information.