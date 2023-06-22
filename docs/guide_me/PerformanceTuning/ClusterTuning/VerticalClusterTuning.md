# Vertical Cluster Tuning

Vertical clusters behave like horizontal clusters and can use either memory-to-memory or database session persistence. See the previous sections on how to tune session persistence in a vertical cluster.

## Tuning via the Integrated Solutions Console

### DynaCache
In addition to the WebSphere properties mentioned in the previous sections, the dynamic cache service
(DynaCache) should also be tuned when vertically clustering more than one node in a single physical
system.

First, the cache size needs to be increased. Then, several custom properties need to be set.

#### How to Set Cache Size
In the WebSphere Integrated Solutions Console
Servers -> Server Types -> WebSphere application servers -> WebSphere_Portal -> Container Services ->
Dynamic cache service

Set `Cache size` to `3500`.

#### How to Set Properties
In the WebSphere Integrated Solutions Console
Servers -> Server Types -> WebSphere application servers -> WebSphere_Portal -> Container Services ->
Dynamic cache service -> Custom properties -> New

Create the following new properties:

- Name: com.ibm.ws.cache.CacheConfig.cacheEntryWindow
    Value: 10
- Name: com.ibm.ws.cache.CacheConfig.cacheInvalidateEntryWindow
    Value: 10