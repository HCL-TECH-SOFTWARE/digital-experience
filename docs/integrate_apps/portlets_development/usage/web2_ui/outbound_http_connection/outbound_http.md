# Outbound HTTP connection

Applications in your HCL Portal and the related user activities can require outbound HTTP connections to remote computer systems. The outbound HTTP connection service provides an administration infrastructure with a central point of administration for all outbound HTTP connections that are defined in the portal environment.

Advantages:

-   The outbound HTTP connection service gives portal system administrators central control over outbound HTTP connections that are used.
-   The outbound HTTP connection infrastructure provides functions for authentication and cookie handling.
-   Application developers do not have to implement common HTTP connections support. For example, they do not need to write the handler code for various types of HTTP-based authentication, such as the following types:
    -   Basic authentication
    -   Form based authentication
    -   Authentication through SSL tokens
    -   SAML authentication.
-   In HCL Portal Version 8.0 and earlier versions, outbound HTTP connections were accessible through the Ajax Proxy service. The Ajax Proxy service was configured by a configuration document named proxy-config.xml. You find this document in the /WEB-INF directory of the web module that uses the Ajax Proxy service. Starting with HCL Portal Version 8.5 and the new outbound connection service, the configuration of outbound HTTP connections is now part of the standard datastore-based portal configuration.

Outbound HTTP connections are created by application code to establish an HTTP connection to a remote system. For example, such application code can be part of portlets, portlet services, themes, servlet filters, or other items. A remote outbound HTTP connections can be called from different components. Examples:

-   Code that runs in the context of a portlet
-   Code that runs in the context of a servlet, for example, a servlet filter
-   Code that runs on the portal server outside the context of a servlet request
-   Code that runs on the client.

You can therefore establish outbound HTTP connections in the following different ways:

-   Through the portlet-request based outbound HTTP connection service
-   Through the servlet-request based outbound HTTP connection service
-   Through the Ajax proxy.

The HCL Portal outbound HTTP connection includes the following components:

-   A common outbound HTTP connection configuration infrastructure. This infrastructure provides base functions for managing the configuration of outbound HTTP connections.
-   The outbound HTTP connection service. This service makes it possible to establish outbound HTTP connections from code that runs in the portal context.
-   The HTTP proxy for Ajax application. This application provides an interface for accessing outbound HTTP connections by using an HTTP proxy channel.

The Ajax proxy and the outbound HTTP connection services use the same common configuration infrastructure.

You can use an outbound HTTP connection in the following two ways:

-   Through the outbound HTTP connection service
-   Through the Ajax Proxy, which is also known as the HTTP proxy for Ajax application.

The following image illustrates the two different ways to connect to a remote system by using outbound HTTP connections: ![Two ways of connecting to a remote system by using HTTP outbound connections](../images/HTTP_OutBound_graphic_1.jpg)

-   **[The programming model for the outbound HTTP connection service](../dev-portlet/outbhttp_progr_model.md)**  
The outbound HTTP connection service can be used from the context of a servlet request service or from the context of a portlet request service. Here are some code examples.
-   **[HTTP proxy for Ajax applications, also known as Ajax Proxy](../dev-portlet/outbhttp_httproxy_4_ajax_apps.md)**  
One of the basic technologies that emerged in the context of the next generation web user interface is Ajax \(Asynchronous JavaScript and XML\). Using Ajax can increase the responsiveness and usability of your web applications.
-   **[Configuring outbound HTTP connections](../dev-portlet/outbhttp_cfg_oh_conns.md)**  
In HCL Portal Version 8.0 and earlier versions, outbound HTTP connections were accessible through the Ajax Proxy service. The Ajax Proxy service was configured by a configuration document named proxy-config.xml. You find this document in the /WEB-INF directory of the web module that uses the Ajax Proxy service. Starting with HCL Portal Version 8.5 and the new outbound connection service, the configuration of outbound HTTP connections is now part of the standard datastore-based portal configuration.
-   **[Authenticating outbound HTTP connections](../dev-portlet/outbhttp_authntct.md)**  
You can protect the access to the remote host by an authentication mechanism.
-   **[Using dynamic elements in outbound HTTP connection settings](../dev-portlet/outbhttp_dyn_elements.md)**  
In some cases, it is useful to control configuration settings at run time. For example, an administrator might want to have the program decide at run time which policy rule is applied. In another scenario, parts of a policy rule configuration that are known only at run time must be included in the configuration.
-   **[Using programmatic extensions for outbound HTTP connections](../dev-portlet/outbhttp_progr_xtns.md)**  
To extend the functions of an outbound connection, portal administrators can implement a custom outbound service filter.
-   **[Migration](../dev-portlet/outbound_http_migrate.md)**  
HCL Portal Version 8.5 provides a migration process for the change from the Ajax proxy of previous portal versions to the new outbound HTTP connection.

**Parent topic:**[Web 2.0 user interface features](../dev-portlet/w2_ovu.md)

**Related information**  


[The generic XML Digital Data Connector plug-in](../social/plrf_genrc_beanlst_provider.md)

[The generic JSON Digital Data Connector plug-in](../social/plrf_genrc_beanlst_provider_json.md)

[Changing from Ajax proxy to outbound HTTP connection](../migrate/mig_enable_outboundhttp.md)

