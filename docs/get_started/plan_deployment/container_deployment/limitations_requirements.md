# Containerization requirements and limitations

This section describes the requirements to deploy the HCL Digital Experience 9.5 images to container platforms and current limitations.

!!!attention
    Beginning with HCL Digital Experience 9.5 Container Update CF200, HCL has discontinued releasing the HCL Digital Experience (DX\) [Operator-based deployments](../../../deployment/install/container/overview.md) and will provide support only for [Helm-based deployments](../../../deployment/install/container/helm_deployment/overview.md). There will be no further updates or code fixes provided for the Operator-based deployments. HCL requires all customers to migrate to Helm-based deployments for their DX installations. HCL will work with our customers as they transition from Operator-based to Helm-based deployments. For more information on the migration process, see [Migrating from Operator-based to Helm-based deployments](../../../deployment/install/container/operator-migration/operator_migration_preparation.md).

Consult the [HCL Digital Experience 9.5 Support Statements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=17d6296a1b5df34077761fc58d4bcb03) on the HCL DX Support pages for the latest updates on supported platforms, components, and release levels.

## Requirements for supported file systems

This section describes the requirements for supported file systems.

-   DX requires two (2) `ReadWriteMany` volumes:
    -   One volume for Core.
    -   One volume for Digital Asset Management.
