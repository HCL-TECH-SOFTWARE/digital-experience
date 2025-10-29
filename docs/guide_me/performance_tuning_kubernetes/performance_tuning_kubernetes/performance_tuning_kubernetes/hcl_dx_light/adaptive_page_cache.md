# Adaptive Page Caching

Browsers will cache content with either `Cache-Control: public` or `Cache-Control: private` headers. `private` is typically used to indicate dynamic content that should be viewed only by a single user.

While most content in Portal is dynamic, it does not, by default, add `public` or `private` cache headers to primary Portal responses, as pages are assumed to be dynamic.

If Portal content can be cached for any period of time, it should be. Even caching for a few minutes can dramatically reduce the load in some cases.

However, since HTTP servers lack application awareness and cannot cache private content, adding the correct `Cache-Control` headers must be done within Portal.Portal can apply the appropriate `Cache-Control` headers through its **Adaptive Page Caching** mechanism. Adaptive Page Caching is achieved by specifying caching properties at both the page and portlet levels.

If caching parameters are specified for multiple portlets on a single page, the most restrictive cache scope and timeout will be applied to the entire page.

For more information, see [Caching](../../../../../deployment/manage/config_portal_behavior/caching/index.md).