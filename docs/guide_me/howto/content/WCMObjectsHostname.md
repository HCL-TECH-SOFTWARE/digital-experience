# How to manage DAM asset URLs after a library import from another environment

## Applies to

> HCL Digital Experience v9.5 and higher  

## Introduction

After importing a library from another environment, some items contain an absolute URL in the `ibmcontentwcm:digitalAsset` attribute, while others contain a relative path. This variation occurs based on how the Digital Asset Management (DAM) repository handles asset references. This article explains how to configure DAM asset URL rendering parameters to ensure consistent asset pathing.

## Instructions

To configure DAM asset URL parameters, perform the following steps:

1. Enable either the `dam.host.relative` or `dam.host.overwrite` parameter based on your environment requirements:

    - To remove the hostname and port from returned DAM references, set `dam.host.relative` to `true`. For more information, refer to [Using WCM with DAM staging](../../../manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging.md#using-wcm-with-dam-staging).
    - To specify a custom host for a DAM asset, configure `dam.host.overwrite`. For more information, refer to [Setting a unique custom URL for a media asset](../../../manage_content/digital_assets/usage/managing_dam/modify_dam/dam_set_unique_custom_URL_media_asset.md#setting-a-unique-custom-url-for-a-media-asset).

2. Restart the server to apply the configuration changes.

    !!! note
        The system overwrites the absolute URL as soon as the server restarts. You can safely ignore the absolute URLs in `ibmcontentwcm:digitalAsset` once either parameter is set. For more information on staging configurations, refer to [Staging DAM to rendering environments](../../../manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging.md).
