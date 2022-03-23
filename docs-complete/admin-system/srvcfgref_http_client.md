# HTTP Client Service 

Several components of the portal need to open HTTP or HTTPs connections to other resources. The portal HTTP Client Service provides a central point for configuration properties to these outbound connections. You can set global properties for the SSL configuration and proxy server usage.

In the WebSphere® Integrated Solutions Console, the portal HTTP Client Service is listed as **WP HTTPClientService**.

**Notes:**

1.  These properties do not currently replace all individual portlet proxy configuration properties. To set the proxy properties for specific portlets, consult the documentation for each portlet for how to modify their specific properties.
2.  Some functional components of the portal can overwrite each of the settings if the component configuration differs from the global value. The following describes the global settings only; if a component allows you to set component specific properties, these are described in the respective component documentation.

-   **global.ssl.configuration = \(NodeDefaultSSLConfig\)**

    Use this property to specify the name of an SSL configuration to be used for secure communication as defined in the WebSphere® Application Server security configuration.

-   **global.sso.domain = domain name**

    Use this property to specify the domain that starts with a dot, for example `.a.com` and denotes the range of hosts to which single-sign on cookies, such as LTPA, are forwarded from a client request. If the property is not set, single sign-on cookies are not forwarded to any remote host.

-   **global.proxy.http.host = host name**

    Use this property to specify a proxy host for HTTP URLs. If no proxy host is set, the portal tries to load all HTTP URLs directly.

-   **global.proxy.http.port = port number**

    Use this property to specify the port for the HTTP proxy. If no value is specified, 80 is used as the default value.

-   **global.proxy.https.host = host name**

    Use this property to specify a proxy host for HTTPs URLs. If no proxy host is set, HCL Portal tries to load all HTTPs URLs directly.

-   **global.proxy.https.port = port number**

    Use this property to specify the proxy port for HTTPs URLs. If no value is specified, 443 is used as the default value.

-   **global.proxy.auth.credentialslot = slot name**

    Set this property if you want proxy authentication to be used for connections that use a proxy server. You must provide the user ID and password in a credential slot of the portal credential vault. You then specify the name of this credential slot in this property. The credential must have the type `UserPasswordPassive`. Proxy authentication applies to the proxy server only, not to the target server of the outbound connection.

-   **global.proxy.excludehost = host name**

    Use this property to specify a particular host for which no proxy connection is used, even if a proxy is configured. You can set this property multiple times. Specify one setting for each host that is excluded from proxy connections.


**Parent topic:**[Portal service configuration ](../admin-system/srvcfgref.md)

