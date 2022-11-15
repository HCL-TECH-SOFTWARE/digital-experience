# Setting up OAuth 2.0 for Liberty authentication providers by using the Password Grant flow

Set up a password grant flow to resources that are protected by the Liberty OAuth 2.0 authorization server by using the password grant flow.

1.  Set up a client app on Liberty.

    1.  Create an Oauth2.0 app on liberty. To establish a test Oauth2.0 provider, follow the instructions in [https://www.ibm.com/developerworks/websphere/techjournal/1305\_odonnell2/1305\_odonnell2.html](https://www.ibm.com/developerworks/websphere/techjournal/1305_odonnell2/1305_odonnell2.html).

    2.  Note the following settings.

        1.  The name of the Oauth2 provider. For example, `DemoProvider` is used in this sample.
        2.  ID and password of the user credentials. This sample uses `test1/ test1`, `test2/test2`, or `test3/test3`.
        3.  ID and password of the client credentials. This sample uses `LibertyRocks/AndMakesConfigurationEasy`.
        4.  The host name and port of your Oauth2.0 authentication provider. In this Example, the host name `www.myremotesite.com:9443` is assumed.
2.  Provide valid SSL keys of the liberty server for the Ajax Proxy.

    1.  Log in to the WebSphere Application Server admin console of the Proxy.

    2.  Select **Security > SSL certificate** and **key management > Key stores and certificates**.

    3.  Click the truststore that is used by the Portal Server. Depending on your security configuration and topology, this `NodeDefaultTrustStore`, or `CellDefaultTrustStore`.

    4.  Select the `Signer Certificates` from the Additional Properties section.

    5.  Click **Retrieve from port**.

    6.  Enter www.myremotesite.com as Host value, 9443 for the Port address, and enter an alias name like my\_liberty. Then, click **Retrieve signer information**.

    7.  The signer certificate is loaded to your WebSphere Application Server administration. Click **OK** to add the certificate to your WebSphere Application Server configuration, then click **Save** to add the settings at the master configuration.

3.  Create a Credential Slot entry for the user credentials and the client credentials.

    1.  Log in to the Portal by using an Admin user.

    2.  Click **Open portal administration** and select **Credential Vault** in the **Access** section.

    3.  Click **Create a Vault Slot**. Enter MyClientCvSlot for the slot name. Select the vault resource that you want to use, or create a new vault resource. Check the **Vault is shared** setting. Use the Client key as Shared User ID, and set the Client password that you noted in Step 1b. Click **OK** to create the new vault slot.

    4.  Click **Create a Vault Slot** again . Enter MyUserCvSlot for the slot name. Select the vault resource that you want to use, or create a new vault resource. Check the **Vault is shared** setting. Enter the user ID as Shared User ID, and set the corresponding password that you noted in Step 1b. Click **OK** to create the new vault slot.

4.  Create an Outbound HTTP connection policy for the new resource.

    1.  Create the following XML document by using a capable XML editor or text editor.

        ```
        
        <?xml version="1.0" encoding="UTF-8"?>
        <proxy-rules xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
         xsi:noNamespaceSchemaLocation="http://www.ibm.com/xmlns/prod/sw/http/outbound/proxy-config/2.0">
            <variables>
                <dynamic-policy name="liberty-idp.urls">
                    <value>https://www.myremotesite.com/*</value>
                </dynamic-policy>
            </variables>
            <mapping contextpath="/myproxy" url="*">
        	<policy name="liberty-idp.policy" url="{$liberty-idp.urls}" >
        		<actions>
        			<method>GET</method>
        			<method>PUT</method>
        			<method>POST</method>
        		</actions>
        		<cookie-rule>
        			<cookie>MyAuthCookieForPasswordFlow</cookie>
        			<scope>user</scope>
        			<handling>store-in-session</handling>
        		</cookie-rule>
        		<meta-data>
        			<name>SSO_OAUTH2_IDP</name>
        			<value>liberty-idp</value>
        		</meta-data>
        
        		<meta-data>
        			<name>liberty-idp.IDP_PROTOCOL</name>
        			<value>https</value>
        		</meta-data>
        		<meta-data>
        			<name>liberty-idp.IDP_HOST</name>
        			<value>www.myremotesite.com</value>
        		</meta-data>
        		<meta-data>
        			<name>liberty-idp.IDP_PORT</name>
        			<value>9443</value>
        		</meta-data>
        		<meta-data>
        			<name>liberty-idp.IDP_URI</name>
        			<value>/oauth2/endpoint/DemoProvider/token</value>
        		</meta-data>
        
        		<meta-data>
        			<name>liberty-idp.PARAM_NAME.1</name>
        			<value>GRANT_TYPE</value>
        		</meta-data>
        		<meta-data>
        			<name>liberty-idp.PARAM_VALUE.1</name>
        			<value>password</value>
        		</meta-data>
        
        
        		<meta-data>
        			<name>liberty-idp.PARAM_NAME.2</name>
        			<value>CLIENT_ID</value>
        		</meta-data>
        		<meta-data>
        			<name>liberty-idp.PARAM_VALUE.2</name>
        			<value>{$$MyClientCvSlot}</value>
        		</meta-data>
        
        		<meta-data>
        			<name>liberty-idp.PARAM_NAME.3</name>
        			<value>CLIENT_CRED</value>
        		</meta-data>
        		<meta-data>
        			<name>liberty-idp.PARAM_VALUE.3</name>
        			<value>{$$MyClientCvSlot}</value>
        		</meta-data>
        
        		<meta-data>
        			<name>liberty-idp.PARAM_NAME.4</name>
        			<value>USER_ID</value>
        		</meta-data>
        		<meta-data>
        			<name>liberty-idp.PARAM_VALUE.4</name>
        			<value>{$$MyUserCvSlot}</value>
        		</meta-data>
        
        		<meta-data>
        			<name>liberty-idp.PARAM_NAME.5</name>
        			<value>USER_CRED</value>
        		</meta-data>
        		<meta-data>
        			<name>liberty-idp.PARAM_VALUE.5</name>
        			<value>{$$MyUserCvSlot}</value>
        		</meta-data>
        
        		<meta-data>
        			<name>liberty-idp.IDP_AUTH_COOKIE.1</name>
        			<value>MyAuthCookieForPasswordFlow</value>
        		</meta-data>
        	  </policy>
            </mapping>
        </proxy-rules>
        ```

    2.  Change the values of the settings for `liberty-idp.urls`, `liberty-idp.IDP_HOST`, `liberty-idp.IDP_PORT`, and `liberty-idp.IDP_URI`.

    3.  Save the document to a file. For example, save the file to `/tmp/global_oauth_update.xml`.

    4.  Apply the configuration at the Outbound HTTP Connections global configuration. Run the following task to export the outbound HTTP connection configuration to an XML document.

        ```
        AIX: ./ConfigEngine.sh update-outbound-http-connection-config -DconfigFileName=/tmp/global\_oauth\_update.xml \
        -DWasPassword=password -DPortalAdminPwd=password 
        Linux: ./ConfigEngine.sh update-outbound-http-connection-config -DconfigFileName=/tmp/global\_oauth\_update.xml \
                 -DWasPassword=password -DPortalAdminPwd=password 
        Windows: ConfigEngine.bat update-outbound-http-connection-config -DconfigFileName=/tmp/global\_oauth\_update.xml \
                  -DWasPassword=password -DPortalAdminPwd=password 
        ```

        The Oauth2 connection is now ready-to-use.

5.  Test the connection. To test the connection to the drop box resource through oauth2, you can download a twitter resource such as the timeline by using its REST APIs. Start the following two curl commands to test the twitter connection.

    ```
    curl -c pc.jar "http://dx\_host.com/wps/j_security_check?\
    j_username=portal\_user&j_password=portal\_pwd" 
    
    curl -b pc.jar \ "http://dx_host.com/wps/myproxy/https/www.myremotesite.com:9443/testpage" >testpage.html
    ```

    Where

    -   The variable dx_host.com is for the host name and port number of the Portal Server.
    -   The variables portal_user and portal_pwd are for the portal credentials that you want to use.
    -   The variable `www.myremotesite.com:9443` is for the host name and port of the liberty server.


