# What's new in CF224

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF224 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

- AI Translation and Workflow capabilities in WCM
- Disabled SSL hostname verification
- Presentation Designer to visually create and modify WCM presentation templates
- Sync of WCM HTML components with DXClient
- Notice of deprecation of Textbox.io Rich Text Editor

**Digital Experience 8.5 and 9.0 Versions**

- Extended Support option now available for DX versions 8.5 and 9.0 
- Automatically apply 9.5 from a later CF installation

**Digital Experience 9.5 Container Version**

- WebEngine container leveraging OpenLiberty instead of IBM WebSphere Application Server
- Updated DAM User Interface
- New Search UI leveraging OpenSearch
- People Service
- New sizing guidance for rendering in the upper limit of a single-node configuration
- Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository
- Notice of deprecation of customized OpenLDAP container in a later CF

Go to the [HCL Software Support Site/HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959) for the list of software fixes, including Container Update releases.

## All Digital Experience Versions (8.5, 9.0, 9.5)

### AI Translation and Workflow capabilities in WCM

=== "Containers"
    You can use Artificial Intelligence (AI) Translation in WCM to translate content items into different languages. The AI Workflow options, on the other hand, allow you to automatically generate keywords, summary, and translate content. For more information, see [AI assistance for descriptions, keyword generation, translation, and sentiment analysis in a content item](../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/elements/wcm_dev_elements_ai_assistance.md).

=== "On-Premises"
    You can use Artificial Intelligence (AI) Translation in WCM to translate content items into different languages. The AI Workflow options, on the other hand, allow you to automatically generate keywords, summary, and translate content. For more information, see [AI assistance for descriptions, keyword generation, translation, and sentiment analysis in a content item](../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/elements/wcm_dev_elements_ai_assistance.md).

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

### Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository

=== "Containers"
    Starting CF216, the Harbor repository is updated with an OCI-based registry and the Helm chart command is updated to be OCI-compliant. Instructions on how to pull Helm charts using OCI commands are now available. For more information, see the Help Center topics [Configure Harbor Helm Repository](../../deployment/install/container/helm_deployment/preparation/get_the_code/configure_harbor_helm_repo.md) and [Download and Deploy from HCL Harbor Repository](../../get_started/download/harbor_container_registry.md).
    
### Notice of deprecation of customized OpenLDAP container in a later CF

=== "Containers"
    Note that in a later CF, HCL DX will no longer build and ship its custom OpenLDAP container and will instead use an open source container. By using the robust and well-maintained Bitnami&copy; OpenLDAP image, HCL DX can focus on delivering enhanced features and support without the overhead of maintaining its customized container. This shift is to provide you with more reliable and up-to-date solutions for your test environments. The new alternative, Bitnami&copy;, will be provided but will not ship with the release. Sample LDIF (LDAP data interchange format) files for your OpenLDAP configuration will also be available.

    This statement is not a guarantee of future releases or their features.
    
## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/hcl-dx){target="_blank"} section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=){target="_blank"} section for more information.
