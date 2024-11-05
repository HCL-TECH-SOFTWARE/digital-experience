# Base Portal Tuning

There are many aspects to configuring and tuning an application server in WebSphere Application Server. The aspects presented here are critical to an optimally performing Digital Experience in our benchmark environment.

The base Portal Scenario covers user login, page navigation and interaction with simple portlets. Users can see a set of pages which are visible to all authenticated users. Another set of pages, based on LDAP group membership, is also configured.

We have also benchmarked several other scenarios, which focus on different functions or use cases for WebSphere Portal. There are scenarios which make use of Web Content Management (WCM) and page management. In previous versions of Portal, a scenario where users have access to thousands of pages was also measured. While we have used different values to optimize performance for some of those scenarios, the tuning is all based on the tuning detailed in this section.

## Tuning via the Integrated Solutions Console

To get to WebSphere Integrated Solutions Console, start WebSphere Portal and then login to the WebSphere Integrated Solutions Console via https://{yourserver}/ibm/console with the administrator user ID created during Portal installation.

## JVM Tuning

### Heap Size

When setting the heap size for an application server, keep the following in mind:

- Make sure that the system has enough physical memory for all the processes to fit into memory, plus enough for the operating system. When more memory is allocated than the physical memory in the system, paging will occur, and this can result in very poor performance.
- After doing any tuning of heap sizes, monitor the system to make sure that paging is not occurring.
- We set the minimum and maximum heap sizes to the same values since we’re using the generational, concurrent (or ‘gencon’) garbage collection which helps avoid heap fragmentation. Generational concurrent garbage collection has given the best throughput and response time results in our measurements.
- Note that running clustered WebSphere nodes may require larger heap sizes compared to standalone, non-clustered systems if session replication is being used. This is especially true if using memory-to-memory session replication since session information is also stored in the JVM. After doing any heap size tuning, monitor the verbose garbage collection output to determine if the selected size is appropriate. Ideally, the system should spend no more than 10% of its time in garbage collection.

In HCL Portal, the maximum heap size is highly dependent on cache tuning values. In general, the larger the caches, the better performance will be. Larger caches, however, use more JVM heap.

The values used in performance benchmarks, detailed below, are set primarily to allow larger cache sizes, not because the measured portlets use significant amounts of memory. These values are related to the hardware configuration and the total throughput each can support. They do not reflect the absolute limits of each architecture. Values will need to be tuned based on specific hardware and application configuration, especially the throughput and number of active users required.

By default, **Maximum JVM Heap Size is set to 3584**

**How to Set**

In the WebSphere Integrated Solutions Console

Servers → Server Types → WebSphere application servers → WebSphere_Portal → Server Infrastructure: Java and Process Management → Process Definition → Java Virtual Machine

**Initial Heap Size**

**Maximum Heap Size**

During our performance testing, we observed a 2% improvement by increasing the heap size to **4096MB** (4 GB). This adjustment was particularly beneficial when caching was enabled. We recommend using this configuration as a reference for your medium configuration tests to optimize performance.

This suggests that by adjusting the heap size in your environment, especially when caching mechanisms are in place, you may achieve similar performance gains.

### Nursery Size

When using the generational garbage collector, the JVM will automatically split the heap between the nursery (where new objects are allocated) and the tenured region (where long-lived objects reside). However, we found that the JVM tended to under-size the nursery, and that we were able to increase overall throughput by overriding the automatic sizing of the nursery.

**How to Set**

In the WebSphere Integrated Solutions Console

Servers → Server Types → WebSphere application servers → WebSphere_Portal → Server Infrastructure:Java and Process Management→Process Definition → Java Virtual Machine

Add **-Xmnxxxm** to the Generic JVM Arguments, where **xxx** is the size in MB.

**JVM Nursery Size** is set to **1024**

### Shared Class Cache Size

Class sharing in the IBM JVM offers a transparent and dynamic means of sharing all loaded classes, both application classes and system classes. From the point of performance, this can reduce the startup time for a JVM after the cache has been created. It can also reduce the virtual storage required when more than one JVM shares the cache.

WebSphere Application Server enables class data sharing by default and sets the size of this cache to 950MB. Many HCL Portal applications will have more than 90MB of shared-class data, so an additional benefit can be achieved by increasing this cache size. We found that about 75MB was in use after starting Portal, so we used a shared class cache size of 150MB to allow room for additional applications. We also saw that by increasing the size of the shared class cache, our performance results were more repeatable across multiple measurements.

The shared class cache persists until it is destroyed, thus you must destroy it first if you want to change its size.

Note that the shared class cache is shared for all WebSphere JVMs on the same server. This includes the WebSphere Deployment Manager (DMGR) and node agent JVMs. To properly change the cache size in cluster configurations, the node agent and the DMGR (if on the same server as Portal) need to be stopped before the cache is destroyed. The cache size setting should be also made on the node agent and DMGR in addition to Portal so that starting the DMGR and node agent do not override the Portal server setting.

**How to Set**

