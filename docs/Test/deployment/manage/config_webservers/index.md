# Web servers

HCL Digital Experience uses the internal HTTP transport within IBM WebSphere Application Server to handle requests. However, because WebSphere Application Server also supports the use of an external web server, you can access HCL Portal from your web server. You can use a local web server on the same server as HCL Portal or you can use a remote web server on a different server. A remote web server is typical for a production environment or other high-traffic configuration and is also typically placed in DMZ outside a firewall to protect portal ports.

**Web servers in a clustered environment:** When you use a web server in a clustered environment with HCL Portal, the following considerations apply:

-   If you run the configureweb_server_name script on the deployment manager system, you must synchronize and restart the cluster to ensure communication between the web server and the cluster members.
-   You can federate a stand-alone node into a cell that is managed by the deployment manager. However, the web server definitions on that node are removed. If you want to use the web server, you must re-create the definition in the deployment manager WebSphere® Integrated Solutions Console after you federate the node.

Configure your remote web server. Then, configure your web server to work with features such as HCL Web Content Manager.