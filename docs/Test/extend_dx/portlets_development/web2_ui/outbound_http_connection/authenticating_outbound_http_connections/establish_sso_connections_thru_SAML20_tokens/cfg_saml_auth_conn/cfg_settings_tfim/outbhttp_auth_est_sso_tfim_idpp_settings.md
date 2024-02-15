# Creating Identity Provider settings at the Outbound Connection Service configuration (TFIM)

Certain metadata settings such as the Identity Provider URL and the Partner URL are required to use Tivoli Federated Identity Manager Identity Provider for SSO connections through SAML 2.0 authentication protocol.

The following metadata values are required to define a Tivoli Federated Identity Manager Identity Provider, where IdpName is the unique name of the Identity Provider:

-   **IdpName.IDP_PROTOCOL**

    The protocol part of the Identity Provider login URL. Replace the value my_idp_prot with the value of the protocol part of the Identity Provider login URL, either `http` or `https`.

-   **IdpName.IDP_HOST**

    The host name part of the Identity Provider login URL. Replace the value my_idp_host with the Identity Provider login URL host name.

-   **IdpName.IDP_PORT**

    The port number of the Identity Provider login URL. Replace the value my_idp_port with the value of the Identity provider login URL port.

-   **IdpName.IDP_URI**

    The URL path of the Identity Provider login URL. Replace the value my_idp_uri with the path of the Identity Provider login URL.

-   **IdpName.IDP_AUTH_COOKIE.1 and IdpName.IDP_AUTH_COOKIE.2**

    Authentication tokens that are created by the federation partner.

-   **IdpName.PARAM_NAME.1 and IdpName.PARAM_VALUE.1**

    This setting selects the SAML 2.0 binding. Specify `HTTPPost` as the value.

-   **IdpName.PARAM_NAME.2 and IdpName.PARAM_VALUE.2**

    The partner URL. Replace the value my_partner_url with the URL of the partner that runs the Service Provider service.

-   **IdpName.PARAM_NAME.3 and IdpName.PARAM_VALUE.3**

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
    		<endpoint name="tfim101.partner_url">https://sp.example.com/sps/myfederation/saml20/v2_0</endpoint>
    	</variables>
    	<meta-data>
    		<name>tfim101.IDP_PROTOCOL</name>
    		<value>my_idp_prot</value>
    	</meta-data>
    	<meta-data>
    		<name>tfim101.IDP_HOST</name>
    		<value>my_idp_host</value>
    	</meta-data>
    	<meta-data>
    		<name>tfim101.IDP_PORT</name>
    		<value>my_idp_port</value>
    	</meta-data>
    	<meta-data>
    		<name>tfim101.IDP_URI</name>
    		<value>my_idp_uri</value>
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
    		<value>my_partner_url</value>
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

    -   AIX® and Linux™: `./ConfigEngine.sh update-outbound-http-connection-config -DConfigFileName=XML\_file -DOutboundProfileType=global`
    -   Windows™: `ConfigEngine.bat update-outbound-http-connection-config -DConfigFileName=XML\_file -DOutboundProfileType=global`
    where XML_file is the file path to the XML file.



