# Other Configuration

Many configurations of HCL Products and other software exist that are not explicitly listed in “Supported Configurations” or “Unsupported Configurations”, but which can reasonably be expected to perform within the accepted bounds of reliability, function, and performance.  

Configurations that fall into this category typically substitute a Dependent Product listed in the “Supported Configuration” for similar software. This may be a newer fix level of the Dependent Product or another software product that adheres to a supported specification. For example, this could be a newer WebSphere® Application Server (WAS) fix pack, an LDAP server that adheres to that standard or an external security manager that integrates via public APIs.

Please make sure to review [HCL DX support statement for "Other Configurations"](/digital-experience/get_started/software_support/) before making a decision to use the Dependent Products listed below.


## Operating Systems

The operating systems section specifies the operating systems that HCL Digital Experience 9.5 supports, and is organized by the operating system family. Operating system families include AIX, Linux, and Windows.

### Linux family
|OS|OS Supported Versions|Hardware|Bitness|Product Minimum|
|-------|-------|-------|-------|-------|
|SUSE Linux Enterprise Server (SLES) 11	|Base and later maintenance	releases|x86-64 IBM z Systems	|64-Exploit, 64-Tolerate	|8.5	|
|Ubuntu 16.04 LTS	|Base and later maintenance	releases|Power System – Little Endian	|64-Exploit, 64-Tolerate	|8.5	|
|Ubuntu 16.04 LTS	|Base and later maintenance	releases|x86-64	|64-Exploit, 64-Tolerate	|8.5	|

### Windows family

!!! note

	As of Cumulative Fix 09 – Windows Server 2008 is no longer supported. The operating system went out of mainstream support in January 2015.

|OS|Supported Versions|Hardware|Bitness|Product Minimum|
|---------|---------|---------|---------|---------|
|Windows 8.1 Enterprise*|Base and later maintenance releases|x86-64|64-Exploit, 64-Tolerate|8.5|
|Windows 8.1 Professional*|Base and later maintenance releases|x86-64|64-Exploit, 64-Tolerate|8.5|
|Windows 8.1 Standard*|Base and later maintenance releases|x86-64|64-Exploit, 64-Tolerate|8.5|
|Windows Server 2012 Datacenter Edition|Base and later maintenance releases|x86-64|64-Exploit, 64-Tolerate|8.5|
|Windows Server 2012 R2 Datacenter Edition|Base and later maintenance releases|x86-64|64-Exploit, 64-Tolerate|8.5|
|Windows Server 2012 Standard Edition|Base and later maintenance releases|x86-64|64-Exploit, 64-Tolerate|8.5|
|Windows Server 2012 R2 Standard Edition|Base and later maintenance releases|x86-64|64-Exploit, 64-Tolerate|8.5|
|Windows Server 2016 Datacenter Edition|Base and later maintenance releases|x86-64|64-Exploit, 64-Tolerate|8.5|
|Windows Server 2016 Essentials Edition|Base and later maintenance releases|x86-64|64-Exploit, 64-Tolerate|8.5|
|Windows Server 2016 Standard Edition|Base and later maintenance releases|x86-64|64-Exploit, 64-Tolerate|8.5|

*Support for developer platform only.

## Hypervisors
The Hypervisors section specifies the hypervisors that HCL Digital Experience 9.5 supports.

### AIX Summary
|Hypervisor|Product minimum|Deployment Units|Supported Guest Operating System|
|---------|-----|-----|----------------------------------|
|Application Workload Partition (WPAR) AIX 7.1|8.5|Server|	-	AIX 7.1 POWER System \- Big Endian<br>-	AIX 7.2 POWER System \- Big Endian|

!!! important "AIX support"

	Portal Express offering does not support AIX.

### Linux Summary
|Hypervisor|Product Minimum|Deployment Units|Supported Guest Operating System|
|---------|-----|-----|----------------------------------|
|KVM in SUSE Linux Enterprise Server (SLES) 11 and later|8.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|
|VMware ESXi 5.0|8.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 and 8 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|
|VMware ESXi 5.5 and later|8.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 and 8 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|
|VMware ESXi 6.0 and later|8.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 and 8 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|
|VMware ESXi 6.1 and later|8.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- 	Red Hat Enterprise Linux (RHEL) Server 7 and 8 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|
|z/VM 6.1 and later|8.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 and 8 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|
|z/VM 6.2 and later|8.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 and 8 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|
|z/VM 6.3 and later|8.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 and 8 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|

### Windows Summary

