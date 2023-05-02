# IHS as a Caching Proxy

With any theme, large resources can have a significant impact on end user performance. The performance impact of these can be minimized by compressing and/or caching them outside the application server.

There are two choices for caching: using a reverse proxy or enabling caching in the HTTP server. In this section we discuss both options.

We suggest having the HTTP server reside on a different server than Portal for high workloads. Caching on the HTTP server is a good solution in this setup. A reverse proxy should be used only when they can provide local caches to users who are geographically dispersed. Other configurations are viable, but make sure that large cacheable resources are cached and compressed. We saw a significant performance improvement by having Portal compress the content at startup and having the HTTP server cache the already compressed content.

The advantage of using a reverse proxy over an HTTP server for caching depends on the topology used. In general it is best to have the caching done on a system other than the application server. If the HTTP server is on the same server as the application server, it is good to use a separate server as a caching reverse proxy. The disadvantage of using a reverse proxy is the difficulty of configuring it so it compresses content, caches it and does not send a Vary header to Internet Explorer.

We used IBM HTTP Server 8.5 in our measurement environment. The cluster configuration and 64-bit Windows have a remote web server. All other configurations have the web server running on the same system as the WebSphere Portal application server. If, during your monitoring, you notice insufficient processor capacity on the system when running the web server and the Portal server on a single system,
consider separating the servers onto different systems.

Regardless of the configuration, to get acceptable throughput and response times under high load for the Portal 8.5 theme, some external caching must be in place. This allows some content to be fetched without going to the Portal server.

