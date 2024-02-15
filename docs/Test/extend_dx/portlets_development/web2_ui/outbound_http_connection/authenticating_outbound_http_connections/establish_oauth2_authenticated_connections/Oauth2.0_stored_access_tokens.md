# Configure OAuth 2.0 using stored access tokens

Some OAuth 2.0 authentication providers allow clients such as Dropbox to set a static access token. Configure an outbound HTTP connection that follows the Client Grant flow. OAuth 2.0 for an outbound HTTP connection is activated by setting the metadata SSO\_OAUTH2\_IDP at the connection policy or policy mapping. The value of this metadata setting is a symbolic name for the Identity provider that establishes the connection. This name is used as a prefix for another set of metadata that define the settings of the Identity provider as the following example illustrates.

If this feature is supported, then the OAuth 2.0 connection can be configured as follows:

```

<?xml version="1.0" encoding="UTF-8"?>
<proxy-rules xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
 xsi:noNamespaceSchemaLocation="http://www.ibm.com/xmlns/prod/sw/http/outbound/proxy-config/2.0">
    <variables>
        <dynamic-policy name="idp.token.urls">
            <value>https://www.myremotesite.com/RESOURCE*</value>
        </dynamic-policy>
    </variables>
    <mapping name="idp.token.policy" contextpath="/myproxy" url="*">
	<policy url="{$idp.token.urls}" >
		<actions>
			<method>GET</method>
			<method>POST</method>
		</actions>
		<meta-data>
			<name>SSO_OAUTH2_IDP</name>
			<value>idp</value>
		</meta-data>
		<meta-data>
			<name>idp.PARAM_NAME.1</name>
			<value>GRANT_TYPE</value>
		</meta-data>
		<meta-data>
			<name>idp.PARAM_VALUE.1</name>
			<value>token</value>
		</meta-data>


		<meta-data>
			<name>idp.PARAM_NAME.2</name>
			<value>ACCESS_TOKEN</value>
		</meta-data>
		<meta-data>
			<name>idp.PARAM_VALUE.2</name>
			<value>{$$MyAccessTokenCvSlot}</value>
		</meta-data>

	  </policy>
    </mapping>
</proxy-rules>
```

Where

-   **https://www.myremotesite.com/RESOURCE***

    This URL pattern is for the endpoint of your resource server that is protected by the Oauth2 access token flow.

-   **Name=idp.PARAM_NAME.n, value=GRANT_TYPE Name=idp.PARAM_VALUE.n, value=token**

    Required. The metadata value for `idp.PARAM_VALUE.n` specifies that this connection follows the access token flow. The value `idp` is a symbolic name that must match with the value of the `SSO_OAUTH2_IDP` metadata. The value n is for a number that must be unique within this metadata block.

-   **Name=idp.PARAM_NAME.n, value=ACCESS_TOKEN Name=idp.PARAM_VALUE.n, value={$$MyAccessTokenCvSlot}**

    Required. The metadata value for idp.PARAM\_VALUE.n specifies the client ID. The value `MyAccessTokenCvSlot` is for the ID of a credential vault slot, which contains the access token in its credentials. The user name of the referenced credential slot entry must be `Bearer`. The password of this credential slot entry must contain the access token. The value idp is a symbolic name that must match with the value of the `SSO_OAUTH2_IDP` metadata. The value n is for a number that must be unique within this metadata block. If this metadata is not specified, the token access request does not contain client credentials.


For an example of a configuration for accessing Dropbox through Outbound HTTP Connections, see Setting up OAuth 2.0 for Dropbox by using stored access tokens.

# Setting up OAuth 2.0 for Dropbox by using stored access tokens

Set up an OAuth 2.0 access for Dropbox by using stored access tokens. Follow these steps to set up an OAuth 2.0 connection of a Dropbox resource through the Ajax Proxy.

1.  Create an app at your Oauth2.0 provider Dropbox.

    1.  Open a browser and go to `https://www.dropbox.com/developers`.

    2.  Select **My Apps** and click **Create app**.

    3.  Choose the API **dropbox API** . Choose the type of access that you need. Give a unique name for your app. Then, click **Create App**. Dropbox displays the App Settings panel for the app that you created.

    4.  In the App Settings page, click **Generated Access Token**.

    5.  Note the value of the access token that you created.

    6.  Sign out of your Dropbox session.

