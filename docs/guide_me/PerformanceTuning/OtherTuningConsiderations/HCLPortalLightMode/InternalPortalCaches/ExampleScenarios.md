# Example Scenarios

This section describes some example usage scenarios along with descriptions of possible cache settings and
suggested cache sizes. This discussion may be useful as starting point for the caches in your environment.

## General Comments

Most Portal caches fall into one of four groups:
1. Caches where the number of entries scales with the number of active users. For example, the access control user context cache com.ibm.wps.ac.AccessControlUserContextCache.
2. Caches where the number of entries scales with the number of users using a specific function.For example, the cache com.lotus.cs.services.directory.ldap.BasicLDAPDirectoryService.user.
3. Caches which scale with the number of pages being visited. For example, the resource cache com.ibm.wps.model.content.impl.ResourceCache.
4. Caches which scale based on the growth of some other resource, such as clients or user agents, which are stored in the cache. For example,
    `com.ibm.wps.model.impl.RuntimeClientMap.userAgent2client`.

Those that scale based on Portal resources should have lifetimes and sizes based on the number of
resources in the system and how frequently users access these resources. The other caches depend upon
usage scenarios such as those described in this section.

Most caches have a lifetime associated with them because the cached content might change over time. For
example, access control information could be changed via user administration in the administrative
portlets, XML Access or the HCL Portal scripting interface.

All code that uses caches within HCL Portal is implemented in a way such that cache entries that are no
longer valid are removed from the cache if the corresponding information has been changed or deleted. So,
lifetimes are not strictly needed for proper Portal functionality. However, the lifetime should still be set for
the following reasons:

- Expired cache entries can be removed to free up memory.
- There are rare race conditions in cluster setups so that invalidation events are processed correctly but the cache still reflects wrong data.

Updates within external systems, like an external access control system, will never become visible.
If there is no or very little administration on your system and you have free memory in the Java heap
available, it is safe to increase the lifetime of cache content to save the additional workload for reloading
cached data.

## Small Number of Pages and Small Number of Users

In this scenario a Portal has a limited number of pages and users accessing them. For example, there might
be 200 pages in the system and up to a few hundred users working with the Portal simultaneously. You will
find Portals of this kind often during development and testing or in smaller Portal production systems.

For Portals of this size and usage, the default cache values typically are good. So, only small modifications
to the defaults should be required. Nevertheless, you should be careful not to translate those cache
settings directly into production with larger user populations and more pages.

## Small Number of Pages and Large Number of Users

In this scenario a Portal only offers a rather small number of pages to the user. Overall there might be only
a few hundred pages, maybe with different access rights on them, so users might only see subsets of the
pages. But in this scenario there are thousands of users accessing the system at the same time. In other
words, thousands of users have active sessions.

Properties of caches that store information on pages typically do not need to be modified in this scenario.
But all caches that store user-dependent information might be performance bottlenecks.

Assume you have 2000 active users in your system. Per-user caches being sized to only 1000 entries will
operate at their upper limit nearly all of the time and constant re-calculating or re-loading of data from the
Portal database will occur. You should size the user-dependent caches in a way such that enough entries for
the number of currently active users can remain in memory. The number of ‘currently active users’ in this
case are the users who have a session and still issue requests against HCL Portal. By contrast there are
passive users who still have a session, but no longer issue requests and have forgotten to log out or simply
went away from the screen and let the session time out.

We increased the sizes of the following five caches in our measurement environments in such a way that
the data of all concurrent users fits into the caches.
`com.ibm.wps.ac.CommonExplicitEntitlementsCache`
`com.ibm.wps.datastore.services.Identification.SerializedOidString.cache`
`com.ibm.wps.model.factory.UserSpecificModelCache`
`com.ibm.wps.puma.CommonPrincipalCache`
`com.ibm.wps.puma.OID_DN_Cache`
We increased the lifetimes of all caches to at least one hour.

## Portals with Long Session Timeouts

If the session timeout has a high value, it is likely that there will be a large number of users who still have
sessions with the Portal, but who have not interacted with the site for a significant period of time. These
users are known as passive users, and they can cause some special performance challenges.

In this situation the number of sessions can be very large. However, many of these sessions are ‘passive’. It
is typically not necessary to have all information in memory for all these users when they leave their desk
but not the Portal, for example during lunch. To find proper sizes for the Portal caches you need a good
understanding of the behavior of your users. Users who have not worked with the Portal for more than an
hour typically will accept response times of two or three seconds for their first request after such a long
break, whereas users who work with the Portal frequently do not want to see their data being evicted from
caches.

For this scenario it is hard to give precise cache size recommendations. The values simply depend too much
on your Portal usage scenario. You have to monitor your system and users closely to determine good
values.

## Portals with Many Pages

Portals in this group have several thousand pages that are available for larger groups of users. Therefore,
many pages are potentially accessed quite frequently. We do not count installations with many customized
pages (sometimes known as ‘implicit derivations’) to this group because these are private resources and
are loaded for the current user only. Private data is not added to the shared Portal caches.

For example, your Portal could have 5,000 pages in total. Half of those pages are available to all users; for
the other half, there are several user groups who have view rights. Some users have management rights on
those pages. In this case, you typically do not want to have all pages and all corresponding information in
memory at all times. But you want to make sure that all frequently accessed data is in memory. Typically,
not all Portal pages are accessed with equal frequency.
We increased the sizes of the following caches in our measurement environments so that all frequently accessed
pages, can be cached.

`com.ibm.wps.ac.CommonExplicitEntitlementsCache`
`com.ibm.wps.ac.PermissionCollectionCache`
`com.ibm.wps.ac.ProtectedResourceCache`
`com.ibm.wps.datastore.pageinstance.DerivationCache`
`com.ibm.wps.datastore.pageinstance.OIDCache`
`com.ibm.wps.datastore.services.Identification.SerializedOidString`
`com.ibm.wps.model.factory.UserSpecificModelCache`

The lifetimes of all caches can be increased to at least one hour. The sizes `com.ibm.wps.datastore.pageinstance.OIDCache` and 
`com.ibm.wps.datastore.pageinstance`.DerivationCache should be large enough to hold all the pages that would be accessed in a typical day. For a production site, estimate the number of pages likely to be accessed and set these cache sizes accordingly. Remember, after adjusting any cache settings, monitor verbose garbage collection output and evaluate whether the JVM heap needs to be increased. Listed below are the cache sizes for a site with 10,000 pages.

|Parameter |Setting Used|
|----------|------------|
|com.ibm.wps.datastore.pageinstance.OIDCache.size |10000|
|com.ibm.wps.datastore.pageinstance.OIDCache.lifetime |28800|
|com.ibm.wps.datastore.pageinstance.DerivationCache.size |10000|
|com.ibm.wps.datastore.pageinstance.DerivationCache.lifetime |28800|