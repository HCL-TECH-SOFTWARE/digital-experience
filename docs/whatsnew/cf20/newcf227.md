# What's new in CF227

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF227 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

- DXClient - Style-sheet components for LiveSync
- User Session Reporting Tool - Updated the command to generate user session data usage in metrics format

**Digital Experience 8.5 and 9.0 Versions**

- Extended Support option now available for DX versions 8.5 and 9.0
- Automatically apply 9.5 from a later CF installation

**Digital Experience 9.5 Container Version**

- DAM - Access Control Cache
- Search V2 - Added supported CSS part attributes for each Atomic Component
- Search V2 Authoring - New Authoring Search interface
- Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository
- Removal of automated Pod restart on ConfigMap updates
- WAS and JDK versions

Go to the [HCL Software Support Site/HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959){target="_blank"} for the list of software fixes, including Container Update releases.

## All Digital Experience Versions (8.5, 9.0, 9.5)

### DXClient - Style-sheet components for LiveSync

=== "Containers"
    Style-sheet components are now supported in LiveSync Pull and Push commands for the HCL Web Content Manager (WCM) Design Library. For more information, refer to [LiveSync - Limitations and Troubleshooting: WCM Library](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md#wcm-design-library).

=== "On-Premises"
    Style-sheet components are now supported in LiveSync Pull and Push commands for the HCL Web Content Manager (WCM) Design Library. For more information, refer to [LiveSync - Limitations and Troubleshooting: WCM Library](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md#wcm-design-library).

### User Session Reporting Tool - Updated the command to generate user session data usage in metrics format

=== "Containers"
    User Session Reporting Tool parameters have been updated to allow all named parameters to be used in any order within the generate user session data usage command. You can now exclude multiple IPs and session keys by adding multiple `-excludeIP` or `-excludeSessionKey` parameters, respectively. The `-excludeIPs` and `-excludeSessionKeys` parameters have also been updated to exclude the `-excludeIP` and `-excludeSessionKey` parameters. For more information, refer to [Using the User Session Reporting Tool with My HCLSoftware](../../get_started/download/software_licensing_portal/configure_entitlement_checks/user_session_reporting_tool_non_kubernetes.md) and [User Session Reporting Tool](../../get_started/download/software_licensing_portal/configure_entitlement_checks/user_session_reporting_tool.md).

=== "On-Premises"
    User Session Reporting Tool parameters have been updated to allow all named parameters to be used in any order within the generate user session data usage command. You can now exclude multiple IPs and session keys by adding multiple `-excludeIP` or `-excludeSessionKey` parameters, respectively. The `-excludeIPs` and `-excludeSessionKeys` parameters have also been updated to exclude the `-excludeIP` and `-excludeSessionKey` parameters. For more information, refer to [Using the User Session Reporting Tool with My HCLSoftware](../../get_started/download/software_licensing_portal/configure_entitlement_checks/user_session_reporting_tool_non_kubernetes.md) and [User Session Reporting Tool](../../get_started/download/software_licensing_portal/configure_entitlement_checks/user_session_reporting_tool.md).

## Digital Experience 8.5 and 9.0 Versions

### Extended Support option now available for DX versions 8.5 and 9.0

=== "On-Premises"
    HCLSoftware announced End of Support for HCL Digital Experience versions 8.5 and 9, effective June 30, 2025. Customers are encouraged to upgrade to HCL Digital Experience version 9.5, released in a continuous delivery model. Refer to the [Deprecated features](../deprecated_features.md) page for more information.

    To accommodate customers who might be unable to update from DX versions 8.5 and 9.0 to DX version 9.5 by that date, customers can sign up for Extended Support until June 30, 2025. For more information, see the article [Starting on August 30, 2024, Extended Support will be available for HCL Digital Experience V8.5.x and 9](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0115794){target="_blank"}. Extended support will be offered from June 30, 2025 until June 30, 2026.
    
### Automatically apply 9.5 from a later CF installation

=== "On-Premises"
    In CF219, a feature was introduced where [DX version 9.5 is automatically applied](../../deployment/install/traditional/cf_install/index.md) to an 8.5 or 9.0 installation if the configuration setting `install_95=true` is set. Note that a later CF might apply 9.5 by default unless you set `install_95=false`. This statement is not a guarantee of future releases or their features.

## Digital Experience 9.5 Container Version

### DAM - Access Control Cache

=== "Containers"
    The DAM Access Control Cache improves performance by reducing redundant access control checks with the Ring API. It caches responses with a configurable Time-to-Live (TTL) mechanism and optimizes efficiency by handling in-flight requests. Caching is enabled by default with a TTL of 10 seconds. For more information, refer to [DAM Access Control Cache](../../manage_content/digital_assets/usage/managing_dam/dam_access_control_cache.md).

=== "On-Premises"
    The DAM Access Control Cache improves performance by reducing redundant access control checks with the Ring API. It caches responses with a configurable Time-to-Live (TTL) mechanism (default: 10 seconds) and optimizes efficiency by handling in-flight requests. For more information, refer to [DAM Access Control Cache](../../manage_content/digital_assets/usage/managing_dam/dam_access_control_cache.md).

### Search V2 - Added supported CSS part attributes for each Atomic Component

=== "Containers"
    Supported CSS part attributes have been added for each Atomic Component (AC) of Search V2. CSS part attributes are responsible for determining the appropriate CSS for each AC and its elements based on the component's state and properties. For more information, refer to [Components of Search V2 - Atomic Components](../../build_sites/search_v2/components.md#atomic-components).

### Search V2 Authoring - New Authoring Search interface

=== "Containers"
    Search V2 Authoring aims to replace the existing Authoring Search feature in HCL DX. This feature introduces a new search interface along with a new backend service that utilizes OpenSearch to provide a seamless search experience. For more information, refer to [Search V2 Authoring](../../build_sites/search_v2_authoring/index.md).

### Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository

=== "Containers"
    Starting CF216, the Harbor repository is updated with an OCI-based registry and the Helm chart command is updated to be OCI-compliant. Instructions on how to pull Helm charts using OCI commands are now available. For more information, see the Help Center topics [Configure Harbor Helm Repository](../../deployment/install/container/helm_deployment/preparation/get_the_code/configure_harbor_helm_repo.md) and [Download and Deploy from HCL Harbor Repository](../../get_started/download/harbor_container_registry.md).

### Removal of automated Pod restart on ConfigMap updates

=== "Containers"
    Runtime Controller triggering Pod restarts for [direct configuration changes](../../deployment/manage/container_configuration/index.md#rollout-of-configuration-changes) in ConfigMaps is removed. You must restart the appropriate Pods manually to apply the changes made to the ConfigMaps for testing configurations. For more information, see [Deprecated features](../deprecated_features.md).

### WAS and JDK versions <!--check again before release-->

=== "Containers"
    HCL DX 9.5 CF227 contains the following:

    - WebSphere Application Server 9.0.5.23
    - Java Development Kit 8.0.8.40

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/hcl-dx){target="_blank"} section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=){target="_blank"} section for more information.
