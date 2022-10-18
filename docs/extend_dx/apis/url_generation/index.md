# URL generation in HCL Portal

Generating Portal URLs correctly is one of the most important tasks in programming an HCL Portal based application. There are several programming tools and techniques available for generating HCL Portal URLs in custom code. The following section introduces the programming tools available and discusses when it is most appropriate to use each of the tools.

## Types of Portal Urls

There are several different types of Portal URLs depending on what task you are trying to accomplish.

-   **Render URLs**

    This type of URL is used for retrieving a general view of a Portal page. It specifically does not include any portlet actions or cause any server-side state changes. A Render URL corresponds to an HTTP GET operation and is idempotent, that is, it can be run more than once without any harm. Normal HCL Portal page navigation is made up of render URLs.

-   **Action URLs**

    Action URLs are used for activities within portlets. The URLs correspond to HTTP POST or PUT and are often non-idempotent, meaning they must be run at most once. An Action URL typically targets a specific portlet, and might cause server-side state changes. The portlet action and the portlet at which the action is targeted are carried as parameters within the Navigation State document.

-   **Friendly URLs**

    Friendly URLs have human-readable strings in the URL that describe the path to a Portal page. These human-readable strings correspond to the Friendly URL Names that are associated with the pages or labels. In addition, there might also be Friendly Content Path tokens in the URL. The Friendly Content Path tokens are human-readable strings that describe the site area path to Web Content Management library associated with the page.

    **Note:** A friendly URL might also include an encoded Navigational State document. If it does not, it is a Stateless Friendly URL. There is a programming API specifically for working with Friendly URLs.

-   **Vanity URLs**

    Vanity URLs are similar to Stateless Friendly URLs, in that they are human-readable and do not have an encoded Navigational State document. However, Vanity URLs are not tied to the Friendly URL Names associated with the Portal pages. Instead, Vanity URLs are intended to be aliases that are simple, easily remembered, and easily entered by hand if necessary. Vanity URLs are similar to Mapped URLs that were introduced in prior releases of HCL Portal. They are intended only as an initial entry point, and are not persistent in the browser address bar after interaction with the Portal site begins. There is a programming API specifically for working with Vanity URLs.

-   **Piece-of-Content URLs**

    Piece-of-content URLs or PoC URLs are late binding mechanism that targets content instead of Portal artifacts such as pages. They use a different URL entry point into HCL Portal (typically mypoc or mycontenthandler instead of myportal). A programming API is available for working with Piece-of-Content URLs.


## Methods for generating portal URLs

The complexity of a HCL Portal URL makes them difficult to hand-code, therefore do not try to build Portal URLs by string concatenation. The design intention is that most self-referential URLs in Portal are generated in code at run time to avoid broken links and to avoid manually maintaining links within a Portal-based site.

HCL Portal makes several options available to a programmer for generating these complex Portal URLs. These different options are designed to address different use-cases, from the simplest to the most complex.

-   Portal JSP tags method is used in Theme and Skin JSPs.
-   JSR 286 Portlet API and corresponding JSP tags. This method of URL generation addresses almost all URL generation requirements within a standard portlet.
    -   Or if necessary when you modify an existing portlet, and upgrading is not a possibility, the older JSR 168 Portlet API is used.
    -   The HCL Portlet API is no longer supported. Older portlets that are written to this API must be migrated to the current standard.
-   HCL Portal defined public render parameters. This method can support many use cases that previously required the use of the Navigational State API.
-   Friendly URL API method is specifically for use cases that involve Friendly URLs, including URLs that must be stateless (have no encoded Navigational State document).
-   PoC URL API method is specifically for creating Piece-of-Content URLs.
-   Vanity URL API method is specifically for working with Vanity URLs.
-   Navigational State API method is the most full-featured and general programming tool for URL generation, but requires the most in-depth understanding and programming skill.

When you create cooperating portlets that require inter-portlet communication, the inter-portlet messaging might be carried in the URLs that are generated. Render parameters as supported by JSR 286 are one way of accomplishing this, but additional programming tools are also provided. JSR 286 techniques for cooperative portlets, and the additional tools are described in more detail in the *Portlet communication* section. One example of such a tool is the Cooperative Portlet API for interoperability between JSR 286 and JSR 168 portlets.

Mapping use cases to available programming tools

|Task (Simplest to most Complex)|URL Generation Method|
|---------------------------------|---------------------|
|Creating page navigation links between Portal pages at the theme level. For example, standard tabbed pages navigation.

