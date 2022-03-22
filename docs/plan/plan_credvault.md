# Credential Vault

The Credential Vault is a service that stores credentials that allow portlets to log in to applications outside the realm on behalf of the user.

Using Credential Vault, a portlet can retrieve a user's authentication identity and then pass the information to a backend application. The Credential Vault features the following level of sign-on:

-   **Passive Credentials**

    Passive Credentials retrieve stored secret data such as user ID and password or certificates. This option is more flexible. However, it requires portlet writers to manage their own connections and authentication to backend applications with the credentials they retrieved from the Credential Vault.


Credential objects can also pass IBM® Security Access Manageror Computer Associates eTrust SiteMinder single sign-on tokens to backend applications.

HCL Digital Experience provides one simple database vault implementation for mappings to secrets for other enterprise applications. By default, the Credential Vault contains an administrator-managed vault segment and a user-managed vault segment. Administrator-managed vaults allow users to update mappings; however, users cannot add new applications to this vault. The user-managed vault segment allows users to add application definitions, such as a POP3 mail account, under the user vault and store a mapping there. By default, the vault uses an encryption plug-in that encodes the passwords in Base 64.

HCL Portal initially provides two vault adapter configurations that write to the database:

-   A default vault for administrator-managed vault segments that stores credentials in the release domain: default-release
-   And a default vault for user-managed vault segments that stores credentials in the customization domain: default-customization

HCL Portal also supports the storage and retrieval of credentials from other vault services, such as Security Access Manager. HCL Portal includes a Credential Vault adapter for Security Access Manager. This plug-in works on the following operating systems:

-   AIX®
-   Solaris
-   Windows™
-   z/OS®

