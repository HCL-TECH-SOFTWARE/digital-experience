# Prepare a Novell eDirectory

If you plan to use a Novell eDirectory as an LDAP user registry, you must install and set up the server so that it communicates with HCL Digital Experience.

## Procedure


1.  Install Novell eDirectory. Refer to [eDirectory](http://www.novell.com/products/edirectory/) for information.

2.  Complete the following steps with the web administration tool to create the HCL Portal administrative user:

    1.  Complete the following steps to create a directory suffix:

        1.  Click the **Server Administration** folder in the directory server console navigation.
        2.  Click the **Manage Server Properties** folder under the Server Administration folder and then select **Suffixes** on the main page.
        3.  Type the **Base DN** name for the suffix; for example: dc=yourcompany,dc=com.
        4.  Click **Add**.
        5.  Click **OK** to save your changes.

    2.  Open the appropriate LDIF file in the PortalServer_root/installer/wp.iim/ldif directory, with a text editor:

        -   Use the PortalUsers.ldif file as a working example and adapt appropriately to work with your LDAP server.
        -   Use the ContentUsers.ldif file for the HCL Content Manager group and user ID if you configured HCL Web Content Manager.
        
    3.  Replace every dc=yourco,dc=com with your suffix.

    4.  Replace any prefixes and suffixes that are unique to your LDAP server.

    5.  You can specify user names other than wpsadmin and wpsbind. For security reasons, specify nontrivial passwords for these administrator accounts.

    6.  Save your changes.

    7.  Complete the instructions that are provided with your directory server to import the LDIF file.

3.  Complete the following steps to create the HCL Portal administrative user:

    1.  Open the appropriate LDIF file in the PortalServer_root/installer/wp.iim/ldif directory, with a text editor:

        -   Use the PortalUsers.ldif file as a working example and adapt appropriately to work with your LDAP server.
        -   Use the ContentUsers.ldif file for the IBM® Content Manager group and user ID if you configured HCL Web Content Manager.
    2.  Replace every dc=yourco,dc=com with your suffix.

    3.  Replace any prefixes and suffixes that are unique to your LDAP server.

    4.  You can specify user names other than wpsadmin and wpsbind. For security reasons, specify nontrivial passwords for these administrator accounts.

    5.  If you use IBM Security Access Manager Version 5.1, set the objectclasses to accessGroup. If you use Security Access Manager Version 6, set the objectclasses to groupOfNames.

    6.  Save your changes.

    7.  Complete the instructions that are provided with your directory server to import the LDIF file.



