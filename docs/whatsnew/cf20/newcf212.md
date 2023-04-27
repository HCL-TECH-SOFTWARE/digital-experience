# What's new in CF212

The following features and updates are available to customers installing HCL Digital Experience Container Update and CF212 on supported platforms:

## Transition to use of relative hostnames

=== "Containers"

We are transitioning to using relative hostnames within our internal configurations. This is to enable the use of multiple hostnames for Kubernetes-based deployments. This transition begins with Content Composer and Digital Asset Management having relative hostnames as their default configuration. Kubernetes-based deployments should continue to work as intended without any changes.

!!! note "Action Required for Hybrid Deployments"

    The FQDN must be set because hybrid deployments need absolute hostnames. These deployments will fail if this is not set. The use of multiple hostnames is currently not available for any kind of hybrid deployment. See the [Hybrid Host Configurations](../../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configure_networking/#hybrid-host) for more details.
