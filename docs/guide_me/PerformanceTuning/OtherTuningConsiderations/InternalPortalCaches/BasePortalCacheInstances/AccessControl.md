# Access Control

This section describes each of the access control caches. It is critical for proper operation of a Portal that the access control information be current. Hence it is vital that these caches be shared within a cluster so that the information is propagated to all members of the cluster. Different lifetime values should be chosen to avoid concurrent reload of information from multiple caches. This pattern of rather random lifetime and invalidation intervals could also be applied to other caches.

Figure (Portal Access Control Cache Hierarchy) shows the relationships among the various caches. The cylinders represent cache instances. The gray caches are caches of the Portal user management (PUMA) component that are closely related to the caches of the Portal access control component. The PUMA caches contain information originating from the user registry. Portal access control uses these caches for user identification and group membership retrieval. The vertical axis represents the cache aggregation direction. The cache instances in higher layers leverage cache instances of lower layers to compute their values. For example, when computing effective permissions (entitlements) for a user (cached in the `ExplicitEntitlementsCache`), the Portal access control component leverages cache values from the `ChildResourcesCache` and `RoleMappingCache`.

!!! note 
    Some of the depicted cache instances are not visible nor configured directly as they were combined in Portal 8.0 (e.g. see `CommonUserGroupMgmt` and `CommonRolesCache`).

[Portal Access Control Cache Hierarchy](../../../../../images/PortalAccessControlCacheHierarchy.png)

**com.ibm.wps.ac.AccessControlUserContextCache**
Default size: 6000, default lifetime: 1200, usage pattern: regular.

This cache contains the access control user context objects, a local cache for permissions assigned to a specific user. If possible all requests against access control are answered using this information so that access control methods can return very quickly. This cache scales with the number of active users. For fast Portal operation, you should make sure that the entries for all actively working users fit into the cache, especially if a user has access to many Portal resources. Entries are invalidated from the cache upon any Portal administrative action. Creating a cache entry typically is rather cheap because most information is in memory, but can take a while if the required information cannot be found in other caches. An entry in the cache can be become very large, depending on the number of resources the user can access.

**com.ibm.wps.ac.ChildResourcesCache**
Default size: 10000, default lifetime: 28800, usage pattern: regular.

This cache contains the resource hierarchy within Portal access control. The size of this cache scales with
the number of protected resources accessed by the active users in the system, like the protected resources
cache. This cache does not contain leaf objects in the access control tree, so the number of entries typically
is smaller. The cache is accessed during most Portal access control requests. Entries are invalidated from
this cache during resource deletion, parent change of the resource, modification of the resource owner,
externalization, internalization, and role block change. Creating a cache entry includes a multi-row query
against the Portal database. An entry in the cache is fairly small.

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

This physical cache instance holds all entries from selected entitlements specific cache wrapper instances.
More specifically, these caches contain the permissions of a user or group on a number of resources of the
same ResourceType. There are dedicated caches for the different ResourceTypes. For example, the cache
for pages is called `com.ibm.wps.ac. ExplicitEntitlementsCache.CONTENT_NODE`. All ResourceTypes that
are not specified explicitly will be cached in the default cache. The size of this cache scales with the number
of active users/groups multiplied by the different ResourceTypes valid for this cache and accessed by the
users and groups, either by ‘using’ the resource during navigating the Portal or by Portal administration.

There is one entry per set of permissions per WebSphere Portal domain. Entries are read during ‘regular’
access control requests, during page rendering and, especially, during Portal administration. If a certain
resource type is not used, you will see only misses and no other activity on the corresponding cache.
Entries are invalidated from this cache during all access control modifications and logins. Creating an entry
in one of these caches typically can be done from in-memory information in the lower-level caches. If the
required information is not available multiple database requests might be required to create a cache entry.
An entry into the cache is rather small, but built of multiple objects typically stored in other caches.

