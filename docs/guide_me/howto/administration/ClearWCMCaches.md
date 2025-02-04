# How to clear WCM Caches with ConfigEngine Task

## Applies to

> HCL Digital Experience v8.5 and higher

## Introduction

Sometimes it is easier to clear WCM Caches from the command line than using a UI. Especially useful when debugging stale content issues.

## Instructions

To clear all WCM Caches run the following [ConfigEngine](https://help.hcl-software.com/digital-experience/9.5/latest/guide_me/wpsdirstr/?h=Configuration_Engine_profile_directory#configuration-engine-profile-directory) task:

`./ConfigEngine.sh action-wcm-clear-cache-all`

To clear individual WCM Caches, run one of these tasks instead:

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

If you have [user.cache.enable=true](https://help.hcl-software.com/digital-experience/9.5/latest/manage_content/wcm_configuration/wcm_svc_cfg/srvcfgwcmref_config/?h=user.cache.enable) you may also want to clear that cache using task:

`./ConfigEngine.sh action-wcm-clear-cache-principalinformation`

You may need to also include the Portal/WAS password if not stored in [wkplc.properties](https://help.hcl-software.com/digital-experience/9.5/latest/deployment/manage/cfg_property_files/wkplc-dita/?h=wkplc.p), for example:

`./ConfigEngine.sh  action-wcm-clear-cache-summary  -DPortalAdminPwd=myPassword  -DWasPassword=myPassword`
