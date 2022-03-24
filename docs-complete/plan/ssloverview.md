# Secure communications using SSL 

Configuring HCL Digital Experience for SSL adds security to the client-portal exchange. It encrypts all traffic between the client browser and the server, so that no one can "eavesdrop" on the information that is exchanged over the network between the client browser and HCL Digital Experience. In addition, assuming that the IBM WebSphere Application Server is also configured to accept or require SSL connections, the LTPA Token and other security and session information can be protected against hijack and replay attacks.

Configuring HCL Digital Experience for SSL is a multi-step process that involves configuring the following components:

-   Web \(HTTP\) server running in front of WebSphere® Application Server
-   WebSphere Application Server
-   HCL Digital Experience

In general, the web server must be configured to accept inbound SSL traffic. The WebSphere Application Server plug-in for the web server must be configured to forward traffic on that port to WebSphere Application Server and HCL Digital Experience. Then, you must configure the virtual host information. Finally, HCL Digital Experience must be configured to generate self-referencing URLs using SSL as the transport.

**Note:** This procedure might be slightly different if a front-end security proxy server such as Security Access Manager WebSEAL is used. In that case, the front-end security server handles the client SSL connections. The web server receives connections from the front-end security proxy server. Mutually authenticated SSL can be configured in the web server and the front-end security proxy server if needed. It is highly dependent on the security requirements of each deployment.

**Parent topic:**[Security and authentication considerations ](../plan/plan_secauth.md)

**Related information**  


[WebSphere Application Server Security Guide: Chapter 5](http://www.redbooks.ibm.com/abstracts/sg247660.html?Open)

