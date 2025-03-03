# Web Content Management Tuning

In general, the same tuning that was used for the base Portal scenario was used for the WCM scenarios.

The main differences are in the cache tuning settings: WCM increases demands on the Portal access control (PAC) component which requires a different set of cache tunings. WCM has an internal set of tunable object caches as well.

On top of cache tunings, WCM can require more Web Container threads and JCR data source connections than the base Portal Scenario, especially for heavy authoring workloads. The differences in tuning are mentioned below.

!!!note
    These tunings are to be made in addition to the base Portal tunings unless otherwise specified. Apply the base Portal tunings first.

## Tuning via the Integrated Solutions Console

### JVM Heap Sizes

**JVM Heap Sizes for WCM**

| Parameter | WCM Rendering | WCM Authoring |
| --- | --- | --- |
| Initial and Maximum heap size (MB) | 4096 | 3584 |
| Nursery size (MB) | 1536 | 1024 |

**How to Set**

See the Heap Size tuning section for base Portal.

### Web Container Thread Pool Size

Sixty (60) threads were used for both the minimum and maximum value

**How to Set**

See the Web Container Thread Pool Size tuning section for base Portal.

**JDBC Data Source Pool Sizes for WCM**

|     | Rendering Value (min/max) | Authoring Value (min/max) |
| --- | --- | --- |
| RELEASE | 10/100 | 10/50 (default) |
| COMMUNITY | 10/100 | 10/50 (default) |
| JCR | 10/150 | 10/150 |

See the Connection Pool Size tuning section for base Portal.

Note that the JCR data pool size should be set to 2.5 times the size of the Web Container Thread pool.

### WCM Object Cache

**WCM Object Cache Settings**

| Cache Name | Default Value | WCM Rendering Value | WCM Authoring Value |
| --- | --- | --- | --- |
| abspath | 5000 | 32000 | 8000 |
| abspathreverse | 5000 | 32000 | 8000 |
| processing | 2000 | 10000 | 10000 |
| session | 2000 | 6000 | 6000 |
| strategy | 2000 | 32000 | 8000 |
| summary | 2000 | 4000 | 2000 |

**How To Set**

In the WebSphere Integrated Solutions Console

Resources → Cache instances → Object cache instances

Detailed descriptions of these caches can be found in the WCM Cache Instances section of this document.

### Cache Manager Service

**How to Set**

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WP CacheManagerService → Custom properties

**Cache Manager Service Settings for WCM**
 
CacheManagerService.properties

| Parameter | Default Value | Value Used |
| --- | --- | --- |
| cacheinstance.com.ibm.wps.ac.CommonRolesCache.size | 40000 | 50000 |
| cacheinstance.com.ibm.wps.ac.ProtectedResourceCache.size | 5000 | 20000 |
| cacheinstance.com.ibm.wps.cp.models.ModelCache.CategoryModel.lifetime | 3600 | 28800 |
| cacheinstance.com.ibm.wps.cp.models.ModelCache.ResourceModel.lifetime | 3600 | 28800 |
| cacheinstance.com.ibm.wps.cp.models.ModelCache.ResourceModel.size | 10000 | 2000 |
| cacheinstance.com.ibm.wps.cp.models.ModelCache.TagModel.lifetime | 3600 | 28800 |
| cacheinstance.com.ibm.wps.cp.models.ModelCache.TagModel.size | 200 | 2000 |
| cacheinstance.com.ibm.wps.pe.portletentitycounter.size | 2000 | 5000 |
| cacheinstance.com.ibm.wps.resolver.resource.AbstractRequestDispatcherFactory.size | 20 | 100 |

we added a new property during performance testing:

**cacheinstance.com.ibm.wps.resolver.friendly.cache.size=5000**

This adjustment was made to optimize caching and improve performance during testing.

### Access Control Data Management Service

By using the loadRolesParentBased algorithm in our authoring environment, an approximate 70% improvement in capacity was seen in performance benchmarks.

