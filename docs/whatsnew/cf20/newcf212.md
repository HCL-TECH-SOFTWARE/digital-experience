# What's new in CF212

The following features and updates are available to customers installing HCL Digital Experience Container Update and CF212 on supported platforms:

**All  Digital Experience Versions (8.5, 9.0, 9.5)**

- Notice of deprecation of Textbox.io Rich Text Editor

**Digital Experience 9.5 Container Version**

- Transition to use of relative hostnames

## Transition to use of relative hostnames

=== "Containers"

We are transitioning to using relative hostnames within our internal configurations. This is to enable the use of multiple hostnames for Kubernetes-based deployments. This transition begins with Content Composer and Digital Asset Management having relative hostnames as their default configuration. Kubernetes-based deployments should continue to work as intended without any changes.

!!! note "Action Required for Hybrid Deployments"

    The FQDN must be set because hybrid deployments need absolute hostnames. These deployments will fail if this is not set. The use of multiple hostnames is currently not available for any kind of hybrid deployment. See the [Hybrid Host Configurations](../../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configure_networking/#hybrid-host) for more details.

## Host details for DAM Staging

We have introduced configuration options for hostname, port, SSL details for DAM Staging. Kubernetes-based deployments should continue to work as intended without any changes.

!!! note

    Host details should be configured for hybrid deployments. See the [DAM Staging host Configurations](../../../manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging/#Configure-staging-hostname) for more details.

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/#HCLDXLearningJourneys) section of the HCL Software Academy and [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=) section for more information.