# Configure OAuth 2.0 for Client Credentials Grant flows

Configure an outbound HTTP connection that follows the Client Grant flow.

OAuth 2.0 for an outbound HTTP connection is activated by setting the metadata `SSO_OAUTH2_IDP` at the connection policy or policy mapping. The value of this metadata setting is a symbolic name for the Identity provider that establishes the connection. This name is used as a prefix for another set of metadata that define the settings of the Identity provider as the following example illustrates.

```

<?xml version="1.0" encoding="UTF-8"?>
<proxy-rules xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
 xsi:noNamespaceSchemaLocation="http://www.ibm.com/xmlns/prod/sw/http/outbound/proxy-config/2.0">
    <variables>
        <dynamic-policy name="idp.client.urls">
            <value>https://www.myremotesite.com/RESOURCE*</value>
        </dynamic-policy>
    </variables>
    <mapping contextpath="/myproxy" url="*">
	<policy name="idp.client.policy" url="{$idp.client.urls}" >
		<actions>
			<method>GET</method>
			<method>POST</method>
		</actions>
		<cookie-rule>
			<cookie>MyAuthCookieForClientFlow</cookie>
			<scope>user</scope>
			<handling>store-in-session</handling>
		</cookie-rule>
		<meta-data>
			<name>SSO_OAUTH2_IDP</name>
			<value>idp</value>
		</meta-data>

		<meta-data>
			<name>idp.IDP_PROTOCOL</name>
			<value>https</value>
		</meta-data>
		<meta-data>
			<name>idp.IDP_HOST</name>
			<value>www.myauthserver.com</value>
		</meta-data>
		<meta-data>
			<name>idp.IDP_PORT</name>
			<value>443</value>
		</meta-data>
		<meta-data>
			<name>idp.IDP_URI</name>
			<value>/oauth2/token</value>
		</meta-data>

		<meta-data>
			<name>idp.PARAM_NAME.1</name>
			<value>GRANT_TYPE</value>
		</meta-data>
		<meta-data>
			<name>idp.PARAM_VALUE.1</name>
			<value>client_credentials</value>
		</meta-data>

		<meta-data>
			<name>idp.PARAM_NAME.2</name>
			<value>SCOPE</value>
		</meta-data>
		<meta-data>
			<name>idp.PARAM_VALUE.2</name>
			<value>the_scope</value>
		</meta-data>

		<meta-data>
			<name>idp.PARAM_NAME.3</name>
			<value>CLIENT_ID</value>
		</meta-data>
		<meta-data>
			<name>idp.PARAM_VALUE.3</name>
			<value>{$$MyClientCvSlot}</value>
		</meta-data>

		<meta-data>
			<name>idp.PARAM_NAME.4</name>
			<value>CLIENT_CRED</value>
		</meta-data>
		<meta-data>
			<name>idp.PARAM_VALUE.4</name>
			<value>{$$MyClientCvSlot}</value>
		</meta-data>

		<meta-data>
			<name>idp.IDP_AUTH_COOKIE.1</name>
			<value>MyAuthCookieForClientFlow</value>
		</meta-data>
	  </policy>
    </mapping>
</proxy-rules>
```

Where https://www.myremotesite.com/RESOURCE\* is the URL pattern for the endpoint of your resource server that is protected by the OAuth client credentials grant flow.

Where MyAuthCookieForClientFlow is the name of a cookie that is used internally by the proxy and saved in the session cookie store of the proxy. The cookie holds the access token of the remote connection so that the cookie-handling type `store-in-session` must be used.

The following metadata name-value pairs are used to establish the Client Credentials Grant flow:

-   **name=SSO\_OAUTH2\_IDP, value=idp**

    Required. This metadata enables the policy for Oauth2.0 authentication. The value of this metadata setting is a symbolic name for the Identity provider that establishes the connection. This name is used as a prefix for another set of metadata that define the settings of the Identity provider.

-   **Name=idp.IDP\_PROTOCOL, value=https**

    Optional. This metadata defines the protocol part of the OAuth 2.0 authorization server. If this metadata is not defined, the default value is https. The value idp is a symbolic name that must match with the value of the `SSO_OAUTH2_IDP` metadata.

