# What's new in CF233

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF233 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

- Blueprint updates
- My HCLSoftware delivery portal
- New How-to articles now available

**Digital Experience 8.5 and 9.0 Versions**

- Extended Support option now available for DX versions 8.5 and 9.0
- Automatically apply 9.5 from a later CF installation

**Digital Experience 9.5 Version**

- Brazilian Portuguese, Japanese, and Spanish translations now available

**Digital Experience 9.5 Container Version**

- Configuring LTPA for DX Core
- DAM - Database Analysis
- DAM - New required configuration to enable Indexing
- Helm values updates
- New HAProxy security configuration parameters
- WAS, JDK, and iFix versions

**Notices of deprecation**

- CKEditor Rich Text Editor (8.5, 9.0, and 9.5)
- Removal of automated Pod restart on ConfigMap updates (9.5)
- Woodburn Studio demo site (9.5)

Go to the [HCL Software Support Site/HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959){target="_blank"} for the list of software fixes, including Container Update releases.

## All Digital Experience Versions (8.5, 9.0, 9.5)

### Blueprint updates

=== "Containers"
    The HCL DX Blueprint design system has been updated for CF233. For more information on the changes, improvements, and bugfixes, refer to the [Blueprint changelog](https://opensource.hcltechsw.com/dx-blueprint-storybook/latest/?path=/docs/overview-changelog--documentation){target="_blank"}.

=== "On-Premises"
    The HCL DX Blueprint design system has been updated for CF233. For more information on the changes, improvements, and bugfixes, refer to the [Blueprint changelog](https://opensource.hcltechsw.com/dx-blueprint-storybook/latest/?path=/docs/overview-changelog--documentation){target="_blank"}.

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

### New How-to articles now available

=== "Containers"
    A new batch of How-to articles has been migrated from the knowledge base to the HCL DX Help Center. For more information, refer to the [How-to articles](../../guide_me/howto/index.md) section.

=== "On-Premises"
    A new batch of How-to articles has been migrated from the knowledge base to the HCL DX Help Center. For more information, refer to the [How-to articles](../../guide_me/howto/index.md) section.

## Digital Experience 8.5 and 9.0 Versions

### Extended Support option now available for DX versions 8.5 and 9.0

=== "On-Premises"
    HCLSoftware announced End of Support for HCL Digital Experience versions 8.5 and 9, effective June 30, 2025. Customers are encouraged to upgrade to HCL Digital Experience version 9.5, released in a continuous delivery model. Refer to the [Deprecated features](../deprecated_features.md) page for more information.

    To accommodate the customers who might be unable to update from DX versions 8.5 and 9.0 to DX version 9.5 by that date, customers can sign up for Extended Support. For more information, see the article [Starting on August 30, 2024, Extended Support will be available for HCL Digital Experience V8.5.x and 9](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0115794){target="_blank"}. Extended support will be offered from June 30, 2025 until June 30, 2026.

### Automatically apply 9.5 from a later CF installation

=== "On-Premises"
    In CF219, a feature was introduced where [DX version 9.5 is automatically applied](../../deployment/install/traditional/cf_install/index.md) to an 8.5 or 9.0 installation if the configuration setting `install_95=true` is set. Note that a later CF might apply 9.5 by default unless you set `install_95=false`. This statement is not a guarantee of future releases or their features.

## Digital Experience 9.5 Version

### Brazilian Portuguese, Japanese, and Spanish translations now available

=== "Containers"
    The HCL DX Help Center is now available in Brazilian Portuguese, Japanese, and Spanish. To switch languages, select an option from the dropdown menu in the top-right corner of any page.

=== "On-Premises"
    The HCL DX Help Center is now available in Brazilian Portuguese, Japanese, and Spanish. To switch languages, select an option from the dropdown menu in the top-right corner of any page.

## Digital Experience 9.5 Container Version

### Configuring LTPA for DX Core

=== "Containers"
    You can now enable Single Sign-On (SSO) capabilities for the Core component using Lightweight Third Party Authentication (LTPA). You can define the required keys and password directly in your `values.yaml` file for development environments, or reference an external Kubernetes Secret for production environments. For more information on how to configure LTPA, refer to [Configuring LTPA](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_configure_ltpa_key.md).

### DAM - Database Analysis

=== "Containers"
    The Database Analysis feature in Digital Asset Management (DAM) provides you with detailed metrics and insights into your DAM deployment. This feature helps you monitor database performance, storage utilization, and media asset distribution. You can access these metrics through the DAM REST API endpoint. For more information, refer to the [Database Analysis](../../manage_content/digital_assets/usage/managing_dam/database_analysis.md).

### DAM - New required configuration to enable Indexing

=== "Containers"
    Starting from CF233, to enable DAM Indexing, you need to set the `damIndexing` parameter to `true` in your `values.yaml` file and ensure all required `searchMiddleware` configurations are set. For more information, refer to [Adding OpenSearch middleware configurations and enabling DAM Indexing](../../manage_content/digital_assets/configuration/dam_indexing/configure_dam_indexing.md#adding-opensearch-middleware-configurations-and-enabling-dam-indexing).

### Helm values updates

=== "Containers"
    Helm value properties in HCL DX that were added, removed, or changed for this release are documented in [DX Helm values updates](../dx_helm_values_updates.md#cf233).

### New HAProxy security configuration parameters

=== "Containers"
    New HAProxy security configuration parameters are now available for use in HCL DX. These parameters allow you to specify colon-separated lists of cipher suites for SSL/TLS and TLS 1.3 connections, and HAProxy global configurations. The following parameters are now available:

    - `sslDefaultBindCiphers`: SSL/TLS cipher suites for TLS 1.2 and earlier
    - `sslDefaultBindCiphersuites`: SSL/TLS cipher suites for TLS 1.3
    - `sslDefaultBindOptions`: SSL/TLS options for HAProxy global configuration

    For more information, refer to [Configuring HAProxy networking](../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configure_networking.md#configuring-haproxy-networking).

### WAS, JDK, and iFix versions

=== "Containers"
    HCL DX 9.5 CF233 contains the following:

    - [WebSphere Application Server 9.0.5.26](../../get_started/system_requirements/traditional/supported_config.md#websphere-application-server)
    - [Java Development Kit 8.0.8.55](../../get_started/system_requirements/traditional/supported_config.md#java-sdk)
    - iFix PH68243
    - iFix PH68418

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

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcl-software.com/hcl-dx){target="_blank"} section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcl-software.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=){target="_blank"} section for more information.
