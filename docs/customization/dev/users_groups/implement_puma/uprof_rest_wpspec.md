# How the portal implements the remote PUMA REST service

The previous topics describe the general part of the remote REST service for PUMA Interface. This interface can be implemented by different providers that can be based on different backend systems or user repositories and provide their own input and output formats. The implementation of the interface described here is the one based on HCL Portal 8.5.

The implementation described here uses ATOM \(refer to RFC 4287\) and the ATOM Publishing Protocol as basic input and output format to wrap the resource representations described by the schema in the general part. Additionally, using the remote REST service for PUMA requires that you consider some special aspects described in this section.

-   **[URL path segment for virtual portals](../dev/uprof_rest_wp_vp.md)**  
HCL Portal provides the concept of virtual portals that allows you to manage several separate portals within one portal installation. You can associate each of these virtual portals with a user realm and thereby limit the scope of users or groups that can access it to one realm of the underlying user repository.
-   **[Identifiers used in the Portal Implementation](../dev/uprof_rest_wp_id.md)**  
For the unique identifier in the URLs, the portal uses a string representation of the internal identifier that is considered to be opaque to the client. The identifier that is used for retrieval of users or groups, that is by either the `identifier` or the `memberOf` request parameters, is the unique security name that is associated to the security context in the WebSphere® Application Server. The exact matching of the unique security name is part of the security configuration, but in most scenarios it matches the distinguished name \(DN\). The same identifier is of course also used for the `identifier` attribute in the profile element.
-   **[Access Control Checks](../dev/uprof_rest_wp_pac.md)**  
The portal does not allow you to set permissions for attribute definitions. Therefore the remote REST service for PUMA allows requests to some operations only for authenticated users.
-   **[Using ATOM/APP as input and output format](../dev/uprof_rest_wp_appio.md)**  
The remote REST service for PUMA uses the ATOM Publishing Protocol \(APP\) as the primary input and output format. It wraps the elements described by the schema document in the remote REST service for PUMA in appropriate ATOM feed or entry documents. Although this is the default input and output format, the client should specify the mime type `application/atom+xml` either in the `mime-type` request parameter or in the accept header. A more detailed description of how the APP maps to the RESTful interface and some examples are given here.
-   **[Switch for tunneling of HTTP methods](../dev/uprof_rest_wp_tnlhttp.md)**  
The portal implementation allows you to simulate PUT and DELETE requests by tunneling, that is by using POST requests instead.
-   **[HTTP caching](../dev/uprof_rest_wp_httpcach.md)**  
The remote REST service for PUMA sets the `Cache-Control` HTTP header in the response to `public` for resources that are served without authentication, and to `private` for URIs that require authentication.
-   **[Context root and authentication mechanism](../dev/uprof_rest_wp_cntxrtauth.md)**  
The remote REST service for PUMA is implemented as a servlet that runs as a separate enterprise application on the HCL Portal server.
-   **[Lookup facility in the portal](../dev/uprof_rest_wp_lookup.md)**  
For both convenience and alignment to other portal REST services, the portal remote REST service for PUMA offers a lookup facility. This lookup facility is done by plugging a provider into a reusable lookup facility in the portal. This function makes it possible for you to retrieve particular URLs of the service by specifying an absolute URI as a parameter to the so-called lookup servlet addressed by `/wps/poc`.

**Parent topic:**[Remote REST service for PUMA](../dev/uprof_rest.md)

