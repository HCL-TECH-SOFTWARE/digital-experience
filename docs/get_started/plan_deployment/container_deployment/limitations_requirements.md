# Containerization requirements and limitations

This section describes the requirements to deploy the HCL Digital Experience 9.5 images to container platforms and current limitations.

**Attention:** Beginning with HCL Digital Experience 9.5 Container Update CF200, HCL has discontinued releasing the HCL Digital Experience \(DX\) [Operator-based deployments](../../../deployment/install/container/overview.md) and will provide support only for [Helm-based deployments](../../../deployment/install/container/helm_deployment/overview.md). There will be no further updates or code fixes provided for the Operator-based deployments. HCL requires all customers to migrate to Helm-based deployments for their DX installations. HCL will work with our customers as they transition from Operator-based to Helm-based deployments. For more information on the migration process, see [Migrating from Operator-based to Helm-based deployments](../../../deployment/install/container/operator-migration/operator_migration_preparation.md).

Consult the [HCL Digital Experience 9.5 Support Statements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=17d6296a1b5df34077761fc58d4bcb03) on the HCL DX Support pages for the latest updates on supported platforms, components, and release levels.

## Requirements for supported file systems

This section describes the requirements for supported file systems.

-   DX requires two \(2\) `ReadWriteMany` volumes:
    -   One volume for Core.
    -   One volume for Digital Asset Management.
-   All the other pods require `ReadWriteOnce` volumes.
-   DX is input-output \(I/O\) intensive and requires a high-performance file system for optimization.
-   A `persistence-node` relies on PostgreSQL which requires the use of hard links. Storage systems \(like Azure Files\) that do not support the use of hard links cannot be used. For more information, see the [Microsoft documentation for features not supported by the Azure File service](https://docs.microsoft.com/en-us/rest/api/storageservices/features-not-supported-by-the-azure-file-service).
-   All DX applications require the use of symbolic links and soft links. Storage systems must support the use of symbolic links and soft links. If you are using Azure Files, you must enable `mountOptions` of the StorageClass using `mfsymlinks`. For more information, see the [Microsoft documentation on troubleshooting Azure Files on Linux \(SMB\)](https://docs.microsoft.com/en-us/azure/storage/files/storage-troubleshoot-linux-file-connection-problems#cannot-create-symbolic-links---ln-failed-to-create-symbolic-link-t-operation-not-supported).
-   You can configure volume sizes individually per volume and these are dependent of the respective usage. For more information, see the following Help Center topics:
    -   [Configuring PVCs in a Helm deployment](../../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_persistent_volume_claims.md)
    -   [Customizing the container for Operator-based deployments](customizing_container_deployment.md#section_a2l_xhv_4nb)

## Requirements and limitations for Helm-based deployments

This section describes the requirements and limitations for HCL Digital Experience 9.5 Container Update CF200 and later deployments using Helm.

HCL DX 9.5 CF200 and later is designed to run on any certified Kubernetes platform \([https://www.cncf.io/certification/software-conformance](https://www.cncf.io/certification/software-conformance)\), provided that,

-   the Kubernetes platform is hosted on x86\_64 hardware
-   the Kubernetes platform is officially supported by Helm \([https://helm.sh/docs/topics/kubernetes\_distros/](https://helm.sh/docs/topics/kubernetes_distros/)\).

For the list of Kubernetes versions that are tested and supported by HCL, refer to the [HCL DX supported hardware and software statements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=ba230c701b983c50f37655352a4bcb29) page.

Even though the platforms might be Certified Kubernetes platforms, you might find the environments varying slightly based on the vendors. HCL Support will make a reasonable effort to assist the customer in problem resolution in scenarios where the Kubernetes version is still under support by the vendor. If there are any unresolved issues, HCL Support will provide alternative implementation recommendations or open Feature Requests for the problem scenario.

Internally, HCL tests DX against a range of Kubernetes platforms that is regularly reviewed and updated. We do not test with every single platform vendor, but aim to cover a representative sample of popular Kubernetes implementations. See the [HCL DX supported hardware and software statements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=ba230c701b983c50f37655352a4bcb29) on the HCL Support Knowledge Base for additional details.

To deploy HCL Digital Experience 9.5 CF200 to the supported Kubernetes platforms using Helm, the following are required:

-   **Helm installation**:

    Download and install Helm to your target environment. HCL DX 9.5 CF200 and later container deployment is tested and is supported with Helm v3. For more information regarding the supported Helm version for individual Kubernetes versions, refer [Helm documentation](https://helm.sh/).

-   **Migration**:

    For information about migrating from Operator-based to Helm-based deployments, see [Migrating from Operator-based to Helm-based deployments](../../../deployment/install/container/operator-migration/operator_migration_preparation.md).

-   **Container platform capacity resource requirements**:

    The following table outlines the default minimum capacity of container resources requested by the HCL DX 9.5 Container Components in the Helm-based deployments, as well as the number of Pods required of each component.

    |Component|Resource name|Pod Minimum CPU|Pod Minimum Memory|No. of Pods Minimum|
    |---------|-------------|---------------|------------------|-------------------|
    |Core|core|0.8|3072MB|1|
    |Ring API|ringApi|0.1|128MB|1|
    |Content Composer|contentComposer|0.1|128MB|1|
    |Design Studio|designStudio|0.1|128MB|1|
    |Digital Asset Management|digitalAssetManagement|0.25|1024MB|1|
    |DAM Persistence Connection Pool|persistenceConnectionPool|0.5|512MB|1|
    |DAM Persistence Node|persistenceNode|1|1024MB|1|
    |DAM Persistence Metrics Exporter|persistenceMetricsExporter|0.1|128MB|0|
    |Image processor|imageProcessor|0.1|1280MB|1|
    |Open LDAP|openLdap|0.2|512MB|1|
    |Remote search|remoteSearch|0.25|768MB|1 \(Max 1 Pod\)|
    |Runtime Controller|runtimeController|0.1|256MB|1|
    |HAProxy|haproxy|1|1024MB|1|
    |Logging Sidecar|loggingSidecar|0.1|64MB|0|
    |Prereqs Checker|prereqsChecker|0.1|64MB|0|


<!--
???+ info "Related information:"
    - [HCL Digital Experience 9.5 Roadmap: Container deployment](../container_deployment/rm_container/rm_container_deployment.md)
    - [DX Kubernetes support matrix](../../system_requirements/kubernetes/kubernetes-runtime.md)
    - [Deploy DX 9.5 Container to Red Hat OpenShift](../containerization/openshift.md)
    - [Deploy DX Container to Amazon EKS](../containerization/kubernetes_eks.md)
    - [Deploy DX CF192 and later release Containers to Amazon EKS](../containerization/kubernetes_eks_cf192andlater.md)
    - [Deploy DX CF191 and earlier release Containers to Amazon EKS](../containerization/kubernetes_eks_cf191andearlier.md)-->

