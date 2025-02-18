# High Volume Sites

The tuning documented in the base Portal chapter can allow a single Portal server to handle several thousand logged in users serving a few hundred page views per second, depending on application processing requirements. For sites that require more users, it may be necessary to increase some tuning parameters to higher values. These values are detailed in this section.

Note that the values in this section are unique to the testing done in DX Core development. The only way to know the precise values applicable to a particular (customer) deployment are through load testing applied to a DX Core Portal server with an approximation of the actual user load required. Typically, this load is generated synthetically prior to the DX Core Portal going live; but these values can also be gleaned once the DX Core Portal is live as well (albeit with potential bottlenecks due to resource constraints).

## JVM Tuning

Increase the maximum heap size and the nursery size. See the Heap Size and Nursery Size sections in the base Portal tuning for instructions on how to set these values.

**JVM Heap Sizes for High Volume Sites**

| Minimum Heap Size (-Xms) | Maximum Heap (Xmx) | Nursery Size (Xmn) |
| --- | --- | --- |
| 5632 | 5632 | 2048 |

## VMM Caches

See the VMM Caches section in the base Portal tuning for instructions on how to set these values.

**VMM Attribute Cache Settings for High Volume Sites**

| Attribute Cache Property | Default Value | Value Used |
| --- | --- | --- |
| Cache size | 4000 | 15009 |
| Cache time out | 1200 | 18000 |

**For the performance benchmarks a timeout of 18,000 was used to avoid having caches timeout when thousands of users were simulated. In an actual customer deployment lower timeout value might work just as well, depending on the login rate and total number of logged in users.**

**VMM Search Results Cache Settings for High Volume Sites**

| Search Results Cache Property | Default Value | Value Used |
| --- | --- | --- |
| Cache size | 2000 | 15009 |
| Cache time out | 600 | 4800 |

## WebSphere Authentication Cache

Increasing the size of WebSphere’s internal LDAP authentication cache removed LDAP CPU utilization spikes seen during a performance run. Without this setting, the CPU spike on the LDAP server causes a throughput drop in Portal after running at high load for long periods of time.

**How to Set**

In the WebSphere Integrated Solutions Console

Security → Global Security

1. Click Authentication cache settings
2. Change the Maximum cache size to 50000 entries
3. Click OK
4. Save Changes
5. Restart the server

## Cache Manager Service

The following cache sizes were changed from the base Portal settings. See the Cache Manager Service section there for the sizes used for other caches as well as instructions on how to set these cache sizes.

**CacheManager Service Settings for High Volume Sites**

CacheManagerService.properties

| Parameter | Default Value | Value Used |
| --- | --- | --- |
| cacheinstance.com.ibm.wps.ac.AccessControlUserContextCache.size | 6000 | 8403 |
| cacheinstance.com.ibm.wps.model.factory.UserSpecificModelCache.size | 6000 | 8403 |