**com.ibm.wps.ac.CommonRolesCache**
Default size: 40000, default lifetime: 28800, usage pattern: physical cache instance for the following caches:
    com.ibm.wps.ac.RolesCache
    com.ibm.wps.ac.ParentResourceRoleMappingCache
    com.ibm.wps.ac.ResourceRoleMappingCache

This physical cache instance holds all entries from roles specific cache wrapper instances. Specifically, those
caches contain the access control role instances. The size of an individual cache scales with the number of
active users/groups multiplied by the different ResourceTypes they access. There is one entry per role
instance per principal per resource type per HCL Portal domain. Data is read from the cache during many
Portal access control requests, if the corresponding entitlements are not already cached. Entries are
invalidated from this cache during role mapping creation, role mapping deletion, resource deletion,
externalization, and internalization. Creating a cache entry means executing at least one, but potentially
multiple database queries. An entry in the cache is relatively small.

**com.ibm.wps.ac.ProjectDeletedResourcesCache**
Default size: 1000, default lifetime: infinite (-1), usage pattern: regular

This cache stores authorization information about pages which are defined outside the project and have
been deleted as part of a project. This cache contains the project identification and the database domain
identification. Since there are two possible domains, `release` or `jcr`, the maximum number of cache entries
is twice the number of projects.

!!! note
    In Portal 8, this cache was combined into the `com.ibm.wps.ac.CommonProjectResourcesCache`.

**com.ibm.wps.ac.ProjectDraftResourcesCache**
Default size: 1000, default lifetime: infinite (-1), usage pattern: regular

This cache stores authorization information is about draft pages created in a project. This cache contains
the project identification and the database domain identification. Since there are two possible domains,
release or jcr, the maximum number of cache entries is twice the number of projects.

!!! note 
    In Portal 8, this cache was combined into the `com.ibm.wps.ac.CommonProjectResourcesCache`.

**com.ibm.wps.ac.DataEventPropagationCache**
This is a special purpose cache that is used especially for Portal access control cache invalidation
communication. Do not change its configuration!

**com.ibm.wps.ac.DependentProtectedResourceCache**
Default size: 10000, default lifetime: 14400, usage pattern: regular.

The protected resource caches contain the resources protected by Portal access control. The size of these
caches scale with the number of protected resources accessed by the active users in the system. The
`DependentProtectedResourcesCache` is used by WCM content item resources only, while the
`ProtectedResourcesCache` does hold resources for various Portal resource types. Entries are read from the
cache during every permission call or entitlements call against access control. Entries are invalidated from
this cache during resource deletion, resource relocation, and modification of the resource state
(private/shared), modification of the resource owner, externalization, internalization, and role block
change. Creating a cache entry requires a single-row lookup in the Portal database. An entry in the cache is
relatively small.

**com.ibm.wps.ac.ExplicitEntitlementsCache*.**
Default size: 10000, default lifetime: varying (around 10000), usage pattern: invalidation checking.
Includes
    com.ibm.wps.ac.ExplicitEntitlementsCache.ICM_CONTENT.dyn
    com.ibm.wps.ac.ChildEntitlementsCache
    com.ibm.wps.ac.SingleEntitlementsCache
These caches contain additional access control data that is not directly cached in the
`com.ibm.wps.ac.CommonExplicitEntitlementsCache`. These caches are dedicated to specialized resource
types and uncommon use cases. Typically, only some or none of those caches are filled during a typical
scenario as the majority of data is already cached in the `CommonExplicitEntitlementsCache`.

**com.ibm.wps.ac.ExternalOIDCache**
Default size: 28800, default lifetime: 8640, usage pattern: regular.

This cache contains the mapping between the external ObjectIDs of individual protected resources, for
example page or portlet IDs, and the Portal access control specific ObjectIDs stored in the database table
PROT_RES. Entries are read from the cache during many Portal access control requests. The size of this
cache scales with the number of protected resources accessed by the active users in the system. Since this
mapping is immutable, this cache is never explicitly invalidated. Creating a cache entry requires a single row
database query. An entry in the cache is fairly small.