|These URLs are typically simple render URLs. In JSPs, use the <portal-navigation/> JSP tags. For more information about programming a Portal theme, see *Developing Themes and Skins* section.

|
|A JSR 286 portlet, self-contained (no inter-portlet communication required), generating action URLs to itself and setting its own render parameters.

|-   JSR 286 defines a tag library for use in JSPs. This tag library is greatly expanded over the V1.0/JSR168 version. It has its own namespace to avoid collisions with the V1.0 library.

    ```
<%@ taglib uri="http://java.sun.com/portlet_2_0"
Prefix="portlet"%>
    ```

Examples:

    -   To generate a normal rendering URL with a render parameter:

        ```
<a href="<portlet:renderURL>
<portlet:param name="myRenderParameter"
value="someValue"/>
This is the text for the link</a>
        ```

    -   To generate a portlet Action URL, which targets the current portlet on the current page:

        ```
form method="POST"
action="<portlet:actionURL/>">
        ```

**Note:** An action URL must have the Navigational State document encoded on it.

-   To do the equivalent in java code instead of using the JSP tags, use the JSR 286 Portlet API, which is in package javax.portlet.* For more information, see the related link *Package javax.portlet.* In particular, see the RenderResponse interface. A RenderResponse is passed to the portlet's render method by the portlet container. RenderResponse implements MimeResponse, which provides 3 methods for creating self-referential URLs:
    -   createRenderURL()
    -   createActionURL()
    -   createResourceURL()

|
|A JSR 286 portlet, which requires inter-portlet communication with another JSR 286 portlet, but no page navigation (Portal view remains on the current page).

|It might be sufficient to use the JSR 286 render parameter support. However, other techniques also exist. For more information, see the *Portlet communication* section.

|
|A JSR 286 portlet, which needs to interoperate with a JSR 168 portlet.

|A JSR168 portlet that worked with other portlets through inter-portlet communication is written to use the Cooperative Portlet API, also known as the Property broker. The Property broker was an HCL extension to the JSR 168 specification. JSR286 introduced the portlet event model, which superseded the Property Broker. JSR286 portlets and JSR 168 portlets can interoperate if certain conditions are met. For more information, see the *Interoperability between JSR 286 portlet events and JSR 168 cooperative portlets* section.

|
|A JSR 286 portlet, which needs to

-   Generate a render link to another Portal page (causes page navigation).
-   Optionally control the mode or window state of the targeted portlet.
-   Optionally control the Portal state.
-   Optionally control the render parameters of the targeted portlet.
-   Optionally control the locale for the generated request.

|Starting with Portal 8.5 CF05 use the HCL Portal-defined public render parameters for all of these use cases, and more. These render parameters make various aspects of the current request context available as normal public render parameters in a HCL Portal specified namespace.

-   **To read Navigational State values as render parameters:**

These special public render parameters can be accessed through the normal JSR286 API `renderResponse.getParameter(<parameter qualified name>)`.

Where `<parameter qualified name>` is the concatenation of the NAMESPACE_URI and one of the render parameter names, as defined in the following section. For example, http://www.ibm.com/xmlns/prod/websphere/portal/publicparams selection.

-   **To set Navigational State values by using render parameters:**

They can be set by the normal JSR286 portlet API `baseURL.setParameter(<parameter qualified name>, <value>)`

By setting these specific render parameters by using the normal JSR286 APIs, the system encodes the correct navigational state settings into the Navigational State document on the new URL. This setting makes the new values available on the next request that results from rendering and clicking that new URL.


**Notes:**

-   This support requires the use of stateful URLs because the render parameters are only carried in the encoded Navigation State document.
-   All these values are available as public constants in the com.ibm.portal.PublicRenderParameters class, which is a public API within the wp.model.api component. For complete details, see the HCL Portal javadoc *HCL Digital Experience, 8.5.0.0 SPI Specification.*

 The namespace of the HCL Portal specified public render parameter is http://www.ibm.com/xmlns/prod/websphere/portal/publicparams (available as NAMESPACE_URI). The following items are the special public render parameters that HCL Portal supports:

