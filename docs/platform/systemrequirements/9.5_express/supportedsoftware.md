# Software requirements
The supported software section specifies the additional software that HCL Portal Express 9.5 requires.

## Kubernetes

This section describes the requirements to deploy the HCL Digital Experience 9.5 images to container platforms and current limitations.

!!! important "Discontinuation of Operator"
    **Attention:** Beginning with HCL Digital Experience 9.5 Container Update CF200, HCL has discontinued releasing the HCL Digital Experience (DX) [Operator-based deployments](../../../platform/kubernetes/operator-based/deploy_container_platforms.md) and provides support only for [Helm-based deployments](../../../platform/kubernetes/architecture/helm_overview.md). HCL plans no further updates or code fixes provided for the Operator-based deployments. All customers must migrate to Helm-based deployments for their DX installations. HCL will work with our customers as they transition from Operator-based to Helm-based deployments. For more information on the migration process, see [Migrating from Operator-based to Helm-based deployments](../../../platform/kubernetes/operator-migration/operator_migration_preparation.md).

Consult the [HCL Digital Experience 9.5 Support Statements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=17d6296a1b5df34077761fc58d4bcb03) on the HCL Digital Experience Support pages for the latest updates on supported platforms, components, and release levels.
### Requirements for supported file systems

This section describes the requirements for supported file systems.

-   DX requires two (2) `ReadWriteMany` volumes:
    -   One volume for Core.
    -   One volume for Digital Asset Management.
