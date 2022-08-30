# Credential Vault Service

You can use the portal Credential Vault Service to configure Vault Adapter implementations that are used by the Credential Vault Service to store credential secrets.

In the WebSphere® Integrated Solutions Console, the portal Credential Vault Service is listed as **WP VaultService**.

## General Credential Vault Service properties

You can set the following general configuration properties Credential Vault Service:

-   **systemcred.dn**

    Specifies the Distinguished name \(DN\) of the vault administrative user. All system credentials are stored under the user's account. This property is set to the portal administrative user by default.

-   **export.userDN**

    This is the user DN value of the XML Access user that is allowed to import/export secrets via the XML Configuration interface. This is usually the same user DN string as defined in the same configuration file under the property systemcred.dn. This user needs authority to use the XML Configuration interface and has to be used during the import/export. Otherwise an import/export of credential secrets is not possible.

-   **export.cipher**

    The cipher used during export for encryption. This cipher has to be available via Java JCE in the HCL Portal system. The default value is AES.

-   **export.keyLength**

    Number of bits used as key length for the cipher. The default value is `128` .

-   **export.enforceSSL**

    This field controls whether credential import and export must be done via secured HTTP connection or not. If you set this property to true , credential import and export must be done via secured HTTP connection. If you set this property to false , it is allowed to import and export credentials also via an unsecured HTTP connection. The default value is `true` .


## Vault Adapter specific properties

By default, two Vault Adapter implementations are available: `default-release` and `default-customization`. Those Vault Adapters store credential secrets in the portal server data store. For each implementation, define a unique string type, a class name, and a domain. Optionally, you can specify a configuration file, managing resources, and a read only flag.

You can define the following properties for each Vault Adapter Implementation Type. To be able to differentiate the properties for each type, the properties are in the format `vault.type.key` . Replace `type` by the Vault Adapter Implementation Type, and replace `key` by the key. The following list shows the properties that you can append:

-   **class**

    Use this property to specify the Vault Adapter Implementation Class Name, but without the `.class` extension. This property is mandatory.

-   **config**

    Use this property to specify the path of a configuration file that your adapter may need . This property is optional.

-   **domain = \(rel\)**

    Use this property to specify the database domain where the segment and slot configuration data is stored. In the special case of the `DefaultVault`, this also specifies where the actual credentials are stored. This property is mandatory. Possible values are all available database domains as specified in the Data Store Service. The default value is `rel` ; this specifies the release domain.

-   **manageresources = \(false\)**

    Use this property to specify whether the Vault Adapter should create and delete resources. This property is optional.

    **Note:** If you set this property to `true`, the adapter must have internal support to manage resources. If you omit this property, it will default to `false` .

-   **readonly = \(true\)**

    Use this property to specify whether the underlying vault for this adapter should be considered read only. This property is optional.

    **Note:** If you set this property to `true`, the `manageresources` property is ignored. If you omit this property, it will default to `true` .



**Related information**  


[Working with the XML configuration interface](../admin-system/adxmltsk.md)

[XML Syntax for exporting and importing credential vault data](../admin-system/adxmltsk_cmdln_sntx_crd_vlt.md)

