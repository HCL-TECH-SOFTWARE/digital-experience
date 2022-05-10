# HCL Digital Experience 9.5 for Express Detailed System Requirements

## Applies to
This document provides minimum system requirements for version [9.5] release of [HCL Digital Experience for Express 9.5]. Higher maintenance levels, such as fix packs and service packs, may be supported as they become available and will be updated in this document, and some may be made available through HCL channels For detailed system requirements for other [HCL Digital Experience] releases, see: [System Requirements | HCL Digital Experience]. Detailed system requirements are the complete lists of hardware requirements, supported operating systems, prerequisites and optional supported software, with component-level details and operating system restrictions.

## System Requirements
Operating Systems
Hypervisors
Prerequisites
Supported Software
DX Kubernetes Support Matrix
Collaboration
Databases
Development Tools
JDBC Drivers
LDAP Server
Product Specific or Mixed Content
Security Management
Web Browsers
Web Servers
WebDAV Client
Hardware
Packaging List
Glossary
Disclaimer

### Operating Systems
The operating systems section specifies the operating systems that HCL Digital Experience for Portal Express 9.5 supports, and is organized by the operating system family. Operating system families include Linux and Windows.

Component support: Full / Partial / None

#### Linux family
|OS|OS Minimum|OS Supported Versions|Hardware|Bitness|Product Minimum|Components|
|-------|-------|-------|-------|-------|-------|-------|
|Red Hat Enterprise Linux (RHEL) Server 7	|Base	|Base and later maintenance	|IBM Z Systems	|64-Exploit, 64-Tolerate	|9.5	|Full|
|Red Hat Enterprise Linux (RHEL) 7	|7.1	|7.1 and later maintenance	|Power System – Little Endian	|64-Exploit, 64-Tolerate	|9.5	|Full|
|Red Hat Enterprise Linux (RHEL) 7	|7.1	|7.1 and later maintenance	|x86-64	|64-Exploit, 64-Tolerate	|9.5	|Full|
|SUSE Linux Enterprise Server (SLES) 11	|Base	|Base and later maintenance	|x86-64 IBM z Systems	|64-Exploit, 64-Tolerate	|9.5	|Full|
|SUSE Linux Enterprise Server (SLES) 12	|Base	|Base and later maintenance	|x86-64 IBM z Systems	|64-Exploit, 64-Tolerate	|9.5	|Full|
|SUSE Linux Enterprise Server (SLES) 15	|Base	|Base and later maintenance	|x86-64	|64-Tolerate	|9.5	|Full|
|Ubuntu 16.04 LTS	|Base	|Base and later maintenance	|Power System – Little Endian	|64-Exploit, 64-Tolerate	|9.5	|Full|
|Ubuntu 16.04 LTS	|Base	|Base and later maintenance	|x86-64	|64-Exploit, 64-Tolerate	|9.5	|Full|
|Ubuntu 18.04 LTS	|Base	|Base and later maintenance	|Power System – Little Endian	|64-Exploit, 64-Tolerate	|9.5	|Full|
|Ubuntu 18.04 LTS	|Base	|Base and later maintenance	|x86-64	|64-Exploit, 64-Tolerate	|9.5	|Full|
|Ubuntu 20.04 LTS	|Base	|Base and later maintenance	|Power System – Little Endian	|64-Exploit, 64-Tolerate	|9.5	|Full|
|Ubuntu 20.04 LTS	|Base	|Base and later maintenance	|x86-64|	64-Exploit, 64-Tolerate|	9.5	|Full|

Go to top

#### Windows family

!!! note

	As of Cumulative Fix 09 – Windows Server 2008 is no longer being supported. The operating system went out of mainstream support in January 2015.

|OS|OS|Minimum	OS|Supported Versions|Hardware|Bitness|Product Minimum|Components|
|---------|---------|---------|---------|---------|---------|---------|---------|
|Windows 8.1 Enterprise	|Base*|Base and later maintenance|x86-64|64-Exploit, 64-Tolerate|9.5|Full|
|Windows 10 Enterprise|Base*|Base and later maintenance|x86-64|	64-Exploit, 64-Tolerate|9.5|Full|
Windows 10 Pro|Base*|Base and later maintenance|x86-64|64-Exploit, 64-Tolerate|9.5|Full|
|Windows 8.1 Professional|Base*|Base and later maintenance|x86-64|64-Exploit, 64-Tolerate|9.5|Full|
|Windows 8.1 Standard|Base*|Base and later maintenance|x86-64|64-Exploit, 64-Tolerate|9.5|Full|
|Windows Server 2012 Datacenter Edition|Base|Base and later maintenance|x86-64|64-Exploit, 64-Tolerate|9.5|Full|
|Windows Server 2012 R2 Datacenter Edition|Base|Base and later maintenance|x86-64|64-Exploit, 64-Tolerate|9.5|Full|
|Windows Server 2012 Standard Edition|Base|Base and later maintenance|x86-64|64-Exploit, 64-Tolerate|9.5|Full|
|Windows Server 2012 R2 Standard Edition|Base|Base and later maintenance|x86-64|64-Exploit, 64-Tolerate|9.5|Full|
|Windows Server 2016 Datacenter Edition|Base|Base and later maintenance|x86-64|64-Exploit, 64-Tolerate|9.5|Full|
|Windows Server 2016 Essentials Edition|Base|Base and later maintenance|x86-64|64-Exploit, 64-Tolerate|9.5|Full|
|Windows Server 2016 Standard Edition|Base|Base and later maintenance|x86-64|64-Exploit, 64-Tolerate|9.5|Full|
|Windows Server 2019 Datacenter Edition|Base|Base and later maintenance|x86-64|64-Exploit, 64-Tolerate|9.5|Full|
|Windows Server 2019 Essential Edition|Base|Base and later maintenance|x86-64|64-Exploit, 64-Tolerate|9.5|Full|
|Windows Server 2022|Base|Base and later maintenance|x86-64|64-Exploit, 64-Tolerate|9.5 CF199|Full|

