# Disabling Tagging and Rating

If you are not using the Tagging and Rating services they can be disabled. In our results, disabling this improved capacity by 3%.

**How to Set**

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WP CPConfigurationService → Custom properties

Modify the following custom properties:

- **Name:** `com.ibm.wps.cp.tagging.isTaggingEnabled`  
  **Value:** `false`
- **Name:** `com.ibm.wps.cp.rating.isRatingEnabled`  
  **Value:** `false`

The module can also be removed from the theme profile. The module name is wp_tagging_rating; by default it is in the deferred section of profile_deferred.json. For performance benchmarks, this module was left enabled, but the deferred section of the profile was never loaded as part of the measured workload, so the performance impact of removing it is unknown.

## Mashup Multipart Tuning

The Portal 9.5 theme multipart downloading can be disabled to improve performance. Be aware that disabling this may cause performance issues on client side aggregation themes from earlier Portal releases.

**How to Set**

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WP CommonComponentConfigService → Custom properties

Modify the following custom properties:

- **Name:** `cc.multipart.enabled`  
  **Value:** `false` (the default)
- **Name:** `cc.multipart.correlatehosts`  
  **Value:** `false`

## Disable Friendly URLs

Friendly URLs enhance the end user’s experience by placing a meaningful name in the browser’s address field. However, there is a cost for using friendly URLs. In our results, disabling friendly URLs improved capacity by 2% or more depending on the theme.

If you are using Blogs, Wikis or WCM content pages, do not set friendly.enabled or friendly.pathinfo.enabled to false. For more information, see [Friendly URL for web content example](../../../../manage_content/wcm_delivery/deliver_webcontent_on_dx/customizing_content/friendlyurl_wcmviewer/wcm_config_wcmviewer_friendlyexample.md)

To fully use friendly URLs, pages must be configured with friendly names.

**How to Set**

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WP ConfigService

Modify the following custom properties:

- **Name:** `friendly.enabled`  
  **Value:** `false`
- **Name:** `friendly.pathinfo.enabled`  
  **Value:** `false`

Setting friendly.enabled to false, turns off Portal’s use of friendly URLs. Setting friendly.pathinfo.enabled to false turns off WCM’s use of friendly URLs. If WCM is not used in an installation, and friendly names are used by Portal, it is still advantageous to disable friendly.pathinfo.enabled.

### Rendering Only Environments

**Subscriber Only**

For Portal systems where no WCM authoring or page management is taking place locally, syndication overhead can be eliminated by specifying ‘subscriber only’. Set deployment.subscriberOnly to true in WCM WCMConfigService. For more information, see [Syndication properties](../../../../manage_content/wcm_delivery/syndication/wcm_config_prop_syndication.md).

**How to Set**

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WCM WCMConfigService → Custom properties

**Name:** `deployment.subscriberOnly`  
**Value:** `true`

**Site Toolbar**

For rendering only sites where page management is not taking place locally, the Site Toolbar can be disabled. Set global.toolbar.enabled to false and default.toolbar.enabled to false in WP

VirtualPortalConfigService. For more information, see [Removing the site toolbar on a production server](../../../../build_sites/create_sites/site_prep_content_author/prep_site_toolbar/wcm_mngpages_disabletool.md).

**How to Set**

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WP VirtualPortalConfigService

Modify the following custom properties:

- **Name:** `global.toolbar.enabled`  
  **Value:** `false`
- **Name:** `default.toolbar.enabled`  
  **Value:** `false`

## Getting Rid of Cache Invalidations

To reduce unnecessary cache invalidations set cache.dynamic.content.spot to false in WP ConfigService.

**How to Set**

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WP ConfigService → Custom properties

**Name:** `cache.dynamic.content.spot`  
**Value:** `false`

This setting increased throughput when using the Portal 9.5 theme, but might have a performance impact with the Portal 8.5 theme. If an installation is using the Portal 8.5 theme as well as the Portal 9.5 theme, benchmarks should be run to determine if the net effect is positive before setting this value.

## Cache ra:collections

To allow caching of ra:collection URLs, set resourceaggregation.cache.markup to true in WP ConfigService.

**How to Set**

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WP ConfigService

**Name:** `resourceaggregation.cache.markup`  
**Value:** `true`

## Disable Portlet Capability Filter

