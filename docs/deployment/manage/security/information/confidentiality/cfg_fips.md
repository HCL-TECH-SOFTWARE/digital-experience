# Enabling FIPS and (NIST) SP800-131a

HCL Digital Experience tolerates IBM WebSphere Application Server support of Federal Information Processing Standards (FIPS) and National Institute of Standards and Technology (NIST) SP800-131a. You can configure WebSphere Application Server to activate FIPS 140-2 compliant security modules. When you enable FIPS, you can use only FIPS to securely encrypt data. For this reason, you must also configure FIPS for systems that require secure transactions, which can include HTTP servers and LDAP servers.

-   You must install HCL Digital Experience before enabling FIPS.
-   If your portal environment includes an HTTP server or LDAP server or any other components that use secure connections, consult the related links section to determine the level of support for FIPS 140-2 and SP800-131a. However, your environment does not need to include an HTTP server or LDAP server. You can enable FIPS on an out-of-box HCL Digital Experience installation. Likewise, you do not have to enable FIPS for systems that do not require secure transactions. For example, if your LDAP server is accessed via the LDAP protocol, rather than the secure LDAPS protocol, you do not need to enable FIPS for that LDAP server.

The tasks involved in enabling FIPS are specific to Web servers and WebSphere® Application Server and do not involve any configuration steps in HCL Digital Experience. The WebSphere Application Server Information Center contains several topics with information and instructions for enabling FIPS for HTTP servers. Refer to these topics as appropriate to learn whether you should enable FIPS and, if necessary, what steps to perform.

-   **HTTP servers**

    See Securing applications at the transport level for Web services in the WebSphere® Application Server Information Center for instructions. Configure your HTTP server to support TLS with FIPS enabled. Refer to the appropriate documentation for instructions.

-   **LDAP servers**

    Refer to the appropriate documentation to configure your LDAP over SSL and to enable FIPS.

    **Remember:** Enable FIPS for your LDAP server only if it requires a secure connection. If you do not use an LDAP server or you do not connect to your LDAP server over a secure connection, you do not need to enable FIPS for an LDAP server.



**Related information**  


[Federal Information Processing Standards and \(NIST\) SP800-131a](/digital-experience/deployment/manage/security/people/authentication/sec_auth_consideration/plan_fips)

