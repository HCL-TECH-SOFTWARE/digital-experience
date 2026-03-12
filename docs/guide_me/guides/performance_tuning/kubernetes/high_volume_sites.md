# High Volume Sites

The tuning documented in the base Portal chapter can allow a single Portal server to handle several thousand logged in users serving a few hundred page views per second, depending on application processing requirements. For sites that require more users, it may be necessary to increase some tuning parameters to higher values. These values are detailed in this section.

!!! Note The values in this section are specific to internal testing conducted during DX Core development. To determine accurate values for a specific deployment, you must perform load testing on a DX Core Portal server that approximates the expected user load.

Typically, synthetic load is generated before the portal goes live. However, load testing can also be performed after deployment. Be aware that post-deployment testing may encounter performance bottlenecks due to resource limitations in a live environment.


## JVM Tuning

Increase the maximum heap size and the nursery size. See the Heap Size and Nursery Size sections in the base Portal tuning for instructions on how to set these values.

**JVM Heap Sizes for High Volume Sites**

| Minimum Heap Size (-Xms) | Maximum Heap (Xmx) | Nursery Size (Xmn) |
| --- | --- | --- |
| 5632 MB                      | 5632 MB                       | 2048 MB                   |
# JVM Heap and Pod Memory Configuration in Kubernetes

!!! note
    Do not set the JVM heap size larger than the total memory allocated to the pod.

## 1. Heap sizing

Set both the minimum (`-Xms`) and maximum (`-Xmx`) heap size to the same value.  
This configuration prevents dynamic heap expansion (`malloc()`), reducing overhead and improving performance consistency.

The exact heap size depends on your environment and workload. Determine the optimal value through load testing with synthetic traffic tools such as **JMeter** or **LoadRunner** that simulate real usage patterns.

## 2. Pod memory limits and JVM heap

The Kubernetes pod memory limit must be greater than the JVM heap size because the JVM requires additional native memory for:

- Metaspace (class metadata)
- Thread stacks (typically 1–2 MB per thread)
- JIT compiler and garbage collection structures
- Shared libraries and runtime overhead

## 3. Rule of thumb for pod memory requests

Use the following guideline when configuring pod memory:
Pod memory limit = JVM heap (Xmx) + native overhead + safety margin
Native overhead typically ranges between **20–30%** of the heap size, but this can vary.  
Add a **5–10% safety margin** to accommodate runtime fluctuations and prevent out-of-memory (OOM) kills.


## VMM Caches

 See the **VMM Caches** section in the base Portal tuning guide for instructions on how to set these values.

**VMM Attribute Cache Settings for High Volume Sites**

| Attribute Cache Property | Default Value | Value Used |
| --- | --- | ---                                       |
| Cache Size                 | 4000             | 15009          |
| Cache Timeout (seconds)    | 1200             | 18000          |

For the performance benchmarks a timeout of 18,000 was used to avoid having caches timeout when thousands of users were simulated. In an actual customer deployment lower timeout value might work just as well, depending on the login rate and total number of logged in users.

**VMM Search Results Cache Settings for High Volume Sites**

| Search Results Cache Property | Default Value | Value Used |
| --- | --- | --- |
| 📦 Cache Size          | 2000             | 15009          |
| ⏱️ Cache Timeout (sec) | 600              | 4800           |

## WebSphere Authentication Cache

Increasing the size of WebSphere’s internal LDAP authentication cache removed LDAP CPU utilization spikes seen during a performance run. Without this setting, the CPU spike on the LDAP server causes a throughput drop in Portal after running at high load for long periods of time.

**How to Set**

In the **WebSphere Integrated Solutions Console**, navigate to **Security > Global Security**.

1.  Click **Authentication cache settings**.
2.  Change the **Maximum cache size** to `50000` entries.
3.  Click **OK**.
4.  Click **Save Changes**.
5.  Restart the server.

## Cache Manager Service

The following cache sizes were changed from the base Portal settings. See the Cache Manager Service section there for the sizes used for other caches as well as instructions on how to set these cache sizes.

### CacheManager Service Settings for High Volume Sites

**File:** `CacheManagerService.properties`

|  Parameter                                                                 |  Default Value |  Value Used |
|------------------------------------------------------------------------------|------------------|----------------|
| `cacheinstance.com.ibm.wps.ac.AccessControlUserContextCache.size`           | 6000             | 8403           |
| `cacheinstance.com.ibm.wps.model.factory.UserSpecificModelCache.size`       | 6000             | 8403           |