*Support for developer platform only
Go to top

### Hypervisors
The Hypervisors section specifies the hypervisors that HCL Portal Express 9.5 supports.
Linux Summary
Hypervisor	Product Minimum	Components	Deployment Units	Supported Guest Operating System

IBM PR/SM any version
9.5
Full
Server
 	•	SUSE Linux Enterprise Server (SLES) 11 IBM zSystems

IBM PowerVM Hypervisor (LPAR, DPAR, Micro-Partition) any supported version
9.5
Full
Server
 	All supported operating systems:
•	SUSE Linux Enterprise Server (SLES) 11 IBM z Systems
•	Red Hat Enterprise Linux (RHEL) Server 7 x86-64
•	SUSE Linux Enterprise Server (SLES) 12 IBM z Systems
•	Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems
•	Ubuntu 16.04 LTS x86-64
•	Ubuntu 16.04 LTS POWER System - Little Endian
•	Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian


KVM in SUSE Linux Enterprise Server (SLES) 11 and later
9.5
Full
Server	All supported operating systems:
•	SUSE Linux Enterprise Server (SLES) 11 IBM z Systems
•	Red Hat Enterprise Linux (RHEL) Server 7 x86-64
•	SUSE Linux Enterprise Server (SLES) 12 IBM z Systems
•	Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems
•	Ubuntu 16.04 LTS x86-64
•	Ubuntu 16.04 LTS POWER System - Little Endian
•	Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian


Red Hat KVM as delivered with Red Hat Enterprise Linux (RHEL) and its RHEV equivalent 7.0
9.5
Full
Server	All supported operating systems:
•	SUSE Linux Enterprise Server (SLES) 11 IBM z Systems
•	Red Hat Enterprise Linux (RHEL) Server 7 x86-64
•	SUSE Linux Enterprise Server (SLES) 12 IBM z Systems
•	Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems
•	Ubuntu 16.04 LTS x86-64
•	Ubuntu 16.04 LTS POWER System - Little Endian
•	Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian


VMware ESXi 5.0
9.5
Full
Server	All supported operating systems:
•	SUSE Linux Enterprise Server (SLES) 11 IBM z Systems
•	Red Hat Enterprise Linux (RHEL) Server 7 x86-64
•	SUSE Linux Enterprise Server (SLES) 12 IBM z Systems
•	Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems
•	Ubuntu 16.04 LTS x86-64
•	Ubuntu 16.04 LTS POWER System - Little Endian
•	Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian


VMware ESXi 5.5 and later
9.5
Full
Server	All supported operating systems:
•	SUSE Linux Enterprise Server (SLES) 11 IBM z Systems
•	Red Hat Enterprise Linux (RHEL) Server 7 x86-64
•	SUSE Linux Enterprise Server (SLES) 12 IBM z Systems
•	Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems
•	Ubuntu 16.04 LTS x86-64
•	Ubuntu 16.04 LTS POWER System - Little Endian
•	Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian


VMware ESXi 6.0 and later
9.5
Full
Server	All supported operating systems:
•	SUSE Linux Enterprise Server (SLES) 11 IBM z Systems
•	Red Hat Enterprise Linux (RHEL) Server 7 x86-64
•	SUSE Linux Enterprise Server (SLES) 12 IBM z Systems
•	Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems
•	Ubuntu 16.04 LTS x86-64
•	Ubuntu 16.04 LTS POWER System - Little Endian
•	Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian


VMware ESXi 6.1 and later
9.5
Full
Server	All supported operating systems:
•	SUSE Linux Enterprise Server (SLES) 11 IBM z Systems
•	Red Hat Enterprise Linux (RHEL) Server 7 x86-64
•	SUSE Linux Enterprise Server (SLES) 12 IBM z Systems
•	Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems
•	Ubuntu 16.04 LTS x86-64
•	Ubuntu 16.04 LTS POWER System - Little Endian
•	Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian

