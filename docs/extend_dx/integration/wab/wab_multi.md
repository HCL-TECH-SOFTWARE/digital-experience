# Configuring multiple web dock applications on a page

You can have multiple web dock applications that point to different hosts on the same portal page. You can also allow users to open two different portal pages that contain web dock applications in a new browser window or tab.

**Restriction:** If you complete these steps, the inter-portlet communication feature is disabled.

**Important:** This alias is prefixed to the server name used to access the portal. It is then used to access the portal internally. If the server name is servername.domain.ibm.com, then make sure that the server is accessible through myhost1.servername.domain.ibm.com and myhost2.servername.domain.ibm.com. If portal is accessed with the https scheme, make sure that valid SSL certificates for host myhost1.servername.domain.ibm.com and myhost2.servername.domain.ibm.com are installed. To install the SSL certificates, log in to the WebSphere® Integrated Solutions Console. Then, go to **SSL certificate and key management** \> **Key stores and certificates** \> **NodeDefaultKeyStore** \> **Personal certificates**. For information, read [Personal certificates collection](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.doc/ae/usec_sslperscerts.html). If the certificates are not available for these hosts, then you must accept the security exception in the browser. Open the web dock iFrame URL in a separate browser window. Then, refresh the portal page to make it work and render the integrated application. Otherwise, the application might not work.

1.  Log in to the WebSphere Integrated Solutions Console.

2.  Go to **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Click **WP Virtual Web Application Manager Config**.

4.  Click **Custom properties** in the **Additional Properties** heading.

5.  Click **host\_alias\_mapping**.

6.  Enter the aliases for the hosts in **Values**.

    For example, enter myhost1 = http://myhost1.servername.domain.hcl.com, myhost2 = http://myhost2.servername.domain.hcl.com.

    **Important:** The aliases for the hosts must all be lowercase.

7.  Click **OK**.

8.  Complete the following steps to enable single sign-on:

    1.  Go to **Security** \> **Global Security** \> **Web and SIP security** \> **Single sign-on \(SSO\)**.

    2.  Set the **Domain name** field.

        For example, enter domain.ibm.com.

9.  Restart the WebSphere\_Portal server.

10. Go to your domain name server \(DNS\) and enter the host aliases for each of the host aliases that you plan to use.

    For example, enter the following information:

    -   portal\_serverIP myhost1.servername.domain.ibm.com
    -   portal\_serverIP myhost2.servername.domain.ibm.com
    Where portal\_serverIP is something like 9.27.27.155.


Complete the following steps to remove this enhancement:

1.  Log in to the WebSphere Integrated Solutions Console.
2.  Go to **Resources** \> **Resource Environment** \> **Resource Environment Providers**.
3.  Click **WP Virtual Web Application Manager Config**.
4.  Click **Custom properties** in the **Additional Properties** heading.
5.  Click **host\_alias\_mapping**.
6.  Remove the aliases for the hosts in the **Values** field.
7.  Click **OK**.
8.  Restart the WebSphere\_Portal server.


