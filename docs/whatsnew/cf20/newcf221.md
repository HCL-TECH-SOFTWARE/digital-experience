# What's new in CF221

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF221 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

- Progress indication for XMLAccess
- Progress indication for syndication
- Setting a cache header for WCM GET REST APIs
- Retrieving multiple content items in one REST call through a list of UUIDs
- Updated OpenAI ChatGPT to latest model `gpt-4o`
- SEO tag configuration for Open Graph compatibility
- TinyMCE - Improved menu options for inplace editing
- New options for installing DXClient
- New DXClient command `accept-license`
- Notice of deprecation of Textbox.io Rich Text Editor

**Digital Experience 8.5 and 9.0 Versions**

- End of Support announced for Digital Experience v8.5 and 9
- Automatically apply 9.5 from CF222 installation

**Digital Experience 9.5 Container Version**

- Newly created virtual Portals now contain Practitioner Studio
- HCL DX on AWS Marketplace now available
- New parameter for configuring HAProxy networking
- New documentation about the types of Services used in DX
- Digital Asset Management - Indexing
- Downloading a mismatch report even if find mismatch process is not complete
- Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository
- Notice of deprecation of customized OpenLDAP container starting CF223
- Removal of automated Pod restart on ConfigMap updates

Go to the [HCL Software Support Site/HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959) for the list of software fixes, including Container Update releases.

## All Digital Experience Versions (8.5, 9.0, 9.5)

### Progress indication for XMLAccess

=== "Containers"
    You can enable progress logging to see the progress of XMLAccess in updating items contained in the xmlaccess input script. This feature is helpful when monitoring larger xmlaccess imports. For more information, see [Working with the XML configuration interface](../../deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/index.md).
    
=== "On-Premises"
    You can enable progress logging to see the progress of XMLAccess in updating items contained in the xmlaccess input script. This feature is helpful when monitoring larger xmlaccess imports. For more information, see [Working with the XML configuration interface](../../deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/index.md).

### Progress indication for syndication