|Hypervisor|Product Minimum|Deployment Units|Supported Guest Operating System|
|----------|-----|-----|----------------------------------------|
|KVM in SUSE Linux Enterprise Server (SLES) 11 and later|8.5|Server|All supported operating systems:<br/>- Windows Server 2012 Datacenter Edition x86-64<br/>- Windows Server 2012 Standard Edition x86-64<br/>- Windows 8.1 Enterprise x86-64<br/>- Windows 8.1 Professional x86-64<br/>- Windows 8.1 Standard x86-64<br/>- Windows Server 2012 R2 Datacenter Edition x86-64<br/>- Windows Server 2012 R2 Standard Edition x86-64<br/>- Windows 10 Pro x86-64<br/>- Windows 10 Enterprise x86-64<br/>- Windows Server 2016 Datacenter Edition x86-64<br/>- Windows Server 2016 Standard Edition x86-64<br/>- Windows Server 2016 Essentials Edition x86-64<br/>- Windows Server 2019 Datacenter Edition x86-64<br/>- Windows Server 2019 Datacenter Edition x86-64<br/>- Windows Server 2019 Essentials Edition x86-64|
|VMware ESXi 5.0|8.5|Server|All supported operating systems:<br/>- Windows Server 2012 Datacenter Edition x86-64<br/>- Windows Server 2012 Standard Edition x86-64<br/>- Windows 8.1 Enterprise x86-64<br/>- Windows 8.1 Professional x86-64<br/>- Windows 8.1 Standard x86-64<br/>- Windows Server 2012 R2 Datacenter Edition x86-64<br/>- Windows Server 2012 R2 Standard Edition x86-64<br/>- Windows 10 Pro x86-64<br/>- Windows 10 Enterprise x86-64<br/>- Windows Server 2016 Datacenter Edition x86-64<br/>- Windows Server 2016 Standard Edition x86-64<br/>- Windows Server 2016 Essentials Edition x86-64<br/>- Windows Server 2019 Datacenter Edition x86-64<br/>- Windows Server 2019 Datacenter Edition x86-64<br/>- Windows Server 2019 Essentials Edition x86-64|
|VMware ESXi 5.5|8.5|Server|All supported operating systems:<br/>- Windows Server 2012 Datacenter Edition x86-64<br/>- Windows Server 2012 Standard Edition x86-64<br/>- Windows 8.1 Enterprise x86-64<br/>- Windows 8.1 Professional x86-64<br/>- Windows 8.1 Standard x86-64<br/>- Windows Server 2012 R2 Datacenter Edition x86-64<br/>- Windows Server 2012 R2 Standard Edition x86-64<br/>- Windows 10 Pro x86-64<br/>- Windows 10 Enterprise x86-64<br/>- Windows Server 2016 Datacenter Edition x86-64<br/>- Windows Server 2016 Standard Edition x86-64<br/>- Windows Server 2016 Essentials Edition x86-64<br/>- Windows Server 2019 Datacenter Edition x86-64<br/>- Windows Server 2019 Datacenter Edition x86-64<br/>- Windows Server 2019 Essentials Edition x86-64|
|VMware ESXi 6.0|8.5|Server|All supported operating systems:<br/>- Windows Server 2012 Datacenter Edition x86-64<br/>- Windows Server 2012 Standard Edition x86-64<br/>- Windows 8.1 Enterprise x86-64<br/>- Windows 8.1 Professional x86-64<br/>- Windows 8.1 Standard x86-64<br/>- Windows Server 2012 R2 Datacenter Edition x86-64<br/>- Windows Server 2012 R2 Standard Edition x86-64<br/>- Windows 10 Pro x86-64<br/>- Windows 10 Enterprise x86-64<br/>- Windows Server 2016 Datacenter Edition x86-64<br/>- Windows Server 2016 Standard Edition x86-64<br/>- Windows Server 2016 Essentials Edition x86-64<br/>- Windows Server 2019 Datacenter Edition x86-64<br/>- Windows Server 2019 Datacenter Edition x86-64<br/>- Windows Server 2019 Essentials Edition x86-64|
|VMware ESXi 6.1|8.5|Server|All supported operating systems:<br/>- Windows Server 2012 Datacenter Edition x86-64<br/>- Windows Server 2012 Standard Edition x86-64<br/>- Windows 8.1 Enterprise x86-64<br/>- Windows 8.1 Professional x86-64<br/>- Windows 8.1 Standard x86-64<br/>- Windows Server 2012 R2 Datacenter Edition x86-64<br/>- Windows Server 2012 R2 Standard Edition x86-64<br/>- Windows 10 Pro x86-64<br/>- Windows 10 Enterprise x86-64<br/>- Windows Server 2016 Datacenter Edition x86-64<br/>- Windows Server 2016 Standard Edition x86-64<br/>- Windows Server 2016 Essentials Edition x86-64<br/>- Windows Server 2019 Datacenter Edition x86-64<br/>- Windows Server 2019 Datacenter Edition x86-64<br/>- Windows Server 2019 Essentials Edition x86-64|


