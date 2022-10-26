# Portlet services

Portlet services are used to provide common functionality to portlets. Each portlet service has its own service-specific interface for the functionality that it offers.

HCL Portal supports portlet services for both HCL portlets and standard portlets:

-   Standard portlets use a JNDI lookup to retrieve a `PortletServiceHome` object, which is used to retrieve a portlet service implementation.
-   HCL portlets retrieve portlet services using the PortletContext.getService\(\) method.

A portlet service can be invoked only from within a portlet.

Portlet service interfaces used by standard portlets are different from those used by HCL portlets. You can write your own portlet service and register it in the portal, so that all portlets can use it. Various services may be implemented by different vendors, for example, a SearchService, LocationService, or a MailService. The following services are available with HCL Portal:

-   [CredentialVaultService](wpsadvdev.md)
-   [Model SPI services](../dev/dgn_modelovw.md)
-   [PumaHome](../dev/wpspuma.md)
-   [DynamicUIManagementFactoryService](wpsdynui_cpts.md)

-   **[Accessing portlet services](wpsaccpserv.md)**  
Using an example, learn how a standard portlet can retrieve and use a sample portlet service. Accessing a portlet service requires a JNDI lookup for a PortletServiceHome. To use the portlet service, you retrieve a service object from the home, cast it to the service-specific interface and invoke service methods.
-   **[Creating your own portlet service](wpsbsservice.md)**  
Write a portlet service by defining the interface, writing the service implementation, making the service accessible, and registering the service.


