# Comprehensive Security Planning

HCL Digital Experience is a platform upon which to build an application. You can integrate it into a wide variety of digital ecosystems. The extent to which you may customize HCL Digital Experience and associated security functions in IBM WebSphere Application Server is nearly endless. Your approach to security hardening your application should encompass:

• HCL Digital Experience

• [IBM WebSphere Application Server](https://www.ibm.com/docs/en/was-nd/8.5.5?topic=environment-tuning-hardening-maintaining-security-configurations)

• Custom code (themes, portlets, filters, etc.)

• Operating system (client and server)

• [Container platform](https://help.hcltechsw.com/digital-experience/9.5/containerization/deployment.html) (if applicable)

• [Web clients](https://code.google.com/archive/p/browsersec/wikis/Main.wiki) (e.g. browsers)

• Web servers and load balancers

• External security managers or other identity providers

• Back-end applications, such as databases, LDAP servers, etc.

• Network security (including DNS, TCP/IP, etc.)

• Physical security

## Recommended actions and considerations

- Compile and prioritize the security requirements for your application.

- Diagram your application and its environment. Identify the major components.

- Identify component owners within and beyond your organization. Who is responsible for the security of, or otherwise has control over the following:
    - the network, including firewalls

    - the web server

    - the LDAP server

    - any external security manager or other proxies

    - any identity providers

    - the database server

    - other back-end servers (integrated via Web Application Bridge, WSRP, etc.)

    - any custom themes

    - any custom portlets

    - other custom code (authentication filters, vault adapters, etc.)

    - clients (operating systems, browsers)

- Read [Traditional WAS Security Hardening](https://community.ibm.com/community/user/wasdevops/blogs/james-mulvey1/2021/05/20/twas-security-hardening), parts 1 and 2, for an overview of security hardening.

    - Make note of topics you think might affect your application.
    
    - After following this Security Hardening Guide for HCL Digital Experience, circle back and address any remaining items.

    - Pay special attention to the introductory sections that address infrastructure.

- Read [Web security concepts and considerations](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0085886) for an overview of the main security components of HCL Portal.

- Review the security considerations published by the Internet Engineering Task Force, W3, or other standard-setting body for any technology upon which your application relies. Primarily, consider:
    - [HTTP](https://www.rfc-editor.org/rfc/rfc7230#section-9) (alt., [W3](https://www.w3.org/Protocols/rfc2616/rfc2616-sec15.html#sec15))

    - [Cookies](https://www.rfc-editor.org/rfc/rfc6265#section-8)

    - [TLS / SSL](https://www.rfc-editor.org/rfc/rfc5246#section-11)

    - [LDAP](https://www.rfc-editor.org/rfc/rfc4510), particularly:

        - [Protocol](https://www.rfc-editor.org/rfc/rfc4511#section-6)

        - [Security Mechanisms](https://www.rfc-editor.org/rfc/rfc4513#section-6)

    - [SAML](https://wiki.oasis-open.org/security/FrontPage)

    - [OpenID Connect](https://openid.net/connect/)
