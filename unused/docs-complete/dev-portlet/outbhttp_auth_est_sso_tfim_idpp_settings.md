# Creating Identity Provider settings at the Outbound Connection Service configuration \(TFIM\) 

Certain metadata settings such as the Identity Provider URL and the Partner URL are required to use Tivoli Federated Identity Manager Identity Provider for SSO connections through SAML 2.0 authentication protocol.

The following metadata values are required to define a Tivoli Federated Identity Manager Identity Provider, where IdpName is the unique name of the Identity Provider:

-   **IdpName.IDP\_PROTOCOL**

    The protocol part of the Identity Provider login URL. Replace the value my\_idp\_prot with the value of the protocol part of the Identity Provider login URL, either `http` or `https`.

-   **IdpName.IDP\_HOST**

    The host name part of the Identity Provider login URL. Replace the value my\_idp\_host with the Identity Provider login URL host name.

-   **IdpName.IDP\_PORT**

    The port number of the Identity Provider login URL. Replace the value my\_idp\_port with the value of the Identity provider login URL port.

-   **IdpName.IDP\_URI**

    The URL path of the Identity Provider login URL. Replace the value my\_idp\_uri with the path of the Identity Provider login URL.

-   **IdpName.IDP\_AUTH\_COOKIE.1 and IdpName.IDP\_AUTH\_COOKIE.2**

    Authentication tokens that are created by the federation partner.

-   **IdpName.PARAM\_NAME.1 and IdpName.PARAM\_VALUE.1**

    This setting selects the SAML 2.0 binding. Specify `HTTPPost` as the value.

-   **IdpName.PARAM\_NAME.2 and IdpName.PARAM\_VALUE.2**

    The partner URL. Replace the value my\_partner\_url with the URL of the partner that runs the Service Provider service.

-   **IdpName.PARAM\_NAME.3 and IdpName.PARAM\_VALUE.3**

    Defines the format of the name ID field. Specify `Email` as the value.


The following XML example creates the Identity Provider settings for Tivoli Federated Identity Manager at the Outbound Connection Service Configuration and uses the following values:

-   The Identity Provider name is `tfim101`.
-   The Identity Provider login URL is `https://idp.example.com/sps/myfederation/saml20/login`.
-   The Partner URL is `https://sp.example.com/sps/myfederation/saml20/v2_0`.

Change these values according to your configuration.

1.  Create an XML document like the following example:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <proxy-rules xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xsi:noNamespaceSchemaLocation="http://www.ibm.com/xmlns/prod/sw/http/outbound/proxy-config/2.0">
    	<variables>
    		<!--  replace values with the IdP login URL and the partner URL -->
      <endpoint name="tfim101.idp_prot">https</endpoint>
      <endpoint name="tfim101.idp_host">idp.example.com</endpoint>
      <endpoint name="tfim101.idp_port">443</endpoint>
      <endpoint name="tfim101.idp_uri">/sps/myfederation/saml20/login</endpoint>
    		<endpoint name="tfim101.partner_url">https://sp.example.com/sps/myfederation/saml20/v2\_0</endpoint>
    	</variables>
    	<meta-data>
    		<name>tfim101.IDP_PROTOCOL</name>
    		<value>my\_idp\_prot</value>
    	</meta-data>
    	<meta-data>
    		<name>tfim101.IDP_HOST</name>
    		<value>my\_idp\_host</value>
    	</meta-data>
    	<meta-data>
    		<name>tfim101.IDP_PORT</name>
    		<value>my\_idp\_port</value>
    	</meta-data>
    	<meta-data>
    		<name>tfim101.IDP_URI</name>
    		<value>my\_idp\_uri</value>
    	</meta-data>
    	<meta-data>
    		<name>tfim101.PARAM_NAME.1</name>
    		<value>RequestBinding</value>
    	</meta-data>
    	<meta-data>
    		<name>tfim101.PARAM_VALUE.1</name>
    		<value>HTTPPost</value>
    	</meta-data>
    	<meta-data>
    		<name>tfim101.PARAM_NAME.2</name>
    		<value>PartnerId</value>
    	</meta-data>
    	<meta-data>
    		<name>tfim101.PARAM_VALUE.2</name>
    		<value>my\_partner\_url</value>
    	</meta-data>
    	<meta-data>
    		<name>tfim101.PARAM_NAME.3</name>
    		<value>NameIdFormat</value>
    	</meta-data>
    	<meta-data>
    		<name>tfim101.PARAM_VALUE.3</name>
    		<value>Email</value>
    	</metadata>
    	<meta-data>
    		<name>tfim101.IDP_AUTH_COOKIE.1</name>
    		<value>LtpaToken</value>
    	</meta-data>
    	<meta-data>
    		<name>tfim101.IDP_AUTH_COOKIE.2</name>
    		<value>LtpaToken2</value>
    	</meta-data>
    </proxy-rules>						
    ```

2.  After you save the XML file, run the ConfigEngine task update-outbound-http-connection-config to apply the Identity Provider settings at the global configuration profile.

    -   AIX®, HP-UX, Linux™, Solaris: `./ConfigEngine.sh update-outbound-http-connection-config -DConfigFileName=XML\_file -DOutboundProfileType=global`
    -   IBM® i: `ConfigEngine.sh update-outbound-http-connection-config -DConfigFileName=XML\_file -DOutboundProfileType=global`
    -   Windows™: `ConfigEngine.bat update-outbound-http-connection-config -DConfigFileName=XML\_file -DOutboundProfileType=global`
    where XML\_file is the file path to the XML file.


**Parent topic:**[Configuration settings for Tivoli Federated Identity Manager \(TFIM\) ](../dev-portlet/outbhttp_auth_est_sso_tfim.md)

