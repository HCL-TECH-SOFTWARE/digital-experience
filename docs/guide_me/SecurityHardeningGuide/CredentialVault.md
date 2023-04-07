# Credential Vault

The [Credential Vault](https://help.hcltechsw.com/digital-experience/8.5/plan/plan_credvault.html) allows portlets to access other applications using credentials obtained from the vault. These may be HTTP headers on the current request (active [deprecated in v8.5](https://help.hcltechsw.com/digital-experience/8.5/reference/intr_depc.html); e.g. LTPA token) or credentials stored in the vault (passive; e.g. user name and password, TLS certificate).

## Recommended actions and considerations 


- To the extent possible, use SSO methodologies to access back-end applications. If HCL Digital Experience does not store credentials, there is a smaller attack profile for the application.

    - Though active credentials have been deprecated in v8.5, if you use Outbound HTTP to connect to back-end web applications, then you can configure the profile to pass SSO cookies through as an alternative.

- If you must use passive credentials, recognize that the default vault adapter only Base64 encodes and stores credentials in the HCL Digital Experience database (release and/or customization domain).

    - This encoding would not meet the security requirements for most organizations. You should either:
        - Use IBM Security Access Manager Global Sign-on (GSO) lockbox and the associated vault adapter instead.
        or

        - Implement the vault adapter interface, com.ibm.portal.portlet.service.credentialvault.spi.VaultAdapter, with sufficient encryption and specify your class in the [Credential Vault Service](https://help.hcltechsw.com/digital-experience/8.5/admin-system/srvcfgref_cred_vault.html)

        - You may reasonably make an exception for system credentials, providing sufficient controls over the database. For example, if you use the credential vault only for storing credentials to enable syndication. Understand that this password could be trivially obtained by anyone with access to the database.

- Set [export.enforceSSL](https://help.hcltechsw.com/digital-experience/8.5/admin-system/srvcfgref_cred_vault.html) to ensure that any XMLAccess requests to export credential vault slots are secured.

    - Similarly, adjust other configuration properties as-needed to meet your security requirements (e.g. export.cipher, export.keyLength).