# Setting up SSL

Get an overview of the tasks that are required to configure SSL for HCL Digital Experience. Some of these tasks are completed on the IBM® WebSphere® Application Server and the web server. The steps that refer to the WebSphere Application Server and the web server are summarized here; refer to the WebSphere Application Server and the web server documentation for detailed information. Steps that are unique to HCL Portal are described in detail here.

**Note:** This procedure might be slightly different if a front-end security proxy server such as IBM Security Access Manager WebSEAL is used. In that case, the front-end security server handles the client SSL connections. The web server receives connections from the front-end security proxy server. Mutually authenticated SSL can be configured between the web server and the front-end security proxy server if needed. It is highly dependent on the security requirements of each deployment.

If you plan to use a Security Access Manager WebSEAL TAI with an SSL junction, complete only steps 1-3 of this procedure.

**Important:** If only the login process is secure over SSL, complete the first three steps and then go to Configuring SSL only for the login process.

1.  Configure the web server to support HTTPS. This configuration involves setting up the web server to accept inbound connections from client browsers over SSL.

2.  Depending on the web server that you want to use, other software must be installed on the web Server.

    For example: instance Microsoft™ Internet Information Server and Microsoft Certificate Service.

3.  The web server must have a port that is defined \(usually 443\), and the necessary certificates and keys must be installed.

    -   Go to Securing with SSL communications in the related links section for information about how to enable SSL on an IBM HTTP Server.
    -   Refer to the book *z/OS® HTTP Server Planning, Installing, and Using* in the related links section. It provides information about setting up a secure server.
4.  In a production environment, you must obtain a certificate from a certificate authority. For testing purposes, you can use iKeyman to generate a self-signed certificate. For Internet Information Server, use the web server's resource toolkit to create SSL keys. Refer to the related links section for information about iKeyman and creating Secure Sockets Layer digital certificates.

5.  Configure the WebSphere Application Server plug-in for the web server to forward HCL Portal traffic that is received over SSL to WebSphere Application Server \(which then forwards the traffic to HCL Portal\). Refer to the related links section for information about how to configure the plug-in.

6.  In configurations where the web server and HCL Portal are on separate servers, requests are rerouted to the application server. Under these circumstances, you can also configure SSL between the web server and the application server to provide complete security. This configuration requires that you create extra keyfiles for the web server plug-in and for the embedded HTTPS of WebSphere Application Server.

    -   For information about configuring SSL between the web server and the application server, use the IBM Redbooks called WebSphere Application Server V8.5 Security Guide, found in the related links section. Use the section that is called *Application server configuration: Web container configuration of the IBM WebSphere Application Server*.
    -   For information about this step, use the IBM Redbooks link in the related links section. Search for Security Handbook.
    **Note:** Always create a new SSL keystore and truststore for the external web server and change the WebSphere\_Portal server's secure transport channel to use the new SSL repository.

    CAUTION:

    Do not modify the default SSL key and truststore.

7.  Complete the following steps to create or modify the following two properties in the configuration services:

    1.  Log on to the WebSphere Integrated Solutions Console.

    2.  Go to **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

    3.  Click **WP ConfigService**.

    4.  Click **Custom Properties** under the Additional Properties heading.

    5.  Locate the redirect.login.ssl property and complete one of the following options:

        **Parameter values:** The redirect.login.ssl determines the protocol to use after login completes. Specify one of the following values:

        -   Set to true to use HTTPS.
        -   Set to false to use HTTP.
        -   If the property exists, click the property to modify it and change the value to true.
        -   If the property does not exist, click **New** to create the property and enter the following information:
            -   **Name**: redirect.login.ssl
            -   **Value**: true
            -   **Type**: java.lang.String
    6.  Locate the host.port.https property and complete one of the following options:

        -   If the property exists, click the property to modify it and change the value to alias\_port.

            **Note:** The alias\_port is the port number that is used for the virtual host alias that is specified in a previous step \(usually 443\).

        -   If the property does not exist, click **New** to create the property and enter the following information:
            -   **Name**: host.port.https
            -   **Value**: 443
            -   **Type**: java.lang.String
    7.  Click **Save** to save the changes to the master configuration.

    8.  Log out of the WebSphere Integrated Solutions Console.

