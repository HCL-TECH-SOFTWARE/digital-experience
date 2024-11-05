# Base Portal Cache Instances

This section describes the caches in HCL Portal 9.5 along with hints to best configure those caches. As seen in previous sections, which detail the modifications made for performance benchmarks, the size and lifetime properties are the most commonly modified properties when tuning Portal caches. You may wish to increase the size of a cache if many values are used on a regular basis and there is sufficient space available in the Java heap. You may wish to increase the lifetime of the entries of a cache if the cached data rarely changes and it is not critical to your business to reflect changes immediately in your Portal. The changes mentioned in this section are either set in the Resource Environment Provider section of the WebSphere Integrated Solutions Console or are set in the file CacheManagersService.properties. For instructions on configuration caches, see the Cache Manager Service section in base Portal tuning.

Each cache description includes the following attributes:

Default size, default lifetime and cache usage pattern

Cache content and scaling factor(s) (i.e. what causes the cache to grow)

Information on the read and write access to the cache

Approximate costs for re-creating cache entries and relative size of cached objects. Small objects range from 16 to 300 bytes and the largest cache entries are not larger than a few thousand bytes. One exception is the access control caches in systems with many resources per user. These caches can hold entries that are 50KB or more since they contain information on all the resources which a user can access.

Some cache descriptions include a sample scenario with suggested property values.

_Access Control_

This section describes each of the access control caches. It is critical for proper operation of a Portal that the access control information be current. Hence it is vital that these caches be shared within a cluster so that the information is propagated to all members of the cluster. Different lifetime values should be chosen to avoid concurrent reload of information from multiple caches. This pattern of rather random lifetime and invalidation intervals could also be applied to other caches.

Below figure of Portal Access Control Cache Hierarchy shows the relationships among the various caches.

The cylinders represent cache instances. The gray caches are caches of the Portal user management

(PUMA) component that are closely related to the caches of the Portal access control component. The PUMA caches contain information originating from the user registry. Portal access control uses these caches for user identification and group membership retrieval.

The vertical axis represents the cache aggregation direction. The cache instances in higher layers leverage cache instances of lower layers to compute their values. For example, when computing effective permissions (entitlements) for a user (cached in the ExplicitEntitlementsCache), the Portal access control component leverages cache values from the ChildResourcesCache and RoleMappingCache.

![alt text](../../../Portal%20Access%20Control%20Cache%20Hierarchy.png)

**com.ibm.wps.ac.AccessControlUserContextCache**

Default size: 6000, default lifetime: 1200, usage pattern: regular.

This cache contains the access control user context objects, a local cache for permissions assigned to a specific user. If possible, all requests against access control are answered using this information so that access control methods can return very quickly. This cache scales with the number of active users. For fast Portal operation, you should make sure that the entries for all actively working users fit into the cache, especially if a user has access to many Portal resources. Entries are invalidated from the cache upon any Portal administrative action. Creating a cache entry typically is rather cheap because most information is in memory, but can take a while if the required information cannot be found in other caches. An entry in the cache can be become very large, depending on the number of resources the user can access. 

**com.ibm.wps.ac.ChildResourcesCache**

Default size: 10000, default lifetime: 28800, usage pattern: regular.

This cache contains the resource hierarchy within Portal access control. The size of this cache scales with the number of protected resources accessed by the active users in the system, like the protected resources cache. This cache does not contain leaf objects in the access control tree, so the number of entries typically is smaller. The cache is accessed during most Portal access control requests. Entries are invalidated from this cache during resource deletion, parent change of the resource, modification of the resource owner, externalization, internalization, and role block change. Creating a cache entry includes a multi-row query against the Portal database. An entry in the cache is fairly small.

**com.ibm.wps.ac.CommonApplicationRoleMgmt**

Default size: 30000, default lifetime: 8450, usage pattern: physical cache instance for the following caches:

com.ibm.wps.ac.ApplicationRoleForApplicationUserCache

com.ibm.wps.ac.MappedRolesToUserCache, com.ibm.wps.ac.ApplicationRoleOIDCache 

com.ibm.wps.ac.ApplicationRoleDescriptorCache 

com.ibm.wps.ac.ApplicationRolesForPrincipalCache 

com.ibm.wps.ac.ApplicationRoleChildrenCache 

com.ibm.wps.ac.ApplicationRoleMappingsCache 

com.ibm.wps.ac.ContainedRolesCache

This physical cache instance holds all entries from application role specific cache wrapper instances.

**com.ibm.wps.ac.CommonExplicitEntitlementsCache**

Default size: 33000, default lifetime: 28800, usage pattern: physical cache instance for the following caches:

com.ibm.wps.ac.ExplicitEntitlementsCache

com.ibm.wps.ac.ExplicitEntitlementsCache.CONTENT_NODE

com.ibm.wps.ac.ExplicitEntitlementsCache.PORTLET_APPLICATION_DEFINITION 

com.ibm.wps.ac.ExplicitEntitlementsCache.PORTLET_DEFINITION 

com.ibm.wps.ac.ExplicitEntitlementsCache.USER_GROUP 

com.ibm.wps.ac.ExplicitEntitlementsCache.VIRTUAL 

com.ibm.wps.ac.ExplicitEntitlementsCache.WEB_MODULE 

com.ibm.wps.ac.ExplicitEntitlementsCache.WSRP_PRODUCER

This physical cache instance holds all entries from selected entitlements specific cache wrapper instances. More specifically, these caches contain the permissions of a user or group on a number of resources of the same ResourceType. There are dedicated caches for the different ResourceTypes. For example, the cache for pages is called com.ibm.wps.ac. ExplicitEntitlementsCache.CONTENT_NODE. All ResourceTypes that are not specified explicitly will be cached in the default cache. The size of this cache scales with the number of active users/groups multiplied by the different ResourceTypes valid for this cache and accessed by the users and groups, either by ‘using’ the resource during navigating the Portal or by Portal administration.

There is one entry per set of permissions per WebSphere Portal domain. Entries are read during ‘regular’ access control requests, during page rendering and, especially, during Portal administration. If a certain resource type is not used, you will see only misses and no other activity on the corresponding cache. Entries are invalidated from this cache during all access control modifications and logins. Creating an entry in one of these caches typically can be done from in-memory information in the lower-level caches. If the required information is not available multiple database requests might be required to create a cache entry. An entry into the cache is rather small, but built of multiple objects typically stored in other caches.

**com.ibm.wps.ac.CommonRolesCache**

Default size: 40000, default lifetime: 28800, usage pattern: physical cache instance for the following caches:

com.ibm.wps.ac.RolesCache

com.ibm.wps.ac.ParentResourceRoleMappingCache 

com.ibm.wps.ac.ResourceRoleMappingCache

This physical cache instance holds all entries from roles specific cache wrapper instances. Specifically, those caches contain the access control role instances. The size of an individual cache scales with the number of active users/groups multiplied by the different ResourceTypes they access. There is one entry per role instance per principal per resource type per HCL Portal domain. Data is read from the cache during many Portal access control requests, if the corresponding entitlements are not already cached. Entries are invalidated from this cache during role mapping creation, role mapping deletion, resource deletion, externalization, and internalization. Creating a cache entry means executing at least one, but potentially multiple database queries. An entry in the cache is relatively small.

**com.ibm.wps.ac.ProjectDeletedResourcesCache**

Default size: 1000, default lifetime: infinite (-1), usage pattern: regular

This cache stores authorization information about pages which are defined outside the project and have been deleted as part of a project. This cache contains the project identification and the database domain identification. Since there are two possible domains, release or jcr, the maximum number of cache entries is twice the number of projects.

Note that in Portal 8, this cache was combined into the com.ibm.wps.ac.CommonProjectResourcesCache.

**com.ibm.wps.ac.ProjectDraftResourcesCache**

Default size: 1000, default lifetime: infinite (-1), usage pattern: regular

This cache stores authorization information about draft pages created in a project. This cache contains the project identification and the database domain identification. Since there are two possible domains, release or jcr, the maximum number of cache entries is twice the number of projects.

Note that in Portal 8, this cache was combined into the com.ibm.wps.ac.CommonProjectResourcesCache. com.ibm.wps.ac.DataEventPropagationCache

This is a special purpose cache that is used especially for Portal access control cache invalidation communication. Do not change its configuration.

**com.ibm.wps.ac.DependentProtectedResourceCache**

Default size: 10000, default lifetime: 14400, usage pattern: regular.

The protected resource caches contain the resources protected by Portal access control. The size of these caches scale with the number of protected resources accessed by the active users in the system. The

DependentProtectedResourcesCache is used by WCM content item resources only, while the

