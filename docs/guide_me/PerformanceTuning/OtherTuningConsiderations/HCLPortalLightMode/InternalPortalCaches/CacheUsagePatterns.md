# Cache Usage Patterns

Most HCL Portal caches follow the simple paradigm: if an entry already exists use it, otherwise add the
entry. However, there are caches that behave differently. Each cache follows one of the following five
patterns:

## Regular

The regular pattern is the most common cache pattern:
```
    value = cache.get(key);
    if (value == null) {
    value = calculateNewValue();
    cache.put(key, value);
    }
```
## Invalidation Checking
Invalidating cache entries in a clustered environment is rather expensive. Therefore, Portal caches often
check whether the entry to be invalidated actually exists in the local cache.
```
    value = cache.get(key);
    if (value != null) {
    cache.invalidate(key);
    }
```    

Caches following this pattern follow the regular pattern for all but invalidation actions.

## Multiple Object Types

Most caches hold only a single object type. When caches can hold multiple types, they follow the regular
pattern for each of those types.

## Cache Combination

Some caches are wrapped and combined into one single physical WebSphere Application Server DynaCache
instance to reduce administrative overhead of monitoring and managing several similar cache instances
that have similar configurations. The single cache instance is configured with a 'wrapped' setting that
specifies the physical instance that shall be used for storage, for example,
`cacheinstance.com.ibm.XYZCache.wrapped=com.ibm.CommonPhysicalCacheInstance`. Only `CommonPhysicalCacheInstance` will be managed and monitored.

## Cascading Object Types

This pattern is a special case of the ‘multiple object types’ pattern in that two or more object types that are
queried in a certain order are stored in a single cache. There may be one cache hit along with a cache miss
on a regular basis.
```
    value = cache.get(keyA);
    if (value == null) {
    value = cache.get(keyB);
    if (value == null) {
    value = calculateNewValue();
    cache.put(keyA || keyB, value); // either key could be used
     }
    }
```