The runtime portlet capabilities filter allows a Portal developer to get friendly error messages on pages if the theme profile that is in place for a page does not contain all the capabilities that the portlets on the page require. This is very useful for development purposes, but has an undesirable overhead in a production environment. In production this filter should be disabled as the pages should be properly debugged before going into production.

For more information, see [Configuration settings for capability filters](../../../../build_sites/themes_skins/customizing_theme/cfg_portal_theme_and_modules/themeopt_mod_capfilter_settings.md).


To disable, set **resourceaggregation.enableRuntimePortletCapabilitiesFilter** to **false** in WP ConfigService.

**How to Set**

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WP ConfigService → Custom properties

**Name:** `resourceaggregation.enableRuntimePortletCapabilitiesFilter`  
**Value:** `false`

## Navigator Service

The navigator service manages the content model for unauthenticated users, which controls the pages those users are able to see. This content model is periodically reloaded by WebSphere Portal. New pages which are visible to unauthenticated users will not be available until the next reload occurs. Our environment assumes a low rate of change for pages, so we set this reload to only occur once per hour. In a production environment where new pages for unauthenticated users are rarely created, setting this reload time to an hour or more will give better performance. In a test or staging environment where updates to unauthenticated pages need to be seen more often, a lower reload time is more appropriate.

This service also controls the HTTP cache-control headers which will be sent on unauthenticated pages. While our environment did not exploit HTTP page caching, increasing these cache lifetimes in a production environment can reduce load on the Portal. For more information about the use of HTTP cache-control headers with WebSphere Portal, refer to [Caching](../../../../deployment/manage/config_portal_behavior/caching/index.md).

**How to Set**

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WP NavigatorService → Custom properties

**Navigator Service Settings**

| Parameter | Default Value | Value Used | Definition |
| --- | --- | --- | --- |
| public.expires (seconds) | 60  | 3600 | Determines cache expiration time for<br><br>unauthenticated pages in browser caches and proxy caches. If the setting remote.cache.expiration is also set to a value greater than or equal to 0, the smaller one of the two values is used. |
| public.reload (seconds) | 60  | 3600 | WebSphere Portal maintains an internal cache of the list of pages visible to unauthenticated users, and the arrangement of portlets on those pages. This controls how frequently that internal cache is refreshed. Note, however, that this is not caching the content of those pages – simply their layout. |
| remote.cache. expiration (seconds) | 10800 | 28800 | Determine cache expiration for caches outside of the Portal server for authenticated as well as for unauthenticated pages |

## Registry Service

HCL Portal maintains information about many resource types in its databases. Some of these resources are replicated into memory for faster access; this is provided by the registry service. This replicated information will be periodically reloaded from the database, thus picking up any changes which may have been made on a peer node in a clustered environment.

The registry service allows configuring a reload time, in seconds, for each type of data which it is managing. In a production environment, we expect this type of information to change very infrequently, so we used very long reload times for the registry service. These values do not include a size parameter as they are a full replication of the database.

**How to Set**

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WP RegistryService → Custom properties

**Registry Service Settings**

| Parameter | Default Value | Definition | Value Used |
| --- | --- | --- | --- |
| default.interval | 1800 | 28800 | Reload frequency for any object types not explicitly specified in the file. |
| bucket.transformationapplication.interval | 600 | 28800 | Reload frequency for transformation application definitions |
| bucket.transformation.interval | 600 | 28800 | Reload frequency for transformation definitions |

## Cache Manager Service

The cache manager service in HCL Portal is used to cache a wide variety of types of information in memory. These caches are somewhat similar to the registries maintained by the registry service, as each type of information gets its own cache. The key differences are:

- The information stored in the cache manager service’s caches tends to be more dynamic than the information stored in the registry service’s registries.
- The caches used by the cache manager service are limited in size, and entries will be discarded when the caches become full. The registries used by the registry service are not size-limited; they contain all entries of the specific data type.
- Expiry times are managed individually for each entry in the cache, managed by the cache manager service. In contrast, when the reload time is reached for a registry, the entire contents of that registry are reloaded.

**How to Set**

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WP CacheManagerService → Custom properties

Each cache has several configurable options. A full discussion of these options, along with a list of the caches in HCL Portal 9.5, is given in the Internal Portal Caches section. The table that follows lists the changes which we made to the CacheManager service for performance benchmarks. Size values are specified in “number of objects” and lifetime values are specified in “seconds”.

**CacheManager Service Settings**

