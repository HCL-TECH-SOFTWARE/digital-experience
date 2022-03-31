# Deploying container platforms using Helm

Learn to deploy HCL Digital Experience 9.5 CF196 and later release containers to Kubernetes using [Helm](../../kubernetes/overview.md) on the following as verified in [Google Kubernetes Engine \(GKE\)](https://console.cloud.google.com/marketplace/details/google-cloud-platform/container-engine). Beginning with HCL Digital Experience CF197 and later releases, the Helm deployment pattern is supported for new deployments to [Red Hat Open Shift](https://www.redhat.com/en/technologies/cloud-computing/openshift), [Amazon Elastic Kubernetes Service \(EKS\)](https://aws.amazon.com/eks/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc&eks-blogs.sort-by=item.additionalFields.createdDate&eks-blogs.sort-order=desc), and [Microsoft Azure Kubernetes Service \(AKS\)](https://azure.microsoft.com/en-us/services/kubernetes-service/).

!!! note
        For more information, you can also refer to deploy HCL DX 9.5 CF197 on [Azure AKS using HELM Chart](https://support.hcltechsw.com/sys_attachment.do?sys_id=876b1adf1bb97490a67e9759bc4bcb03).

!!! note
    
    HCL DX V9.5 V200 and later is designed to run on any Certified Kubernetes platform with some conditions, documented in [Container platform support matrix](../../kubernetes/c_kubesupportstatement.md)

Refer video:

-   [Deploy HCL DX 9.5 Container using Helm](https://www.youtube.com/watch?v=pFKpMImqOQE).
-   [Update HCL DX 9.5 Container to a later version using Helm](https://www.youtube.com/watch?v=TwZuNOeWdT4)

## About this task

This section provides administrators with all Helm-based deployment tasks to deploy HCL Digital Experience CF196 and later releases to supported Kubernetes platforms. This includes preparation, installation, and uninstallation of the deployments using Helm.

!!! important

    Beginning with HCL Digital Experience 9.5 Container Update CF199, migration from an Operator \(dxctl\) based deployment to a Helm deployment of Container Update CF199 or higher is supported. Reference the Help Center topic [Migration from Operator \(dxctl\) to Helm deployment.](../operator-migration/operator_migration_preparation.md)for more information. Migration from earlier HCL Digital Experience 9.5 Container Update CF196 - CF198 [Operator based deployments](../operator-based/deploy_container_platforms.md) to Helm deployments is not supported.

Follow these steps to prepare for and deploy HCL Digital Experience 9.5 CF196 and later release to Kubernetes using Helm, as verified in [Google Kubernetes Engine \(GKE\)](https://console.cloud.google.com/marketplace/details/google-cloud-platform/container-engine), and with HCL Digital Experience CF197 and later releases, the Helm deployment pattern is supported for new deployments to [Red Hat Open Shift](https://www.redhat.com/en/technologies/cloud-computing/openshift), [Amazon Elastic Kubernetes Service \(EKS\)](https://aws.amazon.com/eks/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc&eks-blogs.sort-by=item.additionalFields.createdDate&eks-blogs.sort-order=desc), and [Microsoft Azure Kubernetes Service \(AKS\)](https://azure.microsoft.com/en-us/services/kubernetes-service/).

**Before you begin:** Refer to the latest HCL DX 9.5 Container Update image files list given in the [Docker image list](../../kubernetes/docker.md) topic.

-   **[Planning your container deployment using Helm](../deployment/preparation/overview.md)**  
Helm is a software package manager that simplifies deployment of applications and services to Red Hat OpenShift and Kubernetes container platforms.
-   **[Configure PersistentVolumeClaims \(PVCs\)](../deployment/preparation/prepare_persistent_volume_claims.md)**  
 To run HCL Digital Experience 9.5 Container deployments in your Kubernetes or OpenShift cluster, you need to set up PersistentVolumes \(PVs\) on your cluster and configure the Helm Chart to create the appropriate PersistentVolumeClaims \(PVCs\).
-   **[Configure networking](../deployment/preparation/prepare_configure_networking.md)**  
This section explains what must be configured from a networking perspective to get HCL Digital Experience 9.5 running in your Kubernetes or OpenShift cluster, and to provide accessibility to your deployment from outside the Cluster.
-   **[Additional Helm tasks](../deployment/preparation/overview.md)**  
This topic shows you how to leverage `NodeSelectors` to allow deploying specific DX 9.5 application Pods only on a specific node.
-   **[Install and uninstall commands for HCL DX 9.5 CF196 and later container deployments to Kubernetes and Red Hat OpenShift platforms using Helm](../deployment/helm_install_commands.md)**  
 The following are install and uninstall commands that are used to deploy or uninstall HCL Digital Experience 9.5 CF196 and later releases to Kubernetes and Red Hat OpenShift platforms using Helm.
-   **[Update deployment to a later version](../operations/helm_update_deployment.md)**  
 This section shows how to update your HCL DX 9.5 Container Update CF197 and later deployment to a newer DX 9.5 Container Update release version.
<!-- -   **[Hybrid Deployment - Helm](../containerization/hybrid_deployment_helm.md)**  
This section describes how to install HCL Digital Experience 9.5 Container Update CF198 and later Portal Server and Web Content Manager services to on-premises platforms, operating with Digital Asset Management, Content Composer, Experience API deployed to cloud-based Kubernetes and OpenShift platforms using the Helm deployment method. -->



