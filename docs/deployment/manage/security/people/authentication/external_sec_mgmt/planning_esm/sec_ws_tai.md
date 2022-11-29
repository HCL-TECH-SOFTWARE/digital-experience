# WebSphere Trust Association Interceptors

Security Access Manager and Computer Associates eTrust SiteMinder provide Trust Association Interceptors \(TAIs\) that are used only as an authentication service.

## External authentication

TAIs can be configured with the Portal configuration tasks. The Security Access Manager TAI requires an available Security Access Manager authorization server for successful single sign-on. For information about using TAI with WebSphere® Application Server, see the related links section.

Whenever a request attempts to access a secured resource, WebSphere Application Server starts the TAI. The TAI validates that the request comes from a legitimate third-party authentication proxy and returns the user's authenticated identity to WebSphere Application Server. The TAI returns either a distinguished name \(DN\) or a short name. WebSphere Application Server performs a registry lookup to verify the distinguished name or convert the short name to a distinguished name before searching for group memberships for that user. If the registry lookup fails, WebSphere Application Server refuses to trust the user. If the registry lookup succeeds, WebSphere Application Server generates a Lightweight Third-Party Authentication \(LTPA\) token for the user. It stores it as a cookie for subsequent authentication during the user's session.

A TAI is not necessary if the third-party authentication proxy provides native WebSphere Application Server identity tokens, such as LTPA tokens. Currently, only Security Access Manager WebSEAL and Security Access Manager plug-in for Edge Server provide native WebSphere Application Server identity tokens. Consult the WebSEAL Administration Guide for more information about configuring Security Access Manager to provide LTPA tokens. The authentication proxy determines the challenge mechanism.HCL Portal relies on the authentication proxy to relay success or failure of the user identifier through the TAI or LTPA token. WebSphere Application Server sees all requests from the TAI as authenticated, but WebSphere Application Server and HCL Portal performs a look up on each user anyway. Depending on the TAI and system configuration, WebSphere Application Server and HCL Portal can be configured to look up the group also. Even if the authentication proxy has successfully authenticated, WebSphere Application Server and HCL Portal deny access if they cannot query the user in the registry. For example, a user in an External Security Manager is not accessible from HCL Portal because it is configured to a different registry. Or that registry does not have the same registry configuration properties as the External Security Manager.

## Custom TAIs

TAIs that allow other custom authentication services to interact with WebSphere Application Server can be written. If you use a different security configuration, you must provide and implement a TAI to communicate with the authentication proxy.


**Related information**  


[WebSphere Application Server Library](https://www.ibm.com/docs/en/was)

[TAM Trust Association Interceptor \(TAI++\)](https://developer.ibm.com/product-doclinks/)

[Extended Tivoli Access Manager Trust Association Interceptor Plus \(ETAI\)](https://www.ibm.com/support/pages/node/574293)

