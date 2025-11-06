# What's new in CF231 

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF231 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

- My HCLSoftware delivery portal
- DXClient - Create and deploy Script Applications using the `create-dx-script-app` tool

**Digital Experience 8.5 and 9.0 Versions**

- Extended Support option now available for DX versions 8.5 and 9.0
- Automatically apply 9.5 from a later CF installation

**Digital Experience 9.5 Container Version**

- Blueprint updates
- DAM - External database support now available
- DX Picker integration with Search V2
- Helm values updates
- Performance Tuning Guide updates
- Search V2 - New Atomic Components and supported CSS part attributes available
- WAS, JDK, and iFix versions

**Notices of deprecation**

- CKEditor Rich Text Editor (8.5, 9.0, and 9.5)
- Removal of automated Pod restart on ConfigMap updates (9.5)
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

### DXClient - Create and deploy Script Applications using the `create-dx-script-app` tool

=== "Containers"
    You can now use the `create-dx-script-app` tool to create and deploy Script Applications for your HCL DX environment. This modular toolkit generates modern React applications that integrate seamlessly with the HCL DX platform, providing you with ready-made templates and configurations to accelerate your development workflow. For more information, refer to [Creating and Deploying DX Script Applications](../../extend_dx/development_tools/create-and-deploy-script-app.md).

=== "On-Premises"
    You can now use the `create-dx-script-app` tool to create and deploy Script Applications for your HCL DX environment. This modular toolkit generates modern React applications that integrate seamlessly with the HCL DX platform, providing you with ready-made templates and configurations to accelerate your development workflow. For more information, refer to [Creating and Deploying DX Script Applications](../../extend_dx/development_tools/create-and-deploy-script-app.md).

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
    The HCL DX Blueprint design system has been updated for CF231. For more information on the changes, improvements, and bugfixes, refer to the [Blueprint changelog](https://opensource.hcltechsw.com/dx-blueprint-storybook/231.0.0/?path=/docs/overview-changelog--documentation){target="_blank"}.

### DAM - External database support now available

=== "Containers"
    You can now configure external databases for Digital Asset Management (DAM). For more information and a sample scenario, refer to [Configuring an external database for DAM](../../manage_content/digital_assets/configuration/external_dam_database.md).

### DX Picker integration with Search V2

=== "Containers"
    The DX Picker feature is now integrated in Search V2. This integration lets you search and select items from multiple content sources, including Java Content Repository (JCR) and Web Content Manager (WCM), in addition to Digital Asset Management (DAM). Installation and deployment methods have also been streamlined for efficiency. For more information, refer to the following topics:

    - [Enabling and disabling DX Picker](../../manage_content/wcm_authoring/dx_picker/enable.md)
    - [Accessing DX Picker](../../manage_content/wcm_authoring/dx_picker/access.md)
    - [Using DX Picker](../../manage_content/wcm_authoring/dx_picker/usage.md)
    - [Limitations of DX Picker](../../manage_content/wcm_authoring/dx_picker/limitations.md)

### Helm values updates

=== "Containers"
    Helm value properties in HCL DX that were added, removed, or changed for this release are documented in [DX Helm values updates](../dx_helm_values_updates.md#cf229).

### Performance Tuning Guide updates

=== "Containers"
    An updated Performance Tuning Guide is now available for HCL DX deployments on Kubernetes. The guide provides recommendations for tuning key systems such as the application server, databases, directory servers, HAProxy, and Kubernetes components. It helps administrators establish baselines, monitor performance metrics, and apply optimizations to improve scalability and reliability in Kubernetes environments. For more details, refer to [Performance Tuning Guides](../../guide_me/guides/performance_tuning/index.md).

### Search V2 - New Atomic Components and supported CSS part attributes available

=== "Containers"
    New Atomic Components (ACs) and their corresponding CSS part attributes are now available for Search V2. Existing ACs and Functional Composite Components (FCCs) have also been updated to support additional CSS part attributes.

    |New ACs|Updated ACs|Updated FCCs|
    |-----|-----|-----|
    |`dx-accordion`<br>`dx-alert`<br>`dx-breadcrumbs`<br>`dx-breadcrumbs-item`<br>`dx-data-grid-generic`<br>`dx-datepicker`<br>`dx-item-type-avatar`<br>`dx-multiple-select-chip`<br>`dx-panel`<br>`dx-preview`<br>`dx-snackbar`<br>`dx-theme-inspector`<br>`dx-tooltip`<br>|`dx-anchor`<br>`dx-avatar`<br>`dx-badge`<br>`dx-dialog`<br>`dx-header`<br>`dx-icon-button`<br>`dx-menu-item`<br>`dx-search-center-layout`<br>`dx-table-pagination`<br>`dx-toggle-button`<br>|`dx-circular-progress`*<br>`dx-search-input-type`<br>`dx-search-output`<br>|

    \* Reclassified as an AC

    For more information on the new and updated ACs, refer to [Atomic Components](../../build_sites/search_v2/components/atomic_components.md) and [Functional Composite Components](../../build_sites/search_v2/components/functional_composite_components.md).

### WAS, JDK, and iFix versions

=== "Containers"
    HCL DX 9.5 CF231 contains the following:

    - [WebSphere Application Server 9.0.5.25](../../get_started/system_requirements/traditional/supported_config.md#websphere-application-server)
    - [Java Development Kit 8.0.8.51](../../get_started/system_requirements/traditional/supported_config.md#java-sdk)
    - iFix PH67137
    - iFix PH67817

## Notices of deprecation

### CKEditor Rich Text Editor (8.5, 9.0, and 9.5)

=== "Containers"
    The CKEditor Rich Text Editor component in HCL DX will be deprecated on August 05, 2025 and will reach End of Support (EOS) on August 04, 2026. For more information, refer to [Deprecated features](../deprecated_features.md).

=== "On-Premises"
    The CKEditor Rich Text Editor component in HCL DX will be deprecated on August 05, 2025 and will reach End of Support (EOS) on August 04, 2026. For more information, refer to [Deprecated features](../deprecated_features.md).

### Removal of automated Pod restart on ConfigMap updates (9.5)

=== "Containers"
    Runtime Controller triggering Pod restarts for [direct configuration changes](../../deployment/manage/container_configuration/index.md#rollout-of-configuration-changes) in ConfigMaps is removed. You must restart the appropriate Pods manually to apply the changes made to the ConfigMaps for testing configurations. For more information, see [Deprecated features](../deprecated_features.md).

### Woodburn Studio demo site (9.5)

=== "Containers"
    The Woodburn Studio demo site in HCL DX will be deprecated on August 05, 2025 and will reach End of Support (EOS) on August 04, 2026. For more information, refer to [Deprecated features](../deprecated_features.md).

=== "On-Premises"
    The Woodburn Studio demo site in HCL DX will be deprecated on August 05, 2025 and will reach End of Support (EOS) on August 04, 2026. For more information, refer to [Deprecated features](../deprecated_features.md).

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/hcl-dx){target="_blank"} section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=){target="_blank"} section for more information.
