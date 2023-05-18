# Shared Class Cache Size

Class sharing in the IBM JVM offers a transparent and dynamic means of sharing all loaded classes, both
application classes and system classes. More information about this feature is given in the IBM Java
Diagnostics Guide. From the point of performance, this can reduce the startup time for a JVM after the
cache has been created. It can also reduce the virtual storage required when more than one JVM shares the
cache.

WebSphere Application Server enables class data sharing by default, and sets the size of this cache
to950MB. Many HCL Portal applications will have more than 90MB of shared-class data, so an additional
benefit can be achieved by increasing this cache size. We found that about 75MB was in use after starting
Portal, so we used a shared class cache size of 150MB to allow room for additional applications. We also
saw that by increasing the size of the shared class cache, our performance results were more repeatable
across multiple measurements, particularly on AIX.

The shared class cache persists until it is destroyed, thus you must destroy it first if you want to change its
size.

Note that the shared class cache is shared for all WebSphere JVMs on the same server. This includes the
WebSphere Deployment Manager (DMGR) and node agent JVMs. To properly change the cache size in
cluster configurations, the node agent and the DMGR (if on the same server as Portal) need to be stopped
before the cache is destroyed. The cache size setting should be also made on the node agent and DMGR in
addition to Portal so that starting the DMGR and node agent do not override the Portal server setting.

## How to Set

1. In the WebSphere Integrated Solutions Console.

Servers → Server Types → WebSphere application servers → WebSphere_Portal → Server Infrastructure: 
Java and Process Management→Process Definition → Java Virtual Machine Add -Xscmxnnnm to the Generic JVM Arguments field, where nnn is the size in MB.

2. Stop Portal server.

3. Under <AppServer root>/java/bin, run the following command. Note that the name of the
shareclasses changes depending upon platform and release. To determine the name you need to
use, search the verbose GC log (native_stderr.log) and look for Xshareclasses:name=

- AIX: ./java -Xshareclasses:name=webspherev85_1.7_64_%g,groupAccess,destroy

- Windows: java -Xshareclasses:name=webspherev85_1.7_64,groupAccess,destroy
    
- Linux: ./java -Xshareclasses:name=webspherev85_1.7_64%g,groupAccess,destroy

4. Look for the message.
    JVMSHRC010I Shared cache "webspherev85_xxx" is destroyed. Could not create the Java virtual machine.

5. Start Portal Server.

6. Check cache size in use.

- AIX: ./java -Xshareclasses:name= webspherev85_1.7_64_%g,groupAccess,printStats

- Windows: java -Xshareclasses:name= webspherev85_1.7_64_%g,groupAccess,printStats

- Linux: ./java -Xshareclasses:name= webspherev85_1.7_64%g,groupAccess,printStats

|AIX| Windows| Linux|
|----|----|----|
|150| 150| 150|