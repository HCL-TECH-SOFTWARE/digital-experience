# How to clear WCM caches with ConfigEngine task

## Applies to

> HCL Digital Experience v8.5 and higher

## Introduction

Sometimes, it is easier to clear WCM caches from the command line than using the user interface, especially when debugging stale content issues. With the [ConfigEngine](../../../deployment/manage/portal_admin_tools/index.md#overview-of-configengine) command, you have the option to clear all WCM caches or clear individual WCM caches.

## Instructions

### Clearing all WCM caches

To clear all WCM caches, run the following ConfigEngine task:

```text
 ./ConfigEngine.sh action-wcm-clear-cache-all
```

### Clearing individual WCM caches

To clear individual WCM caches, run the ConfigEngine script as following:  

```text
 ./ConfigEngine.sh <task-name>
```

Make sure to replace `<task-name>` with one of the following available tasks:

- `action-wcm-clear-cache-menu`  
- `action-wcm-clear-cache-nav`  
- `action-wcm-clear-cache-strategy`  
- `action-wcm-clear-cache-global`  
- `action-wcm-clear-cache-module`  
- `action-wcm-clear-cache-processing`  
- `action-wcm-clear-cache-site`  
- `action-wcm-clear-cache-session`  
- `action-wcm-clear-cache-summary`  
- `action-wcm-clear-cache-abspath`  
- `action-wcm-clear-cache-abspathreverse`  

### Additional options

- If you have [`user.cache.enable=true`](../../../manage_content/wcm_configuration/wcm_svc_cfg/srvcfgwcmref_config.md), you can also clear that cache using the following task:  

    ```text
    ./ConfigEngine.sh action-wcm-clear-cache-principalinformation
    ```  

- If the Portal/WAS password is not stored in [wkplc.properties](../../../deployment/manage/cfg_property_files/wkplc-dita.md), you can include Portal/WAS password using the following command:  

    ```text
    ./ConfigEngine.sh  action-wcm-clear-cache-summary  -DPortalAdminPwd=<password1>  -DWasPassword=<password2>
    ```

    Replace `<password1>` and `<password2>` with your Portal administration and WebSphere Application Server administration password respectively.  

???+ info "Related information"
    - [Cache parameters](../../../manage_content/wcm_configuration/custom_caching/wcm_dev_caching_cache-parameters.md)
    - [Caching options](../../../manage_content/wcm_configuration/cfg_webcontent_delivery_env/caching_options/index.md)
    - [Performance Tuning Guide for Traditional Deployments](../../performance_tuning/traditional_deployments.md)
