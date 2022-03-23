# Creating Identity Provider settings at the Outbound Connection Service configuration \(ADFS\) 

Certain metadata settings such as the ADFS cookies, the Identity Provider URL, and the Partner URL are required to define a single sign-on \(SSO\) connection through Active Directory Federation Services \(ADFS\).

The following metadata values are required to define an ADFS Identity Provider, where IdpName is the unique name of the Identity Provider:

-   **IdpName.IDP\_PROTOCOL**

    The protocol part of the Identity Provider login URL. Replace the value my\_idp\_prot with the value of the protocol part of the Identity Provider login URL, either `http` or `https`.

-   **IdpName.IDP\_HOST**

    The host name part of the Identity Provider login URL. Replace the value my\_idp\_host with the Identity Provider login URL host name.

-   **IdpName.IDP\_PORT**

    The port number of the Identity Provider login URL. Replace the value my\_idp\_port with the value of the Identity provider login URL port.

-   **IdpName.IDP\_URI**

    The URL path of the Identity Provider login URL. Replace the value my\_idp\_uri with the path of the Identity Provider login URL.

-   **IdpName.IDP\_AUTH\_COOKIE.1**

    Authentication token that is created by the federation partner. The default value is `SamlSession`.

-   **IdpName.IDP\_AUTH\_TOKEN\_SOURCE**

    Determines where the AJAX proxy obtains the IDP authentication tokens. The IDP authentication tokens are the cookies that are required to authenticate the connection with the Identity Provider. By default, the AJAX procy creates an LTPA token from the user subject and uses this LTPA token to authenticate the connection with the Identity Provider. Because the ADFS Identity Provider does not support an LTPA-based authentication, set the value of this parameter to `cookies`. This setting lets the AJAX proxy use the authentication tokens that are defined in the metadata settings IdpName.IDP\_AUTH\_TOKEN\_COOKIE.n.

-   **IdpName.IDP\_AUTH\_TOKEN\_COOKIE.n**

    The authentication tokens that are required for authenticating against the Identity Provider. In the example that follows, the cookies `MSISAuth`, `MSISAuth1`, and `MSISAuthenticated` are defined.

-   **IdpName.PARAM\_NAME.1 and IdpName.PARAM\_VALUE.1**

    This setting defines the partner URL. Replace the value idp\_name\_partner\_url with the URL of the partner that runs the Service Provider service.


The following XML example creates the Identity Provider settings for an Active Directory Federation Services connection at the Outbound Connection Service Configuration and uses the following values:

-   The Identity Provider name is `adfs01`.
-   The Identity Provider login URL is `https://idp.example.com/sps/myfederation/saml20/login`.
-   The Partner URL is `https://sp.example.com/sps/myfederation/saml20/v2\_0`.
-   The ADFS authentication cookies are `MSISAuth`, `MSISAuth1`, and `MSISAuthenticated`.

Change these values according to your configuration.

1.  Create an XML document like the following example.

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <proxy-rules xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xsi:noNamespaceSchemaLocation="http://www.ibm.com/xmlns/prod/sw/http/outbound/proxy-config/2.0">
    	<variables>
    		<!--  replace values with the IdP login URL and the partner URL -->
      <endpoint name="adfs01.idp_prot">https</endpoint>
      <endpoint name="adfs01.idp_host">idp.example.com</endpoint>
      <endpoint name="adfs01.idp_port">443</endpoint>
      <endpoint name="adfs01.idp_uri">/adfs/ls/IdpInitiatedSignOn.asp</endpoint>
    		<endpoint name="adfs01.partner_url">https://sp.example.com/sps/myfederation/saml20/v2\_0</endpoint>
    	</variables>
    	<meta-data>
    		<name>adfs01.IDP_PROTOCOL</name>
    		<value>my\_idp\_prot</value>
    	</meta-data>
    	<meta-data>
    		<name>adfs01.IDP_HOST</name>
    		<value>my\_idp\_host</value>
    	</meta-data>
    	<meta-data>
    		<name>adfs01.IDP_PORT</name>
    		<value>my\_idp\_port</value>
    	</meta-data>
    	<meta-data>
    		<name>adfs01.IDP_URI</name>
    		<value>my\_idp\_uri</value>
    	</meta-data>
    	<meta-data>
    		<name>adfs01.PARAM_NAME.1</name>
    		<value>LoginToRp</value>
    	</meta-data>
    	<meta-data>
    		<name>adfs01.PARAM_VALUE.1</name>
    		<value>idp\_name\_partner\_url</value>
    	</meta-data>
    	<meta-data>
    		<name>adfs01.IDP_AUTH_TOKEN_SOURCE</name>
    		<value>cookies</value>
    	</meta-data>
    	<meta-data>
    		<name>adfs01.IDP_AUTH_TOKEN_COOKIE.1</name>
    		<value>MSISAuth</value>
    	</meta-data>
    	<meta-data>
    		<name>adfs01.IDP_AUTH_TOKEN_COOKIE.2</name>
    		<value>MSISAuth1</value>
    	</meta-data>
    	<meta-data>
    		<name>adfs01.IDP_AUTH_TOKEN_COOKIE.3</name>
    		<value>MSISAuthenticated</value>
    	</metadata>
    	<meta-data>
    		<name>adfs01.IDP_AUTH_COOKIE.1</name>
    		<value>SamlSession</value>
    	</meta-data>
    </proxy-rules>						
    ```

2.  After you save the XML file, run the ConfigEngine task update-outbound-http-connection-config to apply the Identity Provider settings at the global configuration profile.

    -   AIX®, HP-UX, Linux™, Solaris: `./ConfigEngine.sh update-outbound-http-connection-config -DConfigFileName=XML\_file -DOutboundProfileType=global`
    -   IBM® i: `ConfigEngine.sh update-outbound-http-connection-config -DConfigFileName=XML\_file -DOutboundProfileType=global`
    -   Windows™: `ConfigEngine.bat update-outbound-http-connection-config -DConfigFileName=XML\_file -DOutboundProfileType=global`
    where XML\_file is the file path to the XML file.


**Parent topic:**[Configuration settings for Active Directory Federation Services \(ADFS\) ](../dev-portlet/outbhttp_auth_est_sso_adfs.md)

