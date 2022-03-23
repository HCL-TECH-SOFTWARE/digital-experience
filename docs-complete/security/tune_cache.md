# Caching

Caching affects the performance of your HCL Digital Experience environment. Learn about some simple ways to improve the caching performance. After you have reviewed this content, you should also review the HCL Portal and HCLWeb Content Manager Performance Tuning Guide which provides more information about caches for both HCL Portal and HCL Web Content Manager.

The HCL Portal and Web Content Manager Performance Tuning Guide provides information about caches for HCL Portal and HCLWeb Content Manager. Choose the latest tuning guide for information:

[Essential tuning and performance resources](http://www-10.lotus.com/ldd/portalwiki.nsf/xpViewCategories.xsp?lookupName=Performance)

Use the following files to create an effective cache for your environment:

-   **[Caching pages shared by multiple users ](../security/cache.md)**  
If you use a proxy server such as WebSphere Edge Server and your system has content that can be shared among multiple users, you can improve performance by caching this shared content.
-   **[cookie.ignore.regex parameter ](../security/cookie.md)**  
Use the cookie.ignore.regex parameter to configure which cookies to ignore from the header field. Ignoring these cookies excludes them from the digest computation.
-   **[Cache scope ](../security/cache_scope.md)**  
The cache scope determines where the content is cached.
-   **[Expiry time ](../security/expiry_time.md)**  
The expiry time determines how long the page is stored in a cache.
-   **[Cache scope and expiry time settings ](../security/cache_settings.md)**  
There are resources that contribute to the overall remote cache information on a page.
-   **[Default cache scope and expiry time settings ](../security/cache_default.md)**  
You can set the default cache scope and expiry time settings for HCL Portal in the portal WP Navigator Service.
-   **[Factors affecting cache scope and expiry time ](../security/cache_factors.md)**  
Multiple factors can affect the cache scope and expiry time for a page.
-   **[Cache limitations ](../security/cache_limits.md)**  
When tuning your environment to improve performance, review the limitations to ensure success.
-   **[Security issues ](../security/cache_security.md)**  
Storing authenticated pages in a shared cache introduces security holes. If a malicious user discovered the URL for an authenticated page, that user could read pages containing private information.
-   **[Troubleshooting the cache ](../security/cache_trouble.md)**  
In general, you should monitor the cache hit rate on the proxy server and adjust the cache size appropriately. If the hit rate is not what you expected, increase the cache size.

**Parent topic:**[Configuring portal behavior ](../admin-system/adptlcfg.md)

**Related information**  


[Back button behavior ](../admin-system/backbut.md)

