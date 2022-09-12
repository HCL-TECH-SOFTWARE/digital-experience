# URL generation services

Learn about the services that are used to create URLs in the navigational state SPI.

The Navigational State SPI offers the following two services that create URLs that are accessible through the Java Naming and Directory Interface \(JNDI\):

-   The com.ibm.portal.state.service.PortalStateManagerService is a portal service that provides services beyond what the portal tags provide. Use the PortalStateManagerService to create URLs within portal artifacts. You can create URLs within portal artifacts such as themes and skins \(for example custom JSP tags\). And within the server-side artifacts that are removed from the request processing \(for example Enterprise JavaBeans\). This service is outside the portlet context.
-   The com.ibm.portal.portlet.service.PortletStateManagerService supports JSR 168 and JSR 286 compliant portlets. Use the PortletStateManagerService to create URLs within portlets that cannot be created with the Standard Portlet API. This service is for portlets only.

Both services use a common interface that is called com.ibm.portal.state.service.StateManagerService, which provides the functions that are common to both services. You can reuse URL generation code in themes, skins, and portlets if they use the common interface. For example, you can use a custom JSP tag, which was originally designed for use in themes, in a portlet-specific JSP because only the service lookup is different.

## Getting access to the PortalStateManagerService

Access the PortalStateManagerService through a JNDI lookup with the lookup name "portal:service/state/PortalStateManager". The lookup returns a com.ibm.portal.state.service.PortalStateManagerServiceHome interface that provides the following two get commands that retrieve com.ibm.portal.state.service.PortalStateManagerService:

-   **PortalStateManagerService getPortalStateManagerService\( HttpServletRequest request, HttpServletResponse response\)**

    The returned service is suitable for creating URLs in themes, skins, and custom JSP tags. All server-related information that is needed to generate the URLs \(such as host name, protocol, server port, context path\) is retrieved from the servlet request.


-   **PortalStateManagerService getPortalStateManagerService\( ServerContext ctx, Locale locale, Profile profile, boolean isProtected, boolean isSecure\)**

    This method returns a PortalStateManagerService used for "offline" use cases such as creating URLs in environments where the servlet request is not available \(for example, in an Enterprise JavaBeans\). Using this method requires that the server-related information \(such as host name, protocol, server port, context path\) is provided in the ServerContext argument. The com.ibm.portal.state.accessors.url.ServerContext interface is the required abstraction for this kind of information. If you want to create URLs that point to a certain virtual portal, the provided ServerContext object needs to address that virtual portal. The ServerContext object addresses that virtual portal either through the context path or by host name. The two Boolean arguments specify whether the URLs must point to the protected area by default \(isProtected\) and whether the created URLs must be served with a secure connection by default \(isSecure\). To support creating resource URLs, the arguments locale and profile must be provided. The locale argument is needed to create URLs that address locale-specific resources such as language-dependent icons. The profile argument represents the client profile and in particular allows for checking the capabilities of the client.


The lifetime of a PortalStateManagerService object depends on whether you requested a "request-specific" service or "offline" service. The request-specific service has request scope; it is only used for the duration of one servlet request. For all subsequent servlet requests, request a new service instance from the home interface. The lifetime of the offline PortalStateManagerService corresponds with the lifetime of the ServerContext object.

The obtained PortalStateManagerServiceHome object is valid for the lifetime of the portal. You must do the JNDI lookup only once and store the retrieved home object accordingly, for example in an instance or static variable.

The following example shows how to get access to the service:

