# Web Content Viewer Portlet Caching

The Web Content Viewer portlet (JSR 286 version) can be configured to use the Portlet Fragment Cache.
Since the fragment cache stores the Content Viewer’s generated HTML. This cache can be used in addition
to the WCM Object Caches.

This cache was not used in our benchmark testing because the purpose of our evaluation was to focus our
analysis on WCM performance. However, you can achieve a significant performance increase by enabling
this cache, especially if your Web Content Viewer portlet is displaying non-personalized content.

See the Portlet Fragment Cache section for information on how to enable and monitor the cache.