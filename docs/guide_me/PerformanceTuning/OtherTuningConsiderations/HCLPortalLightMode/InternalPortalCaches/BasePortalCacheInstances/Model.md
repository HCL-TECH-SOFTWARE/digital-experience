# Model

The model caches can be categorized into two groups. One group is for caching assembled models as a
whole (for example, com.ibm.wps.model.factory.UserSpecificModelCache). The other group is for caching
information within a model, for example, caching a ContentPage.

Figure Figure 10 Portal Model Cache Hierarchy describes the hierarchy of caches in the model component
and depending Portal components. The structure of the picture is identical to Figure Figure 9 Portal Access
Control Cache Hierarchy. The vertical axis shows caches with increasing aggregation of data.

The model component only caches data at a rather high aggregation level. As a result, all data cached here
hence is rather valuable and reloads can be expensive if the corresponding data is not available in the
lower-level caches. Model caches are dependent upon the datastore and Portal access control caches. The
figure only features the most important caches.

[Portal Model Cache Hierarchy](../../../../../images/PortalModelCacheHierarchy.png)

**com.ibm.wps.model.admin.ListModelCache**
Default size: 25, default lifetime: 86400, usage pattern: regular.
This cache stores a very limited amount of items and is properly invalidated, so changing its size or lifetime
will probably not provide a performance benefit.

**com.ibm.wps.model.admin.skin.SkinListCache.themestoskin**
Default size: 1000, default lifetime: 86400, usage pattern: regular
This cache stores the association of skins to themes. The optimal size correlates with number of themes in
use by Portal.

**com.ibm.wps.model.admin.skin.ThemeScopedSkinListCache**
Default size: 200, default lifetime: 86400, usage pattern: regular

Do not change the configuration of this cache. It caches a single item and is properly invalidated, so
changing size or lifetime will not improve performance.

com.ibm.wps.model.content.impl.DynamicLoadCache
Default size: 10, default lifetime: 86400, usage pattern: regular.
This cache contains all content nodes which represent extension nodes for dynamic assembly. In an
unmodified installation, this is only node, the “Content Root”, which has the PZN dynamic assembly
associated with it. Other nodes are root nodes for SAP integration or Dynamic UI.

com.ibm.wps.model.content.impl.ExplicitOidCache
Default size: 5000, default lifetime: 86400, usage pattern: regular
This cache is used to store the explicit derivations of a content node (Portal Page). The optimal size
correlates with number of pages defined in the Portal.

com.ibm.wps.model.content.impl.InternalUrlBacklinkCache
Default size: 5000, default lifetime: 10000, usage pattern: regular

This is a legacy cache that is only active for Mashups.

com.ibm.wps.model.content.impl.ResourceCache
Default size: 5000, default lifetime: 5600, usage pattern: regular.

This cache contains aggregated pages. In contrast to the data store page instance cache this cache contains
the complete models of pages and their content, i.e. the portlets and containers on them. In contrast, the
page instance cache holds the raw page data. This cache scales with the number of pages defined in your
Portal and the different sets of access control rights on these pages. This cache contains very ‘valuable’
information; it uses several other caches, for example, page instance and access control caches, to build its
data. Hence creating a cache entry usually only requires in-memory information, but can also lead to many
database queries. The size of an entry in the cache depends on the complexity of the pages, but typically
the objects are medium-sized, since they are usually made of references to other cached data. The cache
should be large enough to hold the most frequently accessed pages multiplied with the number of different
access control settings on these pages. Increasing the cache lifetime can be useful if page definitions do not
change often in your environment.

Example: A portal has 500 pages and all users have the same permissions on these. In addition, there are
another 50 pages; two groups of users have different access rights on these pages. In this case a maximum
of 600 entries would be in the cache.

com.ibm.wps.model.content.impl.UnknownTopologiesCache
Default size: 50, default lifetime: 15000, usage pattern: regular.

This cache stores a very limited amount of items and is properly invalidated, so changing its size or lifetime
will probably not provide a performance benefit.

**com.ibm.wps.model.content.impl.TopologyCache**
Default size: 10000, default lifetime: 5700, usage pattern: regular.

This cache contains Portal topology information, i.e. Portal navigation elements being composed of
navigation nodes and their sorted, access-control-filtered children. Topology elements undergo several
processing steps. First they are loaded from the database. Eventually they get added to the cache. This
cache contains only the completely processed topology entities. This cache is explicitly used during login
and whenever a user navigates to a part of the Portal where he has not been before during the same
session. If a cache entry is not found, a private copy is created that is then further processed. Once the
private copy is completely processed – that does not happen for all navigation nodes – it is added to the
cache. If a user finds an entry in the cache a reference is copied into his private topology model and
additional cache accesses are no longer necessary. Hence there is only one cache hit (or miss) per user and
navigation node. The cache scales with the number of navigation nodes and the number of different sets of
permissions on these and, possibly, the derivation chain (children and parents) a page belongs to. Entries in
this cache are expensive to create; they rely on other cached information, like the access control caches
and the page instance cache. The entries in the cache are medium sized, being mainly some lists of
references to other cached data. The cache should be sized in a way such the most important pages
multiplied with all the different sets of permissions that exist on theses page can be stored.

**com.ibm.wps.model.factory.public.pages.update**
Default size: 100, default lifetime: infinite (-1), usage pattern: regular.

Do not change the configuration of this cache. It caches a single item and is properly invalidated, so
changing size or lifetime will not improve performance.

**com.ibm.wps.model.factory.SingletonModelCache**
Default size: 100, default lifetime: infinite (-1), usage pattern: regular.

This cache stores a very limited amount of items and is properly invalidated, so changing its size or lifetime
will probably not provide a performance benefit.

**com.ibm.wps.model.factory.UserSpecificModelCache**
Default size: 6000, default lifetime: 19000, usage pattern: regular.

In this cache all models for all users are cached. Besides models that are user dependent, there are models
such as the ContentModel, which are session, markup and deviceclass dependent. Thus the number of
entries in this cache scales with the number of concurrently logged in users on one cluster node, multiplied
by the number of markups and device classes. Additional entries are created if a user logs in more than
once. A user logged in more than once has more than one session. The additional sessions cause more
entries to be added to the cache. In addition, if many users are interacting with the Portal administrative
pages the number of entries will be doubled.

Typically users have 4 models at maximum on a system where only rendering is taking place.

**com.ibm.wps.model.impl.RuntimeClientMap.patternCache**
Default size: 100, default lifetime: 86400, usage pattern: regular.

This cache stores the regular expression pattern for each client pattern. The optimal size correlates with
number of configured clients (See Portal Administration > Portal Settings > Supported clients).

**com.ibm.wps.model.impl.RuntimeClientMap.userAgent2client**
Default size: 250, default lifetime: infinite (-1), usage pattern: regular.

This cache maps user agent strings, i.e. the identification strings sent by browsers in the HTTP header, to
client profiles. These profiles basically correspond to Composite Capability/Preference Profiles (CC/PP)
profiles. Hence the cache scales with the number of browser identification strings. Data from this cache is
accessed during every request. Creating a cache entry is very cheap since the profile information is in
memory already. An entry in the cache hence is fairly small since already existing data is referenced.

**com.ibm.wps.model.portlet.PortletPoolCache**
This cache is for future use and can be disabled. It will be disabled by default in a future Cumulative Fix (CF)