# Adding an outbound connection policy 

To add a policy to the outbound HTTP connection configuration, follow the procedure that is given here.

1.  Decide whether you want to create a global or application-scoped policy.

    You can place the policy in the global profile, or in an application-scoped profile:

    -   Policies that are stored in the global profile are not linked to a specific application. For details about application scoping, see *Using the Ajax proxy in portlets*.
    -   Policies that are stored in an application-scoped profile are visible in the scope of the application that is associated with the profile. The connection is effective only in the scope of that application, with the following consequences:
        -   If the remote connection is opened through the Ajax proxy, the caller must use the Ajax proxy URL that is registered in the web module. Application-scoped policies are not visible to the Ajax proxy servlet of HCL Digital Experience.
        -   If the remote connection is opened through the outbound connection service, the policy is only visible if the code runs in the web module for which the profile is scoped.
2.  Decide the mapping for which you want the policy to apply. The policy mapping determines the entry point of the Ajax proxy.

    For example, the HCL Portal Ajax proxy servlet provides the following mapping points:

    -   `/proxy` is for unauthenticated access. With this mapping point, an HTTP client can access the remote content without further authentication at the portal server.
    -   `/myproxy` is for authenticated access. With this mapping point, the HTTP client must authenticate before it can access the remote resource through the Ajax proxy.
    Furthermore, you can also place the policy into the default mapping. Policies that are stored in the default mapping are accessible through all servlet entry points. Usually, policies for remote URLs that have security sensitive content are stored under the `/myproxy` mapping. Otherwise, it is good practice to store the policy in the default mapping. For more information, see *Policy Mappings*.

3.  Open one of the following XML templates in a text editor, depending on whether you want to place the policy in the default mapping or a different mapping.

    -   If you want to create a policy that resides in a different mapping other than the default mapping, open the following XML template in a text editor. This template is used for creating a policy in the `/myproxy` mapping:

        ```
        <?xml version="1.0" encoding="UTF-8"?>
        <proxy-rules xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
            xsi:noNamespaceSchemaLocation="http://www.ibm.com/xmlns/prod/sw/http/outbound/proxy-config/2.0">  
          
           <variables> 
              <dynamic-policy name="MY_ADMINISTRATIVE_NAME.url">
                 <value>MY_URL_PATTERN</value>
                 <!-- Step 5: add additional URL patterns here, if you want to -->
              </dynamic-policy>
           </variables>  
             
           <mapping contextpath="/myproxy"  url="*">
              <policy name="MY_ADMINISTRATIVE_NAME" url="{$MY_ADMINISTRATIVE_NAME.url}" >
                 <actions>
                    <method>GET</method>
                    <method>POST</method>
                    <!-- Step 6: add or remove HTTP methods here -->
                 </actions>	
        	
                 <!-- uncomment the cookie-rule section if required
                 <cookie-rule name="MY_ADMINISTRATIVE_NAME.cookies.1">
                    <cookie>my_cookie_name</cookie>
                    <scope>user</scope>
                    <handling>store-in-session</handling>
                 </cookie-rule>
                 -->
        	
                 <!--Step 7: uncomment this section if you require an authenticated remote connection.
           	        Change the metadata setting according to the type of authentication 
                    that you want to established.
        	  
                 <meta-data>
                    <name>hpaa.authtype</name>
                    <value>http-basic</value>
                 </meta-data>
                 <meta-data>
                    <name>hpaa.slotid</name>
                    <value>MY_ADMINISTRATIVE_NAME.credentials</value>
                 </meta-data>
                 <meta-data>
                    <name>forward-credentials-from-vault</name>
                    <value>true</value>
                 </meta-data>
                 -->
        
              </policy>
           </mapping>			
        	
        </proxy-rules>
        ```

    -   If you want to create a policy that resides in the default mapping, open the following XML template in a text editor. In this template, the `<policy>` section is not enclosed in a `<mapping>` section:

        ```
        <?xml version="1.0" encoding="UTF-8"?>
        <proxy-rules xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xsi:noNamespaceSchemaLocation="http://www.ibm.com/xmlns/prod/sw/http/outbound/proxy-config/2.0">  
        
           <variables>
              <dynamic-policy name="MY_ADMINISTRATIVE_NAME.url">
                 <value>MY_URL_PATTERN</value>
                 <!-- Step 5: add additional URL patterns here, if you want to -->
              </dynamic-policy>
           </variables>  
             
           <policy name="MY_ADMINISTRATIVE_NAME" url="{$MY_ADMINISTRATIVE_NAME.url}" >
              <actions>
                 <method>GET</method>
                 <method>POST</method>
             <!-- Step 6: add or remove HTTP methods here -->
              </actions>    
            
              <!-- uncomment the cookie-rule section if required
                  <cookie-rule name="MY_ADMINISTRATIVE_NAME.cookies.1">
                 <cookie>my_cookie_name</cookie>
                 <scope>user</scope>
                 <handling>store-in-session</handling>
              </cookie-rule>
              -->
            
              <!--Step 7: uncomment this section if you require an authenticated remote connection.
              Change the metadata setting according to the type of authentication that should be
              established. -->
              
              <meta-data>
                 <name>hpaa.authtype</name>
                 <value>http-basic</value>
              </meta-data>
              <meta-data>
                 <name>hpaa.slotid</name>
                 <value>MY_ADMINISTRATIVE_NAME.credentials</value>
              </meta-data>
              <meta-data>
                 <name>forward-credentials-from-vault</name>
                 <value>true</value>
              </meta-data>
           </policy>                
        </proxy-rules>
         
        ```

        You can apply all following steps to the templates given in this step.

