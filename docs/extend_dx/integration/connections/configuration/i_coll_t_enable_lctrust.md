# Import SSL certificate to set up trust association

To prevent security alert pop-up windows, add HCL Connections certificates to your portal server. The signer certificate that is used by the HCL Connections server must be trusted by the portal server. The instructions for deploying the HCL Connections portlets include a procedure to import the SSL certificate. If you did not complete that procedure, you must import the certificate to use community pages. For best results, follow the procedures that are provided in the HCL Connections documentation.

Retrieve the certificate for the HCL Connections server. Then, import the SSL certificate to the portal server.

1.  Enter the URL for the HCL Connections server into a web browser.

    For example: https://your\_Lotus\_Connections\_server.com/activities

2.  Save the certificate as a PEM certificate. Save it to the portal server in the directory where IBM® WebSphere® Application Server was installed.

    For example: [AppServer\_root](../../../../guide_me/wpsdirstr.md#appserver_root)

3.  Import the saved certificate to the portal server.

    1.  Open the WebSphere Integrated Solutions Console.

    2.  Select **Security** \> **SSL certificate** \> **key management** \> **Key stores** \> **certificates**.

    3.  Click **NodeDefaultTrustStore**.

    4.  Select **Signer certificates** and click **Add**.

    5.  On the Add signer certificate page, provide a name for the certificate that you added, and enter the full qualified name of the saved certificate.

4.  Import the saved certificate to the portal server.



???+ info "Related information"
    - [Configuring single sign-on (SSO) for backend calls to HCL Connections in SmartCloud for Social Business](../configuration/cfg_portal_to_work_with_cnx_in_sc/establishing_sso/configuring_sso_sc4sb.md)

