# The HTTP Basic Authentication Trust Association Interceptor

The HTTP Basic Authentication Trust Association Interceptor \(TAI\) can be used to authenticate incoming requests using the HTTP Basic Authentication Protocol described in RFC 2617. This can be useful for clients that are not capable of doing HTTP FORM based authentication.

In general, HTTP Basic Authentication has the following two main disadvantages compared to HTTP Form based authentication:

-   With HTTP Basic Authentication, the Web client sends the user ID and password information used for authentication with each individual request to the IBM® WebSphere® Application Server. This typically requires using transport layer security \(SSL\) for the complete portal related network traffic. Otherwise the user password is exposed on the network. Compared to this, when you use HTTP form based authentication, it can be sufficient that you use the transport layer security to cover only the user login flow.
-   With HTTP Basic authentication the Web client sends the user credentials with each request, therefore, users cannot log out from the portal except by completely closing the Web client. For example, if a user logs out of the portal and leave the browser open, another user might be able to access pages that the first user visited previously.

If the HTTP Basic Authentication TAI is enabled, it decides on every incoming request whether it is responsible for the authentication of that request or not. This decision is based on black and white lists for the requested URL and the client's user agent. The TAI is responsible only if none of the patterns in the black lists match and at least one of the patterns in one of the white lists match. Therefore, if the TAI is configured with empty white lists, it will never authenticate a request.

If the TAI decides to authenticate the request and that request contains an authorization header that contains a user ID and password, the TAI tries to log on with that credential. If no user ID and password is provided, the TAI will challenge the client according to RFC 2617.


**Related information**  


[RFC 2617](https://www.ietf.org/rfc/rfc2617.txt)

