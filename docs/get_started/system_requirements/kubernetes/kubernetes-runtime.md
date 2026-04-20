# Kubernetes runtime

View the latest Kubernetes versions and platforms tested and supported for specific HCL Digital Experience (DX) 9.5 Kubernetes deployments.

!!! important "Operator-based deployments are discontinued"
    Beginning with HCL DX 9.5 CF200, HCL discontinued [Operator-based deployments](https://help.hcltechsw.com/digital-experience/9.5/containerization/deploy_container_platforms.html) and provides support only for [Helm-based deployments](../../../deployment/install/container/helm_deployment/overview.md). No further updates or fixes will be provided for operator-based deployments. All customers must migrate to Helm-based deployments for their DX installations. HCL will support customers during the transition from operator-based deployments to Helm-based deployments. For more information about the migration process, see [Migrating from Operator-based to Helm-based deployments](../../../deployment/install/container/operator-migration/operator_migration_preparation.md).

For best results, customers should stay up to date on the latest HCL DX and Kubernetes releases and be aware that HCL DX provides all fixes in the latest release. Customers might be asked to upgrade to the latest HCL DX release to assist with problem determination.

## Kubernetes platform support policy

HCL DX 9.5 CF200 and later versions are designed to run on any [Certified Kubernetes platform](https://www.cncf.io/certification/software-conformance){target="_blank"}, provided the following conditions are met:

- The Kubernetes platform runs on x86-64 hardware.
- The Kubernetes platform is officially supported by [Helm](https://helm.sh/docs/topics/kubernetes_distros/){target="_blank"}.

HCL tests DX against a range of Kubernetes platforms that are regularly reviewed and updated to remain current. HCL does not test every platform vendor or Kubernetes version, but aims to cover a representative sample of widely used Kubernetes implementations. See [Table 1](#table-1-tested-kubernetes-platforms-on-full-container-deployment) for the list of Kubernetes platforms that HCL has tested.

### Table 1: Tested Kubernetes platforms on full container deployment

This table lists the Kubernetes platforms that HCL has tested and supports. This information is provided for reference only.

| Kubernetes platforms on full deployments | Hybrid deployments (Kubernetes and on-premises) |
|---|---|
| - Amazon EKS<br>- Google GKE<br>- Microsoft Azure AKS<br>- Red Hat OpenShift | - Amazon EKS / AWS EC2<br>- Red Hat OpenShift on AWS / AWS EC2 |

The following storage types are used in HCL internal DX test deployments. This is the set that HCL tests against for validation purposes; other storage types might work but are not tested by HCL.

ReadWriteOnce (RWO) volumes use the cloud provider's native block storage:

- Amazon Elastic Kubernetes Service / Amazon Web Services – EBS (gp2 / gp3)
- Azure Kubernetes Service / Microsoft Azure – Azure Managed Disks (managed-premium)
- Google Kubernetes Engine / Google Cloud – Persistent Disk (standard)
- Red Hat OpenShift – AWS EBS (gp3)

ReadWriteMany (RWX) volumes use NFS shared storage, which is a custom NFS server managed by HCL automation rather than a cloud-provided storage service. These volumes are used for Core Profile and Digital Asset Management shared data.

## Kubernetes version support policy

Table 2 lists the Kubernetes versions that HCL has tested and supports for HCL DX CF releases.

- Platform providers might release preview versions of upcoming Kubernetes releases. However, HCL does not support these versions.
- If you encounter an issue on an unsupported or untested Kubernetes version, you might be asked to install a supported product version.

### Table 2: Tested and supported Kubernetes versions

This table provides information about the Kubernetes versions that are tested and supported for HCL DX CF releases. Review your chosen Kubernetes platform to ensure that it supports the following Kubernetes versions:

<!-- Note: As per L2/L3, only keep three latest releases and delete older ones -->

|CF Level|Kubernetes versions|
|--------------|-----------------|
|CF234| Kubernetes 1.35<br/>Kubernetes 1.34<br/>Kubernetes 1.33<br/>Kubernetes 1.32<br/>Kubernetes 1.31<br/>Kubernetes 1.30<br/>Kubernetes 1.29<br/>Kubernetes 1.28<br/>Kubernetes 1.27<br/>Kubernetes 1.26<br/>|
|CF233| Kubernetes 1.34<br/>Kubernetes 1.33<br/>Kubernetes 1.32<br/>Kubernetes 1.31<br/>Kubernetes 1.30<br/>Kubernetes 1.29<br/>Kubernetes 1.28<br/>Kubernetes 1.27<br/>Kubernetes 1.26<br/>|
|CF232| Kubernetes 1.34<br/>Kubernetes 1.33<br/>Kubernetes 1.32<br/>Kubernetes 1.31<br/>Kubernetes 1.30<br/>Kubernetes 1.29<br/>Kubernetes 1.28<br/>Kubernetes 1.27<br/>Kubernetes 1.26<br/>|

!!! important
    To prevent a possible Kubernetes deployment failure in Kubernetes versions 1.28 and 1.29, you might need to run the `modprobe br_netfilter` command before running `kubeadm init`. This helps avoid a networking bridge/iptables issue.

## Prerequisites checker for DX deployment

HCL DX provides a tool called "Prereqs Checker" that runs several checks to confirm whether the prerequisites for various components are met.  You can get the results of these checks from the container logs of the `prereqs-checker` container in the pod where Prereqs Checker is installed. For more information, see [Configuring Prereqs Checker for DX deployment](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-core-prereqs-checker.md).   

For these checks, a separate sidecar container is deployed with the main application container. This is a lightweight container, so it does not affect main application performance. The primary objective of Prereqs Checker is to determine whether the specified prerequisites are met and to report the results in the logs. You can also use the checker to discover basic information about the file system of mounted volumes, which helps track file system-related issues.