1. In the WebSphere Integrated Solutions Console
Servers → Server Types → WebSphere application servers → WebSphere_Portal → Server Infrastructure: Java and Process Management→Process Definition → Java Virtual Machine 
Add **-Xscmxnnnm** to the Generic JVM Arguments field, where **nnn** is the size in MB.
2. Stop Portal server
3. Under &lt;AppServer root&gt;/java/bin, run the following command.
Note that the name of the shareclasses changes depending upon platform and release. To determine the name you need to use, search the verbose GC log (native_stderr.log) and look for Xshareclasses:name=
    -  ./java -Xshareclasses:name=webspherev85_1.7_64%g,groupAccess,destroy
4. Look for the message
**JVMSHRC010I Shared cache "webspherev85_xxx" is destroyed. Could not create the Java virtual machine.**
5. Start Portal Server
6. Check cache size in use
    -  ./java -Xshareclasses:name= webspherev85_1.7_64%g,groupAccess,printStats

*JVM Shared Class Cache* Size is set to **150**

### MaxDirectMemorySize

This JVM parameter sets an upper bound on the amount of native memory (not Java heap memory) that can be allocated through the DirectMemoryAllocation API, which is most commonly used for

DirectByteBuffers. These buffers are used in I/O operations, including network sends and receives. This parameter should be treated as "tunable". Any optimum value is going to be deployment, application and workload specific.

If this parameter is not specified, then there is no hard upper limit on the size of this memory. The native memory for these buffers is automatically adjusted upward by the JVM as needed by the application. Before growing the physical memory allocation, however, the JVM aggressively attempts to reclaim memory (to avoid new allocations) by performing one or more System garbage collections (GCs). These System GCs may cause undesirable latency behavior in the system since application threads are paused during any GC operation.

If this parameter is specified, two things change:

1. The specified value is treated as a 'hard limit' by the JVM. If the application requests DirectMemory which would exceed the limit, the JVM will attempt to free memory by performing System GC(s), in the same way if the limit was not specified. However, if the system is still unable to satisfy the memory allocation request, then because the specified limit is 'hard', the JVM throws an **OutOfMemoryError**, with a log message indicating the reason and suggesting adjustment of this parameter **(java.lang.OutOfMemoryError: Direct buffer memory::Please use appropriate '&lt;size&gt;' via -XX:MaxDirectMemorySize=&lt;size&gt;.)**
2. Our observations indicate that with this setting explicitly specified, the system avoids performing any system GC cleanup before growing the amount of physical memory allocated for these buffers (assuming that the allocation is still under the hard limit). Specifically, for the heavy load scenarios where these pause times were significant, this can be helpful.

If the application environment can tolerate intermittent high latency, then you may get acceptable throughput and response times by not specifying this parameter at all. But under heavy load, when Portal CPU utilization approached 80%, we have observed those delays to be higher than one minute. If you expect your system to be very heavily loaded and such GC events with the resulting delays would be undesirable, then we recommend setting this parameter to a 'large enough' value to accommodate the DirectMemory requirements of your environment. Determining what is 'large enough' requires testing with the closest possible approximation of the actual peak workload, with real-world data that would be used in a production deployment. Various tests with different workloads in WebSphere Portal yielded results that lead to the recommendations in this section. There is not necessarily one optimum setting for all cases.

The initial allocation of physical memory for these buffers is 64MB. This initial allocation size is currently not tunable.

**Monitoring**

Especially as the maximum allocation size is increased, the overall Java process size should be monitored to ensure that the server’s physical memory is not being overcommitted which would cause paging. The process size should also be monitored to make sure it is not growing over time; this could indicate a memory leak.

**Tested Values**

In the majority of our measurements with WebSphere Portal, the best results were obtained by explicitly specifying a maximum value. For most workloads, the use of **-XX:MaxDirectMemorySize=256000000** was sufficient. However, using 1G had no adverse effects as our systems had adequate memory for the Portal process. The one measurement in Portal testing where the above setting was inadequate was the Web Application Bridge scenario (WAB) when fetching 1MB pages. At very high transaction rates, this drove so much I/O throughput that we had to use a value of **1000000000** (1 GB) in order to allow the JDK to have enough direct memory to support the demands we were placing on it.

Again, it is best to try to determine a value for this parameter by simulating a very high transaction rate with "real world data" in a test environment.

As of Portal 9, MaxDirectMemorySize can be specified using a shorthand notation. For example **XX:MaxDirectMemorySize=1G** will set it to 1 gigabyte. If there is sufficient real memory on the server, there is no penalty for specifying **-XX:MaxDirectMemorySize=1G** and that value will avoid the out of direct memory condition for most workloads.

**How to Set**

In the WebSphere Integrated Solutions Console

Servers → Server Types → WebSphere application servers → WebSphere_Portal → Server Infrastructure: Java and Process Management→ Process Definition → Java Virtual Machine 
Add **-XX:MaxDirectMemorySize=1G** to the Generic JVM Arguments field.

**_com.ibm.websphere.alarmthreadmonitor.threshold.millis_**

The Portal log may contain the following warnings after a long period of heavy usage:

**000000f3 AlarmThreadMo W UTLS0008W: The return of alarm thread "Non-deferrable Alarm : 2" (0000003b) to the alarm thread pool has been delayed for 32480 milliseconds. This may be preventing normal alarm function within the application server.**

