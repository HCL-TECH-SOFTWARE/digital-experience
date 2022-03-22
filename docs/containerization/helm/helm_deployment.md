# Deploying container platforms using Helm

Learn to deploy HCL Digital Experience 9.5 CF196 and later release containers to Kubernetes using [Helm](helm.md) as verified in [Google Kubernetes Engine \(GKE\)](https://console.cloud.google.com/marketplace/details/google-cloud-platform/container-engine). Beginning with HCL Digital Experience CF197 and later releases, the Helm deployment pattern is supported for new deployments to [Red Hat Open Shift](https://www.redhat.com/en/technologies/cloud-computing/openshift), [Amazon Elastic Kubernetes Service \(EKS\)](https://aws.amazon.com/eks/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc&eks-blogs.sort-by=item.additionalFields.createdDate&eks-blogs.sort-order=desc), and [Microsoft Azure Kubernetes Service \(AKS\)](https://azure.microsoft.com/en-us/services/kubernetes-service/).

Video: [Deploy HCL DX 9.5 Container Update using Helm](https://www.youtube.com/watch?v=pFKpMImqOQE).

## About this task

This section provides administrators with all Helm-based deployment tasks to deploy HCL Digital Experience CF196 and later releases to supported Kubernetes platforms. This includes preparation, installation, and uninstallation of the deployments using Helm.

**Note:** Beginning with HCL Digital Experience 9.5 Container Update CF199, migration from an Operator \(dxctl\) based deployment to a Helm deployment of Container Update CF199 or higher is supported. Reference the Help Center topic [Migration from Operator \(dxctl\) to Helm deployment.](../containerization/helm_operator_migration_dxctl.md)for more information. Migration from earlier HCL Digital Experience 9.5 Container Update CF196 - CF198 [Operator based deployments](deploy_container_platforms.md) to Helm deployments is not supported.

Follow these steps to prepare for and deploy HCL Digital Experience 9.5 CF196 and later release to Kubernetes using Helm, as verified in [Google Kubernetes Engine \(GKE\)](https://console.cloud.google.com/marketplace/details/google-cloud-platform/container-engine), and with HCL Digital Experience CF197 and later releases, the Helm deployment pattern is supported for new deployments to [Red Hat Open Shift](https://www.redhat.com/en/technologies/cloud-computing/openshift), [Amazon Elastic Kubernetes Service \(EKS\)](https://aws.amazon.com/eks/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc&eks-blogs.sort-by=item.additionalFields.createdDate&eks-blogs.sort-order=desc), and [Microsoft Azure Kubernetes Service \(AKS\)](https://azure.microsoft.com/en-us/services/kubernetes-service/).

**Before you begin:** Refer to the latest HCL DX 9.5 Container Update image files list given in the [Docker image list](../containerization/docker.html) topic.

