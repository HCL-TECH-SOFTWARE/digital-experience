# HCL Digital Experience 9.5 Container Deployment

This section outlines the supported container platforms for HCL Digital Experience 9.5, and instructions on how to deploy to supported container environments.

**Notes:**

-   Prior to deploying on Red Hat OpenShift or Kubernetes, it is recommended that administrators read the [Limitations/Requirements](limitations_requirements.md) section.
-   Additional guidance about storage class and volume is available for HCL Digital Experience 9.5 container administrators. See the topic [Sample Storage Class and Volume for HCL Digital Experience 9.5 Container in Amazon EKS or Red Hat OpenShift](sample_storage_class_volume.md).
-   Watch this video tutorial: [Getting started with HCL Portal 9.5 on Docker](https://youtu.be/GX6Fbv7yidI).
-   Watch this webinar: [Getting started with HCL DX 9.5 on container platforms](https://register.gotowebinar.com/recording/3305440225978389763).

The following container platforms are supported.

-   [Image listing](docker.md) and Docker install \(This page presents the latest Container Update CF file listings.\)
-   [Red Hat OpenShift](openshift.md)
-   [Amazon Elastic Kubernetes Service \(EKS\)](kubernetes_eks.md)
-   [Microsoft Azure Kubernetes Service \(AKS\)](azure_aks.md)
-   [Google Kubernetes Engine \(GKE\)](google_gke.md)

**Note:** Initial login credentials for the DX Docker image are: `wpsadmin/wpsadmin`.

-   **[Deploy DX 9.5 Container to Red Hat OpenShift](../containerization/openshift.md)**  
Learn how to deploy HCL Digital Experience \(DX\) 9.5 to Red Hat OpenShift platform.
-   **[Deploy DX Container to Amazon EKS](../containerization/kubernetes_eks.md)**  
Learn how to deploy, find, understand, and customize the different releases of HCL Digital Experience 9.5 containers, along with Ambassador to Kubernetes, as verified in [Amazon Elastic Kubernetes Service \(Amazon EKS\)](https://aws.amazon.com/eks/).
-   **[Deploying HCL Digital Experience Containers to Google Kubernetes Engine \(GKE\)](../containerization/google_gke.md)**  
Learn how to deploy different releases of HCL Digital Experience \(DX\) containers, along with the Ambassador, to Kubernetes as verified in [Google Kubernetes Engine \(GKE\)](https://console.cloud.google.com/marketplace/details/google-cloud-platform/container-engine).
-   **[Deploy DX Container to Microsoft Azure Kubernetes Service \(AKS\)](../containerization/azure_aks.md)**  
Learn how to deploy HCL Digital Experience \(DX\) 9.5 CF182 and later container release along with Ambassador to Kubernetes, as verified in Microsoft Azure Kubernetes Service \(AKS\).

**Parent topic:**[Operator-based deployment](../containerization/deploy_container_platforms.md)

