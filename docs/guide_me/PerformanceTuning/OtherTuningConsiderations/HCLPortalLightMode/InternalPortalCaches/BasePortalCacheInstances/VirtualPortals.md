# Virtual Portals

The following group of caches is only relevant if you have defined additional virtual portals in your system.
In all other situations it is safe to set the size of these caches to one and the lifetime to infinite.

**In HCL DX CF04, these caches were removed except**
**com.ibm.wps.services.vpmapping.VirtualPortalIDToRealmCache. A new cache,**
**com.ibm.wps.services.vpmapping.VirtualPortalIDAndHostnameCache, was added to support VP to**
**hostname mapping.**

**com.ibm.wps.services.vpmapping.CheckForHostnameCache**
Default size: 20, default lifetime: 3600, usage pattern: regular.

This cache keeps track of the hostnames used by virtual portals. If this cache is used, it could contain one
entry per virtual portal, so the cache size should be larger than the number of virtual portals of your
installation.

**com.ibm.wps.services.vpmapping.URLToVirtualPortalIDCache**
Default size: 120, default lifetime: 3600, usage pattern: regular.

This cache maps LPID values to virtual portal IDs. LPIDs are encoded in a URL that points to a certain virtual
portal. Therefore the number of LPIDs is equal to the number of virtual portal IDs. Accordingly, the
optimum size of this cache is the number of virtual portals defined in your environment. You may increase
the lifetime for better performance if your setup of virtual portals changes infrequently. If you only use the
default portal and no additional virtual portal, you will see one entry in the cache and little traffic on the
cache.

**com.ibm.wps.services.vpmapping.HostnameToVirtualPortalIDCache**
Default size: 20, default lifetime: 3600, usage pattern: regular.

This cache ensures an efficient mapping between virtual portal ids and hostnames. If this cache is used, it
could contain one entry per virtual portal, so the cache size should be larger than the number of virtual
portals of your installation.

**com.ibm.wps.services.vpmapping.VirtualPortalIDCacheToHostname**
Default size: 20, default lifetime: 3600, usage pattern: regular.

This cache ensures an efficient mapping between hostnames and virtual portal ids. If this cache is used, it
could contain one entry per virtual portal, so the cache size should be larger than the number of virtual
portals of your installation.

**com.ibm.wps.services.vpmapping.VirtualPortalIDToRealmCache**
Default size: 120, default lifetime: 3600, usage pattern: regular.

This cache stores the realm information for virtual portals. One realm can contain several virtual portals,
but one virtual portal can only be part of a single realm. As a consequence, the optimum size of this cache
is the number of virtual portals defined in your environment. You may increase the lifetime for better
performance if your setup of virtual portals changes infrequently. If you only use the default portal and no
additional virtual portal, you will see one entry in the cache and little traffic on the cache. Creating a new
cache entry requires one database query. An entry into the cache is fairly small.

**com.ibm.wps.services.vpmapping.VirtualPortalIDToURLCache**
Default size: 120, default lifetime: 3600, usage pattern: regular.

This cache maps virtual portal IDs to their respective LPID. The LPID usually is used to create URLs for a
specific virtual portal. Since the number of LPIDs is equal to the number of virtual portal IDs, the optimum
size of this cache is the number of Virtual Portals defined in your environment. You may increase the life
time for better performance if your setup of virtual portals changes infrequently. If you only use the default
portal and no additional virtual portal, you will see one entry in the cache and little traffic on the cache.