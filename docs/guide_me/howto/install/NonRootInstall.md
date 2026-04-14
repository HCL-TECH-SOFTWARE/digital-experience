# How to Install HCL Digital Experience as a Non-Root User

## Applies to

> HCL Digital Experience v9.5 and Higher

## Introduction
The root user has the necessary permission to install HCL Digital Experience (HCL Portal server) but sometimes for security reasons, organizations are not ready to use root. 

There is a provision in IBM Installation Manager(IIM) to install HCL Digital Experience using a non-root id. On the AIX and Linux operating systems, you can permit non-root users to install the product by changing their permissions to access certain data directories. This task applies for AIX and Linux only. On the Windows operating system, the user must be a member of the administrator group.

## Instructions

Please see step 5 in the following HCL Digital Experience Help Center documentation:

[Preparing the Installation Manager (Linux)](../../../deployment/install/traditional/installing_dx/linux/inst_iim-linux.md){target="_blank"}

[Preparing the Installation Manager (AIX)](../../../deployment/install/traditional/installing_dx/aix/inst_iim-AIX.md){target="_blank"}