4.  Determine an administrative name for the policy. This administrative name helps administrators to identify the policy later.

    For example, you can use `policy_01`.

    Locate all occurrences of `MY_ADMINISTRATIVE_NAME` and replace this string with the administrative name that you determined \(example: `policy_01`\).

5.  Define a URL pattern to which you want the policy to apply. Replace `MY_URL_PATTERN` with the URL pattern to which you want this policy to apply.

    For example, set the URL pattern to `http://http://www.ibm.com/us/en/*`.

6.  Determine the HTTP methods for which you want to make proxy requests possible. In most cases, the HTTP methods GET and POST are required. If you require a different set of supported methods, you can manage the list in the `<actions>` list of the template. Manage the `<actions>` section according to your requirements.

7.  Determine the authentication method that is required to establish the remote connection.

    The remote host might restrict the access to the URL. If you want the remote connection to be an authenticated connection, add the metadata settings that are required for the authentication type. Also, for certain authentications extra user credentials are referenced. Make sure that the Credential Vault contains the user credentials that are referenced in the authentication settings. For details, read *Authenticating outbound HTTP connections*.

8.  Save the XML document to a file.

    For example, save the document to the file /tmp/create\_policy.xml.

9.  Deploy the policy at the configuration profile that you selected in an earlier step.

    -   If you want the policy to be active globally, start the following portal configuration engine task:
        -   AIX® HP-UX Linux™ Solaris z/OS®:

            ```
            ./ConfigEngine.sh update-outbound-http-connection-config 
                              -DConfigFileName=/tmp/create\_policy.xml
            ```

        -   IBM® i:

            ```
            ConfigEngine.sh   update-outbound-http-connection-config 
                              -DConfigFileName=/tmp/create\_policy.xml
            ```

        -   Windows™:

            ```
            ConfigEngine.bat  update-outbound-http-connection-config 
                              -DConfigFileName=/tmp/create\_policy.xml
            ```

    -   If you want the policy to be active in the scope of a web module only, start the following portal configuration engine task. This example scopes the policy to the web module Banner AD:
        -   AIX HP-UX Linux Solaris z/OS:

            ```
            ./ConfigEngine.sh update-outbound-http-connection-config 
                              -DConfigFileName=/tmp/create\_policy.xml 
                              -DApplicationScopeRef=/PA\_Banner\_Ad
            ```

        -   IBM i:

            ```
            ConfigEngine.sh   update-outbound-http-connection-config 
                              -DConfigFileName=/tmp/create\_policy.xml 
                              -DApplicationScopeRef=/PA\_Banner\_Ad
            ```

        -   Windows:

            ```
            ConfigEngine.bat  update-outbound-http-connection-config 
                              -DConfigFileName=/tmp/create\_policy.xml 
                              -DApplicationScopeRef=/PA\_Banner\_Ad
            ```

    The policy was now added to the configuration. It is ready to use.


**Parent topic:**[Sample administration tasks ](../dev-portlet/outbhttp_cfg_smpl_adm_tasks.md)

**Related information**  


[Using the AJAX proxy in portlets ](../dev-portlet/ajax_proxy_prgrmdl_inplt.md)

[Policy mappings ](../dev-portlet/outbhttp_cfg_strctr_policy_mapng.md)

[Authenticating outbound HTTP connections ](../dev-portlet/outbhttp_authntct.md)

