# How to use RefreshAllItems for WCM Libraries

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

There are some situations where you would want to "touch" update all items in a WCM library. The refreshAllItems module was designed for this purpose. This document will demonstrate some sample invocations of the module.

## Instructions

!!! note "Important Safeguard"
    You should take a coordinated backup of the HCL DX file system and database before executing this! It is also a good idea to discuss with HCL Support before running the module.  

1. Here are some sample uses of the module via HTTP requests:

    * Refresh scheduled items across all libraries without loading resources:  

        ```URL
        http://host:port/wps/wcm/myconnect?MOD=RefreshAllItems&allLibraries=true&preserve_dates=true&scheduleOnly=true&loadResources=false
        ```

    * Update security permissions across all libraries while preserving dates:  

        ```URL
        http://host:port/wps/wcm/myconnect?MOD=RefreshAllItems&allLibraries=true&preserve_dates=true&securityOnly=true&removeExistingPerms=&removeVirtualUserPerms=true&inheritPerms=&loadResources=false&processDrafts=false&libSecurity=true
        ```

    * Restrict execution to components within a specific library:  

        ```URL
        http://host:port/wps/wcm/myconnect?MOD=RefreshAllItems&library=mylib&restrictOn=Cmpnt
        ```

    * Refresh scheduled items for the default library:  

        ```URL
        http://host:port/wps/wcm/myconnect?MOD=RefreshAllItems&scheduleOnly=true&loadResources=false
        ```

        !!!note
            The module by default does not load the child nodes. With `loadResources=true` it loads the child nodes like controls and components. This can increase run time for the module dramatically.

    * Fix SiteArea items in a specific library and preserve dates:  

        ```URL
        http://host:port/wps/wcm/myconnect?MOD=refreshAllItems&library=mylib&restrictOn=SiteArea&preserve_dates=true&fix=true
        ```

    * Sample usage to update the PAC Permissions/Tables for a set of items in a library (in this case all Content Links):  

        ```URL
        http://host:port/wps/wcm/myconnect?MOD=refreshAllItems&library=myLibrary&restrictOn=ContentLink&securityOnly=true&preserve_dates=true&removeExistingPerms=true
        ```

2. Sample ConfigEngine invocation:  

    ```bash
    ./ConfigEngine.sh run-wcm-admin-task -Dtask=refreshAllItems -DrestrictOn=WorkflowAction -Dlibrary=mylibraryname
    ```  
