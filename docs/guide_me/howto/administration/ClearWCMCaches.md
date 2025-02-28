# How to clear WCM Caches with ConfigEngine Task

## Applies to

> HCL Digital Experience v8.5 and higher

## Introduction

Sometimes, it is easier to clear WCM Caches from the command line than using the user interface, especially when debugging stale content issues.

## Instructions

With the [ConfigEngine](../../../../deployment/manage/portal_admin_tools/?h=configengine#overview-of-configengine) command it is possible to clear all- or only individual WCM caches.

### Clear all WCM caches

To clear all WCM caches, run the following ConfigEngine task:

```text
 ./ConfigEngine.sh action-wcm-clear-cache-all
```

### Clear individual WCM caches

To clear individual WCM caches, run the ConfigEngine script as following:  

```text
 ./ConfigEngine.sh <task-name>
```

 Please replace `<task-name>` with one of the following available tasks:

- action-wcm-clear-cache-menu  
- action-wcm-clear-cache-nav  
- action-wcm-clear-cache-strategy  
- action-wcm-clear-cache-global  
- action-wcm-clear-cache-module  
- action-wcm-clear-cache-processing  
- action-wcm-clear-cache-site  
- action-wcm-clear-cache-session  
- action-wcm-clear-cache-summary  
- action-wcm-clear-cache-abspath  
- action-wcm-clear-cache-abspathreverse  

### Additional Options

If you have [user.cache.enable=true](../../../manage_content/wcm_configuration/wcm_svc_cfg/srvcfgwcmref_config.md), you can also clear that cache using the following task:  

```text
./ConfigEngine.sh action-wcm-clear-cache-principalinformation
```  

If the Portal/WAS password is not stored in [wkplc.properties](../../../deployment/manage/cfg_property_files/wkplc-dita.md), you can include Portal/WAS password using the following command:  

```text
./ConfigEngine.sh  action-wcm-clear-cache-summary  -DPortalAdminPwd=<password1>  -DWasPassword=<password2>
```
Replace the `<password1>` & `<password2>` to match your Portal administration and WebSphere Application Server administration password.  
