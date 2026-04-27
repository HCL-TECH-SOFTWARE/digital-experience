# What's new in CF235
 
The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF235 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

- Practitioner dashboard
- Blueprint updates
- My HCLSoftware delivery portal
- New How-to articles now available
- Presentation Designer - New entry points from Authoring portlet

**Digital Experience 8.5 and 9.0 Versions**

**Digital Experience 9.5 Container Version**

- DAM Soft Delete
- Using In-House CA/PKI for Search V2 Certificates
- Helm values updates
- WAS, JDK, and iFix versions

**Notices of deprecation**

Go to the [HCL Software Support Site/HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959){target="_blank"} for the list of software fixes, including Container Update releases.

## All Digital Experience Versions (8.5, 9.0, 9.5)

### Blueprint updates

=== "Containers"
    The HCL DX Blueprint design system has been updated for CF235. For more information on the changes, improvements, and bugfixes, refer to the [Blueprint changelog](https://opensource.hcltechsw.com/dx-blueprint-storybook/latest/?path=/docs/overview-changelog--documentation){target="_blank"}.

=== "On-Premises"
    The HCL DX Blueprint design system has been updated for CF235. For more information on the changes, improvements, and bugfixes, refer to the [Blueprint changelog](https://opensource.hcltechsw.com/dx-blueprint-storybook/latest/?path=/docs/overview-changelog--documentation){target="_blank"}.

### Logout API updates

=== "Containers"
    The Experience REST API logout endpoint (`auth/logout`) has been updated to include an optional `redirectUrl` field in the response. This field specifies a post-logout redirect URL provided by the WCM Core API. The update is fully backward compatible. Existing API consumers are not affected, and no changes are required.For more information, see [Logout API updates](../../extend_dx/apis/hcl_experience_api/logout_api_updates.md).

=== "On-Premises"
    The Experience REST API logout endpoint (`auth/logout`) has been updated to include an optional `redirectUrl` field in the response. This field specifies a post-logout redirect URL provided by the WCM Core API. The update is fully backward compatible. Existing API consumers are not affected, and no changes are required.For more information, see [Logout API updates](../../extend_dx/apis/hcl_experience_api/logout_api_updates.md).

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
    A new batch of How-to articles has been migrated from the knowledge base to the HCL DX Help Center. For more information, refer to the [New and migrated articles](../../guide_me/howto/whatsnew.md#cf235) section.

=== "On-Premises"
    A new batch of How-to articles has been migrated from the knowledge base to the HCL DX Help Center. For more information, refer to the [New and migrated articles](../../guide_me/howto/whatsnew.md#cf235) section.

### Practitioner Dashboard  

### Presentation Designer - New entry points from Authoring portlet

=== "Containers"
    New entry points to Presentation Designer are now available from the Authoring portlet. A new **Read in Presentation Designer** option has been added to the **Read** drop-down menu, allowing you to open a presentation template in read-only mode. The existing **Edit in Presentation Designer** option has been moved from the **More** drop-down menu to the **Edit** drop-down menu. You can additionally switch between the standard WCM HTML Editor and Presentation Designer without leaving the authoring workflow. For more information, refer to [Accessing Presentation Designer](../../manage_content/wcm_authoring/presentation_designer/access.md).

=== "On-Premises"
    New entry points to Presentation Designer are now available from the Authoring portlet. A new **Read in Presentation Designer** option has been added to the **Read** drop-down menu, allowing you to open a presentation template in read-only mode. The existing **Edit in Presentation Designer** option has been moved from the **More** drop-down menu to the **Edit** drop-down menu. You can additionally switch between the standard WCM HTML Editor and Presentation Designer without leaving the authoring workflow. For more information, refer to [Accessing Presentation Designer](../../manage_content/wcm_authoring/presentation_designer/access.md).

## Digital Experience 8.5 and 9.0 Versions

=== "Containers"
    Practitioner dashboard – A modern, React-based dashboard with widgets, quick links, and an info hub to help you manage content, track status, and personalize user experiences more efficiently. For more information refer to [Practitioner Dashboard  ](https://pages.git.cwp.pnp-hcl.com/CWPdoc/dx-mkdocs/in-progress/build_sites/practitioner_studio/dashboard/)<!-- Tupdate link-->

=== "On-Premises"
    Practitioner dashboard – A modern, React-based dashboard with widgets, quick links, and an info hub to help you manage content, track status, and personalize user experiences more efficiently. For more information refer to[Practitioner Dashboard  ](https://pages.git.cwp.pnp-hcl.com/CWPdoc/dx-mkdocs/in-progress/build_sites/practitioner_studio/dashboard/)<!-- Tupdate link-->

## Digital Experience 8.5 and 9.0 Versions

### Automatically apply 9.5 from a later CF installation

## Digital Experience 9.5 Version

## Digital Experience 9.5 Container Version

### DAM Soft Delete

=== "Containers"
    The Soft Delete feature provides a safety net for accidental deletions of assets and collections in Digital Asset Management (DAM). Instead of permanently removing items immediately, a soft delete moves them to a **Trash** state where they are hidden from normal views but remain in the database for a configurable period. Items in the Trash can be restored or permanently deleted by authorized users. For more information, refer to the [DAM Soft Delete](../../manage_content/digital_assets/configuration/dam_soft_delete.md).

### Helm values updates <!--UPDATE-->

=== "Containers"
The Soft Delete feature adds a safety net for accidental deletion of assets and collections in Digital Asset Management (DAM). Instead of being permanently removed, items are moved to a **Trash** state, where they are hidden from normal views but remain in the database for a configurable period. Authorized users can restore items or permanently delete them.
For more information, see [DAM Soft Delete](../../manage_content/digital_assets/configuration/dam_soft_delete.md).

### Using In-House CA/PKI for Search V2 Certificates

### WAS, JDK, and iFix versions

=== "Containers"
    HCL DX 9.5 CF235 contains the following:

    - [WebSphere Application Server 9.0.5.27](../../get_started/system_requirements/traditional/supported_config.md#websphere-application-server)
    - [Java Development Kit 8.0.8.60](../../get_started/system_requirements/traditional/supported_config.md#java-sdk)
    - No iFixes

    For more information, refer to [WAS, JDK, and iFix versions](../../get_started/system_requirements/kubernetes/kubernetes-runtime.md#was-jdk-and-ifix-versions).

## Notices of deprecation

### Advanced Rich Text Editor (CKEditor) (8.5, 9.0, and 9.5)

=== "Containers"
You can now use certificates from your organization’s certificate authority (CA) or public key infrastructure (PKI) for Search V2 deployments. For detailed instructions, see [Using in-house CA/PKI for Search V2 certificates](https://pages.git.cwp.pnp-hcl.com/CWPdoc/dx-mkdocs/in-progress/deployment/install/container/helm_deployment/preparation/optional_tasks/optional_new_search_ca_certificates/).<!-- update link-->

### Helm values updates <!--UPDATE-->

=== "Containers"
    Helm value properties in HCL DX that were added, removed, or changed for this release are documented in [DX Helm values updates](../dx_helm_values_updates.md#cf235).

### WAS, JDK, and iFix versions <!--UPDATE-->

=== "Containers"
This table provides information about the Kubernetes versions that are tested and supported by HCL DX CF releases.
Review your chosen Kubernetes platform and ensure that it supports the following Kubernetes versions:
<!-- Note: As per L2/L3, only keep three latest releases and delete older ones -->
|CF Level|Kubernetes versions|
|--------------|-----------------|
|CF234| Kubernetes 1.35<br/>Kubernetes 1.34<br/>Kubernetes 1.33<br/>Kubernetes 1.32<br/>Kubernetes 1.31<br/>Kubernetes 1.30<br/>Kubernetes 1.29<br/>Kubernetes 1.28<br/>Kubernetes 1.27<br/>Kubernetes 1.26<br/>|
|CF233| Kubernetes 1.34<br/>Kubernetes 1.33<br/>Kubernetes 1.32<br/>Kubernetes 1.31<br/>Kubernetes 1.30<br/>Kubernetes 1.29<br/>Kubernetes 1.28<br/>Kubernetes 1.27<br/>Kubernetes 1.26<br/>|
|CF232| Kubernetes 1.34<br/>Kubernetes 1.33<br/>Kubernetes 1.32<br/>Kubernetes 1.31<br/>Kubernetes 1.30<br/>Kubernetes 1.29<br/>Kubernetes 1.28<br/>Kubernetes 1.27<br/>Kubernetes 1.26<br/>|
!!!important
    To prevent a possible Kubernetes deployment failure in Kubernetes versions 1.28 and 1.29, it may be required to run the command `modprobe br_netfilter` before running `kubeadm init`. This is a potential solution to avoid a networking bridge/iptables issue.

## Notices of deprecation

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcl-software.com/hcl-dx){target="_blank"} section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcl-software.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=){target="_blank"} section for more information.
