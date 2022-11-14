# Deploying container platforms using Helm

Learn to deploy HCL Digital Experience 9.5 CF196 and later release containers to Kubernetes using [Helm](../helm_deployment/overview.md) on the following as verified in [Google Kubernetes Engine (GKE)](https://console.cloud.google.com/marketplace/details/google-cloud-platform/container-engine){:target="_blank"}. 

Beginning with HCL Digital Experience CF197 and later releases, the Helm deployment pattern is supported for new deployments to [Red Hat Open Shift](https://www.redhat.com/en/technologies/cloud-computing/openshift){:target="_blank"}, [Amazon Elastic Kubernetes Service \(EKS\)](https://aws.amazon.com/eks/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc&eks-blogs.sort-by=item.additionalFields.createdDate&eks-blogs.sort-order=desc){:target="_blank"}, and [Microsoft Azure Kubernetes Service (AKS)](https://azure.microsoft.com/en-us/services/kubernetes-service/){:target="_blank"}.

!!! note
        For more information, you can also refer to deploy HCL DX 9.5 CF197 on [Azure AKS using the Helm Chart](https://support.hcltechsw.com/sys_attachment.do?sys_id=876b1adf1bb97490a67e9759bc4bcb03){:target="_blank"}.

!!! note
    
    HCL DX V9.5 V200 and later is designed to run on any Certified Kubernetes platform with some conditions, documented in [Container platform support matrix](../../systemrequirements/9.5_express/supportedsoftware.md)

Refer to the following videos for more information:

-   [Deploy HCL DX 9.5 Container using Helm](https://www.youtube.com/watch?v=pFKpMImqOQE){:target="_blank"}
-   [Update HCL DX 9.5 Container to a later version using Helm](https://www.youtube.com/watch?v=TwZuNOeWdT4){:target="_blank"}

## About this task

This section provides administrators with all Helm-based deployment tasks to deploy HCL Digital Experience CF196 and later releases to supported Kubernetes platforms. This includes preparation, installation, and uninstallation of the deployments using Helm.

!!! important

    Beginning with HCL Digital Experience 9.5 Container Update CF199, migration from an Operator (dxctl) based deployment to a Helm deployment of Container Update CF199 or higher is supported. Reference the Help Center topic [Migration from Operator (dxctl) to Helm deployment.](../operator-migration/operator_migration_preparation.md)for more information. Migration from earlier HCL Digital Experience 9.5 Container Update CF196 - CF198 [Operator based deployments](../../../manage/container_configuration/operator-based/deploy_container_platforms.md) to Helm deployments is not supported.

Follow these steps to prepare for and deploy HCL Digital Experience 9.5 CF196 and later release to Kubernetes using Helm, as verified in [Google Kubernetes Engine (GKE)](https://console.cloud.google.com/marketplace/details/google-cloud-platform/container-engine){:target="_blank"}, and with HCL Digital Experience CF197 and later releases, the Helm deployment pattern is supported for new deployments to [Red Hat Open Shift](https://www.redhat.com/en/technologies/cloud-computing/openshift){:target="_blank"}, [Amazon Elastic Kubernetes Service \(EKS\)](https://aws.amazon.com/eks/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc&eks-blogs.sort-by=item.additionalFields.createdDate&eks-blogs.sort-order=desc){:target="_blank"}, and [Microsoft Azure Kubernetes Service \(AKS\)](https://azure.microsoft.com/en-us/services/kubernetes-service/){:target="_blank"}.

**Before you begin:** Refer to the latest HCL DX 9.5 Container Update image files list given in the [Container image list](../image_list.md) topic.



