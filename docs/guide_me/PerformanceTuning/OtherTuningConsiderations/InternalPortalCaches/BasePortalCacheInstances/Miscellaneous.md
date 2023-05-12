# Miscellaneous

This group of caches does not fit in any of the other categories.

**com.ibm.wps.multiviews.uri2uri**
Default size: 10, default lifetime: infinite (-1), usage pattern: regular

This cache holds URIs that are expensive to parse. Its size should be equal to the number of mvc: URIs used
in the theme on the main rendering path.

**com.ibm.wps.services.cache.cachedstate.CachedStateServiceSessionBound.cache**
Default size: 5000, default lifetime: 7200, usage pattern: typically regular.

This cache stores session-scoped data in the Portal context and is used by various Portal components. This
cache scales linearly with the number of active sessions in the system and the number of Portal
components using this cache for data retrieval. The usage pattern, access times, entry creation costs and
entry memory sizes depend on the Portal component using this cache and cannot be stated in general.

**com.ibm.wps.services.registry.ReloadableBucketCache**
Default size: 32, default lifetime: infinite (-1), usage pattern: regular.

This cache is used in a cluster for Portals to notify the other cluster members when one of the registries
needs to be reloaded due to administrative action. It should never be disabled or set to shared=false.

**wp.xml.configitems**
Default size: 100, default lifetime: infinite (-1), usage pattern: regular.

This cache stores XML Access configuration items. It is used only during XML Access processing. The entries
resemble references between nodes in the XML Access document. Especially when working with complex
XML files, usually used for imports or Release Builder processes, it can be beneficial to increase the cache
size. The cache will be cleared after XML processing is completed. Reloading a cache entry involves one
database query. Entries in the cache are medium-sized.