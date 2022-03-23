# XML Syntax for exporting and importing credential vault data

When you use the XML command line for credential export or import, the command syntax is slightly different than for normal command-line use.

**Prerequisite configuration:** Before you run the `xmlaccess` command to export or import credential vault data, make sure that you added the two properties `export.userDN` and `export.enforceSSL` to the WebSphere® Application Server configuration.

When you use the XML command line for credential export or import, you need to add two more parameters: `-credentialexport` and `-passphrase` to the XML command. See the following example:

```
xmlaccess -user user\_ID -password password 
   -url https://myhost:10035/wps/config/ 
   -truststore 
    [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/config/cells/cellname/nodes/nodename/trust.p12 
   -trusttype PKCS12    -trustpwd WebAS 
   -in input\_file.xml -out result\_file.xml  
   **-credentialexport -passphrase encryptionPassphrase**

```

For z/OS®:

```
xmlaccess -user user\_ID -password password 
   -url https://myhost:10035/wps/config/ 
   -truststore 
   [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/config/cells/cellname/nodes/nodename/trust.p12 
   -trusttype PKCS12 
   -trustpwd WebAS -in input\_file.xml -out result\_file.xml  
   **-credentialexport -passphrase encryptionPassPhrase**

```

|Syntax element|Description|
|--------------|-----------|
|-credentialexport|This parameter, without a value, indicates that the export of credentials must be enabled.|
|-passphrase|Use this element to specify the encryptionPassPhrase for the encryption. The minimum length of this string is the number of bits set as the export keylength in the WP Vault Service Custom properties, which are divided by 8. The -passphrase value is used to create a key of the specified length for the encryption. For details about the WP Credential Vault Service, see the topic about the Credential Vault Service. For details about how to configure or determine service configuration properties see the topic about Setting service configuration properties.|

**Usage notes:**

-   The following rules apply to these parameters:
    -   For export or import of encrypted credential secrets, the options `credentialexport` and `passphrase` are mandatory. For example, during migration you need to specify these options.
    -   For all XML Configuration actions that do not export or import encrypted credential secrets during migration, the options `credentialexport` and `passphrase` are optional.
-   Use the same `passphrase` for both the export and the import.
-   The import might fail if the user DN schema was changed between the previous and the current system or when credentials for users are contained in the XML import file that is not present in the current system. In this case, manually remove the obsolete credential entries from the XML file, then complete the import.
-   For security reasons, use an HTTPS connection when you import credentials; however, if you choose not to, set the `export.enforceSSL` configuration property to `false`.

## Example

Following is an example of how to use the XML configuration interface to export/import credential secrets by using HTTPS:

```
xmlaccess.sh -user wpsadmin -password your_password -url https://portalhost:10035/wps/config/ 
     -in ExportedCredentialSecrets.xml -out result.xml 
     -credentialexport -passphrase JGD786JHgasdf8a67kjhUIT7sdj7nsh776jasdf786regUFZT756675zufurz
     -truststore $WASHome/profiles/wp_profile/etc/DummyClientTrustFile.jks -trustpwd WebAS

```

For z/OS:

```
xmlaccess.sh -user wpsadmin -password your_password -url https://portalhost:10035/wps/config/ 
     -in ExportedCredentialSecrets.xml -out result.xml 
     -credentialexport -passphrase JGD786JHgasdf8a67kjhUIT7sdj7nsh776jasdf786regUFZT756675dfghjk
     -truststore [AppServer\_root](../reference/wpsdirstr.md#was_root)/etc/DummyClientTrustFile.jks -trustpwd WebAS

```

-   **[Adding export.userDN and export.enforceSSL to the WebSphere Application Server configuration](../admin-system/adxmltsk_cmdln_sntx_crdvlt_prerq.md)**  
Before running the XMLAccess command to export or import credential vault data, you need to add two properties to the WebSphere Application Server configuration.

**Parent topic:**[Command line syntax of the XML configuration interface](../admin-system/adxmltsk_cmdln_syntax.md)

**Related information**  


[Setting service configuration properties ](../admin-system/adsetcfg.md)

[Credential Vault Service ](../admin-system/srvcfgref_cred_vault.md)

