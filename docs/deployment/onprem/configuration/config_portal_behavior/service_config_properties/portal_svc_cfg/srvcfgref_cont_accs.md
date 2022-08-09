# Content Access Service

Portlets can access content from remote systems that are located on the other side of a firewall by invoking the portal Content Access Service. If you configure properties of the Content Access Service, these settings applies only to the portlets that call this service.

In the WebSphere® Integrated Solutions Console, the portal Content Access Service is listed as **WP ContentAccessService**.

You can configure the properties of the portal Content Access Service at either of the following locations:

-   Under the **WP PortletServiceRegistryService** in the WebSphere Integrated Solutions Console.
-   In the property file PortletServiceRegistryService.properties under the items beginning with com.ibm.wps.pe.pc.legacy.service.ContentAccessServiceImpl.

-   **com.ibm.wps.pe.pc.legacy.service.ContentAccessServiceImpl.no.proxy.for =**

    Specifies host names for which ContentAccessServices does not use a proxy, even if a proxy is configured. Values must be separated by semicolon \( **;** \). Wildcards are not supported.

    Example: com.ibm.wps.pe.pc.legacy.service...no.proxy.for =localhost;127.0.0.1

-   **com.ibm.wps.pe.pc.legacy.service.ContentAccessServiceImpl.protocol.handlers =**

    Assigns additional URL protocol handlers that Java uses to handle connections to various URL protocols. Values must be separated by a vertical bar \( **\|** \). The default is usually sufficient, as it supplies a handler for HTTPs URLs.

    Example: com.ibm.wps.pe.pc.legacy.service...ServiceImpl.protocol.handlers = com.ibm.net.ssl.internal.www.protocol


## Proxy protocol and port properties

The following properties allow you to specify proxy protocol and port settings for different protocols. You must specify for each protocol the name and port number of the proxy servers that you use. The general format is as follows:

-   **com.ibm.wps.pe.pc.legacy.service.ContentAccessServiceImpl.proxy.http.host = hostname**

    Specifies an HTTP proxy host for HTTP URLs.

-   **com.ibm.wps.pe.pc.legacy.service.ContentAccessServiceImpl.proxy.http.port = port number**

    Specifies the port for the HTTP proxy. If this is not specified, 80 is used as the default value.

-   **com.ibm.wps.pe.pc.legacy.service.ContentAccessServiceImpl.proxy.https.host**

    Specifies an HTTP proxy host for HTTPs URLs. The proxy must support CONNECT requests, otherwise known as 'tunneling' requests.

-   **com.ibm.wps.pe.pc.legacy.service.ContentAccessServiceImpl.proxy.https.port**

    Specifies the port for the HTTP proxy. If this is not specified, 80 is used as the default value.

-   **com.ibm.wps.pe.pc.legacy.service.ContentAccessServiceImpl.socks4.host**

    Specifies a SOCKS V4 proxy host for any URL.

-   **com.ibm.wps.pe.pc.legacy.service.ContentAccessServiceImpl.socks4.port**

    Specifies the port. If this is not specified, 1080 is used as the default value.

-   **com.ibm.wps.pe.pc.legacy.service.ContentAccessServiceImpl.socks5.host**

    Specifies a SOCKS V5 proxy host for any URL.

-   **com.ibm.wps.pe.pc.legacy.service.ContentAccessServiceImpl.socks5.port**

    Specifies the port. If this is not specified, 1080 is used as the default value.

-   **com.ibm.wps.pe.pc.legacy.service.ContentAccessServiceImpl.proxy.auth.enabled**

    Specifies whether authentication should be tried for proxied connections. This applies to the proxy server, not to the origin server from which the Content Access Service is fetching. Also, this only applies to HTTP proxy \(with settings from proxy.http.\* and proxy.https.\*\) and SOCKS proxy \(with settings from proxy.socks4.\* and proxy.socks5.\*\).

-   **com.ibm.wps.pe.pc.legacy.service.ContentAccessServiceImpl.proxy.auth.credentialslot**

    Specifies whether proxy authentication should be used for connections that use a proxy server. You must provide the user ID and password in a credential slot of the portal credential vault. You must also specify the name of this slot in the content access service configuration. The credential must have the type UserPasswordPassive. Proxy authentication applies to the proxy server, not to the origin server from which the ContentAccessService is fetching. Also, this only applies to HTTP proxy \(with settings from proxy.http.\* and proxy.https.\*\) and SOCKS proxy \(with settings from proxy.socks4.\* and proxy.socks5.\*\).


If no proxy host is set, HCL Portal tries to load all URLs directly. If no port is set, the default port for HTTP \(80\) is used. Alternatively, you can socksify the TCP/IP stack of your system. Examples:

The name of the HTTP proxy host:

```
com.ibm.wps.pe.pc.legacy.service.ContentAccessServiceImpl.proxy.http.host = host.somewhere.ibm.com
```

The name of the HTTP proxy port:

```
com.ibm.wps.pe.pc.legacy.service.ContentAccessServiceImpl.proxy.http.port = 80
```

The name of the tunneling HTTPs proxy host:

```
com.ibm.wps.pe.pc.legacy.service.ContentAccessServiceImpl.proxy.https.host = securehost.somewhere.ibm.com
```

The name of the HTTPs proxy port:

```
com.ibm.wps.pe.pc.legacy.service.ContentAccessServiceImpl.proxy.https.port = 443
```

**Parent topic:**[Portal service configuration](../admin-system/srvcfgref.md)

