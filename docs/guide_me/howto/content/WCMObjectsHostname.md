# Some items contain an absolute URL in the ibmcontentwcm:digitalAsset after import library from other environment

## Applies to

> HCL Digital Experience 9.5 and higher  

## Introduction

Some items contain an absolute URL in the `ibmcontentwcm:digitalAsset` after import library from other environment. This is however not in every item. Some items contain a relative path also.

## Instructions

The rendering behavior for end users will be controlled by the assetUrl and that is configured through `dam.host.overwrite` / `dam.host.relative` parameters per this documentation:

[Staging DAM to rendering environments](https://opensource.hcltechsw.com/digital-experience/CF223/manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging/)

Without `dam.host.overwrite` or `dam.host.relative`, the original DAM asset URL will be used

Use the `dam.host.relative` and set it to true? As explained in the doc below, if the property is in place the returned DAM references have no hostname or port.

[Using WCM with DAM staging](https://opensource.hcltechsw.com/digital-experience/CF223/manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging/#using-wcm-with-dam-staging)

Meanwhile, there's also a configuration to specify custom host for a DAM asset and it is documented in the page below:

[Setting a unique custom URL for a media asset](https://opensource.hcltechsw.com/digital-experience/CF223/manage_content/digital_assets/usage/managing_dam/modify_dam/dam_set_unique_custom_URL_media_asset/#setting-a-unique-custom-url-for-a-media-asset)

The absolute URL will be overwritten as soon as `dam.host.overwrite` or `dam.host.relative` is enabled, and the server is restarted to pick up the change. We can ignore the absolute URLs in `ibmcontentwcm:digitalAsset` if `dam.host.overwrite` or `dam.host.relative` is set.
