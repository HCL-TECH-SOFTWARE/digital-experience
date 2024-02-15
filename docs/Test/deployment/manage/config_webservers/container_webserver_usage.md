# Web server usage on DX containers

HCL Digital Experience containers support receiving and responding to requests from external web servers, which forward cookies (such as JSESSIONID, LtpaToken2, or any other required cookies) for a configuration.

The WebSphere Application Server web server plug-in is not used by the web server in a container environment for the configuration.

Routes must be configured for your Digital Experience deployment.

Following are context definitions in use. You may need to configure additional contexts that are application-specific.

-   `/wps` - can be changed by the installation. The context of DX Core.
-   `/dx` - static route to DX modules other than DX Core.
-   `/hcl`
-   `/ibm` - optional context, for externally accessing the WebSphere Administration console.
-   `/metrics` - optional context, for exposing Prometheus metrics for DX Core.
-   `/customerContextRoot` - optional context, can be used depending on customer requirements.

Sample configurations from a specific web server:

```
    # Preserve Host and allow TLS proxy
    ProxyPreserveHost On
    SSLProxyEngine On
```

```
    # Proxy rules for Core
    ProxyPass /wps/ https://<target container hostname>/wps/
    ProxyPassReverse /wps/ https://<target container hostname>/wps/
```

```
    # Proxy rules for DX applications outside Core (like DAM)
    ProxyPass /dx/ https://<target container hostname> /dx/
    ProxyPassReverse /dx/ https://<target container hostname> /dx/
```

<!--
**Parent topic:**[Web servers](../config/config_webservers.md)
-->

