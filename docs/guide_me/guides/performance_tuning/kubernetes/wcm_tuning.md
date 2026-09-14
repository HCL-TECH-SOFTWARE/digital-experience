# Web Content Management Tuning

In general, the same tuning that was used for the base Portal scenario was used for the WCM scenarios.

The main differences are in the cache tuning settings: WCM places increased demands on the Portal Access Control (PAC) component, requiring a distinct set of cache tuning parameters. It also includes its own internal, tunable object caches that must be configured separately.
On top of cache tunings, WCM can require more Web Container threads and JCR data source connections than the base Portal Scenario. especially for heavy authoring workloads. The differences in tuning are mentioned below.

These tunings are to be made in addition to the base Portal tunings unless otherwise specified. Apply the base Portal tunings first.

## Tuning using the Integrated Solutions Console

### JVM heap sizes

| Parameter | WCM rendering | WCM authoring |
| --- | --- | --- |
| Initial and Maximum heap size (MB) | 4096 | 3584 |
| Nursery size (MB) | 1536 | 1024 |

To set the JVM heap sizes, refer to [Heap size](../../../../guide_me/guides/performance_tuning/kubernetes/base_portal.md#heap-size).


### Web container thread pool size

60 threads were used for both the minimum and maximum value.

To configure the value, refer to [Web container thread pool size](../../../../guide_me/guides/performance_tuning/kubernetes/base_portal.md#web-container-thread-pool-size). 

**JDBC data source pool sizes for WCM**

| Data source | Rendering value (min/max) | Authoring value (min/max) |
| --- | --- | --- |
| RELEASE | 10/100 | 10/50 (default) |
| COMMUNITY | 10/100 | 10/50 (default) |
| JCR | 10/150 | 10/150 |

To update this setting, refer to [Connection pool size](../../../../guide_me/guides/performance_tuning/kubernetes/base_portal.md#connection-pool-size).

!!!note
    The JCR data pool size should be set to 2.5 times the size of the web container thread pool.

### WCM object cache

**WCM object cache settings**

| Cache name | Default value | WCM rendering value | WCM authoring value |
| --- | --- | --- | --- |
| abspath | 5000 | 32000 | 8000 |
| abspathreverse | 5000 | 32000 | 8000 |
| processing | 2000 | 10000 | 10000 |
| session | 2000 | 6000 | 6000 |
| strategy | 2000 | 32000 | 8000 |
| summary | 2000 | 4000 | 2000 |

To set the WCM object cache, follow these steps:

1. Log in to the WebSphere Integrated Solutions Console.

2. Go to **Resources** > **Cache instances** > **Object cache instances**.

### Cache Manager Service

To set the properties for the Cache Manager Service, follow these steps:

1. Log in to the WebSphere Integrated Solutions Console.
2. Go to **Resources > Resource Environment > Resource Environment Providers > WP CacheManagerService > Custom properties**.
3. Add or update the following properties:

**Cache manager service settings for WCM**

| Parameter                                                                                      | Default value |  Value used |
|---------------------------------------------------------------------------------------------------|------------------:|--------------:|
| `cacheinstance.com.ibm.wps.ac.CommonRolesCache.size`                                              | 40000             | 50000         |
| `cacheinstance.com.ibm.wps.ac.ProtectedResourceCache.size`                                       | 5000              | 20000         |
| `cacheinstance.com.ibm.wps.cp.models.ModelCache.CategoryModel.lifetime`                          | 3600              | 28800         |
| `cacheinstance.com.ibm.wps.cp.models.ModelCache.ResourceModel.lifetime`                          | 3600              | 28800         |
| `cacheinstance.com.ibm.wps.cp.models.ModelCache.ResourceModel.size`                              | 10000             | 2000          |
| `cacheinstance.com.ibm.wps.cp.models.ModelCache.TagModel.lifetime`                               | 3600              | 28800         |
| `cacheinstance.com.ibm.wps.cp.models.ModelCache.TagModel.size`                                   | 200               | 2000          |
| `cacheinstance.com.ibm.wps.pe.portletentitycounter.size`                                         | 2000              | 5000          |
| `cacheinstance.com.ibm.wps.resolver.resource.AbstractRequestDispatcherFactory.size`              | 20                | 100           |

The following property was added to optimize caching and improve performance during testing.

```
cacheinstance.com.ibm.wps.resolver.friendly.cache.size=5000
```

### Access control data management service

By using the `loadRolesParentBased` algorithm in the authoring environment, an approximate 70% improvement in capacity was seen in performance benchmarks.

The `loadRolesParentBased` setting changes the loading algorithm for the `ROLE_INST` and `LNK_USER_ROLE` tables in the database. Instead of loading all assigned roles for a specific principal, only the currently requested access control data is loaded and cached. This is beneficial to a dynamic type of workload like authoring where there are many items being created and deleted that require cache updates. Be aware that this setting may increase database load since fewer items will be cached so be sure that your database server has spare capacity before setting.

To set the access control property, follow these steps:

1. Log in to the WebSphere Integrated Solutions Console.
2. Go to **Resources** > **Resource Environment** > **Resource Environment Providers** > **WP AccessControlDataManagementService** > **Custom properties**.
Alternatively, the cache settings can be set in the Access`ControlDataManagementService.properties` file and updated using the `ConfigEngine`.


**Access control data management service settings for WCM**

| Parameter | Default value | Used value |
| --- | --- | --- |
| `accessControlDataManagement.acucIgnoreResourceTypes` | n/a | `null` (should be the string `null`, not left blank) |
| `accessControlDataManagement.loadRolesParentBased` | false | true |

!!!note
    - Use the `loadRolesParentBased` setting in WCM authoring environments only. In rendering environments, retain the default value of `false`.
    - Be cautious when configuring `accessControlDataManagement.acucIgnoreResourceTypes`, as it can interfere with strict access controls in environments where role assignments vary by workflow stage.

#### WCM Configuration Service

**WCM configuration service settings**

| Cache name | Default value | WCM rendering value | WCM authoring value |
| --- | --- | --- | --- |
| `deployment.subscriberOnly` | false | true | False |
| `user.cache.enable` | false | true | True |
| `resourceserver.browserCacheMaxAge` | 600 | 86400 | 600 |

#### `subscriberOnly` or user cache

Enable the user cache and `subscriberOnly` setting. The `subscriberOnly` setting should be enabled only for environments that will be subscribed to and not syndicated from. It is recommended to enable this setting in a production rendering environment.

To set the properties, follow these steps:

1. Log in to the WebSphere Integrated Solutions Console.
2. Go to **Resources** > **Resource Environment** > **Resource Environment Providers** > **WCM_WCMConfigService** >
**Custom properties**.
3. Add or update the following properties:
    - To enable the user cache:
        - **Name:** `user.cache.enable`  
        - **Value:** `true`

    - To enable the subscriber-only setting:
        - **Name:** `deployment.subscriberOnly`  
        - **Value:** `true`


#### WCM `browserCacheMaxAge`

Caching WCM resources in a browser or caching proxy.

Static files such as images, CSS, and JavaScript can be stored in WCM and referenced using a URL from either a Web Content Viewer portlet or the site theme. Performance can be improved by configuring these static resources to allow access for anonymous users. This enables the resources to be shared and cached across multiple users through a caching proxy, reducing the need for WCM to serve them on every request.

WCM automatically attaches a `Cache-Control` header to static resources to enable efficient caching by browsers and caching proxies.
If the resource is accessible to anonymous users, WCM adds the following header by default:
```
Cache-Control: public, max-age=600, post-check=300, pre-check=600.
```
If the resource is restricted to authenticated users, the header will instead be:
Cache-Control: private, `max-age=600`.

To customize the cache timeout used in the `Cache-Control` header, you can modify the appropriate property in the `WCMConfigService` Resource Environment Provider (REP). Instructions for doing this are provided below.


To set the property, follow these steps:

1. Log in to the WebSphere Integrated Solutions Console.
2. Go to **Resources** > **Resource Environment** > **Resource Environment Providers** > **WCM_WCMConfigService** > **Custom properties**.
3. Add or update the following property:
    - **Name:** `resourceserver.browserCacheMaxAge`
    - **Value:** `<timeout value in seconds>`


#### Versions

Typically versions are not necessary in rendering environments since there is no active authoring occurring in your rendering environment. There are however other actions that can cause versions to be created unexpectedly. One example would be modifying Managed Pages using XML Access. For this reason, it is recommended to turn off versioning by setting it to manual in rendering-only environments. The default setting is to always create a version.

To set the properties, follow these steps:

1. Log in to the WebSphere Integrated Solutions Console.
2. Go to **Resources** > **Resource Environment** > **Resource Environment Providers** > **WCM_WCMConfigService** > **Custom properties**.
3. Add or update the following properties:

    | Property name                           |  Value  |
    |-------------------------------------------|----------|
    | `versioningStrategy.Default`              | `manual` |
    | `versioningStrategy.AuthoringTemplate`    | `manual` |
    | `versioningStrategy.Component`            | `manual` |
    | `versioningStrategy.Content`              | `manual` |
    | `versioningStrategy.PresentationTemplate` | `manual` |
    | `versioningStrategy.SiteArea`             | `manual` |
    | `versioningStrategy.PortalPage`           | `manual` |
    | `versioningStrategy.Taxonomy`             | `manual` |
    | `versioningStrategy.Workflow`             | `manual` |


#### WCM Advanced Caching

WCM implements a time based internal caching layer called the Advanced Cache, that can be used to significantly increase capacity when using WCM rendering portlets. During internal testing of the WCM rendering scenario using a timeout of 24 hour `(REL 1D)`, a 32% increase in capacity was achieved with the `SITE` cache level setting and a 15% increase in capacity with the SECURED cache level setting. Use of WCM Advanced Caching is recommended if your business requirements allow it.

To set the properties, follow these steps:

1. Pick your desired cache level.
2. Select the related entries from the following table:

    | Cache level    | `defaultcache` value | `defaultcontentcache` value |
    | :------------- | :----------------- | :------------------------ |
    | None           | `false`            | None                      |
    | Basic (default)| `true`             | N/A                       |
    | Site           | `false`            | Site                      |
    | Session        | `false`            | Session                   |
    | User           | `false`            | User                      |
    | Secured        | `false`            | Secured                   |
    | Personalized   | `false`            | Personalized              |

3. Log in to the WebSphere Integrated Solutions Console.
4. Go to **Resources** > **Resource Environment** > **Resource Environment Providers** > **WCM_WCMConfigService** > **Custom properties**.
5. Add or update the following details:

    - To configure the default cache setting:
        - **Name:** `connect.businesslogic.defaultcache`
        - **Value:** See the `defaultcache` value in the table in Step 2 for your desired cache level.
   
    - To specify the content cache expiration time:
        - **Name:** `connect.moduleconfig.ajpe.contentcache.contentcache`
        - **Value:** `<formatted_time>` 

**WCM Advanced Cache scenarios**

Basic caching is only supported with the WCM servlet. Advanced caching is required for WCM Rendering Portlets.

- **Site**  
  Content is not personalized or only anonymous users are accessing the system.  
  Every user accesses exactly the same WCM content items. Content is not personalized nor unique to a security group.

- **Secured**  
  Content is unique for different groups of users.  
  Users that belong to the same groups will access the same cached items.

- **Personalized**  
  Content is unique for different personalization profiles.  
  Users that share the same personalization profile will access the same cached items.

- **User**  
  Content is unique for every user.  
  Every user gets its own cached items and items are stored in a cache.

- **Session**  
  Content is unique for every session.  
  Every user gets its own cached items and items are stored in the session.

**Cache expire time formats**

When setting the cache expire settings, you can specify either a relative time or absolute time: 

- `{integer-value}{units}` for relative time
- `{date-format-string}` for absolute time

Where `{units}` is one of:

- `d` or `D` for days
- `m` or `M` for months 
- `s` or `S` for seconds 
- `h` or `H` for hours

Valid `{date-format-string}` values include: 

- `Mon, 06 Nov 2000 09:00:00 GMT`
- `Monday, 06-Nov-00 09:00:00 GMT`
- `Mon Nov 6 09:00:00 2000`
- `6 Nov 2000 9:00 AM`

!!! Note
    The last two formats assume GMT.

For example:

- `contentcacheexpires="REL 300S"`
- `contentcacheexpires="ABS Mon, 06 Nov 2000 09:00:00 GMT"`

For more information, refer to [Web content cache types](../../../../manage_content/wcm_configuration/cfg_webcontent_delivery_env/caching_options/wcm_config_delivery_caching_types.md).

**WCM Secured Advanced Cache group filter**

An additional performance benefit for Secured Advanced Caching can be realized by using the Advanced Cache group filtering feature. Since a group membership is used as the cache key for the Advanced Cache with the Secured setting, if there are a large number of groups that are not being used for access control on WCM items it can decrease the hitrate of the cache. A subset of groups that are only being used for WCM access control can be set to Advanced Cache key calculation by specifying the property below. During testing, an additional 3% increase in capacity was observed when using Secured Advanced Caching with this setting. By default, a semi-colon is used to separate the groups listed in the filter.

To set the property, follow these steps:

1. Log in to the WebSphere Integrated Solutions Console.
2. Navigate to **Resources** > **Resource Environment** > **Resource Environment Providers** > **WCM_WCMConfigService** > **Custom properties**.
3. Add or update the following property:
    - **Name:** `connect.moduleconfig.ajpe.contentcache.secured.cache.group.subset`  
    - **Value:** `<groups to be used in filter>`

### JCR text search

During performance measurements, text indexing is disabled. In a production environment, text indexing is done periodically, adding new content to the text index. However, the indexing interval is not synchronized with load plateaus. As a result, if text indexing is run during performance measurements, it would likely reduce the reliability and repeatability of the measurements.

It is not recommended to disable text indexing in production authoring environments, as doing so would mean that new content will not be added to the text index, and therefore would not appear in search results.

To set the property, follow these steps:

1. Log in to the WebSphere Integrated Solutions Console. 
2. Go to **Resources** > **Resource Environment** > **Resource Environment Providers** > **JCR ConfigService PortalContent**.
3. Add or update the following property:
    - **Name:** `jcr.textsearch.enabled`  
    - **Value:** `false`

### Public page invalidation

By default, on every page modification, Portal checks if the anonymous user has permissions on that page. If so the ContentModel for the anonymous user will be invalidated in addition to the model of the user who executed the modification. This behavior may have a performance impact if there are a large number of public pages. It can be disabled by changing the `content.public.page.invalidation` property.

!!! note
     In the benchmark environment, there was no improvement in the internal scenario because public pages are not modified during the scenario.

To set the property, follow these steps:

1. Log in to the WebSphere Integrated Solutions Console.
2. Go to **Resources** > **Resource Environment** > **Resource Environment Providers** > **WP ConfigService**.
3. Add the following custom property:
    - **Name:** `content.public.page.invalidation` 
    - **Value:** `false`