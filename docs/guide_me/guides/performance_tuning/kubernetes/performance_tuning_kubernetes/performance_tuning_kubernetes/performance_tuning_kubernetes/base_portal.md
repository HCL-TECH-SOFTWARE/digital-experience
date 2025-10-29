# Base Portal Tuning

There are many aspects to configuring and tuning an application server in the WebSphere Application Server (WAS). The aspects presented here are critical to an optimally performing HCL Digital Experience (DX) in the benchmark environment.

The base DX Core Scenario covers user login, page navigation and interaction with simple portlets. Users can see a set of pages which are visible to all authenticated or anonymous users depending on the access control. Another set of pages based on LDAP group membership is also configured.

Several other scenarios were also benchmarked which focused on different functions or use cases for DX Core. There are scenarios which make use of Web Content Management (WCM) and page management. In previous versions of DX Core, a scenario where users have access to thousands of pages was also measured. While different values have been used to optimize performance for some of those scenarios, the tuning is all based on the tuning detailed in this section.

## Tuning using the Integrated Solutions Console

To get to IBM WebSphere Integrated Solutions Console (ISC), start DX Core and then login to the IBM WebSphere ISC through `https://{yourserver}/ibm/console` with the WebSphere administrator user ID created during DX Core installation.

## JVM Tuning

This section details how you can set different sizes in your Java Virtual Machine (JVM) for tuning.

### Heap size

When setting the heap size for an application server, keep the following details in mind:

- Make sure that the system has enough physical memory for all the processes to fit into memory and the operating system. When more memory is allocated than the physical memory in the system, paging will occur and may result in very poor performance.
- After tuning any heap sizes, monitor the system to make sure that paging is not occurring.
- When using the Generational Concurrent (gencon) garbage collection policy, the minimum and maximum heap sizes should be set to the same value. This configuration helps prevent heap fragmentation and ensures consistent memory availability from startup. In performance tests, the gencon policy delivered the best results for both throughput and response time. Setting equal heap sizes also avoids potential memory allocation delays that can occur after DX Core has started.


- !!! Note
    **Using session replication for DX Core is not recommended.**

In HCL DX, the maximum heap size is highly dependent on cache tuning values, among other factors. In general, Larger caches result in better performance but also use more JVM heap.

The values used in performance benchmarks are set primarily to allow larger cache sizes, not because the measured portlets use significant amounts of memory. These values are related to the hardware configuration and the total throughput each <!--what is each referring to?-->can support. They do not reflect the absolute limits of each architecture. Values will need to be tuned based on specific hardware and application configuration, especially the throughput and number of active users required.

By default, Maximum JVM Heap Size is set to 3584 MB.

**Setting the heap size**

1. In the WebSphere ISC, go to **Servers > Server Types > WebSphere application servers > WebSphere_Portal > Server Infrastructure: Java and Process Management > Process definition > Java Virtual Machine.**

2. Set the **Initial Heap Size** and **Maximum Heap Size**.

3. Click **Apply**.

During performance testing, increasing the heap size to 4096 MB (4 GB) resulted in a 2% performance improvement, particularly when WCM advanced caching was enabled. This configuration proved beneficial and is recommended as a baseline for medium-sized environment tests to help optimize performance.


This improvement suggests that by adjusting the heap size in your environment, especially when caching mechanisms are in place, you may achieve similar performance gains.

### Nursery size

When using the generational garbage collector, the JVM automatically divides the heap into two regions: the nursery (for newly allocated objects) and the tenured space (for long-lived objects). However, testing has shown that the JVM often under-allocates space to the nursery by default. To improve overall throughput, it is recommended to manually override the default nursery sizing and allocate a larger portion of the heap to it.


**Setting  the nursery size**

1. Log in the WebSphere ISC, go to **Servers** > **Server Types** > **WebSphere application servers** > **WebSphere_Portal** > **Server Infrastructure: Java and Process Management** > **Process Definition** > **Java Virtual Machine**

2.  Add **`-XmnXXXm`** to the **Generic JVM Arguments** field, where **`XXX`** represents the desired size in megabytes (MB).


