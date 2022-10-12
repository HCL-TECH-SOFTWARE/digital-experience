# Configuring the HTTP Outbound connection in HCL Portal

Configure the proxy server in HCL Portal. To avoid cross-site scripting (XSS) vulnerabilities, many browsers deny JavaScript commands on a remote server. The commands are denied because the remote server is on a different domain than the HCL Portal server. Therefore, the function of Forms that are created on Forms Experience Builder are limited. When you configure the HTTP Outbound connection, a proxy rule is enabled on the portal server that allows the JavaScript commands on the remote server.

Make a backup copy of the proxy-config.xml file. This file is in the wp_profile_root)/wp_profile/config/cells/applications/AJAX Proxy Configuration.ear/deployments/AJAX Proxy Configuration/wp.proxy.config.war/WEB-INF/ directory. Keep the copy so that you can revert to the original version if an error occurs.

1.  Open the proxy-config.xml file.

2.  Add the following `<policy url="...">...</policy>` content after the last entry:

    !!!note
        Change `{$serverHostname}` and `{$serverPort}` to reflect the Forms Experience Builder server configuration. `/forms/` is the standard context-root of the Forms Experience Builder application. If the `/forms/` context-root was configured differently during the setup, change it as required. Change `{$token.ltpa.name}` and `{$token.ltpa2.name}` to reflect the single sign-on (SSO) configuration page on the portal server. If the fields are blank, then use LtpaToken and LtpaToken2.

    ```
    <policy url="{http|https}://{$serverHostname}:{$serverPort}/forms/*"" name="feb">
        <actions>
            <method>GET</method>
            <method>HEAD</method>
            <method>POST</method>
            <method>PUT</method>
            <method>DELETE</method>
        </actions>
        <headers>
            <header>x-lfn-url-callback</header>
            <header>User-Agent</header>
            <header>Accept*</header>
            <header>Vary</header>
            <header>Location</header>
            <header>Content*</header>
            <header>Authorization*</header>
            <header>X-Method-Override</header>
            <header>Set-Cookie</header>
            <header>If-Modified-Since</header>
            <header>If-None-Match</header>
            <header>X-Server</header>
            <header>X-Update-Nonce</header>
            <header>X-Requested-With</header>
            <header>com.ibm.lotus.openajax.virtualhost</header>
            <header>com.ibm.lotus.openajax.virtualport</header>
        </headers>
        <cookie-rule name="feb">
            <cookie>LTPA</cookie>
            <cookie>LTPA2</cookie>
            <cookie>JSESSIONID</cookie>
            <cookie>{$token.ltpa.name}</cookie>
            <cookie>{$token.ltpa2.name}</cookie>
            <cookie>SimpleToken</cookie>
        </cookie-rule>
    </policy>
    ```

3.  Add the following information to the metadata section of the proxy-config.xml file:

    ```
    <meta-data>
    	<name>forward-http-errors</name>
    	<value>true</value>
    </meta-data>
    ```

4.  Open a command prompt on the portal server. Change to the wp_profile_root\ConfigEngine directory.

5.  Run the following command to configure the proxy:

    -   AIX® and Linux™:

        ```
        ./ConfigEngine.sh -DWasPassword=wpsadmin
                          -DPortalAdminPwd=wpsadmin checkin-wp-proxy-config
                          -DProxyConfigFileName=/proxy-config.xml
        ```

    -   Windows™:

        ```
        ConfigEngine.bat  -DWasPassword=wpsadmin
                          -DPortalAdminPwd=wpsadmin checkin-wp-proxy-config
                          -DProxyConfigFileName=C:\proxy-config.xml
        ```

    Starting with Combined Cumulative Fix CF10, also perform the following extra steps to configure the proxy:

    1.  Create the XML document that contains the connection policy.

    2.  Save the XML document somewhere in a working directory

    3.  Update the global Outbound Connections profile by using the following portal configuration engine task:

        -   AIX and Linux:

            ```
            ./ConfigEngine.sh update-outbound-http-connection-config   
                              -DConfigFileName=c:/IBM/feb-configuration.xml 
                              -DOutboundProfileType=global
            ```

        -   Windows:

            ```
            ConfigEngine.bat  update-outbound-http-connection-config   
                              -DConfigFileName=c:/IBM/feb-configuration.xml 
                              -DOutboundProfileType=global
            ```

    4.  To confirm that the updates were applied correctly, export the global configuration again. To do so, use the following portal configuration engine task:

        -   AIX and Linux:

            ```
            ./ConfigEngine.sh read-outbound-http-connection-config
                              -DConfigFileName=c:/IBM/the-global-profile.xml
                              -DOutboundProfileType=global
            ```

        -   ```
ConfigEngine.sh   read-outbound-http-connection-config 
                  -DConfigFileName=c:/IBM/the-global-profile.xml 
                  -DOutboundProfileType=global
```

        -   ```
ConfigEngine.bat  read-outbound-http-connection-config 
                  -DConfigFileName=c:/IBM/the-global-profile.xml 
                  -DOutboundProfileType=global
```

6.  Restart the portal server.


???+ info "Related information"  
    -   [How to update an outbound HTTP connection configuration profile](../../../../../../extend_dx/portlets_development/web2_ui/outbound_http_connection/cfg_outbound_http_connections/adm_tools_for_cfg_outbound_http_conn/cfg_outbound_http_using_cfgtsk/outbhttp_cfg_tsk_update.md)
    -   [How to read an outbound HTTP connection configuration profile](../../../../../../extend_dx/portlets_development/web2_ui/outbound_http_connection/cfg_outbound_http_connections/adm_tools_for_cfg_outbound_http_conn/cfg_outbound_http_using_cfgtsk/outbhttp_cfg_tsk_read.md)