## Prerequisites

The Prerequisites section specifies the capabilities that HCL Digital Experience 9.5 requires and the prerequisite products used to fulfill those capabilities.

### Java SDK
HCL Digital Experience 9.5 requires JDK 7.0 or later for installation. 

|Prerequisite|Prerequisite minimum, and Supported versions|Product Minimum|
|----------|----------|----------|
|IBM Runtime Environment, Java Technology Edition|7.0 and later maintenance releases|8.5|
||7.1 and later maintenance releases|8.5|


## Databases

|Supported Software|Supported software minimum|Product minimum|
|-----------|------------------|-----|
|DB2 Advanced Enterprise Server Edition|11.1.0** and later maintenance releases|8.5|
|DB2 Advanced Workgroup Server Edition|11.1.0** and later maintenance releases|8.5|
|DB2 Connect Application Server Advanced Edition|11.1.0 and later maintenance releases|8.5|
|DB2 Connect Enterprise Edition|11.1.0 and later maintenance releases|8.5|
|DB2 Enterprise Server Edition|11.1.0 and later maintenance releases|8.5|
|DB2 Express Edition|11.1.0 and later maintenance releases|8.5|
|DB2 for z/OS|11.1.0 and later maintenance releases|8.5|
|Microsoft SQL Server|2014 and later maintenance releases|8.5|
||2016 and later maintenance releases|8.5|
|Oracle Database 12.2 Standard Edition|(12.2.0.0) and later maintenance releases|8.5|
|Oracle Database 12.2 Enterprise Edition|(12.2.0.0) and later maintenance releases|8.5|
|Oracle Database 12.2.0.1.0 Enterprise Edition|12.2.0.1.0 and later maintenance releases|8.5|
|Oracle Database 12.2.0.2 Enterprise Edition|12.2.0.2 and later maintenance releases|8.5|

\* Apache Derby is not supported in a product environment.
\* DB2: Includes support for DB2 pureScale component.

## Collaboration
|Prerequisite|Supported software versions|Product Minimum|
|-----------|------------------|-----|
|HCL Connections|5.5 and later maintenance|8.5|
|HCL Connections|6.0 and later maintenance|8.5|
|IBM Forms Experience Builder|8.6.3 and later maintenance|8.5|
|HCL Sametime Communicate|9.0 and later maintenance|8.5|
|HCL Sametime Complete|9.0 and later maintenance|8.5|  

!!! danger "Question on new releases (what to do?) - to be removed"
	- **Sametime Premium** : Later releases are 11.5, 11.6 and 12.0  
	reference: https://www.hcltechsw.com/resources/product-release/product-lifecycle-table?searchTerm=sametime 


## JDBC Drivers
|Supported Software|Supported software minimum|Product minimum|
|-----------|------------------|-----|
|DB2 Connect Enterprise Edition|11.1, and later maintenance releases|8.5|
|Microsoft SQL Server JDBC Driver|4.2, and later maintenance releases|8.5|

## Security Management
|Supported Software|Supported software minimum|Product minimum|
|-----------|------------------|-----|
|IBM Security Access Manager for Web|7.0, and later maintenance releases|8.5|
|IBM Security Access Manager|9.0, and later maintenance releases|8.5|
|Tivoli Directory Integrator|7.1.1, and later maintenance releases|8.5|

## Web Browsers 
|Supported Software|Supported software minimum|Product minimum|
|-----------|------------------|-----|
|Microsoft Internet Explorer|11|8.5|

## WebDAV Client 
|Supported Software|Supported software minimum|Product minimum|
|-----------|------------------|-----|
|JSCAPE AnyClient|6.0 and later maintenance releases|8.5|
|SRT WebDrive|2016 and later maintenance releases|8.5|
|davfs2|1.5 and later maintenance releases|8.5|

!!! danger "Question on new releases (what to do?) - to be removed"
	- **SRT WebDrive** : Latest release is 2018  
	reference: https://www.webdrive.com/software/regsoft/webdrive/v18/relnotes.html  
	- **davfs2** : Latest release 1.7  
	reference: https://savannah.nongnu.org/news/?group_id=10199  
