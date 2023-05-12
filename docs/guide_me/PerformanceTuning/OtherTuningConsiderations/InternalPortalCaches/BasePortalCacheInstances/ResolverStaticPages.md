# Resolver & Static Pages

**com.ibm.wps.resolver.cor.cache.uri**
Default size: 2000, default lifetime: infinite, usage pattern: regular

The cache caches java.net.URI objects based on their string representation. The cache values are small. The
cache does not depend on the user, the virtual portal or the project.

**com.ibm.wps.resolver.data.cache.CacheMissDataSourceCache**
Default size: 10000, default lifetime: infinite, usage pattern: regular

This cache is used as a first level cache for caching data sources. Data is cached based on a combination of
the URI of the data source and dependencies on request headers, so the same URI can appear multiple
times in the cache. For every cache lookup, the system has to check for all possible variations of the URI in
the cache. The CacheMissDataSourceCache speeds up this variation processing by caching the information
that a particular variation is not part of the cache.

The cache only stores the cache keys, not cache values (the existence of the key in the cache implies a
cache miss).

The size should be approximately twice as large as the size of the data source cache.

**com.ibm.wps.resolver.data.cache.DataSourceCache**
Default size: 10000, default lifetime: infinite, usage pattern: regular

This cache caches data sources on the server. The cache key is the URI of the data source and information
about dependencies on request headers. Entries depend, in general, on the user, the project and the virtual
portal. Primarily the cache is used to cache aggregated resources via the resource aggregator framework,
but it might be used by applications as well, so general purpose predictions on the cache size are not
possible.

The content of the cache can be viewed via
http://portalserver/wps/mycontenthandler/distmap/ws/com.ibm.wps.resolver.data.cache.DataSourceCache.

The key into the cache is the URI of a data source. The value is the content of the data source, which can be
anything from text files to binary data.

**com.ibm.wps.resolver.friendly.cache**
Default size: 1000, default lifetime: infinite, usage pattern: regular

The cache caches intermediate results during friendly URL processing. If friendly names are configured to
be user specific, the size scales with the number of pages that have friendly names by the number of
concurrent users. If friendly names are user independent, the cache scales only with the number of pages.
The cache values are small.

Friendly names are not user specific if they are used only for pages that are public or pages that are shared
by all users. If no user specific friendly names are used this cache can be made public by setting
friendly.force.public to true in the WP ConfigService resource environment provider.

The content of the cache can be viewed via
http://portalserver/wps/mycontenthandler/distmap/ws/com.ibm.wps.resolver.friendly.cache

**com.ibm.wps.resolver.resource.AbstractRequestDispatcherFactory**
Default size: 20, default lifetime: infinite, usage pattern: regular

In the cache, Java objects of type javax.servlet.RequestDispatcher are stored. The cache keys are pairs of
javax.servlet.ServletContext and a String object representing the resource path.
The request dispatcher is a J2EE tool to dispatch a request from one application to another application on
the server. With caching, the request dispatchers obtained can be reused.

com.ibm.wps.spa.parser.locale.LocalizationParserCache
Default size: 1000, default lifetime: infinite, usage pattern: regular

The cache caches the processing of the locales in HTML files that represent the themes and skins. The size
of the cache scales with the number of used themes and skins.

The cache values are medium sized.

The content of the cache can be viewed via
http://portalserver/wps/mycontenthandler/distmap/ws/com.ibm.wps.spa.parser.locale.LocalizationParserCache.

**com.ibm.wps.spa.parser.skin.SkinParserCache**
Default size: 1000, default lifetime: infinite, usage pattern: regular

The cache caches the parsing of skins for dynamic spots. The size of the cache scales with the number of
skins.

The cache values are medium sized.

The content of the cache can be viewed via
http://portalserver/wps/mycontenthandler/distmap/ws/com.ibm.wps.spa.parser.skin.SkinParserCache.

**com.ibm.wps.spa.parser.skin.ThemeParserCache**
Default size: 1000, default lifetime: infinite, usage pattern: regular

The cache caches the parsing of themes for dynamic spots. The size of the cache scales with the number of
themes.

The cache values are medium sized.

The content of the cache can be viewed via
http://portalserver/wps/mycontenthandler/distmap/ws/com.ibm.wps.spa.parser.skin.ThemeParserCache.