# Context path mapping

You use a context path mapping to map a specific context path to a specific target URL. The proxy resolves context path mappings before it applies the matching access policy.

To work with context path mappings, you work with the `mapping` setting. An example `mapping` setting can look as follows:

```
<mapping contextpath="/ibmproducts" url="http://www.ibm.com/products"/>
```

It maps requests that contain the context path /ibmproducts to the URL http://www.ibm.com/products. As a result, the incoming proxy URL is http://myportal.com/wps/ibmproducts/us/en, the proxy forwards the request to http://www.ibm.com/products/us/en. For more details about the proxy URL format and the usage of context path mappings, read *The programming model for the outbound HTTP connection service*.

You can also define generic context path mappings that are not tied to a specific URL pattern. You do so by specifying the asterisk as a wildcard: `url="*"`. Example:

```
<mapping contextpath="/proxy" url="*"></mapping>
```

However, if your application must connect to only a few external systems, for example to one external REST service that provides the application data, it is better to use a specific context path mapping.

**Note:** The current servlet-based implementation of the proxy requires a corresponding servlet mapping for each defined `mapping` setting. You define the servlet mapping in the file web.xml. The servlet mapping maps all requests that address the specified context path to the proxy servlet. If you apply this rule to the previous examples, there must be a servlet mapping for either of the context paths "/ibmproducts" or "/proxy" that references the proxy servlet.

**Parent topic:**[Description of the outbound HTTP connection configuration script](../dev-portlet/outbhttp_cfg_descript.md)

