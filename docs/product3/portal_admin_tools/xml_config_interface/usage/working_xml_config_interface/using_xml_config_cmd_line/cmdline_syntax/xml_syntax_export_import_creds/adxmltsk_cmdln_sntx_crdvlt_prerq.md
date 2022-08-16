# Adding export.userDN and export.enforceSSL to the WebSphere Application Server configuration

Before running the XMLAccess command to export or import credential vault data, you need to add two properties to the WebSphere Application Server configuration.

Proceed as follows:

1.  Log in to the WebSphere® Integrated Solutions Console.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment** \> **Providers** \> **WP\_VaultService** \> **Custom properties**.

3.  Add the property `export.userDN`:

    -   **Name:** `export.userDN`
    -   **Value:** `administrator\_DN`. For example: `cn=wpsadmin,o=ibm`
    -   **Type:** `java.lang.String`
4.  Add the property `export.enforceSSL`:

    -   **Name:** `export.enforceSSL`
    -   **Value:** `true`
    -   **Type:** `java.lang.Boolean`
5.  Save your configuration changes.

6.  Restart the portal server.


**Parent topic:**[XML Syntax for exporting and importing credential vault data](../admin-system/adxmltsk_cmdln_sntx_crd_vlt.md)

