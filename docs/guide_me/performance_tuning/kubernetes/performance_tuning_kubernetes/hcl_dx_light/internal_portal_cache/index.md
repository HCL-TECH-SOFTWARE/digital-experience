# Internal Portal Caches

Previous chapters described the specific values we modified for the WebSphere Portal caches in our environments. This section describes the HCL Portal caches, the general parameters for those caches and which cache instances HCL Portal 9.5 provides.

## General Information

With HCL Portal 9.5, Portal configuration properties, including cache configuration properties, are managed via the WebSphere Integrated Solutions Console. In previous WebSphere Portal releases these configuration properties were maintained in properties files. More information on how to modify Portal configuration properties can be found in the Overview of configuration services section of the HCL Digital Experience Portal Version 9.5 information centre.

## Cache Configuration Properties

The cache configuration properties are organized in two groups: global configuration properties and cache instance specific properties. Global properties have the prefix cacheglobal and apply to all caches unless they are specifically overridden with a cache instance specific property. Cache instance specific properties have the prefix cacheinstance and then contain the name of the cache instance and the name of the property, for example: cacheinstance.com.ibm.wps.ac.PermissionCollectionCache.size

All entries of a cache are governed by a single set of properties. The cache configuration properties that are safe to modify are: enabled, lifetime, size, shared, replacement, and admit-threshold. The replacement and admit-threshold properties do not apply to all cache implementations. In general, only caches that are not shared will use these properties. There are other properties that should not be modified unless specifically instructed to do so by IBM WebSphere Portal support.

_Enabled_

The enabled property determines whether a cache is used or not. If a cache is not enabled, the property has a value of false, then no values are held by the cache and every cache lookup will return a null value. This property should be modified only for testing purposes, never in a production environment. The supported values are true and false and the global default value is true.

_Lifetime_

The lifetime property determines the number of seconds an entry will exist in a cache. A cache no longer returns an entry once the entry has existed longer than the lifetime property. Cache entries can also be invalidated prior to reaching their lifetime due to explicit invalidation of the entry or Least Recently Used (LRU) eviction from the cache.

A value of -1 indicates an infinite lifetime. This value should be used with caution since cache entries will only be invalidated programmatically. Infinite lifetimes are particularly discouraged with access control caches because:

In a cluster there can be rare occurrences when not all cache invalidation messages are processed on every node due to race conditions in the application server’s DynaCache code. While the probability of this occurring is very low, finite lifetimes allow these entries to be invalidated when there are application errors.

Finite lifetimes allow modifications made to roles, which have been externalized to an External Security Manager, to be reflected in role caches.

If updates to production environments are restricted to a well defined staging process using XML Access, it is usually safe to use infinite lifetimes.

_Size_

The maximum number of entries in a cache is limited by the size property. If this size limit is reached, entries are removed from the cache by an algorithm which usually includes 1) remove invalidated entries and entries which have exceeded their lifetime and 2) apply a LRU algorithm to the valid entries.

Any positive integer is allowed. Cache sizes have a direct impact on the memory requirements of your Portal, specifically the demands on the Java heap. You should monitor and record the Java heap metrics and any performance impact when modifying the size of a cache.

_Shared_

Cluster-aware caches are _shared_ across the nodes of a cluster. These caches propagate invalidations of cache entries by using the WebSphere Application Server DistributedMap interface provided by DynaCache.

Supported values are true and false. The default values shipped in HCL Portal 9.5 should apply to most configurations. If you do not have a cluster there may be a small performance benefit to setting this property to false since a different cache implementation is used. We did not modify the defaults in our single node measurement environments.

If this parameter is false in a cluster, it can ultimately lead to data inconsistencies between the cluster members.

_Replacement_

The cache replacement algorithm used by these caches works on the frequency of recent access to cache entries; entries that have been used frequently are less likely to be discarded than entries that have not been used frequently. This parameter controls how long the access history will be kept. A setting of aggressive means those only recently accessed entries will be considered, which causes stale entries to be discarded more quickly. The opposite setting, conservative, will consider a longer access history. The intermediate setting of moderate is appropriate for most caches.

_Admit Threshold_

Caches that have a very high insert rate may cause useful entries to be discarded prematurely. An admittance threshold restricts the rate at which entries are allowed into the cache by only allowing them to enter after an attempt has been made to insert the same entry into the cache multiple times. The default value of 0 means “no admittance threshold”, which will allow entries into the cache on the first insert attempt. This is appropriate for most caches. A higher value indicates that a cache entry will not be allowed into the cache until that many attempts have been made to insert the same key. For example, a value of 2 means that the first two attempts to insert a cache entry will be ignored, and the third attempt will insert the value into the cache. We did not modify the admit-threshold for any cache in our measurement environments.

## Cache Usage Patterns