ProtectedResourcesCache does hold resources for various Portal resource types. Entries are read from the cache during every permission call or entitlements call against access control. Entries are invalidated from this cache during resource deletion, resource relocation, and modification of the resource state (private/shared), modification of the resource owner, externalization, internalization, and role block change. Creating a cache entry requires a single-row lookup in the Portal database. An entry in the cache is relatively small.

**com.ibm.wps.ac.ExplicitEntitlementsCache**

Default size: 10000, default lifetime: varying (around 10000), usage pattern: invalidation checking.

Includes com.ibm.wps.ac.ExplicitEntitlementsCache.ICM_CONTENT.dyn com.ibm.wps.ac.ChildEntitlementsCache com.ibm.wps.ac.SingleEntitlementsCache

These caches contain additional access control data that is not directly cached in the com.ibm.wps.ac.CommonExplicitEntitlementsCache. These caches are dedicated to specialized resource types and uncommon use cases. Typically, only some or none of those caches are filled during a typical scenario as the majority of data is already cached in the CommonExplicitEntitlementsCache.

**com.ibm.wps.ac.ExternalOIDCache**

Default size: 28800, default lifetime: 8640, usage pattern: regular.

This cache contains the mapping between the external ObjectIDs of individual protected resources, for example page or portlet IDs, and the Portal access control specific ObjectIDs stored in the database table PROT_RES. Entries are read from the cache during many Portal access control requests. The size of this cache scales with the number of protected resources accessed by the active users in the system. Since this mapping is immutable, this cache is never explicitly invalidated. Creating a cache entry requires a single row database query. An entry in the cache is fairly small. 

**com.ibm.wps.ac.groupmanagement.CommonUserGroupMgmt**

Default size: 5000, default lifetime: 3600, usage pattern: physical cache instance for the following caches:

com.ibm.wps.ac.groupmanagement.NestedGroupCache 

com.ibm.wps.ac.groupmanagement.GroupCache 

com.ibm.wps.ac.groupmanagement.PeerGroupCache

For WP9.5, this cache was split back into com.ibm.wps.ac.groupmanagement.GroupCache and com.ibm.wps.ac.groupmanagement.NestedGroupCache for performance reasons. com.ibm.wps.ac.groupmanagement.PeerGroupCache was used for Application Infrastructure, which is no longer supported.

**com.ibm.wps.ac.groupmanagement.GroupCache**

Default size: 5000, default lifetime: 3600, usage pattern: regular

GroupCache is used in an HCL Portal when nested groups are disabled. This cache contains the direct groups to which a user belongs. The size of this cache scales with the number of active users and the number of virtual Portals they access. The cache is accessed during login into Portal, but typically not during regular Portal navigation. Its main use case is during administration of users and user groups. Entries are invalidated from this cache after user and group administrative changes. Creating a new cache entry requires queries against the VMM component and then typically against the user repository. An entry in the cache is medium-sized.

**com.ibm.wps.ac.groupmanagement.NestedGroupCache**

Default size: 5000, default lifetime: 3600, usage pattern: regular

NestedGroupCache is used in a WebSphere Portal when nested groups are enabled. This cache contains the nested groups to which a user belongs. The size of this cache scales with the number of active users and the number of virtual Portals they access. The cache is accessed during login into Portal, but typically not during regular Portal navigation. Its main use case is during administration of users and user groups. Entries are invalidated from this cache after user and group administrative changes. Creating a new cache entry requires queries against the VMM component and then typically against the user repository. An entry in the cache is medium-sized.

**com.ibm.wps.ac.OwnedResourcesCache**

Default size: 5000, default lifetime: 28800, usage pattern: invalidation checking.

This cache maps resource owners (user groups or individual users) to the resources they own. This cache scales with the number of active users/groups multiplied with the different ResourceTypes they access. There is one entry in the cache per principal per resource type per HCL Portal domain. Data is read from this cache during many Portal access control requests, if the corresponding entitlements are not already cached in an entitlements cache. Entries are invalidated from this cache during resource deletion, modification of the resource owner, and externalization. Creating a cache entry means executing a multirow query against the Portal database. An entry in the cache is relatively small.

In many scenarios, there is no benefit from this cache and it can be disabled. In other scenarios, it may be beneficial but only with cache sizes near the default. Larger cache sizes can make performance worse. _Performance testing is required to determine the benefit of this cache for a specific use case and data population._

**com.ibm.wps.ac.PermissionCollectionCache**

Default size: 2000, default lifetime: 14400, usage pattern: regular; admit-threshold:2

This cache contains permission collections that can be used for permission checks. It scales with the number of permissions in the system, i.e. the number of Portal resources and permissions assigned on those. Entries in the cache typically are requested very frequently during permission checks. An admitthreshold is used to avoid caching rarely used permissions. You may wish to try different admit-threshold settings to tune this cache. Entries are never invalidated from the cache. Creating a cache entry is very fast since all required information is in-memory. A cache entry is small.

**com.ibm.wps.ac.ProtectedResourceCache**

Default size: 5000, default lifetime: 14400, usage pattern: regular.

This cache contains the resources protected by Portal access control. The size of this cache scales with the number of protected resources accessed by the active users in the system. Entries are read from the cache during every permission call or entitlements call against access control. Entries are invalidated from this cache during resource deletion, resource relocation and modification of the resource state

(private/shared), modification of the resource owner, externalization, internalization, and role block change. Creating a cache entry requires a single-row lookup in the Portal database. An entry in the cache is relatively small.

_Datastore_

The datastore caches contain data read from the Portal database. The goal of these caches is not to be a complete image of the DB content, but to have frequently-accessed but raw information available for all other Portal components to use.

**com.ibm.wps.datastore.pageinstance.DerivationCache**

Default size: 3000, default lifetime: infinite (-1), usage pattern: regular.

This cache stores the mappings between pages and their derivation children, or empty mappings if no such children exist. Like the pageinstance.OIDCache cache this one also is accessed very frequently during page rendering and administration. Creating a cache entry involves one multi-row database query. This cache also scales with the number of pages in the system. Hence, you can use the same sizes for

com.ibm.wps.datastore.pageinstance.OIDCache and this one. In most Portal usage scenarios the actual size of this cache will be somewhat lower than the page instance cache. An average entry in the cache is rather small. Only if all your pages have long lists of derivation children will the entries become larger. To achieve best performance, in terms of cache hit rate, the size should be set to a value so that all pages defined in the system fit into the cache. This corresponds to the combined row count of the PAGE_INST database tables in the release, community and customization databases.

**com.ibm.wps.datastore.pageinstance.DynamicNodeCache**

Default size: 5, default lifetime: infinite (-1), usage pattern: regular.

This cache stores one list per virtual Portal. These lists contain all pages in the corresponding domain that are flagged as dynamic nodes, i.e. dynamic assembly content nodes can be added below these pages. Since the number of domains does not grow, the size scales with the number of virtual portals. The cache size should be #Virtual Portals \* 3+ 3. The size of one entry into the cache ranges from small in a Portal with very few dynamic nodes up to medium with many dynamic nodes in the system.

**com.ibm.wps.datastore.pageinstance.MetaDataCache**

Default size: 499, default lifetime: 3600, usage pattern: regular

This cache stores information relevant for retrieving pages based on page parameters. The primary use case that benefits from this cache is retrieving the individual target pages from friendly URLs.

The size of the cache scales with the number of friendly URLs defined and used in Portal. The entries in this cache are rather small.

**com.ibm.wps.datastore.pageinstance.OIDCache**

Default size: 3000, default lifetime: infinite (-1), usage pattern: regular.

This cache stores information on Portal pages for fast retrieval during login or page navigation. It scales with the number of page instances in the system. It is one of the most frequently used caches and should be large enough to hold all pages that are frequently accessed by users. Pages are loaded and put into the cache by direct navigation, creating a link to another page or by working with the page during Portal administration (always including all higher derivation levels). Creating a cache entry includes four multi-row database lookups. An entry to the cache is medium sized. To achieve best performance, in terms of cache hit rate, the size should be set to a value so that all pages defined in the system fit into the cache. This corresponds to the combined row count of the PAGE_INST database tables in the release, community and customization databases.

**com.ibm.wps.datastore.pageinstance.OIDDraftCache**

Default size: 500, default lifetime: infinite (-1), usage pattern: regular.

This cache stores information on Portal draft pages for fast retrieval during login or page navigation. It scales with the number of draft page instances in the system. It should be large enough to hold all draft pages that are frequently accessed by users. Draft pages are loaded and put into the cache by direct navigation, creating a link to another page or by working with the page during Portal administration (always including all higher derivation levels). Creating a cache entry includes four multi-row database lookups. An entry to the cache is medium sized. To achieve best performance, in terms of cache hit rate, the size should be set to a value so that all draft pages defined in the system fit into the cache. This corresponds to the row count of the PAGE_INST_DRAFT database table in the release database.

