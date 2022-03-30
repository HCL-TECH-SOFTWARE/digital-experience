# Default cache scope and expiry time settings 

You can set the default cache scope and expiry time settings for HCL Portal in the portal WP Navigator Service.

The following list shows the properties of the portal WP Navigator Service:

-   **public.session**

    Use this property to specify whether an anonymous user always has a public session. This may be useful when a portlet requires a session for anonymous users. The default value is false. To enable public sessions for pages that anonymous users can view without logging in, set this property to true.

    The setting of public.session influences the remote cache scope for public pages. If public.session is set to true, then the cache scope is set to non-shared \(private\). If public.session is set to false, then the cache scope is set to shared \(public\).

    **Note:** Setting public.session to true might reduce performance.

-   **public.expires**

    Use this property to specify the cache expiration time \(in seconds\) for caches outside of HCL Portal and for unauthenticated pages only. These caches must adhere to the HTTP 1.1 specification \(RFC 2616\). The public.expires key specifies the time after which HTTP caches should drop the response. You can further restrict this time by the remote.cache.expiration key.

    This value is used as a maximum value for the cache expiration time and as a global default value for unauthenticated pages. If you also set the property remote.cache.expiration to a value greater than or equal to zero \( 0 \), the smaller one of the two values is used.

    HCL Portal calculates and aggregates the remote cache information, that is the scope and expiration time, by a number of properties contributed by themes, pages, and portlets besides the properties described here. Therefore HCL Portal can do any of the following internally while processing a request:

    -   Reduce the cache lifetime
    -   Reduce the cache scope, for example, from public \(shared\) to private \(non-shared\)
    -   Switch off the overall cachability of pages.
    Therefore this value might not be static for all responses resulting from requests to unauthenticated pages.

    The response of HCL Portal sets the following header fields:

    -   The Expires header with the expiration time added to the system date and time.
    -   The Cache-Control : max-age = header with the expiration time as its parameter.
    The default value specified for this property is 60 seconds. If no value is specified, HCL Portal defaults the value to `60` seconds.

-   **remote.cache.expiration**

    This property specifies the maximum cache lifetime of a page, both public and private, in seconds. Use this property to specify a global value for the expiration of pages in remote caches. Setting this value to zero \( 0 \) switches caching off in remote caches. If the legacy setting is not available, this property is used for authenticated and unauthenticated pages. If the legacy setting is available, then the smaller of the two values is used for unauthenticated pages only. In this case the remote.cache.expiration property is used for authenticated pages in general. If theme, composition, and portlets contribute remote cache information, then the global settings also contribute to the information. In this case the lowest of the values of all contributors is used, including the global settings.

    The default value for this property is `60` seconds. If no value is specified, HCL Portal defaults the value to zero \( `0` seconds\).

-   **remoteCacheInfo.response.header.vary**

    This property specifies the HTTP headers that force a proxy to cache different variants of the same URL. Use this property to specify a comma separated list of HTTP header fields to which HCL Portal should refer in its vary field of the generated HTTP response. This is required to ensure that proxy caches can invalidate entries in their cache if the specified header fields do not match from request to request. The default for this property is `User-Agent`.

-   **public.cache-control**

    This property specifies the HTTP headers that force a proxy to cache different variants of the same URL. Use this property to specify a comma separated list of HTTP header fields to which HCL Portal should refer in its vary field of the generated HTTP response. This is required to ensure that proxy caches can invalidate entries in their cache if the specified header fields do not match from request to request. The default for this property is `no-cache`.

-   **private.cache-control**

    This property specifies the value that is set for the `cache-control` HTTP header field when the portal generates a response in request for private pages. This header field controls the behavior of all caching mechanisms along the request-response chain. The default for this property is `no-cache` .


**Parent topic:**[Caching](../security/tune_cache.md)

