# Cache Configuration Properties

The cache configuration properties are organized in two groups: global configuration properties and cache
instance specific properties. Global properties have the prefix cacheglobal and apply to all caches unless
they are specifically overridden with a cache instance specific property. Cache instance specific properties
have the prefix cacheinstance and then contain the name of the cache instance and the name of the
property, for example:
`cacheinstance.com.ibm.wps.ac.PermissionCollectionCache.size`

All entries of a cache are governed by a single set of properties. The cache configuration properties that are
safe to modify are: enabled, lifetime, size, shared, replacement, and admit-threshold. The replacement
and admit-threshold properties do not apply to all cache implementations. In general, only caches that are
not shared will use these properties. There are other properties that should not be modified unless
specifically instructed to do so by IBM WebSphere Portal support.

## Enabled

The enabled property determines whether a cache is used or not. If a cache is not enabled, the property
has a value of false, then no values are held by the cache and every cache lookup will return a null value.
This property should be modified only for testing purposes, never in a production environment. The
supported values are true and false and the global default value is true.

## Lifetime

The lifetime property determines the number of seconds an entry will exist in a cache. A cache no longer
returns an entry once the entry has existed longer than the lifetime property. Cache entries can also be
invalidated prior to reaching their lifetime due to explicit invalidation of the entry or Least Recently Used
(LRU) eviction from the cache.

A value of -1 indicates an infinite lifetime. This value should be used with caution since cache entries will
only be invalidated programmatically. Infinite lifetimes are particularly discouraged with access control
caches because:
    - In a cluster there can be rare occurrences when not all cache invalidation messages are processed on every node due to race conditions in the application server’s DynaCache code. While the probability of this occurring is very low, finite lifetimes allow these entries to be invalidated when there are application errors.
    - Finite lifetimes allow modifications made to roles, which have been externalized to an External Security Manager, to be reflected in role caches.
    - If updates to production environments are restricted to a well defined staging process using XML Access, it is usually safe to use infinite lifetimes.

## Size

The maximum number of entries in a cache is limited by the size property. If this size limit is reached,
entries are removed from the cache by an algorithm which usually includes:  
1. remove invalidated entries
and entries which have exceeded their lifetime and 
2. apply a LRU algorithm to the valid entries.

Any positive integer is allowed. Cache sizes have a direct impact on the memory requirements of your
Portal, specifically the demands on the Java heap. You should monitor and record the Java heap metrics
and any performance impact when modifying the size of a cache.

## Shared

Cluster-aware caches are shared across the nodes of a cluster. These caches propagate invalidations of
cache entries by using the WebSphere Application Server `DistributedMap` interface provided by
DynaCache.

Supported values are `true` and `false`. The default values shipped in HCL Portal 8.5 should apply to most
configurations. If you do not have a cluster there may be a small performance benefit to setting this
property to false since a different cache implementation is used. We did not modify the defaults in our
single node measurement environments.

If this parameter is false in a cluster, it can ultimately lead to data inconsistencies between the cluster
members.

## Replacement

The cache replacement algorithm used by these caches works on the frequency of recent access to cache
entries; entries that have been used frequently are less likely to be discarded than entries that have not
been used frequently. This parameter controls how long the access history will be kept. A setting of
aggressive means those only recently accessed entries will be considered, which causes stale entries to be
discarded more quickly. The opposite setting, conservative, will consider a longer access history. The
intermediate setting of moderate is appropriate for most caches.

## Admit Threshold

Caches that have a very high insert rate may cause useful entries to be discarded prematurely. An
admittance threshold restricts the rate at which entries are allowed into the cache by only allowing them to
enter after an attempt has been made to insert the same entry into the cache multiple times. The default
value of 0 means “no admittance threshold”, which will allow entries into the cache on the first insert
attempt. This is appropriate for most caches. A higher value indicates that a cache entry will not be allowed
into the cache until that many attempts have been made to insert the same key. For example, a value of 2
means that the first two attempts to insert a cache entry will be ignored, and the third attempt will insert
the value into the cache. We did not modify the admit-threshold for any cache in our measurement
environments.