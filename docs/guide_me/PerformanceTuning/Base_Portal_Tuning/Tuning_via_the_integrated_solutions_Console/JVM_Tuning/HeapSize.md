# Heap Size

When setting the heap size for an application server, keep the following in mind:
o Make sure that the system has enough physical memory for all of the processes to fit into memory,
plus enough for the operating system. When more memory is allocated than the physical memory
in the system, paging will occur and this can result in very poor performance.

- After doing any tuning of heap sizes, monitor the system to make sure that paging is not occurring.
- We set the minimum and maximum heap sizes to the same values since we’re using the
generational, concurrent (or ‘gencon’) garbage collection which helps avoid heap fragmentation.
Generational concurrent garbage collection has given the best throughput and response time
results in our measurements.

- Note that running clustered WebSphere nodes may require larger heap sizes compared to
standalone, non-clustered systems if session replication is being used. This is especially true if using
memory-to-memory session replication since session information is also stored in the JVM.

After doing any heap size tuning, monitor the verbose garbage collection output to determine if the
selected size is appropriate. Ideally, the system should spend no more than 10% of its time in garbage
collection. To understand verbose garbage collection output, refer to Memory Analysis section in the
WebSphere documentation:
https://www.ibm.com/support/knowledgecenter/en/SSEQTP_9.0.5/as_ditamaps/was9_welcome_base.html

In HCLPortal, the maximum heap size is highly dependent on cache tuning values. In general, the larger the
caches, the better performance will be. Larger caches, however, use more JVM heap.

The values used in performance benchmarks, detailed below, are set primarily to allow larger cache sizes,
not because the measured portlets use significant amounts of memory. These values are related to the
hardware configuration and the total throughput each can support. They do not reflect the absolute limits
of each architecture. Values will need to be tuned based on specific hardware and application
configuration, especially the throughput and number of active users required.


|AIX|Windows|Linux|
|---|----|----|
|3584|3584|Not Measured|

## How to Set
In the WebSphere Integrated Solutions Console

Servers → Server Types → WebSphere application servers → WebSphere_Portal → Server Infrastructure:
Java and Process Management → Process Definition → Java Virtual Machine

    - Initial Heap Size
    
    - Maximum Heap Size