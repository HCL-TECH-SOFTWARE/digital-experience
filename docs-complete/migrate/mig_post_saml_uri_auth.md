# Enabling unprotected URI Authentication 

If Security Assertion Markup Language \(SAML\) is enabled, or if you plan to enable SAML, you must ensure that LTPA authentication works correctly with the web and proxy servers.

The **Use available authentication data when an unprotected URI is accessed** setting must be enabled. Enabling this setting ensures that the security session stays active, if the browser context changes from protected to unprotected, for example from /myportal to /portal.

1.  Access the WebSphere® Integrated Solutions Console.

2.  Go to **Security** \> **Global security** \> **Web and SIP security** \> **General settings**.

3.  Select **Use available authentication data when an unprotected URI is accessed**.

4.  Click **Apply**.

5.  Click **Save**.

6.  If you are using a stand-alone environment, restart the server. If you are using a cluster environment, synchronize the nodes, and then restart the servers.


**Parent topic:**[Administrative tasks ](../migrate/mig_post_admintasks.md)

