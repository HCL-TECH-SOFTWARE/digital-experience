# How to determine the default WCM configuration values

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

This documentation provides details on how to determine the WCM default configuration values.

## Instructions

Most of the WCM configuration values are populated here:

`Dmgr/WAS Admin Console > Resources > Resource Environment > Resource Environment Providers > WCM_WCMConfigService > custom properties.`

However, for the parameters not populated in the REP (Resource Environment Provider), to determine the default values look in the file WCMConfigService.properties located here:

`<wp_profile_root>\PortalServer\wcm\shared\app\config\wcmservices`

Note you cannot change the values used by WCM by updating this file.  Instead add or update the values in the REP.
