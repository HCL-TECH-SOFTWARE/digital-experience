# How to use RefreshAllItems for WCM Libraries

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

There are some situations where you would want to "touch" update all items in a WCM library. The refreshAllItems module was designed for this purpose. This document will demonstrate some sample invocations of the module.

## Instructions

!!! note "Important Safeguard"
    YOU SHOULD TAKE A CO-ORDINATED BACKUP OF THE PORTAL FILE SYSTEM AND DATABASE BEFORE EXECUTING THIS MODULE ! It is also a good idea to discuss with HCL Support before running the module.

???+ info "DISCLAIMER OF WARRANTIES"
    The following enclosed code is sample code created by HCL Corporation. This sample code is provided to you solely for the purpose of assisting you in the development of your applications. The code is provided "AS IS", without warranty of any kind. HCL shall not be liable for any damages arising out of your use of the sample code, even if they have been advised of the possibility of such damages.

1. Here are some sample uses of the module via HTTP requests:

    * Refresh scheduled items across all libraries without loading resources:
        ```text
        http://host:port/wps/wcm/myconnect?MOD=RefreshAllItems&allLibraries=true&preserve_dates=true&scheduleOnly=true&loadResources=false
        ```

    * Update security permissions across all libraries while preserving dates:
        ```text
        http://host:port/wps/wcm/myconnect?MOD=RefreshAllItems&allLibraries=true&preserve_dates=true&securityOnly=true&removeExistingPerms=&removeVirtualUserPerms=true&inheritPerms=&loadResources=false&processDrafts=false&libSecurity=true
        ```

    * Restrict execution to components within a specific library:
        ```text
        http://host:port/wps/wcm/myconnect?MOD=RefreshAllItems&library=mylib&restrictOn=Cmpnt
        ```

    * Refresh scheduled items for the default library:
        ```text
        http://host:port/wps/wcm/myconnect?MOD=RefreshAllItems&scheduleOnly=true&loadResources=false
        ```
        > Note: the module by default does not load the child nodes. With `loadResources=true` it loads the child nodes like controls and components. This can increase run time for the module dramatically.

    * Fix SiteArea items in a specific library and preserve dates:
        ```text
        http://host:port/wps/wcm/myconnect?MOD=refreshAllItems&library=mylib&restrictOn=SiteArea&preserve_dates=true&fix=true
        ```

    * Sample usage to update the PAC Permissions/Tables for a set of items in a library (in this case all Content Links):
        ```text
        http://host:port/wps/wcm/myconnect?MOD=refreshAllItems&library=myLibrary&restrictOn=ContentLink&securityOnly=true&preserve_dates=true&removeExistingPerms=true
        ```

2. Sample ConfigEngine invocation:
    ```bash
    ./ConfigEngine.sh run-wcm-admin-task -Dtask=refreshAllItems -DrestrictOn=WorkflowAction -Dlibrary=mylibraryname
    ```