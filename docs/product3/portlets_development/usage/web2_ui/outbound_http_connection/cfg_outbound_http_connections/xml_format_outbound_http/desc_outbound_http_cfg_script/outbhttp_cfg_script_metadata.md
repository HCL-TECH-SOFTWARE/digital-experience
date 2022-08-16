# Configuration metadata for outbound HTTP connections

You can add general proxy configuration parameters to the file proxy-config.xml by using meta-data settings.

You can specify all of these parameters within a `proxy-rules` or `mapping` setting.

-   **HTTP connection handling parameters:**

    Use the following configuration parameters to determine how the proxy handles the HTTP connection:

    -   **socket-timeout**

        Use this parameter to define the default socket timeout in milliseconds. The socket timeout determines how long the proxy server waits for data after it successfully establishes a connection with the target server. The default value is 20 seconds. A timeout value of zero means that a timeout is not applied.

    -   **retries**

        Use this parameter to define the number of retries that you want the proxy to do if it cannot establish a connection with the target server. The default value is 2 retries.

    -   **max-total-connections**

        Use this parameter to define the maximum number of HTTP connections that the proxy can open to connect to arbitrary target hosts. The default value is 100 connections.

    -   **max-connections-per-host**

        Use this parameter to define the number of HTTP connections that the proxy can open to connect to a specific host. The default value is 50 connections per host.

-   **User Agent identifier:**

    Use the following configuration parameter to redefine the user agent parameter:

    -   **user-agent**

        Use this parameter to specify the user agent identifier that you want to be used for the outbound connection.

-   **Control Redirection:**

    Use the following configuration parameter to specify the reaction on an HTTP redirect status \(HTTP status 302\):

    -   **follow-redirects**

        Set this parameter to `true` if the caller wants an HTTP redirect status to be resolved automatically, that is, the connection is reestablished to the redirection URL. Set this parameter to `false` if no automated redirection is required. In that case, the proxy returns an HTTP status 302 to the caller. If you do not set this parameter, then the default reaction on a 302 HTTP status depends on the HTTP request method:

        -   For all requests of `HEAD` and `GET`, the portal follows the HTTP redirection.
        -   For all other request methods, the portal does not follow the HTTP redirection.
-   **Deactivate policy rules, mappings, or custom connection filters:**

    A policy rule, a mapping, or a custom connection filter can be set to be deactivated. In this case, the disabled policy rule or mapping remains in the configuration, but does not take effect at run time. Ensure that you use the metadata setting to control the activation state of a policy rule or mapping:

    -   **active**

        Valid values are false and true:

        -   **true**

            This is the default value. If you set this parameter to `true`, the policy rule is in effect.

        -   **false**

            If you want the policy rule to be deactivated, set the `active` parameter to the value `false`.

-   **Security parameters:**

    Use the following configuration parameters to specify security-related settings of the proxy. You can also define these security-related parameters within `policy` settings.

    -   **unsigned\_ssl\_certificate\_support**

        Valid values are false and true:

        -   **true**

            If you set this parameter to `true`, the proxy connects to any HTTPS URL that is allowed by the policy, regardless of whether it trusts the specified host. This is the default value.

        -   **false**

            If you set this parameter to `false`, the proxy connects only to HTTPS URLs that it trusts.

    -   **forward-http-errors**

        This parameter defines whether the proxy forwards extra HTTP error codes to the client. Valid values are false and true:

        -   **false**

            This value is the default value. It means that only 2xx and 3xx status codes are forwarded, whereas 4xx error codes are automatically mapped to a 404 'Not Found' error.

        -   **true**

            If you set the `forward-http-errors` parameter to true, the proxy forwards every status code, even if it represents an error code.

    -   **forward-credentials-from-vault**

        This parameter defines whether user credentials that are retrieved from the credential vault of the portal can be forwarded to the specified target host by using an HTTP authorization request header. Valid values are false and true:

        -   **false**

            This is the default value. If you set this parameter to `false`, the proxy does not forward credentials.

        -   **true**

            If you set this parameter to `true`, the proxy forwards credentials.

    -   **xhr-authentication-support**

        This parameter defines whether HTTP BASIC user credential challenges from the external service are rewritten. Valid values are false and true:

        -   **false**

            This value is the default value. If you set this parameter to false, the proxy does not change the `WWW-Authenticate` HTTP header, and the user is prompted for credentials.

        -   **true**

            If you set this parameter to true, the browser does not ask the user to provide credentials. Instead, the client-side code can handle that challenge. In detail, the proxy changes the value of the HTTP header `WWW-Authenticate` from `BASIC` to `XHRBASIC`.

-   **Configuring a Boundary \(pass-through\) Proxy:**

    Use the following configuration parameters to make connections through a boundary \(pass-through\) proxy:

    -   **passthru\_host**

        This parameter defines the host name of the pass-through proxy.

    -   **passthru\_port**

        This parameter defines the port of the pass-through proxy.

    -   **passthru\_realm**

        This parameter is optional. It defines the authentication realm of the pass-through proxy.

    -   **passthru\_username**

        This parameter is optional. It defines the user name for the pass-through proxy.

    -   **passthru\_password**

        This parameter is optional. It defines the password for the pass-through proxy.


The following example shows a typical metadata setting:

```
<proxy-rules xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"    
    xsi:noNamespaceSchemaLocation="http://www.ibm.com/xmlns/prod/sw/http/outbound/proxy-config/2.0">
     <policy url="http://www.myremotehost.com/*" name="SamplePolicy">
          <actions><method>GET</method></actions>
     </policy>

     <meta-data>
          <name>socket-timeout</name>
          <value>10000</value>
     </meta-data>
     <meta-data>
          <name>retries</name>
          <value>2</value>
     </meta-data>
     <meta-data>
          <name>max-connections-per-host</name>
          <value>50</value>
     </meta-data>
     <meta-data>
          <name>max-total-connections</name>
     <value>100</value>
     </meta-data>
</proxy-rules>
```

**Parent topic:**[Description of the outbound HTTP connection configuration script](../dev-portlet/outbhttp_cfg_descript.md)

**Related information**  


[Configuring overlay reports](../admin-system/sa_asa_overlay_config.md)

