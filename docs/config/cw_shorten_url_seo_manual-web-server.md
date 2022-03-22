# Manual Step: Configure your external web server

The Modify Site URLs for Search Engine Optimization option in the Configuration Wizard includes manual steps. For reference only, you can see the details of the manual step for configuring an external web server. To view this step in the Configuration Wizard, you must select Yes to using an external web server when you provide information about your environment.

1.  Stand-alone environment version of the external web server step
2.  Manual step: Configure your external web server.

    1.  Copy the following script from the plugin\_root/bin directory of the web server to the `wp\_profile\_root`[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/bin directory on your HCL Portal server:

        -   AIX® HP-UX Linux™ Solaris: ./configurewebservername.sh
        -   Windows™: configurewebservername.bat
        -   IBM® i: configurewebservername.sh
        -   z/OS®: ./configurewebservername.sh
        where webservername is the web server definition name you defined previously when you configured the HTTP Server for HCL Portal, for example: configurewebserver1.bat.

    2.  Run the following command, from the `wp\_profile\_root`[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/bin directory:
        -   AIX HP-UX Linux Solaris: ./configurewebservername.sh
        -   Windows: configurewebservername.bat
        -   IBM i: configurewebservername.sh
        -   z/OS: ./configurewebservername.sh
    3.  Regenerate the web server plug-in in WebSphere® Application Server. If you are using a remote web server, copy the generated plugin-cfg.xml file to the remote server. Note: Do not complete these steps if you are changing only the WSRP Producer context home value.
    4.  Restart the web server.
3.  Cluster environment version of the external web server step
4.  Manual step: Configure your external web server.

    1.  Copy the following script from the plugin\_root/bin directory of the web server to the dmgr\_profile/bin directory on your Deployment Manager server:

        -   AIX HP-UX Linux Solaris: ./configurewebservername.sh
        -   Windows: configurewebservername.bat
        -   IBM i: configurewebservername.sh
        -   z/OS: ./configurewebservername.sh
        where webservername is the web server definition name you defined previously when you configured the HTTP Server for HCL Portal, for example: configurewebserver1.bat.

    2.  Run the following command on the Deployment Manager server:
        -   AIX HP-UX Linux Solaris: ./configurewebservername.sh
        -   Windows: configurewebservername.bat
        -   IBM i: configurewebservername.sh
        -   z/OS: ./configurewebservername.sh
    3.  Regenerate the web server plug-in in WebSphere Application Server. If you are using a remote web server, copy the generated plugin-cfg.xml file to the remote server. Note: Do not complete these steps if you are changing only the WSRP Producer context home value.
    4.  Restart the web server.

