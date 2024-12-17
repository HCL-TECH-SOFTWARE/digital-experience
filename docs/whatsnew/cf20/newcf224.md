# What's new in CF224

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF224 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

- AI Translation and Workflow capabilities in WCM
- Disabled SSL hostname verification
- Presentation Designer
- DXClient - LiveSync Pull and Push commands for WCM Design Library
- Support for portlets built and published by Volt MX Iris
- Notice of deprecation of Textbox.io Rich Text Editor

**Digital Experience 8.5 and 9.0 Versions**

- Extended Support option now available for DX versions 8.5 and 9.0 
- Automatically apply 9.5 from a later CF installation

**Digital Experience 9.5 Container Version**

- Digital Asset Management - Updated UI
- Search v2 - New UI
- People Service
- New topic for configuring of `hostAliases` for DX Pods
- New guidance for rendering in the upper limit of a single-node configuration
- Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository
- Notice of deprecation of customized OpenLDAP container in a later CF

Go to the [HCL Software Support Site/HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959){target="_blank"} for the list of software fixes, including Container Update releases.

## All Digital Experience Versions (8.5, 9.0, 9.5)

### AI Translation and Workflow capabilities in WCM

=== "Containers"
    You can use Artificial Intelligence (AI) Translation in WCM to translate content items into different languages. In addition, the AI Workflow options allow you to automatically generate keywords, summary, and translate content. For more information, see the topics [Using AI-assisted translation of content items](../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/elements/wcm_dev_elements_ai_assistance.md#using-ai-assisted-translation-of-content-items) and [Using AI workflow actions](../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/elements/wcm_dev_elements_ai_assistance.md#using-ai-workflow-actions).

=== "On-Premises"
    You can use Artificial Intelligence (AI) Translation in WCM to translate content items into different languages. In addition, the AI Workflow options allow you to automatically generate keywords, summary, and translate content. For more information, see the topics [Using AI-assisted translation of content items](../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/elements/wcm_dev_elements_ai_assistance.md#using-ai-assisted-translation-of-content-items) and [Using AI workflow actions](../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/elements/wcm_dev_elements_ai_assistance.md#using-ai-workflow-actions).

### Disabled SSL hostname verification

=== "Containers"
    With CF224, the underlying WebSphere Application Server (WAS) is updated to 9.0.5.21. The WAS 9.0.5.21 fix pack contains a change where WebSphere runtimes automatically verify if the hostname in the certificate matches the actual hostname of the URL. Starting CF224, the system disables this setting in the WAS Custom Security properties and in the `ssl.client.props` file for users who may not have Secure Sockets Layer (SSL) certificates in place.

    In case remote search is newly configured, the system also disables the setting in the WAS Custom Security properties and in the `ssl.client.props` file for the Remote Search container. If remote search is already configured, it might be necessary to disable the verification manually.

    For information about the changes from IBM WebSphere Application Server and steps how to disable the verification, see [Hostname verification for WebSphere Application Server traditional](https://www.ibm.com/support/pages/hostname-verification-websphere-application-server-traditional){target="_blank"}.

=== "On-Premises"
    The recent WebSphere Application Server (WAS) 9.0.5.21 and 8.5.5.27 fix packs contain a change where WebSphere runtimes automatically verify if the hostname in the certificate matches the actual hostname of the URL. Starting CF224, the system disables this setting in the WAS Custom Security properties and in the  `ssl.client.props` file when running the `applyCF` process for users who may not have Secure Sockets Layer (SSL) certificates in place.

    If all certificates are valid and the security changes must be maintained, add the configuration `wp.RetainSSLHostVerification=true` to `wkplc.properties` before running `applyCF`.

    Remote search is not updated automatically because the `applyCF` process is not present. It might be necessary to disable the verification manually.

    For information about the changes from IBM WebSphere Application Server and steps how to disable the verification, see [Hostname verification for WebSphere Application Server traditional](https://www.ibm.com/support/pages/hostname-verification-websphere-application-server-traditional){target="_blank"}.

### Presentation Designer

=== "Containers"
    You can now edit presentation templates through a drag-and-drop interface using Presentation Designer. You can select available user elements and use a variety of styling options for your presentation template. Changes you make are instantly reflected on the canvas, providing you with a real-time, visual editing experience. For more information, see [Presentation Designer](../../manage_content/wcm_authoring/presentation_designer/index.md).

=== "On-Premises"
    You can now edit presentation templates through a drag-and-drop interface using Presentation Designer. You can select available user elements and use a variety of styling options for your presentation template. Changes you make are instantly reflected on the canvas, providing you with a real-time, visual editing experience. For more information, see [Presentation Designer](../../manage_content/wcm_authoring/presentation_designer/index.md).

### DXClient - LiveSync Pull and Push commands for WCM Design Library

=== "Containers"
    LiveSync Pull and Push commands for WCM Design Library are now available for HTML and Folder Components. The [LiveSync Pull WCM Design Library command](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md#livesync-pull-wcm-design-library) syncs a WCM Design Library in a DX Server with a local folder. The [LiveSync Push WCM Design Library command](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md#livesync-push-wcm-design-library) syncs your WCM Design Library local files with the DX Server. For more information, see [LiveSync](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md).

=== "On-Premises"
    LiveSync Pull and Push commands for WCM Design Library are now available for HTML and Folder Components. The [LiveSync Pull WCM Design Library command](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md#livesync-pull-wcm-design-library) syncs a WCM Design Library in a DX Server with a local folder. The [LiveSync Push WCM Design Library command](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md#livesync-push-wcm-design-library) syncs your WCM Design Library local files with the DX Server. For more information, see [LiveSync](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md).

### Support for portlets built and published by Volt MX Iris

=== "Containers"
    With the release of HCL DX CF224 and HCL Volt MX Iris 9.5.45, developers can now use the Iris integrated development environment (IDE) to build web applications and publish them as portlets directly to a designated HCL DX environment. For more information, see the topics [Deploying HCL Volt MX portlet into HCL DX](../../extend_dx/integration/mx/example/mx_portlet_in_dx.md) and [Enabling SSO between HCL DX and Volt MX](../../extend_dx/integration/mx/configuration/index.md#enabling-sso-between-hcl-dx-and-volt-mx).

=== "On-Premises"
    With the release of HCL DX CF224 and HCL Volt MX Iris 9.5.45, developers can now use the Iris integrated development environment (IDE) to build web applications and publish them as portlets directly to a designated HCL DX environment. For more information, see the topics [Deploying HCL Volt MX portlet into HCL DX](../../extend_dx/integration/mx/example/mx_portlet_in_dx.md) and [Enabling SSO between HCL DX and Volt MX](../../extend_dx/integration/mx/configuration/index.md#enabling-sso-between-hcl-dx-and-volt-mx).

### Notice of deprecation of Textbox.io Rich Text Editor 

=== "Containers"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and End of Support (EOS) is on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

=== "On-Premises"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and End of Support (EOS) is on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

## Digital Experience 8.5 and 9.0 Versions

### Extended Support option now available for DX versions 8.5 and 9.0 

=== "On-Premises"
    HCLSoftware announced End of Support for HCL Digital Experience versions 8.5 and 9, effective June 30, 2025. Customers are encouraged to upgrade to HCL Digital Experience version 9.5, released in a continuous delivery model. Refer to the [Deprecated features](../deprecated_features.md) page for more information.
    
    To accommodate customers who might be unable to update from DX versions 8.5 and 9.0 to DX version 9.5 by that date, customers can sign up for Extended Support until June 30, 2025. For more information, see the article [Starting on August 30, 2024, Extended Support will be available for HCL Digital Experience V8.5.x and 9](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0115794){target="_blank"}. Extended support will be offered from June 30, 2025 until June 30, 2026.
    
### Automatically apply 9.5 from a later CF installation

=== "On-Premises"
    In CF219, a feature was introduced where [DX version 9.5 is automatically applied](../../deployment/install/traditional/cf_install/index.md) to an 8.5 or 9.0 installation if the configuration setting `install_95=true` is set. Note that a later CF might apply 9.5 by default unless you set `install_95=false`. This statement is not a guarantee of future releases or their features.

## Digital Experience 9.5 Container Version

### DAM - Updated UI

=== "Containers"
    The Digital Asset Management (DAM) user interface (UI) is now using a new theme to provide an improved visual experience for managing digital assets. Note that this update is limited to the UI theme only; no changes are made to DAM functionality. For more information, see [Digital Asset Management](../../manage_content/digital_assets/index.md).

### Search v2 - New UI 

=== "Containers"
    DX Search v2 replaces the existing Search feature in HCL DX. This feature introduces a new search interface along with a new backend service that utilizes OpenSearch to provide a seamless search experience. For more information, see [HCL End-user Search with OpenSearch](../../build_sites/search_using_opensearch/index.md).

### People Service

=== "Containers"
    People Service adds a layer of social connectivity in HCL DX, making it easier for team members to connect. It enhances user profiles with additional data and interactive features, improving team collaboration and project execution.

    Within the DX environment, authored content is linked to actual users, adding interactivity through pop-up business cards and profile links. The service is also supported by a robust API layer compatible with OpenAPI, ensuring third-party support and extensibility.

    For more information, see [People Service](../../extend_dx/integration/people_service/index.md).

### New guidance for configuring `hostAliases` for DX Pods

=== "Containers"
    New documentation for setting the `hostAliases` for DX Pods is now available. With the `hostAliases` field, you can add entries to the `/etc/hosts` file in the Pods. This is useful for setting up domain name system (DNS) names for other services in the cluster or for mapping hostnames to IP addresses. For more information, see [Setting the `hostAliases` for DX Pods](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_options_host_alias.md).

### New guidance for rendering in the upper limit of a single-node configuration

=== "Containers"
    Results of DX sizing tests for rendering with the upper limit in a single-node Kubernetes configuration are now available. This guidance presents the key performance indicators (KPIs) and discusses how adjustments to the pod configuration can make improvements in the responsiveness of the system. For more information, see the topic [Guidance for rendering with the upper limit in a single-node configuration](../../guide_me/performance_tuning/kubernetes/rendering_small_config.md#guidance-for-rendering-with-the-upper-limit-in-a-single-node-configuration).

### Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository

=== "Containers"
    Starting CF216, the Harbor repository is updated with an OCI-based registry and the Helm chart command is updated to be OCI-compliant. Instructions on how to pull Helm charts using OCI commands are now available. For more information, see the Help Center topics [Configure Harbor Helm Repository](../../deployment/install/container/helm_deployment/preparation/get_the_code/configure_harbor_helm_repo.md) and [Download and Deploy from HCL Harbor Repository](../../get_started/download/harbor_container_registry.md).
    
### Notice of deprecation of customized OpenLDAP container in a later CF

=== "Containers"
    Note that in a later CF, HCL DX will no longer build and ship its custom OpenLDAP container and will instead use an open source container. By using the robust and well-maintained Bitnami&copy; OpenLDAP image, HCL DX can focus on delivering enhanced features and support without the overhead of maintaining its customized container. This shift is to provide you with more reliable and up-to-date solutions for your test environments. The new alternative, Bitnami&copy;, will be provided but will not ship with the release. Sample LDIF (LDAP data interchange format) files for your OpenLDAP configuration will also be available.

    This statement is not a guarantee of future releases or their features.
    
## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/hcl-dx){target="_blank"} section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=){target="_blank"} section for more information.
