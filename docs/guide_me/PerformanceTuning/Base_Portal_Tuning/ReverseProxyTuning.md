# Reverse Proxy Tuning

An alternative to caching in an HTTP server is to cache in a reverse proxy.

In the Portal 7.0.0.2 theme, we were unable to get the Edge Server 6.0.2 (with fixes) to compress and cache
layerLoader.jsp. Therefore, we did not get acceptable results with Edge Server compression. We did get
good results having Portal compress the content, the HTTP server adding caching headers and the Edge
Server caching the results.

We did not evaluate an Edge Server with Portal 8.5. However, we did find that IBM Edge Server Version
8.0.0 did not reliably cache the ra: collection URLs because they contain a large HTTP response header.
Some other caching proxies do not have this limitation. For Portal to perform well, those URLs must be
fetched once and then cached.

Another issue with doing compression in the Edge Server version we used is that the Edge Server will send
a Vary HTTP response header if the reverse proxy compresses the reply. If Internet Explorer (IE) receives a
reply with a Vary header, IE will always check to see if the item has been modified the next time that item is
requested. That is not the desired behavior as it causes an unnecessary request to be sent instead of using
the version that is in the browser’s cache without sending a message to the server. Make sure that
compressed replies sent to IE do not contain a Vary header.

The following are the settings and tunings specified in the reverse proxy’s ibmproxy.conf file to get the
reverse proxy to work with the Portal 7.0.0.2 Page Builder theme. These also work with the Portal 8.5
theme. These settings allow caching of responses but allow Portal to perform the compression of
responses.

|Parameter|Setting Used|
|---------|------------|
|Proxy /wps/* http://<portal-server>/wps/* <br>This is only Proxy statement that’s needed for the Portal 8.5 theme.| |
|Proxy /wps_semanticTag* http://<portal-server>/wps_semanticTag*| |
|Proxy /searchfeed* http://<portal-server>/searchfeed*| |
|Proxy /portal_dojo/* http://<portal-server>/portal_dojo/*| |
|Proxy /PageBuilder2/* http://<portal-server>/PageBuilder2/*| |
|Proxy /mccenabler/* http://<portal-server>/mccenabler/*| |
|ReversePass http://<proxy-server>/* http://<portal-server>/*| |
|ReversePass https://<proxy-server>/* https://<portal-server>/*| |
|ConnThreads|15|
|CacheQueries Always http://<portal-server>/*| |
|ServerConnPool| on|
|MaxSocketPerServer| 20|
|CacheTimeMargin| 5 seconds|
|CacheFileSizeLimit 2 M|
|flexibleSocks |off|
|LimitRequestFieldSize| 16384|

In the above table <portal-server> should be the hostname of the Portal server; <proxy-server> should be
the hostname of the proxy server. Note that end users will access Portal via the proxy server hostname, so
the base URL for Portal needs to be set correctly as detailed in the Enabling Base URLs in Themes section.

## Internet Explorer & Vary Headers

If Internet Explorer (IE) fetches a cacheable page that contains a Vary HTTP response header, it will always
check back with the server to see if the page has been modified the next time the browser accesses the
page.

If the page is already in the browser cache and no access to the server is required, this is a wasted request
that slows down browser response time and adds unneeded load on the Portal Server. WebSphere Portal
will never send IE a Vary HTTP header. However, if a reverse proxy is injected into the path, it is important
to make sure the proxy is not adding a Vary header. If there is a Vary header, attempt to configure the
proxy so it does not send that header.