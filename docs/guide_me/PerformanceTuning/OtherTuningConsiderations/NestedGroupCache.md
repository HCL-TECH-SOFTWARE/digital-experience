# Nested Group Cache

In previous versions of this guide, we recommended disabling the nested group cache
(`com.ibm.wps.ac.groupmanagement.NestedGroupCache`). It’s important to understand how this cache is
used so that it can be set appropriately for your environment.

In some environments – including the lab environment for our performance measurements – nested
groups are not used for access permissions. In such cases, two settings can be used to improve
performance: 
- disable nested group support, and 
- disable the nested group cache. 


## How to Set

To improve the performance follow the below two settings:

- In the WebSphere Integrated Solutions Console
    Resources -> Resource Environment -> Resource Environment Providers -> WP CacheManagerService -> Custom properties -> New

    Name: `cacheinstance.com.ibm.wps.ac.groupmanagement.NestedGroupCache.enabled`
    Value: `false`

- In the WebSphere Integrated Solutions Console
    Resources -> Resource Environment -> Resource Environment Providers -> WP AccessControlDataManagementService -> Custom properties -> New

    Name: `accessControlDataManagement.enableNestedGroups`
    Value: `false`

If permissions are assigned to nested groups, it is not appropriate to disable nested group support, so the
settings above should not be used. In particular, disabling the nested group cache while nested group
support is enabled can cause significant performance problem, especially in environments that use thirdparty
authentication software like IBM Tivoli Access Manager (TAM) and WebSEAL.