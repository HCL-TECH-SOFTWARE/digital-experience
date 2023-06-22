# URL Invocation Cache

Each Java Server Page (JSP) is a unique URL. The URL invocation cache holds information for mapping request URLs to resources. This cache is web container based. The default size is 50. On cluster runs this setting helped performance. No significant improvement was seen when using this
setting in single server benchmarks, however.

## How to Set
In the WebSphere Integrated Solutions Console
Servers -> WebSphere_Portal -> Java and Process Management -> Process Definition -> Java Virtual Machine -> Custom properties -> New

Name: invocationCacheSize
Value: 100