-   All the other pods require `ReadWriteOnce` volumes.
-   DX is input/output (I/O) intensive and requires a high-performance file system for optimization.
-   A `persistence-node` relies on PostgreSQL which requires the use of hard links. Storage systems \(like Azure Files\) that do not support the use of hard links cannot be used. For more information, see the [Microsoft documentation for features not supported by the Azure File service](https://docs.microsoft.com/en-us/rest/api/storageservices/features-not-supported-by-the-azure-file-service).
-   All DX applications require the use of symbolic links and soft links. Storage systems must support the use of symbolic links and soft links. If you use Azure Files, enable `mountOptions` of the StorageClass using `mfsymlinks`. For more information, see the [Microsoft documentation on troubleshooting Azure Files on Linux \(SMB\)](https://docs.microsoft.com/en-us/azure/storage/files/storage-troubleshoot-linux-file-connection-problems#cannot-create-symbolic-links---ln-failed-to-create-symbolic-link-t-operation-not-supported).
-   You can configure volume sizes individually by volume, and these volume sizes are depend on the respective usage. For more information, see the following Help Center topics:
    -   [Configuring PVCs in a Helm deployment](../../../platform/kubernetes/deployment/preparation/prepare_persistent_volume_claims.md)
    -   Customizing the container for Operator-based deployments <!-- [see *Related information* section for related topic links] -->

### Requirements for Helm-based deployments

This section describes requirements and current limitations for HCL Digital Experience 9.5 Container Update CF200 and later deployments that use Helm.

HCL DX 9.5 CF200 and later is designed to run on any Certified Kubernetes platform ([https://www.cncf.io/certification/software-conformance](https://www.cncf.io/certification/software-conformance)), provided the following are true:

-   The Kubernetes platform is hosted on x86_64 hardware.
-   The Kubernetes platform is officially supported by Helm ([https://helm.sh/docs/topics/kubernetes\_distros/](https://helm.sh/docs/topics/kubernetes_distros/)).

For the list of Kubernetes versions that are tested and supported by HCL, see the [HCL DX supported hardware and software statements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=ba230c701b983c50f37655352a4bcb29) page.

Even though the platforms may be Certified Kubernetes platforms, you might find the environments varying slightly by vendors. We recommend that you contact HCL Support regarding what help you need in scenarios where the vendor still supports the Kubernetes version in use. If you have any unresolved issues, HCL Support may provide alternative implementation paths or open Feature Requests for the problem scenario.

Internally, HCL tests DX against a range of Kubernetes platforms that is regularly reviewed and updated. HCL does not test with every single platform vendor, but aims to cover a representative sample of popular Kubernetes implementations. See the [HCL DX supported hardware and software statements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=ba230c701b983c50f37655352a4bcb29) on the HCL Support Knowledge Base for additional details.

To deploy HCL Digital Experience 9.5 CF200 to the supported Kubernetes platforms by using Helm, the following resources required:

-   **Helm installation**:

    Download and install Helm to your target environment. HCL DX 9.5 CF200 and later container deployments are tested and is supported with Helm v3. For more information regarding the supported Helm version for individual Kubernetes versions, refer [Helm documentation](https://helm.sh/).

-   **Migration**:

    For information about migrating from Operator-based to Helm-based deployments, see [Migrating from Operator-based to Helm-based deployments](../../../platform/kubernetes/operator-migration/operator_migration_preparation.md).

-   **Resource requirements for container platform capacity**:

    The following table outlines the default minimum capacity of container resources that the HCL DX 9.5 Container Components in the Helm-based deployments requires, and the number of required Pods for each component.

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
    |Sidecar|sidecar|0.1|64MB|0|
    |HAProxy|haproxy|1|1024MB|1|


### DX Kubernetes support matrix
View the latest Kubernetes versions and platforms that HCL tested and supports for specific HCL Digital Experience 9.5 Container Update deployments.

!!! important

    Beginning with HCL Digital Experience 9.5 Container Update CF200, HCL has discontinued releasing the HCL Digital Experience (DX) [Operator-based deployments](https://help.hcltechsw.com/digital-experience/9.5/containerization/deploy_container_platforms.html){:target="_blank"} and provides support only for [Helm-based deployments](../../../platform/kubernetes/index.md). HCL will release no further updates or code fixes provided for the Operator-based deployments. All customers must migrate to Helm-based deployments for their DX installations. HCL will work with our customers as they transition from Operator-based to Helm-based deployments. For more information on the migration process, see [Migrating from Operator-based to Helm-based](../../../platform/kubernetes/operator-migration/operator_migration_preparation.md) deployments.

HCL encourages customers to remain up-to-date on the latest DX and Kubernetes releases. As a result, HCL is making all available DX fixes on the latest release. Customers may be asked to upgrade to the latest DX release to assist with problem determination.

#### Kubernetes platform support policy

HCL DX 9.5 CF200 and later is designed to run on any Certified Kubernetes platform (https://www.cncf.io/certification/software-conformance), provided the following statements are true:

- The Kubernetes platform is hosted on x86_64 hardware.
- The Kubernetes platform is officially supported by Helm (https://helm.sh/docs/topics/kubernetes_distros/).

Internally, HCL tests DX against a range of Kubernetes platforms that are regularly reviewed and updated, with the intent of staying as up-to-date as possible. HCL does not test with every single platform vendor, but aims to cover a representative sample of popular Kubernetes implementations. See [Table 1](#table-1-tested-kubernetes-platforms-on-full-container-deployment) for the list of Kubernetes Platforms that HCL has tested with.

##### Table 1: Tested Kubernetes Platforms on Full Container Deployment

This table provides information about the sample Kubernetes platforms that are tested with DX.

|Kubernetes platforms on full deployments|Hybrid deployments (Kubernetes/on Premise)|
|--------------|-----------------|
|- Amazon EKS<br/>- Google GKE<br/>- Microsoft Azure AKS<br/>- Red Hat OpenShift|- Amazon EKS / AWS EC2<br/>- Red Hat OpenShift on AWS / AWS EC2|


#### Kubernetes version support policy
[Table 2](#table-2-tested-and-supported-kubernetes-versions-on-full-container-deployment) lists the Kubernetes versions that HCL tested and supports.
- From time-to-time, platform providers may release previews of upcoming Kubernetes versions. HCL does not provide support for those versions.
- If you encounter any issue on an unsupported or untested Kubernetes version, you may be asked to install a supported level.

##### Table 2: Tested and Supported Kubernetes Versions on Full Container Deployment
This table provides information about the Kubernetes versions that HCL tested and supports in HCL DX CF releases.

Review your chosen Kubernetes platform and ensure that it supports the following Kubernetes versions:

|CF Level|Kubernetes versions|
|--------------|-----------------|
|CF204| Kubernetes 1.22 <br/>Kubernetes 1.21<br/>Kubernetes 1.20<br/>Kubernetes 1.19<br/>|
|CF203| Kubernetes 1.22 __*__ <br/>Kubernetes 1.21<br/>Kubernetes 1.20<br/>Kubernetes 1.19<br/>|
|CF202| Kubernetes 1.21<br/>Kubernetes 1.20<br/>Kubernetes 1.19 <br/>|
|CF201| Kubernetes 1.21<br/>Kubernetes 1.20<br/>Kubernetes 1.19 <br/>|

!!! important "__*__ CF203 limited support statement"
    Starting with CF203, HCL DX supports Kubernetes 1.22 only for HAProxy-based deployments, and not for deployments that are still running HCL DX's Ambassador.

## Application servers

|Prerequisite|Version|Supported software versions|Product Minimum|Components|Operating system restrictions?|
|----------|----------|----------|----------|----------|----------|
|WebSphere eXtreme Scale|8.6|8.6 and later maintenance|9.5|Full|No|

## Collaboration
|Prerequisite|Version|Supported software versions|Product Minimum|Components|Operating system restrictions?|
|-----------|-----|------------------|-----|------|-------------|
|HCL Connections|5.5|5.5 and later maintenance|9.5|Full|No|
|HCL Connections|6.0|6.0 and later maintenance|9.5|Full|No|
|IBM Forms Experience Builder|8.6.3|8.6.3 and later maintenance|9.5|Full|No|
|HCL Leap|9.2|9.2 and later maintenance|9.5|Full|No|
|HCL Sametime Communicate|9.0|9.0 and later maintenance|9.5|Full|No|
|HCL Sametime Complete|9.0|9.0 and later maintenance|9.5|Full|No|

## Database 
|Supported Software|Version|Supported software minimum|Product minimum|Components|Operating System Restrictions?|
|-----------|-----|------------------|-----|------|-------------|
|Apache Derby|10.11* and future fix packs|10.11*<br/>Newer levels are not currently supported|9.5|Full|No|
|DB2 Standard and Advanced Edition|11.5|11.5 and later maintenance|9.5|Full|No|
|DB2 Advanced Enterprise Server Edition|11.1.0*|11.1.0 and later maintenance|9.5|Full|No|
|DB2 Advanced Workgroup Server Edition|11.1.0*|11.1.0 and later maintenance|9.5|Full|No|
|DB2 Connect Application Server Advanced Edition|11.1.0|11.1.0 and later maintenance|9.5|Full|No|
|DB2 Connect Enterprise Edition|11.1.0|11.1.0 and later maintenance|9.5|Full|No|
|DB2 Enterprise Server Edition|11.1.0|11.1.0 and later maintenance|9.5|Full|No|
|DB2 Express Edition|11.1.0|11.1.0 and later maintenance|9.5|Full|No|
|DB2 for z/OS|11.1.0|11.1.0 and later maintenance|9.5|Full|No|
|Microsoft SQL Server|2014|2014 and later maintenance|9.5|Full|No|
||2016|2016 and later maintenance|9.5|Full|No|
|Microsoft SQL Server Enterprise and Standard Edition|2017 and 2019|2017, 2019 and later maintenance|9.5|Full|No|
|Oracle Database 12.2 Standard Edition|(12.2.0.0)|(12.2.0.0) and later maintenance|9.5|Full|No|
|Oracle Database 12.2 Enterprise Edition|(12.2.0.0)|(12.2.0.0) and later maintenance|9.5|Full|No|
|Oracle Database 12.2.0.1.0 Enterprise Edition|12.2.0.1.0|12.2.0.1.0 and later maintenance|9.5|Full|No|
|Oracle Database 12.2.0.2 Enterprise Edition|12.2.0.2|12.2.0.2 and later maintenance|9.5|Full|No|
|Oracle Database 19c|19c|19c and later maintenance|9.5|Full|No|
|Oracle on Amazon Relational Database Service|12.2.0.1.0|12.2.0.1.0 and later maintenance|9.5|Full|No|

\* Apache Derby is not supported in a production environment.
\* DB2: Includes support for the DB2 pureScale component.

## Development tools 
|Supported Software|Version|Supported software minimum|Product minimum|Components|Operating System Restrictions?|
|-----------|-----|------------------|-----|------|-------------|
|Rational Application Developer for WebSphere|9.7|9.7 and later maintenance|9.5|Full|No|

## JDBC drivers 
|Supported Software|Version|Supported software minimum|Product minimum|Components|Operating System Restrictions?|
|-----------|-----|------------------|-----|------|-------------|
|IBM Application Connectivity for DB2 for z/OS Feature|All Versions|Newer levels are not currently supported|9.5|Full|No|
|IBM DB2 Universal JDBC Provider (XA) from DB2 z/OS (type 2)|All Versions * and future fix packs|Newer levels are not currently supported|9.5|Full|No|
|IBM DB2 Universal JDBC Provider (XA) from DB2 z/OS (type 4)|All Versions*	Newer levels are not currently supported|9.5|Full|No|
|IBM Data Server Driver for JDBC and SQLJ|4.21 (11.1)|4.21 (11.1) only|9.5|Full|No|
|Microsoft SQL Server JDBC Driver|4.2|4.2 and later maintenance|9.5|Full|No|
||6.2|6.2 and later maintenance|9.5|Full|No|
|Oracle JDBC Driver 12.c|12.2**|12.2 and later maintenance|9.5|Full|No|

* JDBC drivers are shipped as DB2 for z/OS APARs. You can check for the appropriate APAR/PTF numbers in the DB2 for z/OS Infocenter (**Programming for DB2 > Programming for Java > Supported drivers for JDBC and SQLJ**). Obtain the PTFs from DB2 on z/OS support or IBMLINK. Version 3.58 and later are supported.
* Requires APAR PK93123 for DB2 on z/OS V9.1. You can obtain the fix from DB2 on z/OS support or IBMLINK.
* Oracle JDBC Driver Thin (type 4) Oracle JDBC Driver Thick, TAF (type 2) - Supported on Linux operating systems only.

## LDAP servers 
All LDAP Servers that support the LDAP V3 Specification are supported.

|Supported Software|Version|Supported software minimum|Product minimum|Components|Operating System Restrictions?|
|-----------|-----|------------------|-----|------|-------------|
|IBM Security Directory Suite|8.0.1|8.0.1 and later maintenance|9.5|Full|No|

## Product-specific or mixed content 
|Supported Software|Version|Supported software minimum|Product minimum|Components|Operating System Restrictions?|
|-----------|-----|------------------|-----|------|-------------|
|Dojo Toolkit|1.9|1.9|9.5|Full|No|
|IBM License Metric Tool|9.2|9.2 and later maintenance|9.5|Full|No|

## Security management 
|Supported Software|Version|Supported software minimum|Product minimum|Components|Operating System Restrictions?|
|-----------|-----|------------------|-----|------|-------------|
|CA Siteminder|12.0*|12.0 and later maintenance|9.5|Full|No|
|IBM Security Access Manager|9.0|9.0 and later maintenance|9.5|Full|No|
|IBM Security Access Manager for Web|7.0*|7.0 and later maintenance|9.5|Full|No|
|Tivoli Directory Integrator|7.1.1|7.1.1 and later maintenance|9.5|Full|No|

* For AIX customers, AIX 7.1 or higher is required. Please note this product does not support JDK 8.
* Please note IBM Security Access Manager for Web 7.0 does not support JDK 8.

## Web browsers 
|Supported Software|Supported software minimum and later|Product minimum|Components|Operating System Restrictions?|
|-----------|-----|------------------|-----|------|
|Android default browser|Newer levels are tested|9.5|Full|No|
|Apple Safari|Newer levels are tested|9.5|Full|No|
|Google Chrome|Newer levels are tested|9.5|Full|No|
|Microsoft Edge|Newer levels are tested|9.5|Full|No|
|Microsoft Edge Chromium-Based|Newer levels are tested|9.5|Full|Full|
|Microsoft Internet Explorer|Newer levels are tested|9.5|Full|No|
|Mozilla Firefox|Newer levels are tested|9.5|Full|No|
|Mozilla Firefox ESR|Newer levels are tested|9.5|Full|No|

## Web servers (non-container platforms)
|Supported Software|Version|Supported software minimum, and later|Product minimum|Components|Operating System Restrictions?|
|-----------|-----|------------------|-----|------|-------------|
|Apache Server|2.4|2.4|9.5|Full|No|
|HCL Domino|9.0|9.0 and later maintenance|9.5|Full|No|
|IBM HTTP Server|8.5.5 *|8.5.5 and later maintenance|9.5|Full|No|
||9.0|9.0 and later maintenance|9.5|Full|No|
||9.0.5|9.0.5 and later maintenance|9.5|Full|No|
|Microsoft Internet Information Services|10.0|10.0 and later maintenance|9.5|Full|No|

* IBM HTTP Server 8.5.5 is supported only with HCL Digital Experience Server V8.5.5.x.

## WebDAV client 
|Supported Software|Version|Supported software minimum|Product minimum|Components|Operating System Restrictions?|
|-----------|-----|------------------|-----|------|-------------|
|JSCAPE AnyClient|6.0|6.0 and later maintenance|9.5|Full|No|
|SRT WebDrive|2016|2016 and later maintenance|9.5|Full|No|
|davfs2|1.5|1.5 and later maintenance|9.5|Full|No|

