# Cache parameters

Use the cache parameters in HCL Web Content Manager tags and URLs to specify whether the retrieved data is cached or not. If it is cached, how it is cached. The cache parameter is not mandatory.

Custom caching parameters can be used only when a server's default web content cache is set to none or advanced caching. If basic caching is used as your default web content cache, custom caching cannot be used. Custom caching can be used to set cache parameters for basic, advanced, and data caches. When custom caching is used in a connect tag, the caching applies to the data that is being retrieved with the connect tag. When custom caching is used in a URL request, the caching applies to the entire page that is being requested.

With HCL DX 9.5 Container Update CF195 and later releases, new options are available to update the advanced cache as a result of the WCM syndication processes. Details are provided in this section.

|Basic caching|Advanced Caching|Data caching|
|-------------|----------------|------------|
|CACHE=SITE  
 CACHE=SESSION  
 CACHE=NONE

|CONTENTCACHE=SITE   
 CONTENTCACHE=SESSION   
 CONTENTCACHE=USER  
 CONTENTCACHE=SECURED  
 CONTENTCACHE=PERSONALIZED   
 CONTENTCACHE=NONE

|CONNECTORCACHE=SITE   
 CONNECTORCACHE=SESSION   
 CONNECTORCACHE=NONE

|

**Examples:**

```
<CONNECT MOD=Web SRV=HTML ACTION=http://www.ibm.com CACHE=SITE >
```

```
http://host:port/wps/wcm/connect/library/sitearea/content?cache=site&contentcache=session
```

## Custom caching strategies

-   When you apply custom caching to static content, you would mostly use `CACHE=SITE`, `CACHE=SESSION` or `CONTENTCACHE=USER`.
-   When User Groups are used in implementing site security, you can use the `SECURED` custom caching strategy: `CONTENTCACHE=SECURED`.
-   When Categories and/or Keywords, along with User Groups, are used for customization of your site, you can use the `PERSONALIZED` custom caching strategy: `CONTENTCACHE=PERSONALIZED`.
-   If your Server's default web Content Cache is set to Advanced, you must use `CONTENTCACHE=NONE` to disable caching.
-   If you retrieve external data, you must use `CONNECTORCACHE=NONE` to disable caching.

## CacheKey parameter

The CacheKey parameter is used when caching content with the basic cache. A CacheKey is used as a key instead of a URL. This strategy is useful if you have multiple URLs for the same page but want it cached only once. This reduces the amount of memory that is used by the cache.

**Example:**

The following URLs use the same web page called news.html.

```
<CONNECT MOD=Web SRV=HTML ACTION=http://www.ibm.com/news.html 
CACHE=SITE CACHEKEY=news >

<CONNECT MOD=Web SRV=HTML ACTION=http://www.ibm.com.au/news.html 
CACHE=SITE CACHEKEY=news >

<CONNECT MOD=Web SRV=HTML ACTION=http://www.lotus.com/news.html 
CACHE=SITE CACHEKEY=news >
```

In this example, "news" is used as the CacheKey to store the value of the response from these connect tags. This means that news.html is cached only once instead of being cached three separate times.

## Caching, content updates, and syndication

When an item is updated, either directly or as a result of syndication, no cache is updated. The rendered items are not updated until each configured cache is expired. It is important to choose cache timeout parameters that complement your syndication strategy.

In HCL DX 9.5 Container Update CF195, CF20, and later releases, new options are available to flush the Web Content Manager advanced cache as a result of syndication operations.

See the [Web content cache types](wcm_config_delivery_caching_types.md) Help Center topic for details on Web Content Manager cache types.

The Web Content Manager Advanced Cache supports the capability to store the HTML required to render that piece of content in an *Advanced Cache* so that WCM doesn't have to reconstruct or process it again. In the next render request, if the content exists in the Advanced Cache, then WCM renders the HTML from the *Advanced Cache* and doesn't reconstruct all the details of that content item, which could include one or more calls to the JCR database. The savings in render time \(and CPU time\) can be significant.

Traditionally, the WCM *Advanced Cache* is only invalidated by the expiration of a timer. That timer is set when content is placed in the *Advanced Cache*. As long as the item is in the *Advanced Cache*, it is rendered from there regardless of the updates in the JCR database. Typically, these updates might happen either through syndication or a direct content edit by an author using the Web Content Manager authoring interfaces.

In DX Container Update CF195 and CF20, two new Web Content Manager Advanced Cache Flush functions are available:

1.  **Flush WCMAdvanced Cache on Item Update**: This option enables the removal of content items existing in the *Advanced Cache* if that item is updated through syndication or through WCM authoring interfaces.

    **Note:** Some items in the Web Content Manager *Advanced Cache* can refer to higher level artifacts, such as a DX site area or a menu. If content contained in this higher-level artifact is changed, it doesn't invalidate the higher-level artifact. This pattern is common in artifacts such as Presentation Templates that might refer to all of the content inside a site area, or it might refer to a menu that would iterate over a site area and select content matching a filter in the menu.

2.  **Flush WCM Advanced Cache on Subscription Event**: This option enables flushing the entire Web Content Manager *Advanced Cache* upon any non-empty subscription event. This option must be used with care, because clearing the entire Web Content Manager *Advanced Cache* will cause delays in performance of any access to WCM items not in the cache. When an item is NOT in the *Advanced Cache*, WCM must process the reference to that item and generate any HTML needed to access it. Once the item is processed the first time, the resulting HTML is put into the *Advanced Cache*. This means that as long as the HTML for the item resides in the *Advanced Cache*, WCM doesn't need to retrieve the item from the JCR, process it, and generate the HTML to render it.

    Enabling and use of this option should be done with care, to ensure that non-empty syndication actions are relatively rare \(for example, not more than once or twice a day\).


How to enable these options:

1.  To enable the **Flush WCMAdvanced Cache on Item Update** function, a new [Resource Environment Provider](../admin-system/adsetcfg.md) entry must exist in the **WCM WCMConfigService** Resource Entry Provider. It is defined as follows:

    Name: `wcm.cache.flush.advanced.cache.on.item.update`

    Value: `true`

    If this name/value pair is defined in the WebSphere Resource Environment Provider, either an update or a rename of the content item causes a flush for that item in the *Advanced Cache*. Either of these two actions can take place on a syndication of that item or a simple change of that item on the DX server in which it is cached \(for example, from the WCM Authoring portlet\). In either case, if the item exists in the Web Content Manager *Advanced Cache*, that entry in the *Advanced Cache* is invalidated, forcing WCM to recompute the HTML for that item when next referenced.

2.  To enable **Flush WCM Advanced Cache on Subscription Event** function, a new Resource Environment Provider entry must be defined in the **WCM WCMConfigService** Resource Environment Provider, as follows:

    Name: `wcm.cache.flush.advanced.cache.on.subscription.event`

    Value: `true`


Note that it is possible to have **both** options enabled at the same time. However, the second option flushes the whole cache, which renders the first option useless.