**JVM Nursery Size** is set to **1024 MB**
 <!--is this supposed to be step 3 or is `xxx` supposed to be 1024?-->

### Shared Class Cache size

Class sharing in the IBM JVM offers a transparent and dynamic means of sharing all loaded classes, both application classes and system classes. This can reduce the startup time for a JVM after the cache has been created. It can also reduce the virtual storage required when more than one JVM shares the cache.

WAS enables class data sharing by default and sets the size of this cache to 950 MB. Many HCL DX Core applications will have more than 90 MB of shared-class data, so an additional benefit can be achieved by increasing this cache size. We found that about 75 MB was in use after starting Portal, so we used a shared class cache size of 150MB to allow room for additional applications. We also saw that by increasing the size of the shared class cache, our performance results were more repeatable across multiple measurements.

The shared class cache persists until it is destroyed, thus you must destroy it first if you want to change its size.

**Setting the Shared Class Cache size**

1. In the WebSphere ISC, go to **Servers > Server Types > WebSphere application servers > WebSphere_Portal > Server Infrastructure: Java and Process Management > Process Definition > Java Virtual Machine.**

2. Add **`-Xscmxnnnm`** to the **Generic JVM Arguments** field, where **`nnn`** is the size in MB.

3. Stop the **DX Core Portal** server.


4. Navigate to `<AppServer root>/java/bin`, then run the following command:

```bash
./java -Xshareclasses:name=webspherev85_1.7_64%g,groupAccess,destroy
```
5. Look for the message **JVMSHRC010I Shared cache "webspherev85_xxx" is destroyed. Could not create the Java virtual machine.**

6. Start the **DX Core Portal** server.

7. Check the cache size in use by running the following command.

    ```
    ./java -Xshareclasses:name= webspherev85_1.7_64%g,groupAccess,printStats
    ```

**JVM Shared Class Cache** Size is set to **150**

### MaxDirectMemorySize

This JVM parameter defines an upper limit on the amount of native memory (not Java heap memory) that can be allocated via the DirectMemoryAllocation API, which is primarily used for `DirectByteBuffer` instances. These buffers are commonly involved in I/O operations, such as network send and receive tasks. The parameter should be considered tunable, as the optimal value depends on:  
- The deployment environment  
- Application behavior  
- Workload characteristics

If this parameter is not specified, there will not be an hard upper limit on the size of the native memory. The memory for these buffers is automatically adjusted upward by the JVM as needed by the application. However, before growing the physical memory allocation, the JVM aggressively attempts to reclaim memory to avoid new allocations by performing one or more system garbage collections (GCs). These system GCs may cause undesirable latency behavior in the system since application threads are paused during any GC operation.

If this parameter is specified:

- The specified value is treated as a 'hard limit' by the JVM. If the application requests `DirectMemory` which would exceed the limit, the JVM will attempt to free memory by performing system GC(s), in the same way if the limit was not specified. However, if the system is still unable to satisfy the memory allocation request, an `OutOfMemoryError` (OOM) will occur because the specified value is a hard limit. A log message will appear, indicating the reason and suggesting adjustment of the following parameter:

```
   java.lang.OutOfMemoryError: Direct buffer memory

Configure an appropriate size with:  
`-XX:MaxDirectMemorySize=<size>`
```  
   

- The system avoids performing any system GC cleanup before growing the amount of physical memory allocated for these buffers, assuming that the allocation is still under the hard limit. This can be helpful for heavy load scenarios where these pause times were significant.

If the application environment can tolerate intermittent high latency, you may get acceptable throughput and response times by not specifying this parameter at all. But under heavy load, DX Core Portal CPU utilization approached 80%, the delays are longer than one minute. If you expect your system to be very heavily loaded and such GC events with the resulting delays would be undesirable, you can set this parameter to a "large enough" value to accommodate the DirectMemory requirements of your environment. Determining what is "large enough" requires testing with the closest possible approximation of the actual peak workload, with real-world data that would be used in a production deployment. Various tests with different workloads in WebSphere Portal yielded results that led to the recommendations in this section. There is no single optimal setting for all cases.

