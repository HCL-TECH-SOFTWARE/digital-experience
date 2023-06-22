# IBM HTTP Server (IHS) Tuning

We used the following tunings in the `httpd.conf` file on our web servers. The HTTP server was configured to cache content.

## Process & Thread Settings

|Parameter |Linux & AIX |Windows|
|----------|------------|-------|
|KeepAliveTimeout <br>This value is less than the think time defined in our load measurement scripts to ensure that testing is conservative –
forcing virtual users to open new TCP connections for each new page view. In a live environment, it can be helpful to
increase the KeepAliveTimeout. However, a higher timeout value can increase contention for HTTP server processes, so
if you are running out of HTTP processes, decrease this value. |5|5|
|ThreadsPerChild <br>The higher number of threads per child on Windows is due to a different process model for IHS on Windows. |280|2000|
|MaxKeepAliveRequests <br> Selecting 0 lets an unlimited number of requests calls to a single TCP connection.|0|0|
|MaxRequestsPerChild|0|0|
|StartServers|2|N/A|
|Access logging<br>This was turned off by commenting out the following configuration line:<br>
`CustomLog /usr/HTTPServer/logs/access_log common.` |Off|Off|
|ThreadLimit|280|2000|
|ServerLimit<br>This value should be set to `MaxClients ÷ ThreadsPerChild.` |25|N/A|
|MinSpareThreads|25|N/A|
|MinSpareThreads<br>Should be set to the same values as MaxClients. |7000|N/A|
|MaxClients|7000|N/A|


For Linux and AIX, these values assume that IHS is using the default `Worker` Multi-Processing Module. This module creates multiple processes (Servers) to handle requests. Each Server, in turn, can create multiple threads. HTTP requests are handled by a thread. So, the number of threads determines how many concurrent connections the server can service. In the above settings, notice that the `ThreadLimit` setting multiplied by the `ServerLimit` is equal to the `MaxClients` value. If `MaxClients` is set lower, each server will not be able to start as many threads as are set in `ThreadLimit`.

To increase `MaxClients`, either the `ServerLimit` or `ThreadLimit` or both must also be increased. Benchmark measurements have shown that increasing threads provides better performance than adding servers, up to several hundred threads per server process. So, when increasing settings, raise the number of threads first before raising the number of servers. This reduces the overall memory needed by the HTTP server.

The values used in the performance benchmarks are set to ensure there are sufficient resources to handle hundreds of hits per second from thousands of users. For smaller environments, lower values which use less server resources can be used. For example, to serve several hundred hits per second, `ServerLimit` could be set to `5`, `ThreadLimit` could be set to 160 and `MaxClients` could be set to `800`.

The value of 0 for `MaxRequestsPerChild` means that each web server process will serve an unlimited number of requests. In production, it may be beneficial to set this to a larger number so that processes are occasionally restarted to prevent memory leaks. When changing the value, consider the average load since performance could be impacted if processes are restarted too quickly. Ideally, each process should be kept alive for an hour or more. This may require a `MaxRequestsPerChild` value in the tens of thousands. Also, this is per process, so the maximum requests should be modified based on the values of `StartServers` and `ServerLimit` which control the total number of web server processes.

On Windows, only a single process is supported. The number of threads this process can start will be limited by available memory. In performance benchmarks, this limit was around 2,500 threads on 32 bit IHS. Currently, there is no 64 bit version of IHS on Windows. So, if more threads are needed, a separate non-Windows server will be needed for IHS.

## Monitoring HTTP Server Activity

We enabled the `server-status` module so that the number of running and available Web server processes could be monitored under load. This enables appropriate tuning of the above parameters.