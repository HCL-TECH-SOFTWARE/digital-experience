# Portal Caching

Internally, HCL Portal uses multiple DynaCache instances to cache data from both the Portal user database and LDAP. Properly tuning the sizes of these caches can lead to significant performance improvements.

* For recommended cache sizes used in baseline performance testing, refer to the "Cache Manager Service" sections.
* For detailed descriptions of each cache instance, see the "Base Portal Cache Instances" section.

!!! tip "Performance Tuning"
    Regularly review and adjust cache sizes based on your environment’s load patterns to maintain optimal performance.