The loadRolesParentBased setting changes the loading algorithm fo(r the ROLE_INST and

LNK_USER_ROLE tables in the database. Instead of loading all assigned roles for a specific principal, only the currently requested access control data is loaded and cached. This is beneficial to a dynamic type of workload like authoring where there are many items being created and deleted that require cache updates. Be aware that this setting may increase database load since fewer items will be cached so be sure that your database server has spare capacity before setting.

**How to Set**

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WP AccessControlDataManagementService → Custom properties

Alternatively, the cache settings can be set in the AccessControlDataManagementService.properties file and updated via the ConfigEngine.

**Access Control Data Management Service Settings for WCM**

| Parameter | Default Value | Used Value |
| --- | --- | --- |
| accessControlDataManagement.acucIgnoreResourceTypes | n/a | null(value should be the string “null”, not blank) |
| accessControlDataManagement.loadRolesParentBased | false | true |

**Use the loadRolesParentBased setting in WCM authoring environments only.**

**Leave the default false value in rendering environments.**

**Setting accessControlDataManagement.acucIgnoreResourceTypes can interfere with strict access controls in environments where role assignments change based on workflow stage.**

#### WCM Configuration Service

**WCM Configuration Service Settings**

| Cache Name | Default Value | WCM Rendering Value | WCM Authoring Value |
| --- | --- | --- | --- |
| deployment.subscriberOnly | false | true | False |
| user.cache.enable | false | true | True |
| resourceserver.browserCacheMaxAge | 600 | 86400 | 600 |

#### subscriberOnly/User cache

Enable the user cache and subscriberOnly setting. The subscriberOnly setting should be enabled only for environments that will be subscribed to and not syndicated from. We recommend this be enabled in a production rendering environment.

**How to Set in the Integrated Solutions Console**

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WCM WCMConfigService →

Custom properties

**Name:** user.cache.enable

**Value:** true

**Name:** deployment.subscriberOnly

**Value**: true

#### WCM browserCacheMaxAge

Caching WCM resources in a browser or caching proxy.

Static files like images, CSS and Javascript can be stored in WCM and referenced, via a URL, from a Web Content Viewer portlet or the theme. A performance benefit can be obtained by setting the security on these static resources to allow anonymous users to access them so that they can be shared,cacheable amongst several users through a caching proxy and avoid being served directly from WCM on every request.

WCM will attach a cache-control header to these resources to ensure proper caching by browsers and caching proxies. If the security settings of the resource allows anonymous users to access it, WCM will attach a "public,max-age=600,post-check=300,pre-check=600" cache-control header to the response by default. If the security on the WCM resource only allows authenticated users to see it, you will see a "private, max-age=600" instead. If you wish to modify the timeout WCM uses for the cache-control header, update the following property in the WCMConfigService Resource Environment Provider (REP) using the instructions below.

**How to Set in the Integrated Solutions Console**

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WCM WCMConfigService → Custom properties

**Name:** resourceserver.browserCacheMaxAge

**Value:** &lt;timeout value in seconds&gt;

#### Versions

Typically versions are not necessary in rendering environments since there is no active authoring occurring in your rendering environment. There are however other actions that can cause versions to be created unexpectedly. One example would be modifying Managed Pages using xmlaccess. For this reason we recommend turning off versioning by setting it to manual in rendering only environments. The default setting is to always create a version.

**How to Set in the Integrated Solutions Console**

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WCM WCMConfigService → Custom properties

**Name:** versioningStrategy.Default

**Value:** manual

**Name:** versioningStrategy.AuthoringTemplate

**Value:** manual

**Name:** versioningStrategy.Component

**Value:** manual

**Name:** versioningStrategy.Content

**Value:** manual

**Name:** versioningStrategy.PresentationTemplate

**Value:** manual

**Name:** versioningStrategy.SiteArea

**Value:** manual

**Name:** versioningStrategy.PortalPage

**Value:** manual

**Name:** versioningStrategy.Taxonomy

**Value:** manual

**Name:** versioningStrategy.Workflow

**Value:** manual

#### WCM Advanced Caching

WCM implements a time based internal caching layer called the Advanced Cache that can be used to significantly increase capacity when using WCM rendering portlets. In our own internal testing of our WCM rendering scenario using a timeout of 24 hour (REL 1D), we were able to achieve a 32% increase in capacity with the SITE cache level setting and a 15% increase in capacity with the SECURED cache level setting. Use of WCM Advanced Caching is recommended if your business requirements allow it.

**How to Set**

Pick your desired Cache Level (see “When to Use Each Caching Level”)

Select the related entries from the table below

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WCM WCMConfigService → Custom properties

**Name:** connect.businesslogic.defaultcache

**Value**: _See defaultcache value in table below for your desired cache level_

**Name:** connect.moduleconfig.ajpe.contentcache.defaultcontentcache

**Value:** _See defaultcontentcache value in table below for your desired cache level_

**Name:** connect.moduleconfig.ajpe.contentcache.contentcacheexpires Value: _&lt;formatted_time&gt;_

**Caching Parameters for WCM**

| Cache Level | defaultcache value | defaultcontentcache value |
| --- | --- | --- |
| None | false | None |
| Basic (default) | true | N/A |
| Site | false | Site |
| Session | false | Session |
| User | false | User |
| Secured | false | Secured |
| Personalized | false | Personalized |

Note that Basic caching only works with the WCM servlet. Advanced caching is needed for WCM Rendering Portlets.

**WCM Advanced Cache Scenarios**

- Content is not personalized / only anonymous users accessing the system: **Site**

   Every user accesses exactly the same WCM content items. Content is not personalized nor unique to a security group.

- Content is unique for different groups of users: **Secured**

   Users that belong to the same groups will access the same cached items 

- Content is unique for different personalization profiles: **Personalized**

   Users that share the same personalization profile will access the same cached items 

- Content is unique for every user: **User**

   Every user gets its own cached items; items are stored in a cache 

- Content is unique for every session: **Session**

   Every user gets its own cached items; items are stored in the session 

**Cache Expire Time Formats**

When setting the cache expire settings, you can specify either a relative time or absolute time: 

- `REL {integer-value}{units}`

-  `ABS {date-format-string}`

Where `{units}` is one of:

- `d|D` for days
- `m|M` for months 
- `s|S` for seconds 
- `h|H` for hours

Valid {date-format-string} values: 

- Mon, 06 Nov 2000 09:00:00 GMT
- Monday, 06-Nov-00 09:00:00 GMT
- Mon Nov 6 09:00:00 2000
- 6 Nov 2000 9:00 AM

**Note:** The last two formats assume GMT.

**Examples:**

- `contentcacheexpires="REL 300S"`
- `contentcacheexpires="ABS Mon, 06 Nov 2000 09:00:00 GMT"`

For more information, see [Web content cache types](../../../../manage_content/wcm_configuration/cfg_webcontent_delivery_env/caching_options/wcm_config_delivery_caching_types.md).

**WCM Secured Advanced Cache group filter**

An additional performance benefit for Secured Advanced Caching can be realized by using the Advanced Cache group filtering feature. Since a group membership is used as the cache key for the Advanced Cache with the Secured setting, if there are a large number of groups that are not being used for access control on WCM items it can decrease the hitrate of the cache. A subset of groups that are only being used for WCM access control can be set to only be used for Advanced Cache key calculation by specifying the property below. In our own internal tests, we realized an additional 3% increase in capacity when using Secured Advanced Caching with this setting. By default, a semi-colon is used to separate the groups listed in the filter

**How to Set**

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WCM WCMConfigService → Custom properties

**Name:** connect.moduleconfig.ajpe.contentcache.secured.cache.group.subset

**Value:** _&lt;groups to be used in filter&gt;_

### JCR Text Search

During our measurements, we have disabled text indexing. In a production environment, text indexing is done periodically, adding new content to the text index. However, the indexing interval is not synchronized with our load plateaus. As a result, if we let text indexing run during our performance measurements, it would likely reduce the reliability and repeatability of our measurements.

We do not recommend disabling text indexing in production authoring environments, as doing so would mean that new content will not be added to the text index, and therefore would not appear in search results.

**How to Set**

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → JCR ConfigService PortalContent

**Name:** jcr.textsearch.enabled

**Value:** false

### Public Page Invalidation

By default, on every page modification, Portal checks if the anonymous user has permissions on that page. If so the ContentModel for the anonymous user will be invalidated in addition to the model of the user who executed the modification. This behavior may have a performance impact if there are a large number of public pages. It can be disabled by changing the content.public.page.invalidation property.

In the benchmark environment, there was no improvement in our own internal scenario because public pages are not modified during the scenario.

**How to Set**

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WP ConfigService

Add the following new property:

**Name:** content.public.page.invalidation 

**Value:** false