**com.ibm.wps.datastore.portaliddescriptor.VPIDCache**

Default size: 200, default lifetime: infinite (-1), usage pattern: regular.

This cache maps long virtual portal object IDs to the corresponding Portal internal short ID and vice versa. It scales with two times the number of virtual portals in the system, plus two additional entries. Data is read from the cache during every rendering request.

For optimal caching the size should be set to twice the number of Virtual Portals defined in the system plus two entries. Creating a cache entry involves one single-row database lookup. An entry object into the cache is fairly small.

**com.ibm.wps.datastore.services.Identification.OidAndUniqueName.cache** 

Default size: 5000, default lifetime: infinite (-1), usage pattern: regular.

This cache stores unique names. It is used quite frequently during page rendering and especially administration of unique names. Page and portlet unique names make up the biggest part of the cache content. The cache should be large enough to hold entries for the most frequently used pages and portlets having a unique name associated with them. Note that not all resources have a unique name associated with them. To eliminate database lookups the cache size could correspond to the database table

UNIQUE_NAME multiplied by two, to allow for mapping in two directions. Creating a cache entry involves reading one entry from the Portal database. An entry object into the cache is fairly small.

**com.ibm.wps.datastore.services.Identification.SerializedOidString.cache**

Default size: 5000, default lifetime: infinite (-1), usage pattern: cascading object types.

This cache stores serialized ObjectIDs used in request parameters or XML Access files. It contains a subset of all the loaded ObjectIDs in memory. It scales with the number of ObjectIDs in the system, but the serialized version of all of these IDs are not requested, hence the actual size is impossible to predict. The cache is used during every request. Creating a cache entry is rather cheap. Typically all information can be retrieved in memory, database lookups are scarcely necessary. A cache entry is fairly small.

_Dynamic Assembly / Process Integration_

The following caches are used when dynamic UI functionality, often together with WebSphere Process Server integration are used.

**processintegration.PendingTasksCache**

Default size: 2500, default lifetime: infinite (-1), usage pattern: regular.

This cache contains the pending process tasks in the scope of a user. The size of this cache scales with the number of users concurrently using process integration functionality. Each cache entry consists of a complete set of pending process tasks for a given user and therefore can be fairly large in memory. Reloading a cache entry involves accessing the Human Task Manager via an EJB call. The cache is always accessed when the PendingTasksTag is used in a portlet JSP.

You should also configure the setting processintegration.pendingtasks.lifetime in ConfigServices.properties which defaults to a value of 30 seconds. This setting describes the interval at which a process engine is queried for pending tasks of a user and the cache entries are updated.

**wp.te.transformationAssociationCache**

Default size: 500, default lifetime: infinite (-1), usage pattern: regular.

This cache contains transformation extension nodes. So typically there are only a few entries in the cache. There is typically one access to the cache per request. Building an entry to the cache involves one database query. One entry is fairly small. Typically there is no need to modify the settings for this cache.

_Model_

The model caches can be categorized into two groups. One group is for caching assembled models as a whole (for example, com.ibm.wps.model.factory.UserSpecificModelCache). The other group is for caching information within a model, for example, caching a ContentPage.

Portal Model Cache Hierarchy describes the hierarchy of caches in the model component and depending Portal components. The structure of the picture is identical to Figure Figure 9 Portal Access Control Cache Hierarchy. The vertical axis shows caches with increasing aggregation of data.

The model component only caches data at a rather high aggregation level. As a result, all data cached here hence is rather valuable and reloads can be expensive if the corresponding data is not available in the lower-level caches. Model caches are dependent upon the datastore and Portal access control caches. The figure only features the most important caches.

**Portal Model Cache Hierarchy**

![alt text](../../../Portal%20Model%20Cache%20Hierarchy.png)

**com.ibm.wps.model.admin.ListModelCache**

Default size: 25, default lifetime: 86400, usage pattern: regular.

This cache stores a very limited amount of items and is properly invalidated, so changing its size or lifetime will probably not provide a performance benefit.

**com.ibm.wps.model.admin.skin.SkinListCache.themestoskin** 

Default size: 1000, default lifetime: 86400, usage pattern: regular

This cache stores the association of skins to themes. The optimal size correlates with the number of themes in use by Portal.

com.ibm.wps.model.admin.skin.ThemeScopedSkinListCache Default size: 200, default lifetime: 86400, usage pattern: regular Do not change the configuration of this cache. It caches a single item and is properly invalidated, so changing size or lifetime will not improve performance.

**com.ibm.wps.model.content.impl.DynamicLoadCache**

Default size: 10, default lifetime: 86400, usage pattern: regular.

This cache contains all content nodes which represent extension nodes for dynamic assembly. In an unmodified installation, this is the only node, the “Content Root”, which has the PZN dynamic assembly associated with it. Other nodes are root nodes for SAP integration or Dynamic UI.

**com.ibm.wps.model.content.impl.ExplicitOidCache**

Default size: 5000, default lifetime: 86400, usage pattern: regular

This cache is used to store the explicit derivations of a content node (Portal Page). The optimal size correlates with the number of pages defined in the Portal.

**com.ibm.wps.model.content.impl.InternalUrlBacklinkCache** 

Default size: 5000, default lifetime: 10000, usage pattern: regular

This is a legacy cache that is only active for Mashups.

**com.ibm.wps.model.content.impl.ResourceCache**

Default size: 5000, default lifetime: 5600, usage pattern: regular.

This cache contains aggregated pages. In contrast to the data store page instance cache this cache contains the complete models of pages and their content, i.e. the portlets and containers on them. In contrast, the page instance cache holds the raw page data. This cache scales with the number of pages defined in your Portal and the different sets of access control rights on these pages. This cache contains very ‘valuable’ information; it uses several other caches, for example, page instance and access control caches, to build its data. Hence creating a cache entry usually only requires in-memory information, but can also lead to many database queries. The size of an entry in the cache depends on the complexity of the pages, but typically the objects are medium-sized, since they are usually made of references to other cached data. The cache should be large enough to hold the most frequently accessed pages multiplied with the number of different access control settings on these pages. Increasing the cache lifetime can be useful if page definitions do not change often in your environment.

Example: A portal has 500 pages and all users have the same permissions on these. In addition, there are another 50 pages; two groups of users have different access rights on these pages. In this case a maximum of 600 entries would be in the cache.

**com.ibm.wps.model.content.impl.UnknownTopologiesCache** 

Default size: 50, default lifetime: 15000, usage pattern: regular.

This cache stores a very limited amount of items and is properly invalidated, so changing its size or lifetime will probably not provide a performance benefit.

**com.ibm.wps.model.content.impl.TopologyCache**

Default size: 10000, default lifetime: 5700, usage pattern: regular.

This cache contains Portal topology information, i.e. Portal navigation elements being composed of navigation nodes and their sorted, access-control-filtered children. Topology elements undergo several processing steps. First they are loaded from the database. Eventually they get added to the cache. This cache contains only the completely processed topology entities. This cache is explicitly used during login and whenever a user navigates to a part of the Portal where he has not been before during the same session. If a cache entry is not found, a private copy is created that is then further processed. Once the private copy is completely processed – that does not happen for all navigation nodes – it is added to the cache. If a user finds an entry in the cache a reference is copied into his private topology model and additional cache accesses are no longer necessary. Hence there is only one cache hit (or miss) per user and navigation node. The cache scales with the number of navigation nodes and the number of different sets of permissions on these and, possibly, the derivation chain (children and parents) a page belongs to. Entries in this cache are expensive to create; they rely on other cached information, like the access control caches and the page instance cache. The entries in the cache are medium sized, being mainly some lists of references to other cached data. The cache should be sized in such a way that the most important pages multiplied with all the different sets of permissions that exist on these pages can be stored.

**com.ibm.wps.model.factory.public.pages.update**

Default size: 100, default lifetime: infinite (-1), usage pattern: regular.

Do not change the configuration of this cache. It caches a single item and is properly invalidated, so changing size or lifetime will not improve performance.

**com.ibm.wps.model.factory.SingletonModelCache**

Default size: 100, default lifetime: infinite (-1), usage pattern: regular.

This cache stores a very limited amount of items and is properly invalidated, so changing its size or lifetime will probably not provide a performance benefit.

**com.ibm.wps.model.factory.UserSpecificModelCache**

Default size: 6000, default lifetime: 19000, usage pattern: regular.

In this cache all models for all users are cached. Besides models that are user dependent, there are models such as the Content Model, which are session, markup and device class dependent. Thus, the number of entries in this cache scales with the number of concurrently logged in users on one cluster node, multiplied by the number of markups and device classes. Additional entries are created if a user logs in more than once. A user logged in more than once has more than one session. The additional sessions cause more entries to be added to the cache. In addition, if many users are interacting with the Portal administrative pages the number of entries will be doubled.

