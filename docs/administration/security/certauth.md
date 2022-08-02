# Setting up Client Certificate Authentication

View the steps required to configure HCL Digital Experience for SSL client certificate authentication. The supported scenario is a "client certificate only" setup that switches completely to this authentication method and does not allow form-based login via username and password. Other configuration scenarios are possible, but are neither recommended nor supported.

Complete the following steps to configure HCL Digital Experience for SSL client certificate authentication:

**Note:** See related references section on how to setup WAS for SSL support with client certification.

1.  Ensure you complete the following steps when you configure IBM® WebSphere® Application Server for SSL support with client certificates:

    1.  When you define the Quality of protection \(QoP\) settings for the new SSL Repertoire, do the following:

        1.  Choose **Required** from the **Client Authentication** list
        2.  Choose **SSL\_TLS** from the **Protocol** list.
        3.  In the **Provider** section, select **Predefined JSSE provider** then choose **IBMJSSE** from the **Select provider** list.
        For more information, see the *Quality of Protection* topic in the WebSphere Application Server Information Center.

    2.  Ensure you reference the correct key and trust files. You should create new key and trust files using the IKEYMAN tool and the PKCS12 format for maximum browser compatibility.

        **Note:** The key file must contain the server certificate. The trust file must contain either all the client certificates of users that will be authenticated or a certification authority certificate \(CA key\) that can be used to verify the client certificates of users.

    3.  Associate the secure transport chain with the new SSL Repertoire.

    4.  Configure your advanced LDAP security settings. Certificate-based authentication requires that you configure the authentication mechanism so that one of the following conditions apply:

        -   WebSphere Application Server maps the entire Distinguished Name \(DN\) from the subject field of the certificate to a corresponding Distinguished Name in your LDAP. To use this option, set the mapping technique in the LDAP configuration panel to exact.
        -   WebSphere Application Server maps the entry in the subject field to a different attribute than the Distinguished Name in your user registry. To use this option, set up the mapping technique in the LDAP configuration panel to use the certificate filter option. Using the certificate filter option allows you more flexibility in using attributes other than the Distinguished Name to identify the users. For example, the filter uid=$\{SubjectCN\} maps the SubjectCN field of the client certificate to the uid attribute in your LDAP.
