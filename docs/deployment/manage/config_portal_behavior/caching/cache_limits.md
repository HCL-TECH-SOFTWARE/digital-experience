# Cache limitations

When tuning your environment to improve performance, review the limitations to ensure success.

-   For best results, use WebSphere Application Server Edge Components version 6.0.0.1 \(or later\), version 5.1.0.7 \(or later\), version 5.0.2.30 \(or later\) for the proxy server. Previous versions do not serve multiple markup types from the same cache. If there are multiple requests for the same page, but with different markup, the cache is not used. These versions of WebSphere Application Server Edge Components correct this problem.
-   If your HCL Portal serves only one markup, make sure the vary is set appropriately. If your HCL Portal serves multiple markups, set the vary appropriately and use a larger cache size. Use remoteCacheInfo.response.header.vary = space separated list of other HTTP header fields to appropriately set the vary.

    **Note:** Enter any HTTP header field names; you must use the HTTP 1.1 specification. The two most common HTTP headers to specify here are vary = accept-language user-agent.

    **Note:** The Vary value indicates the set of request-header fields that force a proxy to cache different variants of the same URL.

-   If your HCL Portal serves only one language, make sure the vary is set appropriately. If your HCL Portal serves multiple languages, set the vary appropriately and use a larger cache size. Use remoteCacheInfo.response.header.vary = accept-language to appropriately set the vary.
-   Only JSR portlets can override the cache lifetime setting at run time.

**Note:** With the previous settings, it is possible to generate an HTTP response header like Cache-Control: max-age=-1, which indicates an unlimited cache expiration when a page is rendered. This is beyond the HTTP 1.1 specification but if a proxy cache does not support an unlimited cache expiration, HCL Portal supports it. If the cache infrastructure does not properly work with this response header, set the remote.cache.expiration value in the WP NavigatorService to a large value. To set an unlimited cache expiration is not possible if the cache infrastructure does not support it.


