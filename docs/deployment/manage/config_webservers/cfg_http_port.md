# Accessing HCL Portal through another HTTP port

By default HCL Portal is configured to be accessed through the internal HTTP port in WebSphere Application Server. For example, http://hostname.example.com:10039/wps/portal, where hostname.example.com is the fully qualified host name of the server where Portal is running and 10039 is the default transport port that is created by WebSphere Application Server. The port number might be different for your environment. http://hostname.example.com:10039/wps/portal, where hostname.example.com is the fully qualified host name of the server where Portal is running and 10039 is the default transport port that is created by WebSphere Application Server. The port number might be different for your environment. The default host name and port that is used by HCL Portal are specified by the WpsHostName and WpsHostPort properties in the wkplc.properties file.

After you configure HCL Portal to use an external web server, you access the portal with the web server host name and port \(for example, 80\). For stand-alone servers or vertical cluster members, you are unable to access the portal with the HCL Portal host name and port \(for example, 10039\). You can access it if there is a corresponding virtual host definition for port 10039 in the WebSphere® Application Server configuration.

Many of the HCL Portal configuration tasks rely on the WpsHostName and WpsHostPort properties from the wkplc.properties file. You must ensure that HCL Portal can be accessed with the host name and port that is specified by these property values. Choose one of the following methods:

-   Modify the WpsHostName and WpsHostPort property values to specify the web server host name and port.
-   Add the appropriate virtual host definition.

If you want to access HCL Portal with a host name and port different from your web server, add the required virtual host definition with the WebSphere Integrated Solutions Console. In a clustered environment, use the deployment manager WebSphere Integrated Solutions Console to complete these steps.

1.  Log on to the WebSphere Integrated Solutions Console.

2.  Go to **Environment** \> **Virtual Hosts**.

3.  Select the **default\_host** entry or the entry for the virtual host that is being used to access the HCL Portal application.

4.  Select **Host Aliases**, and verify whether there is a host name and port entry corresponding to the values used to access HCL Portal. If the entry does not exist, select **New**, and enter the information for the host name and port you want to use.

    The following information is the host alias examples:

    -   AIX® HP-UX IBM® i Linux™ Solaris Windows™: \*:10039
    -   z/OS®: \*:9081
5.  Save your changes.

6.  Regenerate the web server plug-in.

7.  If you are using a remote web server, copy the updated plugin-cfg.xml file to the web server in the web server home directory.

8.  If you are running a system under stress and are expecting requests to take longer than the **ServerIOTimeout** default value, increase this value to avoid sending requests twice.

9.  Recycle your web server, and your portal.

10. In a clustered environment, resynchronize the nodes and restart the cluster.



