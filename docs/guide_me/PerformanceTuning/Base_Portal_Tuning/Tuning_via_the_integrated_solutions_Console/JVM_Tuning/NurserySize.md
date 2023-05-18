# Nursery Size

When using the generational garbage collector, the JVM will automatically split the heap between the
nursery (where new objects are allocated) and the tenured region (where long-lived objects reside).
However, we found that the JVM tended to under-size the nursery, and that we were able to increase
overall throughput by overriding the automatic sizing of the nursery.

## How to Set

In the WebSphere Integrated Solutions Console

Servers → Server Types → WebSphere application servers → WebSphere_Portal → Server Infrastructure:
Java and Process Management→Process Definition → Java Virtual Machine

Add -Xmnxxxm to the Generic JVM Arguments, where xxx is the size in MB.

|AIX| Windows| Linux|
|-----|----|----|
|1024| 1024| 1024|  

The higher nursery size on Windows reflects the higher maximum heap size used on that platform. Larger
JVM heaps often perform better with larger nursery sizes.