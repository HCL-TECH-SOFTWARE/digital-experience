# Disabling Tagging and Rating

Tagging and Rating services can be disabled if they are not being used. Test results showed that disabling Tagging and Rating services improved capacity by 3%.

## Disabling Tagging and Rating Services

To disable Tagging and Rating services:

1.  In the WebSphere Integrated Solutions Console (ISC), navigate to **Resources > Resource Environment > Resource Environment Providers > WP CPConfigurationService > Additional Properties: Custom properties**.
2.  Click on each of the following properties:
    * `com.ibm.wps.cp.tagging.isTaggingEnabled`
    * `com.ibm.wps.cp.rating.isRatingEnabled`
3.  Set the **Value** for each property to `false`, then click **Apply**.

---

### Additional Considerations

The `wp_tagging_rating` module can also be removed from the theme profile. By default, this module is located in the deferred section of the `profile_deferred.json` file. For performance benchmarks, this module was left enabled, but the deferred section of the profile was never loaded as part of the measured workload. Therefore, the performance impact of explicitly removing this module remains unknown.

## Mashup Multipart Tuning

The Portal 9.5 theme multipart downloading can be disabled to improve performance.

!!! Note
    Disabling this may cause performance issues on client side aggregation themes from earlier Portal releases.

**Disabling multipart downloading**

1. In the **WebSphere Integrated Solutions Console (ISC)**, go to:  
   **Resources > Resource Environment > Resource Environment Providers > WP CommonComponentConfigService > Additional Properties: Custom properties**

2. Click each of the following properties:
    - `cc.multipart.enabled`
    - `cc.multipart.correlatehosts`

3. Set the **Value** for each property to `false`. Then, click **Apply**. By default, the **Value** for `cc.multipart.enabled` is set to `false`.

## Disable Friendly URLs

Friendly URLs enhance the end user’s experience by placing a meaningful name in the browser’s address field. Test results show that disabling friendly URLs improved capacity by 2% or more depending on the theme.

If you are using Blogs, Wikis or WCM content pages, do not set `friendly.enabled` or `friendly.pathinfo.enabled` to `false`. For more information, refer to [Friendly URL for web content example](../../../../manage_content/wcm_delivery/deliver_webcontent_on_dx/customizing_content/friendlyurl_wcmviewer/wcm_config_wcmviewer_friendlyexample.md).

To fully use friendly URLs, pages must be configured with friendly names.

---
### Disabling Friendly URLs

1.  In the WebSphere ISC, go to **Resources** > **Resource Environment** > **Resource Environment Providers** > **WP ConfigService** > **Additional Properties: Custom properties**.

2.  Click each of the following properties:
    * `friendly.enabled`
    * `friendly.pathinfo.enabled`

3.  Set the **Value** for each property to `false`, then click **Apply**.

Setting `friendly.enabled` to `false` turns off Portal’s use of friendly URLs. Setting `friendly.pathinfo.enabled` to `false` turns off WCM’s use of friendly URLs. If WCM is not used in an installation, and friendly names are used by Portal, it is still advantageous to disable `friendly.pathinfo.enabled`. 

### Rendering Only Environments

**Subscriber Only**

For Portal systems where no WCM authoring or page management is taking place locally, syndication overhead can be eliminated by specifying the `Subscriber Only` property. You can specify this property by setting the `deployment.subscriberOnly` property to `true` in `WCMConfigService`. For more information, refer to [Syndication properties](../../../../manage_content/wcm_delivery/syndication/wcm_config_prop_syndication.md).

### Specifying the `subscriberOnly` Parameter

 1.  In the WebSphere Integrated Solutions Console (ISC), navigate to:
    **Resources > Resource Environment > Resource Environment Providers > WCM WCMConfigService > Additional Properties: Custom properties**.
 2.  Locate and click on the property `deployment.subscriberOnly`.
 3.  Set its **Value** to `true`.
 4.  Click **Apply**.
 5.  Click **Save** to persist your changes.
 6.  Restart the Portal server for the changes to take effect.

## Site Toolbar

