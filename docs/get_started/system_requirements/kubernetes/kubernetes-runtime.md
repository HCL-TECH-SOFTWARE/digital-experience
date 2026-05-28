# Kubernetes runtime

View the latest supported Kubernetes versions and platforms for HCL Digital Experience (DX) 9.5.

!!! important "HCL discontinued Operator-based deployments"
    Beginning with HCL DX 9.5 CF200, HCL discontinued Operator-based deployments and provides support only for [Helm-based deployments](../../../deployment/install/container/helm_deployment/overview.md). No further updates or fixes will be provided for     Operator-based deployments. All customers must migrate to Helm-based deployments for their DX installations. HCL will support customers during the transition from     Operator-based deployments to Helm-based deployments. For more information about the migration process, see [Migrating from Operator-based to Helm-based deployments](../../../deployment/install/container/operator-migration/operator_migration_preparation.md).

For or best results, customers should stay up to date with the latest HCL DX and Kubernetes releases. Because all fixes are delivered in the latest HCL DX release, customers might be asked to upgrade to the latest version to assist with problem determination.

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
|CF235| Kubernetes 1.35<br/>Kubernetes 1.34<br/>Kubernetes 1.33<br/>Kubernetes 1.32<br/>Kubernetes 1.31<br/>Kubernetes 1.30<br/>Kubernetes 1.29<br/>Kubernetes 1.28<br/>Kubernetes 1.27<br/>Kubernetes 1.26<br/>|
|CF234| Kubernetes 1.35<br/>Kubernetes 1.34<br/>Kubernetes 1.33<br/>Kubernetes 1.32<br/>Kubernetes 1.31<br/>Kubernetes 1.30<br/>Kubernetes 1.29<br/>Kubernetes 1.28<br/>Kubernetes 1.27<br/>Kubernetes 1.26<br/>|
|CF233| Kubernetes 1.34<br/>Kubernetes 1.33<br/>Kubernetes 1.32<br/>Kubernetes 1.31<br/>Kubernetes 1.30<br/>Kubernetes 1.29<br/>Kubernetes 1.28<br/>Kubernetes 1.27<br/>Kubernetes 1.26<br/>|

!!! important
    To prevent a possible Kubernetes deployment failure in Kubernetes versions 1.28 and 1.29, you might need to run the `modprobe br_netfilter` command before running `kubeadm init`. This helps avoid a networking bridge/iptables issue.

## Prerequisites checker for DX deployment

HCL DX provides a tool called "Prereqs Checker" that runs several checks to confirm whether the prerequisites for various components are met.  You can get the results of these checks from the container logs of the `prereqs-checker` container in the pod where Prereqs Checker is installed. For more information, see [Configuring Prereqs Checker for DX deployment](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-core-prereqs-checker.md).   

The primary objective of the Prereqs Checker is to learn whether the specified prerequisites are met and to inform users of the result in the logs. You can also use the checker to discover basic information about the file system of the mounted volumes, which helps track the issues related to the file systems.

## WAS, JDK, UBI, and iFix versions

This table provides information about the WebSphere Application Server (WAS), Java Development Kit (JDK), Red Hat Universal Base Image (UBI) level, and iFix versions for each CF.

<!--Option #1-->

|CF Level|WAS|JDK|UBI|iFix|
|--------|---|---|---|----|
|CF236|9.0.5.27|8.0.8.60|Core and Remote Search: 8.10-1776104706 <br/> Other Images: 9.7-1776104705|N/A|
|CF235|9.0.5.27|8.0.8.60||N/A|
|CF234|9.0.5.26|8.0.8.55||iFix PH68243<br/>iFix PH68418|
|CF233|9.0.5.26|8.0.8.55||iFix PH68243<br/>iFix PH68418|
|CF232|9.0.5.25|8.0.8.51||iFix PH67137<br/>iFix PH67817|
|CF231|9.0.5.25|8.0.8.51||iFix PH67137<br/>iFix PH67817|
|CF230|9.0.5.24|8.0.8.45||iFix PH66674|
|CF229|9.0.5.24|8.0.8.45||iFix PH66674|
|CF228|9.0.5.23|8.0.8.40||N/A|
|CF227|9.0.5.23|8.0.8.40||N/A|
|CF226|9.0.5.22|8.0.8.35||N/A|

<!--Option #2-->

|CF Level|WAS|JDK|UBI <br/> (Core and Remote Search)|UBI <br/> (Other Images)|iFix|
|-----|--------|--------|---------------|--------------|---|
|CF236|9.0.5.27|8.0.8.60|8.10-1776104706|9.7-1776104705|N/A|
|CF235|9.0.5.27|8.0.8.60|||N/A|
|CF234|9.0.5.26|8.0.8.55|||iFix PH68243<br/>iFix PH68418|
|CF233|9.0.5.26|8.0.8.55|||iFix PH68243<br/>iFix PH68418|
|CF232|9.0.5.25|8.0.8.51|||iFix PH67137<br/>iFix PH67817|
|CF231|9.0.5.25|8.0.8.51|||iFix PH67137<br/>iFix PH67817|
|CF230|9.0.5.24|8.0.8.45|||iFix PH66674|
|CF229|9.0.5.24|8.0.8.45|||iFix PH66674|
|CF228|9.0.5.23|8.0.8.40|||N/A|
|CF227|9.0.5.23|8.0.8.40|||N/A|
|CF226|9.0.5.22|8.0.8.35|||N/A|