**How to Set**

Add the following to the Generic JVM arguments:

**\-Dcom.ibm.websphere.alarmthreadmonitor.threshold.millis=xxxxx** where xxxxx is greater than the number of milliseconds mentioned in the error message. We used as much as 40,000 in our runs.

### Native Memory

Java uses native (non-heap) memory to store data about loaded classes, classloaders, threads, monitors and other metadata. All of this metadata must fit in the first 4GB of memory for the process. If there is insufficient space for additional metadata to be allocated, then a native OutOfMemoryError (NOOM) will be thrown. 

In general, this can happen for two reasons: 

1) there is a class, classloader, thread, or monitor leak, and 

2) the Java heap is sharing the 0 to 4GB address space.

The first cause can be investigated using the javacore.txt file that's produced with the NOOM by searching for large numbers of these objects.

The second cause is due to default performance optimizations that Java makes with compressed memory references. If metadata demands cannot be reduced, then the starting address of JVM heap memory can be changed. To have the JVM start addressing heap objects above 4GB, set the JVM parameter Xgc:preferredHeapBase=0x100000000. Note that this setting may cause slight performance regressions. Testing will be required to determine if this setting is optimum.

## Session Timeout

The default value for the session timeout is 30 minutes. Reducing this value to a lower number can help reduce memory consumption, which allows a higher user load to be sustained for longer periods of time. Reducing the value too low can interfere with the user experience as users will be forced to log in again if their session times out.

In the base Portal performance evaluation, we use an average think time of 12 seconds between mouse clicks. That is a shorter think time than humans use when interacting with a website. To compensate for the short think time, we used a short Session Timeout of 10 minutes. This is acceptable for a performance evaluation, but is not recommended for a production environment. The proper production setting depends on business needs. Load test should be run long enough to determine the system’s behavior when the maximum number of sessions is reached.

**How to Set**

In the WebSphere Integrated Solutions Console

Servers → Server Types → WebSphere application servers → WebSphere_Portal → Container Settings:Web Container Settings → Session Management → Session Timeout → Set Timeout

## Web Container Thread Pool Size

Set the servlet engine thread pool size and monitor the results. Increase this value if all the servlet threads are busy a significant percentage of the time.

The default minimum and maximum value of 50 was used for performance benchmarks. Fifty threads were enough to drive Portal to capacity with the portlets used in the measurement workload. Portlets which require access external systems, like databases, may require more threads.

If response times increase before CPU loads reach a high level, monitor the Web Container Thread Pool through the WebSphere PMI interface. If the thread pool is significantly utilized, the size should be increased.

**How to Set**

In the WebSphere Integrated Solutions Console

Servers → Server Types → WebSphere application servers → WebSphere_Portal → Additional Properties: Thread Pools→ Web Container → Thread Pool

- Minimum size threads
- Maximum size threads

We recommend setting the minimum and maximum thread pool size equal to each other. Memory leaks have been observed when these values differ. For additional discussion, see [IBM Support Article](http://www-01.ibm.com/support/docview.wss?uid=swg21368248).

## Data Source Tuning

Portal uses multiple database domains to store information. Each database domain has its own JDBC data source, so when tuning in the admin console remember to tune all the data sources.

### Connection Pool Size

The default settings of 10 minimum and 50 maximum were used for the connection pool sizes for the base Portal Scenario. For WCM, higher maximum connection pool sizes are needed. Higher connection pool sizes may also be needed in other cases, such as using parallel portlet rendering or if larger web container thread pool is needed. In all cases, we recommend monitoring the database connection pools and increasing their maximum sizes if the pool is completely utilized.

**How to Set**

In the WebSphere Integrated Solutions Console: Resources → JDBC Providers → provider name → Data Sources → data source name → Connection pool properties

- Maximum connections
- Minimum connections

If deployed applications also use database connections, ensure that the connection pool is tuned for those data sources as well.

### Prepared Statement Cache Size

All data sources are configured in a similar manner. The default setting of 10 was used for the prepared statement cache size on all data sources.

**How to Set**

In the WebSphere Integrated Solutions Console

Resources → JDBC Providers → provider name → Data Sources → data source name → WebSphere Application Server data source properties → Statement cache size.

The provider’s name and data source name are based on the names selected for that database during the database transfer step.

Be aware that specifying a larger prepared statement cache size can lead to OutOfMemory errors in situations where your application memory is already being highly utilized by your workload. The prepared statement cache size setting is the maximum allowed cache entries per database connection. So increasing the cache size on a data source that has a large number of connections can quickly increase the heap utilization for these cache objects. Any changes should be considered for each individual data source independently instead of across all data sources globally. Before increasing a data source's prepared statement cache size you should monitor your memory usage under a heavy workload to determine if there is enough JVM heap available to handle an additional increase.

Finally, in some workloads, increasing the prepared cache statement size will be of no benefit. For instance, on WCM workloads, due to the dynamic nature of the SQL statements generated against the JCR database the cache size would have to be very large to cover all of the different permutations. Even at significantly larger sizes, the cache hit rate would be very low.