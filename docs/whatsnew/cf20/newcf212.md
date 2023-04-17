# What's new in CF212

The following features and updates are available to customers installing HCL Digital Experience Container Update and CF212 on supported platforms:

## Transition to Use of Relative Hostnames

=== "Containers"

As of CF212 release, we are transtioning to using of relative hostnames. This is to accommodate the use of multiple hostnames for Kubernetes deployments.  This transition starts with Content Composer and Digital Asset Management now having relative hostnames as their default configuration. Kubernetes deployments should work as intended without any changes.

Action Required for Hybrid deployments: the FQDN must be set as these deployments would need absolute host names. Hybrid deployments will fail if this is not set. The use of multiple hostnames are currently not available for any kind hybrid deployment. See the [Hybrid Host Configurations](../../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configure_networking/#hybrid-host) for more details.