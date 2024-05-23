# Supported configurations

A “supported configuration” is a combination of HCL Software and other dependent products (typically at a specified version, release, fix, or specification level) that has been validated by HCL.

HCL provides full support for configurations in this category. Support is provided under the terms of the product license to ensure that the product operates within its specifications.  

For more details, see [HCL DX support statement](../../../get_started/software_support.md).

## Operating systems

HCL Digital Experience V9.5 supports the following operating systems, which are organized by operating system family. Operating system families include AIX, Linux, and Windows.

### AIX family

|Operating system (OS)|Supported versions|Hardware|Bit version|Product minimum|
|-------|-------|-------|-------|-------|
|AIX 7.1|Base and later maintenance releases|POWER System - Big Endian|64-Exploit, 64-Tolerate|8.5|
|AIX 7.2|Base and later maintenance releases|Power System - Big Endian|64-Exploit, 64-Tolerate|9.0|
|AIX 7.3|Base and later maintenance releases|Power System - Big Endian|64-Exploit, 64-Tolerate|9.5|

!!! important 
	If the installation of DX on AIX 7.3 fails (with missing library messages) while you use the IBM Installation Manager (IIM) installer contained in the DX Setup ``.zip`` files, then use the a later version of IBM AIX IIM (version 1.9.2.3 or later). Using a later IIM version helps ensure that the required AIX 7.3 libraries for installation are present. Refer to the following link to check the list of IIM fix levels and their corresponding download links: [Fix list for Installation Manager](https://www.ibm.com/support/pages/fix-list-installation-manager).

!!! important 
	The Portal Express offering does not support AIX.

### Linux family

|OS|Supported versions|Hardware|Bit version|Product minimum|
|-------|-------|-------|-------|-------|
|Red Hat Enterprise Linux (RHEL) Server 7 | Base and later maintenance releases | IBM Z Systems | 64-Exploit, 64-Tolerate | 8.5 |
|Red Hat Enterprise Linux (RHEL) 7 | 7.1 and later maintenance releases | Power System – Little Endian | 64-Exploit, 64-Tolerate | 8.5 |
|Red Hat Enterprise Linux (RHEL) 7 | 7.1 and later maintenance releases | x86-64 | 64-Exploit, 64-Tolerate | 8.5 |
|Red Hat Enterprise Linux (RHEL) 8 | 8 and later maintenance releases | x86-64 | 64-Exploit, 64-Tolerate | 9.0 |
|Red Hat Enterprise Linux (RHEL) 9 |9 and later maintenance releases | x86-64 |64-Exploit, 64-Tolerate |9.5 CF209 |
|SUSE Linux Enterprise Server (SLES) 12 | Base and later maintenance releases | x86-64 IBM z Systems | 64-Exploit, 64-Tolerate | 8.5 |
|SUSE Linux Enterprise Server (SLES) 15 | Base and later maintenance releases | x86-64 | 64-Tolerate | 8.5 |
|Ubuntu 18.04 LTS | Base and later maintenance releases | Power System – Little Endian | 64-Exploit, 64-Tolerate | 8.5 |
|Ubuntu 18.04 LTS | Base and later maintenance releases | x86-64 | 64-Exploit, 64-Tolerate | 8.5 |
|Ubuntu 20.04 LTS | Base and later maintenance releases | Power System – Little Endian | 64-Exploit, 64-Tolerate | 8.5 |
|Ubuntu 20.04 LTS | Base and later maintenance releases | x86-64| 64-Exploit, 64-Tolerate| 8.5 |

### Windows family

!!! note
    As of Cumulative Fix 09, Windows Server 2008 is no longer supported. The operating system went out of mainstream support in January 2015.

|OS|Supported versions|Hardware|Bit version|Product minimum|
|---------|---------|---------|---------|---------|
|Windows 10 Enterprise*|Base and later maintenance releases|x86-64|	64-Exploit, 64-Tolerate|8.5|
|Windows 10 Pro*|Base and later maintenance releases|x86-64|64-Exploit, 64-Tolerate|8.5|
|Windows 11 Enterprise*|Base and later maintenance releases|x86-64|	64-Exploit, 64-Tolerate|9.5|
|Windows 11 Pro*|Base and later maintenance releases|x86-64|64-Exploit, 64-Tolerate|9.5|
|Windows Server 2019 Datacenter Edition|Base and later maintenance releases|x86-64|64-Exploit, 64-Tolerate|8.5|
|Windows Server 2019 Essential Edition|Base and later maintenance releases|x86-64|64-Exploit, 64-Tolerate|8.5|
|Windows Server 2022|Base and later maintenance releases|x86-64|64-Exploit, 64-Tolerate|9.0 CF199|

*Support for developer platform only.

## Hypervisors

HCL Digital Experience 9.5 supports the following hypervisors:

### AIX summary

|Hypervisor|Product minimum|Deployment units|Supported guest operating system|
|---------|-----|-----|----------------------------------|
|IBM PowerVM Hypervisor (LPAR, DPAR, Micro-Partition) any supported version|8.5|Server|-	AIX 7.1 POWER System \– Big Endian<Br>-	AIX 7.2 POWER System \- Big Endian|
|WPAR: Product installed in System Workload Partition AIX 6.1|8.5|Server|-	AIX 7.1 POWER System \– Big Endian<br>-	AIX 7.2 POWER System \– Big Endian|

!!! important 
	The Portal Express offering does not support AIX.  

### Linux summary

|Hypervisor|Product minimum|Deployment units|Supported guest operating System|
|---------|-----|-----|----------------------------------|
|IBM PR/SM any version|8.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM zSystems<br>- Red Hat Enterprise Linux (RHEL) Server 7 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|
|IBM PowerVM Hypervisor (LPAR, DPAR, Micro-Partition) any supported version|8.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|
|Red Hat KVM as delivered with Red Hat Enterprise Linux (RHEL) and its RHEV equivalent 7.0|8.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian|<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|
|VMware ESXi 6.5 and later|8.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 and 8 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|
|VMware ESXi 7.0|9.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 and 8 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|

### Windows summary

|Hypervisor|Product minimum|Deployment units|Supported guest operating system|
|----------|-----|-----|----------------------------------------|
|Red Hat KVM as delivered with Red Hat Enterprise Linux (RHEL) and it’s RHEV equivalent 7.0|8.5|Server|All supported operating systems<br/>- Windows Server 2012 Datacenter Edition x86-64<br/>- Windows Server 2012 Standard Edition x86-64<br/>- Windows 8.1 Enterprise x86-64<br/>- Windows 8.1 Professional x86-64<br/>- Windows 8.1 Standard x86-64<br/>- Windows Server 2012 R2 Datacenter Edition x86-64<br/>- Windows Server 2012 R2 Standard Edition x86-64<br/>- Windows 10 Pro x86-64<br/>- Windows 10 Enterprise x86-64<br/>- Windows Server 2016 Datacenter Edition x86-64<br/>- Windows Server 2016 Standard Edition x86-64<br/>- Windows Server 2016 Essentials Edition x86-64<br/>- Windows Server 2019 Datacenter Edition x86-64<br/>- Windows Server 2019 Datacenter Edition x86-64<br/>- Windows Server 2019 Essentials Edition x86-64|
|VMware ESXi 6.5|8.5|Server|All supported operating systems:<br/>- Windows Server 2012 Datacenter Edition x86-64<br/>- Windows Server 2012 Standard Edition x86-64<br/>- Windows 8.1 Enterprise x86-64<br/>- Windows 8.1 Professional x86-64<br/>- Windows 8.1 Standard x86-64<br/>- Windows Server 2012 R2 Datacenter Edition x86-64<br/>- Windows Server 2012 R2 Standard Edition x86-64<br/>- Windows 10 Pro x86-64<br/>- Windows 10 Enterprise x86-64<br/>- Windows Server 2016 Datacenter Edition x86-64<br/>- Windows Server 2016 Standard Edition x86-64<br/>- Windows Server 2016 Essentials Edition x86-64<br/>- Windows Server 2019 Datacenter Edition x86-64<br/>- Windows Server 2019 Standard Edition x86-64<br/>- Windows Server 2019 Essentials Edition x86-64|
|VMware ESXi 7.0|9.5|Server|All supported operating systems:<br>- Windows Server 2012 Datacenter Edition x86-64<br>- Windows Server 2012 Standard Edition x86-64<br>- Windows 8.1 Enterprise x86-64<br>- Windows 8.1 Professional x86-64<br>- Windows 8.1 Standard x86-64<br>- Windows Server 2012 R2 Datacenter Edition x86-64<br>- Windows Server 2012 R2 Standard Edition x86-64<br>- Windows 10 Pro x86-64<br>- Windows 10 Enterprise x86-64<br>- Windows Server 2016 Datacenter Edition x86-64<br>- Windows Server 2016 Standard Edition x86-64<br>- Windows Server 2016 Essentials Edition x86-64<br>- Windows Server 2019 Datacenter Edition x86-64<br>- Windows Server 2019 Standard Edition x86-64|


## Prerequisites

HCL Digital Experience 9.5 requires the following capabilities and products to provide those capabilities:

### WebSphere Application Server
|Prerequisite|Prerequisite minimum and supported versions|Product minimum|
|----------|----------|----------|
|WebSphere Application Server|8.5.5.12 and later maintenance releases**|8.5|
||9.0.0.2 and later maintenance releases|9.0|
||9.0.5 and later maintenance releases**|9.0 CF17|

** WebSphere Application Server fix packs 9.0.5.19 and 8.5.5.25 currently cause an issue with ConfigEngine tasks and therefore should not be used at this time. See the documentation [ConfigEngine errors when updating WebSphere Application Server](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0112396) for more details.

|Prerequisite|Prerequisite minimum and supported versions|Product minimum|
|----------|----------|----------|
|WebSphere eXtreme Scale|8.6.1 and later maintenance releases|8.5|


### IBM Installation Manager
|Prerequisite|Prerequisite minimum and supported versions|Product minimum|
|----------|----------|----------|
|IBM Installation Manager|1.8.5 and later maintenance|8.5|  

  

### Java SDK
HCL Digital Experience 9.5 requires JDK 7.0 or later for installation. 

|Prerequisite|Prerequisite minimum and supported versions|Product minimum|
|----------|----------|----------|
|IBM Runtime Environment, Java Technology Edition|8.0 and later maintenance releases|8.5|  


## Databases

|Supported software|Supported software minimum|Product minimum|
|-----------|------------------|-----|
|Apache Derby|10.11*<br/>|8.5|
|DB2 Standard and Advanced Edition|11.5** and later maintenance releases|8.5|
|Microsoft SQL Server Enterprise and Standard Edition|2017, 2019 and later maintenance releases|8.5|
|Oracle Database 19c|19c and later maintenance releases|8.5|
|Oracle on Amazon Relational Database Service|12.2.0.1.0 and later maintenance releases|8.5|

\* Apache Derby is not supported in a product environment.  
\* DB2 includes support for the DB2 pureScale component.  


## Collaboration 
|Prerequisite|Supported software versions|Product minimum|
|-----------|------------------|-----|
|HCL Connections|8.0 and later maintenance|9.5|
|HCL Leap|9.2 and later maintenance|9.5|

## Development tools 
|Supported software|Supported software minimum|Product minimum|
|-----------|------------------|-----|
|HCL Web Experience Factory|8.5.1 and later maintenance releases|8.5|
|Rational Application Developer for WebSphere|9.7 and later maintenance releases|8.5|

## JDBC drivers
JDBC Drivers support forward compatibility for all maintenance levels and also new version levels for the types listed below, unless explicitly stated otherwise.

|Supported software|Supported software minimum|Product minimum|
|-----------|------------------|-----|
|IBM Application Connectivity for DB2 for z/OS Feature|All versions and later maintenance releases|8.5|
|IBM DB2 Universal JDBC Provider (XA) from DB2 z/OS (type 2)*|All versions and later maintenance releases|8.5|
|IBM DB2 Universal JDBC Provider (XA) from DB2 z/OS (type 4)**|All versions and later maintenance releases|8.5|
|IBM Data Server Driver for JDBC and SQLJ|4.21 (11.1)<br>No future versions, releases, or fix packs supported.|8.5|
|Microsoft SQL Server JDBC Driver|6.2, and later maintenance releases|8.5|
|Oracle JDBC Driver 12.c***|12.2, and later maintenance releases|8.5|

*JDBC drivers are shipped as DB2 for z/OS APARs. You can check for the appropriate APAR/PTF numbers in the DB2 for z/OS Infocenter, 'Programming for DB2 > Programming for Java > Supported drivers for JDBC and SQLJ'. Obtain the PTFs from DB2 on z/OS support or IBMLINK. Version 3.58 and later are supported.  
**Requires APAR PK93123 for DB2 on z/OS V9.1. You can obtain the fix from DB2 on z/OS support or IBMLINK.  
***Oracle JDBC Driver Thin (type 4) Oracle JDBC Driver Thick, TAF (type 2) - Supported on Linux operating systems only.  
		 

## LDAP servers 
All LDAP Servers that support the LDAP V3 Specification are supported.

|Supported software|Supported software minimum|product minimum|
|-----------|------------------|-----|
|IBM Security Directory Suite|8.0.1 and later maintenance releases|8.5|

## Product-specific or mixed content 
|Supported software|Supported software minimum|Product minimum|
|-----------|------------------|-----|
|Dojo Toolkit|1.9.7|8.5|
|IBM License Metric Tool|9.2 and later maintenance releases|8.5|
|jQuery|3.5.1|8.5|  


## Security management
|Supported software|Supported software minimum|Product minimum|
|-----------|------------------|-----|
|CA Siteminder*|12.0, and later maintenance releases|8.5|   


## Web browsers 
|Supported software|Supported software minimum|Product minimum|
|-----------|------------------|-----|
|Android default browser|Newer levels are supported|8.5|
|Apple Safari|Newer levels are supported|8.5|
|Google Chrome|Newer levels are supported|8.5|
|Microsoft Edge|Newer levels are supported|8.5|
|Microsoft Edge Chromium-Based|Newer levels are supported|8.5|
|Mozilla Firefox|Newer levels are supported|8.5|
|Mozilla Firefox ESR|Newer levels are supported|8.5|

## Web Servers (Non-Container Platforms)
|Supported software|Supported software minimum, and later|Product minimum|
|-----------|------------------|-----|
|Apache Server|2.4 and later maintenance releases|8.5|
|HCL Domino|9.0 and later maintenance releases|8.5|
|IBM HTTP Server|8.5.5 and later maintenance releases*|8.5|
||9.0 and later maintenance releases|8.5|
||9.0.5 and later maintenance releases|8.5|
|Microsoft Internet Information Services|10.0 and later maintenance releases|8.5|

*IBM HTTP Server 8.5.5 is supported only with HCL Digital Experience Server V8.5.5.x.  


## Hardware requirements
HCL Digital Experience requires the following hardware, organized by type of hardware, deployment units or components.

### AIX
|Hardware|Deployment units|Requirement|Applicable operating systems|
|---------|------|------|-----------|
|Disk space|Server|Minimum 3 GB free disk space for installation of DX Portal<br>Minimum 2 GB free disk space for installation of WebSphere Application Server<br>Minimum 3 GB free disk space for installation of IBM Installation Manager and the Installation Manager shared directory<br>Minimum 8 GB total free disk space recommended for installation|All supported AIX operating systems|
|Memory|Server|Physical memory requirements and recommendations for DX Portal or HCL Web Content Manager (or WCM):<br>Under minimal load, DX Portal can function with 4GB of RAM and a remote database. In a production environment, 8GB is an optimal starting point for RAM. Production environments and environments featuring multiple profiles will require more memory.<br>Note: The amount of memory assigned to the *INTERACT pool should be set at a minimum of well over 1 GB and a maximum of 100%. If the *INTERACT pool cannot be given enough memory, then the database tasks have to be started with SBMJOB so that they run in the *BASE pool.|All supported AIX operating systems|
|Other hardware|Server|Minimum 2 CPUs required for installations of DX Portal and HCL WCM|All supported AIX operating systems|
|Processor|Server|X86-64 IBM POWER Family of processors<br>System z Processors|All supported AIX operating systems|
|-|Server|Minimum 2 CPUs for installation of Portal or WCM|All supported AIX operating systems|

!!! important 
	The Portal Express offering does not support AIX.

### Linux
|Hardware|Deployment units|Requirement|Applicable operating systems|
|------------------|-----|------|-------------|
|Disk Space|Server|Minimum 3 GB free disk space for installation of DX Portal<br/>Minimum 2 GB free disk space for installation of WebSphere Application Server<br/>Minimum 3 GB free disk space for installation of IBM Installation Manager and the Installation Manager shared directory<br/>Minimum 8 GB total free disk space recommended for installation|All supported Linux operating systems|
|Memory|Server|Physical memory requirements and recommendations for DX Portal or HCL Web Content Manager (or WCM):<br/>Under minimal load, DX Portal can function with 4GB of RAM and a remote database. In a production environment, 8GB is an optimal starting point for RAM. Production environments and environments featuring multiple profiles will require more memory.<br/>Note: The amount of memory assigned to the *INTERACT pool should be set at a minimum of well over 1 GB and a maximum of 100%. If the *INTERACT pool cannot be given enough memory, then the database tasks have to be started with SBMJOB so that they run in the *BASE pool.|All supported Linux operating systems|
|Other Hardware|Server|Minimum 2 CPUs required for installations of DX Portal and HCL WCM|All supported Linux operating systems|
|Processor|Server|X86-64 IBM POWER Family of processors<br/>System z Processors|All supported Linux operating systems|
||Server|Minimum 2 CPUs for installation of Portal or WCM|All supported Linux operating systems|

### Windows
|Hardware|Deployment units|Requirement|Applicable operating systems|
|------------------|-----|------|-------------|
|Disk Space|Server|Minimum 3 GB free disk space for installation of DX Portal<br/>Minimum 2 GB free disk space for installation of WebSphere Application Server<br/>Minimum 3 GB free disk space for installation of IBM Installation Manager and the Installation Manager shared directory<br/>Minimum 8 GB total free disk space recommended for installation|All supported Windows operating systems|
|Memory|Server|Physical memory requirements and recommendations for DX Portal or HCL Web Content Manager (or WCM):<br/>Under minimal load, DX Portal can function with 4GB of RAM and a remote database. In a production environment, 8GB is an optimal starting point for RAM. Production environments and environments featuring multiple profiles will require more memory.<br/>Note: The amount of memory assigned to the *INTERACT pool should be set at a minimum of well over 1 GB and a maximum of 100%. If the *INTERACT pool cannot be given enough memory, then the database tasks have to be started with SBMJOB so that they run in the *BASE pool.|All supported Windows operating systems|
|Other Hardware|Server|Minimum 2 CPUs required for installations of DX Portal and HCL WCM|All supported Windows operating systems|
|Processor|Server|X86-64 IBM POWER Family of processors<br/>System z Processors|All supported Windows operating systems|
||Server|Minimum 2 CPUs for installation of Portal or WCM|All supported Windows operating systems|
