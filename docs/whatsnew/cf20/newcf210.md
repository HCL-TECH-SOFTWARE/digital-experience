# What's new in CF210

The following features and updates are available to customers installing HCL Digital Experience Container Update and CF210 on supported platforms:

**All  Digital Experience Versions (8.5, 9.0, 9.5)**

- Guidance to configure a custom TinyMCE editor toolbar in the HCL Web Content Manager authoring portlet
- New HCL Unica Campaign Segment Picker for leveraging segments in PZN Rules
- Ability to Sync the Title of DX pages to the Portal Site WCM library in the JCR
- Menu Element Sorting Options
- New Portlet Development Utilities and Page creation samples on HCL GitHub
- DXClient Updates
- Option to configure session timeout for non-authenticated Site pages
- Notice of deprecation of Textbox.io Rich Text Editor

**Digital Experience 9.5 Container Version**

- Updated default resource requests and limits for Kubernetes deployments
- Content Composer - Copy content items and new rename option  
- Option to apply relative URLs for DAM references in WCM during staging to production
- Design Studio Beta Update
- Option to configure aspect ratios for cropping of images in DAM
- Option to Configure Credentials from Secrets
- Option to configure Content-Security-Policy Frame Options
- Option to configure SameSite Cookie Attribute


## All  Digital Experience Versions (8.5, 9.0, 9.5)

### Guidance to configure a custom TinyMCE editor toolbar