-   selection (NAME_SELECTION)
-   uri (NAME_URI)
-   parameters (NAME_PARAMETERS)
-   locale (NAME_LOCALE)
-   themeTemplate (NAME_THEME_TEMPLATE)
-   labelMappings (NAME_LABEL_MAPPINGS)
-   screenTemplate (NAME_SCREEN_TEMPLATE)
-   themePolicy (NAME_THEME_POLICY)
-   solo (NAME_SOLO)
-   showTools (NAME_SHOW_TOOLS)
-   hiddenContent (NAME_HIDDEN_CONTENT)
-   hiddenPages (NAME_HIDDEN_PAGES)
-   statePartition (NAME_STATE_PARTITION)
-   path-info (NAME_PATH_INFO)
-   focus (NAME_FOCUS)
-   deviceClass (NAME_DEVICE_CLASS)
-   digest (NAME_DIGEST)
-   pageMode (NAME_PAGE_MODE)
-   editMode (NAME_PAGE_EDIT_MODE)
-   infoMode (NAME_PAGE_INFO_MODE)
-   helpMode (NAME_PAGE_HELP_MODE)

 There also exists a Portal URL Generation Convenience API. This convenience API supports render URLs only. No state changes (action URLs) can be generated by using this API. The following items are the key classes in this API:

-   `com.ibm.portal.portlet.service.url.PortalURLGenerationService`
-   `com.ibm.portal.portlet.service.url.PortalURLWriter`

Per the javadoc of the *com.ibm.portal.portlet.service.url* package, a programmer:

1.  Obtains an instance of a `PortletServiceHome` by JNDI lookup.
2.  On that home interface, calls `getPortletService(PortalURLGenerationService.class)`.
3.  On that service, calls `getPortalURLWriter(request, response)`
4.  Uses the methods on the `PortalURLWriter` object to create and manipulate the render URL.

 An equivalent set of JSP tags for the URL Generation Convenience API exists.

```
<%@ taglib uri="http://www.ibm.com/xmlns/prod/websphere/portal/v8/portlet/ibm-portlet-ext" prefix="portlet-ext" %> 
```

For more information, see *JSP tags for standard portlets*. An example of creating a render URL by using the Convenience API tag is`<portlet-ext:portalRenderURL>`.

|
|Friendly URL

|A Friendly URL also known as a Friendly URL Name is a human-readable name for a Portal page. It is set as an attribute of the page, and each page can have at most one Friendly URL.

**Notes:**

-   If a page has a correctly configured Friendly URL, then HCL Portal guarantees that any request that renders the page has the Friendly URL. The request does not have the Friendly URL only if the Friendly URL enforcement is explicitly turned off by using the `friendly.redirect.enabled` configuration setting.
-   Friendly URLs do not guarantee that they are free of Navigational State. If you need to remove Navigational State, further techniques are available. For more information, read *Defining friendly URLs without state information for pages in your site* and *<portal-navigation> tags*.

 To use the Friendly URL API, you need to get a `FriendlyURLFactory` instance. Depending on the type of code you are writing, you can get a `FriendlyURLFactory` instance in one of two ways:

-   **If you are writing a portlet:**

    -   Start with the `com.ibm.portal.resolver.friendly.service.PortletFriendlySelectionServiceHome` class. You need to obtain an instance of that class in 2 steps:
        1.  Do a JNDI lookup by using the constant `PortletFriendlySelectionServiceHome.JNDI_NAME`. This JNDI lookup returns an instance of a `PortletServiceHome`.
        2.  On the `PortletServiceHome` object, call `getPortletService(PortletFriendlySelectionServiceHome.class)`. The call returns a `PortletFriendlySelectionServiceHome` instance.
    -   For efficiency, do the JNDI lookup and `getPortletService` call within the `init(PortletConfig)` method of your portlet, and save the `PortletFriendlySelectionsServiceHome` instance to be reused. It is not necessary to do these calls on a per-request basis.
    -   On a per-request call, such as the `doView(RenderRequest,RenderResponse)` method of the portlet, use the saved `PortletFriendlySelectionServiceHome` to call `getPortletFriendlySelectionService(request,response)`. The call returns a `PortletFriendlySelectionService` instance.

**Note:** This instance must be disposed by calling `dispose()` before it goes out of scope.

    -   On the returned `PortletFriendlySelectionService` instance, call `getURLFactory()`.
-   **If you are writing theme code:**

    -   Start with the `com.ibm.portal.resolver.friendly.service.PortalFriendlySelectionServiceHome` class. Do JNDI lookup by using the constant `PortalFriendlySelectionServiceHome.JNDI_NAME`. This lookup returns an instance of a `PortalFriendlySelectionServiceHome`.
    -   For efficiency, do the JNDI lookup within the constructor or other initialization method of your class, and save the `PortalFriendlySelectionServiceHome` instance to be reused. It is not necessary to do this call on a per-request basis.
    -   On a per-request call, use the saved `PortalFriendlySelectionServiceHome` to call `getPortalFriendlySelectionsService(HttpServletRequest,HttpServletResponse)`. The call returns a `PortalFriendlySelectionService` instance.

