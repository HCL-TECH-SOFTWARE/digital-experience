# DX Kubernetes Support Matrix

View the latest Kubernetes versions and platforms tested and supported for specific HCL Digital Experience (DX) 9.5 Kubernetes deployments.

!!! attention "Operator-based deployments are discontinued"
    Beginning with HCL DX 9.5 CF200, HCL has discontinued [Operator-based deployments](https://help.hcltechsw.com/digital-experience/9.5/containerization/deploy_container_platforms.html) and will provide support only for [Helm-based deployments](../kubernetes/deployment/helm_deployment.md). There will be no further updates or code fixes provided for the Operator-based deployments. HCL requires all customers to migrate to Helm-based deployments for their DX installations. HCL will work with our customers as they transition from Operator-based to Helm-based deployments. For more information on the migration process, see [Migrating from Operator-based to Helm-based deployments](operator-migration/operator_migration_preparation.md).

HCL encourages customers to remain up-to-date on the latest HCL DX and Kubernetes releases. As a result, HCL DX will provide all fixes on the latest release. Customers may be asked to upgrade to the latest HCL DX release to assist with problem determination.

## Kubernetes platform support policy

HCL DX 9.5 CF200 and later is architected to run on any Certified Kubernetes platform \([https://www.cncf.io/certification/software-conformance](https://www.cncf.io/certification/software-conformance)\), provided that,

* the Kubernetes platform is hosted on x86-64 hardware
* the Kubernetes platform is officially supported by Helm \([https://helm.sh/docs/topics/kubernetes\_distros/](https://helm.sh/docs/topics/kubernetes_distros/)\).

HCL tests DX against a range of Kubernetes platforms that is regularly reviewed and updated, with the intent of staying up-to-date as possible. We do not test with every single platform vendor with every single Kubernetes version, but aim to cover a representative sample of popular Kubernetes implementations. See [Table 1](#table-1-tested-kubernetes-platforms-on-full-container-deployment) for the list of Kubernetes Platforms that HCL tested with.

### Table 1: Tested Kubernetes Platforms on Full Container Deployment

This table provides information about the sample Kubernetes platforms that are tested with DX.

|Kubernetes platforms on full deployments|Hybrid deployments (Kubernetes/on Premise)|
|--------------|-----------------|
|- Amazon EKS<br/>- Google GKE<br/>- Microsoft Azure AKS<br/>- Red Hat OpenShift|- Amazon EKS / AWS EC2<br/>- Red Hat OpenShift on AWS / AWS EC2|

## Kubernetes Version Support Policy

The list of Kubernetes versions that are supported by HCL are included in [Table 2](#table-2-tested-and-supported-kubernetes-versions-on-full-container-deployment).

* Platform providers may release previews of upcoming Kubernetes versions. We will not provide support for those versions.
* If you encounter any issue on an unsupported or untested Kubernetes version, you may be asked to install a supported level.

### Table 2: Tested and supported Kubernetes versions on Full Container deployment

This table provides information about the Kubernetes versions that are tested and supported in HCL DX CF releases.
Review your chosen Kubernetes platform and ensure that it supports the following Kubernetes versions:

|CF Level|Kubernetes versions|
|--------------|-----------------|
|CF203| Kubernetes 1.22 __*__ <br/>Kubernetes 1.21<br/>Kubernetes 1.20<br/>Kubernetes 1.19<br/>|
|CF202| Kubernetes 1.21<br/>Kubernetes 1.20<br/>Kubernetes 1.19 <br/>|
|CF201| Kubernetes 1.21<br/>Kubernetes 1.20<br/>Kubernetes 1.19 <br/>|

!!! attention "__*__ CF203 conditional support statement"
    Starting with CF203 HCL DX supports Kubernetes 1.22 for purely HAProxy based deployments.
    If you are still running HCL DX's Ambassador, then HCL DX can't be run on Kubernetes 1.22.
