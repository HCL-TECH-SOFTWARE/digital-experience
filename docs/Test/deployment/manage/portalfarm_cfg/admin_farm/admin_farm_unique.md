# Administering unique portal farm installations

In a farm of uniquely installed HCL Digital Experience instances, each instance has its own release database while every other database domain is shared, including the JCR. Each unique installation also has its own unique IBM WebSphere Application Server configuration profile and its own WebSphere Integrated Solutions Console. Therefore, application, server configuration, and service updates must be made on each server. It is highly recommended that such updates be automated through configuration scripts that call the appropriate command-line tools for making changes \(for example XMLAccess, wsadmin\). This automation enables the repetition of the exact same change on each server without the possibility of injecting human error.

How you remove and restore a server from production traffic depends on the load balancing mechanism used. If you are using the WebSphere® Application Server plug-in for the HTTP Server, for example, it is a matter of temporarily removing that Server entry from the ServerCluster definition and either restarting the HTTP Server or waiting for the HTTP Server to reload the configuration \(if automatic reload is enabled\).

1.  Remove the server from the production traffic.

2.  Apply the update.

3.  Restart the server.

4.  Verify the change as appropriate.

5.  Restore the server back to the production traffic.



