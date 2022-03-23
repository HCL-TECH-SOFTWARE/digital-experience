# Hints and tips for using WSRP with the portal 

Here are some hints and tips for using WSRP with HCL Digital Experience.

## Consuming remote portlets with your portal

If you use HCL Portal to consume remote portlets, you must set the following JVM property for the portal JVMs:

-   **com.ibm.ws.websvcs.useMultipleSetCookie = true**

    Use this property to enable the WSRP Consumer to process multiple Set-Cookie headers that are contained in a WSRP response.


This property was introduced with IBM® WebSphere® Application Server APAR PM91361. The APAR is contained in WebSphere Application Server Version 8.5.5.1 and later.

To set this JVM property, use the WebSphere Integrated Solutions Console. After you set this JVM property, restart your Portal server.

## Consuming remote portlets from IBM WSRP Producer for WebSphere Application Server

If you use HCL Portal Version 8.5 to consume remote portlets from an IBM WSRP Producer for WebSphere Application Server that you own, use the July 2015 update of that Producer. If your Producer is an earlier version, update the Producer to the July 2015 update. You can obtain the IBM WSRP Producer for WebSphere Application Server from the IBM Collaboration Solutions Catalog.

Consuming remote portlets from an earlier version IBM WSRP Producer for WebSphere Application Server might not work properly under individual environments and scenarios.

## Registration

The WSRP Producer for HCL Digital Experience does not support the WSRP Registration interface.

## Remote portlets on unauthenticated pages

If you add remote portlets to unauthenticated pages that have public sessions turned off, you get the following two consequences:

1.  Session data is lost for each request.
2.  An extra request to the Producer is submitted to establish a session.

If you add remote portlets to unauthenticated pages, turn on public sessions. This way, you can benefit portal performance and avoid unexpected behavior that results from the lost session data.

## Rendering URLs for forms

Submitting data to a portlet through forms is semantically an `action` request, as this request changes the state of the portlet. WSRP strongly enforces the separation of `action` and `render` requests according to the corresponding semantics. It prevents the submission of form data through `render` requests. As a result, portlets that use `render` URLs to submit form data do not work remotely.

## Portlets cannot use portal internals

With WSRP, you cannot use portal internals in portlets, such as engine objects or engine tags. Portlets that use such internals do not work remotely as WSRP does not supply the infrastructure that is required for portlets to use portal internals.

## Compatibility of portlets with WSRP

The following restrictions apply to the Compatibility of portlets with WSRP:

-   **Some of the portlets that are included with HCL Portal cannot be provided as WSRP services.**

    The reason is that some additional and more advanced HCL Portal concepts and features are not reflected by the current WSRP standard yet. This group includes all portal administration portlets, the Portal Search portlets Manage Search and Search Center, and some other portlets that are provided with the portal.

-   **If portlets contain URLs to other resources, the URLs must be encoded according to the Java portlet specification to work with WSRP.**

    You might have portlets that serve or link to resources such as images, CSS files, JavaScript files, or servlets that are packaged with the portlet. To work in a distributed environment such as WSRP, these portlets must handle the URLs correctly. The HCL Portal WSRP Producer runtime hooks into the URL generation code that is used by the Java Portlet Specification APIs. In such cases, the portal can generate WSRP-compliant URLs to allow resources to be proxied by the WRSP Consumer server. Therefore, URLs in the browser can point to a resource proxy that the WSRP Consumer provides and that routes the request to the appropriate resource that the WSRP Producer host provides. For example, portlets might contain URLs that include CSS or JavaScript files, and you want to provide these portlets by WSRP. In such a case, you must make sure that the URLs point to the correct locations by encoding them in compliance with the Java portlet specification. If you do not encode the URLs by using the JSR API calls, the portlets might not work properly.

    **Note:** The HCL Portal resource proxy implementation also supports the serving of relative URLs. Example: A URL points to a CSS file and is encoded by using the Java Portlet Specification API. The CSS file in turn contains relative links to further resources such as images. In such a case, requests for those images are also routed and served through the WSRP Consumer resource proxy.


## WSRP does not support Consumer-side configuration of remote portlets that do not support shared configuration

The configuration of the `edit_defaults_compatibility` portlet mode is not supported for portlets that are consumed by using WSRP.

## The PUMA SPI cannot be used with WSRP

The PUMA SPI does not allow use with remote portlets.

## Tag Cloud, Tag Center, and Results List portlets do not support WSRP

The Tag Cloud and Tag Center portlets, including the Result List portlet, do not support WSRP. Therefore, a Producer portal cannot provide these portlets as remote web services, or for a Consumer portal to consume them so that its users can use them.

**Parent topic:**[Reference for using WSRP with the portal ](../admin-system/wsrpr_ref.md)

