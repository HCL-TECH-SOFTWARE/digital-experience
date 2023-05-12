# Outbound HTTP Connection Service

**com.ibm.wps.outbound.datastore.ProxyConfigCache.values**
Default size: 100, default lifetime: infinite, usage pattern: regular.

This cache stores the configuration settings for the Outbound HTTP Connection Service. The cache is used
whenever a component that uses outbound HTTP Connection Service, such as the AJAX proxy is invoked.
Cache entries are invalidated whenever changes to the outbound HTTP connections configuration are
applied. To achieve best performance, the size of this cache should be bigger than the total number of
configuration settings for outbound HTTP connections, which include:
    All outbound connection profiles
    All policy mappings, including one default mapping for each outbound connection profile
    All policy rules
    All cookie rules
In clustered environments, this cache must be shared, unless changes that are applied on the configuration
settings of outbound HTTP connections are not required on all cluster nodes.

**com.ibm.wps.outbound.datastore.ProxyConfigCache.topologies**
Default size: 100, default lifetime: infinite, usage pattern: regular.

This cache stores the parent-child relations of configuration settings for Outbound HTTP Connection
Service. The cache is used whenever a component that uses Outbound HTTP Connection Service, such as
the AJAX proxy is invoked. Cache entries are invalidated whenever changes to the outbound HTTP
connections configuration are applied. To achieve best performance, the size of this cache should be bigger
than the total number of configuration settings for outbound HTTP connections.

In clustered environments, this cache must be shared, unless changes that are applied on the configuration
settings of outbound HTTP connections are not required on all cluster nodes.