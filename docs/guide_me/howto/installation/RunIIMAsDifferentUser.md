# How can we run the Installation Manager as a different user than the one that installed it?

## Applies to

> HCL Digital Experience v8.5 and higher  

## Introduction

The IBM Installation Manager (IIM) cannot be started.  

A message box displays the following message when you try to run IIM and another user originally installed IIM.  

`The Installation Manager cannot be started. The registry information does not exist or does not match with this executable. This may happen if you are trying to run Installation Manager installed by another user.`  

This article describes how to run IIM as a different user than the one who installed it.  

## Instructions

For Windows only:

1. Add `SOFTWARE\IBM\Installation Manager` registry keys and values from `HKEY_CURRENT_USER` under `HKEY_LOCAL_MACHINE`  

2. Modify **IBMIM.ini**, change access rights from `nonAdmin` to `admin`.  

3. Modify **installRegistry.xml** and **launcher.ini** to use the value `admin` instead of `nonAdmin` for access rights.  

4. Add `C:\ProgramData\IBM\Installation Manager` and all subfolders from the users folder `C:\Users\AppData\Roaming\IBM\Installation Manager`.  

5. Change the value `cic.appDataLocation=C:\ProgramData\IBM\Installation Manager` in **C:\IBM\Installation Manager\eclipse\configuration\config.ini**.  