For rendering-only sites where page management is not taking place locally, the Site Toolbar can be disabled. You can disable the toolbar by setting the `global.toolbar.enabled` and `default.toolbar.enabled` properties to `false` in `WP VirtualPortalConfigService`. For more information, refer to [Removing the site toolbar on a production server](../../../../build_sites/create_sites/site_prep_content_author/prep_site_toolbar/wcm_mngpages_disabletool.md).

### Disabling the Site Toolbar

1.  In the WebSphere Integrated Solutions Console (ISC), navigate to:
    **Resources > Resource Environment > Resource Environment Providers > WP VirtualPortalConfigService > Additional Properties: Custom properties**.
2.  Locate and click on each of the following properties:
    * `global.toolbar.enabled`
    * `default.toolbar.enabled`
3.  Set the **Value** for each property to `false`.
4.  Click **Apply**.
5.  Click **Save** to persist your changes.
6.  Restart the Portal server for the changes to take effect.

---

## Cache Invalidations
To reduce unnecessary cache invalidations, set the `cache.dynamic.content.spot` property to `false` in `WP ConfigService`.

### Disabling Cache Invalidations

1.  In the WebSphere Integrated Solutions Console (ISC), navigate to:
    **Resources > Resource Environment > Resource Environment Providers > WP ConfigService > Additional Properties: Custom properties**.
2.  Locate and click on the property `cache.dynamic.content.spot`.
3.  Set its **Value** to `false`.
4.  Click **Apply**.
5.  Click **Save** to persist your changes.
6.  Restart the Portal server for the changes to take effect.

---

This setting increased throughput when using the Portal 9.5 theme. However, it may have a performance impact with the Portal 8.5 theme. If your installation uses both the Portal 8.5 and Portal 9.5 themes, you should run benchmarks to determine if the setting is beneficial before applying this value.

## Cache `ra:collection` URLs

You can allow the caching of `ra:collection` URLs by setting the `resourceaggregation.cache.markup` property to `true` in `WP ConfigService`.

### Enabling `ra:collection` Caching

1.  In the WebSphere Integrated Solutions Console (ISC), navigate to:
    **Resources > Resource Environment > Resource Environment Providers > WP ConfigService > Additional Properties: Custom properties**.
2.  Locate and click on the property `resourceaggregation.cache.markup`.
3.  Set its **Value** to `true`.
4.  Click **Apply**.
5.  Click **Save** to persist your changes.
6.  Restart the Portal server for the changes to take effect.

## Disabling portlet capability filter

The runtime portlet capabilities filter allows a Portal developer to receive user-friendly error messages on pages if the theme profile in place for a page does not contain all the capabilities that the portlets on the page require. This is very useful for development purposes, but it has an undesirable overhead in a production environment. In production, this filter should be disabled, as the pages need to be properly debugged before going into production.
For more information, refer to [Configuration settings for capability filters](../../../../build_sites/themes_skins/customizing_theme/cfg_portal_theme_and_modules/themeopt_mod_capfilter_settings.md).

### Disabling the Portlet Capability Filter

To disable the runtime portlet capability filter, set `resourceaggregation.enableRuntimePortletCapabilitiesFilter` to `false` in `WP ConfigService` by following these steps:

1.  In the WebSphere Integrated Solutions Console (ISC), navigate to:
    **Resources > Resource Environment > Resource Environment Providers > WP ConfigService > Additional Properties: Custom properties**.
2.  Locate and click on the property `resourceaggregation.enableRuntimePortletCapabilitiesFilter`.
3.  Set its **Value** to `false`.
4.  Click **Apply**.
5.  Click **Save** to persist your changes.
6.  Restart the Portal server for the changes to take effect.

## Navigator service

The Navigator service manages the content model for unauthenticated users, determining which pages are accessible without login. This model is periodically reloaded by WebSphere Portal, meaning that newly created pages for unauthenticated users will not become visible until after the next reload.

In performance testing, the environment assumed a low rate of page changes, so the reload interval was configured to occur once per hour.
**Recommendations:**
 - **Production environments:**
If unauthenticated content changes infrequently, set the reload interval to 1 hour or longer to improve performance and reduce overhead.

 - **Testing or staging environments:**
