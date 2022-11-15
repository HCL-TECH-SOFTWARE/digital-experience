# Prepare a remote web server

Install and configure the web server plug-in. The IBM WebSphere Application Server provides the plug-in. Configure the web server to communicate with HCL Digital Experience.

1.  Install and configure the web server. Refer to the web server documentation for information.

    **Dynamic cluster:** If you are creating a dynamic cluster environment, install and configure an OnDemand Router (ODR). Go to [Creating and configuring ODRs](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.wve.doc/ae/twve_odr.html?cp=SSAW57_8.5.5%2F1-9-0-2-2) for information.

2.  If you are using Microsoft™ Internet Information Server, update the **UrlSegmentMaxLength** Registry key. Change it to a value of 0 to eliminate potential problems in an HCL environment with the default IIS limitation on the length of URL path segments. Update the **AllowRestrictedChars** Registry key to a value of 1 to accept hex-escaped characters in request URLs that decode to the U+0000 - U+001F and U+007F - U+009F ranges.

    Refer to [Configuring Microsoft Internet Information Services (IIS)](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.doc/ae/tins_manualWebIIS.html) for information.

    !!!note
        Refer to [Http.sys registry settings for IIS](http://support.microsoft.com/kb/820129) for information.

3.  If you are using HCL® Domino®, edit the NOTES.INI file on the web server. Set the HTTPEnableConnectorHeaders and HTTPAllowDecodedUrlPercent parameters to 1. Also, if you are using WebDAV, enable it in the Domino web server administrative console.

4.  If you are using IBM HTTP Server or Apache Server, edit the httpd.conf file on the web server. Set the AllowEncodedSlashes directive to On. Add the directive to the root level as a global directive.

    |HTTP server type|Documentation link|
    |----------------|------------------|
    |Read the appropriate HTTP Server documentation|[IBM HTTP Server](http://www.ibm.com/software/webservers/httpservers/library/)|
    |Read the appropriate Apache Server documentation|[AllowEncodedSlashes directives](http://httpd.apache.org/docs/2.0/mod/core.html#allowencodedslashes)|

5.  Stop the web server.

6.  Install and configure the web server plug-in on the system where the web server is located. Use the plug-ins installation wizard that is provided with WebSphere® Application Server. Refer to the following topic for information:

    -   Linux™Windows™: [Selecting a Web server topology diagram and road map](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/tins_road_plugins.html)

    !!!important
        Depending on how you use the web server, you must adjust the ServerIOTimeout parameter. It defines how long the plug-in must wait for a response from the application. The minimum value is 60 but you must increase this value if you are retrieving data from a database. To update this value, locate and open your plugin-cfg.xml file and set ServerIOTimeout to an appropriate value.

7.  If you are using an Oracle iPlanet web server, some portlets require that you disable the unix-uri-clean or nt-uri-clean directives. Edit the obj.conf file to enable or disable these directives. Refer to the Oracle iPlanet web server documentation to determine the appropriate setting for your environment.

    !!!note
        If you are using Oracle iPlanet web server Version 7, you must disable uri-clean.

8.  Web 2.0 REST features in portal might require an enabled PUT and DELETE method. If your web server has these methods disabled, complete one of the following options:

    -   Enable HTTP tunneling to simulate PUT and DELETE requests, which means that POST requests are used instead. See the "Switch for tunneling of HTTP methods" link for information.
    -   Follow the instructions for your web server to enable PUT and DELETE requests.
9.  Start the web server.

10. Complete the following steps if you plan to use the Web Application Bridge feature:

    1.  Log on to the WebSphere Integrated Solutions Console.

    2.  Go to **Applications > Application Types > WebSphere enterprise applications**.

    3.  Find and click the **wp.vwat.servlet.ear** application link.

    4.  Under the **Web Module Properties** heading, click **Context Root For Web Modules**.

    5.  Change the context root to `/`.

        This step can create name conflicts. Add a rewrite rule to avoid these conflicts. 

    6.  Click **OK**.

    7.  Click **Save** to save your changes to the master configuration.

    8.  Stop and restart the **wp.vwat.servlet.ear** application.

11. If you want to use the short version of vanity URLs, add a rewrite rule to your web server. For more information, refer to [Providing short vanity URLs](/docs/manage_content/wcm/wcm_content_delivery/vanity_url/adm_vanity_url/van_url_short.md).

