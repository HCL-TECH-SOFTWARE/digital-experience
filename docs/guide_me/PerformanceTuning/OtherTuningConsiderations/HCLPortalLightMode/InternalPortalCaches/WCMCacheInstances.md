# WCM Cache Instances

## WCM Item Caching

**services/cache/iwk/strategy**

Default size: 2000, default lifetime: infinite (-1), usage pattern: regular.

This cache stores internal WCM items. Any WCM item read from the database will first check this cache.
WCM items cover Content, Workflow, Workflow Stages, Workflow actions, Taxonomies, Categories,
Authoring Templates, Presentation Templates, Sites, Siteareas, and all Library Components. The cache
entry will be updated or cleared when its corresponding WCM Item is updated or deleted.

## WCM Summary

**services/cache/iwk/summary – WCM summaries**
Default size: 2000, default lifetime: infinite (-1), usage pattern: regular.

This cache stores summaries of WCM Items. The summaries are used to display in lists in the authoring
portlet or used internally in the WCM API to calculate WCM Item Document IDs used for Iterators. The
cache entry will be cleared when a WCM Item is updated that will affect this summary.

## WCM Basic Caching

**services/cache/iwk/module**
Default size: 2000, default lifetime: infinite (-1), usage pattern: regular.

This cache is used for WCM Basic caching. See the InfoCenter on setting up Basic caching. The Basic cache
stores the entire response. The key is based on the URL only, so all users will see the same response.

## Advanced & Resources

**services/cache/iwk/processing**
Default size: 2000, default lifetime: 1 month (configurable), usage pattern: regular.

This cache stores the binary MIME for file and image resources in WCM. The maximum size of resources to
store is set in the WCMConfigService.properties file as the property resourceserver.maxCacheObjectSize (in
kb). Resources over this size are not cached and are streamed directly to the response. The expiry is set in
the same file as: resourceserver.cacheExpiryDate. The cache entry will be cleared when that resource is
updated.

This cache also stores page data if WCM Advanced caching is enabled. See the HCL Digital Experience Help
Center for enabling WCM Advanced caching. The processing cache stores advanced caches for the
following types:

- Site: Similar to “Basic” Caching except that “Connect Tags” are processed each time
- User: Stores a copy of an item in the cache for each user
- Secured: Users that belong to the same groups will access the same cached items
- Personalized: Users who have selected the same personalization categories and keywords, and who belong to the same Group, will access the same cached items

!!! note
    The ‘session’ option for Advanced caching is not stored in the processing cache, but the ‘session’ cache.

## Session Cache

**services/cache/iwk/session**
Default size: 2000, default lifetime: infinite (-1), usage pattern: regular.

This cache stores the page data for when session advanced caching is enabled. See the InfoCenter for
enabling WCM Advanced caching.

## Menu

**services/cache/iwk/menu**
Default size: 2000, default lifetime: infinite (-1), usage pattern: regular.

This cache stores WCM Menu entries. An entry comprises of the Content IDs associated with a particular
menu. The entries are retrieved and cached without applying security. Whenever a user needs that menu’s
results, their specific security will then be applied to the cached results. A dynamic menu, which is one that
is affected by the current user’s context (e.g. based on categories in a user’s profile) will store a separate
cache entry for each different context. The cache entry will be cleared when a WCM Item is updated that
will affect this menu.

## Navigator

**services/cache/iwk/nav**
Default size: 2000, default lifetime: infinite (-1), usage pattern: regular.

This cache stores parent to child relationships that comprise a WCM navigator. A complex navigator might
have multiple parent to child relationships (e.g. if siblings are included). The navigator entry is made up of
the IDs of the parent and children. This cache will be cleared upon any WCM Item update in the system.

## Absolute Path

**services/cache/iwk/abspath**
See description below.

**services/cache/iwk/abspathreverse**
Default size: 5000, default lifetime: infinite (-1), usage pattern: regular.

These two caches store JCR path to WCM item ID relationships (one cache is used for Path-to-ID
relationships and the other for ID-to-Path relationships). The cache entry will be cleared when a WCM Item
is updated that will affect it. Typically these two caches should be configured to have the same size.

## Missed Items

**services/cache/iwk/missed**
Default size: 5000, default lifetime: infinite (-1), usage pattern: regular.

This cache stores JCR paths that do not exist. This is used primarily for multi-locale solutions to determine if
items of other locales exist or not. The cache entry will be cleared when a WCM Item is updated that will
affect it.

## Project Render Information Cache

**services/cache/iwk/projectrenderinfo**
Default size: 100, default lifetime: infinite (-1), usage pattern: regular.

This cache stores the computed project item state information that is used to perform project rendering
previews. Each project will have a single entry in the cache. The information in the cache includes the
calculated relationships of draft to published items and vise- versa. This cache is used to dynamically
overlay project changes over the published site. The cache entry will be cleared when WCM items are
removed from projects or purged.

## Legacy Cache

**services/cache/iwk/site**
This is an internal cache to support some old legacy capabilities of WCM. It is not used in Portal scenarios in
version 8.5.

## Library

**services/cache/iwk/global**
Default size: 2000, default lifetime: infinite (-1), usage pattern: regular.

This cache contains a lookup for library id, name and path to the library object. This is pre-populated up to
the cache size at Portal startup.xmlformat

**services/cache/iwk/libparent – Library Parent**
Default size: 2000, default lifetime: infinite (-1), usage pattern: regular.
This cache stores a list of all children library ids to a given parent id. This was introduced for Quickr to group
libraries within a teamspace.

## WCI Object IDs

**wci/wcmobjectids**
Default size: 2000, default lifetime: infinite (-1), usage pattern: regular.

The WCI object ids cache does not have a significant effect on performance. It is used internally by the WCI
consumer to ensure that concurrent distributed feed consumers do not cause inconsistencies.

## User Cache
Size is fixed to 2,000. By default, this is disabled.

This cache operates using a Least Recently Used algorithm. It is not shared across nodes in the cluster and it
does not use DynaCache. It does not update when LDAP changes. It is disabled by default but can be
enabled through setting:

`user.cache.enabled=true`

### How to Set
This is set in `WCMConfigService.properties`. To enable you need to run a module called `MemberCacheManager` or restart the server.

To enable the module, add the following to WCMConfigService.properties:

- `connect.businesslogic.module.template.class=com.presence.connect.wmmcomms`
- `connect.businesslogic.module.template.remoteaccess=true`
- `connect.businesslogic.module.template.autoload=false`