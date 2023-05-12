# WSRP Producer

**wsrp.cache.event.description**
Default size: 2000, default lifetime: 10800, usage pattern: regular.

This cache contains the event descriptions. These are the descriptions of events that are supported by the
provided portlets. It is used on the producer. It scales with the number of events the provided portlets
support. Recreating cache entries is fairly expensive. It involves some DB queries and in-memory
operations.

**wsrp.cache.portlet.windows**
Default size: 10000, default lifetime: infinite (-1), usage pattern: regular.

This cache contains a WSRP specific wrapper on a WebSphere Portal portlet entity object. It is used on the
producer side. It scales with the number of provided portlets and the number of occurrences of these
portlets on consumer pages. Recreating cache entries is rather cheap and typically only includes in-memory
operations. An entry into this cache is fairly small. This cache is accessed very often during a request.

**wsrp.cache.portletdescription**
Default size: 500, default lifetime: 3600, usage pattern: regular.

This cache contains the portlet descriptions of provided portlets. These descriptions could be considered
meta information on the provided portlets, like languages and descriptions. It is used on the producer side.
The cache scales with the number of portlets provided by the producer. Increasing the default lifetime can
improve performance if portlet descriptions of the provided portlets change infrequently. Rebuilding cache
entries is rather expensive. It includes loading data from the database with several calls. The cached entries
are rather expensive in terms of memory usage.

**wsrp.producer.portletpool.portlets**
Default size: 5000, default lifetime: infinite (-1), usage pattern: cascading object types.

This cache stores the Producer Offered Portlets and Consumer Configured Portlets and hence scales with
their number. It scales with the number of provided portlets and the number of remote users having
personalized those (Consumer Configured Portlets); hence the maximum would be the number of provided
portlets multiplied by the number of remote users accessing the producer. Reloading cache entries involves
one query against the database. Cached entries are rather small.