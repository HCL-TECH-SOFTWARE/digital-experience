# Pre-render methods

Pre-rendering can be configured to run automatically, or you can manually pre-render a website by using a URL.

**Administrator access:** To pre-render a website, you must have administrator access to the library that contains the site area.

## Automatically pre-rendering a website

Pre-rendering can be run according to the cacher settings specified for the **WCM WCMConfigService** service as part of the pre-rendering configuration.

## Manually pre-rendering a website

Pre-rendering can also be initiated through the URL interface. For example:

http://host\_name:port\_number/wps/wcm/connect?MOD=Cacher&SRV=cacheSite&sitearea=sitearea\_name&library=library\_name

|Service|Required Parameters|Optional Parameters|
|-------|-------------------|-------------------|
|SRV=cacheSiteInitializes pre-rendering for the site area with a delay as given \(in seconds\).

|`sitearea=`site area name|DELAY=<delay\>LIBRARY=<library\>

**Note:** If no library is specified, the default library is used, as specified by the `defaultLibrary` property in the `WCM WCMConfigService` service.

|
|SRV=flushSiteCacheClears \(flushes\) the site cache. Deletes all pre-rendered data.

|`sitearea=`site area name|LIBRARY=<library\>

**Note:** If no library is specified, the default library is used, as specified by the `defaultLibrary` property in the `WCM WCMConfigService` service.

|
|SRV=flushPageCacheFlushes the page from the site cache. The site area and page are determined from the request URL.

| | |
|No SRV specifiedThe CacherModule attempts to retrieve the page from the cache.

| | |

## Pre-rendering individual content items

You can also pre-render individual content items by using the following URL:

http://host\_name:port\_number/wps/wcm/connect/library\_name/site\_area\_name/content?MOD=Cacher

**Note:**

-   To pre-render individual content items, the site area that is specified in the URL must either be a site area set in connect.moduleconfig.cacher.task.siteareas in the **WCM WCMConfigService** service, or you must have previously manually pre-rendered the site area using "SRV=cacheSite" so that the site area already exists in the location you pre-render to.

**Parent topic:**[Pre-rendered delivery](../wcm/wcm_config_delivery_pre-rendered.md)

**Related information**  


[Setting service configuration properties](../admin-system/adsetcfg.md)

[Pre-rendering options](../wcm/wcm_config_delivery_pre-rendered_enable.md)

