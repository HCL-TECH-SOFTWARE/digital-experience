# Configuring access to a remote spell checker

Configure access to run spell checker on a remote server.

1.  Open a command prompt and change to the wp_profile_root]/ConfigEngine/properties directory.

2.  Open the wkplc.properties file.

3.  Add values for the following parameters:

    -   **SpellCheckHost**

        Specify the host name for the remote spell check server. Enter myserver.myurl.com.

    -   **SpellCheckPort**

        Specify the port number for the remote spell check server. Complete the following steps to determine the port number:

        1.  Log in to the WebSphere® Integrated Solutions Console; for example, `http://remote\_server\_name:port\_number/ibm/console`.
        2.  Select **Servers > Server Types > WebSphere application servers > server1**.
        3.  In the **Communications** section, expand **Ports**.
        4.  Locate the port for WC_defaulthost. This parameter is the remote server port.
        5.  Log out of the WebSphere® Integrated Solutions Console.
4.  Complete the following steps if you are using a custom context root on either the local portal server or on the remote SpellCheck server.

    1.  Change to the wp_profile_root/PortalServer/config/com/ibm/wps/odc/spellcheck/util directory.

    2.  Open the SpellCheckConfig.properties file.

    3.  Edit the following parameters:

        -   SpellCheck_Remote_Context=/remote_context_root/spellcheck
        -   SpellCheck_Context=/local_context_root/spellcheck
        The remote_context_root value is the context root of the spell checker service that is hosted on the remote server. The local_context_root is the context root of the portal server that accesses the remote server.

5.  Save the changes.

6.  Run the following command from the wp_profile_root/ConfigEngine directory:

    -   AIX® amd Linux™: `./ConfigEngine.sh delegate-spell-checking -DWasPassword=password`
    -   Windows™: `ConfigEngine.bat delegate-spell-checking -DWasPassword=password`

7.  Restart the server.


If the portal server is securely protected with SSL, then the remote spell checker must also be configured to use SSL. The RemotePort property in the SpellCheckConfig.properties file must be set to the secure SSL port on the remote application server that is hosting the spell checker service. The remote server must import the client certificate into the following locations:

-   SSL configuration repertoire's truststore
-   The cacerts file in the /AppServer/java/jre/lib/security directory on the remote server


???+ info "Related information"  
    -   [ConfigEngine validation targets](../../manage/siteurl_cfg/changing_siteurl/cfg_validation_targets.md)
    - [WebSphere® Integrated Solutions Console](../../manage/portal_admin_tools/WebSphere_Integrated_Solutions_Console.md)