VMware ESXi 6.5 and later
9.5
Full
Server	All supported operating systems:
•	SUSE Linux Enterprise Server (SLES) 11 IBM z Systems
•	Red Hat Enterprise Linux (RHEL) Server 7 x86-64
•	SUSE Linux Enterprise Server (SLES) 12 IBM z Systems
•	Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems
•	Ubuntu 16.04 LTS x86-64
•	Ubuntu 16.04 LTS POWER System - Little Endian
•	Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian

z/VM 6.1 and later
9.5
Full
Server	All supported operating systems:
•	SUSE Linux Enterprise Server (SLES) 11 IBM z Systems
•	Red Hat Enterprise Linux (RHEL) Server 7 x86-64
•	SUSE Linux Enterprise Server (SLES) 12 IBM z Systems
•	Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems
•	Ubuntu 16.04 LTS x86-64
•	Ubuntu 16.04 LTS POWER System - Little Endian
•	Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian

z/VM 6.2 and later
9.5
Full
Server	All supported operating systems:
•	SUSE Linux Enterprise Server (SLES) 11 IBM z Systems
•	Red Hat Enterprise Linux (RHEL) Server 7 x86-64
•	SUSE Linux Enterprise Server (SLES) 12 IBM z Systems
•	Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems
•	Ubuntu 16.04 LTS x86-64
•	Ubuntu 16.04 LTS POWER System - Little Endian
•	Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian

z/VM 6.3 and later
9.5
Full
Server	All supported operating systems:
•	SUSE Linux Enterprise Server (SLES) 11 IBM z Systems
•	Red Hat Enterprise Linux (RHEL) Server 7 x86-64
•	SUSE Linux Enterprise Server (SLES) 12 IBM z Systems
•	Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems
•	Ubuntu 16.04 LTS x86-64
•	Ubuntu 16.04 LTS POWER System - Little Endian
•	Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian
Go to top
Windows Summary
Hypervisor	Product Minimum	Components	Deployment Units	Supported Guest Operating System

KVM in SUSE Linux Enterprise Server (SLES) 11 and later
9.5
Full
Server	All supported operating systems:
•	Windows Server 2012 Datacenter Edition x86-64
•	Windows Server 2012 Standard Edition x86-64
•	Windows 8.1 Enterprise x86-64
•	Windows 8.1 Professional x86-64
•	Windows 8.1 Standard x86-64
•	Windows Server 2012 R2 Datacenter Edition x86-64
•	Windows Server 2012 R2 Standard Edition x86-64
•	Windows 10 Pro x86-64
•	Windows 10 Enterprise x86-64
•	Windows Server 2016 Datacenter Edition x86-64
•	Windows Server 2016 Standard Edition x86-64
•	Windows Server 2016 Essentials Edition x86-64
•	Windows Server 2019 Datacenter Edition x86-64
•	Windows Server 2019 Datacenter Edition x86-64
•	Windows Server 2019 Essentials Edition x86-64


Red Hat KVM as delivered with Red Hat Enterprise Linux (RHEL) and it’s RHEV equivalent 7.0
9.5
Full
Server	All supported operating systems
•	Windows Server 2012 Datacenter Edition x86-64
•	Windows Server 2012 Standard Edition x86-64
•	Windows 8.1 Enterprise x86-64
•	Windows 8.1 Professional x86-64
•	Windows 8.1 Standard x86-64
•	Windows Server 2012 R2 Datacenter Edition x86-64
•	Windows Server 2012 R2 Standard Edition x86-64
•	Windows 10 Pro x86-64
•	Windows 10 Enterprise x86-64
•	Windows Server 2016 Datacenter Edition x86-64
•	Windows Server 2016 Standard Edition x86-64
•	Windows Server 2016 Essentials Edition x86-64
•	Windows Server 2019 Datacenter Edition x86-64
•	Windows Server 2019 Datacenter Edition x86-64
•	Windows Server 2019 Essentials Edition x86-64


VMware ESXi 5.0 and later
9.5
Full
Server	All supported operating systems:
•	Windows Server 2012 Datacenter Edition x86-64
•	Windows Server 2012 Standard Edition x86-64
•	Windows 8.1 Enterprise x86-64
•	Windows 8.1 Professional x86-64
•	Windows 8.1 Standard x86-64
•	Windows Server 2012 R2 Datacenter Edition x86-64
•	Windows Server 2012 R2 Standard Edition x86-64
•	Windows 10 Pro x86-64
•	Windows 10 Enterprise x86-64
•	Windows Server 2016 Datacenter Edition x86-64
•	Windows Server 2016 Standard Edition x86-64
•	Windows Server 2016 Essentials Edition x86-64
•	Windows Server 2019 Datacenter Edition x86-64
•	Windows Server 2019 Datacenter Edition x86-64
•	Windows Server 2019 Essentials Edition x86-64


