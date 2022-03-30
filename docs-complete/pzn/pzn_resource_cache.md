# Resource cache 

Personalization uses the WebSphere Application Server Dynamic Cache service to cache the results of select rules and to cache the rules themselves in a DistributedMap. When publishing, importing or saving rules, the cache is flushed automatically to ensure that the site is current.

## Configuration settings available for caching rules

The PersonalizationService.properties file contains cache control settings. The following table summarizes the configuration settings available for caching.

|Property|Description|
|--------|-----------|
|rulesEngine.cache.enabled|The setting to disable the general cache. Setting to false overrides any items that are individually set to be cached.|
|rulesEngine.cache.jndiName|The Dynamic Cache DistributedMap to use, as specified by its JNDI name.|
|rulesEngine.cache.maxEnumSize|You can use the WebSphere® Integrated Solutions Console to configure the DistributedMap and limit the maximum number of entries in the cache. The collection of resources that is returned for each rule is counted as one entry in the cache. When a rule returns many results, caching the results might result in extra memory usage. Therefore, when the result set of a rule exceeds the number that is specified in this property, it cannot be cached.|
|rulesEngine.cache.timeout|The number of seconds before an entry in the cache expires.|
|rulesEngine.cache.priority|The priority of a cache entry, relative to other entries in the same DistributedMap.|
|rulesEngine.cache.enabled.collectionName|The same as rulesEngine.cache.enabled, except that this property applies to a specific resource collection. The variable collectionName is the fully qualified path to the resource collection in Personalization. For instance, the GeneralNews resource collection that is included in the sample folder that is called PznDemo has the collectionName of /PznDemo/GeneralNews.|
|rulesEngine.cache.jndiName.collectionName|The same as rulesEngine.cache.jndiName, except that this property applies to a specific resource collection.|
|rulesEngine.cache.maxEnumSize.collectionName|The same as rulesEngine.cache.maxEnumSize, except that this property applies to a specific resource collection.|
|rulesEngine.cache.timeout.collectionName|The same as rulesEngine.cache.timeout, except that this property applies to a specific resource collection.|
|rulesEngine.cache.priority.collectionName|The same as rulesEngine.cache.priority, except that this property applies to a specific resource collection.|

## Caching business rules for resources

You might need to programmatically flush the Personalization cache, for example when a resource is updated outside of Personalization rules through some other application. A programming interface is provided to flush the cache. Since the timeout interval for the cache can be specified in the properties file, it might be adequate to wait for the cache timeout before updates are seen. The class com.ibm.websphere.personalization.resources.cache.CacheManager can be used to invalidate the cache for a particular resource, a particular resource collection, or the entire cache. Personalization uses this class internally to flush the cache when updates occur. An automatic cache entry clearing feature is now enabled by default to automatically clear cache entries that are affected by a content change.

Flushing the cache for a particular resource might require that all cached queries be flushed. Flushing the cache on a collection might flush the cache for all collections that use the same dynamic cache map. When the application frequently flushes the cache for a particular collection, isolating that collection in its own cache map by using the ruleEngine.cache.jndiName.resourceCollectionName property results in better use of cache.

Caching occurs before any rule exits are called.

For information about the DistributedMap and DistributedObjectCache interfaces for the dynamic cache, refer to the IBM® WebSphere Application Server documentation.

-   **[Automatically clearing your cache entry ](../pzn/pzn_auto_cache.md)**  
In Combined Cumulative Fix 10 and later, an automatic cache entry clearing feature is enabled by default to automatically clear cache entries that are affected by a content change.
-   **[Automatically clearing your cache entry ](../pzn/pzn_auto_cache.md)**  
In Combined Cumulative Fix 10 and later, an automatic cache entry clearing feature is enabled by default to automatically clear cache entries that are affected by a content change.

**Parent topic:**[Personalization programming reference ](../pzn/pzn_programming_reference.md)

**Parent topic:**[Personalization programming reference ](../pzn/pzn_programming_reference.md)

**Related information**  


[Using the DistributedMap and DistributedObjectCache interfaces for the dynamic cache](https://www.ibm.com/docs/en/was/8.5.5?topic=service-using-distributedmap-distributedobjectcache-interfaces-dynamic-cache)

