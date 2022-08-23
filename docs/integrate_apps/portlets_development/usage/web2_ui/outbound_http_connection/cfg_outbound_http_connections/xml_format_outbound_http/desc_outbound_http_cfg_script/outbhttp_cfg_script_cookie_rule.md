# Cookie rule

You can use cookie rules to determine how you want the cookie to be handled.

The following options are available:

-   The cookie can be made visible for the client that calls the outbound HTTP connection.
-   The cookie can be wrapped in another cookie.
-   The cookie can be stored in either of the following types of cookie store:
    -   A cookie store that is scoped for the session
    -   A cookie store that is scoped for the request

To configure your cookie rules, use the following attributes:

-   **cookie**

    This attribute is required. You can specify multiple `cookie` attributes. `cookie` attributes contain a wildcard expression of a cookie name for which this cookie rule applies.

-   **scope**

    This attribute is optional. The `scope` attribute denotes the scope for which the cookie is shared. The following scope values are valid:

    -   **user**

        This value is the default value. It defines that the cookie is scoped to the user that receives the cookie from the remote server.

    -   **system**

        This value defines the cookie as shared. That means that all clients of an outbound connection that establish a connection use the same cookie.

    -   **application**

        This value determines that the cookie is scoped to the application from which the outbound connection is established.

-   **handling**

    This attribute is optional. It determines how to proceed with cookies that are defined by the remote server in outbound HTTP connections: The following handling values are valid:

    -   **passthru**

        This value is the default value. It leaves the cookie unchanged. The cookie is returned to the user of the outbound HTTP connection. It is up to the caller of the outbound HTTP connection to handle this cookie.

    -   **wrap**

        This value wraps this cookie in another cookie. If you specify this value, the transformation rules define the characteristics of this transformation.

    -   **block**

        This value blocks this cookie. If the cookie is set by the caller of the outbound HTTP connection, the cookie is not sent to the remote host. In the same manner, cookies that are set by the remote system are not received at the outbound HTTP connection.

    -   **store-in-request**

        This value stores the cookie in a cookie store during the HTTP request. Cookies that are set by the remote host are filtered out by the cookie handling filter. When the next HTTP connections are made, the stored cookies are added to the request header of this request.

    -   **store-in-session**

        This value stores the cookie in a cookie store during the HTTP session. Cookies that are set by the remote host are filtered out by the cookie handling filter. When the next HTTP connections are made, the stored cookies are added to the request header of this request.


The following example shows a cookie rule that contains a cookie rule for LTPA tokens, an application cookie that is named `app_cookie`, and a further cookie that is named `another_cookie`. By these cookie rules, the LTPA token is saved in a cookie store, and the two cookies `app_cookie` and `another_cookie` are passed through the proxy to the client.

```
<proxy-rules xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="http://www.ibm.com/xmlns/prod/sw/http/outbound/proxy-config/2.0">
     <policy name="SamplePolicy" url="http://www.myremotehost.com/*">
          <actions><method>GET</method></actions>
          <cookie-rule name="my_sso_tokens">
               <cookie>LtpaToken*</cookie>
               <handling>store-in-session</handling>
          </cookie-rule>
          <cookie-rule name="my_application_cookies">
               <cookie>app_cookie</cookie>
               <cookie>another_cookie</cookie>
               <handling>passthru</handling>
          </cookie-rule>
     </policy>
</proxy-rules>
```