VMware ESXi 5.5 and later
9.5
Full
Server	All supported operating systems:
•	Windows Server 2012 Datacenter Edition x86-64
•	Windows Server 2012 Standard Edition x86-64
•	Windows 8.1 Enterprise x86-64
•	Windows 8.1 Professional x86-64
•	Windows 8.1 Standard x86-64
•	Windows Server 2012 R2 Datacenter Edition x86-64
•	Windows Server 2012 R2 Standard Edition x86-64
•	Windows 10 Pro x86-64
•	Windows 10 Enterprise x86-64
•	Windows Server 2016 Datacenter Edition x86-64
•	Windows Server 2016 Standard Edition x86-64
•	Windows Server 2016 Essentials Edition x86-64
•	Windows Server 2019 Datacenter Edition x86-64
•	Windows Server 2019 Datacenter Edition x86-64
•	Windows Server 2019 Essentials Edition x86-64

VMware ESXi 6.0 and later
9.5
Full
Server	All supported operating systems:
•	Windows Server 2012 Datacenter Edition x86-64
•	Windows Server 2012 Standard Edition x86-64
•	Windows 8.1 Enterprise x86-64
•	Windows 8.1 Professional x86-64
•	Windows 8.1 Standard x86-64
•	Windows Server 2012 R2 Datacenter Edition x86-64
•	Windows Server 2012 R2 Standard Edition x86-64
•	Windows 10 Pro x86-64
•	Windows 10 Enterprise x86-64
•	Windows Server 2016 Datacenter Edition x86-64
•	Windows Server 2016 Standard Edition x86-64
•	Windows Server 2016 Essentials Edition x86-64
•	Windows Server 2019 Datacenter Edition x86-64
•	Windows Server 2019 Datacenter Edition x86-64
•	Windows Server 2019 Essentials Edition x86-64


VMware ESXi 6.1 and later
9.5
Full
Server	All supported operating systems:
•	Windows Server 2012 Datacenter Edition x86-64
•	Windows Server 2012 Standard Edition x86-64
•	Windows 8.1 Enterprise x86-64
•	Windows 8.1 Professional x86-64
•	Windows 8.1 Standard x86-64
•	Windows Server 2012 R2 Datacenter Edition x86-64
•	Windows Server 2012 R2 Standard Edition x86-64
•	Windows 10 Pro x86-64
•	Windows 10 Enterprise x86-64
•	Windows Server 2016 Datacenter Edition x86-64
•	Windows Server 2016 Standard Edition x86-64
•	Windows Server 2016 Essentials Edition x86-64
•	Windows Server 2019 Datacenter Edition x86-64
•	Windows Server 2019 Datacenter Edition x86-64
•	Windows Server 2019 Essentials Edition x86-64


VMware ESXi 6.5 and later
9.5
Full
Server	All supported operating systems:
•	Windows Server 2012 Datacenter Edition x86-64
•	Windows Server 2012 Standard Edition x86-64
•	Windows 8.1 Enterprise x86-64
•	Windows 8.1 Professional x86-64
•	Windows 8.1 Standard x86-64
•	Windows Server 2012 R2 Datacenter Edition x86-64
•	Windows Server 2012 R2 Standard Edition x86-64
•	Windows 10 Pro x86-64
•	Windows 10 Enterprise x86-64
•	Windows Server 2016 Datacenter Edition x86-64
•	Windows Server 2016 Standard Edition x86-64
•	Windows Server 2016 Essentials Edition x86-64
•	Windows Server 2019 Datacenter Edition x86-64
•	Windows Server 2019 Standard Edition x86-64
•	Windows Server 2019 Essentials Edition x86-64

Go to top
### Prerequisites
The Prerequisites section specifies the capabilities that HCL Portal Express 9.5 requires and the prerequisite products that can be used to fulfill those capabilities.
Application Servers - Summary
WebSphere Application Server
Prerequisite	Version	Prerequisite minimum, and Supported versions	Product Minimum	Components	Operating system restrictions?
WebSphere Application Server	8.5.5	8.5.5.12 and later maintenance	9.5	Full	No
 	9.0	9.0.0.2 and later maintenance	9.5	Full	No
 	9.0.5	9.0.5 and later maintenance	9.5	Full	No
Go to top
Installation Summary
IBM Installation Manager
Prerequisite	Version	IM Prerequisite minimum, and Supported Versions	Product Minimum	Components	Deployment unit	Operating system restrictions?
IBM Installation Manager
1.8.5
1.8.5 and later maintenance
9.5
Full	WebSphere Application Server
No
Go to top
Java SDK - Summary
HCL Portal Extend v8.5 requires JDK 7.0 for installation. JDK 7.1 can be added and configured for use after the initial installation with Cumulative Fix 05 or higher.
Prerequisite
Version
Prerequisite minimum, and Supported versions	Product Minimum	Components	Operating system restrictions?
IBM Runtime Environment, Java Technology Edition	7.0	7.0 and later maintenance	9.5	Full	No
 	7.1	7.1 and later maintenance	9.5	Full	No
 	8.0	8.0 and later maintenance	9.5	Full	No