-   **Name=idp.IDP\_HOST, value=www.myauthserver.com**

    Required. The metadata value defines the host name of the oauth2.0 authorization server. The value idp is a symbolic name that must match with the value of the `SSO_OAUTH2_IDP` metadata.

-   **Name=idp.IDP\_PORT, value=443**

    Optional. The metadata value defines the port of the oauth2.0 authorization server. If this metadata is not defined, the default port \(443 for https connections, 80 for http connections\) is assumed. The value idp is a symbolic name that must match with the value of the `SSO_OAUTH2_IDP` metadata.

-   **Name=idp.IDP\_URI, value=/oauth2/token**

    Required. The metadata value defines the URI part of the token endpoint of the Oauth2 authorization server. The value idp is a symbolic name that must match with the value of the `SSO_OAUTH2_IDP` metadata.

-   **Name=idp.IDP\_AUTH\_COOKIE.n, value=MyAuthCookieForClientFlow**

    Required. The metadata value defines the name of an internally used cookie that is created by the proxy and holds the access token. Specify a unique name for this cookie to avoid naming conflicts. Also, you must set an appropriate cookie- handling type for the Outbound connection policy for this cookie. It is strongly recommended to set the handling type `store-in-session` as this cookie contains the access token of the remote oauth2 connection, which might not be visible to the client. The value idp is a symbolic name that must match with the value of the `SSO_OAUTH2_IDP` metadata.

-   **Name=idp.PARAM\_NAME.n, value=GRANT\_TYPE Name=idp.PARAM\_VALUE.n, value=client\_credentials**

    Required. The metadata value for idp.PARAM\_VALUE.n specifies that this connection follows the Client Credentials Grant flow. The value idp is a symbolic name that must match with the value of the `SSO_OAUTH2_IDP` metadata. The value n is for a number that must be unique within this metadata block. In this sample, a sequence number is used for n.

-   **Name=idp.PARAM\_NAME.n, value=CLIENT\_ID Name=idp.PARAM\_VALUE.n, value=\{$$MyClientCvSlot\}**

    Optional. The metadata value for idp.PARAM\_VALUE.n specifies the client ID. The value MyClientCvSlot is for the ID of a credential vault slot, which contains the user/password credentials of the client app. The ID of the referenced credential slot entry must match with the client ID \( client key, or app key\) that you got when you registered your client at the Oauth2 authorization server. The value idp is a symbolic name that must match with the value of the `SSO_OAUTH2_IDP` metadata. The value n is for a number that must be unique within this metadata block. In this sample, a sequence number is used for n. If this metadata is not specified, the token access request does not contain client credentials.

-   **Name=idp.PARAM\_NAME.n, value=CLIENT\_CRED Name=idp.PARAM\_VALUE.n, value=\{$$MyClientCvSlot\}**

    Optional. The metadata value for idp.PARAM\_VALUE.n specifies the client secret. The value MyClientCvSlot is for the ID of a credential vault slot, which contains the user/password credentials of the client app. The credential of the referenced credential slot entry must match with the client secret that is specified at the Authorization server when you registered your app at the OAuth 2.0 authorization server. The value idp is a symbolic name that must match with the value of the `SSO_OAUTH2_IDP` metadata. The value n is for a number that must be unique within this metadata block. In this sample, a sequence number is used for n. If this metadata is not specified, the token access request does not contain client credentials.

-   **Name=idp.PARAM\_NAME.n, value=SCOPE Name=idp.PARAM\_VALUE.n, value=the\_scope**

    Optional. The metadata value for idp.PARAM\_VALUE.n specifies the scope of this connection, as defined by your authorization server. If no scoping is necessary, do not define this metadata, or leave the value of idp.PARAM\_VALUE.n empty. The value idp is a symbolic name that must match with the value of the `SSO_OAUTH2_IDP` metadata. The value n is for a number that must be unique within this metadata block. In this sample, a sequence number is used for n.


For an example of using the Client Credentials flow for accessing twitter resources, see Setting up OAuth 2.0 for Twitter by using the Client Credentials Grant flow.

-   **[Setting up OAuth 2.0 for Twitter by using the Client Credentials Grant flow](Oauth2.0_twitter_client_credentials.md)**  
Set up a client credential grant flow to configure OAuth 2.0 access to Twitter resources.