```
/** the JNDI name to retrieve the PortalStateManagerServiceHome object */
private static final String JNDI_NAME = 
  "portal:service/state/PortalStateManager";

/** PortalStateManagerServiceHome object to retrieve the service from */
private static PortalStateManagerServiceHome serviceHome;

public void useRequestService(final HttpServletRequest request,
                              final HttpServletResponse response) {
  try {
    // get the request-specific service from our home interface
    final StateManagerService service
      = getServiceHome().getPortalStateManagerService(request, response);
    // use the service
    // ...
    // indicate that we do not need it any longer
    service.dispose();
  } catch (Exception e) {
    // error handling
  }
}

public void useOfflineService(final ServerContext ctx,
                              final Locale locale,
                              final Profile profile,
                              final boolean prot,
													 final boolean secure) {
  try {
    // get the offline service from our home interface
    final StateManagerService service
      = getServiceHome().getPortalStateManagerService(ctx, locale, profile, prot, secure);
    // use the service
    // ...
    // indicate that we do not need it any longer
    service.dispose();
  } catch (Exception e) {
    // error handling
  }
}

/**
 * Looks up the PortalStateManagerServiceHome being valid
 * for the lifetime of the portal.
 */
private static PortalStateManagerServiceHome getServiceHome() {
  if (serviceHome == null) {
    try {
      final Context ctx = new InitialContext();
      serviceHome =
        (PortalStateManagerServiceHome) ctx.lookup(JNDI_NAME);
    } catch (Exception e) {
      // error handling
    }
  }
  return serviceHome;
}

```

**Note:** The PortalStateManagerService interface is derived from the generic StateManagerService interface. As the StateManagerService extends the com.ibm.portal.Disposable interface, you must indicate when you do not need to access the service any longer by starting the offered dispose\(\) method on it. Dispose the request-specific PortalStateManagerService by the end of the processed servlet request.

## Getting access to the PortletStateManagerService

Access the PortletStateManagerService through JNDI with the lookup name "portletservice/com.ibm.portal.state.service.PortletStateManagerService". The lookup returns a generic com.ibm.portal.portlet.service.PortletServiceHome interface, which offers a getPortletService\(Class\) method to get the PortletStateManagerService. The retrieved PortletStateManagerService instance is valid for the lifetime of the portal. You must do the service retrieval in the method of the portlet and store it in a portlet instance variable. The following example shows the required lookup code:

```
public class MyPortlet extends GenericPortlet {

  /** The JNDI name which is needed to lookup the service */
  private static final String JNDI_NAME =
    "portletservice/com.ibm.portal.state.service.PortletStateManagerService";

  /** portlet state manager service */
  protected PortletStateManagerService service;

  /**
   * @see javax.portlet.GenericPortlet#init()
   */
  public void init() throws PortletException {
    super.init();
    try {
      // lookup the portlet state manager service
      final Context ctx = new InitialContext();
      final PortletServiceHome serviceHome = (PortletServiceHome) 
        ctx.lookup(JNDI_NAME);
      service = (PortletStateManagerService) 
        serviceHome.getPortletService(PortletStateManagerService.class);
    } catch (NameNotFoundException e) {
      throw new PortletException(e);
    } catch (NamingException e) {
      throw new PortletException(e);
    }
  }

```

You can use the actual service within the render method of the portlet to include URLs into the markup. Or use the service in the helper methods that serve the mandatory portlet modes such as doView, doEdit, and doHelp\) to include URLs into the markup. Or use the service in the processAction method to send a redirect to a certain URL. The PortletStateManagerService interface shows the following two methods:

-   **PortletStateManager getPortletStateManager\(PortletRequest request, PortletResponse response\)**

    This method returns a PortletStateManager object, which you can use during action processing and rendering \(for example in the processAction method, doView method, doEdit method, etc.\). The PortletStateManager interface adds more methods to extend the generic StateManagerService interface. For example, you can directly read the current request-specific navigational state of the portlet \(portlet mode, window state, and render parameters\).


-   **PortletStateManagerController getPortletStateManagerController\(ActionRequest request, Action response\)**

    This method returns a PortletStateManagerController that extends the PortletStateManager interface. The PortletStateManagerController provides more methods that allow for modifying the navigational state of the portlet for the current request. And is therefore only accessible during action processing \(for example, in the processAction method of the portlet\).


Both the PortletStateManager and the PortletStateManagerController have request scope, which means that you must not store references to them across requests. Instead, you must retrieve the service from the PortletServiceHome object. To indicate that the retrieved PortletStateManager or PortletStateManagerController instance is no longer accessed in the scope of a request, you must start the dispose method. The dispose method is inherited from the Disposable interface on it. The following example shows you how to retrieve the service from the PortletServiceHome object:

