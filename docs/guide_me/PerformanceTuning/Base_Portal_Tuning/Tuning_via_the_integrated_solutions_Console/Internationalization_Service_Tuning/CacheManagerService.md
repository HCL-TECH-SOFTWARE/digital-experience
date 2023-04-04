# Cache Manager Service

The cache manager service in HCL Portal is used to cache a wide variety of types of information in memory.
These caches are somewhat similar to the registries maintained by the registry service, as each type of
information gets its own cache. The key differences are:
    • The information stored in the cache manager service’s caches tends to be more dynamic than the
    information stored in the registry service’s registries.
    • The caches used by the cache manager service are limited in size, and entries will be discarded when
    the caches become full. The registries used by the registry service are not size-limited; they contain
    all entries of the specific data type.
    • Expiry times are managed individually for each entry in the cache, managed by the cache manager
    service. In contrast, when the reload time is reached for a registry, the entire contents of that registry
    are reloaded.

## How to Set

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WP CacheManagerService → Custom properties

Each cache has several configurable options. A full discussion of these options, along with a list of the
caches in HCL Portal 8.5, is given in the Internal Portal Caches section. The table that follows lists the
changes which we made to the CacheManager service for performance benchmarks. Size values are
specified in “number of objects” and lifetime values are specified in “seconds”.

Table: CacheManagerService.properties

|Parameter Default Value|Default Value (CF04) |Value|Used|
|---|----|----|---|
|cacheinstance.com.ibm.wps.ac.AccessControlUserContextCache.size |4000| 6000 |6000|
|cacheinstance.com.ibm.wps.ac.ChildResourcesCache.lifetime |7200 |28800| 28800|
|cacheinstance.com.ibm.wps.ac.CommonRolesCache.size |30000 4|0000 |33000|
|cacheinstance.com.ibm.wps.ac.ExternalOIDCache.lifetime |8640 |28800 |-1|
|cacheinstance.com.ibm.wps.ac.OwnedResourcesCache.enabled |True |False |False|
|cacheinstance.com.ibm.wps.ac.PermissionCollectionCache.lifetime |10240 |14400 |-1|
|cacheinstance.com.ibm.wps.ac.ProtectedResourceCache.lifetime |10143 |14400 |14400|
|cacheinstance.com.ibm.wps.datastore.services.Identification.SerializedOidString.cache.size|2500| 5000 |5000|
|cacheinstance.com.ibm.wps.model.factory.UserSpecificModelCache.size |2000 |6000 |6000|
|cacheinstance.com.ibm.wps.pe.portletentity.lifetime |5800| 28800 |28800|
|cacheinstance.com.ibm.wps.pe.portletentity.size |10000 |5003 |5003|
|cacheinstance.com.ibm.wps.policy.services.PolicyCacheManager.lifetime |7780 |43200 |43200|
|cacheinstance.com.ibm.wps.puma.CommonPrincipalCache.size |10000 |30000 |30000|


## Unused Caches

Even though unused caches use some memory, the amount is minimal so it is not recommended to lower
them below their default size.

## Cache Sizes

For some cache types, performance will be better if the cache size is a prime number due to a lower
probability of cache collisions. For such cache types, the actual size is increased, at runtime, to the next
prime number equal or greater the size specified.