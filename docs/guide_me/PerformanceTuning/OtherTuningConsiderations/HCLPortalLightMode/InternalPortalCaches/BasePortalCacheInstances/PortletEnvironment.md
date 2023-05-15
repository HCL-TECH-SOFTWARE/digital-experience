# Portlet Environment

The following caches are used to store various portlet definitions, configuration settings and attributes.

com.ibm.wps.pe.applicationregistry
Default size: 1000, default lifetime: 1800, usage pattern: regular.

This cache contains the portlet applications and the portlet definitions. This cache scales with the number
of portlet applications, portlet definitions and portlet clones that are in active use in the system.
Increasing the default lifetime can improve performance if portlet applications as well as portlet definitions
and portlet clones change infrequently. Rebuilding the cache entries is rather expensive since it requires
multiple database queries.

com.ibm.wps.pe.contenttypes.nocharset
Default size: 1000, default lifetime: infinite (-1), usage pattern: regular.

This cache contains content types in a specific format that is required by the portlet container. This cache is
used to avoid the calculation and formatting of response content types that are set by a portlet during a
portlet invocation. The cache scales with the number of different response content types.
By default cache entries do not expire, this setting should not be changed. Rebuilding cache entries does
not include database access but is computation intensive.

com.ibm.wps.pe.contenttypes.result
Default size: 1000, default lifetime: infinite (-1), usage pattern: regular.

This cache contains content types in specific format that is required by the portlet container. The objects
that are held in this cache have another format and are processed differently than the objects in cache
com.ibm.wps.pe.contenttypes.nocharset. This cache is used to avoid the calculation and formatting of
response content types that are set by a portlet during a portlet invocation. The cache scales with the
number of different response content types.

By default cache entries do not expire, this setting should not be changed. Rebuilding cache entries does
not include database access but is computation intensive.

com.ibm.wps.pe.deployedresources
Default size: 500, default lifetime: 15000, usage pattern: regular.

This cache contains web module information and servlet information which are associated with portlets.
The cache scales with the number of deployed portlet web applications and portlets that are in active use
in the system.

Increasing the default lifetime can improve performance if web applications as well as portlet definitions
and portlet clones change infrequently. Rebuilding the cache entries is rather expensive since it requires
multiple database queries.

com.ibm.wps.pe.portletentity
Default size: 10000, default lifetime: 28800, usage pattern: regular.

This cache contains configuration for portlets on pages (portlet instances, shared and per-user). It scales
with the number of pages defined in your Portal, the number of portlets on the pages and the number of
portlet instances that have been personalized by users. The cache is accessed many times during Portal
page rendering. It is important that the most relevant portlet entities are cached. Creating a cache entry
involves a single database lookup. An entry into the cache is fairly small.

Example: In a Portal with 500 pages and on average three portlets per page, the optimal cache size would
be 1500 to store all possible portlet entity data in the cache, if users are not allowed to personalize the
portlets. If the Portal has 100 users that are logged in concurrently and these users have personalized 50
portlets on average, the required cache size to cache all data would be 6500. These numbers give the
maximum number of entries to the cache. Typically for this cache it is not required to have all portlet
entities in memory, because most users will not view all pages so that not all personalized data must be
loaded. The most frequently accessed un-personalized portlet entities should fit into the cache, though.

com.ibm.wps.pe.portletentitycounter
Default size: 2000, default lifetime: 1800, usage pattern: regular.

This cache contains an approximate number of personalized entities per shared portlet instance. It is used
for heuristics to avoid database access when determining the portlet instance that is associated with a
portlet window. The cache scales with the number of shared portlet instances that are in active use in the
system.

Increasing the default lifetime can improve performance if portlet instances change infrequently.
Rebuilding the cache entries is rather expensive since it requires multiple database queries.

com.ibm.wps.pe.portletmodel.portletdefinition
Default size: 1000, default lifetime: 1800, usage pattern: regular.

This cache contains portlet definitions. These definitions could be considered meta information about the
deployed portlets. The cache scales with the number of portlet definitions that are in active use in the
system.

Increasing the default lifetime can improve performance if portlet definitions change infrequently.
Rebuilding the cache entries is rather expensive since it requires multiple database queries.

com.ibm.wps.pe.portletregistry
Default size: 1000, default lifetime: 1800, usage pattern: regular.

This cache contains portlet definitions. This cache holds objects of a different class compared with cache
com.ibm.wps.pe.portletmodel.portletdefinition. The cache scales with the number of portlet definitions
that are in active use in the system.
**
Increasing the default lifetime can improve performance if portlet definitions change infrequently.
Rebuilding cache entries is rather expensive. It includes loading data from the database with several calls.