```
/**
 * @see javax.portlet.GenericPortlet#doView(RenderRequest, RenderResponse)
 */
protected void doView(
  final RenderRequest request, final RenderResponse response)
  throws PortletException, IOException {
  response.setContentType(request.getResponseContentType());
  final PrintWriter writer = response.getWriter();
  try {
    // get the request-specific portlet state manager
    final PortletStateManager mgr = service.
      getPortletStateManager(request, response);
    // do something (create URLs etc.)
    // ...
    // indicate that we do not need the portlet state manager any longer
    mgr.dispose();
  } catch (StateException e) {
    throw new PortletException(e);
  }
}

```

## The base interface StateManagerService

The PortletStateManager and the PortalStateManagerService are derived from the com.ibm.portal.state.service.StateManagerService interface, which offers functionality that is common to both URL generation services. The use cases that are common to both services refer to the creation of EngineURLs that carry navigational state and resource URLs. Therefore, the StateManagerService interface must be sufficient to implement most of the use cases. The interface provides the following two methods:

-   **URLFactory getURLFactory\(\)**

    This method returns a com.ibm.portal.state.URLFactory object that offers several methods to create various URLs. For further details on the URLFactory.


-   **AccessorFactory getAccessorFactory\(Class accessorFactoryClass\)**

    This method provides access to the various accessor factories. For more information, see [Accessor SPI](accessor_spi.md) . You must pass the respective accessor factory interface in as a method argument to retrieve a certain accessor factory the Class object.

    **Note:** When you use the PortletStateManagerService, the set of accessor factories is restricted to the SelectionAccessorFactory, PortletAccessorFactory, PortletTargetAccessorFactory, SoloAccessorFactory, ThemeTemplateAccessorFactory, LocaleAccessorFactory, StatePartitionAccessorFactory, and ExpansionStatesAccessorFactory.


Typically, you request an EngineURL object from the URLFactory and then modify the navigational state according to the required URL semantics. To do this step, call the getState\(\) method of the EngineURL to get the StateHolderController object that is required to modify the navigational state through the Accessor SPI. The following code snippet exemplarily illustrates this typical usage pattern. The following example shows how to call the getState\(\) method of the EngineURL:

```
protected EngineURL createPageLink(final ObjectID pageID)
  throws StateException {
  // get the URL factory from the state manager service
  final URLFactory urlFactory = service.getURLFactory();
  try {
    // get a EngineURL from the factory; maintain navigational state
    final EngineURL url = urlFactory.newURL(null);
    final SelectionAccessorFactory selectionFct = (SelectionAccessorFactory) 
      service.getAccessorFactory(SelectionAccessorFactory.class);
    // get a selection controller that operates on the URL-specific state
    final SelectionAccessorController selectionCtrl = 
      selectionFct.getSelectionAccessorController(url.getState());
    try {
      // modify page selection and return URL
      selectionCtrl.setSelection(pageID);
      return url;
    } finally {
      selectionCtrl.dispose();
    }
  } finally {
    urlFactory.dispose();
  }
}

```

In the previous code sample, the newURL\(Constants.Clone\) method of the URLFactory is used. However, the URLFactory offers several more convenience methods to create EngineURLs and resource URLs. The following list provides a complete description of the URLFactory interface:

