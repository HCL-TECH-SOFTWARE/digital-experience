# Operator-based deployment

This section outlines the supported container platforms for HCL Digital Experience 9.5, and instructions on how to deploy to supported container environments.

**Attention:** Beginning with HCL Digital Experience 9.5 Container Update CF200, HCL has discontinued releasing the HCL Digital Experience \(DX\) [Operator-based deployments](deploy_container_platforms.md) and will provide support only for [Helm-based deployments](helm.md). There will be no further updates or code fixes provided for the Operator-based deployments. HCL requires all customers to migrate to Helm-based deployments for their DX installations. HCL will work with our customers as they transition from Operator-based to Helm-based deployments. For more information on the migration process, see [Migrating from Operator-based to Helm-based deployments](helm_operator_migration.md).

**Notes:**

-   Initial login credentials for the DX Docker image are: `wpsadmin/wpsadmin`.
-   Prior to deploying on Red Hat OpenShift or Kubernetes, it is recommended that administrators read the [Limitations/Requirements](limitations_requirements.md) section.
-   Additional guidance about storage class and volume is available for HCL Digital Experience 9.5 container administrators. See the topic [Sample Storage Class and Volume for HCL Digital Experience 9.5 Container in Amazon EKS or Red Hat OpenShift](sample_storage_class_volume.md).
-   **Video**:
    -   [Getting started with HCL Portal 9.5 on Docker](https://youtu.be/GX6Fbv7yidI).
    -   [Getting started with HCL DX 9.5 on container platforms](https://register.gotowebinar.com/recording/3305440225978389763).

The following container platforms are supported.

-   [Docker image list](docker.md) and [Docker image deployment](docker_image_deployment.md)
-   [Red Hat OpenShift](openshift.md)
-   [Amazon Elastic Kubernetes Service \(EKS\)](kubernetes_eks.md)
-   [Microsoft Azure Kubernetes Service \(AKS\)](azure_aks.md)
-   [Google Kubernetes Engine \(GKE\)](google_gke.md)

-   **[dxctl](../containerization/dxtools_dxctl.md)**  
Learn how to use `dxctl` for custom HCL Digital Experience 9.5 container deployments
-   **[HCL Digital Experience 9.5 Container Deployment](../containerization/deploy_supported_container_platforms.md)**  
This section outlines the supported container platforms for HCL Digital Experience 9.5, and instructions on how to deploy to supported container environments.
-   **[Install the HCL Digital Experience 9.5 components](../containerization/install_config_cc_dam.md)**  
This section provides a high-level overview of the architecture and the steps to install, configure, and update the HCL Digital Experience 9.5 components: Experience API, Content Composer, and Digital Asset Management.
-   **[Container administration 9.5](../containerization/maintenance.md)**  
The information in this section enables administrators to manage select operations performance controls, and to update and replace their HCL Digital Experience 9.5 container images with the latest 9.5 container update release.
-   **[Troubleshooting cloud container Containers](../containerization/troubleshooting.md)**  
This section lists the basics of troubleshooting the containerized image or your deployment.

**Parent topic:**[Digital Experience on containerized platforms](../containerization/deployment.md)