The initial allocation of physical memory for these buffers is 64 MB and is currently not tunable.

#### Monitoring

As you increase the maximum allocation size, you should also monitor the overall Java process size to ensure that the server’s physical memory is not being overcommitted, which would cause paging. The process size should also be monitored to make sure it is not growing over time;, which would indicate a memory leak.

#### Tested values

In the majority of the measurements conducted with WebSphere Portal, the best results were obtained by explicitly specifying a maximum value. For most workloads, using `-XX:MaxDirectMemorySize=256000000` was sufficient. However, using `1G` had no adverse effects as the systems had adequate memory for the Portal process. The one measurement in Portal testing where the setting was inadequate was the Web Application Bridge scenario (WAB) when fetching 1 MB pages. At very high transaction rates, this scenario drove so much I/O throughput that the `MaxDirectMemorySize` value needed to be increased to `1000000000` (1 GB) to allow the JDK to have enough direct memory to meet testing demands.

!t is recommended to determine a value for this parameter by simulating a very high transaction rate with real-world data in a test environment.

As of Portal 9, `-XX:MaxDirectMemorySize` supports shorthand notation for specifying memory sizes.  
For example, `-XX:MaxDirectMemorySize=1G` sets the limit to **1 gigabyte**.

 If the server has sufficient physical memory, specifying `-XX:MaxDirectMemorySize=1G` incurs no penalty and helps prevent `OutOfMemoryError` related to direct memory for most workloads.


**Setting the MaxDirectMemorySize**

1. Log in the WebSphere ISC, go to **Servers > Server Types > WebSphere application servers > WebSphere_Portal > Server Infrastructure: Java and Process Management > Process Definition > Java Virtual Machine.**

2. In the **Generic JVM Arguments** field, add the following parameter: 

```
com.ibm.websphere.alarmthreadmonitor.threshold.millis
```


!!! Warning
    After extended periods of heavy usage, the Portal log may report alarm thread delays, such as the following warning:

    ```
    000000f3 AlarmThreadMo W UTLS0008W: The return of alarm thread "Non-deferrable Alarm : 2" (0000003b) to the alarm thread pool has been delayed for 32480 milliseconds. This may be preventing normal alarm function within the application server.
    ```
  
  **Setting `com.ibm.websphere.alarmthreadmonitor.threshold.millis`**

To increase the threshold for alarm thread warnings, add the following to the **Generic JVM Arguments** field:

```
-Dcom.ibm.websphere.alarmthreadmonitor.threshold.millis=40000
```

### Native memory

Java uses **native (non-heap) memory** to store data about loaded classes, classloaders, threads, monitors and other metadata. All of this metadata must fit in the first **4 GB** of memory for the process. If there is insufficient space for additional metadata to be allocated, a native `OutOfMemoryError` (NOOM) will occur.

This error can occur as result of a class, classloader, thread, or monitor leak. You can investigate a potential leak using the `javacore.txt` file produced with the NOOM by searching for large numbers of these objects.

This error can also occur if the Java heap is sharing the 0 to 4GB address space due to default performance optimizations that Java makes with compressed memory references. If metadata demands cannot be reduced, the starting address of JVM heap memory can be changed. To have the JVM start addressing heap objects above 4GB, set the JVM parameter `Xgc:preferredHeapBase=0x100000000`.

!!! note
    This setting may cause slight performance regressions. Testing will be required to determine if this setting is optimal.

## Session timeout

The default value for the session (idle) timeout is 30 minutes. Reducing this value can help reduce memory consumption, which allows a higher user load to be sustained for longer periods of time. Reducing the value too low can interfere with the user experience as users will be forced to log in again if their session times out.


In the base Portal performance evaluation, an average think time of 12 seconds between mouse clicks was used, which is shorter than the typical think time when interacting with a website. To compensate for the short think time, a short session timeout of 10 minutes was used. These settings are acceptable for performance evaluations but is not recommended for a production environment. The proper production setting depends on business needs. Load test should be run long enough to determine the system’s behavior when the maximum number of sessions is reached.

