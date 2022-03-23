# Configuring access to a remote spell checker 

Configure access to run spell checker on a remote server.

1.  Open a command prompt and change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties directory.

2.  Open the wkplc.properties file.

3.  Add values for the following parameters:

    -   **SpellCheckHost**

        Specify the host name for the remote spell check server. Enter myserver.myurl.com.

    -   **SpellCheckPort**

        Specify the port number for the remote spell check server. Complete the following steps to determine the port number:

        1.  Log in to the WebSphere® Integrated Solutions Console; for example, `http://remote\_server\_name:port\_number/ibm/console`.
        2.  Select **Servers** \> **Server Types** \> **WebSphere application servers** \> **server1**.
        3.  In the **Communications** section, expand **Ports**.
        4.  Locate the port for WC\_defaulthost. This parameter is the remote server port.
        5.  Log out of the WebSphere® Integrated Solutions Console.
4.  Complete the following steps if you are using a custom context root on either the local portal server or on the remote SpellCheck server.

    1.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config/com/ibm/wps/odc/spellcheck/util directory.

    2.  Open the SpellCheckConfig.properties file.

    3.  Edit the following parameters:

        -   SpellCheck\_Remote\_Context=/remote\_context\_root/spellcheck
        -   SpellCheck\_Context=/local\_context\_root/spellcheck
        The remote\_context\_root value is the context root of the spell checker service that is hosted on the remote server. The local\_context\_root is the context root of the portal server that accesses the remote server.

5.  Save the changes.

6.  Run the following command from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory:

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh delegate-spell-checking -DWasPassword=password
    -   IBM® i: ConfigEngine.sh delegate-spell-checking -DWasPassword=password
    -   Windows™: ConfigEngine.bat delegate-spell-checking -DWasPassword=password
    -   z/OS®: ./ConfigEngine.sh delegate-spell-checking -DWasPassword=password
7.  Restart the server.


If the portal server is securely protected with SSL, then the remote spell checker must also be configured to use SSL. The RemotePort property in the SpellCheckConfig.properties file must be set to the secure SSL port on the remote application server that is hosting the spell checker service. The remote server must import the client certificate into the following locations:

-   SSL configuration repertoire's truststore
-   The cacerts file in the /AppServer/java/jre/lib/security directory on the remote server

**Parent topic:**[Setting up a remote spell checker ](../config/doc_pap_spellchk.md)

**Related information**  


[ConfigEngine validation targets ](../config/cfg_validation_targets.md)

