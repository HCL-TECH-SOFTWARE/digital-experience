# HTTP caching 

The remote REST service for PUMA sets the `Cache-Control` HTTP header in the response to `public` for resources that are served without authentication, and to `private` for URIs that require authentication.

The expiration time is defined by the `max-age` directive in the same header and can be configured as a number in seconds within the `wp.user.restservice.maxage` environment entry of the remote REST service for PUMA enterprise application. This is called **UserProfileRESTServlet** in the WebSphere® Integrated Solutions Console. It defaults to the value `3600` seconds, that is equivalent to one hour.

To altogether prevent any caching of PUMA REST responses, set `wp.user.restservice.block.all.caching = true`. So configured, the PUMA REST service will include `'Cache-Control: no-store'` headers on responses.

**Parent topic:**[How the portal implements the remote PUMA REST service ](../dev/uprof_rest_wpspec.md)

