# Secure Sockets Layer (SSL)

Ideally, all traffic to the Portal server should be unencrypted. SSL should be confined to the connection between the client browser and front-end servers such as firewalls or web servers. Benchmarks indicate no performance regression when SSL is employed between the client and IHS, even for unauthenticated pages. However, those same benchmarks revealed an 11% drop in throughput when SSL was enabled between the web server and Portal.

If SSL must be enabled on the Portal server, ensure that this server supports Intel’s Advanced Encryption Standard New Instructions (AES-NI). To make use of these instructions, the Java system property `com.ibm.crypto.provider.doAESInHardware` must be set to `true`. Without this setting, throughput was observed to be more than 16% lower with SSL enabled on Portal.

See [Setting up SSL](../../../../../deployment/manage/security/information/confidentiality/configuring_ssl/setup_ssl/index.md) for more information.