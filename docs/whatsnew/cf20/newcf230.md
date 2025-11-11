# What's new in CF230

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF230 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

- My HCLSoftware delivery portal
- DXClient - New `xmlAccessOutputFileName` parameter added
- Presentation Designer - Handle multiple stylesheet components
- HCL DX Action Bar and Practitioner Studio UI updates

**Digital Experience 8.5 and 9.0 Versions**

- Extended Support option now available for DX versions 8.5 and 9.0
- Automatically apply 9.5 from a later CF installation

**Digital Experience 9.5 Container Version**

- Blueprint updates
- Helm values updates
- Enabling OIDC SSO between HCL DX and HCL Leap in Kubernetes
- Guide Me section restructured
- Search V2 Authoring - Advanced search filters
- WAS, JDK, and iFix versions

**Notices of deprecation**

- Removal of automated Pod restart on ConfigMap updates (8.5 and 9.0)
- CKEditor Rich Text Editor (9.5)
- Woodburn Studio demo site (9.5)

Go to the [HCL Software Support Site/HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959){target="_blank"} for the list of software fixes, including Container Update releases.

## All Digital Experience Versions (8.5, 9.0, 9.5)

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

### DXClient - New `xmlAccessOutputFileName` parameter added

=== "Containers"
    You can now use the new `xmlAccessOutputFileName` parameter to specify the name of an output XML file. For more information, refer to [XMLAccess](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/xmlaccess.md).

=== "On-Premises"
    You can now use the new `xmlAccessOutputFileName` parameter to specify the name of an output XML file. For more information, refer to [XMLAccess](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/xmlaccess.md).

### Presentation Designer - Handle multiple stylesheets components

=== "Containers"
    You can now apply multiple stylesheet components to a presentation template for more advanced control and structured styling, giving you the freedom to define styles beyond the limitations of the Default and Override stylesheets in Presentation Designer. For more information, refer to [Handle multiple stylesheets in Presentation Designer](../../manage_content/wcm_authoring/presentation_designer/usage/handle_multiple_stylesheets.md).

=== "On-Premises"
    You can now apply multiple stylesheet components to a presentation template for more advanced control and structured styling, giving you the freedom to define styles beyond the limitations of the Default and Override stylesheets in Presentation Designer. For more information, refer to [Handle multiple stylesheets in Presentation Designer](../../manage_content/wcm_authoring/presentation_designer/usage/handle_multiple_stylesheets.md ).

### HCL DX Action Bar and Practitioner Studio UI updates

