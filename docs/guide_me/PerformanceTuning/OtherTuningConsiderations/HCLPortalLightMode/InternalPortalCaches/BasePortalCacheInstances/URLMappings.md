# URL Mappings

The following caches contain data on Portal URL mappings. Be sure to size the caches in a way that these
are large enough to hold all defined URL mappings in your system.

wps.mappingurl.ContextsCache
Default size: 500, default lifetime: infinite (-1), usage pattern: regular.

This cache contains URL mapping contexts. It scales with the number of mapping contexts defined in the
system. This cache is used if a URL mapping cannot be resolved using the lookup cache. Creating an entry
involves reading a mapping entry from the database. An entry in the cache is medium-sized.

wps.mappingurl.LookupCache
Default size: 600, default lifetime: infinite (-1), usage pattern: regular.

This cache is used as a final lookup cache for the computed mappings between (a hierarchy of) URL
mappings and a WebSphere Portal resource. It is accessed during every request when analyzing the
incoming URL for being a URL mapping. The size of this cache should be the number of all mappings.
Creating a cache entry typically is cheap because the information often is in memory. An entry in the cache
is rather small.