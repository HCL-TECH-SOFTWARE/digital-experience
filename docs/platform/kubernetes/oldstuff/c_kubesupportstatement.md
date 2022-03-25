# Container platform support matrix 

View the latest Kubernetes and OpenShift platforms tested and supported for specific HCL Digital Experience 9.5 Container Update deployments.

**Attention:** Beginning with HCL Digital Experience 9.5 Container Update CF200, HCL has discontinued releasing the HCL Digital Experience \(DX\) [Operator-based deployments](deploy_container_platforms.md) and will provide support only for [Helm-based deployments](helm.md). There will be no further updates or code fixes provided for the Operator-based deployments. HCL requires all customers to migrate to Helm-based deployments for their DX installations. HCL will work with our customers as they transition from Operator-based to Helm-based deployments. For more information on the migration process, see [Migrating from Operator-based to Helm-based deployments](helm_operator_migration.md).

HCL encourages customers to remain up-to-date on the latest DX and Kubernetes releases. As a result, DX will provide all fixes on the latest release. Customers may be asked to upgrade to the latest DX release to assist with problem determination.

## General Kubernetes Support Policy:

-   HCL DX 9.5 CF200 and later is architected to run on any Certified Kubernetes platform \([https://www.cncf.io/certification/software-conformance](https://www.cncf.io/certification/software-conformance)\), provided that,

-   the Kubernetes platform is hosted on x86\_64 hardware
-   the Kubernetes platform is officially supported by Helm \([https://helm.sh/docs/topics/kubernetes\_distros/](https://helm.sh/docs/topics/kubernetes_distros/)\).
    For the list of Kubernetes versions that are tested and supported by HCL, refer to the [HCL DX supported hardware and software statements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=ba230c701b983c50f37655352a4bcb29) page.

-   Internally, HCL tests DX against a range of Kubernetes platforms that is regularly reviewed and updated, with the intent of staying up-to-date as possible. We do not test with every single platform vendor, but aim to cover a representative sample of popular Kubernetes implementations. See the [HCL DX supported hardware and software statements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=ba230c701b983c50f37655352a4bcb29) on the HCL Support Knowledge Base and the following table for additional details.
-   From time-to-time, platform providers may release previews of upcoming Kubernetes versions. We will not provide support for those versions.
-   If you encounter any issue on an unsupported or untested Kubernetes or Cloud Platform version, you may be asked to install a supported level.

|DX CF Releases|Red Hat OpenShift|Amazon EKS|Azure AKS|Google GKE|
|--------------|-----------------|----------|---------|----------|
|CF201|OS 4.7<br/>Kubernetes 1.20|EKS 1.19|AKS 1.20|GKE 1.21|
|CF200|OS 4.7<br/>Kubernetes 1.20|EKS 1.19|AKS 1.20|GKE 1.21|
|CF199|OS 4.7<br/>Kubernetes 1.20|EKS 1.19|AKS 1.20|GKE 1.21|
|CF198|OS 4.7<br/>Kubernetes 1.20|EKS 1.19|AKS 1.19<br/>AKS 1.20|GKE 1.20|
|CF197|OS 4.6<br/>Kubernetes 1.19<br/>OS 4.5<br/>Kubernetes 1.18|EKS 1.19|AKS 1.19|GKE 1.20|
|CF196|OS 4.6<br/>Kubernetes 1.19<br/>OS 4.5<br/>Kubernetes 1.18|EKS 1.19|AKS 1.19|GKE 1.18|
|CF195|OS 4.6<br/>Kubernetes 1.19<br/>OS 4.5<br/>Kubernetes 1.18|EKS 1.19|AKS 1.19|GKE 1.18|
|CF194|OS 4.5<br/>Kubernetes 1.18<br/>OS 4.6<br/>Kubernetes 1.19|EKS 1.19|AKS 1.19|GKE 1.18|
|CF193|OS 4.5<br/>Kubernetes 1.18<br/>OS 4.6<br/>Kubernetes 1.19|EKS 1.19|AKS 1.19AKS 1.17.7|GKE 1.18|
|CF192|OS 4.4<br/>Kubernetes 1.17|EKS 1.17EKS 1.18|AKS 1.17.7 AKS 1.18.4|GKE 1.16<br/>GKE 1.17<br/>GKE 1.18|
|CF191|OS 4.4<br/>Kubernetes 1.17|EKS 1.17|AKS 1.17.7|GKE 1.16|
|CF19|OS 4.3<br/>Kubernetes 1.16|EKS 1.17|AKS 1.17.7|GKE 1.16|
|CF184|OS 4.3<br/>Kubernetes 1.16|EKS 1.17|AKS 1.17.7|GKE 1.16|

|DX CF Releases|Red Hat OpenShift|Amazon EKS|
|--------------|-----------------|----------|
|CF201|OS 4.7<br/>Kubernetes 1.20<br/>\(Standalone Linux + Clustered Linux\)|EKS 1.19 \(Clustered Linux\)|
|CF200|OS 4.7<br/>Kubernetes 1.20<br/>\(Standalone Linux + Clustered Linux\)|EKS 1.19 \(Clustered Linux\)|
|CF199|OS 4.7<br/>Kubernetes 1.20<br/>\(Standalone Linux + Clustered Linux\)|EKS 1.19 \(Clustered Linux\)|
|CF198|OS 4.7<br/>Kubernetes 1.20<br/>OS 4.5<br/>Kubernetes 1.18
|NA|
|CF197|OS 4.5<br/>Kubernetes 1.18|NA|
|CF196|OS 4.5<br/>Kubernetes 1.18|NA|
|CF195|OS 4.5<br/>Kubernetes 1.18|NA|
|CF194|OS 4.5<br/>Kubernetes 1.18|NA|
|CF193|OS 4.5<br/>Kubernetes 1.18|NA|
|CF192|OS 4.4<br/>Kubernetes 1.17|NA|
|CF191|OS 4.4<br/>Kubernetes 1.17|NA|
|CF19|OS 4.3<br/>Kubernetes 1.16|NA|
|CF184|OS 4.3<br/>Kubernetes 1.16|NA|

**Parent topic:**[Digital Experience on containerized platforms](../containerization/deployment.md)