**Note:** This instance must be disposed by calling `dispose()` before it goes out of scope.

    -   On the returned `PortalFriendlySelectionService` instance, call `getURLFactory()`.

 After you have a `FriendlyURLFactory`, you can call one of the `newURL()` methods to obtain a `FriendlyURL` instance. A `FriendlyURL` instance can be set up using the `set*` methods, which are written to the response by using the `writer(Writer)` method. The `Writer` is obtained from the response, and then is disposed by calling `dispose()`.

|
|Vanity URL

|A Vanity URL is a simple, easy to remember URL that a user can enter by hand. Vanity URLs are managed by the webmaster with the HCL Portal administrative tools, such as the toolbar, administrative portlets, or XMLAccess scripting. However, sometimes when you render a response, it is necessary to produce a Vanity URL link.

 The following section describes how to use the Vanity URL API to obtain a `VanityURLNode`, which can be used to render a Vanity URL link. Depending on the type of code package you are developing, use one of the 3 different ways to access and use the Vanity URL API.

**Note:** Be careful to select the correct SPI package for the code that is being developed.

The necessary interface documentation is in the HCL Portal SPI javadoc.

-   **If you are writing a portlet:**

    -   Locate the com.ibm.portal.portlet.service.model package.
    -   Start with the `VanityURLModelProvider` interface. You need to obtain an instance of a class, which implements that interface, in 2 steps:
        1.  Obtain an instance of a `PortletServiceHome` by JNDI lookup by using the name constant `VanityURLModelProvider.JNDI_NAME`.
        2.  On that `PortletServiceHome` object, call `getPortletService(VanityURLModelProvider.class)`.
    -   Do the JNDI lookup and call `getPortletService` in the `init()` method of the portlet. Save the returned `VanityURLModelProvider` instance in a static field in your portlet class. This provider instance can be reused across requests.
    -   For each request, for example in the call to the `doView()` method of the portlet, call `getVanityURLModel` on the saved `VanityURLModelProvider` instance, passing the current portlet request and response. Models must not be reused across requests.
    -   On the `VanityURLModel` object, call `getLocator()`.
    -   On the `VanityURLModelLocator`, you can call any of the findBy methods, which return either a single `VanityURLNode` or an `IterableListModel<VanityURLNode>` list.
-   **If you are writing theme code:**

    -   Locate the com.ibm.portal.model package.

**Note:** Many of the class names in this set of instructions are identical to the class names for DataSource usage of the Vanity URL API, but the package name is different.

    -   Obtain an instance of a class, which implements `VanityURLModelProvider`, in 2 steps:
        1.  Obtain an instance of a `VanityURLModelHome` by JNDI lookup by using the name constant `VanityURLModelHome.JNDI_NAME`. See the com.ibm.portal.model.VanityURLModelHome javadoc for example code.
        2.  On that `VanityURLModelHome` object, call `getVanityURLModelProvider()`.
    -   Do the JNDI lookup and call `getVanityURLModelProvider()` in the constructor or an `init()` method of your class. Save the returned `VanityURLModelProvider` instance in a static field in your class. This provider instance can be reused across requests.
    -   For each request, call `getVanityURLModel` on the saved `VanityURLModelProvider` instance, passing the current servlet request and response. Models must not be reused across requests.
    -   On the `VanityURLModel` object, call `getLocator()`.
    -   On the `VanityURLModelLocator`, you can call any of the findBy methods, which return either a single `VanityURLNode` or an `IterableListModel<VanityURLNode>` list.
-   **If you are writing a DataSource:**

    -   Locate the `com.ibm.portal.cor.service` package.

**Note:** Many of the class names in this set of instructions are identical to the class names for the theme code usage of the Vanity URL API, but the package name is different.

    -   Obtain an instance of a class, which implements `VanityURLModelProvider`, in 2 steps:
        1.  Obtain an instance of a `VanityURLModelHome` by JNDI lookup by using the name constant `VanityURLModelHome.JNDI_NAME`. See the `com.ibm.portal.cor.service.VanityURLModelHome` javadoc for example code.
        2.  On that `VanityURLModelHome` object, call `getVanityURLModelProvider()`.
    -   Do the JNDI lookup and call `getVanityURLModelProvider()` in the constructor or an `init` method of your class, and save the returned `VanityURLModelProvider` instance in a static field in your class. This provider instance can be reused across requests.
    -   In a per-request method of the DataSource, call `modelProvider.getVanityURLModel(com.ibm.content.operations.registry.api.Context)`.

