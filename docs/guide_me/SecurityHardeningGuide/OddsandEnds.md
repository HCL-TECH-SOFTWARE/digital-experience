# Odds and Ends

Consider the following items which do not directly relate to the categories above.

## Recommended actions and considerations

• Maintain a regular schedule for updating administrative passwords.
• Maintain a regular schedule for updating LTPA keys.
• Run Digital Experience as a non-root user.
• Restrict access to log files at the operating system level.
• Work with the database administrator to ensure that the rights assigned to Digital Experience’s database user adhere to the principle of least privilege. While administrative rights may be required during initial configuration, Digital Experience should not act as a database administrative user at [run-time](https://help.hcltechsw.com/digital-experience/8.5/plan/dbusers_common.html).
• Should your application prevent users from seeing Digital Experience or WebSphere Application Server error messages (e.g. stack traces associated with HTTP 500 errors)? Should your application serve custom, generic error pages instead? If so, consider using a [proxy server and special error page application](https://www.ibm.com/support/pages/websphere-customized-error-pages).
• Review who can access the [Configuration Wizard](https://help.hcltechsw.com/digital-experience/8.5/config/cw_overview.html) and adjust its security settings as needed. Security for the Configuration Wizard is entirely separate from Digital Experience security (it has its own profile). Manage these security settings via WebSphere Application Server administrative tools.
• When running configuration tasks, favor specifying passwords in properties files rather than at the command line. If you specify passwords in properties files, be sure to delete these passwords after running the configuration tasks. Restrict access to these properties files with operating system controls (e.g. chmod).
    !!! note 
        [ConfigEngine properties](https://help.hcltechsw.com/digital-experience/8.5/properties/wkplc-dita.html) files do not currently support encrypted passwords.
• As a general precaution, apply the property com.ibm.ws.webcontainer.disallowserveservletsbyclassname=true (which disables the serving of servlets by classname at the application server level) according to the description in the flash related to WAS APAR PK52059. Application developers should explicitly disallow serving servlets by classname.
    ◦ [CVE-2015-1927](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-1927) from WebSphere Application Server changes the default to be secure. Also see [this bulletin](https://www.ibm.com/support/pages/security-bulletin-multiple-security-vulnerabilities-fixed-ibm-websphere-application-server-80011).
• Should administrators run XMLAccess through the web server? If not, filter out .../wps/config and .../wps/config/* requests at the web server (if customized, substitute your actual custom context root for “wps”).
• In the spirit of the recommendation in the WebSphere Application Server Hardening Guide to not run samples in production, consider disabling unused applications. Engage HCL Support for assistance, if needed.
• HCL [recommends against using the file repository in a production environment](https://help.hcltechsw.com/digital-experience/8.5/plan/plan_ureg.html). If you choose to use the file repository, consider access controls on fileRegistry.xml and the strength of encryption of passwords stored in this file.
• Use caution if your application leverages Cross Origin Resource Sharing ([CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)) or if you [disable CORS support for WSRP functionality](https://help.hcltechsw.com/digital-experience/8.5/wcm/wcm_config_wcmviewer_wsrp_cors.html). [Extend the trust domain](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0077396) of Digital Experience to the least possible extent.
• Regarding cross-site request forgery (CSRF, XSRF), consider:
    ◦ Setting the SameSite attribute on cookies (see Guard your cookies section).
    ◦ Requests to Digital Experience REST services to modify resources require HTTP PUT, DELETE, or POST (with XML data) which the same origin policies of modern browsers should prevent other sites from compromising. HTTP POST with no data would be allowed, but any returned data could not be processed by the other sites' scripts and such a POST would not modify Digital Experience resources.
        ▪ Digital Experience uses these REST services for some functionality, including certain elements of the default theme.
        ▪ Some organizations' security policies restrict the HTTP verbs their web servers support. If your web server is so restricted, tunnel such requests by setting [x-method-override.enabled](https://help.hcltechsw.com/digital-experience/8.5/admin-system/srvcfgref_config.html).

    ◦ A different site could induce HTTP GET requests, but same-origin policies of modern browsers should prevent the site's scripts from accessing any data returned.
    ◦ Action identifiers are encoded in portlet action URLs, which are tightly bound to the current session. Monitor SystemOut.log for indications of [attempts at actual replay attacks](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013321). Any such attempts should be blocked by the state preprocessor of Digital Experience.

• As you did with the Outbound HTTP Connection, identify all other sources of content on your Digital Experience pages. Similar considerations exist for the Web Application Bridge (WAB), WSRP, and ATOM feeds. Note that WAB uses iframes, to which modern browsers generally apply [same origin policies](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy), depending on X-Frame-Options.

• Evaluate whether the configuration of Digital Experience meets your requirements for implicit logouts. The term implicit logout may refer to when an authenticated user (valid LTPAToken2) requests unprotected content (e.g. .../wps/portal/...) - with certain configurations Digital Experience will log out the user (i.e. expire LTPAToken2 and JSESSIONID from the cookie store of the browser). Other conditions may trigger implicit logouts as well. The configuration points to consider are:
    ◦ [uri.home.substitution](https://help.hcltechsw.com/digital-experience/8.5/admin-system/srvcfgref_config.html)
    ◦ [logout.user.onpublic](https://help.hcltechsw.com/digital-experience/8.5/admin-system/srvcfgref_config.html)

• Ensure that communications between Digital Experience and its database are secured. Refer to [part 1 item 29](https://community.ibm.com/community/user/wasdevops/blogs/james-mulvey1/2021/05/20/twas-security-hardening).
    ◦ Encrypting these communications may require a JDBC Type 2 Driver to avoid [certain problems](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0077070), though type 2 drivers are deprecated in WebSphere Application Server 8.5.
    ◦ Refer to JDBC driver documentation for details on its security configuration. For example, with DB2 and JDBC type 4, encryptionAlgorithm and ENCRYPTED_USER_PASSWORD_AND_DATA_SECURITY are of particular importance.
    ◦ If encrypting this link is not feasible, otherwise ensure the security of the network.

• If any external search crawler authenticates to Digital Experience to traverse protected content, ensure that the user has [read-only access](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013255) to Digital Experience resources.
• Any search user should have read-only access to the application. Test the search application to verify functionality.
• There should be no confidential information in the unique name of any portal object (pages, portlets, etc). To check:
    ◦ Export the configuration:
        ▪ <portal>/bin/xmlaccess.sh -in <portal>/doc/xml-samples/Export.xml -out exportResults.xml -url http://<server>:<port>/wps/config
        ▪ Search exportResults.xml for uniquename= and confirm that none of the unique names in the system include confidential or otherwise sensitive data.
• To guard against [Clickjacking](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html), add the X-Frame-Options header via a web server directive. If this is not feasible with your web server of choice, then consider implementing [defensive scripts](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html) in your custom theme.

• To guard against various forms of [host header attacks](https://www.skeletonscribe.net/2013/05/practical-http-host-header-attacks.html) against the Digital Experience server, consider:
    ◦ Setting host.name in [WP ConfigService](https://help.hcltechsw.com/digital-experience/8.5/admin-system/srvcfgref_config.html).
    ◦ Specifying [virtual hosts](https://www.ibm.com/docs/en/was-nd/8.5.5?topic=servers-configuring-virtual-hosts) in WebSphere Application Server.
    ◦ Similar configuration may be required on the web server, external security manager, or other proxies. For example, IBM HTTP Server can be configured to ignore the Host header by setting UseCanonicalName ON.
    ◦ Such settings may limit your application in generating self-referential URLs. Users could be forced to use a specific host name (host.name) or set of host names (virtual hosts) when navigating the application. Consider which host names your application requires (e.g. direct access, virtual portals) when configuring these items.

• Utilize HTTP Headers as appropriate for your installation. Refer to this [list from OWASP](https://owasp.org/www-community/Security_Headers). Consider especially:
    ◦ X-XSS-Protection : Digital Experience default content works with a setting of 'X-XSS-Protection: 1; mode=block'.
    ◦ X-Frame-Options : Digital Experience default content works with a setting of 'X-Frame-Options: sameorigin'
    ◦ X-Content-Type-Options : Digital Experience out of the box content works with a setting of 'X-Content-Type-Options: nosniff'
    ◦ Implement via [mod_headers](https://publib.boulder.ibm.com/httpserv/manual70/mod/mod_headers.html) (late processing), a servlet filter, or both.

• Verify the [java.security](https://www.ibm.com/support/pages/websphere-application-server-javasecurity-file) file on your system.
• In the WebSphere Application Server Integrated Solutions Console, under Security > Global Security > Authentication cache settings, set [Use basic authentication cache keys](https://www.ibm.com/docs/en/was-nd/8.5.5?topic=domains-authentication-cache-settings) to false. Otherwise, the checkPassword() method of the LoginService interface could have unexpected results.
• Consider configuring [HTTP/2](https://support.hcltechsw.com/csm?id=community_question&sys_id=b515657a1bcffb44c1f9759d1e4bcb60) between browsers and the web server, to guard against [HTTP Desync](https://portswigger.net/research/http-desync-attacks-request-smuggling-reborn) attacks.
• Web browsers may retain user IDs and passwords [in memory](https://cwe.mitre.org/data/definitions/316.html). Generally, if browser memory is compromised, other attacks could easily be undertaken. Still, it would be best practice to close the browser to clear the memory, and you may choose to encourage users to do so on your logout page. You may also instruct users not to submit memory dumps for analysis. The design of the default Login portlet and WebSphere Application Server subcomponent VMM preclude any remediation, other than a custom login portlet and custom user repository that both leverage salted hashing of passwords.
• Configure [blacklists and whitelists](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013818) appropriately for your applications, to guard against path traversal.

• In Digital Experience 9.5, the Practitioner Studio theme is intended for use in Practitioner Studio only. Do not assign this theme to pages which non-administrators can access. Do not use the Practitioner Studio theme as the basis for any custom themes.
• IBM WebSphere Application Server [cannot block HTTP methods](https://www.ibm.com/support/pages/can-http-methods-be-enableddisabled-websphere-application-server), so block any invalid or unwanted HTTP methods at the [web server](https://publib.boulder.ibm.com/httpserv/manual24/mod/mod_allowmethods.html).
• Disable remote access to WCM Modules by setting the following in [WCM WCMConfigService](https://help.hcltechsw.com/digital-experience/8.5/admin-system/srvcfgwcmref_config.html):
        connect.businesslogic.module.<modulename>.remoteaccess = false
    For example, for the [delete libraries tool](https://help.hcltechsw.com/digital-experience/8.5/wcm/wcm_admin_library_delete.html).

• Digital Experience introduced support for [Content Security Policy](https://help.hcltechsw.com/digital-experience/8.5/security/content_security_policy.html) (CSP) in CF192. Consider enabling this as a mitigation against cross-site scripting (XSS). While the onus remains on the application code that contributes markup, CSP offers defense-in-depth if any XSS vulnerabilities are present in application code.
• [Suppress sensitive headers](https://www.ibm.com/support/pages/apar/PH47287) from IBM WebSphere Application Server tracing. For example:
    ◦ com.ibm.ws.webcontainer.suppressheadersinrequest=Authorization
    ◦ if there are multiple values, delimit with a comma
    ◦ To specify web container custom properties:
        ▪ In the administrative console click Servers > Server Types > WebSphere application servers > server_name > Web Container Settings > Web container.
        ▪ Under Additional Properties select Custom Properties.
        ▪ On the Custom Properties page, click New.