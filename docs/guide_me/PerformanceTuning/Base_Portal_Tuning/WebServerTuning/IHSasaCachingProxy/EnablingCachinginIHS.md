# Enabling Caching in IHS

For HTTP server caching, there are 2 possibilities: disk caching and in-memory caching. In-memory caching is faster. However in-memory caching is deprecated. In addition, with proper setup of the operating system’s file system buffering, disk caching achieves results similar to in-memory caching. In the Portal 8.5 performance evaluation, disk caching was used.

The advantage of using in-memory caching is that it may run faster than on-disk caching. The disadvantage is that in-memory caching could use more main memory since each IHS process maintains its own cache. Disk caching implicitly uses system memory as file system cache which can be swapped out if needed. The operating system may be more efficient at managing memory than the in-memory caching algorithms. Benchmarks using both configurations are recommended to determine the best configuration in a specific environment.

These values are set in the HTTP server’s httpd.conf file:

### How to Set In-Memory Caching

```
LoadModule cache_module modules/mod_cache.so
<IfModule mod_cache.c>
LoadModule mem_cache_module modules/mod_mem_cache.so
<IfModule mod_mem_cache.c>
CacheEnable mem /
CacheIgnoreHeaders Set-Cookie
MCacheSize 102400
MCacheMaxObjectCount 10000
MCacheMinObjectSize 1
# Needed with themes before WP 7.0.0.2
# MCacheMaxStreamingBuffer 6291456
MCacheMaxObjectSize 6291456
</IfModule>
</IfModule>
```

Note that the `MCacheMaxStreamingBuffer` setting was used for Portal themes before version 7.0.0.2. Use this directive the aid the cacheability of larger theme elements that do not have `Content-Length` headers set. For newer themes, all out of the box theme content has a correct `Content-Length` header and this directive does not have to be specified. This leaves the value at the default of `100000`.

### How to Set Disk Caching

These values are set in the HTTP server’s httpd.conf file:

```
#disk caching
LoadModule cache_module modules/mod_cache.so
<IfModule mod_cache.c>
LoadModule disk_cache_module modules/mod_disk_cache.so
<IfModule mod_disk_cache.c>
CacheEnable disk /
CacheRoot /ihscache
CacheDirLevels 2
CacheDirLength 1
CacheIgnoreHeaders Set-Cookie
CacheMaxFileSize 10000000
CacheIgnoreNoLastMod On
CacheDefaultExpire 86400
</IfModule>
</IfModule>
```

Make sure that the the HTTP server has permission to write to the location specified by CacheRoot by running the command `chown nobody /ihscache`.

Make sure to select either disk or in memory caching, but not both. If a caching reverse proxy is used, in most cases there is no need for caching on the HTTP server as well.

## Performance Considerations

For best performance, it may be necessary to place the disk cache on a separate disk. This not only helps IO
throughput, but also allows changing mount options on the cache disk. For best performance, set the
noatime option on the filesystem to prevent writing access times on each file read.

More information on configuring disk caching can be found on the HCL Digital Experience Q&A forum :
<<<<<<< Updated upstream
https://hclpnpsupport.hcltech.com/community?id=community_question&sys_id=bb14b57d1be10c9c7776
1fc58d4bcbd1
=======
https://hclpnpsupport.hcltech.com/community?id=community_question&sys_id=bb14b57d1be10c9c77761fc58d4bcbd1
>>>>>>> Stashed changes
