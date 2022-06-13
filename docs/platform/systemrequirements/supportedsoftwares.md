# Software requirements
The supported software section specifies the additional software that HCL Portal Express 9.5 supports.

## DX Kubernetes Support Matrix
View the latest Kubernetes versions and platforms tested and supported for specific HCL Digital Experience 9.5 Container Update deployments.

!!! attention

    Beginning with HCL Digital Experience 9.5 Container Update CF200, HCL has discontinued releasing the HCL Digital Experience (DX) [Operator-based deployments](https://help.hcltechsw.com/digital-experience/9.5/containerization/deploy_container_platforms.html){:target="_blank"} and will provide support only for [Helm-based deployments](../platform/kubernetes/index.md). There will be no further updates or code fixes provided for the Operator-based deployments. HCL requires all customers to migrate to Helm-based deployments for their DX installations. HCL will work with our customers as they transition from Operator-based to Helm-based deployments. For more information on the migration process, see [Migrating from Operator-based to Helm-based](../platform/kubernetes/operator-migration/operator_migration_preparation.md) deployments.

HCL encourages customers to remain up-to-date on the latest DX and Kubernetes releases. As a result, DX will provide all fixes on the latest release. Customers may be asked to upgrade to the latest DX release to assist with problem determination.

### Kubernetes Platform Support Policy

HCL DX 9.5 CF200 and later is architected to run on any Certified Kubernetes platform (https://www.cncf.io/certification/software-conformance), provided that,

- the Kubernetes platform is hosted on x86_64 hardware
- the Kubernetes platform is officially supported by Helm (https://helm.sh/docs/topics/kubernetes_distros/).

Internally, HCL tests DX against a range of Kubernetes platforms that is regularly reviewed and updated, with the intent of staying up-to-date as possible. We do not test with every single platform vendor, but aim to cover a representative sample of popular Kubernetes implementations. See [Table 1](#table-1-tested-kubernetes-platforms-on-full-container-deployment) for the list of Kubernetes Platforms that HCL has tested with.

#### Table 1: Tested Kubernetes Platforms on Full Container Deployment

This table provides information about the sample Kubernetes Platforms that are tested with DX.

|Kubernetes platforms on full deployments|Hybrid deployments (Kubernetes/on Premise)|
|--------------|-----------------|
|- Amazon EKS<br/>- Google GKE<br/>- Microsoft Azure AKS<br/>- Red Hat OpenShift|- Amazon EKS / AWS EC2<br/>- Red Hat OpenShift on AWS / AWS EC2|


Kubernetes Version Support Policy
The list of Kubernetes versions that are tested and supported by HCL are included in [Table 2](#table-2-tested-and-supported-kubernetes-versions-on-full-container-deployment).
- From time-to-time, platform providers may release previews of upcoming Kubernetes versions. We will not provide support for those versions.
- If you encounter any issue on an unsupported or untested Kubernetes version, you may be asked to install a supported level.

#### Table 2: Tested and Supported Kubernetes Versions on Full Container Deployment
This table provides information about the Kubernetes versions that are tested and supported in HCL DX CF releases.

Review your chosen Kubernetes platform and ensure that it supports the following Kubernetes versions:

|CF Level|Kubernetes versions|
|--------------|-----------------|
|CF203| Kubernetes 1.22 __*__ <br/>Kubernetes 1.21<br/>Kubernetes 1.20<br/>Kubernetes 1.19<br/>|
|CF202| Kubernetes 1.21<br/>Kubernetes 1.20<br/>Kubernetes 1.19 <br/>|
|CF201| Kubernetes 1.21<br/>Kubernetes 1.20<br/>Kubernetes 1.19 <br/>|

!!! attention "__*__ CF203 limited support statement"
    Starting with CF203, HCL DX supports Kubernetes 1.22 only for HAProxy-based deployments, and not for deployments that are still running HCL DX's Ambassador.

## Application Servers

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

\* Apache Derby is not supported in a product environment.
\* DB2: Includes support for DB2 pureScale component.

## Development Tools 
|Supported Software|Version|Supported software minimum|Product minimum|Components|Operating System Restrictions?|
|-----------|-----|------------------|-----|------|-------------|
|Rational Application Developer for WebSphere|9.7|9.7 and later maintenance|9.5|Full|No|

## JDBC Drivers 
|Supported Software|Version|Supported software minimum|Product minimum|Components|Operating System Restrictions?|
|-----------|-----|------------------|-----|------|-------------|
|IBM Application Connectivity for DB2 for z/OS Feature|All Versions|Newer levels are not currently supported|9.5|Full|No|
|IBM DB2 Universal JDBC Provider (XA) from DB2 z/OS (type 2)|All Versions * and future fix packs|Newer levels are not currently supported|9.5|Full|No|
|IBM DB2 Universal JDBC Provider (XA) from DB2 z/OS (type 4)|All Versions*	Newer levels are not currently supported|9.5|Full|No|
|IBM Data Server Driver for JDBC and SQLJ|4.21 (11.1)|4.21 (11.1) only|9.5|Full|No|
|Microsoft SQL Server JDBC Driver|4.2|4.2 and later maintenance|9.5|Full|No|
||6.2|6.2 and later maintenance|9.5|Full|No|
|Oracle JDBC Driver 12.c|12.2**|12.2 and later maintenance|9.5|Full|No|

* JDBC drivers are shipped as DB2 for z/OS APARs. You can check for the appropriate APAR/PTF numbers in the DB2 for z/OS Infocenter, 'Programming for DB2 > Programming for Java > Supported drivers for JDBC and SQLJ'. Obtain the PTFs from DB2 on z/OS support or IBMLINK. Version 3.58 and later are supported.
* Requires APAR PK93123 for DB2 on z/OS V9.1. You can obtain the fix from DB2 on z/OS support or IBMLINK.
** Oracle JDBC Driver Thin (type 4) Oracle JDBC Driver Thick, TAF (type 2) - Supported on Linux operating systems only.

## LDAP Servers 
All LDAP Servers that support the LDAP V3 Specification are supported.

|Supported Software|Version|Supported software minimum|Product minimum|Components|Operating System Restrictions?|
|-----------|-----|------------------|-----|------|-------------|
|IBM Security Directory Suite|8.0.1|8.0.1 and later maintenance|9.5|Full|No|

## Product Specific or Mixed Content 
|Supported Software|Version|Supported software minimum|Product minimum|Components|Operating System Restrictions?|
|-----------|-----|------------------|-----|------|-------------|
|Dojo Toolkit|1.9|1.9|9.5|Full|No|
|IBM License Metric Tool|9.2|9.2 and later maintenance|9.5|Full|No|

## Security Management 
|Supported Software|Version|Supported software minimum|Product minimum|Components|Operating System Restrictions?|
|-----------|-----|------------------|-----|------|-------------|
|CA Siteminder|12.0*|12.0 and later maintenance|9.5|Full|No|
|IBM Security Access Manager|9.0|9.0 and later maintenance|9.5|Full|No|
|IBM Security Access Manager for Web|7.0*|7.0 and later maintenance|9.5|Full|No|
|Tivoli Directory Integrator|7.1.1|7.1.1 and later maintenance|9.5|Full|No|

* For AIX customers, AIX 7.1 or higher is required. Please note this product does not support JDK 8.
* Please note IBM Security Access Manager for Web 7.0 does not support JDK 8.

## Web Browsers 
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

## Web Servers (Non-Container Platforms)
|Supported Software|Version|Supported software minimum, and later|Product minimum|Components|Operating System Restrictions?|
|-----------|-----|------------------|-----|------|-------------|
|Apache Server|2.4|2.4|9.5|Full|No|
|HCL Domino|9.0|9.0 and later maintenance|9.5|Full|No|
|IBM HTTP Server|8.5.5 *|8.5.5 and later maintenance|9.5|Full|No|
||9.0|9.0 and later maintenance|9.5|Full|No|
||9.0.5|9.0.5 and later maintenance|9.5|Full|No|
|Microsoft Internet Information Services|10.0|10.0 and later maintenance|9.5|Full|No|

* IBM HTTP Server 8.5.5 is only supported with HCL Digital Experience Server V8.5.5.x.

## WebDAV Client 
|Supported Software|Version|Supported software minimum|Product minimum|Components|Operating System Restrictions?|
|-----------|-----|------------------|-----|------|-------------|
|JSCAPE AnyClient|6.0|6.0 and later maintenance|9.5|Full|No|
|SRT WebDrive|2016|2016 and later maintenance|9.5|Full|No|
|davfs2|1.5|1.5 and later maintenance|9.5|Full|No|

