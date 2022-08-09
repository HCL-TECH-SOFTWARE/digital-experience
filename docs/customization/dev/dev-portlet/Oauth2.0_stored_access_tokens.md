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

-   **https://www.myremotesite.com/RESOURCE\***

    This URL pattern is for the endpoint of your resource server that is protected by the Oauth2 access token flow.

-   **Name=idp.PARAM\_NAME.n, value=GRANT\_TYPE Name=idp.PARAM\_VALUE.n, value=token**

    Required. The metadata value for `idp.PARAM_VALUE.n` specifies that this connection follows the access token flow. The value `idp` is a symbolic name that must match with the value of the `SSO_OAUTH2_IDP` metadata. The value n is for a number that must be unique within this metadata block.

-   **Name=idp.PARAM\_NAME.n, value=ACCESS\_TOKEN Name=idp.PARAM\_VALUE.n, value=\{$$MyAccessTokenCvSlot\}**

    Required. The metadata value for idp.PARAM\_VALUE.n specifies the client ID. The value `MyAccessTokenCvSlot` is for the ID of a credential vault slot, which contains the access token in its credentials. The user name of the referenced credential slot entry must be `Bearer`. The password of this credential slot entry must contain the access token. The value idp is a symbolic name that must match with the value of the `SSO_OAUTH2_IDP` metadata. The value n is for a number that must be unique within this metadata block. If this metadata is not specified, the token access request does not contain client credentials.


For an example of a configuration for accessing Dropbox through Outbound HTTP Connections, see Setting up OAuth 2.0 for Dropbox by using stored access tokens.

-   **[Setting up OAuth 2.0 for Dropbox by using stored access tokens](../dev-portlet/Oauth2.0_dropbox_stored_acess_tokens.md)**  
Set up an OAuth 2.0 access for Dropbox by using stored access tokens. Follow these steps to set up an OAuth 2.0 connection of a Dropbox resource through the Ajax Proxy.

**Parent topic:**[Establish OAuth 2.0 authenticated connections](../dev-portlet/Oauth2.0_auth_connections.md)