Typically users have 4 models at maximum on a system where only rendering is taking place.

**com.ibm.wps.model.impl.RuntimeClientMap.patternCache**

Default size: 100, default lifetime: 86400, usage pattern: regular.

This cache stores the regular expression pattern for each client pattern. The optimal size correlates with number of configured clients (See Portal Administration > Portal Settings > Supported clients).

**com.ibm.wps.model.impl.RuntimeClientMap.userAgent2client**

Default size: 250, default lifetime: infinite (-1), usage pattern: regular.

This cache maps user agent strings, i.e. the identification strings sent by browsers in the HTTP header, to client profiles. These profiles basically correspond to Composite Capability/Preference Profiles (CC/PP) profiles. Hence the cache scales with the number of browser identification strings. Data from this cache is accessed during every request. Creating a cache entry is very cheap since the profile information is in memory already. An entry in the cache hence is fairly small since already existing data is referenced.

**com.ibm.wps.model.portlet.PortletPoolCache**

This cache is for future use and can be disabled. It will be disabled by default in a future Cumulative Fix (CF).

_Policy_

The HCL Portal policy manager uses the following caches.

**com.ibm.wps.mpages.ActiveProjectOIDCache**

Default size: 50, default lifetime: uses globally configured default lifetime, usage pattern: regular.

This cache contains all ObjectIDs of active projects. Its semantic is more like a set than a map as it is used to check if the ObjectID of a project maps to an active project. If that information is not obtained through the cache, i.e., a cache miss, then some expensive WCM calls possibly including JCR calls, have to be executed. The cache size scales with the number of active projects. Cache entries are very small. If no projects are used at all, e.g., in a rendering-only system then this cache can be deactivated. 

**com.ibm.wps.mpages.ProjectNameUUIDCache**

Default size: 100, default lifetime: uses globally configured default lifetime, usage pattern: regular.

This cache allows mapping from a project name to its UUID. If that information is not obtained through the cache, i.e., a cache miss, then some expensive WCM calls possibly including JCR calls, have to be executed. The cache size scales with the number of active projects. Cache entries are very small. If no projects are used at all, e.g., in a rendering-only system then this cache can be deactivated.

**com.ibm.wps.mpages.ProjectUUIDNameCache**

Default size: 50, default lifetime: uses globally configured default lifetime, usage pattern: regular.

This cache allows mapping from a project's UUID to its name. If that information is not obtained through the cache, i.e., a cache miss, then some expensive WCM calls, possibly including JCR calls, have to be executed. The cache size scales with the number of active projects. Cache entries are very small. If no projects are used at all, e.g., in a rendering-only system, then this cache can be deactivated.

**com.ibm.wps.policy.services.PolicyCacheManager**

Default size: 1000, default lifetime: 43200, usage pattern: regular.

This cache stores the policies. Out of the box, Portal comes with twelve theme policies and one mail policy, each of them being one entry into the cache. Hence the maximum number of cache entries depends on your system and the number of custom policies. This cache is accessed fairly often, if you use policies at all. The HCL Portal 8.5 default theme uses policies and query this cache during every request, but it is possible to create themes that do not use policies at all. Furthermore, when opening mails the cache is accessed. Creating a cache entry involves reading data from a database. An entry into the cache is fairly small.

**com.ibm.wps.policy.services.UserPolicyNodeCacheManager**

Default size: 2500, default lifetime: 600, usage pattern: regular.

This cache stores connections between a policy and a policy target, for example a user distinguished name. Theme policies do not use targets, hence there is no cache entry based on these policies. The out-of-the-box mail policy uses the user as target. Hence there is at least one entry for every user accessing the CPP mail portlet. The size of a cache entry depends on the size of the target object. For a distinguished name a cache entry is fairly small. Project Caches

_Portal User Management_

The following caches are used by the Portal user management component (PUMA). They are closely related to the access control caches and caching within the WebSphere WIM and VMM functionality. 

**com.ibm.wps.puma.CommonPrincipalCache**

Default size: 30000, default lifetime: 3600, usage pattern: physical cache instance for the combined caches com.ibm.wps.puma.\* instances.

This physical cache instance holds entries from PUMA OID_User_Cache, OID_Group_Cache,

DN_User_Cache and DN_Group_Cache. Those caches contain the mapping between the distinguished name / internal ObjectID of users and groups and their internal data object. The size of these caches scales with the number of active users and groups or user and groups that are used for delegation multiplied with factor 4 (as each entry is stored with different keys to enhance lookup). Entries are invalidated from this cache during deletion of a user or group. Creating an entry requires database and WIM/VMM access that may trigger further LDAP requests. An entry in the cache is fairly large.

**com.ibm.wps.puma.DN_OID_Cache & com.ibm.wps.puma.OID_DN_Cache**

Default size: 30000 & 5000, respectively, default lifetime: infinite (-1), usage pattern: regular.

These two caches contain the mapping between the distinguished name of users and groups and their internal ObjectID identifier. The size of these caches scale with the number of active users and groups or users and groups that are used for delegation. Entries are invalidated from this cache during deletion of a user or group. Creating an entry requires one database lookup. An entry into the caches is fairly small.

**com.lotus.cs.services.domino.DominoService**

Default size: 2000, default lifetime: 11080, usage pattern: regular.

This cache stores user-specific Domino information. It is used for HCL Sametime awareness functions. It scales with the number of users working with the corresponding function. The cache is accessed whenever awareness functions are requested during page rendering. Creating a cache entry is cheap and simply involves creating a new Domino session. An entry to the cache is medium-sized.

**com.lotus.cs.services.UserEnvironment**

Default size: 2000, default lifetime: 10880, usage pattern: regular.

This cache stores user-specific information. Entries represent a compilation of credential information for one user to different LDAP directories and details which data on the given user can be found in which directory. For example, the general info may be stored in one directory, but the mail server and file may be in another. The cache scales with the number of users working with Collaboration portlets. The cache is accessed whenever a Collaboration portlet such as for use with HCL Sametime is accessed. Creating a cache entry can be fairly expensive since multiple resources might be queried. An entry to the cache is medium-sized.

_Digital Data Connector (DDC)_

Portal uses the Digital Data Connector caches for Social Rendering. See [Performance tuning for lists of social objects](../../../../../../build_sites/social_rendering/administering_social_list/soc_rendr_perf_tune_cach.md) for more information on the following caches.

**com.ibm.workplace.wcm.pzn.plr.BeanListCache**

Default size: 307, default lifetime: 900, usage pattern: regular

The bean list cache caches the bean list Java objects that the Digital Data Connector plug-ins return. The DDC plug-ins control the cache key generation for the individual entries and whether the bean lists are automatically removed from the cache during user login. By default, this cache is enabled.

Note: Single entries of this cache can have a size of several MB. Therefore, the default number of cache entries for this cache is much lower than the default of other portal caches. When you use the bean list cache, closely monitor the cache and tune it as required. You might also consider the size of individual cache entries and how to influence it. For more information, see [Performance tuning for lists of social objects](../../../../../../build_sites/social_rendering/administering_social_list/soc_rendr_perf_tune_cach.md).

**com.ibm.workplace.wcm.pzn.plr.xml.DocumentCache**

Default size: 3007, default lifetime: 900, usage pattern: regular

The document cache is used by the generic XML DDC plug-in for caching the Document Object Model (DOM) objects for individual source URIs. This cache specifically the DOMs for associated item attributes. If an individual associated item attribute is flagged as shared in the list-rendering profile, the cache entries are shared between different users. Such shared documents do not get invalidated on user login.

Documents that are loaded through non-shared associated item attributes are cached separately per user. These cache entries are automatically invalidated during login. By default, this cache is enabled.

**com.ibm.workplace.wcm.pzn.plr.ListRenderingCache**

Default size: 3007, default lifetime: 900, usage pattern: regular

The list-rendering cache caches the markup that a specific appearance component generates for a specific bean list instance. If you enable this cache, updates in the appearance component might not become visible immediately, as updates to the corresponding IBM Web Content Manager design components do not invalidate this cache. In general, the entries in this cache are invalidated together with the corresponding bean list objects in the bean list cache listed earlier in this topic. As a result, it is good practise to disable this cache on authoring systems and enable it on delivery systems.

To use this cache, you must use the ListRenderingCache rendering plug-in to instrument the Web Content Manager design components that are involved in the markup generation for this cache. For more information see [Administering social lists](../../../../../../build_sites/social_rendering/administering_social_list/index.md).

_Mobile_

**com.ibm.wps.devicesupport.client2deviceclass**

Default size: 25, default lifetime: infinite (-1), usage pattern: regular