=== "Containers"
    You can log the syndication progress on the subscriber. With this feature, you can track the status of the syndication process. For more information, see [Syndication progress logging](../../manage_content/wcm_delivery/syndication/wcm_syndication_troubleshooting.md#syndication-progress-logging).
    
=== "On-Premises"
    You can log the syndication progress on the subscriber. With this feature, you can track the status of the syndication process. For more information, see [Syndication progress logging](../../manage_content/wcm_delivery/syndication/wcm_syndication_troubleshooting.md#syndication-progress-logging).

### Setting a cache header for WCM GET REST APIs

=== "Containers"
    You can configure a cache header for GET requests for unauthenticated users. Configuring cache headers result to better performance and cachability. For more information, see [Cache headers for WCM REST V2](../../manage_content/wcm_development/wcm_rest_v2/wcm_rest_v2_starting.md#cache-headers-for-wcm-rest-v2).
    
=== "On-Premises"
    You can configure a cache header for GET requests for unauthenticated users. Configuring cache headers result to better performance and cachability. For more information, see [Cache headers for WCM REST V2](../../manage_content/wcm_development/wcm_rest_v2/wcm_rest_v2_starting.md#cache-headers-for-wcm-rest-v2).

### Retrieving multiple content items in one REST call through a list of UUIDs   

=== "Containers"
    You can retrieve multiple content items in one REST call through a list of Universally Unique Identifiers (UUIDs). For more information, see [WCM REST V2 API documentation](https://opensource.hcltechsw.com/experience-api-documentation/wcm-api/).
    
=== "On-Premises"
    You can retrieve multiple content items in one REST call through a list of Universally Unique Identifiers (UUIDs). For more information, see [WCM REST V2 API documentation](https://opensource.hcltechsw.com/experience-api-documentation/wcm-api/).

### Updated OpenAI ChatGPT to latest model `gpt-4o`

=== "Containers"
    Starting CF221, the AI model is switched to ```gpt-4o```. This model is the newest and the most capable model with up-to-date information. For more information, see [Getting started with the REST service for Web Content Manager V2](../../get_started/plan_deployment/container_deployment/wcm_content_ai_analysis.md).
    
=== "On-Premises"
    Starting CF221, the AI model is switched to ```gpt-4o```. This model is the newest and the most capable model with up-to-date information. For more information, see [Getting started with the REST service for Web Content Manager V2](../../get_started/plan_deployment/container_deployment/wcm_content_ai_analysis.md).


### SEO tag configuration for Open Graph compatibility

=== "Containers"
    A new configuration option is added to generate [Open Graph](https://ogp.me/) compatible tags when rendering DX. The Open Graph protocol allows you to set the `property` attribute value in the meta tag, improving the parsing of your website's content by social networks or search engines. For more information, see [Adding HTML meta tags for Search Engine Optimization (SEO)](../../manage_content/wcm_delivery/deliver_webcontent_on_dx/customizing_content/wcm_config_wcmviewer_seo.md).
    
=== "On-Premises"
    A new configuration option is added to generate [Open Graph](https://ogp.me/) compatible tags when rendering DX. The Open Graph protocol allows you to set the `property` attribute value in the meta tag, improving the parsing of your website's content by social networks or search engines. For more information, see [Adding HTML meta tags for Search Engine Optimization (SEO)](../../manage_content/wcm_delivery/deliver_webcontent_on_dx/customizing_content/wcm_config_wcmviewer_seo.md).

### TinyMCE - Improved menu options for inplace editing

=== "Containers"
    The menu options for inplace editing using TinyMCE are now similar to the menu for TinyMCE in WCM authoring. For information about TinyMCE Editor, see [Rich text editor toolbar configuration options](../../manage_content/wcm_configuration/cfg_webcontent_auth_env/wcm_config_ephox_custom.md). 
    
=== "On-Premises"
    The menu options for inplace editing using TinyMCE are now similar to the menu for TinyMCE in WCM authoring. For information about TinyMCE Editor, see [Rich text editor toolbar configuration options](../../manage_content/wcm_configuration/cfg_webcontent_auth_env/wcm_config_ephox_custom.md).

### New options for installing DXClient

=== "Containers"
    You can now install DXClient [from the NpmJS public registry](../../extend_dx/development_tools/dxclient/index.md#installing-or-uninstalling-dxclient-from-npmjs-registry) or [from the container image in the public Harbor repository](../../extend_dx/development_tools/dxclient/index.md#installing-dxclient-using-the-container-image-in-the-harbor-repository). The open distribution of DXClient makes it easier for DX developers to download and work with the tool. Previously, developers need Administrator access to get DXClient.

    After openly distributing DXClient, the versioning format is now changed from 1.xx.x to <CFNumber>.x.x. For CF221, the DXClient version is 221.0.0. For more information, see [DXClient](../../extend_dx/development_tools/dxclient/index.md).

=== "On-Premises"
    You can now install DXClient [from the NpmJS public registry](../../extend_dx/development_tools/dxclient/index.md#installing-or-uninstalling-dxclient-from-npmjs-registry) or [from the container image in the public Harbor repository](../../extend_dx/development_tools/dxclient/index.md#installing-dxclient-using-the-container-image-in-the-harbor-repository). The open distribution of DXClient makes it easier for DX developers to download and work with the tool. Previously, developers need Administrator access to get DXClient.

    After openly distributing DXClient, the versioning format is now changed from 1.xx.x to <CFNumber>.x.x. For CF221, the DXClient version is 221.0.0. For more information, see [DXClient](../../extend_dx/development_tools/dxclient/index.md).

### New DXClient command `accept-license`

=== "Containers"
    HCL DX introduces a license agreement in DXClient which can be accepted using the command `accept-license`. For command details, see [DXClient usage information commands](../../extend_dx/development_tools/dxclient/index.md#dxclient-information-commands).

=== "On-Premises"
    HCL DX introduces a license agreement in DXClient which can be accepted using the command `accept-license`. For command details, see [DXClient usage information commands](../../extend_dx/development_tools/dxclient/index.md#dxclient-information-commands).

### Notice of deprecation of Textbox.io Rich Text Editor 

=== "Containers"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and End of Support (EOS) is on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

=== "On-Premises"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and End of Support (EOS) is on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

## Digital Experience 8.5 and 9.0 Versions

### End of Support announced for Digital Experience v8.5 and 9

=== "On-Premises"
    On June 30, 2023, HCL Software announced End of Support for HCL Digital Experience versions 8.5 and 9, effective June 30, 2025. Customers are encouraged to upgrade to HCL Digital Experience version 9.5, released in a continuous delivery model. Refer to the [Deprecated features](../deprecated_features.md) page for more information.
    
### Automatically apply 9.5 from CF222 installation

=== "On-Premises"
    In CF219, a feature was introduced where [DX version 9.5 is automatically applied](../../deployment/install/traditional/cf_install/index.md) to an 8.5 or 9.0 installation if the configuration setting `install_95=true` is set. Note that starting with the next DX release, CF222, 9.5 is applied by default unless you set `install_95=false`.

## Digital Experience 9.5 Container Version

### Newly created virtual Portals now contain Practitioner Studio

=== "Containers"
    Starting CF221, the Virtual Portal Manager is configured to use the file `WebSphere:assetname=VirtualPortal.zip:InitVirtualContentPortalV9.5NoWoodburn.xml` on newly deployed containers so that newly created virtual Portals contain Practitioner Studio. For more information, see [Configuring Practitioner Studio](../../build_sites/practitioner_studio/working_with_ps/config_prac_studio.md).

### HCL DX on AWS Marketplace now available

=== "Containers"
    HCL DX Cloud Native is live and listed in the [AWS Marketplace](https://aws.amazon.com/marketplace/pp/prodview-xxxuhyr7adj3a). This allows customers with AWS agreements to simplify procurement and manage their software through one centralized account. For customers who purchase DX through the Marketplace as a containerized product offering, you can download the latest DX 9.5 container images and Helm charts. For instructions on how to deploy HCL DX acquired from the AWS Marketplace, see [AWS Marketplace Helm deployment](../../deployment/install/container/helm_deployment/aws_marketplace_helm_deployment.md).

### New parameter for configuring HAProxy networking

=== "Containers"
    New parameter `sessionCookieName` is now available when you configure HAProxy networking. There is also additional information added for the `strictTransportSecurity.enabled` parameter. For more information, see [Configure Networking](../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configure_networking.md#configure-haproxy-networking).

### New documentation about the types of Services used in DX

=== "Containers"
    In Kubernetes, a Service is a method for exposing a network application that is running as one or more Pods in your cluster. The topic [Types of Services used in DX](../../get_started/plan_deployment/container_deployment/service_types.md) provides more information about these Services.

### Digital Asset Management - Indexing

=== "Containers"
    You can use Digital Asset Management (DAM) as a datasource of the Search service for you to search DAM assets and images more efficiently. For instructions on how to configure and use indexing in DAM, see [DAM Indexing](../../manage_content/digital_assets/configuration/dam_indexing/index.md).

### Downloading a mismatch report even if find mismatch process is not complete

=== "Containers" 
    You can use the `-forceDownload <value>` attribute to download a mismatch report even if the find mismatch process is not complete. Documentation is also updated to list the scenarios where you cannot download a mismatch report. For more information, see [DAM Staging Mismatch and Resync](../../manage_content/digital_assets/configuration/staging_dam/dam_staging_mismatch.md#download-mismatch-report).

<!--### New guidance for performance sizing for rendering in medium configuration

=== "Containers"    
    Results of DX sizing tests for rendering with a medium configuration are now available. This guidance presents the important KPIs and discusses how adjustments to the pod configuration can make significant improvements in the responsiveness of the system. For more information, see the topic [Performance-sizing guidance for rendering with a medium configuration](../../get_started/plan_deployment/container_deployment/rm_container/dx_performance_medium_cfg.md).-->

### Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository

=== "Containers"
    Starting CF216, the Harbor repository is updated with an OCI-based registry and the Helm chart command is updated to be OCI-compliant. Instructions on how to pull Helm charts using OCI commands are now available. For more information, see the Help Center topics [Configure Harbor Helm Repository](../../deployment/install/container/helm_deployment/preparation/get_the_code/configure_harbor_helm_repo.md) and [Download and Deploy from HCL Harbor Repository](../../get_started/download/harbor_container_registry.md).
    
### Notice of deprecation of customized OpenLDAP container starting CF223

=== "Containers"
    Starting CF223, HCL DX will no longer build and ship its custom OpenLDAP container and will instead use an open source container. By using the robust and well-maintained Bitnami OpenLDAP image, HCL DX can focus on delivering enhanced features and support without the overhead of maintaining its customized container. This shift is to provide you with more reliable and up-to-date solutions for your test environments. The new alternative, Bitnami, will be provided but will not ship with the release. Sample LDIF files for your OpenLDAP configuration will also be available.
    
### Removal of automated Pod restart on ConfigMap updates

=== "Containers"
    Runtime Controller triggering Pod restarts for [direct configuration changes](../../deployment/manage/container_configuration/index.md#rollout-of-configuration-changes) in ConfigMaps is removed. You must restart the appropriate Pods manually to apply the changes made to the ConfigMaps for testing configurations. For more information, see [Deprecated features](../deprecated_features.md).

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/hcl-dx) section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=) section for more information.
