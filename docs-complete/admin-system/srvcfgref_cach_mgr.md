# Cache Manager Service 

The portal Cache Manager Service is responsible for managing the different caches that are used in HCL Portal.

In the WebSphere® Integrated Solutions Console, the portal Cache Manager Service is listed as **WP CacheManagerService**.

The portal provides two different types of caches: **shared** and **non-shared**:

-   **Shared caches**

    The shared caches are cluster aware. Deleting an element from the cache on one cluster node results in deleting that element from the corresponding cache instances on all other nodes. This action ensures that frequently changing data is kept consistent over the whole cluster installation.

-   **Non-shared caches**

    The non-shared caches are used for data where cluster awareness is of no concern. This cache avoids unnecessary network communication.


Plan ahead and apply special care when you modify these properties. There are two levels of properties:

-   **cacheglobal properties**

    They specify the default setting that is to be used for all caches unless explicitly overridden by the corresponding cache instance property.

-   **cacheinstance.cacheidentifier properties**

    They are used to override a global setting, for example the size of the cache, for a specific instance of a cache.


Changing some or all of these properties can dramatically improve or impair portal performance. Therefore, it is recommended not to change the shared setting for any cache unless the consequences are understood and agreed. If you want to determine the optimal values for the size, lifetime, admit-threshold and replacement properties, monitor the cache properties during the staging phase of your portal installation. Use the Tivoli Performance viewer that is the WebSphere Application Server PMI client \(PMI = Performance Monitoring Interface\) to find the optimal settings for your environment.

The following list is the properties for the Cache Manager Service for both shared and non-shared caches:

-   **cacheglobal.enabled = \[ true \| false \] cacheinstance.cacheidentifier.enabled = \[ true \| false \]**

    Use this property to control whether caching is enabled or not. Use this property with care!

-   **cacheglobal.size = numbercacheinstance.cacheidentifier.size = number**

    Use this property to define the number of elements that can be put into the cache before eviction takes place. The eviction uses a "near LRU" algorithm.

-   **cacheglobal.shared = \[ true \| false \]cacheinstance.cacheidentifier.shared = \[ true \| false \]**

    Use this property to define whether a cluster-aware cache is to be used or not.

-   **cacheglobal.lifetime = numbercacheinstance.cacheidentifier.lifetime = number**

    Use this property to specify the lifetime of elements in the cache in seconds. When the specified lifetime is up, elements are not discarded from the cache immediately. They are evicted when the next element is inserted. Specifying -1 means an infinite lifetime. In this case, no timeout is applied and the cache entry is never evicted.

-   **randomizePercent = numbercacheinstance.cacheidentifier.randomizePercent= number**

    Use this property to randomize cache entry lifetimes to some extent. If all entries in a cache have the same lifetime, it can result in high loads on the database when reloading entries, as large amounts of entries are evicted at the same time.

    Specify the value for this property as a numeric value given in percent. For example, a value of 25 means that all cache entry lifetimes are up to 25% more or less than the default lifetime \(given by the lifetime parameter\). No cache entry will have a lifetime less than 50% of the default value, no matter how large you specify the value for this property. By default no value is specified. In this case lifetimes are not randomized, and all cache entries have the default lifetime.

    If you set the default lifetime property to infinite by the value -1 , the lifetime randomization setting is not applied, even if you specify a value for the `randomizePercent` property.

    You can view the actual randomized lifetime of a cache entry by enabling tracing for class `com.ibm.wps.services.cache.AbstractCache`.


You can set the following additional properties for non-shared caches. \(Setting them for shared caches does no harm, they will be ignored.\)

-   **cacheglobal.replacement= \[aggressive \| moderate \| conservative\]**
-   **cacheinstance.cacheidentifier.replacement= \[aggressive \| moderate \| conservative\]**

    Controls the eviction algorithm behavior.

-   **cacheglobal.admin-threshold = number**
-   **cacheinstance.cacheidentifier.admin-threshold = number**

    Admittance threshold. Use this cache to keep unwanted entries from the cache. An entry is cached only if it is put into the cache as often as specified by the value for this property. If you want each entry to be cached, set this value to zero \(0\).


For information on the available caches, refer to the *HCL Digital Experience Performance Tuning Guide*.

**Parent topic:**[Portal service configuration ](../admin-system/srvcfgref.md)

**Related information**  


[Configuring the maximum number of items loaded from HCL Connections ](../social/soc_rendr_cfg_connct_item_limit.md)

[HCL Digital Experience Performance Tuning Guide](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0074411)

[Performance tuning for Integrator for SAP ](../admin-system/sap_int_perf_tun.md)

[Shared database domains ](../plan/db_domains_shared.md)

