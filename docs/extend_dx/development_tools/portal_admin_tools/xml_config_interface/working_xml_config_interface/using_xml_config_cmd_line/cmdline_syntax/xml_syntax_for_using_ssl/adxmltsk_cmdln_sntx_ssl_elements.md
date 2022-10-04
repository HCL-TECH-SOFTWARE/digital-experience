# XML syntax elements for using a secure connection with SSL

This topic lists the syntax elements for using the XML command line client with SSL over a secure HTTPS connection.

|Syntax element|Description|
|--------------|-----------|
|-truststore|Use this element to specify the name of the truststore file that contains the server certificates that are required for accepting SSL connections with trusted servers. If no truststore is provided, the XML client will use the default Java `cacerts` truststore.For z/OS®, you can use a RACF keyring as a truststore. The syntax for the keyring is `safkeyring://keyring` for use without a user ID and `safkeyring://user/keyring` for use with a user ID.|
|-trustpwd|Use this element to specify the password that is required for accessing the truststore. If the default Java `cacerts` truststore is used, no trust password needs to be provided.|
|-trusttype|Use this element to specify the type of the truststore that is used. The default type is `jks`. As long as the used truststore is of type `jks`, you do not have to provide this parameter.For z/OS: If you use a keyring as the truststore, XML will use `JCERACFKS` as the default truststore type. Therefore you do not have to use this option unless your keyring uses another format.|
|-keystore|Use this element to specify the name of the keystore file that contains client certificates that are required for establishing an SSL connection with a server that requires client certificate authentication. If no keystore is provided, the XML client will use the default Java `cacerts` keystore. For z/OS, you can use a RACF keyring as a keystore. The syntax for the keyring is `safkeyring://keyring` for use without a user ID and `safkeyring://user/keyring` for use with a user ID.|
|-keypwd|Use this element to specify the password that is required for accessing the keystore. If the default Java `cacerts` keystore is used, no key password needs to be provided.|
|-keytype|Use this element to specify the type of the used keystore. The default type is `jks`. If the used keystore is of type `jks`, you do not have to provide this parameter.For z/OS: If you use a keyring as the keystore, XML will use `JCERACFKS` as the default keystore type. Therefore you do not have to use this option unless your keyring uses another format.|
|-protocol|Use this element to specify the protocol, for example `SSL`, `SSLv1`, `SSLv3`, or `TLS`. Note that you can select only protocols that WebSphere® Application Server supports and has enabled. The parameter is evaluated only if the URL of the XMLAccess servlet selects a secure connection with HTTP**s**. Otherwise, the parameter is ignored.|

See the following examples.

## Example 1

The following is an example of how to use the XML configuration interface to establish an SSL connection with a HCL Portal server, using the default certificate stores that are provided by WebSphere Application Server:

```
xmlaccess.sh -user wpsadmin -password your_password -url https://portalhost:10035/wps/config/
             -in $PortalHome/doc/xml-samples/ExportAllUsers.xml -out result.xml
             **-truststore $WASHome/profiles/wp_profile/etc/trust.p12 
             -trustpwd WebAS -trusttype PKCS12**

```

For this example to run, use the trusttype parameter with a value of PKCS12 to avoid an invalid file format error.

## Example 2

The following is an example of how to use the XML configuration interface to establish an SSL connection with a HCL Portal server, using the dummy certificate stores that are provided by WebSphere Application Server:

```
xmlaccess.sh -user wpsadmin -password your_password -url https://portalhost:10035/wps/config/
             -in $PortalHome/doc/xml-samples/ExportAllUsers.xml -out result.xml 
             **-truststore $WASHome/profiles/wp_profile/etc/DummyClientTrustFile.jks -trustpwd WebAS**
```

For this example to be able to run, you need to configure the SSL configuration in WebSphere Application Server using the `DummyServerKeyFile.jks` and the `DummyServerTrustFile.jks` for secure connections. The option **require client authentication** must not be active.

## Example 3

If the option **require client authentication** is active, you need to provide a keyfile when establishing the SSL connection with the XML configuration interface:

```
xmlaccess.sh -user wpsadmin -password yourpassword -url https://portalhost:10035/wps/config/
             -in $PortalHome/doc/xml-samples/ExportAllUsers.xml -out result.xml 
             **-truststore $WASHome/profiles/wp_profile/etc/DummyClientTrustFile.jks -trustpwd WebAS 
             -keystore $WASHome/profiles/wp_profile/etc/DummyClientKeyFile.jks -keypwd WebAS**
```

This example allows the XML configuration interface to send a client certificate to the server, if the server requests one. Using client certificate authentication is required wherever the number of clients that can administer HCL Portal needs to be controlled. Only clients with the correct client certificate will be able establish a connection with HCL Portal.


