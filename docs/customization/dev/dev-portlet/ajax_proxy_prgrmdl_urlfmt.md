# URL format and examples

The proxy can be addressed via URLs that comply with the REST-based URL format given here.

This format is as follows:

```
<protocol>://<portal-domain>/<proxyurl>/<protocol>/<host>%3a<port>/<url>?<query>
```

The proxy URL carries the target URL in its path information part. Depending on the context path mapping in the proxy configuration, the target URL can be an absolute or relative URL.

**Examples:** Refer to the following sample proxy URLs. They show how you can load a URL via the proxy depending on the context path mapping in the proxy configuration.

```
URL: http://www.ibm.com/developerworks/news/dw_dwtp.rss
Context path mapping (from proxy-config.xml): <mapping contextpath="/proxy" url="*"/>
Proxy URL: http://myportal.com:10040/wps/proxy/http/www.ibm.com/developerworks/news/dw_dwtp.rss

```

```
URL: http://myotherportal.com:1234/sitemap
Context path mapping (from proxy-config.xml): <mapping contextpath="/proxy" url="*"/>
Proxy URL: http://myportal.com:10040/wps/proxy/http/myotherportal.com%3a1234/sitemap  

```

```
URL: http://www-01.ibm.com/software/swnews/swnews.nsf/swnewsrss?openview&RestrictToCategory=lotus
Context path mapping (from proxy-config.xml): <mapping contextpath="/ibmsoftwarenews" 
        url="http://www-01.ibm.com/software/swnews/"/>
Proxy URL: http://myportal.com:10040/wps/ibmsoftwarenews/swnews.nsf/swnewsrss?openview&RestrictToCategory=lotus
   

```

**Parent topic:**[The programming model for using the AJAX proxy](../dev-portlet/ajax_proxy_prgrmdl.md)

