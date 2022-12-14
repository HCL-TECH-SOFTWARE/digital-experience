# Other Configuration

Many configurations of HCL Products and other software exist that are not explicitly listed in “Supported Configurations” or “Unsupported Configurations”, but which can reasonably be expected to perform within the accepted bounds of reliability, function, and performance.  

Configurations that fall into this category typically substitute a Dependent Product listed in the “Supported Configuration” for similar software. This may be a newer fix level of the Dependent Product or another software product that adheres to a supported specification. For example, this could be a newer WebSphere® Application Server (WAS) fix pack, an LDAP server that adheres to that standard or an external security manager that integrates via public APIs.

Please make sure to review [HCL DX support statement for "Other Configurations"](../../../get_started/software_support.md) before making a decision to use the Dependent Products listed below.


## Operating Systems

The operating systems section specifies the operating systems that HCL Digital Experience 9.5 supports, and is organized by the operating system family. Operating system families include AIX, Linux, and Windows.

### Linux family
|OS|OS Supported Versions|Hardware|Bitness|Product Minimum|
|-------|-------|-------|-------|-------|
|Ubuntu 22.04 LTS	|Base and later maintenance	releases|x86-64|	64-Exploit, 64-Tolerate|	9.5	|


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
|KVM in SUSE Linux Enterprise Server (SLES) 12 SP5|9.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|
|SUSE Linux Enterprise Server (SLES) 15 SP4|9.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|
|VMware ESXi 8.0|9.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 and 8 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|
|z/VM 7.2|9.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 and 8 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|
|z/VM 7.3|9.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 and 8 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|

### Windows Summary

|Hypervisor|Product Minimum|Deployment Units|Supported Guest Operating System|
|----------|-----|-----|----------------------------------------|
|KVM in SUSE Linux Enterprise Server (SLES) 12 SP5|9.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|
|SUSE Linux Enterprise Server (SLES) 15 SP4|9.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|
|VMware ESXi 8.0|9.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 and 8 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|
|z/VM 7.2|9.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 and 8 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|
|z/VM 7.3|9.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 and 8 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|


## Prerequisites

The Prerequisites section specifies the capabilities that HCL Digital Experience 9.5 requires and the prerequisite products used to fulfill those capabilities.

### IBM Installation Manager
|Prerequisite|Prerequisite minimum, and Supported Versions|Product Minimum|
|----------|----------|----------|
|IBM Installation Manager|1.9 and later maintenance|9.5|  


## Databases

|Supported Software|Supported software minimum|Product minimum|
|-----------|------------------|-----|
|Apache Derby|10.12, 10.13, 10.14, 10.15, 10.16|9.5|

\* Apache Derby is not supported in a product environment.


## Collaboration
|Prerequisite|Supported software versions|Product Minimum|
|-----------|------------------|-----|
|HCL Connections|5.5 and later maintenance|8.5|
|HCL Connections|6.0 and later maintenance|8.5|
|IBM Forms Experience Builder|8.6.3 and later maintenance|8.5|
|HCL Sametime Premium|11.5, 11.6, 12.0 and later maintenance|9.5|


## Product Specific or Mixed Content 
|Supported Software|Supported software minimum|Product minimum|
|-----------|------------------|-----|
|Dojo Toolkit|1.9 and later maintenance releases|8.5|
|IBM License Metric Tool|9.2 and later maintenance releases|8.5|  


## Security Management
|Supported Software|Supported software minimum|Product minimum|
|-----------|------------------|-----|
|IBM Security Verify Access|10.0, and later maintenance releases|9.5|
 

## Web Servers (Non-Container Platforms)
|Supported Software|Supported software minimum, and later|Product minimum|
|-----------|------------------|-----|
|HCL Domino|10.0 and later maintenance releases*|9.5|
||11.0 and later maintenance releases|9.5|
||12.0 and later maintenance releases|9.5|


## WebDAV Client 
|Supported Software|Supported software minimum|Product minimum|
|-----------|------------------|-----|
|JSCAPE AnyClient|6.0 and later maintenance releases|8.5|
|SRT WebDrive|2016 and later maintenance releases|8.5|
||2018 and later maintenance releases|9.5|
|davfs2|1.5 and later maintenance releases|8.5|
||1.7 and later maintenance releases|9.5|


