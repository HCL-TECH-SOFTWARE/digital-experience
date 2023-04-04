# Guard your cookies

Cookies enable single sign-on (SSO) and session tracking in HCL Digital Experience. Unauthorized parties could circumvent certain security controls given access to:

LTPAToken2: Lightweight Third-Party Authentication: IBM WebSphere Application Server relies on this cookie for Single Sign-On (SSO). WebSphere Application Server considers a client to be authenticated if it presents a valid LTPAToken2.

JSESSIONID: from the Java Servlet specification: The session management of Digital Experience uses this cookie.

!!! note
    These are the default names for these cookies, though you may customize them in recent versions of HCL Digital Experience and IBM WebSphere Application Server.

## Recommended actions and considerations 

• Enable HTTPS, as described above. 
• Define the domain attribute value for these cookies as narrowly as your functional requirements permit. 
    ◦ Leave these unset, unless you have a specific requirement for SSO or sharing session identifiers. If no domain is set on a cookie, the browser should submit it only with requests to the server that set it. 
    ◦ If your functional requirements dictate that you set the domain, use the following paths in WebSphere Application Server Integrated Solutions Console: 
        ▪ LTPAToken2/domain: Global security > Single sign-on (SSO) > Domain name 
        ▪ JSESSIONID/domain: Application servers > WebSphere_Portal > Session management > Cookies > Cookie domain 

• Set the Secure attribute on these cookies. This tells the browser to present these cookies only over HTTPS. In the WebSphere Application Server Integrated Solutions Console: 
    ◦ LTPAToken2/Secure: Global security > Single sign-on (SSO) > Requires SSL 
    ◦ JSESSIONID/Secure: Application servers > WebSphere_Portal > Session management > Cookies > Restrict cookies to HTTPS sessions 

• Set the HTTPOnly attribute on these cookies, if your functional requirements permit. This tells the browser to disallow access to JavaScript and can help guard against certain types of cross-site scripting (XSS) attacks. In the WebSphere Application Server Integrated Solutions Console: 
    ◦ LTPAToken2/HTTPOnly: Global security > Single sign-on (SSO) > Set security cookies to HTTPOnly to help prevent cross-site scripting attacks 
    ◦ JSESSIONID/HTTPOnly: Application servers > WebSphere_Portal > Session management > Cookies > Set session cookies to HTTPOnly to help prevent cross-site scripting attacks ▪ Some applications may require access to the session identifier on the client-side. If your custom javascript needs access to JSESSIONID, you should not set HTTPOnly on that cookie. Rather, rely on security integration and XSS protections to guard the session.

• Consider setting SameSite on these cookies as a mitigation against cross-site request forgery (CSRF/XSRF). 
• Set the LTPAToken2 expiration as short as your functional requirements permit. 
    ◦ While a client presents a valid LTPAToken2, WebSphere Application Server considers the user authenticated. 
    ◦ Expiration is encoded into the LTPAToken2 value and is not part of the Set-Cookie directive. 
    ◦ The default LTPAToken2 expiration is 2 hours (120 minutes). 
    ◦ In the WebSphere Application Server Integrated Solutions Console > Global security > LTPA > LTPA timeout 

• Set the inactive session timeout as short as your functional requirements permit. 
    ◦ The default is 30 minutes. 
    ◦ In the WebSphere Application Server Integrated Solutions Console > Application servers > WebSphere_Portal > Session management > Session timeout ◦ Test and verify the inactive session timeout. If it does not work as expected, check UseInvalidatedId. 

• Disable LTPA interoperability mode. 
    ◦ Interoperability mode sets another cookie (LTPAToken, by default) with lesser encryption than LTPAToken2. LTPAToken is not as secure as LTPAToken2. It is generally used for SSO to legacy systems. 
    ◦ In the WebSphere Application Server Integrated Solutions Console > Global security > Single sign-on (SSO) > Interoperability mode

• Enable Security Integration (this is enabled by default in v8.5+) 
    ◦ This tightly binds the user identity (LTPAToken2) with the session (JSESSIONID). 
    ◦ Application servers > WebSphere_Portal > Session management > Security integration 
    ◦ This is especially important if HttpSessionIdReuse has been enabled. ◦ Certain errors may occur if an authenticated user tries to access an anonymous session. To guard against such errors, configure WebSphere Application Server to use available authentication data (enabled by default in v8.5+): 
        ▪ In the WebSphere Application Server Integrated Solutions Console > Global security > Web security - General settings > Use available authentication data when an unprotected URI is accessed 

• Consider setting HTTPOnly for any other cookies your application might leverage, at the web container level. 

• If the controls above prove insufficient for any application cookies, consider setting attributes at the web server (with mod_headers.so): 
    Header edit Set Cookie ^(.*)$ $1;HttpOnly;Secure
    or: 
    Header set Set Cookie HttpOnly;Secure