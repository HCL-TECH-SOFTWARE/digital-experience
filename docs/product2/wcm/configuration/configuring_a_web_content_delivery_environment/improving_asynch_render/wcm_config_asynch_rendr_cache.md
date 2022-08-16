# Asynchronous web content rendering and caching

The Web Content Viewer portlet supports setting specific portlet fragment caching configuration values. This caching also works with asynchronous web content rendering. However, the respective content for the fragment cache is different.

If servlet fragment caching, portlet fragment caching, Web Content Viewer caching, and asynchronous web content rendering are all enabled, the Web Content Viewer portlet adds the default or custom loader markup to the fragment cache. It does not add the asynchronously rendered web content to this fragment cache. This way, it increases the possibility to cache an elaborated page setup even with user-specific web content. The reason is mainly because the user-specific content is added asynchronously. The initial page markup contains only the placeholder loading markup, which is static and can therefore be cached easily.

**Parent topic:**[Improving page loading performance with asynchronous web content rendering](../wcm/wcm_config_asynch_wcm_rendr.md)

