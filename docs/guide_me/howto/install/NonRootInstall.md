# How to install HCL DX as a non-root user

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

While the root user has the necessary permissions to install HCL Digital Experience (DX), organizations often restrict root access for security reasons. This article describes how to install HCL DX as a non-root user using the IBM Installation Manager (IIM).

## Instructions

Review the following instructions for your specific operating system.

**For AIX and Linux**

To permit non-root users to install the product, change their permissions to access specific data directories. Refer to step 5 in the following documentation:

- [Preparing the Installation Manager (AIX)](../../../deployment/install/traditional/installing_dx/aix/inst_iim-AIX.md)
- [Preparing the Installation Manager (Linux)](../../../deployment/install/traditional/installing_dx/linux/inst_iim-linux.md)

**For Windows**

Ensure the non-root user is a member of the Administrator group.
