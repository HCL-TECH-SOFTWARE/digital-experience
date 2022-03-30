# Defining policy rules for the remote connection \(TFIM\) 

Learn about how to create a policy rule for the SSO connection. Creating a policy rule is required to use the SSO connection for the Identity Provider that you registered.

The metadata setting SSO\_SAML20\_IDP enables the policy for SSO authentication by using SAML. Replace the default value, in this case, `tfim101` with the unique Identity Provider name.

1.  To create a policy rule for a remote connection that uses a Tivoli Federated Identity Manager Identity Provider, create an XML document like the following example:

    **Notes:**

    -   The following example creates a policy for an SSO connection to http://www.my\_remote\_site.com, which is controlled by the Tivoli Federated Identity Manager Identity Provider.
    -   The example includes the optional definition of a cookie handling rule store-in-session for the authentication tokens `LtpaToken` and `LtpaToken2`. This setting saves the authentication tokens of the remote connection in the cookie store. When a URL to the remote site is requested again, the Outbound HTTP connection service establishes an authenticated HTTP connection by using the saved authentication tokens. Reestablishing the SAML authentication procedure is therefore not needed.
    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <proxy-rules xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    	xsi:noNamespaceSchemaLocation="http://www.ibm.com/xmlns/prod/sw/http/outbound/proxy-config/2.0">
    
    		<mapping contextpath="/myproxy" url="*">
    
    			<policy name="pol_tfim101" url="http://www.my_remote_site.com/*" >
    				<actions>
    					<method>GET</method>
    					<method>POST</method>
    				</actions>
    				<cookie-rule name="co_tfim101">
    					<cookie>LtpaToken</cookie>
    					<cookie>LtpaToken2</cookie>
    					<scope>user</scope>
    					<handling>store-in-session</handling>
    				</cookie-rule>
    				<meta-data>
    					<name>SSO_SAML20_IDP</name>
    					<value>tfim101</value>
    				</meta-data>
    			</policy>
    		</mapping>
    </proxy-rules>
    ```

2.  After you save the XML file, run the ConfigEngine task update-outbound-http-connection-config to apply the policy settings to the configuration profile:

    -   AIX®, HP-UX, Linux™, Solaris: `./ConfigEngine.sh update-outbound-http-connection-config -DConfigFileName=XML\_file -DOutboundProfileType=global`
    -   IBM® i: `ConfigEngine.sh update-outbound-http-connection-config -DConfigFileName=XML\_file -DOutboundProfileType=global`
    -   Windows™: `ConfigEngine.bat update-outbound-http-connection-config -DConfigFileName=XML\_file -DOutboundProfileType=global`
    where XML\_file is the file path to the XML file.


**Parent topic:**[Configuration settings for Tivoli Federated Identity Manager \(TFIM\) ](../dev-portlet/outbhttp_auth_est_sso_tfim.md)

