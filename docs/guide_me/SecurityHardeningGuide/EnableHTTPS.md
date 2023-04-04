# Enable HTTPS

Clients communicate with HCL Digital Experience via [Hypertext Transfer Protocol](https://www.rfc-editor.org/rfc/rfc7230) (HTTP), for which you should review these basic [security considerations](https://www.rfc-editor.org/rfc/rfc7230#section-9). One major consideration is protecting sensitive information while it is in transit.

[Transport Layer Security](https://www.rfc-editor.org/rfc/rfc8446) (TLS, the successor to Secure Sockets Layer {SSL}) provides a means of securing communications over the Internet. Implemented effectively, TLS:

    ◦ Ensures confidentiality by encrypting communications to guard against eavesdropping
    ◦ Ensures confidentiality by guarding against [man-in-the-middle attacks](https://owasp.org/www-community/attacks/Manipulator-in-the-middle_attack)
    ◦ Helps ensure data integrity by guarding against replay attacks.

HTTP over TLS (HTTPS, commonly) allows web applications to use TLS to secure communications with clients. Since these communications include such sensitive information as application data and single sign-on (SSO) cookies, HCL recommends enabling HTTPS for Digital Experience. The [HCL Digital Experience Product Documentation](https://help.hcltechsw.com/digital-experience/8.5/security/ssl_intro.html) documents how to do this.

The procedure in the [Product Documentation](https://help.hcltechsw.com/digital-experience/8.5/security/ssl_intro.html) addresses the following common requirements:

• Encrypting all communications between the browser and web server for content served from the personalized home (wps/myportal, by default).

    ◦ The WebSphere Application Server plug-in forwards any requests received over HTTPS to the WCInboundDefaultSecure port of the application. Therefore, if the browser to web server communications are encrypted, the web server to application server communications will be encrypted as well, by default.
    ◦ Refer to the [WebSphere Application Server Knowledge Center](https://www.ibm.com/docs/en/was-nd/8.5.5?topic=communications-configuring-web-server-plug-in-ssl) for instructions on securing the connection between the web server plug-in and application server web container.

• Encrypting the HTTP POST with the user credentials in the default login portlet. If you use a custom login portlet, work with the portlet developer to ensure it similarly protects users' credentials.

## Recommended actions and considerations 

• Enable HTTPS per the [Product Documentation](https://help.hcltechsw.com/digital-experience/8.5/security/ssl_intro.html). 
    ◦ Additional [IBM HTTP Server technote](https://www.ibm.com/support/pages/guide-properly-setting-ssl-within-ibm-http-server), for reference ([alt.](https://www.ibm.com/support/pages/guide-properly-setting-ssl-within-ibm-http-server)). 

• Evaluate whether the common requirements listed above address all the security requirements for your application. In particular: 

    ◦ Consider whether your application needs to use HTTPS for all communications between the browser through the web server and to HCL Digital Experience. Doing so would protect sensitive data submitted or served under URLs other than .../wps/myportal (e.g. wps/portal, wps/um).

    ◦ Especially consider whether users register to your site with the default Registration portlet (i.e. Selfcare). If so, serve it from a page protected by HTTPS to protect sensitive user data. 

▪ Do one of: 
    1. Most simply (if the web server serves HCL Portal only), implement a rewrite rule on the web server to redirect all http://... Traffic to https://... .
    For example: <ifModule mod_rewrite.
                RewriteEngine on
                RewriteCond %{SERVER_PORT} =80
                RewriteRule ^(.*)
                https://%{SERVER_NAME}%{REQUEST_URI} [R]
                </ifModule>

    2. Or disable the web server listening on port 80 (HTTP) altogether and listen only on port 443 (HTTPS). 

    3. Alternatively, (if the web server serves multiple web applications which require HTTP/non-SSL), and [if the context has not been removed](https://help.hcltechsw.com/digital-experience/8.5/config/cfg_inst_overview.html), configure a rewrite rule on the web server to redirect any http://<webserver>/wps/... to https://<webserver>/wps/... 

        ◦ For the case where your web server serves multiple web applications, do likewise for any other URLs that might serve sensitive data. In the latest versions of HCL Digital Experience, most content is served under wps/* or a similar customized context. Check the URI Names in plugin-cfg.xml generated from HCL Digital Experience to see if any other URLs require similar rewrite rules for your application. 

        ◦ If you have one or several sensitive pages, but do not want to lock down all of wps/portal/*, then you may use friendly URLs and a security constraint (in web.xml) or redirect rule on, for example, redirecting http://.../wps/portal/tlsprotected to https://.../wps/portal/tlsprotected, assuming [friendly.redirect.enabled](https://help.hcltechsw.com/digital-experience/8.5/admin-system/srvcfgref_config.html)=true. If you are considering this approach, consider also whether you have any functional requirements for setting friendly.redirect.enabled=false.

▪ Block the WCInboundDefault port(s) with a firewall between the web server and WebSphere Portal. At the network level, allow communications only over WCInboundDefaultSecure.

    ▪ Using firewalls for this purpose is recommended because, at the time of this writing, the approach advocated by the WAS hardening guide for encrypting the web server to web container link is not feasible for HCL Digital Experience. 
    • Manually editing plugin-cfg.xml and removing: 

        <Transport ... Protocol="http"/> 
        from the server definitions would provide an additional guarantee (above and beyond the firewall) that the web server to web container link was encrypted. However, if you regenerated and redistributed the plugin, this would be overwritten. 

    • Providing that the firewall and/or plug-in routes exclusively to WCInboundDefaultSecure, you may optionally force HTTPS access through trusted web servers only. Such a requirement is not common. Refer to [the examples](https://developer.ibm.com/depmodels/cloud/#step14) and consider whether you have any similar requirements. Note that WCInboundDefault is still open, so restricting access at the operating system level would be important in any such implementation (i.e. guarding against nefarious requests to localhost).

    • Actual port numbers for WCInboundDefault, WCInboundDefaultSecure, etc. are available in the WebSphere Application Server Integrated Solutions Console > Application servers > WebSphere_Portal > Web container transport chains.

• Evaluate whether the accepted cipher suites meet your security requirements

    ◦ At the web server – if IBM HTTP Server, via the [SSLCipherSpec](https://www.ibm.com/docs/en/was-nd/8.5.5?topic=SSAW57_8.5.5/com.ibm.websphere.ihs.doc/ihs/tihs_setupssl.htm) directive.
    ◦ At the application server – via the [Quality of Protection](https://www.ibm.com/docs/en/was-nd/8.5.5?topic=SS7K4U_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/usec_sslqualprotect.html?cp=SSAW57_8.5.5) settings for all applicable SSL configurations.
    ◦ Consider this especially if you have a requirement for [FIPS](https://www.ibm.com/docs/en/was-nd/8.5.5?topic=securing-federal-information-processing-standard-support).

• If you run XMLAccess from a remote system, [use a secure connection](https://help.hcltechsw.com/digital-experience/8.5/admin-system/adxmltsk_cmdln_sntx_ssl.html). 
• Only if you off-load SSL, per the procedure in this [technote](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013088), evaluate whether this meets the security requirements for your application. Off-loading SSL terminates the secure tunnel at some proxy other than the web server. This means that anyone with access to the network between the SSL off-loader and HCL Portal could easily obtain sensitive data or otherwise alter these communications.