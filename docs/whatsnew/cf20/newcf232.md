# What's new in CF232

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF232 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

- My HCLSoftware delivery portal
- Presentation Designer - Direction-specific styling for bidirectional text layouts

**Digital Experience 8.5 and 9.0 Versions**

- Extended Support option now available for DX versions 8.5 and 9.0
- Automatically apply 9.5 from a later CF installation

**Digital Experience 9.5 Container Version**

- Additional configuration options for DX Core probes
- HAProxy custom headers now available
- Blueprint updates
- Helm values updates
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

### Presentation Designer - Direction-specific styling for bidirectional text layouts

=== "Containers"
    Override styles now support direction-specific styling for bidirectional text layouts through the **Canvas direction toggle** in the Presentation Designer header. This allows you to create distinct styles for RTL (Right-to-Left) and LTR (Left-to-Right) text directions. For more information, refer to [Override stylesheet](../../manage_content/wcm_authoring/presentation_designer/usage/default_and_override_stylesheet.md#override-stylesheet).

=== "On-Premises"
    Override styles now support direction-specific styling for bidirectional text layouts through the **Canvas direction toggle** in the Presentation Designer header. This allows you to create distinct styles for RTL (Right-to-Left) and LTR (Left-to-Right) text directions. For more information, refer to [Override stylesheet](../../manage_content/wcm_authoring/presentation_designer/usage/default_and_override_stylesheet.md#override-stylesheet).

## Digital Experience 8.5 and 9.0 Versions

### Extended Support option now available for DX versions 8.5 and 9.0

=== "On-Premises"
    HCLSoftware announced End of Support for HCL Digital Experience versions 8.5 and 9, effective June 30, 2025. Customers are encouraged to upgrade to HCL Digital Experience version 9.5, released in a continuous delivery model. Refer to the [Deprecated features](../deprecated_features.md) page for more information.

    To accommodate the customers who might be unable to update from DX versions 8.5 and 9.0 to DX version 9.5 by that date, customers can sign up for Extended Support. For more information, see the article [Starting on August 30, 2024, Extended Support will be available for HCL Digital Experience V8.5.x and 9](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0115794){target="_blank"}. Extended support will be offered from June 30, 2025 until June 30, 2026.

### Automatically apply 9.5 from a later CF installation

=== "On-Premises"
    In CF219, a feature was introduced where [DX version 9.5 is automatically applied](../../deployment/install/traditional/cf_install/index.md) to an 8.5 or 9.0 installation if the configuration setting `install_95=true` is set. Note that a later CF might apply 9.5 by default unless you set `install_95=false`. This statement is not a guarantee of future releases or their features.

## Digital Experience 9.5 Container Version

### Additional configuration options for DX Core probes

=== "Containers"
    The targets for the Core `readiness` and `startup` probes can now be configured for more flexibility. For more information, refer to [Core probes configuration](../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/probes_configuration.md#core-probes-configuration).

### HAProxy custom headers now available

=== "Containers"
    You can now configure custom HTTP headers in the HAProxy configuration through the HCL DX 9.5 Helm chart. You can add new headers and remove existing headers from responses generated by HAProxy. For more information refer to [Configure Networking - HAProxy custom headers](../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configure_networking.md#haproxy-custom-headers).

### Blueprint updates <!--Update for CF232-->

=== "Containers"
    The HCL DX Blueprint design system has been updated for CF232. For more information on the changes, improvements, and bugfixes, refer to the [Blueprint changelog](https://opensource.hcltechsw.com/dx-blueprint-storybook/231.0.0/?path=/docs/overview-changelog--documentation){target="_blank"}.

### Helm values updates

=== "Containers"
    Helm value properties in HCL DX that were added, removed, or changed for this release are documented in [DX Helm values updates](../dx_helm_values_updates.md#cf232).

### WAS, JDK, and iFix versions

=== "Containers"
    HCL DX 9.5 CF232 contains the following:

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
    The Woodburn Studio demo site in HCL DX has been deprecated on August 05, 2025 and will reach End of Support (EOS) on August 04, 2026. For more information, refer to [Deprecated features](../deprecated_features.md).

=== "On-Premises"
    The Woodburn Studio demo site in HCL DX has been deprecated on August 05, 2025 and will reach End of Support (EOS) on August 04, 2026. For more information, refer to [Deprecated features](../deprecated_features.md).

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/hcl-dx){target="_blank"} section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=){target="_blank"} section for more information.
