# Switch for tunneling of HTTP methods

The portal implementation allows you to simulate PUT and DELETE requests by tunneling, that is by using POST requests instead.

By default tunneling is disabled. If you want to enable it, for example because you want to disable PUT and DELETE requests in general, but allow equivalent operations for REST services provided by the portal, set the property `x-method-override.enabled` to the value `true` in the portal configuration service WP ConfigService Resource Environment Provider in the WebSphere® Integrated Solutions Console. If you set the property `x-method-override.enabled` to `true` , then the Config Service considers the `x-method-override` request header, when a request comes in. Whether or not to send this header is a decision of the HTTP client. Although the property name refers to only one replacement, the switch actually applies to both ways of request tunneling as described in the interface.


