# Install Design Studio (Beta)

This section provides the steps to install the HCL Digital Experience 9.5 component Design Studio (Beta), available for use with HCL DX 9.5 CF196 Kubernetes platform deployments only.

!!! notes
    -   Design Studio (Beta) is not supported for production deployment.
    -   Support for deployment to Red Hat OpenShift will be provided in a later DX 9.5 Container Update release.

## Pre-requisites

-   See [Container image list](../../platform/kubernetes/docker.md) section for the latest DX 9.5 container file listings.
-   Review the list of [Requirements and Limitations](design_studio_overview.md) for Design Studio (Beta) with HCL DX 9.5 CF196

## Installing HCL Design Studio (Beta)

There are three options available to install HCL Design Studio (Beta) to an HCL Digital Experience 9.5 deployment on supported Kubernetes platforms.

### Deploy with dxctl

The dxctl process can be used to install and enable the Design Studio (Beta) to a Container Update CF196 deployment. Refer to the [dxctl](../../platform/kubernetes/operator-based/dxtools_dxctl.md) and specific [Kubernetes platform](../../platform/kubernetes/overview.md) Help Center topics you will deploy to. (Amazon EKS, Microsoft AKS, or Google GKE) .

When working with the dxctl deployment on your target Kubernetes platform, ensure that the property `sitemanager.enabled` is added in the deployment property file, and that it is set to true when deploying Container Update CF196. The configuration setting can also be enabled later on.

### Deploy with Helm

Deployment options using [Helm](../../platform/kubernetes/deployment/helm_deployment.md) are introduced in HCL DX 9.5 Container Update CF196, and is supported on the Google Kubernetes Engine \(GKE\) platform only. When [deploying to Google Kubernetes Engine](https://help.hcltechsw.com/digital-experience/9.5/containerization/google_gke.html), ensure the `designStudio` flag is set to true in the [Applications](../../platform/kubernetes/architecture/application_architecture.md) section of the values.yaml file used for deployment.

!!! example
    ```
    # Controls which application is deployed and configured
    applications:
    # Deploys Design Studio
    designStudio: true
    ```

#### Disable Design Studio (Beta)

Design Studio (Beta) can also be disabled on your Kubernetes deployment when deployed using [dxctl](../../platform/kubernetes/operator-based/dxtools_dxctl.md) or [Helm](../../platform/kubernetes/deployment/helm_deployment.md). To disable, set the designStudio flag to false and initiate a reconciliation via your deployment method (dxctl or Helm).

### Deploy on HCL SoFy

A release of HCL Digital Experience Container Update CF196 is available on [HCL SoFy](https://www.hcltechsw.com/sofy) for use. Design Studio (Beta) is enabled with that deployment.

!!! note 
    If using HCL DX 9.5 CF196 on HCL SoFy, it is not possible to disable Design Studio (Beta) component. Access the HCL Digital Solutions offerings from the [HCL Sofy Catalog](https://www.hcltechsw.com/sofy/catalog) to proceed.
