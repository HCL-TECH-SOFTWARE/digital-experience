# XML Syntax for using a secure connection with SSL

You can also use the XML command line client with SSL over a secure HTTPS connection.

In this case the command syntax is as follows:

```
   xmlaccess -user user\_ID -password password 
             -url https://myhost:10035/wps/config/ 
             -in input\_file.xml -out result\_file.xml ** 
             -truststore trustStore -trustpwd trustPassword 
             -trusttype trustType \[ -keystore keyStore 
             -keypwd keyPassword -keytype keyType \]**
```

The following rules apply:

1.  The `https://` prefix in the URL is required to allow the XML client to detect whether a secure HTTPS connection is required. The appropriate HTTPS port must be provided instead of the HTTP port.
2.  The options starting with the string `trust` are mandatory in all configurations where a custom certificate store is used for storing certificates required for secure connections. For configurations that use the Java standard `cacerts` certificate store, the parameters starting with `trust` are optional.
3.  The options starting with the string `key` are optional. They are only required when client certificate authentication is used for establishing the SSL connection.
4.  The default value for `-keytype` and `-trusttype` is `jks`. Therefore the `-keytype` and `-trusttype` options are optional unless the used keystore or truststore uses a different format.

**Note:** When your HCL Portal runs on the Oracle Solaris platform, the default protocol handler for the hybrid IBM JDK is the Sun handler. Therefore, in order to successfully connect by using the XML configuration interface and the IBM JSSE2 provider, you need to add an additional parameter to the file `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/bin/xmlaccess.xml`. Edit that file and add the parameter -Djava.protocol.handler.pkgs=com.ibm.net.ssl.www2.protocol as follows:

```
   . . . . .
${JAVA}                                                              
-Djava.protocol.handler.pkgs=com.ibm.net.ssl.www2.protocol           
-classpath ${WPS_HOME}/. . . . .
   . . . . .
```

-   **[XML syntax elements for using a secure connection with SSL](../admin-system/adxmltsk_cmdln_sntx_ssl_elements.md)**  
This topic lists the syntax elements for using the XML command line client with SSL over a secure HTTPS connection.

**Parent topic:**[Command line syntax of the XML configuration interface](../admin-system/adxmltsk_cmdln_syntax.md)

**Related information**  


[Using the XML configuration command line client](../admin-system/adxmltsk_cmdln.md)

