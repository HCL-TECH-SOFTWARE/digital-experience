# Customizing Client Cookie Forwarding 

A client can send cookies to the WSRP Consumer as part of an HTTP request. You can customize the WSRP Consumer to forward specific client cookies to the Producer ports or to other resources that are served by the WSRP Consumer as a proxy.

By default the WSRP Consumer does not forward client cookies to WSRP Producers or other resources. To customize the WSRP Consumer to forward specific client cookies, proceed as follows:

1.  Set the following property in the HTTP Client Service:

    ```
    wsrp.consumer.cookieforward.cookiename = hostdomainnames [; cookiepriority]
    ```

    Specify a separate property for each client cookie that you want to be forwarded.

2.  Restart the portal or the cluster for the new setting to become active.


Description:

-   **wsrp.consumer.cookieforward.cookiename = hostdomainnames \[; cookiepriority\]**

    This property defines a cookie forwarding rule for the cookie that is identified by the value for cookiename. The cookie forwarding rule specifies a list of host names and domain names and optionally specifies the cookie priority.

    -   **cookiename**

        The value for cookiename must match the cookie name literally.

    -   **hostdomainname**

        This setting comprises a comma-separated list of host names and domain names. The cookie is forwarded to Producers whose WSRP endpoint address URLs match to entries in the host domain name list. The WSRP Consumer also forwards the client cookies to resources that are served by the WSRP Consumer as a proxy and whose URLs accord to the host domain name list. The host domain name can contain host names, such as alpha.company.com, or domain names that are identified by a leading period \( **.** \) such as .sample.com. The WSRP Consumer literally matches the host domain names to the Producer WSRP endpoint address URLs and resource URLs. It does not translate IP addresses into host domain names or vice versa.

    -   **cookiepriority**

        This setting is optional. You can use it to specify the cookie priority. The WSRP Consumer uses the cookie priority to control how priority conflicts between client cookies and producer set cookies with identical names are resolved. Valid values are as follows:

        -   **clientfirst**

            This priority setting directs the WSRP Consumer to prioritize a client cookie over an identically named cookie that was set by the Producer. In other words, it instructs the WSRP Consumer to send the client cookie to the WSRP Producer or to the Producer resource, rather than to send the Producer cookie.

        -   **clientlast**

            This priority setting directs the WSRP Consumer to prioritize a cookie that was set by the WSRP Producer over a client cookie. In other words, it instructs the WSRP Consumer to send the cookie that was set by the WSRP Producer to the WSRP Producer or to the Producer resource, rather than to send the client cookie. This value is the default priority value. For example, it is applied if the cookie priority is not specified in the cookie forwarding rule.


Example properties that contain cookie forwarding rules are as follows:

-   **wsrp.consumer.cookieforward.SAMPLECOOKIE = alpha.company.com,.sample.org**

    With this setting, the WSRP Consumer forwards the client cookie named `SAMPLECOOKIE` to the host `alpha.company.com` and to all hosts contained in the domain `sample.org`. It assumes the default cookie priority `clientlast` .

-   **wsrp.consumer.cookieforward.COOKIE2 = .myorg.com,beta.sample.com;clientfirst**

    With this setting, the WSRP Consumer forwards the client cookie named `COOKIE2` to the host `beta.sample.com` and to all hosts in the domain `myorg.com`. It gives client cookies first priority.


**Note:** The WSRP Consumer does not send cookies when it requests the WSDL service description documents from a Producer.

**Parent topic:**[Customizing the WSRP configuration of your Consumer portal](../admin-system/wsrpt_cons_cust.md)

**Related information**  


[Securing the WSRP Consumer by HTTP-cookie-based single sign-on ](../admin-system/wsrpt_cons_sec_ws_http_cb_sso.md)

[Cookie support ](../admin-system/wsrpc_cookie.md)

[Setting service configuration properties ](../admin-system/adsetcfg.md)

