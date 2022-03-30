# Factors affecting cache scope and expiry time 

Multiple factors can affect the cache scope and expiry time for a page.

The remote-cache-scope and remote-cache-expiration of a rendered page view is calculated as the minimum of the following factors:

-   Cache scope and expiry time specified for the page
-   Cache scope and expiry time of the portlets on the page

    **Note:** If any of the portlets on a page can only be cached in a private cache, then the entire page can only be cached in a private cache. A page cannot be stored in a shared cache unless all portlets on the page can also be stored in a shared cache. Make sure cache settings for portlets and pages are consistent.

-   Cache scope and expiry time of the theme
-   Global values as defined in the Navigator Service in the WebSphere® Integrated Solutions Console.

**Parent topic:**[Caching](../security/tune_cache.md)

