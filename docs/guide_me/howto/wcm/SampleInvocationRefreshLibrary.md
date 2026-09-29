# How to use `RefreshAllItems` for WCM libraries

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

The `RefreshAllItems` module processes items across Web Content Manager (WCM) libraries without modifying content. Executing this module updates security permissions, refreshes scheduled items, resolves item errors, or triggers reindexing across WCM items. This article describes how to run the `RefreshAllItems` module using HTTP requests or ConfigEngine tasks.

## Instructions

!!! important
    Take a coordinated backup of the HCL DX file system and database before executing this task. Contact [HCL Support](https://support.hcl-software.com/csm){target="_blank"} before running this module in a production environment.

### Updating items using HTTP requests

- Refresh scheduled items across all libraries without loading resources:  

    ```URL
    http://host:port/wps/wcm/myconnect?MOD=RefreshAllItems&allLibraries=true&preserve_dates=true&scheduleOnly=true&loadResources=false
    ```

- Update security permissions across all libraries while preserving dates:  

    ```URL
    http://host:port/wps/wcm/myconnect?MOD=RefreshAllItems&allLibraries=true&preserve_dates=true&securityOnly=true&removeExistingPerms=&removeVirtualUserPerms=true&inheritPerms=&loadResources=false&processDrafts=false&libSecurity=true
    ```

- Restrict execution to components within a specific library:

    ```URL
    http://host:port/wps/wcm/myconnect?MOD=RefreshAllItems&library=mylib&restrictOn=Cmpnt
    ```

- Refresh scheduled items for the default library:

    ```URL
    http://host:port/wps/wcm/myconnect?MOD=RefreshAllItems&scheduleOnly=true&loadResources=false
    ```

    !!!note
        By default, the module does not load child nodes. Setting `loadResources=true` loads child nodes such as controls and components, which can significantly increase module execution time.

- Fix site area items in a specific library while preserving dates:

    ```URL
    http://host:port/wps/wcm/myconnect?MOD=refreshAllItems&library=mylib&restrictOn=SiteArea&preserve_dates=true&fix=true
    ```

- Update Portal Access Control (PAC) permissions or tables for specific library items (such as content links):

    ```URL
    http://host:port/wps/wcm/myconnect?MOD=refreshAllItems&library=myLibrary&restrictOn=ContentLink&securityOnly=true&preserve_dates=true&removeExistingPerms=true
    ```

### Updating items using ConfigEngine tasks

Restrict execution to workflow action items within a specific library:

```bash
./ConfigEngine.sh run-wcm-admin-task -Dtask=refreshAllItems -DrestrictOn=WorkflowAction -Dlibrary=mylibraryname
```  
