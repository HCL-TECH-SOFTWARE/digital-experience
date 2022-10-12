# Configuring your Domino web server

Configure the communication between HCL Portal and your HCL Domino web server.

1.  Edit the NOTES.INI file on the web server. Set the HTTPEnableConnectorHeaders and HTTPAllowDecodedUrlPercent parameters to 1. Also, if you are using WebDAV, enable it in the Domino® web server administrative console.

2.  Stop the web server.

3.  Install and configure the web server plug-in on the system where the web server is located. Use the plug-ins installation wizard that is provided with WebSphere® Application Server. Refer to the following topic for information:

    -   AIX®, Linux™, Windows™: [Selecting a Web server topology diagram and road map](https://www.ibm.com/docs/en/was-nd/9.0.5?topic=installation-selecting-web-server-topology-diagram-roadmap)
    
    !!!important
        Depending on how you use the web server, you must adjust the ServerIOTimeout parameter. It defines how long the plug-in must wait for a response from the application. The minimum value is 60 but you must increase this value if you are retrieving data from a database. To update this value, locate and open your plugin-cfg.xml file and set ServerIOTimeout to an appropriate value. For information, read [Common questions about the Web server plug-in](https://support.hcltechsw.com/csm).

4.  Web 2.0 REST features in portal might require an enabled PUT and DELETE method. If your web server has these methods disabled, complete one of the following options:

    -   Enable HTTP tunneling to simulate PUT and DELETE requests, which means that POST requests are used instead. See the [Switch for tunneling of HTTP methods](https://pages.git.cwp.pnp-hcl.com/CWPdoc/dx-mkdocs/in-progress/extend_dx/apis/puma_spi/remote_rest_service_for_puma/remote_puma_rest_svc_implementation/uprof_rest_wp_tnlhttp) link for information.
    -   Follow the instructions for your web server to enable PUT and DELETE requests.
    
5.  Start the web server.

6.  If you want to use the short version of vanity URLs, add a rewrite rule to your web server. For more information, read [Providing short vanity URLs](https://pages.git.cwp.pnp-hcl.com/CWPdoc/dx-mkdocs/in-progress/manage_content/wcm/wcm_content_delivery/vanity_url/adm_vanity_url/van_url_short).



