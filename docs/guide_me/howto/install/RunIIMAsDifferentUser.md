# How to run the IBM Installation Manager as a different user

## Applies to

> HCL Digital Experience v8.5 and higher  

## Introduction

If you try to run the IBM Installation Manager (IIM) on a Windows machine and another user originally installed it, you may encounter the following error message:  

`The Installation Manager cannot be started. The registry information does not exist or does not match with this executable. This may happen if you are trying to run Installation Manager installed by another user.`  

This article describes how to run IBM Installation Manager as a different user than the one who installed it.  

## Instructions

Refer to the following steps to run IBM Installation Manager on Windows as a different user:  

1. In regedit copy all registry keys and values under `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\IBM\Installation Manager` to `Computer\HKEY_CURRENT_USER\SOFTWARE\IBM\Installation Manager`  

2. Open the **IBMIM.ini** located in directory `<Installation_Manager_root>\eclipse` with a text editor.  

3. In the **IBMIM.ini** change the `-accessRights` property value from `nonAdmin` to `admin`.  

4. Modify the **installRegistry.xml** and **launcher.ini** file located in `<Installation_Manager_root>\eclipse` to use the value `admin` instead of `nonAdmin` for the property `-accessRights` as well.  

5. Copy the folder `C:\ProgramData\IBM\Installation Manager` and all sub-folders from the users folder to folder `C:\Users\AppData\Roaming\IBM\Installation Manager`.  

6. Open the file **C:\IBM\Installation Manager\eclipse\configuration\config.ini** with a text editor.  

7. In the **config.ini** file change the value `cic.appDataLocation=C\:\\ProgramData\\IBM\\Installation Manager` to `C\:\Users\AppData\Roaming\IBM\Installation Manager`  

For more details, please check IBMs Installation Manager Knowledge Center at URL:  
[Installing as an administrator, nonadministrator, or group](https://www.ibm.com/docs/en/installation-manager/latest?topic=mode-installing-as-administrator-nonadministrator-group)