This cache stores the list of device classes associated with a client as a list of ObjectIds. The recommended size is equal to the number of defined (and regularly) used clients in WebSphere Portal.

**com.ibm.wps.devicesupport.profile2deviceclass**

Default size: 25, default lifetime: infinite (-1), usage pattern: regular

This cache stores the list of device classes associated with a CCPP client profile as a list of ObjectIds. The recommended size is equal to the number of defined (and regularly) used clients in WebSphere Portal.

_Outbound HTTP Connection Service_

**com.ibm.wps.outbound.datastore.ProxyConfigCache.values**

 Default size: 100, default lifetime: infinite, usage pattern: regular.

This cache stores the configuration settings for the Outbound HTTP Connection Service. The cache is used whenever a component that uses outbound HTTP Connection Service, such as the AJAX proxy is invoked. Cache entries are invalidated whenever changes to the outbound HTTP connections configuration are applied. To achieve best performance, the size of this cache should be bigger than the total number of configuration settings for outbound HTTP connections, which include:

All outbound connection profiles

All policy mappings, including one default mapping for each outbound connection profile All policy rules

All cookie rules

In clustered environments, this cache must be shared, unless changes that are applied on the configuration settings of outbound HTTP connections are not required on all cluster nodes.

**com.ibm.wps.outbound.datastore.ProxyConfigCache.topologies**

Default size: 100, default lifetime: infinite, usage pattern: regular.

This cache stores the parent-child relations of configuration settings for Outbound HTTP Connection Service. The cache is used whenever a component that uses Outbound HTTP Connection Service, such as the AJAX proxy is invoked. Cache entries are invalidated whenever changes to the outbound HTTP connections configuration are applied. To achieve best performance, the size of this cache should be bigger than the total number of configuration settings for outbound HTTP connections.

In clustered environments, this cache must be shared, unless changes that are applied on the configuration settings of outbound HTTP connections are not required on all cluster nodes.

_Personalization_

Personalization has several different types of data that is stored in the JCR. Each one of these caches is used to store the corresponding nodetype:

services/cache/pzn/applicationObjects services/cache/pzn/campaigns services/cache/pzn/general services/cache/pzn/jcrNodeTypes services/cache/pzn/resourceCollections services/cache/pzn/ruleMappings services/cache/pzn/uuidPathConversions

The pzn/general is used for nodes such as those involved in select action result sets, the result sets themselves, etc; the other caches store individual types. These caches can be enabled/disabled, have their expirations, etc set in

&lt;wp_profile_root&gt;/PortalServer/config/config/services/PersonalizationService.properties.

_Page Management_

The following caches are used primarily in page management scenarios.

**com.ibm.wps.contentmapping.AuthoringCache**

Default size: 1000, default lifetime: infinite (-1), usage pattern: regular

Caches the mapping between Portal pages and WCM Portal Page artifacts as used by the managed pages feature. This cache is primarily relevant on authoring systems with managed pages enabled.

**com.ibm.wps.contentmapping.ContentMappingsCache**

Default size: 1000, default lifetime: infinite (-1), usage pattern: regular

Caches web content page resolution results. Web content page resolution means dynamically retrieving the right portal page for rendering a given WCM content item or a IBM Connections resource. This resolution is typically performed when clicking on a link to a WCM content item (in the Web Content Viewer portlet, a Search result, or the Tag Center portlet) or a link to a IBM Connections resource in an IBM Connections portlet.

**com.ibm.wps.contentmapping.ContentMappingInfoCache**

Default size: 1000, default lifetime: infinite (-1), usage pattern: regular.

Caches the content mapping configuration (aka. page association configuration) for portal pages. This information is leveraged by the page associations dialog and other Portal administrative UIs. 

**com.ibm.wps.datastore.project.DraftedVersionExistsCache**

Default size: 1000, default lifetime: uses globally configured default lifetime, usage pattern: regular.

This cache contains all ObjectIDs of pages for which a draft exists per project. It scales with the number of active projects. Creating a cache entry requires a database call that typically has to count all entries within an index. A cache value could be relatively big as it represents a list of ObjectIDs for all pages that are drafted in a project..

If no projects are used at all, e. g. in a rendering-only system then this cache can be deactivated.

_Portlet Environment_

The following caches are used to store various portlet definitions, configuration settings and attributes.

**com.ibm.wps.pe.applicationregistry**

Default size: 1000, default lifetime: 1800, usage pattern: regular.

This cache contains the portlet applications and the portlet definitions. This cache scales with the number of portlet applications, portlet definitions and portlet clones that are in active use in the system.

Increasing the default lifetime can improve performance if portlet applications as well as portlet definitions and portlet clones change infrequently. Rebuilding the cache entries is rather expensive since it requires multiple database queries.

**com.ibm.wps.pe.contenttypes.nocharset**

Default size: 1000, default lifetime: infinite (-1), usage pattern: regular.

This cache contains content types in a specific format that is required by the portlet container. This cache is used to avoid the calculation and formatting of response content types that are set by a portlet during a portlet invocation. The cache scales with the number of different response content types.

By default cache entries do not expire, this setting should not be changed. Rebuilding cache entries does not include database access but is computation intensive.

**com.ibm.wps.pe.contenttypes.result**

Default size: 1000, default lifetime: infinite (-1), usage pattern: regular.

This cache contains content types in specific format that is required by the portlet container. The objects that are held in this cache have another format and are processed differently than the objects in cache com.ibm.wps.pe.contenttypes.nocharset. This cache is used to avoid the calculation and formatting of response content types that are set by a portlet during a portlet invocation. The cache scales with the number of different response content types.

By default cache entries do not expire, this setting should not be changed. Rebuilding cache entries does not include database access but is computation intensive.

**com.ibm.wps.pe.deployedresources**

Default size: 500, default lifetime: 15000, usage pattern: regular.

This cache contains web module information and servlet information which are associated with portlets. The cache scales with the number of deployed portlet web applications and portlets that are in active use in the system.

Increasing the default lifetime can improve performance if web applications as well as portlet definitions and portlet clones change infrequently. Rebuilding the cache entries is rather expensive since it requires multiple database queries.

**com.ibm.wps.pe.portletentity**

Default size: 10000, default lifetime: 28800, usage pattern: regular.

This cache contains configuration for portlets on pages (portlet instances, shared and per-user). It scales with the number of pages defined in your Portal, the number of portlets on the pages and the number of portlet instances that have been personalized by users. The cache is accessed many times during Portal page rendering. It is important that the most relevant portlet entities are cached. Creating a cache entry involves a single database lookup. An entry into the cache is fairly small.

Example: In a Portal with 500 pages and on average three portlets per page, the optimal cache size would be 1500 to store all possible portlet entity data in the cache, if users are not allowed to personalize the portlets. If the Portal has 100 users that are logged in concurrently and these users have personalized 50 portlets on average, the required cache size to cache all data would be 6500. These numbers give the maximum number of entries to the cache. Typically for this cache it is not required to have all portlet entities in memory, because most users will not view all pages so that not all personalized data must be loaded. The most frequently accessed un-personalized portlet entities should fit into the cache, though.

**com.ibm.wps.pe.portletentitycounter**

Default size: 2000, default lifetime: 1800, usage pattern: regular.

This cache contains an approximate number of personalized entities per shared portlet instance. It is used for heuristics to avoid database access when determining the portlet instance that is associated with a portlet window. The cache scales with the number of shared portlet instances that are in active use in the system.

Increasing the default lifetime can improve performance if portlet instances change infrequently. Rebuilding the cache entries is rather expensive since it requires multiple database queries.

**com.ibm.wps.pe.portletmodel.portletdefinition**

Default size: 1000, default lifetime: 1800, usage pattern: regular.

This cache contains portlet definitions. These definitions could be considered meta information about the deployed portlets. The cache scales with the number of portlet definitions that are in active use in the system.

Increasing the default lifetime can improve performance if portlet definitions change infrequently. Rebuilding the cache entries is rather expensive since it requires multiple database queries.

**com.ibm.wps.pe.portletregistry**

Default size: 1000, default lifetime: 1800, usage pattern: regular.

This cache contains portlet definitions. This cache holds objects of a different class compared with cache com.ibm.wps.pe.portletmodel.portletdefinition. The cache scales with the number of portlet definitions that are in active use in the system.

Increasing the default lifetime can improve performance if portlet definitions change infrequently.

Rebuilding cache entries is rather expensive. It includes loading data from the database with several calls.

_Resolver & Static Pages_

**com.ibm.wps.resolver.cor.cache.uri**

Default size: 2000, default lifetime: infinite, usage pattern: regular

The cache caches java.net.URI objects based on their string representation. The cache values are small. The cache does not depend on the user, the virtual portal or the project.

