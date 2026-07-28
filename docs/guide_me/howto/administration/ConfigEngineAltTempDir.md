# How to use a temporary directory other than tmp with ConfigEngine

## Applies to

> HCL Digital Experience v9.5 and Higher

## Introduction

This document describes how to use a temporary directory other than tmp when running any ConfigEngine task.

For example, prior to a Cumulative Fix (CF) upgrade the Health Checker gets this message:

```text
 Test: Available temporary space  
   
 ERROR: There is not enough space in the /tmp/ directory  
 for the configuration tasks to run successfully.  
 At lease 1 GB of disk space in the /tmp/ directory is needed.  
```

## Instructions

To run ConfigEngine using a directory other than `/tmp`, you can pass the `-Djava.io.tmpdir=` parameter as follows:

```bash
./ConfigEngine.sh health-check-update -DPortalAdminPwd=wpsadmin -DWasPassword=wpsadmin -Djava.io.tmpdir=/xyz
```

!!!note  
    - There may be exceptions where the /tmp directory is still used depending on the task being run. For example, one of Health Checker's tasks is to check available space within the /tmp directory as it's the default director used during the CF upgrade process, namely applyCF. You can pass the `-Djava.io.tmpdir=` when running applyCF as well.  
    - The Health Checker and applyCF are being referenced as examples. The `-Djava.io.tmpdir=` parameter may apply to other ConfigEngine tasks as well.  
