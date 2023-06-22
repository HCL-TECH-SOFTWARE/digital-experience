# Web Server Tuning

In our configuration the 10 Portal servers were supported by 5 IHS web servers. Each server had identical tuning.

## WAS Plugin

The following values were used in the WAS plugin:

`ServerIOTimeout=180`
`LoadBalance=”Round Robin”`

When using `LoadBalance=”Round Robin”` also specify `IgnoreAffinityRequests= false` (the default is `true`)

`IgnoreAffinityRequests` specifies whether the plugin ignores the number of affinity requests made to a server when selecting servers based on the Round Robin algorithm. We have found setting it to `false` resulted in better load balancing, particularly in a session persistence enabled environment.

Find the full description of these settings in
http://www-01.ibm.com/support/knowledgecenter/SSEQTP_8.5.5/com.ibm.websphere.base.doc/ae/rwsv_plugincfg.html

## HTTP Server Tuning

### Process & Thread Settings

The following settings were specified in `httpd.conf` for each of the HTTP servers.

|Parameter |Value|
|-----------|----|
|KeepAliveTimeout |5|
|ThreadsPerChild |150|
|MaxKeepAliveRequests |0|
|MaxRequestsPerChild |0|
|StartServers |2|
|Access logging |Off|
|ThreadLimit |150|
|ServerLimit |200|
|MinSpareThreads |200|
|MaxSpareThreads |30000|
|MaxClients |30000|

!!! note 
    These settings assume the worker multiprocess model used on Unix systems. On Windows, different values will be needed since only the single process model is supported.

Other HTTP server settings were the same as for the single-server, base Portal environment.

## IHS as a Caching Proxy
In the cluster, disk caching was used in the HTTP server. See the IHS as a Caching Proxy section for
instructions on how to set up disk caching.