**com.ibm.wps.resolver.data.cache.CacheMissDataSourceCache**

Default size: 10000, default lifetime: infinite, usage pattern: regular

This cache is used as a first level cache for caching data sources. Data is cached based on a combination of the URI of the data source and dependencies on request headers, so the same URI can appear multiple times in the cache. For every cache lookup, the system has to check for all possible variations of the URI in the cache. The CacheMissDataSourceCache speeds up this variation processing by caching the information that a particular variation is not part of the cache.

The cache only stores the cache keys, not cache values (the existence of the key in the cache implies a cache miss).

The size should be approximately twice as large as the size of the data source cache.

**com.ibm.wps.resolver.data.cache.DataSourceCache**

Default size: 10000, default lifetime: infinite, usage pattern: regular

This cache caches data sources on the server. The cache key is the URI of the data source and information about dependencies on request headers. Entries depend, in general, on the user, the project and the virtual portal. Primarily the cache is used to cache aggregated resources via the resource aggregator framework, but it might be used by applications as well, so general purpose predictions on the cache size are not possible.

You can view the content of the cache via `http://portalserver/wps/mycontenthandler/distmap/ws/com.ibm.wps.resolver.data.cache.DataSourceCache`.

The key into the cache is the URI of a data source. The value is the content of the data source, which can be anything from text files to binary data.

**com.ibm.wps.resolver.friendly.cache**

Default size: 1000, default lifetime: infinite, usage pattern: regular

The cache caches intermediate results during friendly URL processing. If friendly names are configured to be user specific, the size scales with the number of pages that have friendly names by the number of concurrent users. If friendly names are user independent, the cache scales only with the number of pages. The cache values are small.

Friendly names are not user specific if they are used only for pages that are public or pages that are shared by all users. If no user specific friendly names are used this cache can be made public by setting friendly.force.public to true in the WP ConfigService resource environment provider.

The content of the cache can be viewed via <http://portalserver/wps/mycontenthandler/distmap/ws/com.ibm.wps.resolver.friendly.cache>. 

**com.ibm.wps.resolver.resource.AbstractRequestDispatcherFactory** 

Default size: 20, default lifetime: infinite, usage pattern: regular

In the cache, Java objects of type javax.servlet.RequestDispatcher are stored. The cache keys are pairs of javax.servlet.ServletContext and a String object representing the resource path.

The request dispatcher is a J2EE tool to dispatch a request from one application to another application on the server. With caching, the request dispatchers obtained can be reused.

**com.ibm.wps.spa.parser.locale.LocalizationParserCache**

Default size: 1000, default lifetime: infinite, usage pattern: regular

The cache caches the processing of the locales in HTML files that represent the themes and skins. The size of the cache scales with the number of used themes and skins.

The cache values are medium sized.

The content of the cache can be viewed via <http://portalserver/wps/mycontenthandler/distmap/ws/com.ibm.wps.spa.parser.locale.LocalizationParser> 

**Cache.com.ibm.wps.spa.parser.skin.SkinParserCache**

Default size: 1000, default lifetime: infinite, usage pattern: regular

The cache caches the parsing of skins for dynamic spots. The size of the cache scales with the number of skins.

The cache values are medium sized.

The content of the cache can be viewed via <http://portalserver/wps/mycontenthandler/distmap/ws/com.ibm.wps.spa.parser.skin.SkinParserCache>.

**com.ibm.wps.spa.parser.skin.ThemeParserCache**

Default size: 1000, default lifetime: infinite, usage pattern: regular

The cache caches the parsing of themes for dynamic spots. The size of the cache scales with the number of themes.

The cache values are medium sized.

The content of the cache can be viewed via <http://portalserver/wps/mycontenthandler/distmap/ws/com.ibm.wps.spa.parser.skin.ThemeParserCache>.

_Search_

The following two caches are for internal usage and customers should not modify them. They are expected to be very small.

**com.ibm.lotus.search.cache.dynacache.CacheServiceImp**

- General purpose cache for search configuration objects, like search services. 

**com.ibm.lotus.search.siapi.search.imp.propertiesScope**

- Cache for resolved scopes.

_Social Rendering_

Social data that is rendered on your Portal pages by using the social rendering feature is retrieved from a remote HCL Connections server. To reduce network traffic and improve performance, the data is cached on HCL Portal

Social rendering uses the Digital Data Connector (DDC) caches.

_URL Mappings_

The following caches contain data on Portal URL mappings. Be sure to size the caches in a way that these are large enough to hold all defined URL mappings in your system.

**wps.mappingurl.ContextsCache**

Default size: 500, default lifetime: infinite (-1), usage pattern: regular.

This cache contains URL mapping contexts. It scales with the number of mapping contexts defined in the system. This cache is used if a URL mapping cannot be resolved using the lookup cache. Creating an entry involves reading a mapping entry from the database. An entry in the cache is medium-sized.

**wps.mappingurl.LookupCache**

Default size: 600, default lifetime: infinite (-1), usage pattern: regular.

This cache is used as a final lookup cache for the computed mappings between (a hierarchy of) URL mappings and a WebSphere Portal resource. It is accessed during every request when analyzing the incoming URL for being a URL mapping. The size of this cache should be the number of all mappings. Creating a cache entry typically is cheap because the information often is in memory. An entry in the cache is rather small.

_Tagging & Rating_

**com.ibm.wps.cp.tagging.TagCache**

Default size: 10000, default lifetime: 3600, usage pattern: regular.

This cache stores information about tag instances. A tag instance is a single tag associated to a single resource. For example, if a single resource R1 has been tagged (by different users) with the tags T1, T1, and T3, three tag instances are being created, one that holds the information that R1 has been tagged with T1, one that holds the information that R1 has been tagged with T1 again, and one that holds the information that R1 has been tagged with T3. If another resource R2 has been tagged the same way (i.e. with the same tag names) three additional tag instances are being created that hold the information about how R2 has been tagged.

The cache scales with the number of tag instances in the system. The cache is accessed and a new entry is added whenever tag instances (not to be mixed up with tag spaces; see the TagSpace cache) for a particular resource are being queried. Thus, a reasonable size for this cache depends on the amount of tags being assigned and queried.

Depending on the usage intensity of HCL Portal's tagging capabilities a large number of tag instances can be quickly created. For instance, if a user invokes a custom tagging widget able to display all tag instances that have been assigned to a particular resource the cache might fill up quickly. One should at least try to allow for a quick reloading of such a widget when invoking it for a resource for which it has been invoked prior. Thus, to achieve best performance in terms of cache hit rate, the size should be set to a value so that all tag instances of a typical number of resources for which tags are being queried in the defined cache lifetime fit into the cache.

It might also be worth noting that the TagCache is usually less important and thus used less often than the TagSpaceCache because one is often, for the same tag (name), interested in its count only. The space cache is exactly what a tag space does – provides information about how many times a particular tag (name) has been assigned to a particular resource. For example, for a particular resource Rx it is usually only of interest how many times a tag (name) T1, T2, or Tx has been assigned; it is usually not that interesting to retrieve each single tag instance.

**com.ibm.wps.cp.tagging.TagSpaceCache**

Default size: 10000, default lifetime: 3600, usage pattern: regular.

This cache stores information about tag spaces. A tag space is the aggregation of tags with the same name that have been associated to a single resource. For example, if a single resource R1 has been tagged (by different users) with the tags T1, T1, and T3 two (not three as with tag instances) tag spaces are being created, one that holds the information that R1 has been tagged with T1 two times, and one that holds the information that R1 has been tagged with T3 once. If another resource R2 has been tagged the same way (i.e. with the same tag names) two additional tag spaces are being created that hold the information about how R2 has been tagged.

The cache scales with the number of tags in the system. The cache is accessed and a new entry is added whenever tags for a particular resource are being queried - in a way that tags with the same tag name can be aggregated as only their count is of interest. Thus, a reasonable size for this cache depends on the amount of tags being assigned and queried. The standard tag widgets for example access this cache frequently.

Depending on the usage intensity of HCL Portal's tagging capabilities a lot of tags can be quickly created. For instance, if a user invokes the standard tag widget (in order to query tags for a particular resource) in a short period of time and for a huge amount of different resources that all have been tagged a lot, the cache might fill up quickly. Again, one should at least try to allow for a quick reloading of the standard tag widget when invoking it for a resource for which it has been invoked prior. Thus, to achieve best performance in terms of cache hit rate, the size should be set to a value so that all tag spaces of a typical number of resources for which tags are being queried in the defined cache lifetime fit into the cache.

**com.ibm.wps.cp.rating.RatingSpaceCache**

Default size: 10000, default lifetime: 3600, usage pattern: regular.

