# Tuning via the Integrated Solutions Console

The base Portal High Volume Sites tunings were used to acheive optimal WAB performance.

## JVM Tuning

## MaxDirectMemorySize
In our measurements a 1MB page was accessed via WAB. This required us to set the max direct memory
size in the JVM using -XX:MaxDirectMemorySize=1G. Also, to make sure there was enough physical
memory for the Portal JVM heap plus the native memory used by direct memory, we increased the physical
memory on the system to16GB from 8GB.

If large pages are fetched via Portal (not directly from the back end server) MaxDirectMemorySize can be
set to avoid out of memory conditions. See the
Error! Reference source not found. section in base Portal tuning for more information.

In Portal 8.5, the base Portal scenarios set this value to 1G. The WAB configuration used the same
value.