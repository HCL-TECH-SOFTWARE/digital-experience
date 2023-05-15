# WebSphere

com.ibm.workplace/ExtensionRegistryCache
com.ibm.ws.wssecurity.sctClientCacheMap
com.ibm.ws.wssecurity.sctServiceCacheMap

These caches are WAS internal caches whose size is not expected to be modified by customers. When
viewing these caches with the Portal Cache Viewer, the following text is displayed:

!!! note
    This cache is not an HCL Portal cache. No recommendations are given.

**LDAP/AttributesCache**
Default size: 4000, default lifetime: 1200, usage pattern: regular.

VMM attributes cache to improve the performance of VMM.

**LDAP/SearchResultsCache**
Default size: 2000, default lifetime: 600, usage pattern: regular.

VMM search results cache to improve the performance of VMM search.