-   All the other pods require `ReadWriteOnce` volumes.
-   DX is input-output (I/O) intensive and requires a high-performance file system for optimization.
-   A `persistence-node` relies on PostgreSQL which requires the use of hard links. Storage systems \(like Azure Files\) that do not support the use of hard links cannot be used. For more information, see the [Microsoft documentation for features not supported by the Azure File service](https://docs.microsoft.com/en-us/rest/api/storageservices/features-not-supported-by-the-azure-file-service).
-   All DX applications require the use of symbolic links and soft links. Storage systems must support the use of symbolic links and soft links. If you are using Azure Files, you must enable `mountOptions` of the StorageClass using `mfsymlinks`. For more information, see the [Microsoft documentation on troubleshooting Azure Files on Linux \(SMB\)](https://docs.microsoft.com/en-us/azure/storage/files/storage-troubleshoot-linux-file-connection-problems#cannot-create-symbolic-links---ln-failed-to-create-symbolic-link-t-operation-not-supported).
-   You can configure volume sizes individually per volume and these are dependent of the respective usage. For more information, see the following Help Center topics:
    -   [Configuring PVCs in a Helm deployment](../../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_persistent_volume_claims.md)
    -   [Customizing the container for Operator-based deployments](https://help.hcltechsw.com/digital-experience/9.5/containerization/customizing_container_deployment.html)

## Requirements and limitations for Helm-based deployments

This section describes the requirements and limitations for HCL Digital Experience 9.5 Container Update CF200 and later deployments using Helm.

HCL DX 9.5 CF200 and later is designed to run on any certified Kubernetes platform \([https://www.cncf.io/certification/software-conformance](https://www.cncf.io/certification/software-conformance)\), provided that:

- the Kubernetes platform is hosted on x86\_64 hardware.
- the Kubernetes platform is officially supported by Helm ([https://helm.sh/docs/topics/kubernetes\_distros/](https://helm.sh/docs/topics/kubernetes_distros/)).

For the list of Kubernetes versions that are tested and supported by HCL, refer to the [HCL DX supported hardware and software statements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=ba230c701b983c50f37655352a4bcb29) page.

Even though the platforms might be Certified Kubernetes platforms, you might find the environments varying slightly based on the vendors. HCL Support will make a reasonable effort to assist the customer in problem resolution in scenarios where the Kubernetes version is still under support by the vendor. If there are any unresolved issues, HCL Support will provide alternative implementation recommendations or open Feature Requests for the problem scenario.

Internally, HCL tests DX against a range of Kubernetes platforms that is regularly reviewed and updated. We do not test with every single platform vendor, but aim to cover a representative sample of popular Kubernetes implementations. See the [HCL DX supported hardware and software statements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=ba230c701b983c50f37655352a4bcb29) on the HCL Support Knowledge Base for additional details.

To deploy HCL Digital Experience 9.5 CF200 to the supported Kubernetes platforms using Helm, the following are required:

- **Helm installation**:

    Download and install Helm to your target environment. HCL DX 9.5 CF200 and later container deployment is tested and is supported with Helm v3. For more information regarding the supported Helm version for individual Kubernetes versions, refer [Helm documentation](https://helm.sh/).

- **Migration**:

    For information about migrating from Operator-based to Helm-based deployments, see [Migrating from Operator-based to Helm-based deployments](../../../deployment/install/container/operator-migration/operator_migration_preparation.md).

- **Container platform capacity resource requirements**:

   The following table outlines the minimum possible amount of resource requests by the HCL DX 9.5 container components in Helm-based deployments and the minimum number of Pods required for each component.

   If you want to use the minimal configuration, adjust the resource requests in your `custom-values.yaml` accordingly. If you want to deviate from these numbers, you can do so. Increasing any number is not an issue. In fact, in a production environment, it is recommended to increase these numbers to scale your specific needs. You can also decrease some of these numbers and still be able to start DX (for example, for deployment environments), but this is not officially supported.

   All of the following CPU sizings relate to an environment with 2nd generation Intel Xeon scalable processors (Cascade Lake 8223CL) or 1st generation Intel Xeon Platinum 8000 series (Skylake 8124M) processors.

!!!note
    Every Kubernetes node requires some headroom for Kubernetes-specific services. Ensure that your Kubernetes Node has enough capacity to host both the Kubernetes services as well as HCL DX. The overall requested amount of resources may vary based on disabled/enabled applications.

| **Pod name** | **Minimum number of Pods** | **Container** | **Container Image** | **Container CPU request and limit** | **Container Memory request and limit** |
|---|---|---|---|---|---|
| core | 1 | core | core | 4000m | 6144Mi |
|  |  | system-out-log | logging-sidecar | 100m | 64Mi |
|  |  | system-err-log | logging-sidecar | 100m | 64Mi |
|  |  | prereqs-checker | prereqs-checker | 100m | 64Mi |
| content-composer | 1 | content-composer | content-composer | 100m | 128Mi |
| dam-plugin-google-vision | 1 | dam-plugin-google-vision | dam-plugin-google-vision | 100m | 384Mi |
| dam-plugin-kaltura | 1 | dam-plugin-kaltura | dam-plugin-kaltura | 100m | 128Mi |
| digital-asset-management | 1 | digital-asset-management | digital-asset-manager | 500m | 1512Mi |
|  |  | prereqs-checker | prereqs-checker | 100m | 64Mi |
| haproxy | 1 | haproxy | haproxy | 200m | 300Mi |
| image-processor | 1 | image-processor | image-processor | 200m | 2048Mi |
| license-manager | 1 | license-manager | license-manager | 100m | 300Mi |
| open-ldap | 1 | ldap | openldap | 200m | 768Mi |
| persistence-connection-pool | 1 | persistence-connection-pool | persistence-connection-pool | 500m | 512Mi |
| persistence-node | 1 | persistence-node | persistence-node | 500m | 1024Mi |
|  |  | persistence-metrics-exporter | persistence-metrics-exporter | 100m | 128Mi |
|  |  | persistence-repmgr-log | logging-sidecar | 100m | 64Mi |
|  |  | prereqs-checker | prereqs-checker | 100m | 64Mi |
| remote-search | 1 | remote-search | remote-search | 500m | 2048Mi |
|  |  | system-out-log | logging-sidecar | 100m | 64Mi |
|  |  | system-err-log | logging-sidecar | 100m | 64Mi |
|  |  | prereqs-checker | prereqs-checker | 100m | 64Mi |
| ring-api | 1 | ring-api | ringapi | 100m | 256Mi |
| runtime-controller | 1 | runtime-controller | runtime-controller | 100m | 256Mi |
|  |  |  |  |  |  |
| **Overall** |  |  |  | **8200m** | **16512Mi** |

!!!important
    For the recommended disk storage per PersistentVolume, refer to the `values.yaml` file. The relevant values can be found in the `volumes` section of the `values.yaml file` in the `requests.storage` parameter of each Volume. Note that the required size increases with every core upgrade from one cumulative fix to another. It is recommended that you clean up your previous profiles after confirming that the new profile is working. See related [Core Profile Check](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-core-prereqs-checker/#core-profile-check) and [Storage Space Check](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-core-prereqs-checker/#storage-space-check).

!!!note
    Remember that the overall sums for CPU and memory include all components of HCL DX. 
    In most cases, you will only want to deploy a subset of all components, therefore the minimal system requirements will decrease accordingly.

## Prereqs Checker For DX Deployment

HCL DX has introduced a tool called "Prereqs Checker" that runs a number of checks to confirm if the prerequisites for various components are met.  

You can get the result of these checks from the container logs of the `prereqs-checker` container in the pod where Prereqs Checker is installed. For more information, see [Configure Prereqs Checker For DX Deployment](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-core-prereqs-checker.md).  

For these checks, one separate sidecar container is deployed with the main application container. This is a lightweight container so the main application performance is not affected.

The main objective of the Prereqs Checker is to know if the specified prerequisites are met and to inform users the result in the logs, that is, if the checks have passed or failed. It can also be used to check basic information about the file system of the mounted volumes which helps track the issues related to the file systems.

Starting CF213, [Core Profile Check](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-core-prereqs-checker/#core-profile-check) is introduced to check if the file system has the minimum storage capacity available for upgrade. You can [print the logs](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-core-prereqs-checker/#how-to-manually-trigger-the-checks) of Prereqs Checker to see if the check passed or failed. It is recommended that you clean up previous profile if the check failed before upgrading.


<!--
???+ info "Related information"
    - [HCL Digital Experience 9.5 Roadmap: Container deployment](../container_deployment/rm_container/rm_container_deployment.md)
    - [DX Kubernetes support matrix](../../system_requirements/kubernetes/kubernetes-runtime.md)
    - [Deploy DX 9.5 Container to Red Hat OpenShift](../containerization/openshift.md)
    - [Deploy DX Container to Amazon EKS](../containerization/kubernetes_eks.md)
    - [Deploy DX CF192 and later release Containers to Amazon EKS](../containerization/kubernetes_eks_cf192andlater.md)
    - [Deploy DX CF191 and earlier release Containers to Amazon EKS](../containerization/kubernetes_eks_cf191andearlier.md)-->
