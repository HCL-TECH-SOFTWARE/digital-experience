# Kubernetes runtime

View the latest Kubernetes versions and platforms tested and supported for specific HCL Digital Experience (DX) 9.5 Kubernetes deployments.

!!! attention "Operator-based deployments are discontinued"
    Beginning with HCL DX 9.5 CF200, HCL has discontinued [Operator-based deployments](https://help.hcltechsw.com/digital-experience/9.5/containerization/deploy_container_platforms.html) and will provide support only for [Helm-based deployments](../../../deployment/install/container/helm_deployment/overview.md). There will be no further updates or code fixes provided for the Operator-based deployments. HCL requires all customers to migrate to Helm-based deployments for their DX installations. HCL will work with our customers as they transition from Operator-based to Helm-based deployments. For more information on the migration process, see [Migrating from Operator-based to Helm-based deployments](../../../deployment/install/container/operator-migration/operator_migration_preparation.md).

HCL encourages customers to remain up-to-date on the latest HCL DX and Kubernetes releases, and be aware that HCL DX provides all fixes on the latest release. Customers may be asked to upgrade to the latest HCL DX release to assist with problem determination.

## Kubernetes platform support policy

HCL DX 9.5 CF200 and later is designed to run on any Certified Kubernetes platform ([https://www.cncf.io/certification/software-conformance](https://www.cncf.io/certification/software-conformance)), provided that the following statements are true:

* The Kubernetes platform is hosted on x86-64 hardware.
* The Kubernetes platform is officially supported by Helm ([https://helm.sh/docs/topics/kubernetes\_distros/](https://helm.sh/docs/topics/kubernetes_distros/)).

HCL tests DX against a range of Kubernetes platforms that are regularly reviewed and updated, with the intent of staying as up-to-date as possible. HCL does not test with every single platform vendor with every single Kubernetes version, but aim to cover a representative sample of popular Kubernetes implementations. See [Table 1](#table-1-tested-kubernetes-platforms-on-full-container-deployment) for the list of Kubernetes platforms that HCL tested with.

### Table 1: Tested Kubernetes platforms on full container deployment

This table lists the Kubernetes platforms that HCL tested and supports. This is provided for information only.

|Kubernetes platforms on full deployments|Hybrid deployments (Kubernetes/on Premise)|
|--------------|-----------------|
|- Amazon EKS<br/>- Google GKE<br/>- Microsoft Azure AKS<br/>- Red Hat OpenShift|- Amazon EKS / AWS EC2<br/>- Red Hat OpenShift on AWS / AWS EC2|

## Kubernetes version support policy

The table 2 lists the Kubernetes versions that HCL tested and supports in HCL DX CF releases.

* Platform providers may release previews of upcoming Kubernetes versions, however, HCL does not provide support for those versions.
* If you encounter any issue on an unsupported or untested Kubernetes version, you may be asked to install a supported level.

### Table 2: Tested and supported Kubernetes versions

This table provides information about the Kubernetes versions that are tested and supported in HCL DX CF releases.
Review your chosen Kubernetes platform and ensure that it supports the following Kubernetes versions:

<!-- Note: As per L2/L3, only keep three latest releases and delete older ones -->

|CF Level|Kubernetes versions|
|--------------|-----------------|
|CF216| Kubernetes 1.28<br/>Kubernetes 1.27<br/>Kubernetes 1.26<br/>Kubernetes 1.25<br/>|
|CF215| Kubernetes 1.28<br/>Kubernetes 1.27<br/>Kubernetes 1.26<br/>Kubernetes 1.25<br/>|
|CF214| Kubernetes 1.27<br/>Kubernetes 1.26<br/>Kubernetes 1.25<br/>Kubernetes 1.24<br/>Kubernetes 1.23<br/>|
|CF213| Kubernetes 1.27<br/>Kubernetes 1.26<br/>Kubernetes 1.25<br/>Kubernetes 1.24<br/>Kubernetes 1.23<br/>|



!!! attention "__*__ CF203 limited support statement"
    In CF203, HCL DX supports Kubernetes 1.22 only for HAProxy-based deployments

## Prereqs Checker For DX Deployment

HCL DX has introduced a tool called "Prereqs Checker" that runs a number of checks to confirm if the prerequisites for various components are met.  

You can get the result of these checks from the container logs of the `prereqs-checker` container in the pod where Prereqs Checker is installed. For more information, see [Configure Prereqs Checker For DX Deployment](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-core-prereqs-checker.md).   

For these checks, one separate sidecar container is deployed along with the main application container. This is a lightweight container so the main application performance would not get affected.

The main objective of the Prereqs Checker is to know if the specified prerequisites are met and to inform users the result in the logs, that is, if the checks have passed or failed. It can also be used to check basic information about the file system of the mounted volumes which helps track the issues related to the file systems.