If frequent updates to public-facing content are expected, use a shorter reload interval to ensure that changes appear promptly.

This service also controls the HTTP cache-control headers which will be sent on unauthenticated pages. While the testing environment did not exploit HTTP page caching, increasing these cache lifetimes in a production environment can reduce load on the Portal. For more information about the use of HTTP cache-control headers with WebSphere Portal, refer to [Caching](../../../../deployment/manage/config_portal_behavior/caching/index.md).

*### Specifying the Navigator Service Settings

1.  In the WebSphere Integrated Solutions Console (ISC), navigate to:
    **Resources > Resource Environment > Resource Environment Providers > WP NavigatorService > Additional Properties: Custom properties**.
2.  Set the **Value Used** for each of the following properties in the table below.
3. Set the **Value** for each property as shown in the table and click **Apply**.

| **Parameter**                        | **Default Value (s)** | **Value Used (s)** | **Definition** |
|----------------------------------------|--------------------------|------------------------|-------------------|
| `public.expires`                       | 60                       | 3600                   | Controls the cache expiration time for **unauthenticated pages** in both browser and proxy caches. <br> If the `remote.cache.expiration` property is also configured with a value ≥ 0, the system uses the **smaller** of the two values. |
| `public.reload`                        | 60                       | 3600                   | WebSphere Portal maintains an internal cache of the list of pages visible to unauthenticated users and their portlet layout. <br> This property controls how often that cache is refreshed. <br> **Note:** This does *not* cache page content—only layout metadata. |
| `remote.cache.expiration`             | 10800                    | 28800                  | Determines the cache expiration time for **external caches** (outside the Portal server) for both authenticated and unauthenticated pages. |

 
!!! Note
    The internal cache only caches the layout of the pages, not their content


## Registry service

HCL Digital Experience (DX) maintains information about many resource types in its databases. Some of these resources are replicated into memory for faster access, which are provided by the registry service. This replicated information will be periodically reloaded from the database, picking up any changes which may have been made on a peer node in a clustered environment.

The registry service allows the configuration of a reload time (in seconds) for each type of data it manages. In a production environment, this type of information is expected to change very infrequently, so very long reload times were used for the registry service. These values do not include a size parameter, as they are a full replication of the database.
**Specifying the registry service settings**

