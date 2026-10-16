# What's new in CF239  

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF239 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

- Blueprint updates
- My HCLSoftware delivery portal
- New How-to articles now available
- User Session Reporting Tool - New `-assumeClientIP` flag

**Digital Experience 8.5 and 9.0 Versions**

- Extended Support option now available for DX versions 8.5 and 9.0
- Automatically apply 9.5 from a later CF installation

**Digital Experience 9.5 Container Version**

- Helm values updates
- IQ - Configuring cross-session memory
- IQ - HTTPS support for the MCP Server
- WAS, JDK, UBI, and iFix versions

**Notices of deprecation**

- Advanced Rich Text Editor (8.5, 9.0, and 9.5)
- Removal of automated Pod restart on ConfigMap updates (9.5)
- Woodburn Studio demo site (9.5)

Go to the [HCL Software Support Site/HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959){target="_blank"} for the list of software fixes, including Container Update releases.

## All Digital Experience Versions (8.5, 9.0, 9.5)

### Blueprint updates

=== "Containers"
    The HCL DX Blueprint design system has been updated for CF239. For more information on the changes, improvements, and bugfixes, refer to the [Blueprint changelog](https://opensource.hcltechsw.com/dx-blueprint-storybook/latest/?path=/docs/overview-changelog--documentation){target="_blank"}.

=== "On-Premises"
    The HCL DX Blueprint design system has been updated for CF239. For more information on the changes, improvements, and bugfixes, refer to the [Blueprint changelog](https://opensource.hcltechsw.com/dx-blueprint-storybook/latest/?path=/docs/overview-changelog--documentation){target="_blank"}.

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
    A new batch of How-to articles has been migrated from the knowledge base to the HCL DX Help Center. For more information, refer to the [New and migrated articles](../../guide_me/howto/whatsnew.md#cf239) section.

=== "On-Premises"
    A new batch of How-to articles has been migrated from the knowledge base to the HCL DX Help Center. For more information, refer to the [New and migrated articles](../../guide_me/howto/whatsnew.md#cf239) section.

### User Session Reporting Tool - New `-assumeClientIP` flag

=== "Containers"
    The User Session Reporting Tool now includes an optional `-assumeClientIP` command-line flag. This flag is designed for deployments utilizing complex proxy chaining, such as Akamai combined with IBM HTTP Server (IHS). When enabled, it instructs the tool to extract only the first IP address from the `X-Forwarded-For` header to use as the stable client IP, preventing session fragmentation. For more information, refer to [Handling the routing setup](../../get_started/download/software_licensing_portal/configure_entitlement_checks/user_session_reporting_tool.md#handling-the-routing-setup) and [Generating user session data usage in MHS metrics format](../../get_started/download/software_licensing_portal/configure_entitlement_checks/configuring_mhs_file_base_session_reporting.md#generating-user-session-data-usage-in-mhs-metrics-format-traditional-deployment).

=== "On-Premises"
    The User Session Reporting Tool now includes an optional `-assumeClientIP` command-line flag. This flag is designed for deployments utilizing complex proxy chaining, such as Akamai combined with IBM HTTP Server (IHS). When enabled, it instructs the tool to extract only the first IP address from the `X-Forwarded-For` header to use as the stable client IP, preventing session fragmentation. For more information, refer to [Handling the routing setup](../../get_started/download/software_licensing_portal/configure_entitlement_checks/user_session_reporting_tool.md#handling-the-routing-setup) and [Generating user session data usage in MHS metrics format](../../get_started/download/software_licensing_portal/configure_entitlement_checks/configuring_mhs_file_base_session_reporting.md#generating-user-session-data-usage-in-mhs-metrics-format-traditional-deployment).

## Digital Experience 8.5 and 9.0 Versions

### Extended Support option now available for DX versions 8.5 and 9.0

=== "On-Premises"
    HCLSoftware announced End of Support for HCL Digital Experience versions 8.5 and 9, effective June 30, 2025. Customers are encouraged to upgrade to HCL Digital Experience version 9.5, released in a continuous delivery model. Refer to the [Deprecated features](../deprecated_features.md) page for more information.

    To accommodate the customers who might be unable to update from DX versions 8.5 and 9.0 to DX version 9.5 by that date, customers can sign up for Extended Support. For more information, see the article [Starting on August 30, 2024, Extended Support will be available for HCL Digital Experience V8.5.x and 9](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0115794){target="_blank"}.

### Automatically apply 9.5 from a later CF installation

=== "On-Premises"
    In CF219, a feature was introduced where [DX version 9.5 is automatically applied](../../deployment/install/traditional/cf_install/index.md) to an 8.5 or 9.0 installation if the configuration setting `install_95=true` is set. Note that a later CF might apply 9.5 by default unless you set `install_95=false`. This statement is not a guarantee of future releases or their features.

## Digital Experience 9.5 Version

### Practitioner Studio Dashboard - New widgets

=== "Containers"
    The Practitioner Studio Dashboard introduces two new widgets to help you monitor content schedules and monitor search indexing:

    - **Calendar**: Displays a monthly or weekly grid and daily agenda of contents based on their publish and expiry dates.
    - **Search Crawlers**: Displays the status of Search V2 crawlers.

    For more information, refer to [Calendar](../../build_sites/practitioner_studio/dashboard.md#calendar) and [Search Crawlers](../../build_sites/practitioner_studio/dashboard.md#search-crawlers).

=== "On-Premises"
    The Practitioner Studio Dashboard introduces two new widgets to help you monitor content schedules and monitor search indexing:

    - **Calendar**: Displays a monthly or weekly grid and daily agenda of contents based on their publish and expiry dates.
    - **Search Crawlers**: Displays the status of Search V2 crawlers.

    For more information, refer to [Calendar](../../build_sites/practitioner_studio/dashboard.md#calendar) and [Search Crawlers](../../build_sites/practitioner_studio/dashboard.md#search-crawlers).

## Digital Experience 9.5 Container Version

### Helm values updates

=== "Containers"
    Helm value properties in HCL DX that were added, removed, deprecated, or changed for this release are documented in [DX Helm values updates](../dx_helm_values_updates.md#cf239).

### IQ - Configuring cross-session memory

=== "Containers"
   You can now enable the optional cross-session memory feature in IQ. This feature allows IQ to store and reference context from past conversations. To enable cross-session memory, set `RAG_ENABLED` to `true` in your `custom-iq-values.yaml` file and upgrade the Helm release. For more information, refer to [Configuring cross-session memory](../../build_sites/iq/installation/enable-rag.md).

### IQ - HTTPS support for the MCP Server

=== "Containers"
    IQ now supports HTTPS to secure connections between the MCP server and the IQ Integrator. HTTPS is disabled by default. For configuration instructions, refer to [Enabling HTTPS for the MCP Server](../../build_sites/iq/installation/configuring-mcp.md#enabling-https-for-the-mcp-server).

### WAS, JDK, UBI, and iFix versions <!--update values-->

=== "Containers"
    HCL DX 9.5 CF239 contains the following:

    - [WebSphere Application Server (WAS) 9.0.5.28](../../get_started/system_requirements/traditional/supported_config.md#websphere-application-server)
    - [Java Development Kit (JDK) 8.0.8.65](../../get_started/system_requirements/traditional/supported_config.md#java-sdk)
    - [Red Hat Universal Base Image (UBI)](../../deployment/install/container/image_list.md#hcl-dx-ubi-levels):
        - Core and Remote Search: XXXXXXXXXXXXXX
        - Other Images: XXXXXXXXXXXXXX
    - iFix PH71453
    - iFix PH71454
    - iFix PH71590

    For more information, refer to [WAS, JDK, UBI, and iFix versions](../../get_started/system_requirements/kubernetes/kubernetes-runtime.md#was-jdk-ubi-and-ifix-versions).

## Notices of deprecation

### Advanced rich text editor (8.5, 9.0, and 9.5)

=== "Containers"
    The Advanced rich text editor (CKEditor) component in HCL DX was deprecated on August 05, 2025 and reached End of Support (EOS) on August 04, 2026. For more information, refer to [Deprecated features](../deprecated_features.md).

=== "On-Premises"
    The Advanced rich text editor (CKEditor) component in HCL DX was deprecated on August 05, 2025 and reached End of Support (EOS) on August 04, 2026. For more information, refer to [Deprecated features](../deprecated_features.md).

### Removal of automated Pod restart on ConfigMap updates (9.5)

=== "Containers"
    Runtime Controller triggering Pod restarts for [direct configuration changes](../../deployment/manage/container_configuration/index.md#rollout-of-configuration-changes) in ConfigMaps is removed. You must restart the appropriate Pods manually to apply the changes made to the ConfigMaps for testing configurations. For more information, see [Deprecated features](../deprecated_features.md).

### Woodburn Studio demo site (9.5)

=== "Containers"
    The Woodburn Studio demo site in HCL DX has been deprecated on August 05, 2025 and will reach End of Support (EOS) on August 04, 2026. For more information, refer to [Deprecated features](../deprecated_features.md). It has been replaced by [Nex Haven](../../build_sites/nex_haven.md).

=== "On-Premises"
    The Woodburn Studio demo site in HCL DX has been deprecated on August 05, 2025 and will reach End of Support (EOS) on August 04, 2026. For more information, refer to [Deprecated features](../deprecated_features.md). It has been replaced by [Nex Haven](../../build_sites/nex_haven.md).

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U <!--Update URL-->

!!!note
    - Access HCLSoftware U resources for free. [Log in](https://hclsoftwareu.hcl-software.com/login-page){target="_blank"} or [Sign up](https://hclsoftwareu.hcl-software.com/hclsoftwareu-signup){target="_blank"} to get started. If you have further questions, [Contact us](https://hclsoftwareu.hcl-software.com/contactus){target="_blank"} or check the [FAQ](https://hclsoftwareu.hcl-software.com/frequently-asked-questions){target="_blank"}.
    - To learn more about the new features in CF239, take the [DX CF239 interactive lesson](https://hclsoftwareu.hcl-software.com/component/axs/?view=sso_config&id=4&forward=https%3A%2F%2Fhclsoftwareu.hcl-software.com%2Fcourses%2Flesson%2F%3Fid%3D4727){target="_blank"} on HCLSoftware U. <!--Update URL-->

HCLSoftware U offers technical education for the HCLSoftware product portfolio, organized by practitioner role.

- To access Learning Journeys, events, and replays, go to the [HCL Digital Experience](https://hclsoftwareu.hcl-software.com/hcl-dx){target="_blank"} section.
- For more DX CF lessons, go to the **What's New** category of the [Courses](https://hclsoftwareu.hcl-software.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=){target="_blank"} section.
