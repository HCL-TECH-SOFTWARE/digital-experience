# First Level Caches

In many hardware and software architectures, caches are often organized into hierarchies. For some Portal
caches, typically WebSphere DynaCaches, “first level caches” are defined which can improve performance,
especially if many cache retrievals for a limited set of values are performed.

In special, performance critical situations, performance may improve significantly when defining first level
caches or increasing the sizes of first level caches and cache miss caches. You should do this with care and
only if you have a test setup where you can measure the performance of your Portal system.

Two kinds of first level caches exist in the current version of Portal:
- Implicitly defined first level caches.
- Explicitly defined first level caches.

For a DynaCache used by Portal, an implicit first level cache or an explicit first level cache can be defined
but not both. You can change the size of a first level cache or disable it but you should not replace an
explicit first level cache by an implicit first level cache or vice versa.

In WebSphere Portal, DynaCaches are used as distributed caches, that means if on one node of a Portal
cluster, a key-value pair is deleted in a DynaCache, then invalidation events are sent to the other nodes to
remove obsolete key-value pairs from both, the DynaCaches and the first level caches of the other nodes.

## Implicitly Defined
The definition of such a cache is fairly simple. For a base cache, the size of the first level cache is defined.
Take the cache com.ibm.wps.pe.portletentity as an example. Here, with the configuration property
cacheinstance.com.ibm.wps.pe.portletentity.firstLevelCacheSize=5003, a first level cache with size of 5003
is defined for the cache com.ibm.wps.pe.portletentity.

This first level cache essentially consists of an array which can hold up to 5003 key-value pairs. When
storing a key-value pair in the first level cache, by use of a hashing algorithm, the array index is computed.
That means when having two different key-value pairs with the same hashed index, only one of these pairs can be stored in the implicit first level cache. A consequence of this fact is that it is unlikely that this first
level cache gets filled up with entries.

In the "Simple table format" displayed by the Portal Cache Viewer, for com.ibm.wps.pe.portletentity, the
following two caches are listed:
- com.ibm.wps.pe.portletentity first level cache
- com.ibm.wps.pe.portletentity second level cache

That means the base cache has the attribute "second level cache" to distinguish it from the first level cache.

## Explicitly Defined

With explicit caches, multiple caches are defined in the Portal configuration:
1. A DynaCache
    This is the base cache which is also responsible for propagating invalidations in the cluster in case a key-value pair is updated.
2. A first level cache
    As with implicitly defined first level caches, this cache helps to improve the performance in case many gets for a restricted set of key-value pairs is performed.
3. An optional cache for cache misses
    Sometimes, it is critical to efficiently check that no value exists for a key. A specially designed cache, the “cache misses cache” can improve the performance.

As example, consider the following three caches:
1. com.ibm.wps.resolver.data.cache.DataSourceCache as the base DynaCache.
2. com.ibm.wps.resolver.data.cache.FirstLevelDataSourceCache as first level cache.
3. com.ibm.wps.resolver.data.cache.CacheMissDataSourceCache as cache misses cache.

Then, caches are referenced by setting additional configuration properties

`cacheinstance.com.ibm.wps.resolver.data.cache.DataSourceCache.firstLevelCache=`
`com.ibm.wps.resolver.data.cache.FirstLevelDataSourceCache`

and

`cacheinstance.com.ibm.wps.resolver.data.cache.DataSourceCache.cacheMissCache=`
`com.ibm.wps.resolver.data.cache.CacheMissDataSourceCache`

This explicitly defines the first level cache and the cache misses cache.

The "Simple table format" of the Portal Cache Viewer does not show the relationships of explicitly defined first level caches. Instead you can use the "Table format with details". There is displayed the following information:
"com.ibm.wps.resolver.data.cache.DataSourceCache of type DistributedMapCache wrapped by:
SecondLevelCache.
The SecondLevelCache uses com.ibm.wps.resolver.data.cache.FirstLevelDataSourceCache as first level cache and com.ibm.wps.resolver.data.cache.CacheMissDataSourceCache as cache miss cache."

## Disable a Cache
To save memory, first level caches can be disabled. Implicit first level caches are disabled by setting the size
to `0`. Explicit first level caches are disabled by setting the name of the first level cache to a null value.

For example, to switch off an implicit first level cache:
`cacheinstance.com.ibm.wps.pe.portletentity.firstLevelCacheSize=0`

However, to disable an explicit cache
`cacheinstance.com.ibm.wps.resolver.data.cache.DataSourceCache.firstLevelCache=`
Where the value after the equals is blank, signifying a null string.

Note that if you disable an explicit first level cache, the cache miss cache is also disabled. To disable only
the cache miss cache without disabling the explicit first level cache, you need to set the value of the
`cacheMissCache` property to null. For example:
`cacheinstance.com.ibm.wps.resolver.data.cache.DataSourceCache.cacheMissCache=`

In many scenarios, the performance may degrade only marginally when disabling all first level caches.