=== "Containers"
    New guidance is added to configure the [Tiny MCE Editor toolbar](https://www.tiny.cloud/docs/tinymce/6/menus-configuration-options/) and set desired icons for use both in the HCL Web Content Manager authoring portlet and with the Web Content in-place editing function. See the topic [Rich text editor toolbar configuration options](../../manage_content/wcm_configuration/cfg_webcontent_auth_env/wcm_config_ephox_custom.md) for more information.

=== "On-Premises"
    New guidance is added to configure the [Tiny MCE Editor toolbar](https://www.tiny.cloud/docs/tinymce/6/menus-configuration-options/) and set desired icons for use both in the HCL Web Content Manager authoring portlet and with the Web Content in-place editing function. See the topic [Rich text editor toolbar configuration options](../../manage_content/wcm_configuration/cfg_webcontent_auth_env/wcm_config_ephox_custom.md) for more information.

### New HCL Unica Campaign Segment Picker for leveraging segments in PZN Rules

=== "Containers"
    A new Unica Segment picker is available to select and add [HCL Unica Campaign](https://www.hcltechsw.com/unica/offerings/campaign) segments when defining Digital Experience Personalization rules. See the Help Center topic [Unica Segment Picker for leveraging segments in PZN Rules](../../manage_content/pzn/pzn_unica_integration/unica_segment_picker.md) for more information.

=== "On-Premises"
    A new Unica Segment picker is available to select and add [HCL Unica Campaign](https://www.hcltechsw.com/unica/offerings/campaign) segments when defining Digital Experience Personalization rules. See the Help Center topic [Unica Segment Picker for leveraging segments in PZN Rules](../../manage_content/pzn/pzn_unica_integration/unica_segment_picker.md) for more information.

### Ability to Sync the Title of DX pages to the Portal Site WCM library in the JCR

=== "Containers"
    The Managed Pages feature enables the storing of pages in the Digital Experience Portal Site WCM library. A new feature is provided to sync the title of DX pages in addition to storage of page object ids, improving page sorting and search functions. See the Help Center topic [Update Sorting Page by Title](../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/pages/managed_pages/advadmin_managedpages/wcm_mngpages_sorting_pages.md) for more information.

=== "On-Premises"
    The Managed Pages feature enables the storing of pages in the Digital Experience Portal Site WCM library. A new feature is provided to sync the title of DX pages in addition to storage of page object ids, improving page sorting and search functions. See the Help Center topic [Update Sorting Page by Title](../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/pages/managed_pages/advadmin_managedpages/wcm_mngpages_sorting_pages.md) for more information. 

### Menu Element Sorting Options

=== "Containers"
    New sorting options are available when defining a Menu element. See the Help Center topic [Defining menu element formatting options](../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/elements/menu_element/wcm_dev_elements_menu_format.md) for more information.

=== "On-Premises"
    New sorting options are available when defining a Menu element. See the Help Center topic [Defining menu element formatting options](../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/elements/menu_element/wcm_dev_elements_menu_format.md) for more information.

### New Portlet Development Utilities and Page creation samples on HCL GitHub

=== "Containers"
    Developers can access a new repository of Portlet Development Utilities to automate creating pages, also pages from templates and option to deploy through DXClient, using the DX Java API and as a custom maven archetype to create a new JSR286 portlet. See the [HCL Github repositories](https://github.com/HCL-TECH-SOFTWARE/dx-portlet-development-utilities) for details. 

=== "On-Premises"
    Developers can access a new repository of Portlet Development Utilities to automate creating pages, also pages from templates and option to deploy through DXClient, using the DX Java API and as a custom maven archetype to create a new JSR286 portlet. See the [HCL Github repositories](https://github.com/HCL-TECH-SOFTWARE/dx-portlet-development-utilities) for details. 

### DXClient Updates

=== "Containers"
    Updates to DXClient release tooling adds a virtual portal context option for WCM export/import library functions and removes deprecated parameters. See the Help Center topics [DXClient - Exporting and importing WCM libraries](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/wcmlibraries.md) and [DXClient Artifact Types](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/index.md) for more information.

=== "On-Premises"
    Updates to DXClient release tooling adds a virtual portal context option for WCM export/import library functions and removes deprecated parameters. See the Help Center topics [DXClient - Exporting and importing WCM libraries](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/wcmlibraries.md) and [DXClient Artifact Types](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/index.md) for more information.

### Option to configure session timeout for non-authenticated Site pages

=== "Containers"
    A new configuration option is provided to control the display of timeout error messaging for users accessing anonymous site pages. See the Help Center topic [Configuration Service](../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/cfg_svc/index.md) for more information.

=== "On-Premises"
    A new configuration option is provided to control the display of timeout error messaging for users accessing anonymous site pages. See the Help Center topic [Configuration Service](../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/cfg_svc/index.md) for more information.
    
### Notice of deprecation of Textbox.io Rich Text Editor

=== "Containers"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and will End of Support (EOS) on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

=== "On-Premises"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and will End of Support (EOS) on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

## Digital Experience 9.5 Container Version

### ATTENTION: Updated default resource requests and limits for Kubernetes deployments

=== "Containers"
    The minimal system requirements for Kubernetes deployments have been updated. See the [Containerization requirements and limitations](../../get_started/plan_deployment/container_deployment/limitations_requirements.md) for more information.

    The minimal system requirements are now the default settings in the HCL DX's helm charts' `values.yaml`.

    If you have not overwritten the resource configuration in your `custom-values.yaml`, verify the updated settings to ensure they still fit your purpose. 
    
    If you relied on the default values in previous versions, check if the minimal system requirement settings still fit your deployment scenario. Ensure proper performance testing before rolling this change out.

    Feel free to update your `custom-values.yaml` with resource settings that fit your needs. You may also want to check the [default resource settings in previous releases](./newcf210-old-resources-detail.md).

### Content Composer – Copy content items and new rename option

=== "Containers"
    DX 9.5 Container Update CF210 adds capability to copy content items to another site location, and an option to save a content item under a new name if naming conflicts occur. See the topic [Content Composer Manage Content Items](../../manage_content/wcm_authoring/content_composer/usage/author_and_manage_content_items/manage_content_items.md) for more information.

### Option to apply relative URLs for DAM references in WCM during staging to production

=== "Containers"
    A new option is available to configure Web Content Manager services in the IBM WebSphere Administrative Console to use relative URLs for DAM references in WCM content during staging to production operations. See the topic [Staging DAM to rendering environments](../../manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging.md) for more information.

### Design Studio Beta Update

=== "Containers"
    Effective with HCL Digital Experience 9.5 CF210, the Design Studio Beta has been removed. Future Digital Experience 9.5 releases will incorporate feedback on the features received during the Beta evaluation period. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

    As a result of the removal of Design Studio Beta (software) from the release, the following [Web Content Manager APIs](https://opensource.hcltechsw.com/experience-api-documentation/wcm-api/#tag/Content/paths/~1contents/get) related to that software are removed:

    - /component/content-spots - Used to manage content-spot components.
    - /containers - Used to manage container objects.
    - /content-pages - Used to manage content-page objects.
    - /content-sites - Used to manage content-site objects.


### Option to configure aspect ratios for cropping of images in DAM

=== "Containers"
    It is now possible to [define custom aspect rations for cropping](../../manage_content/digital_assets/configuration/dam_crop_aspect_ratio.md) of images in DAM.    

### Option to Configure Credentials from Secrets

=== "Containers"
    A new option is added for administrators to configure the credentials used in HCL Digital Experience 9.5 Helm deployments by creating a secret and adjusting references in the `custom-values.yaml` file. See the Help Center topic [Configure Credentials from Secrets](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_configure_credentials.md#configuring-credentials-from-secrets) for more information.

### Option to configure Content-Security-Policy Frame Options

=== "Containers"
    A new configuration option in the `custom-values.yaml` file allows to configure [Content Security Policy:frame-ancestors](../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configure_networking.md#configuring-content-security-policy-frame-options) for DX Core and all the add-on applications to Core such as Digital Asset Management and Ring API.

### Option to configure SameSite Cookie Attribute

=== "Containers"
    A new configuration option in the `custom-values.yaml` file allows to configure [SameSite Cookie Attribute](../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configure_networking.md#configuring-samesite-cookie-attribute) for DX Core and all the add-on applications to Core such as Digital Asset Management and Ring API.


## Access the latest HCL Digital Experience 9.5 Education Materials on HCL Software Academy

The HCL Software Academy offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://academy.hcltechsw.com/#HCLDXLearningJourneys) section of the HCL Software Academy and [What’s New for Digital Experience](https://academy.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=) section for more information.