**com.ibm.wps.ac.groupmanagement.CommonUserGroupMgmt**
Default size: 5000, default lifetime: 3600, usage pattern: physical cache instance for the following caches:
    com.ibm.wps.ac.groupmanagement.NestedGroupCache
    com.ibm.wps.ac.groupmanagement.GroupCache
    com.ibm.wps.ac.groupmanagement.PeerGroupCache

For WP8.5, this cache was split back into `com.ibm.wps.ac.groupmanagement.GroupCache` and
`com.ibm.wps.ac.groupmanagement.NestedGroupCache` for performance reasons.
`com.ibm.wps.ac.groupmanagement.PeerGroupCache` was used for Application Infrastructure, which is no
longer supported.

**com.ibm.wps.ac.groupmanagement.GroupCache**
Default size: 5000, default lifetime: 3600, usage pattern: regular

GroupCache is used in an HCL Portal when nested groups are disabled. This cache contains the direct
groups to which a user belongs. The size of this cache scales with the number of active users and the
number of virtual Portals they access. The cache is accessed during login into Portal, but typically not during
regular Portal navigation. Its main use case is during administration of users and user groups. Entries are
invalidated from this cache after user and group administrative changes. Creating a new cache entry
requires queries against the VMM component and then typically against the user repository. An entry in
the cache is medium-sized.

**com.ibm.wps.ac.groupmanagement.NestedGroupCache**
Default size: 5000, default lifetime: 3600, usage pattern: regular

NestedGroupCache is used in a WebSphere Portal when nested groups are enabled. This cache contains the
nested groups to which a user belongs. The size of this cache scales with the number of active users and the
number of virtual Portals they access. The cache is accessed during login into Portal, but typically not during
regular Portal navigation. Its main use case is during administration of users and user groups. Entries are
invalidated from this cache after user and group administrative changes. Creating a new cache entry
requires queries against the VMM component and then typically against the user repository. An entry in
the cache is medium-sized.

**com.ibm.wps.ac.OwnedResourcesCache**
Default size: 5000, default lifetime: 28800, usage pattern: invalidation checking.

This cache maps resource owners (user groups or individual users) to the resources they own. This cache scales with the number of active users/groups multiplied with the different ResourceTypes they access. There is one entry in the cache per principal per resource type per HCL Portal domain. Data is read from this cache during many Portal access control requests, if the corresponding entitlements are not already
cached in an entitlements cache. Entries are invalidated from this cache during resource deletion, modification of the resource owner, and externalization. Creating a cache entry means executing a multi row query against the Portal database. An entry in the cache is relatively small.

In many scenarios, there is no benefit from this cache and it can be disabled. In other scenarios, it may be
beneficial but only with cache sizes near the default. Larger cache sizes can make performance worse.
Performance testing is required to determine the benefit of this cache for a specific use case and data
population.

**com.ibm.wps.ac.PermissionCollectionCache**
Default size: 2000, default lifetime: 14400, usage pattern: regular; admit-threshold:2

This cache contains permission collections that can be used for permission checks. It scales with the
number of permissions in the system, i.e. the number of Portal resources and permissions assigned on
those. Entries in the cache typically are requested very frequently during permission checks. An admit threshold
is used to avoid caching rarely used permissions. You may wish to try different admit threshold
settings to tune this cache. Entries are never invalidated from the cache. Creating a cache entry is very fast
since all required information is in-memory. A cache entry is small.

**com.ibm.wps.ac.ProtectedResourceCache**
Default size: 5000, default lifetime: 14400, usage pattern: regular.

This cache contains the resources protected by Portal access control. The size of this cache scales with the
number of protected resources accessed by the active users in the system. Entries are read from the cache
during every permission call or entitlements call against access control. Entries are invalidated from this
cache during resource deletion, resource relocation and modification of the resource state
(private/shared), modification of the resource owner, externalization, internalization, and role block
change. Creating a cache entry requires a single-row lookup in the Portal database. An entry in the cache is
relatively small.