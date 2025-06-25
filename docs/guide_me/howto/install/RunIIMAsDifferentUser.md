# How to run the IBM Installation Manager as a different user

## Applies to

> HCL Digital Experience v8.5 and higher  

## Introduction

If you try to run the IBM Installation Manager (IIM) on a Windows machine and another user originally installed it, you may encounter the following error message:  

`The Installation Manager cannot be started. The registry information does not exist or does not match with this executable. This may happen if you are trying to run Installation Manager installed by another user.`  

This article describes how to run IBM Installation Manager as a different user than the one who installed it.  

## Instructions

Refer to the following steps to run IBM Installation Manager on Windows as a different user:  

1. Open the **Registry Editor** and copy all registry keys and values under `Computer\HKEY_CURRENT_USER\SOFTWARE\IBM\Installation Manager` to `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\IBM\Installation Manager`.

2. Open the following files located in `<Installation_Manager_root>\eclipse` with a text editor:

    1. `IBMIM.ini`
    2. `launcher.ini`

3. In each file, change the value of the `-accessRights` property from `nonAdmin` to `admin`.

4. Open the `installRegistry.xml`located in `<Portal_Install_root>\WebSphere\PortalServer\version`.

5. In the `installRegistry.xml` file, change the value of the `accessRights` property from `nonAdmin` to `admin`.

6. Copy the entire `C:\Users\AppData\Roaming\IBM\Installation Manager` folder to the `C:\ProgramData\IBM\Installation Manager` folder.  

7. Open the `config.ini` file located in `<Installation_Manager_Install_root>\eclipse\configuration` with a text editor.  

8. In the `config.ini` file, change the value of `cic.appDataLocation=C\:\\ProgramData\\IBM\\Installation Manager` to `C\:\Users\AppData\Roaming\IBM\Installation Manager`.

???+ info "Related information"
    - [Installing as an administrator, nonadministrator, or group](https://www.ibm.com/docs/en/installation-manager/latest?topic=mode-installing-as-administrator-nonadministrator-group){target="_blank"}.
    - [Cannot install Installation Manager in nonadmininstrator mode after installing in administrator mode](https://www.ibm.com/support/pages/cannot-install-installation-manager-nonadmininstrator-mode-after-installing-administrator-mode)
