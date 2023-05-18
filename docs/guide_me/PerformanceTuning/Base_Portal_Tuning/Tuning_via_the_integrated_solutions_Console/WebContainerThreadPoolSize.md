# Web Container Thread Pool Size

Set the servlet engine thread pool size and monitor the results. Increase this value if all the servlet
threads are busy a significant percentage of the time.

The default minimum and maximum value of 50 was used for performance benchmarks. Fifty threads were enough to drive Portal to capacity with the portlets used in the measurement workload. Portlets which require access external systems, like databases, may require more threads.

If response times increase before CPU loads reach a high level, monitor the Web Container Thread Pool through the WebSphere PMI interface. If the thread pool is significantly utilized, the size should be increased.

## How to Set

In the WebSphere Integrated Solutions Console
Servers > Server Types > WebSphere application servers > WebSphere_Portal > Additional Properties:

Thread Pools> Web Container > Thread Pool

- Minimum size threads

- Maximum size threads

We recommend setting the minimum and maximum thread pool size equal to each other. Memory leaks have been observed when these values differ. For additional discussion of this see [Potential native memory use in WebSphere Application Server thread pools
](http://www-01.ibm.com/support/docview.wss?uid=swg21368248).