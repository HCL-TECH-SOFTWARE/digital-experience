# Authentication mechanism

How can users log in to your application? HCL Digital Experience primarily relies upon IBM WebSphere Application Server components for authentication. In turn, WebSphere Application Server may trust an external security manager/trust association interceptor pair or other mechanism (e.g. SAML, SPNEGO) to authenticate users.

The main consideration from an HCL Digital Experience perspective is the way in which the application initially receives user credentials, often via the default login portlet or a custom login portlet. HCL Digital Experience also provides authentication filter interfaces which allow you to further customize the flow of authentication.

## Recommended actions and considerations 

• Ensure that user credentials (user name and password, generally) are encrypted during transmission. Minimally, these should be encrypted between the browser and web server. Ideally, these should be encrypted from the browser to the WebSphere Portal server and from WebSphere Portal to the user repository (LDAP server, generally). 

    ◦ Enable HTTPS for the default login portlet form POST or do the equivalent for any custom login portlet (see Enable HTTPS, above). 
    ◦ Secure communications between Digital Experience and the LDAP server (see the section on this topic, below). 

• Evaluate whether your application requires the automatic login URL: 

    ◦ The automatic login URL is: .../wps/portal/cxml/04_SD9ePMtCP1I800I_KydQvyHFUBADPmuQy?userid=userid&password=password
    ◦ The automatic login URL is suitable only for direct access by automated tools that cannot authenticate by any alternative means. 
    ◦ You may disable the automatic login URL altogether by setting custom property isLoginUrlActive=false (boolean) in the [Authentication Service](https://help.hcltechsw.com/digital-experience/8.5/admin-system/srvcfgref_secy_auth.html). 
    ◦ If your application requires the automatic login URL, then minimally block external access (to guard against certain spear-phishing attacks), by implementing a filter or rewrite rule on the web server, to the automatic login URL. 

• HCL Digital Experience offers only minimal controls over password strength (only length and valid characters), via the [PUMA Validation Service](https://help.hcltechsw.com/digital-experience/8.5/admin-system/srvcfgref_puma_validn.html). 
    ◦ Stricter controls would require custom code, most likely in the form of a custom registration/edit my profile portlet. 
    ◦ Alternatively, such controls could be enforced by the user repository itself (LDAP, generally). Discuss your options with the LDAP administrator.

• HCL Digital Experience does not limit the number of times a user may submit the wrong password, so does not guard against brute force password trials. 
    ◦ Since several applications may share the same user repository, the best place to guard against this is in the user repository itself. Many LDAP servers provide a way to lock users out after a certain number of failed logins. Discuss this with your LDAP administrator. 
    ◦ Optionally, a custom login portlet or custom authentication filter could help guard against this.

• HCL Digital Experience neither supports nor prevents multiple concurrent logins. If that is a requirement, consider [implementing custom code](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0012602) to prevent multiple logins. 
• The IBM Web Content Management (WCM) servlet comes with its own login.jsp. The WCM servlet will redirect the anonymous portal user to this login screen when using a myconnect URL. Usually, such URLs will be created only for authenticated users. Still, such URLs could be bookmarked or constructed independently of Digital Experience APIs. 

    ◦ Consider filtering or rewriting the following URL pattern at the web server: .../wps/wcm/webinterface/login/login.jsp.
    ◦ This is not a security vulnerability. This recommendation is only intended to limit exposures by blocking an extraneous path to log in to the system. You may be able to disable access to this JSP by following this [technote](https://support.hcltechsw.com/csm?id=kb_article&sys_id=b0466da61b5df34077761fc58d4bcb00).

• Refer to [Traditional WAS Security Hardening](https://community.ibm.com/community/user/wasdevops/blogs/james-mulvey1/2021/05/20/twas-security-hardening), parts 1 and 2, for most other authentication considerations. 
    ◦ Especially consider any trust association interceptors (TAI) for external security managers. 

• Refer to third-party documentation for other authentication mechanisms (OpenID Connect, SAML, Tivoli Access Manager, CA SiteMinder, SPNEGO, etc.). 
• Carefully evaluate the security implications of Transient Users, if enabled for [OpenID Connect](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0084411), SAML, etc. integration. 
    ◦ Login modules can choose to treat these as All Authenticated Portal Users or can establish group membership for the purpose of access controls. 
    ◦ What implications are there for other applications in an LTPA-based SSO domain?