**Setting the session timeout**

1. In the WebSphere ISC, go to **Servers > Server Types > WebSphere application servers > WebSphere_Portal > Web Container Settings: Web container > Additional Properties: Session Management > Session Timeout**.

2. Under **Set timeout**, enter the timeout value.

3. Click **Apply**.

<!--steps accurate?-->

## Web container thread pool size

Set the servlet engine thread pool size and monitor the results. Increase this value if all the servlet threads are busy for a significant percentage of the time.

The default minimum and maximum value of 50 was used for performance benchmarks. Fifty threads were enough to drive Portal to capacity with the portlets used in the measurement workload. Portlets which require access external systems, such as databases or web services, may require more threads.

If response times increase before CPU loads reach a high level, monitor the web container thread pool through the WebSphere Performance Monitoring Infrastructure (PMI) interface. If the thread pool is significantly utilized and these threads are not waiting on an external service, increase the thread pool size.

**Setting the web container thread pool size**

1. In the WebSphere ISC, go to **Servers > Server Types > WebSphere application servers > WebSphere_Portal > Additional Properties: Thread Pools > Web Container**.

2. Set the **Minimum Size threads** and **Maximum Size threads**.

3. Click **Apply**.

<!--edited steps based on steps accurate?-->

It is recommended to the minimum and maximum thread pool size equal to each other. Memory leaks have been observed when these values differ. Refer to this [IBM Support Article](http://www-01.ibm.com/support/docview.wss?uid=swg21368248){target="_blank"}. <!--is this for internal or external users?it requires login?-->

## Data Source Tuning

DX Core Portal uses multiple database domains to store information. Each database domain has its own JDBC data source so you need to tune all the data sources when tuning in the admin console.

### Connection pool size

The default settings of 10 minimum and 50 maximum were used for the connection pool sizes for the base Portal Scenario. For WCM, higher maximum connection pool sizes are needed. Higher connection pool sizes may also be required in other cases, such as if you are using parallel portlet rendering or if larger web container thread pool is needed. In all cases, it is recommended to monitor the database connection pools and increase their maximum sizes if the pool is completely utilized.

Each WebContainer thread will require one RELEASE DB domain connection and two Java Content Repository (JCR) connections. If you configure DX Core Portal for 50 WebContainer threads, you must ensure that the DB server can handle 150 inbound TCP socket connections from each DX Core Portal pod.

**Setting the connection pool size**

1. In the WebSphere ISC, go to **Resources > JDBC > JDBC Providers > provider name > Data Sources > data source name > Additional properties: Connection pool properties**.

2. Set the **Maximum connections** and **Minimum connections**.

3. Click **Apply**.

<!--edited steps based on the steps I saw in the test instance-->

If deployed applications also use database connections, ensure that the connection pool is tuned for those data sources as well.

### Prepared statement cache size

All data sources are configured in a similar manner. The default setting of 10 was used for the prepared statement cache size on all data sources.

**Setting the prepared statement cache size**

1. In the WebSphere ISC, go to **Resources > JDBC > JDBC Providers > provider name > Data Sources > data source name > WebSphere Application Server data source properties**.

2. Under **Statement cache size**, enter the cache size value.

3. Click **Apply**.

The provider’s name and data source name are based on the names selected for that database during the database transfer step.

Specifying a larger prepared statement cache size can lead to OOM errors in situations where your application memory is already being highly utilized by your workload. The prepared statement cache size setting is the maximum allowed cache entries per database connection. Increasing the cache size on a data source that has a large number of connections can quickly increase the heap utilization for these cache objects. Any changes should be considered for each individual data source independently instead of across all data sources globally. Before increasing a data source's prepared statement cache size, you should monitor your memory usage under a heavy workload to determine if there is enough JVM heap available to handle an additional increase.

In some workloads, increasing the prepared cache statement size will not be beneficial. For instance, on WCM workloads, due to the dynamic nature of the SQL statements generated against the JCR database, the cache size would have to be very large to cover all of the different permutations. Even at significantly larger sizes, the cache hit rate would be very low.
