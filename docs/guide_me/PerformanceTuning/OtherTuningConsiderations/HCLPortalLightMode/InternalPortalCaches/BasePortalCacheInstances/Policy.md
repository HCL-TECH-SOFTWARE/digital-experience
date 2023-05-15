# Policy

The HCL Portal policy manager uses the following caches.

**com.ibm.wps.mpages.ActiveProjectOIDCache**
Default size: 50, default lifetime: uses globally configured default lifetime, usage pattern: regular.

This cache contains all ObjectIDs of active projects. Its semantic is more like a set than a map as it is used to
check if the ObjectID of a project maps to an active project. If that information is not obtained through the
cache, i.e., a cache miss, then some expensive WCM calls possibly including JCR calls, have to be executed.
The cache size scales with the number of active projects. Cache entries are very small. If no projects are
used at all, e.g., in a rendering-only system then this cache can be deactivated.

**com.ibm.wps.mpages.ProjectNameUUIDCache**
Default size: 100, default lifetime: uses globally configured default lifetime, usage pattern: regular.

This cache allows mapping from a project name to its UUID. If that information is not obtained through the
cache, i.e., a cache miss, then some expensive WCM calls possibly including JCR calls, have to be executed.
The cache size scales with the number of active projects. Cache entries are very small. If no projects are
used at all, e.g., in a rendering-only system then this cache can be deactivated.

**com.ibm.wps.mpages.ProjectUUIDNameCache**
Default size: 50, default lifetime: uses globally configured default lifetime, usage pattern: regular.

This cache allows mapping from a project's UUID to its name. If that information is not obtained through
the cache, i.e., a cache miss, then some expensive WCM calls, possibly including JCR calls, have to be
executed. The cache size scales with the number of active projects. Cache entries are very small. If no
projects are used at all, e.g., in a rendering-only system, then this cache can be deactivated.

**com.ibm.wps.policy.services.PolicyCacheManager**
Default size: 1000, default lifetime: 43200, usage pattern: regular.

This cache stores the policies. Out of the box, Portal comes with twelve theme policies and one mail policy,
each of them being one entry into the cache. Hence the maximum number of cache entries depends on
your system and the number of custom policies. This cache is accessed fairly often, if you use policies at all.
The HCL Portal 8.5 default theme uses policies and query this cache during every request, but it is possible
to create themes that do not use policies at all. Furthermore, when opening mails the cache is accessed.
Creating a cache entry involves reading data from a database. An entry into the cache is fairly small.

**com.ibm.wps.policy.services.UserPolicyNodeCacheManager**
Default size: 2500, default lifetime: 600, usage pattern: regular.

This cache stores connections between a policy and a policy target, for example a user distinguished name.
Theme policies do not use targets, hence there is no cache entry based on these policies. The out-of-thebox
mail policy uses the user as target. Hence there is at least one entry for every user accessing the CPP
mail portlet. The size of a cache entry depends on the size of the target object. For a distinguished name a
cache entry is fairly small.
Project Caches