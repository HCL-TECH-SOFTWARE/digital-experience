# HTTP & Proxy Server Caching

Most web servers, including IHS, are capable of caching HTTP responses just like browser caches. However,
since these caches are shared by many end users, only responses with Cache-Control: public will be
cached.

IHS will use a disk cache for this data, if properly configured. See the IHS as a Caching Proxy section for
information on how to do this. Configuring proxy servers and other content delivery systems is outside the
scope of this document.

## Content Compression
While not directly related to caching, content compression, usually via GZIP, on HTTP servers is also critical
for performance since it reduces the amount of bandwidth and thus the time taken to send an HTTP
response across the network. See the Content Compression on the HTTP Server section for more
information on this topic.

Note that theme resources (`ra:collection` URLs) in Portal are compressed at startup by Portal. Portal pages
and other content are not compressed.

When using compression, care must be taken to ensure that only a single server tier is attempting to
compress responses. Certain combinations of HTTP headers, particularly Vary and Auth headers, and
security configurations may cause intermediate security and proxy servers to uncompress and recompress
HTTP responses. The causes delays and adds unnecessary additional processing overhead.