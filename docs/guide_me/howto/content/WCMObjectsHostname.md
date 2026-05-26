# How DAM asset URLs will be used after an library import from other environment

## Applies to

> HCL Digital Experience 9.5 and higher  

## Introduction

After an library import from other environment, some items contain an absolute URL in the `ibmcontentwcm:digitalAsset`. This is however not in every item. Some items contain a relative path also. This article describe the reason for it.  

## Instructions

The rendering behavior for end users will be controlled by the assetUrl and that is configured through `dam.host.overwrite` / `dam.host.relative` parameters per this documentation [Staging DAM to rendering environments](../../../manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging.md){target="_blank"}.

Without `dam.host.overwrite` or `dam.host.relative`, the original DAM asset URL will be used.

Use the `dam.host.relative` and set it to `true`. As explained in the doc below, if the property is in place the returned DAM references have no hostname or port. For details, please read [Using WCM with DAM staging](../../../manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging.md/#using-wcm-with-dam-staging){target="_blank"}.

Meanwhile, there's also a configuration to specify custom host for a DAM asset and it is documented in [Setting a unique custom URL for a media asset](../../../manage_content/digital_assets/usage/managing_dam/modify_dam/dam_set_unique_custom_URL_media_asset.md/#setting-a-unique-custom-url-for-a-media-asset){target="_blank"}.

The absolute URL will be overwritten as soon as `dam.host.overwrite` or `dam.host.relative` is enabled, and the server is restarted to pick up the change. The absolute URLs in `ibmcontentwcm:digitalAsset` can be ignored, if `dam.host.overwrite` or `dam.host.relative` is set.