2.  Complete the following steps if you use an external HTTP server:

    1.  Regenerate the plug-in. Go to **Servers** \> **Web Servers**. Select the **Web server** and click **Generate Plug-in**. Update the HTTP server with the generated plug-in.

    2.  Restart the HTTP server for the changes to take effect.

    3.  Enable client certificate authentication in your Web server. For IBM HTTP Server \(IHS\), refer to [http://www.redbooks.ibm.com/](http://www.redbooks.ibm.com/) and search for security handbook for the latest information about WebSphere Application Server.

3.  Update wps.ear to change the authentication method and transport guarantee setting to support client certificate authentication.

    **Clustered environments:** Complete this step on the primary node, then complete a full resynchronize to propagate the changes to all nodes.

    1.  Export wps.ear.

        See the following topic title in the Related task section for instructions: *Exporting the portal EAR file*.

    2.  Go to the directory where you exported wps.ear: path\_to\_exported\_EAR/installedApps/node\_name/wps.ear/wps.war/WEB-INF

        **Note:** You might need to extract the exported EAR before you can edit any files.

    3.  Edit the web.xml file located in the exported ear directory under /wps.war/WEB-INF.

    4.  Change the login-config tag to the client certificate authentication method.

        ```xmp
        <login-config id="LoginConfig_1">	
        		<auth-method>CLIENT-CERT</auth-method>	
        		<realm-name>WPS</realm-name>	
        		<!--<form-login-config id="FormLoginConfig_1">		    
        			<form-login-page>/redirect</form-login-page>	    
        			<form-error-page>/error.html</form-error-page>	
        		</form-login-config> -->
        </login-config>
        ```

    5.  Change the transport guarantee setting in the security constraint for the protected area to CONFIDENTIAL:

        ```xmp
        <security-constraint id="SecurityConstraint_1">  
        		<web-resource-collection id="WebResourceCollection_1">    
        			<web-resource-name/>   
        			<url-pattern>/myportal/*</url-pattern>    
        			<http-method>DELETE</http-method>    
        			<http-method>GET</http-method>    
        			<http-method>POST</http-method>    
        			<http-method>PUT</http-method>    
        			<http-method>HEAD</http-method> 
        		</web-resource-collection>  
        		<auth-constraint id="AuthConstraint_1">	
        			<description/>	
        			<role-name>All Role</role-name>  
        		</auth-constraint>  
        		<user-data-constraint id="UserDataConstraint_4">    
        			<transport-guarantee>CONFIDENTIAL</transport-guarantee>  
        		</user-data-constraint>
        </security-constraint>
        ```

    6.  Save and close web.xml.

    7.  Redeploy wps.ear.

        See the following topic title in the Related task section for instructions: *Redeploying the portal EAR file*.

    8.  Clustered environments: Synchronize the nodes.

        1.  Log in to the Deployment Manager.
        2.  Select **System Administration** \> **Nodes**.
        3.  Select the nodes to synchronize from the list.
        4.  Click **Full Resynchronize**.
4.  Update the themes and settings.

    1.  Modify the URLs for login and logout in the themes that are used in your scenario. In the default theme, these are located in the banner\_toolbar.jspf and mainMenu.jsp files in the [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/installer/wp.ear/installableApps/wps.ear/wps.war/themes/ directory.The files that contain the login and logout links can be different, depending on the theme. In more recent themes, these links might be located in Default.jsp. In older themes, these links might be located in either banner.jspf or mainMenu.jsp.

        **Finding theme resources:** See the *Location of theme resources* link in the Related section.

        **Clustered environments:** Complete the following steps. Notice that in a clustered environment, the steps must be completed on the Deployment Manager.

        -   For the login link, use an arbitrary protected page. The login link will then implicitly trigger the SSL handshake in WebSphere Application Server due to the security constraint. For example, you can generate the URL to point to the protected welcome page:

            ```xmp
            <%-- Login button --%>
            <%-- comment this to enable screen login --%> 
            <portal-logic:if loggedIn="no">
            <portal-navigation:urlGeneration 
            contentNode="ibm.portal.Home.Welcome" home="protected">	    
            				<a tabIndex="7" class="toolbarLink" href='<% 
            wpsURL.write(escapeXmlWriter); %>'>	    
            				<portal-fmt:text key="link.login" bundle="nls.engine"/>	    
            </a></portal-navigation:urlGeneration>
            </portal-logic:if>
            ```

        -   For the logout, you need to consider whether or not a logout should redirect you back to HTTP. If so, you need to set the property redirect.logout.ssl in the configuration service to true. Also, set the host.port.http in the same service to the correct port. If you want to stay in the HTTPS protocol after the logout, you do not need to complete any configuration steps here.
    2.  Remove the login portlet from all pages where it is placed; for example, the welcome and the login page.

    3.  If you want to completely disable the entry points 'login portlet' and 'login URL' to HCL Digital Experience, complete the following steps: set the command.login property in the configuration service to the value LoginUserBlocked. This ensures that a login can only be triggered after being authenticated by WebSphere Application Server, in this case by the client certificate handshake.

        1.  Log on to the WebSphere Integrated Solutions Console.
        2.  Go to **Resources** \> **Resource Environment** \> **Resource Environment Providers**.
        3.  Click **WP ConfigService**.
        4.  Click **Custom Properties** under the Additional Properties heading.
        5.  Click **command.login** and change the value from LoginUserAuth to LoginUserBlocked.
        6.  Click **Save** to save the changes to the master configuration.
        7.  Log out of the WebSphere Integrated Solutions Console.
5.  Stop and restart the appropriate servers to propagate the changes. For specific instructions, see [Starting and stopping servers, deployment managers, and node agents](../admin-system/stopstart.md).

6.  Verify your setup.

    1.  Import one of the client certificates that are accepted by the server to your browser.

    2.  Launch the home page in this browser through an HTTP URL that is not secure; for example, http://hostname.example.com:10039/wps/portal, where hostname.example.com is the fully qualified host name of the server where Portal is running and 10039 is the default transport port that is created by WebSphere® Application Server. The port number might be different for your environment..

    3.  Click the login link.

    4.  Verify that the server switches to HTTPS and you are prompted for the client certificate.

    5.  After selecting and confirming the correct client certificate, you are redirected to the protected area served with HTTPS.


**Parent topic:**[Configuring SSL](../security/ssl_intro.md)

**Previous topic:**[Configuring SSL only for the login process](../security/config_ssl_login.md)

**Next topic:**[Cryptographic hardware for SSL acceleration](../security/sec_pw_crypt.md)

**Related information**  


[WebSphere Application Server Network Deployment Version 8.5: Creating a Secure Sockets Layer configuration](https://www.ibm.com/docs/en/SSAW57_8.5.5/com.ibm.websphere.nd.doc/ae/tsec_sslconfiguration.html)

[WebSphere Application Server Network Deployment Version 8.5: Quality of protection \(QoP\) settings](https://www.ibm.com/docs/en/was-nd/8.5.5?topic=configuration-quality-protection-qop-settings)

[Understanding the Portal 8.5 modularized theme](../dev-theme/themeopt_defaultparts.md)

