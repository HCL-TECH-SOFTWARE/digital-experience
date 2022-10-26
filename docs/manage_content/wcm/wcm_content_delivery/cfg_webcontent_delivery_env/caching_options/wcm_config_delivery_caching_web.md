# Web content cache configuration

You can tailor the caching behavior of your web content environment by changing configuration settings such as the default cache type and expire settings.

You define and manage web content cache options in the `WCM WCMConfigService` service by using the WebSphere® Integrated Solutions Console.

Go to **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **WCM WCMConfigService** \> **Custom Properties**.

## Setting the default web content cache type

The default web content caching environment for your web content server is specified by the following properties:

-   `connect.businesslogic.defaultcache`
-   `connect.moduleconfig.ajpe.contentcache.defaultcontentcache`

|Parameter|`defaultcache` value|`defaultcontentcache` value|
|---------|:------------------:|:-------------------------:|
|No caching:|`false`|`None`|
|Basic cache:|`true`|Not specified|
|Site caching:|`false`|`Site`|
|Session caching:|`false`|`Session`|
|User caching:|`false`|`User`|
|Secured caching:|`false`|`Secured`|
|Personalized caching:|`false`|`Personalized`|

## Further default web content cache parameters

Web content cache configuration settings are specified by the following properties in the `WCM WCMConfigService` service.

|Cache Type|Properties|
|----------|----------|
|Basic cache:|`connect.businesslogic.defaultcacheexpires``connect.businesslogic.defaultcache`|
|Advanced cache: All|`connect.moduleconfig.ajpe.contentcache.defaultcontentcache``connect.moduleconfig.ajpe.contentcache.contentcacheexpires`|
|Advanced cache: Session cache only|`connect.sessioncacheconfig.memcachesize`|

|Cache Property|Details|
|--------------|-------|
|contentcacheexpires|This property sets the default expiry for all advanced caches. It can be either a relative period or an absolute date and time.|
|defaultcache|If `true`, basic caching is enabled. If `false` or missing, advanced caching is enabled.|
|defaultcacheexpires|This property sets the default expiry for the basic cache. It can be either a relative period or an absolute date and time.|
|defaultcontentcache|If the advanced cache is enabled, the default advanced cache is set here.|
|resourceserver.browserCacheMaxAge|This property is used to define the maximum time that an item is stored in a web browser cache.|
|resourceserver.maxCacheObjectSize|This property is used to define the maximum size of objects that can be cached in kilobytes. By default this property is set to 300.|
|resourceserver.cacheExpiryDate|Specifies the expiry date of resources cached by the resource server module. Default value: REL 1M|

## Additional Cache Keys

These additional cache keys are used to customize and optimize both basic and advanced caching.

|Key|Purpose|Prerequisites|
|---|-------|-------------|
|deviceclass|Enable caching based on device type.|8.5 CF04 \(PI27550\)|
|locale|Enable caching based on browser locale.|8.5|
|portalcontext|Enable caching based on portal context.|8.5 CF02 \(PI20951\)|
|portalmapping|Enable caching based on portal mapping.|8.5 CF02 \(PI20951\)|
|portletcontext|Enable caching based on portlet context.|8.5 CF02 \(PI20951\)|
|portletid|Enable caching based on portlet instance.|8.5 CF CF10|

To configure these additional cache keys, add the required caching keys to the value of the property, using commas to separate each value:

-   **Basic Caching:**

    connect.businesslogic.cache.additionalcachekeys.requestattributes

-   **Advanced Caching:**

    connect.moduleconfig.ajpe.contentcache.additionalcachekeys.requestattributes


## Cache expire time formats

When you use the cache expire settings that are listed in Table 3, you can specify either a relative time, or absolute time:

-   REL \{integer-value\}\{units\}
-   ABS \{date-format-string\}

\{units\} =

-   d\|D for days
-   m\|M for months
-   s\|S for seconds
-   h\|H for hours

\{date-format-string\} =

-   Mon, 06 Nov 2000 09:00:00 GMT
-   Monday, 06-Nov-00 09:00:00 GMT
-   Mon Nov 6 09:00:00 2000
-   6 Nov 2000 9:00 AM

!!! note
    The last two formats assume GMT.

Examples:

-   contentcacheexpires="REL 300S"
-   contentcacheexpires="ABS Mon, 06 Nov 2000 09:00:00 GMT"


