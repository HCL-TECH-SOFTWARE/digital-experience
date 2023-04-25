# Data Source Tuning

Portal uses multiple database domains to store information. Each database domain has its own JDBC data source, so when tuning in the admin console remember to tune all the data sources.

## Connection Pool Size

The default settings of 10 minimum and 50 maximum were used for the connection pool sizes for the base Portal Scenario. For WCM, higher maximum connection pool sizes are needed. Higher connection pool sizes may also be needed in other cases, such as using parallel portlet rendering or if larger web container thread pool is needed. In all cases, we recommend monitoring the database connection pools and increasing their maximum sizes if the pool is completely utilized.

### How to Set

In the WebSphere Integrated Solutions Console: Resources → JDBC Providers → provider name → Data Sources → data source name → Connection pool properties

    • Maximum connections
    • Minimum connections

If deployed applications also use database connections, ensure that the connection pool is tuned for those
data sources as well.

## Prepared Statement Cache Size
All data sources are configured in a similar manner. The default setting of 10 was used for the prepared statement cache size on all data sources.

### How to Set

In the WebSphere Integrated Solutions Console
Resources → JDBC Providers → provider name → Data Sources → data source name → WebSphere
Application Server data source properties → Statement cache size.

The provider name and data source name are based on the names selected for that database during the database transfer step.

Be aware that specifying a larger prepared statement cache size can lead to OutOfMemory errors in situations where your application memory is already being highly utilized by your workload. The prepared statement cache size setting is the maximum allowed cache entries per database connection. So increasing the cache size on a data source that has a large number of connections can quickly increase the heap utilization for these cache objects. Any changes should be considered for each individual data source independently instead of across all data sources globally. Before increasing a data source's prepared statement cache size you should monitor your memory usage under a heavy workload to determine if
there is enough JVM heap available to handle an additional increase.

Finally, in some workloads, increasing the prepared cache statement size will be of no benefit. For instance,
on WCM workloads, due to the dynamic nature of the SQL statements generated against the JCR database
the cache size would have to be very large to cover all of the different permutations. Even at significantly
larger sizes, the cache hit rate would be very low.