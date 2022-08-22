# Staying logged in when switching URI

If you migrated from Version 8.0.0.1, the default portal behavior was to log you out when you switched from a protected to unprotected URI. In Version 8.5, the default behavior is to keep you logged in. If you do not want to get logged out, you can enable the Version 8.5 default behavior.

1.  Access the WebSphere® Integrated Solutions Console.

2.  Go to **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Click **WP ConfigService**.

4.  Click **Custom Properties** under the Additional Properties heading.

5.  Locate the logout.user.onpublic property and change the value to false.

6.  Click **Apply**.

7.  Click **Save**.

8.  Go to **Security** \> **Global security** \> **Web and SIP security** \> **General settings**.

9.  Select **Use available authentication data when an unprotected URI is accessed**.

10. Click **Apply**.

11. Click **Save**.

12. If you are using a stand-alone environment, restart the server. If you are using a cluster environment, synchronize the nodes, and then restart the servers.