| Parameter | Default<br><br>Value | Default<br><br>Value<br><br>(CF04) | Value Used |
| --- | --- | --- | --- |
| cacheinstance.com.ibm.wps.ac.AccessControlUserContextCache.size | 4000 | 6000 | 6000 |
| cacheinstance.com.ibm.wps.ac.ChildResourcesCache.lifetime | 7200 | 28800 | 28800 |
| cacheinstance.com.ibm.wps.ac.CommonRolesCache.size | 30000 | 40000 | 33000 |
| cacheinstance.com.ibm.wps.ac.ExternalOIDCache.lifetime | 8640 | 28800 | \-1 |
| cacheinstance.com.ibm.wps.ac.OwnedResourcesCache.enabled | True | False | False |
| cacheinstance.com.ibm.wps.ac.PermissionCollectionCache.lifetime | 10240 | 14400 | \-1 |
| cacheinstance.com.ibm.wps.ac.ProtectedResourceCache.lifetime | 10143 | 14400 | 14400 |
| cacheinstance.com.ibm.wps.datastore.services.Identification.SerializedOidString.c ache.size | 2500 | 5000 | 5000 |
| cacheinstance.com.ibm.wps.model.factory.UserSpecificModelCache.size | 2000 | 6000 | 6000 |
| cacheinstance.com.ibm.wps.pe.portletentity.lifetime | 5800 | 28800 | 28800 |
| cacheinstance.com.ibm.wps.pe.portletentity.size | 10000 | 5003 | 5003 |
| cacheinstance.com.ibm.wps.policy.services.PolicyCacheManager.lifetime | 7780 | 43200 | 43200 |
| cacheinstance.com.ibm.wps.puma.CommonPrincipalCache.size | 10000 | 30000 | 30000 |
| cacheinstance.com.ibm.wps.puma.DN_OID_Cache.size<br><br>Higher values can get a better hit ratio but not increase throughput | 1500 | 30000 | 30000 |
| cacheinstance.com.ibm.wps.puma.OID_DN_Cache.size | 1500 | 5000 | 5000 |
| cacheinstance.com.ibm.wps.resolver.data.cache.DataSourceCache.size | 1000 | 10000 | 8000 |
| cacheinstance.com.ibm.wps.resolver.data.cache.FirstLevelDataSourceCache.size | 1009 | 5000 | 2003 |
| com.ibm.wps.resolver.cor.cache.uri | 2000 |     | 2000 |
| cacheinstance.com.ibm.wps.resourceaggregator.ContributionsCache.size | 20  | 1000 | 1000 |
| cacheinstance.com.ibm.wps.services.vpmapping.HostnameToVirtualPortalIDCache .lifetime | 3600 |     | \-1 |
| cacheinstance.com.ibm.wps.spa.parser.locale.FirstLevelLocalizationParserCache.si ze | 1000 | 1000 | 1009 |
| cacheinstance.com.ibm.wps.spa.parser.skin.FirstLevelSkinParserCache.size | 1000 | 1000 | 1009 |
| cacheinstance.com.ibm.wps.spa.parser.theme.FirstLevelThemeParserCache.size | 1000 | 2000 | 2003 |
| cacheinstance.com.lotus.cs.services.UserEnvironment.size Tune this if live names support is used | 2000 | 2000 | 4500 |
| cacheinstance.DigestCache.cache.size | 2000 | 50000 | 45000 |

**Unused Caches**

Even though unused caches use some memory, the amount is minimal so it is not recommended to lower them below their default size.

**Cache Sizes**

For some cache types, performance will be better if the cache size is a prime number due to a lower probability of cache collisions. For such cache types, the actual size is increased, at runtime, to the next prime number equal or greater than the size specified.

## People Service

!!!note
    The People Service mentioned in this topic is the old People Service application and not the [People Service](../../../../extend_dx/integration/people_service/index.md) available starting CF224.

When assigning user and group permissions for WCM resources through the People Picker portlet, the People Service is used. While we did not use this tuning for our own benchmarks, in some cases the selection of users and groups may be slow and can be improved by reducing the default search attributes used by the service. In an example, note that People Picker expects 4 attributes. To improve search performance it’s possible to configure the same attribute 4 times since only one is needed. Attribute: pickerPeopleSearchAttribute

Value: cn,cn,cn,cn

For more information about defining Search attributes in HCL DX, see [Search - Portlet repository](../../../../deployment/manage/portal_admin_tools/portal_scripting_interface/command_ref_psi/portlet_repo/search_ptlt_rep.md).