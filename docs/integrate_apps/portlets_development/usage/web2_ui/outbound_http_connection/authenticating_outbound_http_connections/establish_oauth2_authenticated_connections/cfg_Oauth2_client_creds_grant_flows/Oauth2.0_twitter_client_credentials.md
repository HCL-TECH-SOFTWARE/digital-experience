# Setting up OAuth 2.0 for Twitter by using the Client Credentials Grant flow

Set up a client credential grant flow to configure OAuth 2.0 access to Twitter resources.

1.  Create an app at your OAuth 2.0 provider \(Twitter\).

    1.  Open a browser and go to `https://apps.twitter.com`.

    2.  Click the **Create new app** button.

    3.  Give a unique name and a descriptive text for your app. Enter the URI of your remote site. This value is required by twitter, but does not have a functional impact on the oauth2 authentication. Leave the Callback URL field empty. Then, click **Create your Twitter Application**. Twitter displays the App Settings panel for the app that you created.

    4.  Click **Manage Keys and Access tokens**.

    5.  Note the value of the Consumer Key and the Consumer Secret.

    6.  Sign out of your Twitter session.

2.  Provide valid SSL keys of the drop box API host.

    1.  Log in to the WebSphere Application Server admin console of the Proxy.

    2.  Select **Security** \> **SSL certificate** and **key management** \> **Key stores and certificates**.

    3.  Click the truststore that is used by the Portal Server, Depending on your security configuration and topology, this `NodeDefaultTrustStore`, or `CellDefaultTrustStore`.

    4.  Select the `Signer Certificates` from the Additional Properties section.

    5.  Click **Retrieve from port**.

    6.  Enter /api.twitter.com as Host value, 443 for the Port address, and enter an alias name like my\_twitter. Then, click **Retrieve signer information**.

    7.  The signer certificate is loaded to your WebSphere Application Server administration. Click **OK** to add the certificate to your WebSphere Application Server configuration, then click **Save** to add the settings at the master configuration.

3.  Create a Credential Slot entry for the client credentials .

    1.  Log in to the Portal by using an Admin user.

    2.  Click **Open portal administration** and select **Credential Vault** in the **Access** section.

    3.  Click **Create a Vault Slot**. Enter MyTwitterCvSlot for the slot name. Select the vault resource that you want to use, or create a new vault resource. Check the **Vault is shared** setting. Use the Consumer key as Shared User ID, and enter the Consumer secret in the password field.

    4.  Click **OK** to create the new vault slot.

