# What's new in CF212

The following features and updates are available to customers installing HCL Digital Experience Container Update and CF212 on supported platforms:

**All  Digital Experience Versions (8.5, 9.0, 9.5)**

- Notice of deprecation of Textbox.io Rich Text Editor

**Digital Experience 9.5 Container Version**

- Transition to use of relative hostnames
- Configuration options for DAM Staging
- New guidance for using Site Manager in Woodburn Studio
- Additional steps in DDC for sending request body via content item
- Rendition Version Regeneration and Cleanup

## All  Digital Experience Versions (8.5, 9.0, 9.5)

### Notice of deprecation of Textbox.io Rich Text Editor

=== "Containers"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and will End of Support (EOS) on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

=== "On-Premises"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and will End of Support (EOS) on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

## Digital Experience 9.5 Container Version

### Transition to use of relative hostnames

=== "Containers"
    We are transitioning to using relative hostnames within our internal configurations. This is to enable the use of multiple hostnames for Kubernetes-based deployments. This transition begins with Content Composer and Digital Asset Management having relative hostnames as their default configuration. Kubernetes-based deployments should continue to work as intended without any changes.

    !!! note "Action Required for Hybrid Deployments"

        The FQDN must be set because hybrid deployments need absolute hostnames. These deployments will fail if this is not set. The use of multiple hostnames is currently not available for any kind of hybrid deployment. See the [Hybrid Host Configurations](../../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configure_networking/#hybrid-host) for more details.

### Configuration options for DAM Staging

=== "Containers"
    We have introduced configuration options for hostname, port, and SSL details for DAM Staging. Kubernetes-based deployments should continue to work as intended without any changes. See the topic [Configure staging hostname](../../manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging.md#configure-staging-hostname) for more information.

    !!! note "Action Required for Hybrid Deployments"

        Host details must be configured for hybrid deployments. See the [DAM Staging host Configurations](../../../manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging/#configure-staging-hostname) for more information.

### New guidance for using Site Manager in Woodburn Studio

=== "Containers"
    Added additional documentation for using Site Manager to author and manage content in Woodburn Studio. See the topics [Site Manager](../../manage_content/wcm_authoring/inline_editing/index.md) and [Examples of using the Site Manager in Woodburn Studio](../../manage_content/wcm_authoring/inline_editing/site_manager_samples.md) for more information.


### Additional steps in DDC for sending request body via content item

=== "Containers"
    Added steps on how to send a request body through a content item in Digital Data Connector (DDC). See the topic [Connecting to HCL Volt MX Foundry through Digital Data Connector (DDC)](../../extend_dx/ddc/integrating_voltmx_foundry/index.md) for more information.

### Rendition Version Regeneration and Cleanup

=== "Containers"
    A new feature that allows users to regenerate renditions and versions of broken assets and to clean up invalid assets is now available. For instructions on how to enable this feature,  see the topic [Rendition Version Regeneration and Cleanup](../../../manage_content/digital_assets/configuration/rendition_version_regeneration_and_cleanup).

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/#HCLDXLearningJourneys) section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=) section for more information.