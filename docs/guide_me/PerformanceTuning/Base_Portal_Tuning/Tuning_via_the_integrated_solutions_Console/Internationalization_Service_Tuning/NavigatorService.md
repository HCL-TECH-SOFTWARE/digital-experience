# Navigator Service

The navigator service manages the content model for unauthenticated users, which controls the pages
those users are able to see. This content model is periodically reloaded by WebSphere Portal. New pages
which are visible to unauthenticated users will not be available until the next reload occurs. Our
environment assumes a low rate of change for pages, so we set this reload to only occur once per hour. In a
production environment where new pages for unauthenticated users are rarely created, setting this reload
time to an hour or more will give better performance. In a test or staging environment where updates to
unauthenticated pages need to be seen more often, a lower reload time is more appropriate.

This service also controls the HTTP cache-control headers which will be sent on unauthenticated pages.
While our environment did not exploit HTTP page caching, increasing these cache lifetimes in a production
environment can reduce load on the Portal. For more discussion of the use of HTTP cache-control headers
with WebSphere Portal, refer to https://help.hcltechsw.com/digitalexperience/9.5/security/tune_cache.html.

## How to Set

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WP NavigatorService → Custom properties


Table: Navigator Service Settings

|Parameter| Default Value|Value Used|Definition|
|---|---|---|----|
|public.expires <br>(seconds)|60| 3600 | Determines cache expiration time for unauthenticated pages in browser caches and proxy caches. If the setting remote.cache.expiration is also set to a value greater than or equal to 0, the smaller one of the two values is used.|
|public.reload <br>(seconds)|60| 3600| WebSphere Portal maintains an internal cache of the list of pages visible to unauthenticated users, and the arrangement of portlets on those pages. This controls how frequently that internal cache is refreshed. Note, however, that this is not caching the content of those pages – simply their layout.|
|remote.cache. expiration <br>(seconds) |10800 |28800 |Determines cache expiration for caches outside of the Portal server for authenticated as well as for unauthenticated pages|