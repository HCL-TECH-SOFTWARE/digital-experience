# Federal Information Processing Standards and \(NIST\) SP800-131a

Federal Information Processing Standards \(FIPS\) and NIST SP800-131a are standards and guidelines issued by the United States National Institute of Standards and Technology \(NIST\) for federal government computer systems. FIPS and SP800-131a are developed when there are compelling federal government requirements for standards, such as for security and interoperability, but acceptable industry standards or solutions do not exist.

HCL Digital Experience tolerates WebSphere® Application Server's support of FIPS 140-2 and SP800-131a. WebSphere Application Server integrates cryptographic modules such as Java Secure Socket Extension \(JSSE\) and Java Cryptography Extension \(JCE\), which are FIPS 140-2 certified. Throughout the documentation and the product, the FIPS 140-2 certified IBM JSSE and JCE modules are called as IBMJSSEFIPS and IBMJCEFIPS, which distinguishes the FIPS-certified modules from the prior, non-certified IBM JSSE and IBM JCE modules.

The FIPS 140-2 compliant toleration means that HCL Digital Experience will continue to work after WebSphere Application Server is configured to activate FIPS 140-2 compliant security modules. HCL Digital Experience has no self-contained Cryptographic Support and as a result is unaware of the module differences. Functions in HCL Digital Experience that use encryption include:

-   Secure Sockets Layer \(SSL\) connections inbound from clients \(but this is basically the WebSphere Application Server and HTTP Server support for SSL connections, and is not apparent to HCL Digital Experience\)
-   Internal connections between HCL Digital Experience administrative functions and WebSphere Application Server administrative services \(started, for example, when deploying a portlet which must create a web application in WebSphere Application Server\)

All connections listed in this document are carried over SSL using FIPS-compliant encryption. Without FIPS 140-2 support, connections might not be encrypted.

## Limitations

There are some restrictions in the level of support that HCL Digital Experience provides in using FIPS-certified modules:

-   Sametime currently does not support FIPS 140-2.
-   By default, Microsoft Internet Explorer might not have TLS enabled. To enable TLS, open the **Internet Explorer browser** and click **Tools** \> **Internet Options**. On the **Advanced** tab, select the **Use TLS 1.0** check box.
-   The IBM Tivoli Directory Server provides the Use FIPS certified implementation option, which enables the directory server the FIPS-certified encryption algorithms uses. For information, see "Setting the level of encryption" within the IBM Tivoli Directory Server Administration Guide.
-   IBMJSSEFIPS is not supported on the HP-UX platform.
-   You can use FIPS-certified JSSE providers if your servers and clients are using WebSphere Application Server.
-   If you are trying to enable FIPS processing mode with GSKit bundled with ITDS, see Technote 1578181.


**Related information**  


[Enabling FIPS and \(NIST\) SP800-131a](../config/cfg_fips.md)

[IBM Tivoli Directory Server Administration Guide](http://publib.boulder.ibm.com/tividd/td/IBMDS/IDSadmin52/en_US/HTML/admin_gd.htm#Header_185)

[Technote 1578181](https://www.ibm.com/support/pages/node/197547)

[Support for NIST SP 800-131 and NAS Suite B](https://www.ibm.com/docs/en)

