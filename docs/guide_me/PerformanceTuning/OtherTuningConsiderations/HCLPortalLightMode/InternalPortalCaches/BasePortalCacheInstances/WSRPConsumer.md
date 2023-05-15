# WSRP Consumer

All WSRP caches are only accessed if the Portal is used as either a WSRP consumer or producer. Each of the
caches is used on either side of the WSRP communication, but not on both sides. Most of the WSRP caches
are used and read during every WSRP request, either displaying a page with a provided portlet on it, or
administering WSRP properties. Exceptions to this general rule are noted below.

**wsrp.cache.deleted.portlets**
Default size: 500, default lifetime: 3600, usage pattern: regular.

This cache contains the handles of remote portlets that were destroyed by invoking the destroyPortlets
operation. It is used on the consumer side. It scales with the number of portlet instances of remote portlets
that are deleted on the consumer. The cache is used to avoid duplicate destroyPortlets requests, thus
recreating the cache entry is expensive. It involves performing a WSRP request.

**wsrp.cache.markup**
Default size: 5000, default lifetime: 3600, usage pattern: regular.

The WSRP Consumer uses this cache to cache getMarkup responses: If Markup Caching is enabled for the
Consumer or for a remote portlet, the Consumer checks this cache
before sending a WSRP getMarkup request to the producer, and sends the request only if a corresponding
markup response is not found in the cache. The cache is thus
used to avoid sending WSRP getMarkup requests. The cache scales with the number of cacheable
getMarkup responses received from the producer. You may adapt the cache
size. The WSRP Consumer will always override the default lifetime according to the cache expiration that is
provided by the remote portlet.

**wsrp.cache.portlet.descriptions**
Default size: 2000, default lifetime: 10800, usage pattern: regular.

This cache contains the portlet descriptions of remote portlets. These descriptions could be considered
meta information on the provided portlets, like languages and descriptions. The cache scales with the
number of remote portlets consumed by the consumer. Increasing the default lifetime can improve
performance if portlet descriptions of the provided portlets change infrequently. Rebuilding cache entries is
rather expensive. It includes parsing the cached service description. The cached entries are rather
expensive in terms of memory usage.

**wsrp.cache.producer.objects**
Default size: 500, default lifetime: 10800, usage pattern: regular.

This cache contains the descriptor of the producer. It is used on the consumer side. It scales with the
number of producers that the consumer interacts with. Recreating cache entries is fairly expensive. It
involves some DB queries and in-memory operations.

**wsrp.cache.producer.user**
Default size: 5000, default lifetime: 3600, usage pattern: multiple object types.

This cache contains the descriptor of the producer and context information between users and producers.
It is used on the consumer side. It scales with the total number of active users accessing remote portlets of
these producers, i.e the maximum the number of producers multiplied with the number of active users
accessing them plus the number of producers. Recreating cache entry is fairly expensive. It involves some
DB queries and in-memory operations. Therefore the session timeout should not be higher than the
lifetime of entries in the cache. Cache entries are explicitly invalidated during user session destruction.

**wsrp.cache.servicedescription**
Default size: 150, default lifetime: infinite (-1) usage pattern: regular

This cache contains service descriptions of WSRP producers. It is used on the consumer side. It scales with
the number of WSRP producers integrated into the consuming Portals; there is exactly one description per
producer. The service description is generated using all the portlet descriptions from the producer Portal
plus some additional data. Hence a service description can be large in terms of memory requirements.
Rebuilding the description requires several roundtrips and is an expensive operation. Cache entries are
rebuilt if a user clicks the ‘Browse’ button in the WSRP administration portlets. This leads to a refresh of all
service descriptions of all producers. This cache is only used during WSRP administration.

**wsrp.cache.wsrp.portlet**
Default size: 2000, default lifetime: 10800, usage pattern: regular.

This cache contains the proxy portlet instances on the WSRP consumer side and is only used there. It scales
with the number of integrated remote portlets multiplied with the number of users having their own
customizations of portlet preferences for these remote portlets (portlet settings for legacy portlets
respectively). Creating an entry for the cache involves one multi-line database query. The size of a cached
entry depends on the number of parameters associated with the portlet. Hence the size ranges from small
to fairly large.