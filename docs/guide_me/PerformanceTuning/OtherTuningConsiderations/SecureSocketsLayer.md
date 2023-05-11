# Secure Sockets Layer (SSL)

If possible, all traffic to the Portal server should be unencrypted. SSL should only be used between the client browser and front end servers such as firewalls or web servers. Benchmarks show no regression when SSL is used between the client and IHS, even when SSL is used on unauthenticated pages. However, the same benchmark showed an 11% drop in throughput when SSL was enabled between the web server and Portal.

If SSL must be enabled on the Portal server, ensure that this server supports Intel’s Advanced Encryption
Standard New Instructions (AES-NI). To make use of the instructions, the Java system property
com.ibm.crypto.provider.doAESInHardware must be set to true. Without this setting, the throughput was
more than 16% less with SSL enabled on Portal. For more information see http://www-01.ibm.com/support/knowledgecenter/SSYKE2_7.0.0/com.ibm.java.security.component.70.doc/securitycomponent/JceDocs/aesni.html.

See https://help.hcltechsw.com/digital-experience/9.5/security/ssl.html for information on setting up SSL.
Also review this article on the HCL DX Q&A Forum

https://hclpnpsupport.hcltech.com/community?id=community_question&sys_id=dffb0af11be54c9c77761fc58d4bcb0e for information on terminating SSL at the web server.