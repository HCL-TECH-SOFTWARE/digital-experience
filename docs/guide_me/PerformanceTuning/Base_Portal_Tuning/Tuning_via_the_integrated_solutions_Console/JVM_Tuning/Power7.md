# Power 7

On AIX Power 7 systems, add –Xcodecache30m to the Generic JVM Arguments to allow ample space in the
Java code cache.

On AIX Power 7 systems, add -XtlhPrefetch to the Generic JVM Arguments. This Generic JVM Argument
prefetches bytes in the thread local heap ahead of the current allocation pointer during object allocation. It
helps reduce the performance cost of subsequent allocations.