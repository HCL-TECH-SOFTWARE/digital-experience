# High Volume Sites

The tuning documented in the base Portal chapter can allow a single Portal server handle several thousand
logged in users serving a few hundred page views per second, depending on application processing
requirements. For sites that require more logged in users or where a single, powerful server can handle
more than 500 page views per second, it may be necessary to increase some tuning parameters to higher
values. These values are detailed in this section.

## JVM Tuning
Increase the maximum heap size and the nursery size. See the Heap Size and Nursery Size sections in the
base Portal tuning for instructions on how to set these values.

|Minimum Heap Size (-Xms)|Maximum Heap Size (-Xmx) |Nursery Size (-Xmn)|
|------------------------|-------------------------|-------------------|
|5632| 5632| 2048|

## VMM Caches
See the VMM Caches section in the base Portal tuning for instructions on how to set these values.

Table: VMM Attribute Cache Settings for High Volume Sites

|Attribute Cache Property|Default Value |Value Used|
|------------------------|--------------|----------|
|Cache size |4000 |15009|
|Cache time out <br>For the performance benchmarks a timeout of 18,000 was used to avoid having caches timeout when thousands of users were simulated. In an actual customer deployment lower timeout values might work just as well, depending on the login rate and total number of logged in users. |1200 |18000|

Table: VMM Search Results Cache Settings for High Volume Sites

|Search Results Cache Property|Default Value |Value Used|
|-----------------------------|--------------|----------|
|Cache size |2000 |15009|
|Cache time out |600 |4800|

## WebSphere Authentication Cache
Increasing the size of WebSphere’s internal LDAP authentication cache removed LDAP CPU utilization
spikes seen during a performance run. Without this setting, the CPU spike on the LDAP server causes a
throughput drop in Portal after running at high load for long periods of time.

### How to Set
In the WebSphere Integrated Solutions Console
Security > Global Security

1. Click Authentication cache settings

2. Change the Maximum cache size to 50000 entries

3. Click OK

4. Save Changes

5. Restart the server

## Cache Manager Service
The following cache sizes were changed from the base Portal settings. See the Cache Manager Service
section there for the sizes used for other caches as well as instructions on how to set these cache sizes.

|Parameter |Default Value |Value Used|
|----------|--------------|----------|
|cacheinstance.com.ibm.wps.ac.AccessControlUserContextCache.size |6000 |8403|
|cacheinstance.com.ibm.wps.model.factory.UserSpecificModelCache.size |6000 |8403|

## HTTP Server Tuning
In order for Portal to handle a high number of requests, the HTTP server must also be tuned to accept at
least as many connections as Portal. The settings documented in the Cluster Tuning chapter, under HTTP
Server Tuning are a good starting point since the cluster benchmarks also ran a high number of users.

One particular setting that may also be useful for high volume sites is the StartServers and
MinSpareThreads parameters. These control how many threads and processes are left running when the
server is idle. Setting these to higher values may help performance when there are large spikes in the
number of users. Increasing these settings means that there will be more threads already running and
available when a large number of users accesses the site at the same time; users will not wait for the server
to start more processes (up to MaxClients).

