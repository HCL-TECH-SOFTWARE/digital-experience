# Policies

Each policy setting defines an access policy for a URL pattern. You specify the pattern by using the url attribute. A url attribute can be either a URL, or the wildcard character, or URL part that ends with the wildcard character "\*". The following are examples for url attribute values: http://localhost/index.html \*http://www.ibm.com/developerWorks/\*.

The following example shows a simple policy:

```
<proxy-rules xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="http://www.ibm.com/xmlns/prod/sw/http/outbound/proxy-config/2.0">        
     <policy name="SamplePolicy" url="http://www.myremotehost.com/*">
          <actions><method>GET</method></actions>
     </policy>
</policy-rules>
```

For each incoming request, the proxy applies the policy with the best URL match. If the proxy finds a policy, it applies this policy to the outbound connection. If the proxy finds no matching policy, the proxy rejects the request. Mappings can optionally declare `policy` setting that represents mapping-specific access policies.

A `policy` setting can have a `name` attribute that identifies this policy for administrative tasks. If this attribute is not set, the portal sets a unique administrative name for it. The administrative name must be unique for all policies that have the same parent `mapping` setting or parent `proxy-rules` setting.

To enable Basic Authentication for a policy, you can set the attribute `basic-auth-support` to `true`.

A `policy` setting can have the subsettings that are shown in the following list. Specify the subsettings in the same order in the configuration file proxy-config.xml as in the list:

-   **actions**

    This setting is mandatory. Use it to define the list of HTTP methods that can be used to access resources in the target domain. These methods are `GET`, `HEAD`, `POST`, `PUT`, and `DELETE`. The proxy denies requests that use HTTP methods that are not on this list. Specify each HTTP method by using a separate `method` setting. The following example shows a policy that supports the methods DELETE, GET, HEAD, POST, and PUT:

    ```
    <proxy-rules xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="http://www.ibm.com/xmlns/prod/sw/http/outbound/proxy-config/2.0">
         <policy name="SamplePolicy_supporting_all_methods" url="http://www.myremotehost.com/*">
              <actions>
                   <method>GET</method>
                   <method>HEAD</method>
                   <method>POST</method>
                   <method>PUT</method>
                   <method>DELETE</method>
              </actions>
         </policy>
    </policy-rules>
    ```

-   **headers**

    This setting is optional. Use it to define the list of header names that you want the proxy to forward to the target domain. The header names can include wildcard characters. If you specify no header names for the policy, the proxy by default forwards headers that match the following name expressions: `Cache-Control`, `Pragma`, `User-Agent`, `Accept*`, `Host`, and `Content*`. Specify each header name by using a separate `header` setting.

    **Note:** The value `Cookies` is not allowed. Instead, use the `cookie-rules` setting to specify the cookie forwarding behavior for the policy.

    The following example shows a policy that supports the `X-Method-Override` header:

    ```
    <proxy-rules xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xsi:noNamespaceSchemaLocation="http://www.ibm.com/xmlns/prod/sw/http/outbound/proxy-config/2.0">
         <policy name="SamplePolicy_custom_header_added" url="http://www.myremotehost.com/*">
              <actions><method>GET</method></actions>
    
              <headers>
                   <header>X-Method-Override</header>
              </headers>
         </policy>
    </proxy-rules>
    ```

-   **mime-types**

    This setting is optional. Use it to specify the list of accepted mime types. The mime types refer to the response that the proxy receives from the target server. If you specify at least one mime type, the proxy accepts only responses with a `Content-Type` response header that matches one of the specified mime types. If you specify no mime type, the proxy accepts all responses. Specify each mime type by using a separate `mime-type` setting. Servers might append the character encoding to the mime type. Therefore, it can be useful to use wildcard characters when you specify mime types. For example, if you specify `text/html*`, the proxy also accepts responses with the Content-Type `text/html; charset=utf-8`. The following example shows a policy that uses mime type filtering:

    ```
    <proxy-rules xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="http://www.ibm.com/xmlns/prod/sw/http/outbound/proxy-config/2.0">
         <policy name="SamplePolicy_filtered_mimetype" url="http://www.myremotehost.com/*">
              <actions><method>GET</method></actions>
    
              <mime-types>
                   <mime-type>text/plain</mime-type>
              </mime-types>
         </policy>
    </proxy-rules>
    ```



