# Web servers

HCL Digital Experience uses the internal HTTP transport within IBM WebSphere Application Server to handle requests. However, because WebSphere Application Server also supports the use of an external web server, you can access HCL Portal from your web server. You can use a local web server on the same server as HCL Portal or you can use a remote web server on a different server. A remote web server is typical for a production environment or other high-traffic configuration and is also typically placed in DMZ outside a firewall to protect portal ports.

**Web servers in a clustered environment:** When you use a web server in a clustered environment with HCL Portal, the following considerations apply:

-   If you run the configureweb\_server\_name script on the deployment manager system, you must synchronize and restart the cluster to ensure communication between the web server and the cluster members.
-   You can federate a stand-alone node into a cell that is managed by the deployment manager. However, the web server definitions on that node are removed. If you want to use the web server, you must re-create the definition in the deployment manager WebSphere® Integrated Solutions Console after you federate the node.

Configure your remote web server. Then, configure your web server to work with features such as HCL Web Content Manager.

-   **[Configuring a remote web server](../config/cfg_webserver.md)**  
To enable communication between the web server and WebSphere Application Server, a web server plug-in is required. The web server plug-in determines whether a request is handled by the web server or by the application server. The plug-in can be installed into a web server that is located either on the same server as WebSphere Application Server or on a separate server. The web server plug-in uses an XML configuration file \(plugin-cfg.xml\) that contains settings that describe how to handle and pass on requests to the WebSphere Application Server made accessible through the plug-in.
-   **[Accessing HCL Portal through another HTTP port](../config/cfg_http_port.md)**  
By default HCL Portal is configured to be accessed through the internal HTTP port in WebSphere Application Server. For example, http://hostname.example.com:10039/wps/portal, where hostname.example.com is the fully qualified host name of the server where Portal is running and 10039 is the default transport port that is created by WebSphere Application Server. The port number might be different for your environment. http://hostname.example.com:10039/wps/portal, where hostname.example.com is the fully qualified host name of the server where Portal is running and 10039 is the default transport port that is created by WebSphere Application Server. The port number might be different for your environment. The default host name and port that is used by HCL Portal are specified by the WpsHostName and WpsHostPort properties in the wkplc.properties file.
-   **[Web server usage on DX containers](../containerization/container_webserver_usage.md)**  
HCL Digital Experience containers support receiving and responding to requests from external web servers, which forward cookies \(such as JSESSIONID, LtpaToken2, or any other required cookies\) for a configuration.

**Parent topic:**[Configuring](../config/configuring_parent2.md)

