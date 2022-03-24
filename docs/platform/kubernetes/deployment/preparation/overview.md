# Overview
This section outlines mandatory and optional tasks that need to be done before installation of the HCL Digital Experience 9.5 Container Update CF196 using Helm.

This includes preparing your cluster to have proper access to application container images, creating a custom configuration file that fits your deployment needs and configuring network and application settings to allow your HCL Digital Experience 9.5 CF196 and later deployment to work properly.

!!!important "Read this first"
    * [Helm architecture](../../architecture/helm_overview.md) for an understanding of the capabilities, deployment structures, configuration and scaling options available for HCL DX 9.5 CF196 and later deployments.
    * [Containerization requirements and limitations](../../limitations_requirements.md) for an understanding of the requirements, including capacity planning, and current limitations for an HCL Digital Experience 9.5 and later deployment using Helm.


## Mandatory tasks

The following tasks are mandatory for HCL Digital Experience 9.5 Container deployment to operate in your Kubernetes cluster using Helm.

### [Prepare a namespace](prepare_namespace.md)
Before you can deploy HCL Digital Experience, it is recommended that you create a namespace inside your Kubernetes Cluster.

### [Prepare the Helm deployment configuration file](prepare_configuration.md)
Create a configuration file that fits the needs of your target HCL DX 9.5 Container deployment. The configuration file is the heart of your deployment using Helm. It defines how HCL Digital Experience 9.5 is deployed to supported platforms, and how it behaves during runtime operations. This section explains how to create your own configuration file and how to leverage the existing `values.yaml` inside the Helm Chart. It also explains how to optionally overwrite settings in case the default set may not be sufficient.

### [Load container images](load_images.md)
This section presents how to load the DX 9.5 Container Update CF196 or later images into your container image repository, tag them to fit your repository structure, and push them to your repository, so that all Nodes in your Kubernetes or OpenShift cluster can deploy HCL Digital Experience 9.5 Pods.

### [Configure persistent volume claims](prepare_persistent_volume_claims.md)
HCL Digital Experience requires Persistent Volumes to be present in order to have all applications running. This topic explains to you how you can configure the deployment to use the Persistent Volumes in your cluster.

### [Configure networking](prepare_configure_networking.md)
Depending on your deployment, your requirements for networking may differ from the default. This topic shows you what needs to be configured to get HCL Digital Experience up and running inside your Kubernetes cluster and be accessible.

### [Configure ingress certificate](prepare_ingress_certificate.md)
The Ambassador Ingress requires a SSL certificate to use, this topic shows how to configure that for the HCL Digital Experience Kubernetes deployment.


## Optional
These tasks may be relevant for you if you have specific requirements for the deployment.

### [Using ImagePullSecrets](prepare_imagepullsecrets.md)
In your deployment it might be necessary to access a container image registry that requires credentials to pull images from. This topic explains to you how you configure the DX deployment to work under such conditions.

### [Using NodeSelectors](optional_nodeselectors.md)
You may want to have certain applications of the HCL Digital Experience Kubernetes deployment to be running on certain Nodes inside your cluster. This topic will explain how to achieve that for each application.

### [Choose deployed applications](optional_disable_apps.md)
This topic shows you how to disable and enable specific applications from HCL Digital Experience in your Kubernetes deployment.

### [Configure applications](optional_configure_apps.md)
There are application specific configurations that you may want to adjust, e.g. if Core should behave as a rendering or authoring environment. This topic explains to you how that can be configured.

### [Configure scaling](optional_configure_scaling.md)
This topic explains how you can configure Pod count and automated scaling for applications that support it.

### [Configure credentials](optional_configure_credentials)
This topic shows you how adjust credentials that are used for the deployment.

### [Try experimental features](optional_experimental_features.md)
This topic describes the incubator section in the Helm Charts.

