# For z/OS: Using a RACF keyring instead of an HFS keystore file

Under HCL Digital Experience or z/OS, keys and certificates are usually stored in a RACF keyring. The default WASKeyring is not in the format jks as for other operating systems, but in the format JCERACFKS. If the XML client detects that a keyring is used instead of an HFS keystore, it will use JCERACFKS as the default store type.

To use a RACF keyring instead of an HFS keystore file, use the following syntax:

```
xmlaccess -user user\_ID -password password 
          -url https://myhost:10035/wps/config
          -in input\_file.xml -out result\_file.xml 
          **-keystore safkeyring://user/keyring 
          -keypwd keyPassword -keytype keyType 
          -truststore safkeyring://user/keyring 
          -trustpwd trustPassword -trusttype trustType**
```

You need to run the XML script with a user ID that is allowed to access the RACF keyring profile. This is usually an administrative user ID. Therefore you can leave the variable user empty.

**Parent topic:**[XML syntax elements for using a secure connection with SSL](../admin-system/adxmltsk_cmdln_sntx_ssl_elements.md)