=== "Containers"
    The HCL DX Action Bar and Practitioner Studio UI have been updated with a new side navigation and improved navigation structure for enhanced usability and design. For more information, refer to the following topics:

    - [Exploring the Site Toolbar and Site Manager - Action Bar](../../build_sites/create_sites/adding_pages_content_more/toolbar_sm_ovr.md#action-bar)
    - [Practitioner Studio - Enhanced Practitioner Studio and toolbar](../../build_sites/practitioner_studio/index.md#enhanced-practitioner-studio-and-toolbar)

=== "On-Premises"
    The HCL DX Action Bar and Practitioner Studio UI have been updated with a new side navigation and improved navigation structure for enhanced usability and design. For more information, refer to the following topics:

    - [Exploring the Site Toolbar and Site Manager - Action Bar](../../build_sites/create_sites/adding_pages_content_more/toolbar_sm_ovr.md#action-bar)
    - [Practitioner Studio - Enhanced Practitioner Studio and toolbar](../../build_sites/practitioner_studio/index.md#enhanced-practitioner-studio-and-toolbar)

## Digital Experience 8.5 and 9.0 Versions

### Extended Support option now available for DX versions 8.5 and 9.0

=== "On-Premises"
    HCLSoftware announced End of Support for HCL Digital Experience versions 8.5 and 9, effective June 30, 2025. Customers are encouraged to upgrade to HCL Digital Experience version 9.5, released in a continuous delivery model. Refer to the [Deprecated features](../deprecated_features.md) page for more information.

    To accommodate the customers who might be unable to update from DX versions 8.5 and 9.0 to DX version 9.5 by that date, customers can sign up for Extended Support. For more information, see the article [Starting on August 30, 2024, Extended Support will be available for HCL Digital Experience V8.5.x and 9](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0115794){target="_blank"}. Extended support will be offered from June 30, 2025 until June 30, 2026.

### Automatically apply 9.5 from a later CF installation

=== "On-Premises"
    In CF219, a feature was introduced where [DX version 9.5 is automatically applied](../../deployment/install/traditional/cf_install/index.md) to an 8.5 or 9.0 installation if the configuration setting `install_95=true` is set. Note that a later CF might apply 9.5 by default unless you set `install_95=false`. This statement is not a guarantee of future releases or their features.

## Digital Experience 9.5 Container Version

### Blueprint updates

=== "Containers"
    The HCL DX Blueprint design system has been updated for CF230. For more information on the changes, improvements, and bugfixes, refer to the [Blueprint changelog](https://opensource.hcltechsw.com/dx-blueprint-storybook/230.0.0/?path=/docs/overview-changelog--documentation){target="_blank"}.

### Helm values updates

=== "Containers"
    Helm value properties in HCL DX that were added, removed, or changed for this release are documented in [DX Helm values updates](../dx_helm_values_updates.md#cf230).

### Enabling OIDC SSO between HCL DX and HCL Leap in Kubernetes

=== "Containers"
    You can now enable Single Sign-On (SSO) using the OpenID Connect (OIDC) protocol when integrating HCL DX with HCL Leap. This approach connects directly to the preferred Identity Provider (IdP) such as Keycloak, Azure Active Directory (AD) or Okta. By configuring DX and Leap to trust your central IdP, users get a seamless "login once" experience and security is managed in a single place. For more information, refer to [Configuring HCL Leap for integration with HCL DX - Implementing OIDC SSO](../../extend_dx/integration/leap/configuration.md#implementing-oidc-sso).

### Guide Me section restructured

=== "Containers"
    The Guide Me section has been restructured to include three main subtopics: Guides, How-to articles, and Glossary. For more information, refer to [Guide Me](../../guide_me/index.md).

### Search V2 Authoring - Advanced search filters

=== "Containers"
    You can now apply additional search options to refine your search results and narrow down large data sets more efficiently. These options include filters such as Author, Status, and Last Modified, and attributes such as Description, Title, and Type. For more information, refer to [Using Search V2 Authoring - Advanced Search Filter](../../build_sites/search_v2_authoring/usage.md#advanced-search-filter).

### WAS, JDK, and iFix versions

=== "Containers"
    HCL DX 9.5 CF230 contains the following:

    - [WebSphere Application Server 9.0.5.24](../../get_started/system_requirements/traditional/supported_config.md#websphere-application-server)
    - [Java Development Kit 8.0.8.45](../../get_started/system_requirements/traditional/supported_config.md#java-sdk)
    - iFix PH66674

## Notices of deprecation

### CKEditor Rich Text Editor (8.5, 9.0, and 9.5)

=== "Containers"
    The CKEditor Rich Text Editor component in HCL DX will be deprecated on August 05, 2025 and will reach End of Support (EOS) on August 04, 2026. For more information, refer to [Deprecated features](../deprecated_features.md).

=== "On-Premises"
    The CKEditor Rich Text Editor component in HCL DX will be deprecated on August 05, 2025 and will reach End of Support (EOS) on August 04, 2026. For more information, refer to [Deprecated features](../deprecated_features.md).

### Woodburn Studio demo site (9.5)

=== "Containers"
    The Woodburn Studio demo site in HCL DX will be deprecated on August 05, 2025 and will reach End of Support (EOS) on August 04, 2026. For more information, refer to [Deprecated features](../deprecated_features.md).

=== "On-Premises"
    The Woodburn Studio demo site in HCL DX will be deprecated on August 05, 2025 and will reach End of Support (EOS) on August 04, 2026. For more information, refer to [Deprecated features](../deprecated_features.md).

### Removal of automated Pod restart on ConfigMap updates (9.5)

=== "Containers"
    Runtime Controller triggering Pod restarts for [direct configuration changes](../../deployment/manage/container_configuration/index.md#rollout-of-configuration-changes) in ConfigMaps is removed. You must restart the appropriate Pods manually to apply the changes made to the ConfigMaps for testing configurations. For more information, see [Deprecated features](../deprecated_features.md).

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/hcl-dx){target="_blank"} section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=){target="_blank"} section for more information.