4.  Create an Outbound HTTP connection policy for the new resource.

    1.  Create the following XML document by using a capable XML editor or text editor:

        ```
        
        <?xml version="1.0" encoding="UTF-8"?>
        <proxy-rules xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
         xsi:noNamespaceSchemaLocation="http://www.ibm.com/xmlns/prod/sw/http/outbound/proxy-config/2.0">
            <variables>
                <dynamic-policy name="twitter-idp.urls">
                    <value>https://api.twitter.com/*</value>
                </dynamic-policy>
            </variables>
            <mapping contextpath="/myproxy" url="*">
        	<policy name="twitter-idp.policy" url="{$twitter-idp.urls}" >
        		<actions>
        			<method>GET</method>
        			<method>PUT</method>
        			<method>POST</method>
        		</actions>
        		<cookie-rule>
        			<cookie>MyAuthCookieForClientFlow</cookie>
        			<scope>user</scope>
        			<handling>store-in-session</handling>
        		</cookie-rule>
        		<cookie-rule>
        			<cookie>personalization_id</cookie>
        			<scope>user</scope>
        			<handling>store-in-session</handling>
        		</cookie-rule>
        		<cookie-rule>
        			<cookie>guest_id</cookie>
        			<scope>user</scope>
        			<handling>store-in-session</handling>
        		</cookie-rule>
        		<meta-data>
        			<name>SSO_OAUTH2_IDP</name>
        			<value>twitter-idp</value>
        		</meta-data>
        		<meta-data>
        			<name>twitter-idp.IDP_PROTOCOL</name>
        			<value>https</value>
        		</meta-data>
        		<meta-data>
        			<name>twitter-idp.IDP_HOST</name>
        			<value>api.twitter.com</value>
        		</meta-data>
        		<meta-data>
        			<name>twitter-idp.IDP_PORT</name>
        			<value>443</value>
        		</meta-data>
        		<meta-data>
        			<name>twitter-idp.IDP_URI</name>
        			<value>/oauth2/token</value>
        		</meta-data>
        		<meta-data>
        			<name>twitter-idp.PARAM_NAME.1</name>
        			<value>GRANT_TYPE</value>
        		</meta-data>
        		<meta-data>
        			<name>twitter-idp.PARAM_VALUE.1</name>
        			<value>client_credentials</value>
        		</meta-data>
        		<meta-data>
        			<name>twitter-idp.PARAM_NAME.2</name>
        			<value>CLIENT_ID</value>
        		</meta-data>
        		<meta-data>
        			<name>twitter-idp.PARAM_VALUE.2</name>
        			<value>{$$MyTwitterCvSlot}</value>
        		</meta-data>
        		<meta-data>
        			<name>twitter-idp.PARAM_NAME.3</name>
        			<value>CLIENT_CRED</value>
        		</meta-data>
        		<meta-data>
        			<name>twitter-idp.PARAM_VALUE.3</name>
        			<value>{$$MyTwitterCvSlot}</value>
        		</meta-data>
        		<meta-data>
        			<name>twitter-idp.IDP_AUTH_COOKIE.1</name>
        			<value>MyAuthCookieForClientFlow</value>
        		</meta-data>
        	  </policy>
            </mapping>
        </proxy-rules>
        ```

    2.  Save the document to a file. For example, save the file to `/tmp/global_oauth_update.xml`.

    3.  Apply the configuration at the Outbound HTTP Connections global configuration. Run the following task to export the outbound HTTP connection configuration to an XML document.

        ```
        AIX: ./ConfigEngine.sh update-outbound-http-connection-config -DconfigFileName=/tmp/global\_oauth\_update.xml \
                -DWasPassword=password -DPortalAdminPwd=password 
        HP-UX: ./ConfigEngine.sh update-outbound-http-connection-config -DconfigFileName=/tmp/global\_oauth\_update.xml \
                  -DWasPassword=password -DPortalAdminPwd=password 
        IBM i: ConfigEngine.sh update-outbound-http-connection-config -DconfigFileName=/tmp/global\_oauth\_update.xml \
                -DWasPassword=password -DPortalAdminPwd=password 
        Linux: ./ConfigEngine.sh update-outbound-http-connection-config -DconfigFileName=/tmp/global\_oauth\_update.xml \
                 -DWasPassword=password -DPortalAdminPwd=password 
        Solaris: ./ConfigEngine.sh update-outbound-http-connection-config -DconfigFileName=/tmp/global\_oauth\_pdate.xml \
                    -DWasPassword=password -DPortalAdminPwd=password 
        Windows: ConfigEngine.bat update-outbound-http-connection-config -DconfigFileName=/tmp/global\_oauth\_update.xml \
                  -DWasPassword=password -DPortalAdminPwd=password 
        ```

    4.  Delete the XML file `/tmp/global_oauth_update.xml`. The protected resource is now ready-to-use.

5.  Test the connection. To test the connection to Twitter through oauth2, you can start a Twitter REST API through the proxy. The following example retrieves the Twitter timeline. Start the following two curl commands to test the connection:

    ```
    curl -c pc.jar "http://dx\_host.com/wps/j_security_check?\
    j_username=portal\_user&j_password=portal\_pwd" 
    
    curl -b pc.jar \ 
    "http://dx_host.com/wps/myproxy/https/api.twitter.com/1.1/statuses/user_timeline.json?\
    count=10&screen_name=twitterapi" >timeline.json
    ```

    Where

    -   The variable `dx_host.com` is for the host name and port number of the Portal Server.
    -   The variable `portal_user` and `portal_pwd` are for the portal credentials that you want to use.


