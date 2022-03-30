# Configuring a remote web server 

To enable communication between the web server and WebSphere Application Server, a web server plug-in is required. The web server plug-in determines whether a request is handled by the web server or by the application server. The plug-in can be installed into a web server that is located either on the same server as WebSphere Application Server or on a separate server. The web server plug-in uses an XML configuration file \(plugin-cfg.xml\) that contains settings that describe how to handle and pass on requests to the WebSphere Application Server made accessible through the plug-in.

In the WebSphere® Integrated Solutions Console, the web server is represented as a specific server type, and you can view or modify all of the configuration properties that are used in the plugin-cfg.xml file for the web server plug-in from the WebSphere Integrated Solutions Console.

**Note:** For some portal functions to work, you must make sure that the web server write and delete operations are allowed. These operations enable the HTTP operations POST, PUT, and DELETE. For example, these operations are required for the toolbar.

Choose the type of web server to configure.

-   **[Configuring your Apache web server ](../config/cfg_apache.md)**  
Configure the communication between HCL Portal and your Apache web server.
-   **[Configuring your Domino web server ](../config/cfg_domino.md)**  
Configure the communication between HCL Portal and your HCL Domino web server.
-   **[Configuring your Oracle iPlanet web server ](../config/cfg_iplanet.md)**  
Configure the communication between HCL Portal and your Oracle iPlanet web server.
-   **[Configuring your OnDemand Router ](../config/cfg_odr.md)**  
Configure the communication between HCL Portal and your OnDemand Router \(ODR\).

**Parent topic:**[Web servers ](../config/config_webservers.md)