Go to top
### Supported Software
The supported software section specifies the additional software that HCL Portal Express 9.5 supports.
Application Servers - Summary

Prerequisite
Version
Supported software versions	Product Minimum
Components	Operating system restrictions?
WebSphere eXtreme Scale	8.6	8.6 and later maintenance	9.5	Full	No
Go to top
### DX Kubernetes Support Matrix
View the latest Kubernetes versions and platforms tested and supported for specific HCL Digital Experience 9.5 Container Update deployments.
Attention: Beginning with HCL Digital Experience 9.5 Container Update CF200, HCL has discontinued releasing the HCL Digital Experience (DX) Operator-based deployments and will provide support only for Helm-based deployments. There will be no further updates or code fixes provided for the Operator-based deployments. HCL requires all customers to migrate to Helm-based deployments for their DX installations. HCL will work with our customers as they transition from Operator-based to Helm-based deployments. For more information on the migration process, see Migrating from Operator-based to Helm-based deployments.
HCL encourages customers to remain up-to-date on the latest DX and Kubernetes releases. As a result, DX will provide all fixes on the latest release. Customers may be asked to upgrade to the latest DX release to assist with problem determination.
Kubernetes Platform Support Policy
•	HCL DX 9.5 CF200 and later is architected to run on any Certified Kubernetes platform (https://www.cncf.io/certification/software-conformance), provided that,

o	the Kubernetes platform is hosted on x86_64 hardware
o	the Kubernetes platform is officially supported by Helm (https://helm.sh/docs/topics/kubernetes_distros/).

•	Internally, HCL tests DX against a range of Kubernetes platforms that is regularly reviewed and updated, with the intent of staying up-to-date as possible. We do not test with every single platform vendor, but aim to cover a representative sample of popular Kubernetes implementations. See Table 1 for the list of Kubernetes Platforms that HCL has tested with.

Table 1: Tested Kubernetes Platforms on Full Container Deployment
This table provides information about the sample Kubernetes Platforms that are tested with DX.\
Kubernetes platforms on full deployments	  Kubernetes platforms on Hybrid deployments
•	Amazon EKS
•	Google GKE
•	Microsoft Azure AKS
•	Red Hat OpenShift	•	Amazon EKS / AWS EC2
•	Red Hat OpenShift on AWS / AWS EC2
Kubernetes Version Support Policy
•	The list of Kubernetes versions that are tested and supported by HCL are included in Table 2.
•	From time-to-time, platform providers may release previews of upcoming Kubernetes versions. We will not provide support for those versions.
•	If you encounter any issue on an unsupported or untested Kubernetes version, you may be asked to install a supported level.

Table 2: Tested and Supported Kubernetes Versions on Full Container Deployment
The table below provides information about the Kubernetes versions that are tested and supported in DX CF releases.
Note: Review your chosen Kubernetes Platform and ensure that it supports the following Kubernetes Versions:

CF level	Kubernetes Version
CF203	•	Kube 1.21
•	Kube 1.20
•	Kube 1.19
CF202	•	Kube 1.21
•	Kube 1.20
•	Kube 1.19
CF201	•	Kube 1.21
•	Kube 1.20
•	Kube 1.19
Go to top
### Collaboration - Summary
Prerequisite	Version	Supported software versions	Product Minimum	Components	Operating system restrictions?
HCL Connections	5.5	5.5 and later maintenance	9.5	Full	No
HCL Connections	6.0	6.0 and later maintenance	9.5	Full	No
IBM Forms Experience Builder	8.6.3	8.6.3 and later maintenance	9.5	Full	No
HCL Leap	9.2	9.2 and later maintenance	9.5	Full	No
HCL Sametime Communicate	9.0	9.0 and later maintenance	9.5	Full	No
HCL Sametime Complete	9.0	9.0 and later maintenance	9.5	Full	No
Go to top
### Database - Summary
Supported Software	Version	Supported software minimum	Product minimum	Components	Operating System Restrictions?
Apache Derby	10.11* and future fix packs	10.11*

Newer levels are not currently supported.



9.5



Full

No
DB2 Standard and Advanced Edition	11.5	11.5 and later maintenance	9.5	Full	No
DB2 Advanced Enterprise Server Edition	11.1.0*	11.1.0 and later maintenance	9.5	Full	No
DB2 Advanced Workgroup Server Edition	11.1.0*	11.1.0 and later maintenance
9.5	Full
No
DB2 Connect Application Server Advanced Edition	11.1.0	11.1.0 and later maintenance
9.5	Full
No
DB2 Connect Enterprise Edition	11.1.0	11.1.0 and later maintenance	9.5	Full	No
DB2 Enterprise Server Edition	11.1.0	11.1.0 and later maintenance	9.5	Full	No
DB2 Express Edition	11.1.0	11.1.0 and later maintenance	9.5	Full	No
DB2 for z/OS	11.1.0	11.1.0 and later maintenance	9.5	Full	No
Microsoft SQL Server	2014 	2014 and later maintenance	9.5	Full	No
 	2016 	2016 and later maintenance	9.5	Full	No
Microsoft SQL Server Enterprise and Standard Edition	2017 and 2019 	2017, 2019
and later maintenance	9.5	Full	No
Oracle Database 12.2 Standard Edition	(12.2.0.0)	(12.2.0.0) and later maintenance	9.5	Full	No
Oracle Database 12.2 Enterprise Edition	(12.2.0.0)	(12.2.0.0) and later maintenance	9.5	Full	No
Oracle Database 12.2.0.1.0 Enterprise Edition	12.2.0.1.0 	12.2.0.1.0 and later maintenance	9.5	Full	No
Oracle Database 12.2.0.2 Enterprise Edition	12.2.0.2	12.2.0.2 and later maintenance	9.5	Full	No
Oracle Database 19c	19c	19c and later maintenance	9.5	Full	No
Oracle on Amazon Relational Database Service	12.2.0.1.0 	12.2.0.1.0 and later maintenance	9.5	Full	No
* Apache Derby is not supported in a product environment.
* DB2: Includes support for DB2 pureScale component.
Go to top
### Development Tools - Summary
Supported Software	Version	Supported software minimum	Product minimum	Components	Operating System Restrictions?
Rational Application Developer for WebSphere	9.7	9.7 and later maintenance	9.5	Full	No
Go to top

### JDBC Drivers - Summary
Supported Software	Version	Supported software minimum	Product minimum	Components	Operating System Restrictions?
IBM Application Connectivity for DB2 for z/OS Feature	All Versions
Newer levels are not currently supported.	9.5	Full	No
IBM DB2 Universal JDBC Provider (XA) from DB2 z/OS (type 2)	All Versions * and future fix packs
Newer levels are not currently supported.	9.5	Full	No
IBM DB2 Universal JDBC Provider (XA) from DB2 z/OS (type 4)	All Versions*	Newer levels are not currently supported.	9.5	Full	No
IBM Data Server Driver for JDBC and SQLJ	4.21 (11.1)	4.21 (11.1) only	9.5	Full	No
Microsoft SQL Server JDBC Driver	4.2 	4.2 and later maintenance
 	9.5	Full	No
 	6.2 	6.2 and later maintenance	9.5	Full	No
Oracle JDBC Driver 12.c	12.2** 	12.2 and later maintenance	9.5	Full	No
* JDBC drivers are shipped as DB2 for z/OS APARs. You can check for the appropriate APAR/PTF numbers in the DB2 for z/OS Infocenter, 'Programming for DB2 > Programming for Java > Supported drivers for JDBC and SQLJ'. Obtain the PTFs from DB2 on z/OS support or IBMLINK. Version 3.58 and later are supported.
* Requires APAR PK93123 for DB2 on z/OS V9.1. You can obtain the fix from DB2 on z/OS support or IBMLINK.
** Oracle JDBC Driver Thin (type 4) Oracle JDBC Driver Thick, TAF (type 2) - Supported on Linux operating systems only.
Go to top
### LDAP Servers - Summary
All LDAP Servers that support the LDAP V3 Specification are supported.
Supported Software	Version	Supported software minimum	Product minimum	Components	Operating System Restrictions?
IBM Security Directory Suite	8.0.1	8.0.1 and later maintenance	9.5	Full
No
Go to top
### Product Specific or Mixed Content - Summary
Supported Software	Version	Supported software minimum	Product minimum	Components	Operating System Restrictions?
Dojo Toolkit	1.9	1.9
9.5	Full
No


IBM License Metric Tool	9.2	9.2 and later maintenance	9.5	Full	No
Go to top
### Security Management - Summary
Supported Software	Version	Supported software minimum	Product minimum	Components	Operating System Restrictions?
CA Siteminder	12.0*
12.0 and later maintenance

9.5	Full
No
IBM Security Access Manager	9.0	9.0 and later maintenance	9.5	Full	No
IBM Security Access Manager for Web	7.0*	7.0 and later maintenance	9.5	Full	No
Tivoli Directory Integrator	7.1.1	7.1.1 and later maintenance	9.5	Full	No
* For AIX customers, AIX 7.1 or higher is required. Please note this product does not support JDK 8.
* Please note IBM Security Access Manager for Web 7.0 does not support JDK 8.
Go to top
### Web Browsers - Summary
Supported Software	Supported software minimum, and later	Product minimum	Components	Operating System Restrictions?
Android default browser	Newer levels are tested.	9.5	Full	No
Apple Safari	Newer levels are tested.	9.5	Full	No
Google Chrome	Newer levels are tested.	9.5	Full	No
Microsoft Edge	Newer levels are tested.	9.5	Full	No
Microsoft Edge Chromium-Based	Newer levels are tested.	9.5	Full	Full
Microsoft Internet Explorer	Newer levels are tested.	9.5	Full	No
Mozilla Firefox	Newer levels are tested.	9.5	Full	No
Mozilla Firefox ESR	Newer levels are tested.	9.5	Full	No
Go to top
### Web Servers - Summary (Non-Container Platforms)
Supported Software	Version	Supported software minimum, and later	Product minimum	Components	Operating System Restrictions?
Apache Server	2.4  	2.4	9.5	Full	No
HCL Domino	9.0	9.0 and later maintenance	9.5	Full	No
IBM HTTP Server	8.5.5 *	8.5.5 and later maintenance	9.5	Full	No
 	9.0	9.0 and later maintenance	9.5	Full	No
 	9.0.5	9.0.5 and later maintenance	9.5	Full	No
Microsoft Internet Information Services	10.0 	10.0 and later maintenance	9.5	Full	No
* IBM HTTP Server 8.5.5 is only supported with HCL Digital Experience Server V8.5.5.x.
Go to top
### WebDAV Client - Summary
Supported Software	Version	Supported software minimum	Product minimum	Components	Operating System Restrictions?
JSCAPE AnyClient	6.0	6.0 and later maintenance	9.5	Full	No
SRT WebDrive	2016	2016 and later maintenance	9.5	Full	No
davfs2	1.5	1.5 and later maintenance	9.5	Full	No
Go to top
### Hardware
HCL Portal Express requires the following hardware, organized by type of hardware, deployment units or components.
Installable software - Linux
Hardware	Deployment units	Requirement	Applicable operating systems
Disk Space	Server	Minimum 3 GB free disk space for installation of DX Portal
Minimum 2 GB free disk space for installation of WebSphere Application Server
Minimum 3 GB free disk space for installation of IBM Installation Manager and the Installation Manager shared directory
Minimum 8 GB total free disk space recommended for installation	All supported Linux operating systems
Memory	Server	Physical memory requirements and recommendations for DX Portal or HCL Web Content Manager (or WCM):
Under minimal load, DX Portal can function with 4GB of RAM and a remote database. In a production environment, 8GB is an optimal starting point for RAM. Production environments and environments featuring multiple profiles will require
more memory. Note: The amount of memory assigned to the
*INTERACT pool should be set at a minimum of well over 1 GB and a maximum of 100%. If the *INTERACT pool cannot be given enough memory, then the database tasks have to be started with SBMJOB so that they run in the *BASE pool. 	All supported Linux operating systems
Other Hardware	Server	Minimum 2 CPUs required for installations of DX Portal and HCL WCM	All supported Linux operating systems
Processor	Server	X86-64 IBM POWER Family of processors
System z Processors	All supported Linux operating systems
 	Server	Minimum 2 CPUs for installation of Portal or WCM	All supported Linux operating systems
Go to top
Installable software - Windows
Hardware	Deployment units	Requirement	Applicable operating systems
Disk Space	Server	Minimum 3 GB free disk space for installation of DX Portal
Minimum 2 GB free disk space for installation of WebSphere Application Server
Minimum 3 GB free disk space for installation of IBM Installation Manager and the Installation Manager shared directory
Minimum 8 GB total free disk space recommended for installation	All supported Windows operating systems
Memory	Server	Physical memory requirements and recommendations for DX Portal or HCL Web Content Manager (or WCM):
Under minimal load, DX Portal can function with 4GB of RAM and a remote database. In a production environment, 8GB is an optimal starting point for RAM. Production environments and environments featuring multiple profiles will require
more memory. Note: The amount of memory assigned to the
*INTERACT pool should be set at a minimum of well over 1 GB and a maximum of 100%. If the *INTERACT pool cannot be given enough memory, then the database tasks have to be started with SBMJOB so that they run in the *BASE pool.	All supported Windows operating systems
Other Hardware	Server	Minimum 2 CPUs required for installations of DX Portal and HCL WCM	All supported Windows operating systems
Processor	Server	X86-64 IBM POWER Family of processors
System z Processors	All supported Windows operating systems
 	Server	Minimum 2 CPUs for installation of Portal or WCM	All supported Windows operating systems
Go to top
Installable software - Docker *
* Note: HCL Digital Experience 9.5 image deployments to Docker are supported for development, and not production operations.
Hardware	Deployment units	Requirement	Applicable operating systems
Disk Space	Server	Minimum 40 GB for Volume size of HCL DX 9.5 and higher Docker image deployment 	Docker 1.13 and higher
Memory	Server	Physical memory requirements and recommendations for DX 9.5 and higher Docker image deployment
7GB of RAM set as default, can be modified.
CPU	Server	2 CPUs requested for installations of DX 9.5 Docker image
Go to top
### Packaging list
HCL Portal Express 9.5 includes the following products.
Product name	Capability	Applicable Operating System Families
DB2 Advanced Workgroup Server Edition 11.1.0	Databases	 Linux, Windows
DB2 Standard Edition 11.5	Databases	 Linux, Windows
WebSphere Application Server Network Deployment 9.0.5	Application Servers	Linux, Windows
Go to top
### Glossary
Bitness	Compatibility of the product with the bit version support that is provided by an operating system. Different parts of a product might run on the same operating system but support different application bitness. For example, one part of the product might run only in 32-bit mode, whereas another might support 64-bit tolerate mode.
31: The product or part of the product runs as a 31-bit application in a 31-bit operating environment.
32: The product or part of the product runs as a 32-bit application in a 32-bit operating environment.
64-tolerate: The product or part of the product runs as a 32-bit application in a 64-bit operating environment.
64-exploit: The product or part of the product runs natively as a 64-bit application in a 64-bit operating environment.
Co-packaged	Additional products that are included in the product package
Co-installed	Additional products that are included in the product package and installed when the product is installed.
Deployment unit	Deployment Structure identifies pieces of a product that can be independently deployed onto one or more machines in a distributed infrastructure.
•	The top level of the deployment structure consists of one or more deployment units. There are four possible deployment units that a product might support: Desktop, Server, Agent or client, Mobile.
•	Deployment units may be further divided into deployable components
Desktop deployment unit: Part of the deployment structure intended for use by a single user, typically installed on the user desktops. Examples of desktop deployment units include development tools, administrative tools, stand-alone business applications.
Server deployment unit: Part of the deployment structure that can provide services to multiple clients, providing the server in a client-server architecture. Examples of server deployment units include application servers, management servers, database servers and server-based business applications.
Agent or client deployment unit: Part of the deployment structure that allows remote connection between software. Examples of agent of client deployment units include agents in management system that are installed in the same tier as the managed resources, a remote application, or database clients that are installed with the software accessing the remote services.
Mobile deployment unit: Part of the deployment structure intended for use by a single user, typically installed on a mobile device. An example of a mobile deployment unit is a mobile application.
Hypervisor	A virtual machine in which a product can run on a guest operating system.
Limited operating system support	By default, the supported guest operating systems for a product and a hypervisor are the operating systems that are supported by both the product and the hypervisor. If a product restricts support to a subset of these operating systems, this restriction will be indicated by specifying that there is Limited Operating System Support.
Operating system minimum	The minimum operating system maintenance level that is required to run on the product.
Prerequisite minimum	The minimum maintenance level that is required for the prerequisite to work with the product.
Product minimum	The minimum maintenance level that is required for the product to run on the operating system, on an hypervisor, or work with a prerequisite product or supported software.
Supported software minimum	The minimum maintenance level that is required for the supported software to work with the product.
Long Term Support Release	A Long Term Support Release is a recommended product level for which support, including defect and security updates, will be provided over a specified period of time.
Continuous Delivery Product	A Continuous Delivery Product delivers new function to clients more frequently.
Continuous Delivery Product – Long Term Support Release	A Continuous Delivery Product delivers new function to clients more frequently. Since frequent releases may not be suitable for all client environments, Long Term Support Releases provide a package that will be supported for a longer period of time.
Go to top
### Disclaimers
This report is subject to the HCL Terms of Use (https://www.hcl.com/terms-of-use) and the following disclaimers:

The information contained in this report is provided for informational purposes only. While efforts were made to verify the completeness and accuracy of the information contained in this publication, it is provided AS IS without warranty of any kind, express or implied, including but not limited to the implied warranties of merchantability, non-infringement, and fitness for a particular purpose. In addition, this information is based on HCL’s current product plans and strategy, which are subject to change by HCL without notice. HCL shall not be responsible for any direct, indirect, incidental, consequential, special or other damages arising out of the use of, or otherwise related to, this report or any other materials. Nothing contained in this publication is intended to, nor shall have the effect of, creating any warranties or representations from HCL or its suppliers or licensors, or altering the terms and conditions of the applicable license agreement governing the use of HCL software.

References in this report to HCL products, programs, or services do not imply that they will be available in all countries in which HCL operates. Product release dates and/or capabilities referenced in this presentation may change at any time at HCL’s sole discretion based on market opportunities or other factors, and are not intended to be a commitment to future product or feature availability in any way. The underlying database used to support these reports is refreshed on a weekly basis. Discrepancies found between reports generated using this web tool and other HCL documentation sources may or may not be attributed to different publish and refresh cycles for this tool and other sources. Nothing contained in this report is intended to, nor shall have the effect of, stating or implying that any activities undertaken by you will result in any specific sales, revenue growth, savings or other results. You assume sole responsibility for any results you obtain or decisions you make as a result of this report.

Notwithstanding the HCL Terms of Use (https://www.hcl.com/terms-of-use), users of this site are permitted to copy and save the reports generated from this tool for such users own internal business purpose. No other use shall be permitted.
Go to top
