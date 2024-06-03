# What's new in CF220

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF220 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

- Progress Indication for XMLAccess
- Progress Indication for Syndication
- Ability to set cache header for WCM GET REST APIs
- Update OpenAI Chatgpt to latest powerful model gpt-4o
- Search Engine Optimization tag configuration for Open Graph compatibility
- Tiny Inline edit additional menu options
- Notice of deprecation of Textbox.io Rich Text Editor

**Digital Experience 8.5 and 9.0 Versions**

- End of Support Announced for Digital Experience v8.5 and 9
- Change in the application of 9.5 during 8.5/9.0 installation for CF221

**Digital Experience 9.5 Version**


**Digital Experience 9.5 Container Version**

- Virtual Portal Manager configured so that newly created virtual Portals contain Practitioner Studio
- Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository
- Notice of deprecation of automated Pod restart on ConfigMap updates

Go to the [HCL Software Support Site/HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959) for the list of software fixes, including Container Update releases.

## All Digital Experience Versions (8.5, 9.0, 9.5)

### Progress Indication for XMLAccess

Starting with version CF 221 one can enable progress logging to see how far XMLAccess is along in updating items contained in the xmlaccess input script.
For more information see: [Working with the XML configuration interface](../../deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/index.md)

### Progress Indication for Syndication

New with CF 221 HCL DX allows to log syndication progress on the subscriber. 
For more information see: [Syndication troubleshooting](../../manage_content/wcm_delivery/syndication/wcm_syndication_troubleshooting.md)

### Ability to set cache header for WCM GET REST APIs

Starting with version CF221 it is possible to configure a cache header for GET requests for the unauthenticated user for better performance.
For more information see: [Getting started with the REST service for Web Content Manager V2](../../manage_content/wcm_development/wcm_rest_v2/wcm_rest_v2_starting.md)

### Update OpenAI Chatgpt to latest powerful model gpt-4o

Starting CF221, the AI model is switched to ```gpt-4o``` as the newest and most capable model with up to date information.
For more information see: [Getting started with the REST service for Web Content Manager V2](../../get_started/plan_deployment/container_deployment/wcm_content_ai_analysis.md)

### Search Engine Optimization tag configuration for Open Graph compatibility

With CF221 a new configuration option was added to generate [Open Graph](https://ogp.me/) compatible tags when rendering DX to be better parsable by social networks or search engines.

### Tiny Inline edit additional menu options

Starting with CF221 additional inline edit menu options have been added when using the Tiny rich text editor.

### Notice of deprecation of Textbox.io Rich Text Editor 

=== "Containers"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and will End of Support (EOS) on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

=== "On-Premises"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and will End of Support (EOS) on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

## Digital Experience 8.5 and 9.0 Versions

### End of Support Announced for Digital Experience v8.5 and 9

=== "On-Premises"
    On June 30, 2023, HCL Software announced end of support for HCL Digital Experience versions 8.5 and 9, effective June 30, 2025. Customers are encouraged to upgrade to HCL Digital Experience version 9.5, released in a continuous delivery model. Refer to the [Deprecated features](../deprecated_features.md) page for more information.
    
### DX upgrades starting CF221 automatically applies 9.5 to an 8.5/9.0 installation

=== "On-Premises"
    In CF219, a feature was introduced where [DX version 9.5 is automatically applied](../../deployment/install/traditional/cf_install/index.md) to an 8.5 or 9.0 installation if the configuration setting `install_95=true` is set. Note that starting with the next DX release, CF221, 9.5 is applied by default unless you set `install_95=false`.

## Digital Experience 9.5 Version


## Digital Experience 9.5 Container Version

### Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository

=== "Containers"
    Starting CF216, the Harbor repository is updated with an OCI-based registry and the Helm chart command is updated to be OCI-compliant. Instructions on how to pull Helm charts using OCI commands are now available. For more information, see the Help Center topics [Configure Harbor Helm Repository](../../deployment/install/container/helm_deployment/preparation/get_the_code/configure_harbor_helm_repo.md) and [Download and Deploy from HCL Harbor Repository](../../get_started/download/harbor_container_registry.md).

###  Notice of deprecation of automated Pod restart on ConfigMap updates

=== "Containers"
    Starting with the next DX release, CF221, Runtime Controller will not restart Pods automatically when a ConfigMap is changed manually. For production deployments, always use the Helm custom values and `helm upgrade` to change configuration. Using Helm upgrade for configuration changes triggers the appropriate restart processes. For development and testing when a ConfigMap is changed, you have to restart the appropriate Pod manually. For more information, see [Container configuration](../../deployment/manage/container_configuration/index.md#rollout-of-configuration-changes) and [Deprecated features](../deprecated_features.md).

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/hcl-dx) section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=) section for more information.
