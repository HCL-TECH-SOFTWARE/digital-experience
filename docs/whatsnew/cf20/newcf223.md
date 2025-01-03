# What's new in CF223

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF223 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

- Ability to change the context root or hostname of a virtual portal
- User Session Reporting Tool
- Updated supported versions of SQL Server
- New guidance for creating a custom login portlet
- Notice of deprecation of Textbox.io Rich Text Editor

**Digital Experience 8.5 and 9.0 Versions**

- Extended Support option now available for DX versions 8.5 and 9.0 
- Automatically apply 9.5 from a later CF installation

**Digital Experience 9.5 Container Version**

- DX core image - Moved directories to temporary storage
- DX Search - File processor
- Updated documentation for settings when deploying a new search
- New guidance for configuring a content source to gather documents from a single pod
- New sizing guidance for rendering in a small configuration
- New topic for configuring IMDS hop limit in Amazon EKS v1.30
- Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository
- Removal of automated Pod restart on ConfigMap updates

Go to the [HCL Software Support Site/HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959) for the list of software fixes, including Container Update releases.

## All Digital Experience Versions (8.5, 9.0, 9.5)

### Ability to change the context root or hostname of a virtual portal

=== "Containers"
    You can change the context root or hostname of an already existing virtual portal using the administration portlet. For more information, see [Using the Virtual Portal Manager administration portlet](../../build_sites/virtual_portal/vp_mgr_portlet/advp_vpmgr_use.md).

=== "On-Premises"
    You can change the context root or hostname of an already existing virtual portal using the administration portlet. For more information, see [Using the Virtual Portal Manager administration portlet](../../build_sites/virtual_portal/vp_mgr_portlet/advp_vpmgr_use.md).

### User Session Reporting Tool

=== "On-Premises"
    The User Session Reporting Tool is a utility designed for HCL DX users managing on-premises deployments. This tool provides a solution for analyzing and interpreting web traffic data by processing National Center for Supercomputing Applications (NCSA) access log files. Relevant parts of each log are extracted to identify and count unique user sessions. This offers a precise understanding of usage data over specified periods. For more information, see [User Session Reporting Tool](../../get_started/download/software_licensing_portal/configure_entitlement_checks/user_session_reporting_tool.md).

### Updated supported versions of SQL Server

=== "Containers"
    HCL DX now supports Microsoft SQL Server Enterprise and Standard Edition 2022. For more information, see [Databases](../../get_started/system_requirements/kubernetes/databases.md).

=== "On-Premises"
    HCL DX now supports Microsoft SQL Server Enterprise and Standard Edition 2022. For more information, see [Supported configurations](../../get_started/system_requirements/traditional/supported_config.md#databases).

### New guidance for creating a custom login portlet

=== "Containers"
    Documentation for creating a custom login portlet for HCL DX is now available. A custom login portlet is useful if the base portlet is not in your desired format, or if you want to add additional verification to the login. For more information, see [Creating a custom login portlet](../../deployment/manage/security/people/authorization/users_and_groups/custom_login_portlet.md).

=== "On-Premises"
    Documentation for creating a custom login portlet for HCL DX is now available. A custom login portlet is useful if the base portlet is not in your desired format, or if you want to add additional verification to the login. For more information, see [Creating a custom login portlet](../../deployment/manage/security/people/authorization/users_and_groups/custom_login_portlet.md).

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

### DX core image - Moved directories to temporary storage

=== "Containers"
    To improve system performance, the wstemp and binaryValues directories are no longer stored in the `PersistentVolume` of the core profile. They are now created in the temporary storage within `/opt/HCL/caches/wstemp` and `/opt/HCL/caches/binaryValues` respectively.

### DX Search - File processor

=== "Containers"
    The file processor node is a new component of the DX search based on OpenSearch. This node is an additional set of Pods run alongside search middleware and OpenSearch. The file processor runs text extraction to provide full text search. For more information, see [Architectural Overview](../../deployment/manage/container_configuration/configure_opensearch/architectural_overview.md#file-processor-nodes) and [Installing search based on OpenSearch](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_install_new_search.md).

### Updated documentation for new search deployment settings

=== "Containers"
    The topic [Installing search based on OpenSearch](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_install_new_search.md) is updated to include the settings you might want to change when deploying the new search. The topic now provides more information about specific configurations such as security, split deployment, replicas, automated setup for DAM, allowlist for file types in the file processor, common fields mapping, and Persistent Volume size requests.

### New guidance for configuring a content source to gather documents from a single pod

=== "Containers"
    The topic [Configure Remote Search](../../deployment/manage/container_configuration/kubernetes_remote_search.md#content-source-from-a-single-core-pod) is updated to include information on how to configure a content source to gather documents from a single pod. You can use the URL to index both Portal and WCM content sources.

### New sizing guidance for rendering in a small configuration

=== "Containers"
    Results of DX sizing tests for rendering in a small Kubernetes configuration are now available. This guidance presents the key performance indicators (KPIs) and discusses how adjustments to the pod configuration can make improvements in the responsiveness of the system. For more information, see the topic [Sizing guidance for rendering in a Kubernetes small configuration](../../guide_me/performance_tuning/kubernetes/rendering_small_config.md).

### New topic for configuring IMDS hop limit in Amazon EKS v1.30

=== "Containers"
    The new topic [Configuring the IMDS hop limit in Amazon EKS v1.30](../../get_started/system_requirements/kubernetes/imds_limit.md) provides steps for setting the Instance Metadata Service (IMDS) `http-put-response-hop-limit` to `2`. This configuration is to prevent pods from getting stuck in a `Pending` state due to IMDSv2 access issues.

### Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository

=== "Containers"
    Starting CF216, the Harbor repository is updated with an OCI-based registry and the Helm chart command is updated to be OCI-compliant. Instructions on how to pull Helm charts using OCI commands are now available. For more information, see the Help Center topics [Configure Harbor Helm Repository](../../deployment/install/container/helm_deployment/preparation/get_the_code/configure_harbor_helm_repo.md) and [Download and Deploy from HCL Harbor Repository](../../get_started/download/harbor_container_registry.md).
    
### Removal of automated Pod restart on ConfigMap updates

=== "Containers"
    Runtime Controller triggering Pod restarts for [direct configuration changes](../../deployment/manage/container_configuration/index.md#rollout-of-configuration-changes) in ConfigMaps is removed. You must restart the appropriate Pods manually to apply the changes made to the ConfigMaps for testing configurations. For more information, see [Deprecated features](../deprecated_features.md).

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/hcl-dx){target="_blank"} section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=){target="_blank"} section for more information.
