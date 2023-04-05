# Guard your cookies

[Cookies](https://www.rfc-editor.org/rfc/rfc6265) enable single sign-on (SSO) and session tracking in HCL Digital Experience. Unauthorized parties could circumvent certain security controls given access to:

LTPAToken2 ([Lightweight Third-Party Authentication](https://www.ibm.com/docs/en/was/9.0.5?topic=mechanism-lightweight-third-party-authentication)): IBM WebSphere Application Server relies on this cookie for Single Sign-On (SSO). WebSphere Application Server considers a client to be authenticated if it presents a valid LTPAToken2.

JSESSIONID ([Java Servlet specification](https://www.oracle.com/java/technologies/servlet-technology.html)): The session management of Digital Experience uses this cookie.

!!! note
    These are the default names for these cookies, though you may customize them in recent versions of HCL Digital Experience and IBM WebSphere Application Server.

## Recommended actions and considerations 

• Enable HTTPS, as described above. 
• Define the domain attribute value for these cookies as narrowly as your functional requirements permit. 
    ◦ Leave these unset, unless you have a specific requirement for SSO or sharing session identifiers. If no domain is set on a cookie, the browser should submit it only with requests to the server that set it. 
    ◦ If your functional requirements dictate that you set the domain, use the following paths in WebSphere Application Server Integrated Solutions Console: 
        ▪ LTPAToken2/domain: Global security > Single sign-on (SSO) > [Domain name](https://www.ibm.com/docs/en/was/9.0.5?topic=users-configuring-single-sign) 
        ▪ JSESSIONID/domain: Application servers > WebSphere_Portal > Session management > Cookies > [Cookie domain](https://www.ibm.com/docs/en/was/9.0.5?topic=tracking-cookie-settings) 

• Set the Secure attribute on these cookies. This tells the browser to present these cookies only over HTTPS. In the WebSphere Application Server Integrated Solutions Console: 
    ◦ LTPAToken2/Secure: Global security > Single sign-on (SSO) > [Requires SSL](https://www.ibm.com/docs/en/was/9.0.5?topic=users-configuring-single-sign) 
    ◦ JSESSIONID/Secure: Application servers > WebSphere_Portal > Session management > Cookies > [Restrict cookies to HTTPS sessions](https://www.ibm.com/docs/en/was/9.0.5?topic=tracking-cookie-settings) 

• Set the HTTPOnly attribute on these cookies, if your functional requirements permit. This tells the browser to disallow access to JavaScript and can help guard against certain types of cross-site scripting (XSS) attacks. In the WebSphere Application Server Integrated Solutions Console: 
    ◦ LTPAToken2/HTTPOnly: Global security > Single sign-on (SSO) > Set security cookies to HTTPOnly to help prevent cross-site scripting attacks 

    ◦ JSESSIONID/HTTPOnly: Application servers > WebSphere_Portal > Session management > Cookies > [Set session cookies to HTTPOnly to help prevent cross-site scripting attacks](https://www.ibm.com/docs/en/was/9.0.5?topic=tracking-cookie-settings) 
        ▪ Some applications may require access to the session identifier on the client-side. If your custom javascript needs access to JSESSIONID, you should not set HTTPOnly on that cookie. Rather, rely on security integration and XSS protections to guard the session.

• Consider setting [SameSite](https://www.ibm.com/support/pages/apar/PH22157) on these cookies as a mitigation against cross-site request forgery (CSRF/XSRF). 
• Set the LTPAToken2 expiration as short as your functional requirements permit. 
    ◦ While a client presents a valid LTPAToken2, WebSphere Application Server considers the user authenticated. 
    ◦ Expiration is encoded into the LTPAToken2 value and is not part of the Set-Cookie directive. 
    ◦ The default LTPAToken2 expiration is 2 hours (120 minutes). 
    ◦ In the WebSphere Application Server Integrated Solutions Console > Global security > LTPA > [LTPA timeout](https://www.ibm.com/docs/en/was/9.0.5?topic=keys-configuring-ltpa-authentication-mechanism) 

• Set the inactive session timeout as short as your functional requirements permit. 
    ◦ The default is 30 minutes. 
    ◦ In the WebSphere Application Server Integrated Solutions Console > Application servers > WebSphere_Portal > Session management > Session timeout ◦ Test and verify the inactive session timeout. If it does not work as expected, check [UseInvalidatedId](https://www.ibm.com/docs/en/was-nd/8.5.5?topic=tracking-session-management-custom-properties#UseInvalidatedId). 

• Disable [LTPA interoperability mode](https://www.ibm.com/docs/en/was/9.0.5?topic=users-configuring-single-sign). 
    ◦ Interoperability mode sets another cookie (LTPAToken, by default) with lesser encryption than LTPAToken2. LTPAToken is not as secure as LTPAToken2. It is generally used for SSO to legacy systems. 
    ◦ In the WebSphere Application Server Integrated Solutions Console > Global security > Single sign-on (SSO) > Interoperability mode

• [Enable Security Integration](https://www.ibm.com/docs/en/was/9.0.5?topic=applications-session-security-support) (this is enabled by default in v8.5+) 
    ◦ This tightly binds the user identity (LTPAToken2) with the session (JSESSIONID). 
    ◦ Application servers > WebSphere_Portal > Session management > Security integration 
    ◦ This is especially important if HttpSessionIdReuse has been enabled. ◦ Certain errors may occur if an authenticated user tries to access an anonymous session. To guard against such errors, configure WebSphere Application Server to [use available authentication data](https://www.ibm.com/docs/en/was-nd/8.5.5?topic=users-selecting-authentication-mechanism) (enabled by default in v8.5+): 

        ▪ In the WebSphere Application Server Integrated Solutions Console > Global security > Web security - General settings > Use available authentication data when an unprotected URI is accessed 

• Consider setting HTTPOnly for any other cookies your application might leverage, at the [web container level](https://www.ibm.com/docs/en/was/9.0.5?topic=configuration-web-container-custom-properties#blockingjavascriptaccess). 

• If the controls above prove insufficient for any application cookies, consider setting attributes at the web server (with [mod_headers.so](https://publib.boulder.ibm.com/httpserv/manual70/mod/mod_headers.html)): 
    Header edit Set Cookie ^(.*)$ $1;HttpOnly;Secure
    or: 
    Header set Set Cookie HttpOnly;Secure