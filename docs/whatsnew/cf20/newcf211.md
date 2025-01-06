# What's new in CF211

The following features and updates are available to customers installing HCL Digital Experience Container Update and CF211 on supported platforms:

**All  Digital Experience Versions (8.5, 9.0, 9.5)**

- Notice of deprecation of Textbox.io Rich Text Editor

**Digital Experience 9.5 Container Version**

- Increase in several parameters for minimal system requirements
- Digital Asset Management – Copying Media assets from one Collection to another
- Digital Asset Management – Enabling the use of SVG files in DAM API 
- Remote Search Automated configuration option
- Deprecation of OpenShift Passthrough
- Addition of more content authoring actions in Content Composer

## All  Digital Experience Versions (8.5, 9.0, 9.5)

### Notice of deprecation of Textbox.io Rich Text Editor

=== "Containers"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and will End of Support (EOS) on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

=== "On-Premises"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and will End of Support (EOS) on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

## Digital Experience 9.5 Container Version

### Increase in several parameters for minimal system requirements

=== "Containers"
    There is an increase in the minimal system requirements for core and remote-search containers for Kubernetes deployments. See the [Containerization requirements and limitations](../../get_started/plan_deployment/container_deployment/limitations_requirements.md) for more information.

### Digital Asset Management – Copying Media Assets from one Collection to another 

=== "Containers"
    DX 9.5 Container Update CF211 adds capability to copy Media assets from one DAM Collection to another, along with associated keywords, and includes an option to save the copied asset under a new name if naming conflicts occur. See the topic [Digital Asset Management - Manage Media - Copy a Media Asset](../../manage_content/digital_assets/usage/managing_dam/manage_media_assets.md#copying-a-media-asset) for more information.

### Digital Asset Management – Enabling the use of SVG files in DAM API

=== "Containers"
   Added steps on how to enable the use of SVG files in DAM API. See the topic [Enabling the use of SVG files in DAM API](../../extend_dx/apis/hcl_experience_api/openapi_example_API_calls.md#enabling-the-use-of-svg-files-in-dam-api) for more information.

### Remote Search Auto Configuration option

=== "Containers"
    A new automated configuration option is provided to manage required steps to set up HCL DX Remote Search in HCL Digital Experience container-based deployments where DX Core is operating across multiple pods. See the Help Center topic [Configure Remote Search](../../deployment/manage/container_configuration/kubernetes_remote_search.md) for more information.

### Deprecation of OpenShift Passthrough option
=== "Containers"
    The Helm chart option to specify Route values typically processed through the HAProxy port is deprecated. Documentation and setup references are provided as options tor deployment requirements. See the [Deprecated Features](../deprecated_features.md) page for more information. 
    
### Addition of more content authoring actions in Content Composer
=== "Containers"
    In the Dashboard view, an overflow menu is added displaying more content authoring actions such as Edit, Overview, Move, Copy, Duplicate, and Delete. See the Help Center topic [Author Content Items](../../manage_content/wcm_authoring/content_composer/usage/author_and_manage_content_items/author_content_items.md#content-authoring-actions-in-dashboard-view) for more information.

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/#HCLDXLearningJourneys) section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=) section for more information.
