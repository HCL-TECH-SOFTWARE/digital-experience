# Configuring single sign-on \(SSO\) for backend calls to HCL Connections in SmartCloud for Social Business

The HCL Connections integration assets use a common infrastructure that is called HTTP Outbound to complete calls to the HCL Connections backend server. Learn about the steps that are required to configure the HTTP outbound component to complete calls to HCL Connections in SmartCloud for Social Business.

If you have the default log level in the WebSphere® Integrated Solutions Console set to `INFO` or lower, an increase in logged informational messages might occur when you establish an HTTP Outbound connection to HCL Connections in SmartCloud for Social Business. To disable the logging of informational messages so that only error and warning messages are logged, complete the following steps:

1.  Log in to the WebSphere Integrated Solutions Console.
2.  Click **Troubleshooting** \> **Logs and trace** \> **HCL Digital Experience**.
3.  Click **Diagnostic trace** in the General Properties section.
4.  Click **Change log detail levels** in the Additional Properties section.
5.  Change the log detail level for `org.apache.commons.httpclient.*` to `WARNING` or higher. For example, if you are logging informational messages by default and therefore have `*=info` already specified, change the log detail level to `*=info:org.apache.commons.httpclient.*=WARNING`.
6.  Click **Apply** \> **OK**.
7.  Restart your portal server for the changes to take effect.

1.  Set up a trust association between your portal server and the HCL Connections server by using the SSL certificate. For detailed steps on how to do this, see *Import SSL certificate to set up trust association* in the related links.

2.  Create a policy file that defines the URL and metadata that specifies the location of the Tivoli Federated Identity Manager server and which mapping to use. For complete instructions on how to complete this step, see *Configuration settings for Tivoli Federated Identity Manager \(TFIM\)* in the related links section.

    For example:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <proxy-rules xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="http://www.ibm.com/xmlns/prod/sw/http/outbound/proxy-config/2.0">
    	<mapping contextpath="/proxy" url="*" name="proxy"/>
    	<mapping contextpath="/myproxy" url="*" name="myproxy"/>
    
    		<!-- todo: change the URL policy according to your need -->
    		<policy name="Connections_Cloud_Global" url="https://apps.na.collabserv.lotus.com/*">
    			<actions>
    				<method>GET</method>
    				<method>HEAD</method>
    				<method>POST</method>
    				<method>PUT</method>
    				<method>DELETE</method>
    			</actions>
    			<headers>
    				<header>User-Agent</header>
    				<header>Accept-Language</header>
    				<header>Authorization*</header>
    				<header>Content*</header>
    			</headers>
    			<cookie-rule name="Connections_Cloud_Global_Cookie_Rule">
    				<cookie>*</cookie>
    				<scope>user</scope>
    				<handling>store-in-request</handling>
    			</cookie-rule>
    			<meta-data>
    				<name>SSO_SAML20_IDP</name>
    				<value>saml-tfim</value>
    			</meta-data>
    			<meta-data>
    				<name>saml-tfim.IDP_PROTOCOL</name>
    				<value>https</value>
    			</meta-data>
    			<meta-data>
    				<name>saml-tfim.IDP_HOST</name>
    				<value>IDP_HOST</value>
    			</meta-data>
    			<meta-data>
    				<name>saml-tfim.IDP_PORT</name>
    				<value>IDP_PORT</value>
    			</meta-data>
    			<meta-data>
    				<name>saml-tfim.IDP_URI</name>
    				<value>IDP_URI</value>
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
    				<value>https://apps.na.collabserv.lotus.com/</value>
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
    			<meta-data>
    				<name>socket-timeout</name>
    				<value>10000</value>
    			</meta-data>
    			<meta-data>
    				<name>retries</name>
    				<value>2</value>
    			</meta-data>
    			<meta-data>
    				<name>max-connections-per-host</name>
    				<value>50</value>
    			</meta-data>
    		</policy>
    </proxy-rules>			 
    ```

3.  Push the policy to the HCL Portal policy store by running the update-outbound-http-connection-config task, where XML\_file is the name of the policy file that you created in step 2:

    -   AIX®, HP-UX, Linux™, Solaris: `./ConfigEngine.sh update-outbound-http-connection-config -DConfigFileName=XML\_file -DOutboundProfileType=global`
    -   IBM® i: `ConfigEngine.sh update-outbound-http-connection-config -DConfigFileName=XML\_file -DOutboundProfileType=global`
    -   Windows™: `ConfigEngine.bat update-outbound-http-connection-config -DConfigFileName=XML\_file -DOutboundProfileType=global`
    **Note:** A preexisting HCL Connections dynamic policy cannot be used for SmartCloud for Social Business. An error can occur if two policies exist. Verify that there is no value set for the wp.proxy.config.urlreplacement.ibm\_connections\_policy in the WP ConfigService Resource Environment Provider.

4.  Verify the setup by logging in to HCL Portal and then calling the following URL: http://<portalserver\>:<portalserverport\>/wps/myproxy/https/apps.na.collabserv.com/homeppage/web/updates/\#imFollowing/all.

    **Note:** You might need to change apps.na.collabserv.com to match the host name of your environment.

    If the setup is correct, Activity Stream markup displays without CSS styling. If the setup is incorrect, one of the following errors might occur:

    -   A 403 error message displays, which means the proxy is not allowing the request.
    -   Markup of the login page displays, which means that authentication failed.
    If an error occurs, check SystemOut.log for error messages, verify that the policy file is correct, and rerun the task.


**Parent topic:**[Establishing single sign-on \(SSO\) between the portal installation and HCL Connections in SmartCloud for Social Business](../dev-portlet/est_sso_portal_sc4sb.md)

**Related information**  


[Import SSL certificate to set up trust association](../collab/i_coll_t_enable_lctrust.md)

[Configuration settings for Tivoli Federated Identity Manager \(TFIM\)](../dev-portlet/outbhttp_auth_est_sso_tfim.md)

[Configuration settings for Active Directory Federation Services \(ADFS\)](../dev-portlet/outbhttp_auth_est_sso_adfs.md)

