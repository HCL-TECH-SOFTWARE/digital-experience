# Cryptographic hardware for SSL acceleration 

If your portal environment makes extensive use of SSL, you might choose to use cryptographic hardware to offload encryption and improve performance. HCL Portal tolerates interfacing through WebSphere® Application Server with cryptographic hardware for SSL acceleration. However, the tasks that are involved in setting up and configuring cryptographic hardware are specific to web servers or WebSphere Application Server and do not necessarily involve configuring HCL Portal.

The WebSphere Application Server Information Center contains several topics for setting up and configuring password encryption with cryptographic hardware. Refer to these topics to get started with password encryption and learn more about available encryption features.

Most cryptographic hardware requires the PKCS11 support software for the host machine and internal firmware. To get started with cryptographic hardware, you must install the required support software, configure IBM® HTTP Server, then install the necessary devices. Refer to [Getting started with the cryptographic hardware for SSL](http://www-01.ibm.com/support/knowledgecenter/SSEQTJ_8.5.5/com.ibm.websphere.ihs.doc/ihs/tihs_cryptossl.html) topic.

You can create a plug point to encrypt and decrypt all passwords in WebSphere Application Server that are currently encoded or decoded by using Base64-encoding. Refer to *Plug point for custom password encryption* at:

-   [Stand-alone environments](http://www-01.ibm.com/support/knowledgecenter/SSEQTP_8.5.5/com.ibm.websphere.base.doc/ae/csec_plugpoint_custpass_encrypt.html)
-   [Clustered environments](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/csec_plugpoint_custpass_encrypt.html)

Create a custom class to encrypt passwords after you create your server profile. Refer to *Enabling custom password encryption* at:

-   [Stand-alone environments](http://www-01.ibm.com/support/knowledgecenter/SSEQTP_8.5.5/com.ibm.websphere.base.doc/ae/tsec_enable_custpass_encrypt.html)
-   [Clustered environments](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/tsec_enable_custpass_encrypt.html)

In stand-alone environments, administrative functions such as installing WAR files or adding trace settings can fail when you meet both of the following conditions:

-   Your HCL Portal server uses the RSA\_token value for security.
-   You enable cryptographic offloading of SSL decryption and encryption through an implementation of PKCS11.

If your stand-alone environment meets both of the preceding conditions, complete the following steps:

1.  Log in to the WebSphere Integrated Solutions Console.
2.  Go to **Security** \> **Global Security** \> **Administrative security** \> **Administrative authentication**
3.  Select **Only use the active application authentication mechanism**.
4.  Click **Apply** then **OK** and save the changes to the master configuration.
5.  Log out of the WebSphere Integrated Solutions Console.
6.  Restart the WebSphere\_Portal server.

**Parent topic:**[Configuring SSL ](../security/ssl_intro.md)

**Previous topic:**[Setting up Client Certificate Authentication ](../security/certauth.md)

**Related information**  


[Starting and stopping servers, deployment managers, and node agents ](../admin-system/stopstart.md)