This cache stores information about rating spaces. A rating space is the aggregation of ratings of the same value that have been associated to a single resource. For example, if a single resource R1 has been rated (by different users) with the values 5, 5, and 3, two (not three as with rating instances) rating spaces are being created, one that holds the information that R1 has been rated two times with 5, and one that holds the information that R1 has been rated with 3 once. If another resource R2 has been rated the same way (i.e. with the same values) two additional rating spaces are being created that hold the information about how R2 has been rated.

The cache scales with the number of ratings in the system. The cache is accessed and a new entry is added whenever ratings for a particular resource are being queried - in a way that ratings with the same value can be aggregated as only their count is of interest. Thus, a reasonable size for this cache depends on the amount of ratings being assigned and queried. The standard rating widgets for example access this cache frequently.

Depending on the usage intensity of HCL Portal's rating capabilities a lot of ratings can be quickly created. For instance, if a user invokes the standard rating widget (in order to query ratings for a particular resource) in a short period of time and for a huge amount of different resources that all have been rated a lot, the cache might fill up quickly. Again, one should at least try to allow for a quick reloading of the standard rating widget when invoking it for a resource for which it has been invoked prior. Thus, to achieve best performance, in terms of cache hit rate, the size should be set to a value so that all rating spaces of a typical number of resources for which ratings are being queried in the defined cache lifetime fit into the cache.

**com.ibm.wps.cp.tagging.ResourceModelCache**

Default size: 10000, default lifetime: 3600, usage pattern: regular.

This cache stores information about resources (pages, portlets, WCM content, etc.) registered with the tagging and rating engine. We refer to these registered resources as collaborative resources. A resource is being registered with the T&R engine once it is tagged or rated. This means that, at this point in time, the information which tags and/or ratings have been assigned to which resource by which user is being stored.

The cache scales with the number of collaborative resources in the system. The cache is accessed and a new entry is added whenever a resource is tagged or rated, or when particular resources are being queried,

e.g. by tag names or rating values. Typical queries include queries like "Find all resources tagged with the tag T1" or "Find all resources rated with a value greater than 3". Thus, a reasonable size for this cache depends on the amount of collaborative resources being worked with. Thus, to achieve best performance, in terms of cache hit rate, the size should be set to a value so that a typical amount of collaborative resources being worked with – within the defined cache lifetime – fit into the cache.

**com.ibm.wps.cp.tagging.TagNameMissCache**

Default size: 10000, default lifetime: infinite, usage pattern: regular.

This cache stores information about all the tag names that have been searched for without success. It avoids costly queries for certain tag names to be carried out over and over again. This means that, in case a query for a particular tag T1 returns no results, the next query for this particular tag T1 is not being carried out again (as long as no new tags have been added as adding new tags can invalidate this cache); rather than that the result is directly served from the cache.

The cache scales with the number of distinct tags (actually tag names) that users have been searched for without success before. The cache is accessed and a new entry is added whenever a new tag is being searched for without success. Thus, a reasonable size for this cache depends on the amount of distinct tag names users have been searched for. To achieve best performance in terms of cache hit rate, the size should be set to a value so that a typical amount of tag names being searched for fit into the cache.

**com.ibm.wps.cp.tagging.TypeAheadCache**

Default size: 10000, default lifetime: 3600, usage pattern: regular.

This cache stores information about all the tag names that have already been used to tag resources. The set of tags being maintained as part of this cache is independent from any resource information.

The cache is primarily being used by WebSphere Portal's tagging and rating type-ahead feature. As the user starts typing a tag name, one or more possible matches for the entered text fragment are being searched for and immediately shown to the user. This immediate feedback allows users to select one of the listed options rather than having to type the entire word or phrase they were looking for. A user can also choose a closely related option from the presented list. Thus, the type-ahead feature allows users to explore the tag space as they type. This can make it easier to find the correct term they want to use as the tag.

Another advantage of the type-ahead feature is that it reduces tag space littering (refer to the knowledge center for more detailed information). The cache scales with the number of distinct tags (actually tag names) in the system. The cache is accessed and a new entry is added whenever a new tag is brought into the system, or when available tags are being queried (by text fragments). Thus, a reasonable size for this cache depends on the amount of distinct tag names available. To achieve best performance in terms of cache hit rate, the size should be set to a value so that all distinct tag names fit into the cache. com.ibm.wps.cp.models.ModelCache.\* (TagModel, RatingModel, ResourceModel, CategoryModel) Default size: 200, default lifetime: 3600, usage pattern: regular.

These caches store information about the models HCL Portal's tagging and rating capabilities provide you with. There is one distinct cache for each model being provided (refer to the Knowledge Center for more information on these models):

The cache for the TagModel which is primarily used for querying tags, e.g. tags by tag names. The cache for the RatingModel which is primarily used for querying ratings, e.g. ratings by rating values. The cache for the ResourceModel which is primarily used for querying collaborative resources, e.g. resources by tag names or by rating values. The cache for the CategoryModel which is primarily used for querying categories, for example category names.

These caches scale with the number of models usually being requested. Requestors are usually components exploiting these models to implement specific functionalities. The cache is accessed, and a new entry is added whenever a new model object is being requested. Thus, a reasonable size for this cache depends on the amount of components usually exploiting these models. To achieve best performance, in terms of cache hit rate, the size should be set to a value so that a typical amount of models required by exploiting components fit into the cache.

_Virtual Portals_

The following group of caches is only relevant if you have defined additional virtual portals in your system. In all other situations it is safe to set the size of these caches to one and the lifetime to infinite.

_In HCL DX CF04, these caches were removed except_

_com.ibm.wps.services.vpmapping.VirtualPortalIDToRealmCache. A new cache,_

_com.ibm.wps.services.vpmapping.VirtualPortalIDAndHostnameCache, was added to support VP to hostname mapping._

**com.ibm.wps.services.vpmapping.CheckForHostnameCache**

Default size: 20, default lifetime: 3600, usage pattern: regular.

This cache keeps track of the hostnames used by virtual portals. If this cache is used, it could contain one entry per virtual portal, so the cache size should be larger than the number of virtual portals of your installation.

**com.ibm.wps.services.vpmapping.URLToVirtualPortalIDCache**

Default size: 120, default lifetime: 3600, usage pattern: regular.

This cache maps LPID values to virtual portal IDs. LPIDs are encoded in a URL that points to a certain virtual portal. Therefore, the number of LPIDs is equal to the number of virtual portal IDs. Accordingly, the optimum size of this cache is the number of virtual portals defined in your environment. You may increase the lifetime for better performance if your setup of virtual portals changes infrequently. If you only use the default portal and no additional virtual portal, you will see one entry in the cache and little traffic on the cache.

**com.ibm.wps.services.vpmapping.HostnameToVirtualPortalIDCache**

Default size: 20, default lifetime: 3600, usage pattern: regular.

This cache ensures an efficient mapping between virtual portal ids and hostnames. If this cache is used, it could contain one entry per virtual portal, so the cache size should be larger than the number of virtual portals of your installation.

**com.ibm.wps.services.vpmapping.VirtualPortalIDCacheToHostname**

Default size: 20, default lifetime: 3600, usage pattern: regular.

This cache ensures an efficient mapping between hostnames and virtual portal ids. If this cache is used, it could contain one entry per virtual portal, so the cache size should be larger than the number of virtual portals of your installation.

**com.ibm.wps.services.vpmapping.VirtualPortalIDToRealmCache**

Default size: 120, default lifetime: 3600, usage pattern: regular.

This cache stores the realm information for virtual portals. One realm can contain several virtual portals, but one virtual portal can only be part of a single realm. As a consequence, the optimum size of this cache is the number of virtual portals defined in your environment. You may increase the lifetime for better performance if your setup of virtual portals changes infrequently. If you only use the default portal and no additional virtual portal, you will see one entry in the cache and little traffic on the cache. Creating a new cache entry requires one database query. An entry into the cache is fairly small. 

**com.ibm.wps.services.vpmapping.VirtualPortalIDToURLCache**

Default size: 120, default lifetime: 3600, usage pattern: regular.

This cache maps virtual portal IDs to their respective LPID. The LPID usually is used to create URLs for a specific virtual portal. Since the number of LPIDs is equal to the number of virtual portal IDs, the optimum size of this cache is the number of Virtual Portals defined in your environment. You may increase the life time for better performance if your setup of virtual portals changes infrequently. If you only use the default portal and no additional virtual portal, you will see one entry in the cache and little traffic on the cache.

_WebDav_

**com.ibm.wps.FileCache_Syncer**

This is a special purpose cache that is used for the WebDAV file store. Do not change its configuration!

**com.ibm.wps.filestore.JCRItemsCache**

Default size: 5000, default lifetime: infinite, usage pattern: regular