For more information, see the [Cache Manager Service section](database_tuning.md#_cache-manager-service).
The cache manager service in HCL DX is used to cache a wide variety of types of information in memory. These caches are similar to the registries maintained by the registry service, as each type of information gets its own cache. However, there are key differences:

- The information stored in the cache manager service’s caches tends to be more dynamic than the information stored in the registry service’s registries.
- The caches used by the cache manager service are limited in size, and entries will be discarded when the caches become full. The registries used by the registry service are not limited in size and contain all entries of the specific data type.
- Expiry times are managed individually for each entry in the cache by the cache manager service. In contrast, when the reload time is reached for a registry, the entire contents of that registry are reloaded.

**Specifying the cache manager service settings**

To specify the cache manager service settings, open WebSphere ISC and go to **Resources > Resource Environment > Resource Environment Providers > WP CacheManagerService > Additional Properties: Custom properties**.

Each cache has several configurable options. A full discussion of these options, along with a list of the caches in HCL DX 9.5, is given in [Internal Portal Caches](./hcl_dx_light/internal_portal_cache/index.md). The following table lists the changes made to the CacheManager service for performance benchmarks. Size values are specified in number of objects and lifetime values are specified in seconds.

| **Parameter** | **Default Value** | **Default Value (CF04)** | **Value Used** |
|------------------|--------------------:|----------------------------:|------------------:|
| `cacheinstance.com.ibm.wps.ac.AccessControlUserContextCache.size` | 4000 | 6000 | 6000 |
| `cacheinstance.com.ibm.wps.ac.ChildResourcesCache.lifetime` | 7200 | 28800 | 28800 |
| `cacheinstance.com.ibm.wps.ac.CommonRolesCache.size` | 30000 | 40000 | 33000 |
| `cacheinstance.com.ibm.wps.ac.ExternalOIDCache.lifetime` | 8640 | 28800 | -1 |
| `cacheinstance.com.ibm.wps.ac.OwnedResourcesCache.enabled` | True | False | False |
| `cacheinstance.com.ibm.wps.ac.PermissionCollectionCache.lifetime` | 10240 | 14400 | -1 |
| `cacheinstance.com.ibm.wps.ac.ProtectedResourceCache.lifetime` | 10143 | 14400 | 14400 |
| `cacheinstance.com.ibm.wps.datastore.services.Identification.SerializedOidString.cache.size` | 2500 | 5000 | 5000 |
| `cacheinstance.com.ibm.wps.model.factory.UserSpecificModelCache.size` | 2000 | 6000 | 6000 |
| `cacheinstance.com.ibm.wps.pe.portletentity.lifetime` | 5800 | 28800 | 28800 |
| `cacheinstance.com.ibm.wps.pe.portletentity.size` | 10000 | 5003 | 5003 |
| `cacheinstance.com.ibm.wps.policy.services.PolicyCacheManager.lifetime` | 7780 | 43200 | 43200 |
| `cacheinstance.com.ibm.wps.puma.CommonPrincipalCache.size` | 10000 | 30000 | 30000 |
| `cacheinstance.com.ibm.wps.puma.DN_OID_Cache.size`<br><small>Higher values can improve hit ratio but not throughput</small> | 1500 | 30000 | 30000 |
| `cacheinstance.com.ibm.wps.puma.OID_DN_Cache.size` | 1500 | 5000 | 5000 |
| `cacheinstance.com.ibm.wps.resolver.data.cache.DataSourceCache.size` | 1000 | 10000 | 8000 |
| `cacheinstance.com.ibm.wps.resolver.data.cache.FirstLevelDataSourceCache.size` | 1009 | 5000 | 2003 |
| `com.ibm.wps.resolver.cor.cache.uri` | 2000 | – | 2000 |
| `cacheinstance.com.ibm.wps.resourceaggregator.ContributionsCache.size` | 20 | 1000 | 1000 |
| `cacheinstance.com.ibm.wps.services.vpmapping.HostnameToVirtualPortalIDCache.lifetime` | 3600 | – | -1 |
| `cacheinstance.com.ibm.wps.spa.parser.locale.FirstLevelLocalizationParserCache.size` | 1000 | 1000 | 1009 |
| `cacheinstance.com.ibm.wps.spa.parser.skin.FirstLevelSkinParserCache.size` | 1000 | 1000 | 1009 |
| `cacheinstance.com.ibm.wps.spa.parser.theme.FirstLevelThemeParserCache.size` | 1000 | 2000 | 2003 |
| `cacheinstance.com.lotus.cs.services.UserEnvironment.size`<br><small>Tune if live names support is used</small> | 2000 | 2000 | 4500 |
| `cacheinstance.DigestCache.cache.size` | 2000 | 50000 | 45000 |


**Unused Caches**

Unused caches use a minimal amount of memory so it is not recommended to lower them below their default size.

**Cache Sizes**

For some cache types, performance will improve if the cache size is a prime number due to a lower probability of cache collisions. For such cache types, the actual size is increased at runtime to the next prime number equal or greater than the size specified.

## People Service

!!! Note
    The People Service mentioned in this topic is the old People Service application, not the [People Service](../../../../extend_dx/integration/people_service/index.md) application made available starting in CF224.

People Service is used when assigning user and group permissions for WCM resources through the People Picker portlet. In certain cases, the selection of users and groups may be slow and can be improved by reducing the default search attributes used by the service. For example, People Picker expects four attributes. To improve search performance, it’s possible to configure the same attribute four times since only one is needed.
```
Attribute: pickerPeopleSearchAttribute
```

** **Value:** `cn,cn,cn,cn`
<!--what are the specific steps/actions users need to do here?-->

For more information about defining Search attributes in HCL DX, refer to [Search - Portlet repository](../../../../deployment/manage/portal_admin_tools/portal_scripting_interface/command_ref_psi/portlet_repo/search_ptlt_rep.md).