# External security managers

HCL Digital Experience may be configured to rely upon external security managers to authenticate users and optionally authorize access to Digital Experience resources. If you use an external security manager, consider these –


## Recommended actions and considerations 

- Trust association interceptor is a WebSphere Application Server interface. Refer to [WebSphere Application Server documentation](https://www.ibm.com/docs/en/was/9.0.5?topic=infrastructure-developing-custom-tai) to ensure that the trust association interceptor is secure. 

- Verify that logging off clears both ESM cookies and WebSphere cookies (e.g. LTPAToken2 and JSESSIONID) from the cookie store of the browser. 

    - Portlet code like the following may be used to remove ESM cookies, in doHeaders(), as an alternative to an ESM logout page. This is a sample only:

Cookie[] cookies = request.getCookies();
        if (cookies != null)
        {
            for (Cookie cookie : cookies)
            {
                if (cookie.getName().equals(" Cookie1 ") ||
cookie.getName().equals(" Cookie2 ") ||
cookie.getName().equals(" Cookie3"))
                {
                    cookie.setPath(PATH);
                    cookie.setDomain(DOMAIN);
                    cookie.setMaxAge(0);
                    cookie.setValue

                    response.addProperty(cookie);
                }
            }
        }           

- [Externalizing resources](https://help.hcltechsw.com/digital-experience/8.5/security/tam_setup_esm.html) such that an external security manager (ESM) controls access/authorization is for administrative convenience only. Favor managing access natively within HCL Digital Experience if your business requirements allow it. If you must externalize access control, ensure that the communications link between Digital Experience and the ESM is secured. Refer to ESM documentation on hardening the ESM itself. 

- The timeout.resume.session and persistent.session.level configuration settings are often used to [avoid timing problems](https://support.hcltechsw.com/csm?id=kb_article&sys_id=967cabcbdba8705055f38d6d13961904&spa=1) with ESM session invalidation. If you set these, recognize that they effectively override the WebSphere Application Server inactive session timeout. Then, the onus is on the ESM to enforce inactive session timeouts.