2.  Provide valid SSL keys of the dropbox API host.

    1.  Log in to the WebSphere® Application Server admin console of the Proxy.

    2.  Select **Security > SSL certificate** and **key management > Key stores and certificates**.

    3.  Click the truststore that is used by the Portal Server, Depending on your security configuration and topology, this `NodeDefaultTrustStore`, or `CellDefaultTrustStore`.

    4.  Select the `Signer Certificates` from the Additional Properties section.

    5.  Click **Retrieve from port**.

    6.  Enter content.dropboxapi.com as Host value, 443 for the Port address, and enter an alias name like my\_dropbox. Then, click **Retrieve signer information**.

    7.  The signer certificate is loaded to your WebSphere Application Server administration. Click **OK** to add the certificate to your WebSphere Application Server configuration, then click **Save** to add the settings at the master configuration.

3.  Create a Credential Slot entry for the access token.

    1.  Log in to the Portal by using an Admin user.

    2.  Click **Open portal administration** and select **Credential Vault** in the **Access** section.

    3.  Click **Add a Vault Slot**. Enter MyAccessTokenCvSlot for the slot name. Select the vault resource that you want to use, or create a new vault resource. Check the **Vault is shared** setting. Use the Shared user ID `Bearer` and set the access token that you noted in step 1e.

    4.  Click **OK** to create the new vault slot.

4.  Create an Outbound HTTP connection policy for the new resource.

    1.  Create the following XML document by using a capable XML editor or text editor.

        ```
        
        <?xml version="1.0" encoding="UTF-8"?>
        <proxy-rules xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
         xsi:noNamespaceSchemaLocation="http://www.ibm.com/xmlns/prod/sw/http/outbound/proxy-config/2.0">
            <variables>
                <dynamic-policy name="dropbox-idp.urls">
                    <value>https://content.dropboxapi.com/*</value>
        		<value>https://api.dropboxapi.com/*</value>
        		<value>https://notify.dropboxapi.com/*</value>
                </dynamic-policy>
            </variables>
            <mapping contextpath="/myproxy" url="*">
        	<policy name="dropbox-idp.policy" url="{$dropbox-idp.urls}" >
        		<actions>
        			<method>GET</method>
        			<method>POST</method>
        			<method>PUT</method>
        		</actions>
                    <headers>
                       <header>Dropbox-API-Arg</header>
                    </headers>
        		<meta-data>
        			<name>SSO_OAUTH2_IDP</name>
        			<value>dropbox-idp</value>
        		</meta-data>
        
        		<meta-data>
        			<name>dropbox-idp.PARAM_NAME.1</name>
        			<value>GRANT_TYPE</value>
        		</meta-data>
        		<meta-data>
        			<name>dropbox-idp.PARAM_VALUE.1</name>
        			<value>token</value>
        		</meta-data>
        
        		<meta-data>
        			<name>dropbox-idp.PARAM_NAME.2</name>
        			<value>ACCESS_TOKEN</value>
        		</meta-data>
        		<meta-data>
        			<name>dropbox-idp.PARAM_VALUE.2</name>
        			<value>{$$MyAccessTokenCvSlot}</value>
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
        Linux: ./ConfigEngine.sh update-outbound-http-connection-config -DconfigFileName=/tmp/global\_oauth\_update.xml \
                  -DWasPassword=password -DPortalAdminPwd=password 
        Windows: ConfigEngine.bat update-outbound-http-connection-config -DconfigFileName=/tmp/global\_oauth\_update.xml \
                  -DWasPassword=password -DPortalAdminPwd=password
        ```

        The protected resource is now ready-to-use.

5.  Test the connection. To test the connection to the Dropbox resource through oauth2, you can upload a test file (for example, a jpg image or a plain text file ) to your Dropbox account. Then, use CURL to download the file through the Ajax proxy.

    1.  Upload a test resource to your Dropbox folder: open a browser and go to `https://www.dropbox.com/`. Sign in using your Dropbox credentials.

    2.  Click the Apps folder, then click the folder of the app that you created in Step 1c. Click **Upload Files**. In the file chooser, select a test file that you want to upload.

    3.  Start the following two curl commands to test the connection:

        ```
        curl -c pc.jar "http://dx_host.com/wps/j_security_check? \
        j_username=portal_user&j_password=portal_pwd" 
        
        curl -b pc.jar \ "http://dx_host.com/wps/myproxy/https/content.dropboxapi.com/2/files/download" \
        --header "Dropbox-API-Arg: {\"path\": \"/test.jpg\"}" >result_drop.jpg
        ```

        Where

        -   The variable `dx_host.com` is for the host name and port number of the Portal Server.
        -   The variable `portal_user` and `portal_pwd` are for the portal credentials that you want to use.
        -   The variable `/test.jpg` is for the test resource that you uploaded in step 5b.