Programming detail for a DataSource: In most cases, a DataSource is allocated by a dedicated factory. The factory is registered with the resolver framework to handle requests for a specific URI. When a request for that URI is received, the factory is started by the resolver framework and is passed a `com.ibm.content.operations.registry.api.Context` object. Make sure to understand the difference between this `COR Context` object and the `javax.naming.Context` class that is used by JNDI lookup. The factory allocates a new DataSource instance (or might retrieve an existing one from a pool) and calls `reset()` on the DataSource, passing the `COR Context` object. This object and the other parameters to `reset()`, must be saved in instance fields within the DataSource. They can be used on subsequent method calls until either `dispose()` is called or `reset()` is called again. Use the `COR Context` object on the call to `getVanityURLModel(com.ibm.content.operations.registry.api.Context)`.

    -   On the `VanityURLModel` object, call `getLocator()`.
    -   On the `VanityURLModelLocator`, you can call any of the findBy methods, which return either a single `VanityURLNode` or an `IterableListModel<VanityURLNode>` list.

After you have a `VanityURLNode` instance through any of the appropriate ways, you can call the various methods of that interface to build a rendered representation of the VanityURL:

-   `VanityURLnode.isSecure()` tells whether the target protocol is http or https.
-   `VanityURLnode.isProtected()` tells whether the target URL mapping is to /portal or /myportal.
-   `VanityURLnode.getHost()` returns the host name that is associated with this Vanity URL.
-   `VanityURLnode.getPort()` returns the port number that is associated with this Vanity URL.
-   `VanityURLnode.getVpld()` returns the Virtual Portal OID for this Vanity URL.
-   `VanityURLnode.getPath()` returns the path string for this Vanity URL. This path string is what is thought of as the Vanity URL string.

|
|Create, update, or delete Vanity URLs.

|If you are writing code, which is intended to create, update, or delete Vanity URLs, rather than read and render them, use the following APIs:

-   Locate the `com.ibm.portal.model.controller` package.
-   You need to obtain an instance of a class, which implements `VanityURLModelControllerHome` through JNDI lookup by using the name constant `VanityURLModelControllerHome.JNDI_Name`. See the `com.ibm.portal.model.controller.VanityURLModelControllerHome` javadoc for example code.
-   On that `VanityURLModelControllerHome` object, call `getVanityURLModelControllerProvider()`.
-   Do the JNDI lookup and call `getVanityURLModelControllerProvider()` in the constructor or an `init` method of your class, and save the returned `VanityURLModelControllerProvider` instance in a static field in your class. This provider instance can be reused across requests.
-   You might also need to obtain a `VanityURLModelProvider`, by using the same code as described in the writing Theme code.
-   In a per-request method,
    -   On the `VanityURLModelProvider`, call `getVanityURLModel(request,response)`.
    -   On the `VanityURLModelControllerProvider` object, call `createVanityURLModelController(model)` passing the model that is returned from the call to `getVanityURLModel`.
-   The subsequent calls to create the new Vanity URL and set its attributes are documented in the javadoc for `VanityURLModelController` and `ModifiableVanityURLNode`.

|
|A JSR 286 portlet, which needs to generate an action URL to a second specific portlet, or any other use case that is not listed here.

|Navigational State API|
|Piece-of-Content URL

|A Piece-of-Content or POC URL is a URL that targets a DataSource or a ResolutionService within the Resolver framework. Given such a DataSource or ResolutionService, the PoC URL API assists the programmer to create a URL that results in the Resolver framework to start the correct DataSource or ResolutionService.

 To work with Piece-of-Content URLs, obtain an instance of a com.ibm.portal.resolver.acessors.url.PocURLFactory. Much like other URL APIs, the code for obtaining an instance of a URLFactory depends on whether you are writing a portlet, theme code, or if you are already running a code within the resolver framework.

