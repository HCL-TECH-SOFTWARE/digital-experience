# Defining policy rules for the remote connection \(ADFS\) 

Learn about how to create a policy rule for the SSO connection. Creating a policy rule is required to use the SSO connection for the Identity Provider that you registered.

The metadata setting SSO\_SAML20\_IDP enables the policy for SSO authentication by using SAML. Replace the default value, in this case, `adfs01` with the unique Identity Provider name.

1.  To create a policy rule for a remote connection that uses an Active Directory Federation Services \(ADFS\) Identity Provider, create an XML document like the following example:

    **Note:** The following example creates a policy for an SSO connection to http://www.my\_remote\_site.com, which is controlled by ADFS.

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <proxy-rules xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    	xsi:noNamespaceSchemaLocation="http://www.ibm.com/xmlns/prod/sw/http/outbound/proxy-config/2.0">
    
    		<mapping contextpath="/myproxy" url="*">
    
    			<policy name="pol_adfs01" url="http://www.my_remote_site.com/*" >
    				<actions>
    					<method>GET</method>
    					<method>POST</method>
    				</actions>
    				<cookie-rule name="co_adfs01">
    					<cookie>LtpaToken</cookie>
    					<cookie>LtpaToken2</cookie>
    					<scope>user</scope>
    					<handling>store-in-session</handling>
    				</cookie-rule>
    				<meta-data>
    					<name>SSO_SAML20_IDP</name>
    					<value>adfs01</value>
    				</meta-data>
    			</policy>
    		</mapping>
    </proxy-rules>
    ```

2.  After you save the XML file, run the ConfigEngine task update-outbound-http-connection-config to apply the policy settings to the configuration profile:

    -   AIX®, HP-UX, Linux™, Solaris: `./ConfigEngine.sh update-outbound-http-connection-config -DConfigFileName=XML\_file -DOutboundProfileType=global`
    -   IBM® i: `ConfigEngine.sh update-outbound-http-connection-config -DConfigFileName=XML\_file -DOutboundProfileType=global`
    -   Windows™: `ConfigEngine.bat update-outbound-http-connection-config -DConfigFileName=XML\_file -DOutboundProfileType=global`
    Where XML\_file is the file path to the XML file.


**Parent topic:**[Configuration settings for Active Directory Federation Services \(ADFS\) ](../dev-portlet/outbhttp_auth_est_sso_adfs.md)

