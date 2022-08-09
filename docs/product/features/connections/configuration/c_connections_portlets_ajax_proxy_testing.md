# Testing the Ajax proxy configuration

Test the configuration of the application-specific Ajax proxy to manage authentication for the HCL Connections portlets.

HCL Connections portlets now use an application-specific Ajax proxy mechanism for forwarding security headers and cookies with each REST service call to authenticate the request with the HCL Connections server. The proxy is configured as part of the installation process. Use the following test URLs to verify that the application-specific proxy configuration is working.

**Note:** If you are in an SSO environment, you must first open a new browser window and log in to Portal as a HCL Connections user.

-   If you have a web server that is configured for Portal and HCL Connections, use:

    http://<WP\_Server\>/wps/<CONNECTIONS\_PORTLETS\_CONTEXT\_ROOT\>/proxy/https/<CONNECTIONS\_SERVER\_BASE\_URL\>/profiles/atom/profileService.do

    For example, http://myportalwebserver/wps/PA\_icWEFPtlts/proxy/https/myconnectionswebserver/profiles/atom/profileService.do

-   If you have a web server that is configured for HCL Connections but not for Portal, use:

    http://<WP\_Server:Port\>/wps/<CONNECTIONS\_PORTLETS\_CONTEXT\_ROOT\>/proxy/https/<CONNECTIONS\_SERVER\_BASE\_URL\>/profiles/atom/profileService.do

    For example, http://myportalserver:10039/wps/PA\_icWEFPtlts/proxy/https/myconnectionswebserver/profiles/atom/profileService.do

-   If you do not have web servers that are configured for either Portal or HCL Connections, use:

    http://<WP\_Server:Port\>/wps/<CONNECTIONS\_PORTLETS\_CONTEXT\_ROOT\>/proxy/https/<CONNECTIONS\_SERVER\_BASE\_URL:port\>/profiles/atom/profileService.do

    For example, http://myportalserver:10039/wps/PA\_icWEFPtlts/proxy/https/myconnectionsserver:9444/profiles/atom/profileService.do


In an SSO environment:

-   If you are prompted to save or open a document or a feed renders in the browser, then the proxy is properly configured.
-   If you are prompted to enter a user name and password, then the proxy is properly configured but SSO is not enabled.
-   If you receive a 403 error in response, then the proxy is not properly configured.
-   If you receive a 500 or any other response code, the proxy was properly configured but something else is not working.

In a non-SSO environment:

-   Enter the user name and password of an HCL Connections user.
-   If you are prompted to save or open a document or a feed renders in the browser, then the proxy is properly configured
-   If you receive a 403 error in response, then the proxy is not properly configured.
-   If you receive a 500 or any other response code, the proxy was properly configured but something else is not working.

**Parent topic:**[Configure HCL Portal to work with HCL Connections](../connect/c_connections_overview.md)

