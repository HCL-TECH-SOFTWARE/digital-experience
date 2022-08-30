# Preparing a SecureWay Security Server

If you plan to use a SecureWay Security Server as an LDAP user registry, you must install and set up the server so that it communicates with HCL Digital Experience.

1.  Install SecureWay Security Server. Refer to [IBM® SecureWay™ Security Server for z/OS® and OS/390®](http://www.ibm.com/servers/eserver/zseries/zos/security/securityserver.html) for information.

2.  Complete the following steps with the web administration tool to create the HCL Portal administrative user:

    1.  Complete the following steps to create a directory suffix:

        1.  Click the **Server Administration** folder in the directory server console navigation.
        2.  Click the **Manage Server Properties** folder under the Server Administration folder and then select **Suffixes** on the main page.
        3.  Type the **Base DN** name for the suffix; for example: dc=yourcompany,dc=com.
        4.  Click **Add**.
        5.  Click **OK** to save your changes.
    2.  Open the appropriate LDIF file in the [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/installer/wp.iim/ldif directory, with a text editor:

        -   Use the PortalUsers.ldif file as a working example and adapted appropriately to work with your LDAP server.
        -   Use the ContentUsers.ldif file for the IBM Content Manager group and user ID if you configured HCL Web Content Manager.
    3.  Replace every dc=yourco,dc=com with your suffix.

    4.  Replace any prefixes and suffixes that are unique to your LDAP server.

    5.  You can specify user names other than wpsadmin and wpsbind. For security reasons, specify nontrivial passwords for these administrator accounts.

    6.  Save your changes.

    7.  Complete the instructions that are provided with your directory server to import the LDIF file.

3.  Complete the following steps to create the HCL Portal administrative user:

    1.  Complete the following steps to create a directory suffix:

        1.  Go to [IBM System i and IBM i Information Center](http://www-01.ibm.com/support/knowledgecenter/ssw_ibm_i/welcome), select the appropriate documentation version and go to **Networking** \> **TCP/IP applications, protocols, and services** \> **IBM Directory Server for iSeries \(LDAP\)** \> **Administering Directory Server** \> **General administration tasks** \> **Adding and Removing Directory Server suffixes** for information.
        2.  Stop and restart the LDAP server.
    2.  Open the appropriate LDIF file in the [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/installer/wp.iim/ldif directory, with a text editor:

        -   Use the PortalUsers.ldif file as a working example and adapted appropriately to work with your LDAP server.
        -   Use the ContentUsers.ldif file for the IBM Content Manager group and user ID if you configured HCL Web Content Manager.
    3.  Replace every dc=yourco,dc=com with your suffix.

    4.  Replace any prefixes and suffixes that are unique to your LDAP server.

    5.  You can specify user names other than wpsadmin and wpsbind. For security reasons, specify nontrivial passwords for these administrator accounts.

    6.  If you use IBM Security Access Manager Version 5.1, set the objectclasses to accessGroup. If you use Security Access Manager Version 6, set the objectclasses to par.

    7.  Save your changes.

    8.  Complete the instructions that are provided with your directory server to import the LDIF file.



