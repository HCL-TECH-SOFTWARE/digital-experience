# What's new in CF223

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF222 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

- Ability to change the context root or hostname of a virtual portal
- Notice of deprecation of Textbox.io Rich Text Editor

**Digital Experience 8.5 and 9.0 Versions**

- User Session Reporting Tool
- End of Support announced for Digital Experience v8.5 and 9
- Automatically apply 9.5 from CF223 installation

**Digital Experience 9.5 Container Version**

- Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository
- Notice of deprecation of customized OpenLDAP container starting CF223
- Removal of automated Pod restart on ConfigMap updates
- DX core image - Moved wstemp directory to temporary storage

Go to the [HCL Software Support Site/HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959) for the list of software fixes, including Container Update releases.

## All Digital Experience Versions (8.5, 9.0, 9.5)

### Ability to change the context root or hostname of a virtual portal

=== "Containers"
    You can change the context root or hostname of an already existing Virtual Portal using the administration portlet. For more information, see [Using the Virtual Portal Manager administration portlet](../../build_sites/virtual_portal/vp_mgr_portlet/advp_vpmgr_use.md).

=== "On-Premises"
    You can change the context root or hostname of an already existing Virtual Portal using the administration portlet. For more information, see [Using the Virtual Portal Manager administration portlet](../../build_sites/virtual_portal/vp_mgr_portlet/advp_vpmgr_use.md).


### Notice of deprecation of Textbox.io Rich Text Editor 

=== "Containers"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and End of Support (EOS) is on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

=== "On-Premises"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and End of Support (EOS) is on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

## Digital Experience 8.5 and 9.0 Versions

### User Session Reporting Tool

=== "On-Premises"
    The User Session Reporting Tool is a utility designed for HCL DX users, initially for those managing on-premises deployments. This tool provides a solution for analyzing and interpreting web traffic data by processing National Center for Supercomputing Applications (NCSA) access log files. Relevant parts of each log are extracted to identify and count unique user sessions. This offers a precise understanding of usage data over specified periods. For more information, see [User Session Reporting Tool](../../get_started/download/software_licensing_portal/configure_entitlement_checks/user_session_reporting_tool.md).

### End of Support announced for Digital Experience v8.5 and 9

=== "On-Premises"
    On June 30, 2023, HCL Software announced End of Support for HCL Digital Experience versions 8.5 and 9, effective June 30, 2025. Customers are encouraged to upgrade to HCL Digital Experience version 9.5, released in a continuous delivery model. Refer to the [Deprecated features](../deprecated_features.md) page for more information.
    
### Automatically apply 9.5 from CF223 installation

=== "On-Premises"
    In CF219, a feature was introduced where [DX version 9.5 is automatically applied](../../deployment/install/traditional/cf_install/index.md) to an 8.5 or 9.0 installation if the configuration setting `install_95=true` is set. Note that starting with the next DX release, CF223, 9.5 is applied by default unless you set `install_95=false`.

## Digital Experience 9.5 Container Version

### Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository

=== "Containers"
    Starting CF216, the Harbor repository is updated with an OCI-based registry and the Helm chart command is updated to be OCI-compliant. Instructions on how to pull Helm charts using OCI commands are now available. For more information, see the Help Center topics [Configure Harbor Helm Repository](../../deployment/install/container/helm_deployment/preparation/get_the_code/configure_harbor_helm_repo.md) and [Download and Deploy from HCL Harbor Repository](../../get_started/download/harbor_container_registry.md).
    
### Notice of deprecation of customized OpenLDAP container starting CF223

=== "Containers"
    Starting CF223, HCL DX will no longer build and ship its custom OpenLDAP container and will instead use an open source container. By using the robust and well-maintained Bitnami&copy; OpenLDAP image, HCL DX can focus on delivering enhanced features and support without the overhead of maintaining its customized container. This shift is to provide you with more reliable and up-to-date solutions for your test environments. The new alternative, Bitnami&copy;, will be provided but will not ship with the release. Sample LDIF (LDAP data interchange format) files for your OpenLDAP configuration will also be available.
    
### Removal of automated Pod restart on ConfigMap updates

=== "Containers"
    Runtime Controller triggering Pod restarts for [direct configuration changes](../../deployment/manage/container_configuration/index.md#rollout-of-configuration-changes) in ConfigMaps is removed. You must restart the appropriate Pods manually to apply the changes made to the ConfigMaps for testing configurations. For more information, see [Deprecated features](../deprecated_features.md).

### DX core image - Moved wstemp directory to temporary storage

=== "Containers"
    To improve system performance, the wstemp directory is no longer persisted in the `PersistentVolume` of the core profile. It is now created in the temporary storage within `/opt/HCL/caches/wstemp`. 

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/hcl-dx){target="_blank"} section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=){target="_blank"} section for more information.