# Dynamic Assembly / Process Integration

The following caches are used when dynamic UI functionality, often together with WebSphere Process
Server integration are used.

processintegration.PendingTasksCache
Default size: 2500, default lifetime: infinite (-1), usage pattern: regular.

This cache contains the pending process tasks in the scope of a user. The size of this cache scales with the
number of users concurrently using process integration functionality. Each cache entry consists of a
complete set of pending process tasks for a given user and therefore can be fairly large in memory.
Reloading a cache entry involves accessing the Human Task Manager via an EJB call. The cache is always
accessed when the PendingTasksTag is used in a portlet JSP.

You should also configure the setting processintegration.pendingtasks.lifetime in ConfigServices.properties
which defaults to a value of 30 seconds. This setting describes the interval at which a process engine is
queried for pending tasks of a user and the cache entries are updated.

wp.te.transformationAssociationCache
Default size: 500, default lifetime: infinite (-1), usage pattern: regular.

This cache contains transformation extension nodes. So typically there are only few entries in the cache.
There is typically one access to the cache per request. Building an entry to the cache involves one database
query. One entry is fairly small. Typically there is no need to modify the settings for this cache.