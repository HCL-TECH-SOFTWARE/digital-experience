# Adaptive Page Caching

Browsers will cache content with either `Cache-control: public` or `Cache-Control: private headers`. Private is usually used to indicate dynamic content that should be viewed only by a single user. While most content in Portal is dynamic, it does not, by default, add public or private cache headers to primary Portal responses since pages are assumed to be dynamic.

If Portal content can be cached for some period of time, it should be. Even caching for a few minutes can dramatically reduce the load in some cases. But, since HTTP servers do not have any application awareness and cannot cache private content, adding the correct `Cache-Control` headers needs to be done in Portal.

Portal can apply the appropriate Cache-Control headers through its Adaptive Page Caching mechanism. Adaptive Page Caching is done by specifying caching properties at the page and portlet level. If caching parameters are specified for multiple portlets, the most restrictive cache scope and timeout will be applied to the entire page. See https://help.hcltechsw.com/digital-experience/9.5/security/tune_cache.html for more information.