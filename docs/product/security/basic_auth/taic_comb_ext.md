# HTTP Basic Authentication Trust Association Interceptor in combination with external authentication servers

When you use the HTTP Basic Authentication Trust Association Interceptor \(TAI\) with external authentication servers, you can configure the TAI to work for a specific set of requests.

IBM® WebSphere® Application Server can have multiple TAIs registered for authentication handling. This way you can use the HTTP Basic Authentication TAI together with other TAIs, for example, the WebSEAL TAI. However, you cannot configure an invocation sequence for the TAIs that you installed. You must ensure that the TAIs handle disjoint sets of requests. The HTTP Basic Authentication TAI is configured this way by default. For an alternative HTTP Basic Authentication TAI, you can configure the TAI properties for URL pattern filtering by black and white lists. Conflicts can arise if the security server relies on Basic Authentication or if other non-standard configurations are wanted.

Normal configuration of an external authentication server protects the HTML-based entry points into the portal, for example, /wps/myportal. When the authentication server handles the initial request, shared tokens known to the authentication server are exchanged and used for subsequent requests through the authentication server. Similarly, when the request makes it to the Portal Java™ virtual machine, the TAIs handle the initial authentication trust request. Then, they generate an LtpaToken or LtpaToken2 shared token for subsequent requests, including REST or XML-based requests.

**Parent topic:**[Enabling HTTP Basic Authentication for simple clients](../security/tait_nbl_hba4sc.md)

