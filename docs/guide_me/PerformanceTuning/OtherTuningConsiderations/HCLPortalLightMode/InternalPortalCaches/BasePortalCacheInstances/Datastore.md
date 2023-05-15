# Datastore

The datastore caches contain data read from the Portal database. The goal of these caches is not to be a
complete image of the DB content, but to have frequently-accessed but raw information available for all
other Portal components to use.

**com.ibm.wps.datastore.pageinstance.DerivationCache**
Default size: 3000, default lifetime: infinite (-1), usage pattern: regular.

This cache stores the mappings between pages and their derivation children, or empty mappings if no such
children exist. Like the pageinstance.OIDCache cache this one also is accessed very frequently during page
rendering and administration. Creating a cache entry involves one multi-row database query. This cache
also scales with the number of pages in the system. Hence, you can use the same sizes for
com.ibm.wps.datastore.pageinstance.OIDCache and this one. In most Portal usage scenarios the actual size of this cache will be somewhat lower than the page instance cache. An average entry in the cache is rather small. Only if all your pages have long lists of derivation children will the entries become larger. To achieve best performance, in terms of cache hit rate, the size should be set to a value so that all pages
defined in the system fit into the cache. This corresponds to the combined row count of the PAGE_INST database tables in the release, community and customization databases.

**com.ibm.wps.datastore.pageinstance.DynamicNodeCache**
Default size: 5, default lifetime: infinite (-1), usage pattern: regular.

This cache stores one list per virtual Portal. These lists contain all pages in the corresponding domain that
are flagged as dynamic nodes, i.e. dynamic assembly content nodes can be added below these pages. Since
the number of domains does not grow, the size scales with the number of virtual portals. The cache size
should be #Virtual Portals * 3+ 3. The size of one entry into the cache ranges from small in a Portal with
very few dynamic nodes up to medium with many dynamic nodes in the system.

**com.ibm.wps.datastore.pageinstance.MetaDataCache**
Default size: 499, default lifetime: 3600, usage pattern: regular

This cache stores information relevant for retrieving pages based on page parameters. The primary use
case that benefits from this cache is retrieving the individual target pages from friendly URLs.
The size of the cache scales with the number of friendly URLs defined and used in Portal.
The entries in this cache are rather small.

**com.ibm.wps.datastore.pageinstance.OIDCache**
Default size: 3000, default lifetime: infinite (-1), usage pattern: regular.

This cache stores information on Portal pages for fast retrieval during login or page navigation. It scales
with the number of page instances in the system. It is one of the most frequently used caches and should
be large enough to hold all pages that are frequently accessed by users. Pages are loaded and put into the
cache by direct navigation, creating a link to another page or by working with the page during Portal
administration (always including all higher derivation levels). Creating a cache entry includes four multi-row
database lookups. An entry to the cache is medium sized. To achieve best performance, in terms of cache
hit rate, the size should be set to a value so that all pages defined in the system fit into the cache. This
corresponds to the combined row count of the PAGE_INST database tables in the release, community and
customization databases.

**com.ibm.wps.datastore.pageinstance.OIDDraftCache**
Default size: 500, default lifetime: infinite (-1), usage pattern: regular.

This cache stores information on Portal draft pages for fast retrieval during login or page navigation. It
scales with the number of draft page instances in the system. It should be large enough to hold all draft
pages that are frequently accessed by users. Draft pages are loaded and put into the cache by direct
navigation, creating a link to another page or by working with the page during Portal administration (always
including all higher derivation levels). Creating a cache entry includes four multi-row database lookups. An
entry to the cache is medium sized. To achieve best performance, in terms of cache hit rate, the size should
be set to a value so that all draft pages defined in the system fit into the cache. This corresponds to the row
count of the PAGE_INST_DRAFT database table in the release database.

**com.ibm.wps.datastore.portaliddescriptor.VPIDCache**
Default size: 200, default lifetime: infinite (-1), usage pattern: regular.

This cache maps long virtual portal object IDs to the corresponding Portal internal short ID and vice versa. It
scales with two times the number of virtual portals in the system, plus two additional entries. Data is read
from the cache during every rendering request.
For optimal caching the size should be set to twice the number of Virtual Portals defined in the system plus
two entries. Creating a cache entry involves one single-row database lookup. An entry object into the cache
is fairly small.

**com.ibm.wps.datastore.services.Identification.OidAndUniqueName.cache**
Default size: 5000, default lifetime: infinite (-1), usage pattern: regular.

This cache stores unique names. It is used quite frequently during page rendering and especially
administration of unique names. Page and portlet unique names make up the biggest part of the cache
content. The cache should be large enough to hold entries for the most frequently used pages and portlets
having a unique name associated with them. Note that not all resources have a unique name associated
with them. To eliminate database lookups the cache size could correspond to the database table
UNIQUE_NAME multiplied by two, to allow for mapping in two directions. Creating a cache entry involves
reading one entry from the Portal database. An entry object into the cache is fairly small.

**com.ibm.wps.datastore.services.Identification.SerializedOidString.cache**
Default size: 5000, default lifetime: infinite (-1), usage pattern: cascading object types.

This cache stores serialized ObjectIDs used in request parameters or XML Access files. It contains a subset
of all the loaded ObjectIDs in memory. It scales with the number of ObjectIDs in the system, but the
serialized version of all of these IDs are not requested, hence the actual size is impossible to predict. The
cache is used during every request. Creating a cache entry is rather cheap. Typically all information can be
retrieved in memory, database lookups are scarcely necessary. A cache entry is fairly small.