Most HCL Portal caches follow the simple paradigm: if an entry already exists use it, otherwise add the entry. However, there are caches that behave differently. Each cache follows one of the following five patterns:

_Regular_

The regular pattern is the most common cache pattern:

 ```java
value = cache.get(key);
if (value == null) {
    value = calculateNewValue();
    cache.put(key, value);
}

_Invalidation Checking_

Invalidating cache entries in a clustered environment is rather expensive. Therefore, Portal caches often check whether the entry to be invalidated actually exists in the local cache.

```java
value = cache.get(key);
if (value != null) {
    cache.invalidate(key);
}

Caches following this pattern follow the regular pattern for all but invalidation actions.

_Multiple Object Types_

Most caches hold only a single object type. When caches can hold multiple types, they follow the regular pattern for each of those types.

_Cache Combination_

Some caches are wrapped and combined into one single physical WebSphere Application Server DynaCache instance to reduce administrative overhead of monitoring and managing several similar cache instances that have similar configurations. The single cache instance is configured with a 'wrapped' setting that specifies the physical instance that shall be used for storage, for example, **cacheinstance.com.ibm.XYZCache.wrapped=com.ibm.CommonPhysicalCacheInstance**. Only **CommonPhysicalCacheInstance** will be managed and monitored.

_Cascading Object Types_

This pattern is a special case of the ‘multiple object types’ pattern in that two or more object types that are queried in a certain order are stored in a single cache. There may be one cache hit along with a cache miss on a regular basis.

```java
value = cache.get(keyA);
if (value == null) {
    value = cache.get(keyB);
    if (value == null) {
        value = calculateNewValue();
        cache.put(keyA || keyB, value); // either key could
```

## First Level caches

In many hardware and software architectures, caches are often organized into hierarchies. For some Portal caches, typically WebSphere DynaCaches, “first level caches” are defined which can improve performance, especially if many cache retrievals for a limited set of values are performed.

In special, performance critical situations, performance may improve significantly when defining first level caches or increasing the sizes of first level caches and cache miss caches. You should do this with care and only if you have a test setup where you can measure the performance of your Portal system.

Two kinds of first level caches exist in the current version of Portal:

Implicitly defined first level caches.

Explicitly defined first level caches.

For a DynaCache used by Portal, an implicit first level cache or an explicit first level cache can be defined but not both. You can change the size of a first level cache or disable it but you should not replace an explicit first level cache by an implicit first level cache or vice versa.

In WebSphere Portal, DynaCaches are used as distributed caches, that means if on one node of a Portal cluster, a key-value pair is deleted in a DynaCache, then invalidation events are sent to the other nodes to remove obsolete key-value pairs from both, the DynaCaches and the first level caches of the other nodes.

_Implicitly Defined_

The definition of such a cache is fairly simple. For a base cache, the size of the first level cache is defined. Take the cache com.ibm.wps.pe.portletentity as an example. Here, with the configuration property cacheinstance.com.ibm.wps.pe.portletentity.firstLevelCacheSize=5003, a first level cache with size of 5003 is defined for the cache com.ibm.wps.pe.portletentity.

This first level cache essentially consists of an array which can hold up to 5003 key-value pairs. When storing a key-value pair in the first level cache, by use of a hashing algorithm, the array index is computed. That means when having two different key-value pairs with the same hashed index, only one of these pairs can be stored in the implicit first level cache. A consequence of this fact is that it is unlikely that this first level cache gets filled up with entries.

In the "Simple table format" displayed by the Portal Cache Viewer, for com.ibm.wps.pe.portletentity, the following two caches are listed:

- com.ibm.wps.pe.portletentity first level cache
- com.ibm.wps.pe.portletentity second level cache

That means the base cache has the attribute "second level cache" to distinguish it from the first level cache.

_Explicitly Defined_

With explicit caches, multiple caches are defined in the Portal configuration:

- A DynaCache

This is the base cache which is also responsible for propagating invalidations in the cluster in case a key-value pair is updated.

- A first level cache

As with implicitly defined first level caches, this cache helps to improve the performance in case many gets for a restricted set of key-value pairs is performed.

- An optional cache for cache misses

Sometimes, it is critical to efficiently check that no value exists for a key. A specially designed cache, the “cache misses cache” can improve the performance.

As example, consider the following three caches:

- com.ibm.wps.resolver.data.cache.DataSourceCache as the base DynaCache.
- com.ibm.wps.resolver.data.cache.FirstLevelDataSourceCache as first level cache.
- com.ibm.wps.resolver.data.cache.CacheMissDataSourceCache as cache misses cache.

Then, caches are referenced by setting additional configuration properties
 cacheinstance.com.ibm.wps.resolver.data.cache.DataSourceCache.firstLevelCache= com.ibm.wps.resolver.data.cache.FirstLevelDataSourceCache 
 
 and

cacheinstance.com.ibm.wps.resolver.data.cache.DataSourceCache.cacheMissCache= com.ibm.wps.resolver.data.cache.CacheMissDataSourceCache

