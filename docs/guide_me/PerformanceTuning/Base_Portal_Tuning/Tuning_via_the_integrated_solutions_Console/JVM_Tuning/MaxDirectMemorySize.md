# MaxDirectMemorySize

This JVM parameter sets an upper bound on the amount of native memory (not Java heap memory) that
can be allocated through the DirectMemoryAllocation API, which is most commonly used for
DirectByteBuffers. These buffers are used in I/O operations, including network sends and receives. This
parameter should be treated as "tunable". Any optimum value is going to be deployment, application and
workload specific.

If this parameter is not specified, then there is no hard upper limit on the size of this memory. The native
memory for these buffers is automatically adjusted upward by the JVM as needed by the application.
Before growing the physical memory allocation, however, the JVM aggressively attempts to reclaim
memory (to avoid new allocations) by performing one or more System garbage collections (GCs). These
System GCs may cause undesirable latency behavior in the system since application threads are paused
during any GC operation.

If this parameter is specified, two things change:

1. The specified value is treated as a 'hard limit' by the JVM. If the application requests DirectMemory
which would exceed the limit, the JVM will attempt to free memory by performing System GC(s), in
the same way if the limit was not specified. However, if the system is still unable to satisfy the
memory allocation request, then because the specified limit is 'hard', the JVM throws an
OutOfMemoryError, with a log message indicating the reason and suggesting adjustment of this
parameter (java.lang.OutOfMemoryError: Direct buffer memory::Please use appropriate '<size>'
via -XX:MaxDirectMemorySize=<size>.)

2. Our observations indicate that with this setting explicitly specified, the system avoids performing
any system GC cleanup before growing the amount of physical memory allocated for these buffers
(assuming that the allocation is still under the hard limit). Specifically, for the heavy load scenarios
where these pause times were significant, this can be helpful.

If the application environment can tolerate intermittent high latency, then you may get acceptable
throughput and response times by not specifying this parameter at all. But under heavy load, when Portal
CPU utilization approached 80%, we have observed those delays to be higher than one minute. If you
expect your system to be very heavily loaded and such GC events with the resulting delays would be
undesirable, then we recommend setting this parameter to a 'large enough' value to accommodate the
DirectMemory requirements of your environment. Determining what is 'large enough' requires testing with
the closest possible approximation of the actual peak workload, with real-world data that would be used in
a production deployment. Various tests with different workloads in WebSphere Portal yielded results that
lead to the recommendations in this section. There is not necessarily one optimum setting for all cases.

The initial allocation of physical memory for these buffers is 64MB. This initial allocation size is currently
not tunable.

## Monitoring
Especially as the maximum allocation size is increased, the overall Java process size should be monitored to
ensure that the server’s physical memory is not being overcommitted which would cause paging. The
process size should also be monitored to make sure it is not growing over time; this could indicate a
memory leak. 

See [IBM TechXchange Community](https://www.ibm.com/developerworks/community/blogs/kevgrig/entry/tracking_directbytebuffer_allocations_and_frees_in_ibm_java) for more information.

## Tested Values
In the majority of our measurements with WebSphere Portal, the best results were obtained by explicitly
specifying a maximum value. For most workloads, the use of -XX:MaxDirectMemorySize=256000000 was
sufficient. However, using 1G had no adverse effects as our systems had adequate memory for the Portal
process. The one measurement in Portal testing where the above setting was inadequate was the Web
Application Bridge scenario (WAB) when fetching 1MB pages. At very high transaction rates, this drove so
much I/O throughput that we had to use a value of 1000000000 (1 GB) in order to allow the JDK to have
enough direct memory to support the demands we were placing on it.

Again, it is best to try to determine a value for this parameter by simulating a very high transaction rate
with "real world data" in a test environment.

As of Portal 8, **MaxDirectMemorySize** can be specified using a shorthand notation. For example:

-XX:MaxDirectMemorySize=1G will set it to 1 gigabyte. If there is sufficient real memory on the server, there is no penalty for specifying.
    
-XX:MaxDirectMemorySize=1G and that value will avoid the out of direct memory condition for most workloads.

## How to Set

In the WebSphere Integrated Solutions Console **Servers → Server Types → WebSphere application servers → WebSphere_Portal → Server Infrastructure**:

- Java and Process Management→ Process Definition → Java Virtual Machine

- Add -XX:MaxDirectMemorySize=1G to the Generic JVM Arguments field.