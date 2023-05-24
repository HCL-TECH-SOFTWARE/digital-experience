# Native Memory

Java uses native (non-heap) memory to store data about loaded classes, classloaders, threads, monitors
and other metadata. All of this metadata must fit in the first 4GB of memory for the process. If there is
insufficient space for additional metadata to be allocated, then a native OutOfMemoryError (NOOM) will
be thrown. In general, this can happen for two reasons: 

- there is a class, classloader, thread, or monitor leak and

- the Java heap is sharing the 0 to 4GB address space.

The first cause can be investigated using the javacore.txt file that's produced with the NOOM by searching
for large numbers of these objects.

The second cause is due to default performance optimizations that Java makes with compressed memory
references. If metadata demands cannot be reduced, then the starting address of JVM heap memory can
be changed. To have the JVM start addressing heap objects above 4GB, set the JVM parameter -
Xgc:preferredHeapBase=0x100000000. Note that this setting may cause slight performance regressions.
Testing will be required to determine if this setting is optimum.

See [IBM Support](http://www-01.ibm.com/support/docview.wss?uid=swg21660890) for more information.