# Hardware requirements
HCL Portal Express requires the following hardware, organized by type of hardware, deployment units or components.

## Installable software - Linux
|Hardware|Deployment units|Requirement|Applicable operating systems|
|------------------|-----|------|-------------|
|Disk Space|Server|Minimum 3 GB free disk space for installation of DX Portal<br/>Minimum 2 GB free disk space for installation of WebSphere Application Server<br/>Minimum 3 GB free disk space for installation of IBM Installation Manager and the Installation Manager shared directory<br/>Minimum 8 GB total free disk space recommended for installation|All supported Linux operating systems|
|Memory|Server|Physical memory requirements and recommendations for DX Portal or HCL Web Content Manager (or WCM):<br/>Under minimal load, DX Portal can function with 4GB of RAM and a remote database. In a production environment, 8GB is an optimal starting point for RAM. Production environments and environments featuring multiple profiles will require more memory.<br/>Note: The amount of memory assigned to the *INTERACT pool should be set at a minimum of well over 1 GB and a maximum of 100%. If the *INTERACT pool cannot be given enough memory, then the database tasks have to be started with SBMJOB so that they run in the *BASE pool.|All supported Linux operating systems|
|Other Hardware|Server|Minimum 2 CPUs required for installations of DX Portal and HCL WCM|All supported Linux operating systems|
|Processor|Server|X86-64 IBM POWER Family of processors<br/>System z Processors|All supported Linux operating systems|
||Server|Minimum 2 CPUs for installation of Portal or WCM|All supported Linux operating systems|

## Installable software - Windows
|Hardware|Deployment units|Requirement|Applicable operating systems|
|------------------|-----|------|-------------|
|Disk Space|Server|Minimum 3 GB free disk space for installation of DX Portal<br/>Minimum 2 GB free disk space for installation of WebSphere Application Server<br/>Minimum 3 GB free disk space for installation of IBM Installation Manager and the Installation Manager shared directory<br/>Minimum 8 GB total free disk space recommended for installation|All supported Windows operating systems|
|Memory|Server|Physical memory requirements and recommendations for DX Portal or HCL Web Content Manager (or WCM):<br/>Under minimal load, DX Portal can function with 4GB of RAM and a remote database. In a production environment, 8GB is an optimal starting point for RAM. Production environments and environments featuring multiple profiles will require more memory.<br/>Note: The amount of memory assigned to the *INTERACT pool should be set at a minimum of well over 1 GB and a maximum of 100%. If the *INTERACT pool cannot be given enough memory, then the database tasks have to be started with SBMJOB so that they run in the *BASE pool.|All supported Windows operating systems|
|Other Hardware|Server|Minimum 2 CPUs required for installations of DX Portal and HCL WCM|All supported Windows operating systems|
|Processor|Server|X86-64 IBM POWER Family of processors<br/>System z Processors|All supported Windows operating systems|
||Server|Minimum 2 CPUs for installation of Portal or WCM|All supported Windows operating systems|

## Installable software - Docker *

!!! note

    \* HCL Digital Experience 9.5 image deployments to Docker are supported for development, and not production operations.

|Hardware|Deployment units|Requirement|Applicable operating systems|
|------------------|-----|------|-------------|
|Disk Space|Server|Minimum 40 GB for Volume size of HCL DX 9.5 and higher Docker image deployment|Docker 1.13 and higher|
|Memory|Server|Physical memory requirements and recommendations for DX 9.5 and higher Docker image deployment<br/>7GB of RAM set as default, can be modified||
|CPU|Server|2 CPUs requested for installations of DX 9.5 Docker image||

