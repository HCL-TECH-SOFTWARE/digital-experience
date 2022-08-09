# Configuring your Oracle iPlanet web server

Configure the communication between HCL Portal and your Oracle iPlanet web server.

1.  Install and configure the web server plug-in on the system where the web server is located. Use the plug-ins installation wizard that is provided with WebSphere® Application Server. Refer to the following topic for information:

    -   AIX® HP-UX Linux™ Solaris Windows™: [Selecting a Web server topology diagram and road map](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/tins_road_plugins.html)
    -   IBM® i: [Selecting a Web server topology diagram and road map](http://www-01.ibm.com/support/knowledgecenter/SSEQTP_8.5.5/com.ibm.websphere.base.iseries.doc/ae/tins_road_plugins.html)
    -   z/OS®: [Implementing a web server plug-in](http://www-01.ibm.com/support/knowledgecenter/SS7K4U_8.5.5/com.ibm.websphere.zseries.doc/ae/twsv_plugin.html)
    **Important:** Depending on how you use the web server, you must adjust the ServerIOTimeout parameter. It defines how long the plug-in must wait for a response from the application. The minimum value is 60 but you must increase this value if you are retrieving data from a database. To update this value, locate and open your plugin-cfg.xml file and set ServerIOTimeout to an appropriate value. For information, read [Common questions about the Web server plug-in](https://support.hcltechsw.com/csm).

2.  If you are using an Oracle iPlanet web server, some portlets require that you disable the unix-uri-clean or nt-uri-clean directives. Edit the obj.conf file to enable or disable these directives. Refer to the Oracle iPlanet web server documentation to determine the appropriate setting for your environment.

    **Note:** If you are using Oracle iPlanet web server Version 7, you must disable uri-clean.

3.  Web 2.0 REST features in portal might require an enabled PUT and DELETE method. If your web server has these methods disabled, complete one of the following options:

    -   Enable HTTP tunneling to simulate PUT and DELETE requests, which means that POST requests are used instead. See the "Switch for tunneling of HTTP methods" link for information.
    -   Follow the instructions for your web server to enable PUT and DELETE requests.
4.  Start the web server.

5.  If you want to use the short version of vanity URLs, add a rewrite rule to your web server. For more information, read *Providing short vanity URLs*.


**Parent topic:**[Configuring a remote web server](../config/cfg_webserver.md)

