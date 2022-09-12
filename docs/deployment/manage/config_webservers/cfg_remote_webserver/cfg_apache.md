# Configuring your Apache web server

Configure the communication between HCL Portal and your Apache web server.

1.  If you are using IBM HTTP Server or Apache Server, edit the httpd.conf file on the web server. Set the AllowEncodedSlashes directive to On. Add the directive to the root level as a global directive.

    |HTTP server type|Documentation link|
    |----------------|------------------|
    |Read the appropriate HTTP Server documentation|[IBM HTTP Server](https://www.ibm.com/support/knowledgecenter/en/SSEQTJ_8.5.5/as_ditamaps/was855_welcome_ihs.html)|
    |Read the appropriate Apache Server documentation|[AllowEncodedSlashes directives](http://httpd.apache.org/docs/2.0/mod/core.html#allowencodedslashes)|

2.  Stop the web server.

3.  Install and configure the web server plug-in on the system where the web server is located. Use the plug-ins installation wizard that is provided with WebSphere® Application Server. Refer to the following topic for information:

    -   AIX® HP-UX Linux™ Solaris Windows™: [Selecting a Web server topology diagram and road map](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/tins_road_plugins.html)
    -   IBM® i: [Selecting a Web server topology diagram and road map](http://www-01.ibm.com/support/knowledgecenter/SSEQTP_8.5.5/com.ibm.websphere.base.iseries.doc/ae/tins_road_plugins.html)
    -   z/OS®: [Implementing a web server plug-in](http://www-01.ibm.com/support/knowledgecenter/SS7K4U_8.5.5/com.ibm.websphere.zseries.doc/ae/twsv_plugin.html)
    
    !!!important
        Depending on how you use the web server, you must adjust the ServerIOTimeout parameter. It defines how long the plug-in must wait for a response from the application. The minimum value is 60 but you must increase this value if you are retrieving data from a database. To update this value, locate and open your plugin-cfg.xml file and set ServerIOTimeout to an appropriate value. For information, read [Common questions about the Web server plug-in](https://support.hcltechsw.com/csm).

4.  Web 2.0 REST features in portal might require an enabled PUT and DELETE method. If your web server has these methods disabled, complete one of the following options:

    -   Enable HTTP tunneling to simulate PUT and DELETE requests, which means that POST requests are used instead. See the “Switch for tunneling of HTTP methods” link for information.
    -   Follow the instructions for your web server to enable PUT and DELETE requests.
5.  Start the web server.

6.  If you want to use the short version of vanity URLs, add a rewrite rule to your web server. For more information, read *Providing short vanity URLs*.