-   **EngineURL newURL\(Constants.Clone type\)**

    Choose this method to create a EngineURL because it is suitable for all prevalent use cases. The method provides an EngineURL, which refers to the StateHolder representing the navigational state of the current request. The type argument specifies how the request-specific StateHolder must be cloned for the URL to be created. There are the following four predefined clone constants:

    -   The SMART\_COPY indicates that a shallow StateHolder copy must be created. The copy records the state modifications that are applied for this particular EngineURL only, instead of copying all nodes in the document model to construct the clone. The SMART\_COPY represents the default; therefore passing in null is equivalent to SMART\_COPY. This clone method also allows the generation of relative "delta" URLs.
    -   The DEEP\_COPY results in a complete copy of the request-specific StateHolder, for example each node and the node hierarchy is cloned. The deep copy prevents the generation of delta URLs.
    -   The EMPTY\_COPY indicates that the contents of the request-specific StateHolder must be cleared, for example the created EngineURL is based on an empty state. Any interaction with such a URL results in the lost the navigational state of previous interactions.
    If the URLFactory does not have access to the current request, a new empty StateHolder is created internally. In that case, the type argument does not take any effect.


-   **EngineURL newURL\(StateHolder state, Constants.Clone type\)**

    This second getURL method requires that the StateHolder the EngineURL is based on, is passed explicitly. Accordingly, the type argument refers to this particular StateHolder. Use this method when the URL to be created must encode a StateHolder that was defined programmatically. Clicking this URL results in the lost the navigational state of previous interactions with the portal.


-   **EngineURL newURL\(URLContext ctx, Constants.Clone type\)**

    With this variant, you can specify whether the created URL must be absolute, server-relative, or relative. This action can be achieved by passing an URLContext interface. The interface must be implemented accordingly; for example if the URL must be absolute, the isAbsolute\(\) method must return true whereas isRelative\(\) and isServerRelative\(\) must return false. Because this method does not require an explicit StateHolder argument, the EngineURL to be created encodes the StateHolder retrieved from the request. To reduce markup size, it is strongly recommended to pass in an URLContext that allows for relative URLs. If the URLFactory does not have access to the current request, a new empty StateHolder is created internally. In that case, the type argument does not take any effect.


-   **EngineURL newURL\(URLContext ctx, Constants.Clone type\)**

    This method is the counterpart of the previous method and takes a StateHolder defined as an explicit argument.


-   **DisposableURL newResourceURL\( String name, PortalResources.Type type\)**

    This method creates a URL that points to a generic resource. The file name and resource type identify the resource. The resource lookup takes request-specific information such as the current locale, the client device, and the markup name into account \(if the request is available\). The com.ibm.portal.state.accessors.url.PortalResources interface provides several useful constants for the resource type that represents resource types such as files, sounds, icons, voice grammars.


-   **DisposableURL newResourceURL\( String name, PortalResources.Type type, PortalResources.State state\)**

    This method creates a URL that points to a generic resource. The file name and resource type identify the resource. It can also contain a resource state that is used to further distinguish the lookup of the resource. The resource lookup takes additional information from the request into account \(if available\). This is the current locale, the client device, markup that is chosen for the client, and the theme name.


**Note:** An absolute URL is a complete URL containing protocol, host name, and port. If there is a server-relative URL, the browser implies the current protocol, host name, and port. If there is a relative URL, the browser appends the URL to either the current request URL or to the value of the HTML base tag \(if any\). Server-relative and relative URLs cannot be enforced. In a protocol switch from "http" to "https", for example, the generated URL is absolute in any case.

## Changing the host name of absolute URLs

You can change the host name of absolute URLs for security reasons. For example, you can do this change if the DOM of an application, such as a portlet, runs within an iframe and you do not want the JavaScript code within that iframe to be able to access the DOM of the HTML document. If all URLs within that iframe are absolute URLs and the host name of these URLs is different from which the document originates, then the iframe has access to itself only. In other words, it cannot manipulate or access the rest of the document DOM. To ensure this action, create all URLs within the portlet by using the Navigational State SPI with absolute URLs. The portlet must then define a virtual host name, which must be rerouted by a proxy to the portal server again. In addition, the portlet must ensure that all requests in which the required absolute URLs are to be generated contain a special request header. The request header tells the portal, the name of the virtual host name. The headers are as follows:

-   **com.ibm.lotus.openajax.virtualhost**

    Use this header for setting the host name of every generated absolute URL to the value of this request header.

-   **com.ibm.lotus.openajax.virtualport**

    Use this header for setting the port of every generated absolute URL to the value of this request header.