This explicitly defines the first level cache and the cache misses cache.

The "Simple table format" of the Portal Cache Viewer does not show the relationships of explicitly defined first level caches. Instead you can use the "Table format with details". There is displayed the following information:

"com.ibm.wps.resolver.data.cache.DataSourceCache of type DistributedMapCache wrapped by:SecondLevelCache.

The SecondLevelCache uses com.ibm.wps.resolver.data.cache.FirstLevelDataSourceCache as first level cache

and com.ibm.wps.resolver.data.cache.CacheMissDataSourceCache as cache miss cache."

_Disable a Cache_

To save memory, first level caches can be disabled. Implicit first level caches are disabled by setting the size to 0. Explicit first level caches are disabled by setting the name of the first level cache to a null value.

For example, to switch off an implicit first level cache:

**cacheinstance.com.ibm.wps.pe.portletentity.firstLevelCacheSize=0**

However, to disable an explicit cache 

**cacheinstance.com.ibm.wps.resolver.data.cache.DataSourceCache.firstLevelCache=**

Where the value after the equals is blank, signifying a null string.

Note that if you disable an explicit first level cache, the cache miss cache is also disabled. To disable only the cache miss cache without disabling the explicit first level cache, you need to set the value of the cacheMissCache property to null. For example: cacheinstance.com.ibm.wps.resolver.data.cache.DataSourceCache.cacheMissCache=

In many scenarios, the performance may degrade only marginally when disabling all first level caches.

## Combiner Caches

In WebSphere Portal 9, HCL DX 9.5 and higher releases, some PAC and model caches are consolidated into a single combiner cache. For reference, here are the sets of caches that were combined into new caches in WP8. The name in _blue_ is the new cache name. The names underneath the new cache, are the set of caches from WP7 that were combined and no longer exist in WP9.

_com.ibm.wps.ac.CommonApplicationRoleMgmt_ 

com.ibm.wps.ac.ApplicationRoleForApplicationUserCache

com.ibm.wps.ac.MappedRolesToUserCache 

com.ibm.wps.ac.ApplicationRoleOIDCache 

com.ibm.wps.ac.ApplicationRoleDescriptorCache 

com.ibm.wps.ac.ApplicationRolesForPrincipalCache 

com.ibm.wps.ac.ApplicationRoleChildrenCache 

com.ibm.wps.ac.ApplicationRoleMappingsCache 

com.ibm.wps.ac.ContainedRolesCache

_com.ibm.wps.ac.CommonRolesCache_ 

com.ibm.wps.ac.RolesCache

com.ibm.wps.ac.ParentResourceRoleMappingCache 

com.ibm.wps.ac.ResourceRoleMappingCache

_com.ibm.wps.ac.CommonExplicitEntitlementsCache_ 

com.ibm.wps.ac.ExplicitEntitlementsCache 

com.ibm.wps.ac.ExplicitEntitlementsCache.CONTENT_NODE

com.ibm.wps.ac.ExplicitEntitlementsCache.PORTLET_APPLICATION_DEFINITION 

com.ibm.wps.ac.ExplicitEntitlementsCache.PORTLET_DEFINITION 

com.ibm.wps.ac.ExplicitEntitlementsCache.USER_GROUP 

com.ibm.wps.ac.ExplicitEntitlementsCache.VIRTUAL 

com.ibm.wps.ac.ExplicitEntitlementsCache.WEB_MODULE 

com.ibm.wps.ac.ExplicitEntitlementsCache.WSRP_PRODUCER

_com.ibm.wps.ac.groupmanagement.CommonUserGroupMgmt_ 

com.ibm.wps.ac.groupmanagement.NestedGroupCache 

com.ibm.wps.ac.groupmanagement.GroupCache 

com.ibm.wps.ac.groupmanagement.PeerGroupCache

For HCL DX 9.5, this cache was split back into com.ibm.wps.ac.groupmanagement.GroupCache and com.ibm.wps.ac.groupmanagement.NestedGroupCache for performance reasons.

_com.ibm.wps.puma.CommonPrincipalCache_ 

com.ibm.wps.puma.OID_User_Cache 

com.ibm.wps.puma.OID_Group_Cache 

com.ibm.wps.puma.DN_Group_Cache 

com.ibm.wps.puma.DN_User_Cache

_com.ibm.wps.model.factory.UserSpecificModelCache_ 

com.ibm.wps.model.factory.ContentModelCache.live 

com.ibm.wps.model.factory.ContentModelCache.isolated 

com.ibm.wps.model.factory.NavigationSelectionModelCache.live 

com.ibm.wps.model.factory.NavigationSelectionModelCache.isolated 

com.ibm.wps.model.factory.NavigationModelCache.live 

com.ibm.wps.model.factory.NavigationModelCache.isolated