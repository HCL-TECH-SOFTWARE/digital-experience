# Customizing the WSRP resource proxy for proxy server support

The WSRP resource proxy supports HTTP proxy servers. It can connect directly to remote resources or to a proxy server that forwards the requests to remote resources.

By default, the global proxy configuration as defined in the HTTP Client Service properties is taken for the WSRP resource proxy as well. To specify a different proxy configuration for the WSRP resource proxy only, you can overwrite the global configuration by setting a combination of the following properties in the HTTP Client Service:

-   **wsrp.resourceproxy.proxy.http.host**

    Use this property to specify a proxy host for HTTP URLs. If no proxy host is set, the portal tries to load all HTTP URLs directly.

-   **wsrp.resourceproxy.proxy.http.port**

    Use this property to specify the port for the HTTP proxy. If no value is specified, 80 is used as the default value.

-   **wsrp.resourceproxy.proxy.https.host**

    Use this property to specify a proxy host for HTTPs URLs. If no proxy host is set, HCL Portal tries to load all HTTPs URLs directly.

-   **wsrp.resourceproxy.proxy.https.port**

    Use this property to specify the proxy port for HTTPs URLs. If no value is specified, 443 is used as the default value.

-   **wsrp.resourceproxy.proxy.auth.credentialslot**

    Set this property if you want proxy authentication to be used for connections that use a proxy server. You must provide the user ID and password in a credential slot of the portal credential vault. You then specify the name of this credential slot in this property. The credential must have the type `UserPasswordPassive`. Proxy authentication applies to the proxy server only, not to the target server of the outbound connection.

-   **wsrp.resourceproxy.proxy.excludehost**

    Use this property to specify a particular host for which no proxy connection is used, even if a proxy is configured. You can set this property more than once. Specify one setting for each host that is excluded from proxy connections.


**Note:** You can explicitly set no value for a property that has a value in the global configuration. To do so, specify the value none to overwrite the global configuration value. Restart the portal or the cluster for the changes to take effect.

**Parent topic:**[Customizing the WSRP resource proxy](../admin-system/wsrpt_cons_res_proxy.md)

