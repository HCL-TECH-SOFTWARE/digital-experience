# Handling and visibility of request parameters in portlets 

Learn how the standard portlets and HCL DX portlets set request parameters for requests targeted to portlets. Acquire an understanding of the parameter visibility for standard portlets, HCL DX portlets, and the included JSPs or servlets.

Both HCL DX and standard portlets have different ways of setting request parameters for requests targeted to portlets. This topic is best understood if you have some familiarity with passing parameters using either of these APIs for portlet programming.

1.  If the portlets generate URLs using the portlet API, they can set parameters programmatically using the PortletURL.setParameter \(standard\) or PortletURI.addParameter \(HCL DX\) calls.
2.  When HTML forms are submitted to the portal, the form values are passed as request parameters. If you use the GET method for form submission in HCL DX portlets, other parameters that have been programmatically set on the form action URL may not be passed back by the client. For JSR 168 and 286 HTTP GET parameters are transmitted as render parameters.
3.  Portlets can trigger operations on other portlets using the Property Broker APIs. In this case, the target portlet can receive parameters that propagate values from the source portlet.
4.  Portal theme and skin JSPs can create URLs to portlets with the `<portal-navigation:urlGeneration/>` tag. These portlet URLs can also include parameters that are visible to all HCL DX portlets \(not to standard portlets\).

Multiple portlets are normally called within the processing of a single client request, and these different methods of setting parameters can interact in various ways. Therefore you need to consider which parameters are actually visible to a portlet, especially if standard and HCL DX portlets are placed on the same page and are invoked within a single client request.

## Parameter visibility for standard portlets

Standard portlets do not use parameter namespacing. Parameter namespacing is not necessary In an environment consisting of only standard portlets because these portlets receive the parameters from the client request only if they are directly targeted by a URL, so it is implicitly clear to which portlets the parameters belong.

Standard portlets are the target of a URL if the URL has been created with the RenderResponse.createRenderURL\(\) or RenderResponse.createActionURL\(\) methods. In this case, the portlet will receive the parameters that have been programmatically set on the URL. In the case of an action URL, the portlet can read the query or form parameters for the request, so that it can read the form input if the URL was the action of a HTML form. As stated by the Java™ Portlet Specification, portlets should not use render URLs for HTML form actions because form parameters may not be visible in this case.

For portlets that are not the target of a URL, the Java Portlet Specification defines the notion of render parameters. In any render call that is not triggered by a render URL targeted to the portlet \(that is, when the portlet is simply shown as part of a page where the user interacts with another portlet\), the portlet sees only its active set of render parameters, independent of any parameters that are set on the client request. The portlet cannot see request parameters set by the `<portal-navigation:urlGeneration/>` tag unless the tag explicitly specifies a target portlet by using the layoutNode attribute.

New render parameters are set either by a render URL or by a portlet action and the portal will keep providing those render parameters to the portlet as long as the portlet is not the explicit target of a URL or a property broker event. That means, the render parameters can \(and should\) be used to store the navigational state of the portlet.

Finally, an action of a standard portlet can be invoked through the property broker if property values are propagated from another portlet. In this case, the portlet will see its current set of render parameters, so that it is able to keep \(parts of\) its current state across the action call. In addition, those parameters that are defined by the property passing mechanism of property broker will be visible, and they will override render parameter values with the same name. Again, the visible parameters are independent of any parameters set on the client request.

Note that the render parameters are only passed to the portlet action, if the action is invoked by property broker. Actions that are invoked by a URL will not automatically see them. You can, however, pass all render parameters by setting them explicitly on the URL:

```xmp

	PortletURL url = renderResponse.createActionURL;
	url.setParameters(renderRequest.getParameterMap());

```

## Parameter visibility for HCL Digital Experience portlets

HCL DX portlets normally use parameter namespacing, which means that a parameter name clearly identifies to which portlet a parameter belongs. Namespaced parameters are visible only to the portlet to which they belong. In addition, HCL portlets may also have access to additional, non-namespaced parameters that have been set on the request.

-   If you use the PortletURI.addParameter\(\) method to set parameters, the namespacing is done automatically.
-   When the portlet outputs an HTML form, the programmer should explicitly namespace the input fields, including parameter names, by using the <portletAPI:encodeNamespace/\> tag. However, if HCL portlets use forms without namespacing, it is guaranteed that they will receive the form parameters.
-   It is guaranteed that a portlet can read request parameters that have been set by the `<portal-navigation:urlGeneration/>` tag.

Because of these guarantees, the portal is not always able to filter out parameters that are not intended for the portlet but are nevertheless visible. Therefore, an HCL portlet must be prepared to handle the fact that a PortletRequest may contain additional \(non-namespaced\) parameters. In the case of parameter name conflicts, a namespaced parameter overrides a non-namespaced parameter and the non-namespaced parameter is not visible.

These same considerations apply to all HCL DX portlet methods that take a PortletRequest or an event from which a PortletRequest can be retrieved, whether they are triggered directly by a URL or indirectly through the property broker.

## Parameter visibility in included JSPs or servlets

When portlets include servlets or JSPs, the included resource will see the same parameters as the including portlet. The servlet specification allows the portlet to add a query string to the include path, as in the following example.

```xmp

	context.getRequestDispatcher("/jsps/View.jsp?mode=detailed");

```

Parameters that are set this way will always be visible in the included servlet or JSP, for both HCL DX and standard portlets. The value will take precedence over an old value for the same parameter name that has been specified by another mechanism. That means, the getParameter\(\) call will return the new value and getParameterValues\(\) will return the new value and any old values.

If the portlet being rendered is an HCL DX portlet, namespaced parameters still override non-namespaced parameters.

**Parent topic:**[Portlet development reference ](../dev-portlet/wpsdevref.md)

