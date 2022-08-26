# Determining the current web content context

To determine the current web content context of a portal page or Web Content Viewer portlet, you can use the WCM Page Context Service. This service provides the ID of the currently rendered item of a page or portlet.

To obtain an instance of the service, you can use one of the following home interfaces:

-   **PortalWcmPageContextServiceHome**

    Use this home interface if the calling code has access to the `HTTPServletRequest`, for example, if the theme calls it.

-   **PortletWcmPageContextServiceProvider**

    Use this home interface if the calling code has access to a `PortletRequest`, for example, if a portlet calls it.

-   **CorWcmPageContextServiceHome**

    Use this home interface if the calling code has access to a `com.ibm.content.operations.registry.api.Context`, for example, if a resolver calls it.


The `WCMPageContextService` provides the following two methods:

-   **getWcmPageContext**

    This method returns the ID of the current web content context. Depending on the parameters that you pass in, it is the context of a page or Web Content Viewer portlet. The service evaluates the following conditions in the order given here:

    1.  Private render parameter. This condition is available only for Web Content Viewer portlets and not for pages.
    2.  `path-info` parameter.
    3.  Public render parameter.
    4.  Portlet configuration setting for the web content viewer. This condition is available only for Web Content Viewer portlets and not for pages.
    5.  Web content association that is defined for the page.
    The service evaluates these conditions one by one until it finds a valid context. As soon as the service finds a valid context, it does not evaluate the remaining conditions.

    The context can be a content item or site area. If the context is a site area, you can use the method `getWcmDefaultContent` to determine the default content of the site area.

-   **getWcmDefaultContent**

    This method returns the default content of a site area. This method is useful if the current web content context is a site area and you need to determine the content item that is actually rendered.


Both methods return the document ID of the current context or default content. If necessary, you can use method `getPathById` of the HCL Web Content Manager workspace to transform the ID to the corresponding content path. For more information, read the API documentation.