-   **If you are writing a portlet:**

    -   In the Portal javadoc, locate the com.ibm.portal.resolver.servicer.service package.
    -   Obtain a `PortletPocServiceHome` instance in 2 steps:
        1.  Do a JNDI lookup for the `PorletServiceHome` instance by using the name constant `PortletPocServiceHome.JNDI_NAME`. See the javadoc for `PortletPocServiceHome` for sample code.
        2.  On the returned `PortletServiceHome` object, call `getPortletService(PortletPocServiceHome.class)`.
    -   Do the JNDI lookup and call `getPortletService` in the `init(PortletContig)` method of your portlet, and save the resulting `PortletPocServiceHome` instance in a class instance variable. It is not necessary to redo these calls on every request that is serviced by the portlet.
    -   In a per-request method, such as `render(RenderRequest,RenderResponse)`, call the appropriate `PortletPocServiceHome.getPortletPocService()` method based on the specific method that is implemented and the type of request and response that are passed. There are versions of this method for Action, Event, Render, Resource and plain PortletRequest and Response.

**Note:** It is necessary to call `dispose()` on the returned service instance before it goes out of scope.

    -   On the `PortletPocService` or appropriate subclass, call `getURLFactory()`.
-   **If you are writing theme code:**

    -   In the Portal javadoc, locate the com.ibm.portal.resolver.service package.
    -   Do a JNDI lookup for the `PortalPocServiceHome`, by using the name constant `PortalPocServiceHome.JNDI_NAME`.
    -   Save the resulting `PortalPocServiceHome` instance in a class instance field. It is not necessary to do the JNDI lookup for every request.
    -   In per-request method of your class, on the saved `PortalPocServiceHome` instance call `getPortalPocService` passing the `HttpServletRequest` and `HttpServletResponse`.

**Note:** It is necessary to call `dispose()` on the returned service instance before it goes out of scope.

    -   On the resulting `PortalPocService` instance, call `getURLFactory()`.
-   **If you are writing code that runs as a DataSource or ResolutionService:**

    -   In the Portal javadoc, locate the `com.ibm.portal.resolver.service` package.
    -   Do a JNDI lookup for the `CorPocServiceHome`, by using the name constant `CorPocServiceHome.JNDI_NAME`.
    -   Save the resulting `CorPocServiceHome` instance in a class instance field. It is not necessary to do the JNDI lookup for every request.
    -   In per-request method of your class, on the saved `CorPocServiceHome` instance call `getCorPocService(com.ibm.content.operations. registry.api.Context)`.

**Note:** It is necessary to call `dispose()` on the returned service instance before it goes out of scope.

Programming detail for a DataSource: In most cases, a DataSource is allocated by a dedicated factory. The factory is registered with the resolver framework to handle requests for a specific URI. When a request for that URI is received, the factory is started by the resolver framework and is passed a `com.ibm.content.operations.registry.api.Context` object. Make sure to understand the difference between this `COR Context` object and the `javax.naming.Context` class that is used by JNDI lookup. The factory allocates a new DataSource instance (or might retrieve an existing one from a pool) and calls `reset()` on the DataSource, passing the `COR Context` object. This object and the other parameters to `reset()`, must be saved in instance fields within the DataSource. They can be used on subsequent method calls until either `dispose()` is called or `reset()` is called again. Use the `COR Context` object on the call to `getCorPocService (com.ibm.content.operations.registry.api.Context)`.

    -   On the resulting `CorPocService` instance, call `getURLFactory()`.

 After you obtain a `PocURLFactory`:

-   Call one of the `newURL` methods, to instantiate the desired type of `PocURL`.
-   On the resulting `PocURL` instance, call the `setXXX` methods to define your URL attributes.
-   Stream the URL to the response and dispose of the `PocURL` instance by calling `writeDispose()`. The Writer instance for use by `writeDispose` must be obtained from the response argument to the method.

|

-   **[URL generation by using the Navigational State SPI](../dev/nav_state_spi.md)**  
The Navigational State API is used to read and modify the Navigational State document within a Portal URL. The Navigational State document is the seemingly random string of characters that appears in HCL Portal URLs. This string is a compressed, encoded XML document that contains a large amount of information that supports various Portal functions, including bookmark-ability of Portal pages and back button support.
-   **[Creating custom links to portlets and pages](../dev-portlet/dgn_link.md)**  
URLs encode navigational state information about HCL Portal (for example, the user's currently selected page) and about the portlets on a page (for example, the window state of the portlet) in a serialized form. Encoding navigational state information in the URL is used by the portal server to support use of the browser's back button.


**Related information**  


[URLs](../site/site_urls.md)

[Vanity URLs](../wcm/vanity_urls.md)

