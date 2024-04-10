# What's new in CF219

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF219 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

- Updated Container Staging documentation
- Updated documentation for installation and upgrade for customers running on Portal 8.5 on WAS 8.5/9.0
- User and Groups REST API - Searching special characters
- DXClient - Update on required access roles
- DXClient - Multiple environment configuration option in node version
- New documentation about searching the DX Help Center
- Notice of deprecation of Textbox.io Rich Text Editor

**Digital Experience 8.5 and 9.0 Versions**

- Improved installation of Digital Experience V9.5 with CF upgrade
- End of Support Announced for Digital Experience v8.5 and 9

**Digital Experience 9.5 Version**

- Web Content Manager - Content Reporting limitation for owners and authors
- Web Content Manager - New query parameters for Content Reporting
- Practitioner Studio - React 16, 17, and 18 theme profiles now available
- Experience Framework - New React 17 and 18 modules

**Digital Experience 9.5 Container Version**

- Container resource management
- Helm options to spread pods across nodes
- Digital Asset Management - damUser credential limitation

Go to the [HCL Software Support Site/HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959) for the list of software fixes, including Container Update releases.

## All Digital Experience Versions (8.5, 9.0, 9.5)

### Updated Container Staging documentation

=== "Containers"
    Documentation for [Container Staging](../../deployment/manage/container_configuration/container_staging.md) is updated to contain information about [transitioning from non-containerized deployment to a containerized deployment](../../deployment/manage/container_configuration/container_staging.md#overview-of-the-approach), [moving multiple environments](../../deployment/manage/container_configuration/container_staging.md#moving-multiple-environments), [importing into the container HCL DX target server](../../deployment/manage/container_configuration/container_staging.md#importing-into-the-container-hcl-dx-target-server), [syndicating large libraries](../../deployment/manage/container_configuration/container_staging.md#syndicating-large-libraries), and [using resource environment providers](../../deployment/manage/container_configuration/container_staging.md#resource-environment-providers).

=== "On-Premises"
    Documentation for [Container Staging](../../deployment/manage/container_configuration/container_staging.md) is updated to contain information about [transitioning from non-containerized deployment to a containerized deployment](../../deployment/manage/container_configuration/container_staging.md#overview-of-the-approach), [moving multiple environments](../../deployment/manage/container_configuration/container_staging.md#moving-multiple-environments), [importing into the container HCL DX target server](../../deployment/manage/container_configuration/container_staging.md#importing-into-the-container-hcl-dx-target-server), [syndicating large libraries](../../deployment/manage/container_configuration/container_staging.md#syndicating-large-libraries), and [using resource environment providers](../../deployment/manage/container_configuration/container_staging.md).

### Updated documentation for installation and upgrade for customers running on Portal 8.5 on WAS 8.5/9.0

=== "Containers"
    The topic [Installation and upgrade for customers running on Portal 8.5 on WAS 8.5/9.0](../../deployment/install/traditional/install_upgrade_plan_supported_paths/Install_upgrade_customers_Portal_85_Java_SDK7.md) contains updated instructions on how to upgrade to the latest available Combined Cumulative Fix. Example package names for Portal 9.5 offerings and the table containing the required repository for each offering are also updated.

=== "On-Premises"
    The topic [Installation and upgrade for customers running on Portal 8.5 on WAS 8.5/9.0](../../deployment/install/traditional/install_upgrade_plan_supported_paths/Install_upgrade_customers_Portal_85_Java_SDK7.md) contains updated instructions on how to upgrade to the latest available Combined Cumulative Fix. Example package names for Portal 9.5 offerings and the table containing the required repository for each offering are also updated.

### User and Groups REST API - Searching special characters

=== "Containers"
    You can now search special characters when using the [User and Groups REST API](../../extend_dx/apis/puma_spi/remote_rest_service_for_puma/user_and_groups_rest_api_explorer.md) (for example, cn=ümlaut). 

=== "On-Premises"
    You can now search special characters when using the [User and Groups REST API](../../extend_dx/apis/puma_spi/remote_rest_service_for_puma/user_and_groups_rest_api_explorer.md) (for example, cn=ümlaut). 

### DXClient - Update on required access roles

=== "Containers"
    Required access roles for deploying portlets and script applications have been updated. For more information, see [Portlets](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/portlets.md) and [Script Applications](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/scriptapplications.md).

=== "On-Premises"
    Required access roles for deploying portlets and script applications have been updated. For more information, see [Portlets](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/portlets.md) and [Script Applications](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/scriptapplications.md).


### DXClient - Multiple environment configuration option in node version

=== "Containers"
    You can configure multiple environments in the node version of DXClient. See the updated instructions in [Installing DXClient using the source code package](../../extend_dx/development_tools/dxclient/index.md#installing-dxclient-using-the-source-code-package).

=== "On-Premises"
    You can configure multiple environments in the node version of DXClient. See the updated instructions in [Installing DXClient using the source code package](../../extend_dx/development_tools/dxclient/index.md#installing-dxclient-using-the-source-code-package).

### New documentation about searching the DX Help Center

=== "Containers"
    A new topic containing tips on how to improve your search and find the information you need in the HCL DX Help Center is now available. For more information, see [Tips for searching the Help Center](../../guide_me/search_tips.md).

=== "On-Premises"
    A new topic containing tips on how to improve your search and find the information you need in the HCL DX Help Center is now available. For more information, see [Tips for searching the Help Center](../../guide_me/search_tips.md).

### Notice of deprecation of Textbox.io Rich Text Editor

=== "Containers"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and will End of Support (EOS) on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

=== "On-Premises"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and will End of Support (EOS) on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

## Digital Experience 8.5 and 9.0 Versions

### Improved installation of Digital Experience v9.5 with CF upgrade

=== "On-Premises"
    Starting CF219, the upgrade process to a higher cumulative fix includes the installation of v9.5. Refer to [Apply Combined Cumulative Fix](../../deployment/install/traditional/cf_install/index.md) for more information.

### End of Support Announced for Digital Experience v8.5 and 9

=== "On-Premises"
    On June 30, 2023, HCL Software announced end of support for HCL Digital Experience versions 8.5 and 9, effective June 30, 2025. Customers are encouraged to upgrade to HCL Digital Experience version 9.5, released in a continuous delivery model. Refer to the [Deprecated features](../deprecated_features.md) page for more information.

## Digital Experience 9.5 Version

### Web Content Manager - Content Reporting limitation for owners and authors

=== "Containers"
    For the **Owner** and  **Author** criteria, user and group attributes only display attributes that can be searched through text input or whose data type is string. For more information, see [Content Reporting limitations](../../manage_content/wcm_authoring/content_reporting/limitations/index.md).

=== "On-Premises"
    For the **Owner** and  **Author** criteria, user and group attributes only display attributes that can be searched through text input or whose data type is string. For more information, see [Content Reporting limitations](../../manage_content/wcm_authoring/content_reporting/limitations/index.md).

### Web Content Manager - New query parameters for Content Reporting

=== "Containers"
    New query parameters `notauthor` and `notowner` are available to support WCM search API. For more information, see [Query parameters](../../manage_content/wcm_development/wcm_rest/wcm_rest_query/wcm_rest_adhoc.md).

=== "On-Premises"
    New query parameters `notauthor` and `notowner` are available to support WCM search API. For more information, see [Query parameters](../../manage_content/wcm_development/wcm_rest/wcm_rest_query/wcm_rest_adhoc.md).

### Practitioner Studio - React 16, 17, and 18 theme profiles now available

=== "Containers"
    When creating a new page using [Practitioner Studio](../../build_sites/practitioner_studio/index.md), you can now select React 16, 17, or 18 for the theme profile. 

=== "On-Premises"
    When creating a new page using [Practitioner Studio](../../build_sites/practitioner_studio/index.md), you can now select React 16, 17, or 18 for the theme profile. 

### Experience Framework - New React 17 and 18 modules

=== "Containers"
    You can now use new React 17 and 18 modules in your own theme. For information about adding or removing modules, see [Adding or removing a module from a profile](../../build_sites/themes_skins/the_module_framework/add_remove_oob_modules/index.md).

=== "On-Premises"
    You can now use new React 17 and 18 modules in your own theme. For information about adding or removing modules, see [Adding or removing a module from a profile](../../build_sites/themes_skins/the_module_framework/add_remove_oob_modules/index.md).

## Digital Experience 9.5 Container Version

### Container resource management

=== "Containers"
    The default Helm values included in the HCL Digital Experience 9.5 Helm Chart offer minimal supported configuration for CPU and Memory resources. You can adjust the values in the `custom-values.yaml` for a deployment according to the [Kubernetes Resource Management](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/). For more information, see [Container resource management](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_container_resources.md).

### Helm options to spread pods across nodes

=== "Containers"
    There are several ways you can distribute pods across nodes. The topic [Options to spread pods across nodes](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_options_spread_pods_across_nodes.md) enumerates and provides more information about the following options: using `nodeSelector`, using affinity and anti-affinity, using `nodeName`, using pod topology spread constraints, and using taints and tolerations.

### Digital Asset Management - damUser credential limitation

=== "Containers"
    `Persistence DAM User Credential secret` has a username limitation. The username can begin with lowercase letters or an underscore and can contain only lowercase letters, numbers, underscore, or a dollar sign. The maximum length is 63 characters. For more information, see [Configure Credentials](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_configure_credentials.md).


## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/hcl-dx) section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=) section for more information.


