# Configuring your Oracle iPlanet web server

Configure the communication between HCL Portal and your Oracle iPlanet web server.

1.  Install and configure the web server plug-in on the system where the web server is located. Use the plug-ins installation wizard that is provided with WebSphere® Application Server. Refer to the following topic for information:

    -   AIX®, Linux™, Windows™: [Selecting a Web server topology diagram and road map](https://www.ibm.com/docs/en/was-nd/9.0.5?topic=installation-selecting-web-server-topology-diagram-roadmap)
    
    !!!important
        Depending on how you use the web server, you must adjust the ServerIOTimeout parameter. It defines how long the plug-in must wait for a response from the application. The minimum value is 60 but you must increase this value if you are retrieving data from a database. To update this value, locate and open your plugin-cfg.xml file and set ServerIOTimeout to an appropriate value. For information, read [Common questions about the Web server plug-in](https://support.hcltechsw.com/csm).

2.  If you are using an Oracle iPlanet web server, some portlets require that you disable the unix-uri-clean or nt-uri-clean directives. Edit the obj.conf file to enable or disable these directives. Refer to the [Oracle iPlanet web server documentation](https://docs.oracle.com/cd/E19146-01/821-1827/6nmpl1h7e/index.html) to determine the appropriate setting for your environment.

    !!!note
        If you are using Oracle iPlanet web server Version 7, you must disable uri-clean.

3.  Web 2.0 REST features in portal might require an enabled PUT and DELETE method. If your web server has these methods disabled, complete one of the following options:

    -   Enable HTTP tunneling to simulate PUT and DELETE requests, which means that POST requests are used instead. See the [Switch for tunneling of HTTP methods](https://pages.git.cwp.pnp-hcl.com/CWPdoc/dx-mkdocs/in-progress/extend_dx/apis/puma_spi/remote_rest_service_for_puma/remote_puma_rest_svc_implementation/uprof_rest_wp_tnlhttp) link for information.
    -   Follow the instructions for your web server to enable PUT and DELETE requests.
    
4.  Start the web server.

5.  If you want to use the short version of vanity URLs, add a rewrite rule to your web server. For more information, read [Providing short vanity URLs](https://pages.git.cwp.pnp-hcl.com/CWPdoc/dx-mkdocs/in-progress/manage_content/wcm/wcm_content_delivery/vanity_url/adm_vanity_url/van_url_short).



