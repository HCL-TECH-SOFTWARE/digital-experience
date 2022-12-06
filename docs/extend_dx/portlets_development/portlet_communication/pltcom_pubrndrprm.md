# Public render parameters

Public render parameters allow JSR 286 portlets to share navigational state information. They are specially useful for coordinating the multiple navigation or viewer portlets that display different information items that are all related to the same parameter name. The portal stores all portlet render parameters, including public render parameters, as an encoded part of the current portal URL. Therefore, public render parameters are correctly preserved by typical browser navigation actions such as the Back button and bookmarking.

!!!note "Notes"
      -   Public render parameters are generated between JSR portlets during the render phase and not the action phase. For more information, see [JSR 286 portlet events based communications](../portlet_communication/portlets_publish_subscribe_mech/define_portlet_comm_capabilities/pltcom_events.md) in the related links.
      -   You can set shared render parameters as well as private render parameters during URL generation by using the state API. For more information, see [Advanced URL generation for data exchange](pltcom_datxchg_xptltlnks.md).
      -   Public render parameters can also be shared with remote portlets by using the WSRP V 2.0 protocol.
      -   Information about render parameters is normally encoded into the URL. Therefore their names and values should be as short as possible in order to not exceed the URL length restrictions set by your browser.


## Concepts of the Java Portlet Specification 2.0

Programming details for public render parameters are defined in the Java Portlet Specification 2.0. They are read as request parameters and set in render URLs or on an ActionResponse. For most purposes, public render parameters behave exactly like "normal" or private render parameters. The only difference is that the parameter identifier is explicitly declared by the programmer in the `portlet.xml` deployment descriptor, along with one or more namespaced public names. As a result, a portal can decide which parameters of two portlets must map to the same information.

Here is an example declaration in the deployment descriptor:

```
<portlet-app xmlns:x="http://www.cntserv_exmp.com/portlet">
   <portlet>
      ...
      <supported-public-render-parameter>custID</supported-public-render-parameter>
   </portlet>
   <public-render-parameter>
   	  <identifier>custID</identifier>
   	  <qname>x:customerID</qname>
   </public-render-parameter>
</portlet-app>

```

This snippet declares a public render parameter that is accessed with the parameter key `custID`. Here is an example code snippet for reading the parameter:

```
String customerID = renderRequest.getParameter("custID");
```

The parameter is shared with the global name, which consists of the namespace and the localname, and the `customerID` in the namespace `http://www.cntserv_exmp.com/portlet`. Therefore, if another portlet declares a parameter with the same global name - regardless of the local identifier that it uses - that parameter can be mapped to the same data by the portal.

Portlets can declare globalized display names and descriptions for public render parameters in the application resource bundle. However, HCL Portal Version 8.5 does not have a user interface that requires this information for display.

## How to control parameter sharing in the portal

The portal implements the sharing of parameters by placing them in scopes: Two or more public render parameters from different portlets are mapped to the same data in the portlet URL, if and only if both of the following conditions apply:

-   The parameters declare the same global name that includes the namespace.
-   The parameters are placed in the same scope.

The default scope for all public parameters is the global scope. Therefore, all public parameters with the same global name are shared by all portlets across all pages.

For some use cases, it can be required to limit parameter sharing. For example, this case can occur if you have two pairs of navigator or viewer portlets on two different pages, where each pair must be coordinated. However, the pairs must not interfere across pages so that the navigator on the first page does not influence the viewer on the second page. For such cases, the portal makes it possible to limit the sharing scope for public render parameters on a page basis. The parameter sharing scope for a page is controlled by a page parameter `param.sharing.scope`. You can set it from the **Page Properties** view under **Advanced options** \> **I want to set parameters**. If you set a value for this parameter, portlets on the page share their public render parameters only with other portlets on the same page or on pages with the same scope.

If you want to prevent all render parameters that are used on a page from being shared with other pages, you can set the parameter `param.sharing.scope` to the reserved value `ibm.portal.sharing.scope.page`. Specifying this value produces the same result as using the unique object ID of the page, as generated internally by the portal, for the value of the `param.sharing.scope` parameter.

## How to set the scope for specific public render parameters

The setting `param.sharing.scope` mentioned earlier sets the scope for all public render parameters. In addition, it is also possible to set the scope for specific public render parameters. The HCL Portal template pages use this approach. For example, the Basic page template specifies the following parameters:

```
<parameter 
   name="param.sharing.scope.{http://www.ibm.com/xmlns/prod/datatype/content/resource-collections}" 
   type="string" update="set"><![CDATA[ibm.portal.sharing.scope.page]]></parameter>
<parameter 
   name="param.sharing.scope.{http://www.ibm.com/xmlns/prod/datatype/content}" 
   type="string" update="set"><![CDATA[ibm.portal.sharing.scope.page]]></parameter>
<parameter 
   name="param.sharing.scope.{http://www.ibm.com/xmlns/prod/websphere/portal/v7.0/portal-contextual-portal}" 
   type="string" update="set"><![CDATA[ibm.portal.sharing.scope.page]]></parameter>
<parameter 
   name="param.sharing.scope.{http://www.ibm.com/xmlns/prod/websphere/portal/v8.0/portal-contextual-portal}" 
   type="string" update="set"><![CDATA[ibm.portal.sharing.scope.page]]></parameter>
<parameter 
   name="param.sharing.scope.{http://www.ibm.com/xmlns/prod/websphere/portal/publicparams}path-info" 
   type="string" update="set"><![CDATA[ibm.portal.sharing.scope.page]]></parameter>

```

This snippet from a template sets the page scope for all public render parameters that are contained in the following name spaces:

```
http://www.ibm.com/xmlns/prod/datatype/content/resource-collections
http://www.ibm.com/xmlns/prod/datatype/content
http://www.ibm.com/xmlns/prod/websphere/portal/v7.0/portal-contextualportal
http://www.ibm.com/xmlns/prod/websphere/portal/v8.0/portal-contextualportal
```

It also sets the scope for the `path-info` parameter that is defined in the namespace

```
http://www.ibm.com/xmlns/prod/websphere/portal/publicparams
```

## Limitations

The following are known limitations to public render parameters:

1.  The sharing scope always applies to all parameters of all portlets on a page. You currently cannot control sharing of public render parameters at a more granular level than the page level.
2.  The optional `<alias>` elements of public render parameter declarations are ignored. Currently, sharing of public render parameters is only controlled by the `<name>` or `<qname>` elements of the parameter declarations.

???+ info "Related information"
      - [Creating a web content page with the XML configuration interface](../../../manage_content/wcm_delivery/deliver_webcontent_on_dx/advance_adm_sample/mp_wcm_createpagexml.md)
      - [JSR 286 portlet events based communications](../portlet_communication/portlets_publish_subscribe_mech/define_portlet_comm_capabilities/pltcom_events.md)
      - [Advanced URL generation for data exchange](pltcom_datxchg_xptltlnks.md)