8.  Update the Transport Security Constraint in wps.ear.

    You can modify the transport so that WebSphere Application Server enforces the use of SSL for all pages under the /myportal/ URL. Use this step to completely secure the protected area over HTTPS.

    **Clustered environments:** Complete this step on the primary node, then complete a full resynchronize to propagate the changes to all nodes.

    1.  Export wps.ear.

        See the related tasks section for instructions.

    2.  Go to the directory where you exported wps.ear: path\_to\_exported\_EAR/installedApps/node\_name/wps.ear/wps.war/WEB-INF

        **Note:** You might need to extract the exported EAR before you can edit any files.

    3.  Locate and open web.xml with any text editor.

    4.  Set the value of the `<transport-guarantee>` element to CONFIDENTIAL under the `<security-constraint>` element for the /myportal/\* URL. Do not change the values for the other `<transport-guarantee>` elements.

        Use the following information to update the XML file:

        ```
              <security-constraint id="SecurityConstraint_1">
                 <web-resource-collection id="WebResourceCollection_1">
                    <web-resource-name></web-resource-name>
                 <url-pattern>/myportal/*</url-pattern>
                 				<http-method>DELETE</http-method>
                    <http-method>POST</http-method>
                    <http-method>GET</http-method>
                    <http-method>PUT</http-method>
                 </web-resource-collection>
                 <auth-constraint id="AuthConstraint_1">
                    <description></description>
                    <role-name>All Role</role-name>
                 </auth-constraint>
                 <user-data-constraint id="UserDataConstraint_4">
                    <transport-guarantee>CONFIDENTIAL</transport-guarantee> 
                 </user-data-constraint>
              </security-constraint>
        ```

    5.  Save and close web.xml.

    6.  Redeploy wps.ear.

        See the related tasks section for instructions.

    7.  Synchronize the nodes in your clustered environment.

        1.  Log in to the Deployment Manager.
        2.  Select **System Administration** \> **Nodes**.
        3.  Select the nodes to synchronize from the list.
        4.  Click **Full Resynchronize**.
9.  Complete the following steps when you use a remote web server if you must allow direct access to the WebSphere\_Portal node on the internal port.

    For example, http://hostname.example.com:10039/wps/portal, where hostname.example.com is the fully qualified host name of the server where Portal is running and 10039 is the default transport port that is created by WebSphere® Application Server. The port number might be different for your environment.:

    1.  From the WebSphere Integrated Solutions Console, go to **Servers** \> **Server Types** \> **WebSphere application servers** \> **WebSphere\_Portal** \> **Web Container Settings** \> **Web Container Transport Chains**.

    2.  Click **New**.

    3.  Select a name for the transport chain.

    4.  Select the **WebContainer-Secure** template \(templates/chains\|webcontainer-chains.xml\).

    5.  Select **Next**.

    6.  Specify the **Port name**.

        For example, port 443.

    7.  Click **Next**.

    8.  Click **Finish** to confirm the creation of the transport chain.

    9.  Click **Save**.

    10. In a clustered environment, repeat the previous steps for each node in the cluster.

        For example, WebSphere\_Portal2, and then synchronize the changes to all nodes.

10. Complete the following steps only if you use the **Login** portlet:

    1.  Log in to HCL Portal.

    2.  Click the **Administration menu** icon. Then, click **Portlet Management** \> **Portlets**.

    3.  Locate the Login portlet and click the **Configure portlet** icon.

    4.  Locate the UseSecureLoginActionUrl parameter and click the **Edit value** icon.

    5.  Type true in the **Value** field and click **OK** to save your changes.

    6.  Click **OK** to return to the **Manage Portlets** portlet.

11. In a stand-alone environment, stop and restart the WebSphere\_Portal server. In a clustered environment, stop and restart the Deployment Manager and the WebSphere\_Portal servers.

    **Clustered environments:** In the Deployment Manager, verify that the EAR changes were successfully synchronized to all nodes. Stop and restart the servers on all nodes.

12. Complete the following steps to test your changes:

    1.  Start the home page in a web browser through an HTTP URL that is not secure.

        For example, http://hostname.example.com:10039/wps/portal, where hostname.example.com is the fully qualified host name of the server where Portal is running and 10039 is the default transport port that is created by WebSphere Application Server. The port number might be different for your environment..

    2.  Verify that the login link in the banner area uses the HTTPS schema for the link to the login page.

    3.  Enter your user name and password. Then, click the login link to verify that the page is protected. The URL must be HTTPS and the browser must indicate that the page is protected.

        **Browser security prompt:** After you click the login link to accept the server certificate, a browser security prompt might appear.

    4.  Log off.

    5.  Log in using an HTTP URL that is not secure and that points directly to the protected area.

        For example, http://hostname.example.com:10039/wps/portal, where hostname.example.com is the fully qualified host name of the server where Portal is running and 10039 is the default transport port that is created by WebSphere Application Server. The port number might be different for your environment.

    6.  Verify that you are requested to log in and that the login page and the portal page are protected through SSL.

        **Note:** If the security-constraint was not modified to **CONFIDENTIAL**, SSL does not protect the login page and the portal pages.


-   **[Updating files in wps.ear](../setup_ssl/ssl_update_web.md)**  
This section shows how to use wsadmin commands to update web.xml and web\_merged.xml for wps.ear.


**Next topic:**[Configuring SSL only for the login process](../../../manage/security/information/confidentiality/configuring_ssl/config_ssl_login)

**Related information**  


[Configuring Security Access Manager for authentication only](../../security/people/authentication/external_sec_mgmt/security_access_manager/cfg_sec_access/cfg_tam_auth)

[Configuring Security Access Manager for authentication, authorization, and the Credential Vault](../../security/people/authentication/external_sec_mgmt/security_access_manager/cfg_sec_access/tam_prov_usrs)

[About the XML configuration interface](../../..manage/portal_admin_tools/xml_config_interface/adxmlabt)

