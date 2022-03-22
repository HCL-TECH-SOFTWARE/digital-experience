# Establishing SSO connections through SAML 2.0 tokens

It is possible to establish outbound HTTP connections to remote resources that are authenticated by using the SAML 2.0 protocol. Outbound HTTP connections take care of the communication with the Identity provider \(IDP\) to get an authenticated connection by using SAML tokens. The SAML Authentication handler uses the HTTP POST binding protocol of the SAML specification. Therefore, it is required that both the Identity Provider and the Service Provider support the HTTP POST binding, if they are used by Outbound HTTP Connections for authentication.

An outbound HTTP connection is activated by setting the metadata SSO\_SAML\_20\_IDP at the connection policy or policy mapping. The value of this metadata setting is a symbolic name for the Identity provider that establishes the connection. This name is used as a prefix for another set of metadata that define the settings of the Identity provider as the following example illustrates:

```
<mapping contextpath="/myproxy" url="*">
	<policy url="http://www.myremotesite.com/RESOURCE*" >	
		...		 
		<!-- the following meta data setting activates the connection        -->
		<!-- for SSO connections via SAML. The symbolic name of the Identity -->
		<!-- Provider is MySampleIdentityProvider               -->
		<meta-data>
			<name>SSO_SAML20_IDP</name>
			<value>MySampleIdentityProvider</value>
		</meta-data>
	</policy>

	<!-- a second policy that establishes a SSO connection via this IDP -->
	<policy url="http://www.myremotesite.com/ANOTHER*" > <!-- another policy -->
		...
		<meta-data>
			<name>SSO_SAML20_IDP</name>
			<value>MySampleIdentityProvider</value>
		</meta-data>
	</policy>

	<!-- the settings of the Identity provider MySampleIdentityProvider -->
	<!-- In this  example, the identity provider settings are saved in the meta data -->
	<!-- is scoped to the policy mapping “/myportal".                                -->
	<meta-data>
		<name>MySampleIdentityProvider.IDP_HOST</name>
		<value>www.the-identity-provider.com</value>
	</meta-data>
	<meta-data>
		<name>MySampleIdentityProvider.IDP_PARAM_NAME.1</name>
		<value>SAMLRquest</value>
	</meta-data>
	<meta-data>
		<name>MySampleIdentityProvider.IDP_PARAM_VALUE.1</name>
		<value>request</value>
	</meta-data>

</mapping>
```

