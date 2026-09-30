# How to add profiles to WCM items

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

Required profiles may be missing from Web Content Manager (WCM) items within HCL Digital Experience (DX). This article explains how to add profiles to WCM items using the `profileEnablement` utility.

## Instructions

To add profiles to WCM items, perform the following steps:

1. Identify your environment's specific values for the following URL placeholders:
    - `<host>` is the host name or IP address of your HCL DX server.
    - `<port>` is the port number used to access your server.
    - `[NEW_LIBRARY]` is the name of the specific WCM library.

2. Construct the URL based on your required action:

    - To execute and add missing profiles to components, use the following URL:

        ```url
        http://<host>:<port>/wps/wcm/myconnect/?MOD=profileEnablement&library=[NEW_LIBRARY]&restrictOn=Cmpnt&fix=true&mode=remove
        ```

    - To run the module in report mode to preview the items without applying changes, use the following URL:

        ```url
        http://<host>:<port>/wps/wcm/myconnect?MOD=ProfileEnablement&library=&fix=false&restrictOn=content&preserve_dates=true
        ```

3. Enter the URL in the browser to trigger the `profileEnablement` module.

!!!note
    To execute the module using a ConfigEngine task instead of a browser URL, refer to [Running the profile enablement tool](../../../manage_content/wcm_configuration/wcm_adm_tools/wcm_admin_profile_enable.md).
