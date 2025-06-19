# How to run the IBM Installation Manager as a different user

## Applies to

> HCL Digital Experience v8.5 and higher  

## Introduction

If you try to run the IBM Installation Manager (IIM) on a Windows machine and another user originally installed it, you may encounter the following error message:

`The Installation Manager cannot be started. The registry information does not exist or does not match with this executable. This may happen if you are trying to run Installation Manager installed by another user.`  

This article describes how to run IIM as a different user than the one who installed it.

## Instructions

Refer to the following steps to run IIM on Windows as a different user:

1. Add `SOFTWARE\IBM\Installation Manager` registry keys and values from `HKEY_CURRENT_USER` under `HKEY_LOCAL_MACHINE`  

2. Modify **IBMIM.ini**, change access rights from `nonAdmin` to `admin`.  

3. Modify **installRegistry.xml** and **launcher.ini** to use the value `admin` instead of `nonAdmin` for access rights.  

4. Add `C:\ProgramData\IBM\Installation Manager` and all subfolders from the users folder `C:\Users\AppData\Roaming\IBM\Installation Manager`.  

5. Change the value `cic.appDataLocation=C:\ProgramData\IBM\Installation Manager` in **C:\IBM\Installation Manager\eclipse\configuration\config.ini**.  
