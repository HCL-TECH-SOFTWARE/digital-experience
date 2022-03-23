# Context root and authentication mechanism 

The remote REST service for PUMA is implemented as a servlet that runs as a separate enterprise application on the HCL Portal server.

The starting weight of the application has to be higher than the starting weight of the portal application \(usually `wps.ear`\) because it needs the portal run time during startup. This is set by the corresponding install and configuration tasks. By default the REST Service application defines the context root `/wps/um`, where the `/wps` part is equivalent to the general portal context path. The `/um` path element is considered to be fix as it is part of the URI path definitions in the RESTful interface.

Using the Portal context path as a prefix for the context root is a necessary prerequisite with regards to the default authentication method that is configured for the servlet, which reuses the application specific form based authentication mechanism implemented in the portal. This way, a request that needs authentication is redirected to the appropriate portal login page. After successful authentication, the portal login again redirects to the previous URL. As this requires a specific handling of the redirect on the client side, it is recommended that clients make sure that a security context exists already before calling operations that involve protected URLs. This is usually the case when running in a portal session context. Alternatively, you can configure the servlet for different authentication methods by changing the `web.xml` descriptor appropriately, for example, for basic or SSL client certificate authentication.

**Parent topic:**[How the portal implements the remote PUMA REST service ](../dev/uprof_rest_wpspec.md)

