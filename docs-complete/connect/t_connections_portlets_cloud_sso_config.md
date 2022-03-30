# Configuring SSO for backend calls to HCL Connections Cloud 

Configure single sign-on for the HCL Connections Cloud portlets.

Make sure to perform the steps for the global portal proxy entry point as described here: [Configuring single sign-on \(SSO\) for backend calls to HCL Connections Cloud](t_connections_portlets_cloud_sso_config.md)

**Note:** A preexisting HCL Connections dynamic policy cannot be used for HCL Connections Cloud. An error can occur if two policies exist. Verify that there is no value set for the wp.proxy.config.urlreplacement.ibm\_connections\_policy in the WP ConfigService Resource Environment Provider.

1.  To create a policy rule for a remote connection that uses a Tivoli Federated Identity Manager Identity Provider, create an XML document similar to the example file provided for you.

    **Note:** The following example creates a policy for an SSO connection to https://apps.na.collabserv.com, which is controlled by the Tivoli Federated Identity Manager Identity Provider. If you connect to another URL, modify the path accordingly.

    Replace the variable placeholders, indicated in uppercase, \(for example, IDP\_HOST\) with the values that map to your deployment. A detailed description of their meaning can in the HCL Digital Experience Knowledge Center article [Creating Identity Provider settings at the Outbound Connection Service configuration](../dev-portlet/outbhttp_auth_est_sso_adfs_idpp_settings.md).

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <!-- Copyright HCL Technologies Limited 2011, 2014, 2019  All Rights Reserved.              -->
    <proxy-rules xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.ibm.com/xmlns/prod/sw/ajax/proxy-config/1.1">
        <mapping contextpath="/proxy" url="*"/>
        <mapping contextpath="/myproxy" url="*"/>
        <mapping contextpath="/common_proxy" url="*"/>
          
    <policy active="true" basic-auth-support="false" name="CloudConnectionsPortlets" url="https://apps.na.collabserv.com/*">
            <actions>
                <method>POST</method>
                <method>GET</method>
                <method>DELETE</method>
                <method>PUT</method>
                <method>HEAD</method>
            </actions>
            <headers>
                <header>Accept-Language</header>
                <header>User-Agent</header>
                <header>Accept.*</header>
                <header>Content.*</header>
                <header>Authorization*</header>
                <header>Content*</header>
                <header>If-.*</header>
                <header>Pragma</header>
                <header>Cache-Control</header>
                <header>X-Update-Nonce</header>
                <header>X-Shindig-ST</header>
                <header>X-IC-CRE-Request-Origin</header>
                <header>X-IC-CRE-User</header>
                <header>X-Method-Override</header>
    			<header>X-Requested-With</header>
           </headers>
    			<cookie-rule name="Connections_Cloud_WEF_Cookie_Rule">
        	<cookie>*</cookie>
    				<scope>user</scope>
    	 			<handling>store-in-request</handling>
        </cookie-rule>
                <meta-data>
                    <name>SSO_SAML20_IDP</name>
                    <value>saml-tfim</value>
                </meta-data>
                <meta-data>
                    <name>saml-tfim.IDP_HOST</name>
                    <value>IDP_HOST</value>
                </meta-data>
                <meta-data>
                    <name>saml-tfim.IDP_PROTOCOL</name>
                    <value>https</value>
                </meta-data>
                <meta-data>
                    <name>saml-tfim.IDP_URI</name>
                    <value>IDP_URI</value>
                </meta-data>
                <meta-data>
                    <name>saml-tfim.IDP_PORT</name>
                    <value>IDP_PORT</value>
                </meta-data>
    
      		  <meta-data>
                    <name>saml-tfim.PARAM_NAME.1</name>
                    <value>RequestBinding</value>
                </meta-data>
                <meta-data>
                    <name>saml-tfim.PARAM_VALUE.1</name>
                    <value>HTTPPost</value>
                </meta-data>
    		  <meta-data>
                    <name>saml-tfim.PARAM_NAME.2</name>
                    <value>PartnerId</value>
                </meta-data>
                <meta-data>
                    <name>saml-tfim.PARAM_VALUE.2</name>
                    <value>PARTNER_ID</value>
                </meta-data>
     		  <meta-data>
                    <name>saml-tfim.PARAM_NAME.3</name>
                    <value>TARGET</value>
                </meta-data>
                <meta-data>
                    <name>saml-tfim.PARAM_VALUE.3</name>
                    <value>https://apps.na.collabserv.com/</value>
                </meta-data>
                <meta-data>
                    <name>saml-tfim.PARAM_NAME.4</name>
                    <value>NameIdFormat</value>
                </meta-data>
                <meta-data>
                    <name>saml-tfim.PARAM_VALUE.4</name>
                    <value>Email</value>
                </meta-data>
                <meta-data>
                    <name>saml-tfim.IDP_AUTH_COOKIE.1</name>
                    <value>PD-ID</value>
                </meta-data>
    
            <meta-data>
                <name>forward-http-errors</name>
                <value>true</value>
            </meta-data>
        </policy>
    
        <meta-data>
            <name>forward-http-errors</name>
            <value>true</value>
        </meta-data>
        <meta-data>
    	<name>xhr-authentication-support</name>
    	<value>true</value>
        </meta-data>
        <meta-data>
    	<name>socket-timeout</name>
    	<value>50000</value>
        </meta-data>
        <meta-data>
    	<name>retries</name>
    	<value>2</value>
        </meta-data>
        <meta-data>
    	<name>max-connections-per-host</name>
    	<value>50</value>
        </meta-data>
        <meta-data>
    	<name>max-total-connections</name>
    	<value>1000</value>
        </meta-data>    
    </proxy-rules>
    ```

2.  After you save the XML file, run the ConfigEngine task update-outbound-http-connection-config to apply the policy settings to the configuration profile:

    -   AIX, HP-UX, Linux, Solaris:

        ```
         ./ConfigEngine.sh update-outbound-http-connection-config -DConfigFileName=XML_file -DApplicationScopeRef=PA_icWEFPtlts
        
        ```

    -   IBM i:

        ```
        ConfigEngine.sh update-outbound-http-connection-config -DConfigFileName=XML_file -DApplicationScopeRef=PA_icWEFPtlts
        ```

    -   Windows:

        ```
        ConfigEngine.bat update-outbound-http-connection-config -DConfigFileName=XML_file -DApplicationScopeRef=PA_icWEFPtlts
        ```

    where XML\_file is the file path to the XML file.


**Parent topic:**[Deploying the HCL Connections Portlets for HCL Connections Cloud ](../connect/c_connections_portlets_deploying_portlets_cc.md)

