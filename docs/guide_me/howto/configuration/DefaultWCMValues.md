# How to determine default WCM configuration values

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

Web Content Manager (WCM) uses default configuration properties across HCL DX environments. These settings govern repository behavior, cache management, and service operations. This article describes how to determine default WCM configuration values.

## Instructions

To determine default WCM configuration values, perform the following steps:

1. Log in to the IBM WebSphere Integrated Solutions Console (WAS admin console).
2. Navigate to **Resources > Resource Environment > Resource Environment Providers > WCM_WCMConfigService > Custom properties**.
3. Search for a property to review its assigned value.
4. If the parameter is not listed in the Resource Environment Provider (REP), open the `WCMConfigService.properties` file in the following directory to locate the default value: `<wp_profile_root>\PortalServer\wcm\shared\app\config\wcmservices`

!!!note
    Updating the `WCMConfigService.properties` file does not change the active values used by WCM. Add or update values in the Resource Environment Providers instead.