This cache is closely related to the WebDAV file store. The content of themes and skins is stored in the WebDAV file store if this information is not contained in WAR-files.

For each file stored in the WebDAV file store, meta information, for example its administrative ID and access information is stored in the JCRItemsCache. For further information about the WebDAV file store, see the WebSphere Portal Knowledge Center.

_WSRP Consumer_

All WSRP caches are only accessed if the Portal is used as either a WSRP consumer or producer. Each of the caches is used on either side of the WSRP communication, but not on both sides. Most of the WSRP caches are used and read during every WSRP request, either displaying a page with a provided portlet on it, or administering WSRP properties. Exceptions to this general rule are noted below.

**wsrp.cache.deleted.portlets**

Default size: 500, default lifetime: 3600, usage pattern: regular.

This cache contains the handles of remote portlets that were destroyed by invoking the destroyPortlets operation. It is used on the consumer side. It scales with the number of portlet instances of remote portlets that are deleted on the consumer. The cache is used to avoid duplicate destroyPortlets requests, thus recreating the cache entry is expensive. It involves performing a WSRP request.

**wsrp.cache.markup**

Default size: 5000, default lifetime: 3600, usage pattern: regular.

The WSRP Consumer uses this cache to cache getMarkup responses: If Markup Caching is enabled for the Consumer or for a remote portlet, the Consumer checks this cache

before sending a WSRP getMarkup request to the producer, and sends the request only if a corresponding markup response is not found in the cache. The cache is thus

used to avoid sending WSRP getMarkup requests. The cache scales with the number of cacheable getMarkup responses received from the producer. You may adapt the cache

size. The WSRP Consumer will always override the default lifetime according to the cache expiration that is provided by the remote portlet.

**wsrp.cache.portlet.descriptions**

Default size: 2000, default lifetime: 10800, usage pattern: regular.

This cache contains the portlet descriptions of remote portlets. These descriptions could be considered meta information on the provided portlets, like languages and descriptions. The cache scales with the number of remote portlets consumed by the consumer. Increasing the default lifetime can improve performance if portlet descriptions of the provided portlets change infrequently. Rebuilding cache entries is rather expensive. It includes parsing the cached service description. The cached entries are rather expensive in terms of memory usage.

**wsrp.cache.producer.objects**

Default size: 500, default lifetime: 10800, usage pattern: regular.

This cache contains the descriptor of the producer. It is used on the consumer side. It scales with the number of producers that the consumer interacts with. Recreating cache entries is fairly expensive. It involves some DB queries and in-memory operations.

**wsrp.cache.producer.user**

Default size: 5000, default lifetime: 3600, usage pattern: multiple object types.

This cache contains the descriptor of the producer and context information between users and producers. It is used on the consumer side. It scales with the total number of active users accessing remote portlets of these producers, i.e the maximum the number of producers multiplied with the number of active users accessing them plus the number of producers. Recreating cache entry is fairly expensive. It involves some DB queries and in-memory operations. Therefore the session timeout should not be higher than the lifetime of entries in the cache. Cache entries are explicitly invalidated during user session destruction. 

**wsrp.cache.servicedescription**

Default size: 150, default lifetime: infinite (-1) usage pattern: regular

This cache contains service descriptions of WSRP producers. It is used on the consumer side. It scales with the number of WSRP producers integrated into the consuming Portals; there is exactly one description per producer. The service description is generated using all the portlet descriptions from the producer Portal plus some additional data. Hence a service description can be large in terms of memory requirements. Rebuilding the description requires several roundtrips and is an expensive operation. Cache entries are rebuilt if a user clicks the ‘Browse’ button in the WSRP administration portlets. This leads to a refresh of all service descriptions of all producers. This cache is only used during WSRP administration.

**wsrp.cache.wsrp.portlet**

Default size: 2000, default lifetime: 10800, usage pattern: regular.

This cache contains the proxy portlet instances on the WSRP consumer side and is only used there. It scales with the number of integrated remote portlets multiplied with the number of users having their own customizations of portlet preferences for these remote portlets (portlet settings for legacy portlets respectively). Creating an entry for the cache involves one multi-line database query. The size of a cached entry depends on the number of parameters associated with the portlet. Hence the size ranges from small to fairly large.

_WSRP Producer_

**wsrp.cache.event.description**

Default size: 2000, default lifetime: 10800, usage pattern: regular.

This cache contains the event descriptions. These are the descriptions of events that are supported by the provided portlets. It is used on the producer. It scales with the number of events the provided portlets support. Recreating cache entries is fairly expensive. It involves some DB queries and in-memory operations.

**wsrp.cache.portlet.windows**

Default size: 10000, default lifetime: infinite (-1), usage pattern: regular.

This cache contains a WSRP specific wrapper on a WebSphere Portal portlet entity object. It is used on the producer side. It scales with the number of provided portlets and the number of occurrences of these portlets on consumer pages. Recreating cache entries is rather cheap and typically only includes in-memory operations. An entry into this cache is fairly small. This cache is accessed very often during a request. 

**wsrp.cache.portletdescription**

Default size: 500, default lifetime: 3600, usage pattern: regular.

This cache contains the portlet descriptions of provided portlets. These descriptions could be considered meta information on the provided portlets, like languages and descriptions. It is used on the producer side. The cache scales with the number of portlets provided by the producer. Increasing the default lifetime can improve performance if portlet descriptions of the provided portlets change infrequently. Rebuilding cache entries is rather expensive. It includes loading data from the database with several calls. The cached entries are rather expensive in terms of memory usage.

**wsrp.producer.portletpool.portlets**

Default size: 5000, default lifetime: infinite (-1), usage pattern: cascading object types.

This cache stores the Producer Offered Portlets and Consumer Configured Portlets and hence scales with their number. It scales with the number of provided portlets and the number of remote users having personalized those (Consumer Configured Portlets); hence the maximum would be the number of provided portlets multiplied by the number of remote users accessing the producer. Reloading cache entries involves one query against the database. Cached entries are rather small.

_WebSphere_

**com.ibm.workplace/ExtensionRegistryCache**

**com.ibm.ws.wssecurity.sctClientCacheMap**

**com.ibm.ws.wssecurity.sctServiceCacheMap**

These caches are WAS internal caches whose size is not expected to be modified by customers. When viewing these caches with the Portal Cache Viewer, the following text is displayed:

This cache is not an HCL Portal cache. No recommendations are given.

**LDAP/AttributesCache**

Default size: 4000, default lifetime: 1200, usage pattern: regular.

VMM attributes cache to improve the performance of VMM.

**LDAP/SearchResultsCache**

Default size: 2000, default lifetime: 600, usage pattern: regular.

VMM search results cache to improve the performance of VMM search.

**WSSecureMap**

Default size: 2000, default lifetime: (Same as ltpaToken timeout. Cache entries also go away when the user is logged out), usage pattern: regular.

The WSSecureMap cache stores security attributes used to recreate the user credential. It scales with the number of users who log in.

**How to Set**

In the WebSphere Integrated Solutions Console

Security --> Global Security --> Custom properties --> New Create both of these security custom properties:

**Name:** com.ibm.ws.security.WSSecureMapInitAtStartup

**Value**: true

**Name**: com.ibm.ws.security.WSSecureMapSize

**Value:** &lt;integer 100 or greater&gt;

_Miscellaneous_

This group of caches does not fit in any of the other categories.

**com.ibm.wps.multiviews.uri2uri**

Default size: 10, default lifetime: infinite (-1), usage pattern: regular

This cache holds URIs that are expensive to parse. Its size should be equal to the number of mvc: URIs used in the theme on the main rendering path.

**com.ibm.wps.services.cache.cachedstate.CachedStateServiceSessionBound.cache**

Default size: 5000, default lifetime: 7200, usage pattern: typically regular.

This cache stores session-scoped data in the Portal context and is used by various Portal components. This cache scales linearly with the number of active sessions in the system and the number of Portal components using this cache for data retrieval. The usage pattern, access times, entry creation costs and entry memory sizes depend on the Portal component using this cache and cannot be stated in general.

**com.ibm.wps.services.registry.ReloadableBucketCache**

Default size: 32, default lifetime: infinite (-1), usage pattern: regular.

This cache is used in a cluster for Portals to notify the other cluster members when one of the registries needs to be reloaded due to administrative action. It should never be disabled or set to shared=false.

**wp.xml.configitems**

Default size: 100, default lifetime: infinite (-1), usage pattern: regular.

This cache stores XML Access configuration items. It is used only during XML Access processing. The entries resemble references between nodes in the XML Access document. Especially when working with complex XML files, usually used for imports or Release Builder processes, it can be beneficial to increase the cache size. The cache will be cleared after XML processing is completed. Reloading a cache entry involves one database query. Entries in the cache are medium-sized.