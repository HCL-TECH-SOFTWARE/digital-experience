# How to add profiles to WCM items using ProfileEnablement utility

## Applies to

> HCL Digital Experience v9.5 and Later

## Introduction

This document provide samples to add profiles to Web Content Manager (WCM) items using the Profile Enablement utility.

## Instructions

On some occasions, required profiles are found to be missing from Web Content Manager (WCM) items.

Sample URLs to invoke the profileEnablement module:

```text
http://<host>:<port>/wps/wcm/myconnect/?MOD=profileEnablement&library=[NEW_LIBRARY]&restrictOn=Cmpnt&fix=true&mode=remove
```

```text
http://<host>:<port>/wps/wcm/myconnect?MOD=ProfileEnablement&library=&fix=false&restrictOn=content&preserve_dates=true
```

To execute the module via ConfigEngine task, see the following documentation:

[Running the profile enablement tool | HCL Digital Experience](../../../manage_content/wcm_configuration/wcm_adm_tools/wcm_admin_profile_enable.md){target="_blank"}
