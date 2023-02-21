# Portlet services

Portlet services are used to provide common functionality to portlets. Each portlet service has its own service-specific interface for the functionality that it offers.

HCL Portal supports portlet services for both HCL portlets and standard portlets:

-   Standard portlets use a JNDI lookup to retrieve a `PortletServiceHome` object, which is used to retrieve a portlet service implementation.
-   HCL portlets retrieve portlet services using the PortletContext.getService\(\) method.

A portlet service can be invoked only from within a portlet.

Portlet service interfaces used by standard portlets are different from those used by HCL portlets. You can write your own portlet service and register it in the portal, so that all portlets can use it. Various services may be implemented by different vendors, for example, a SearchService, LocationService, or a MailService. The following services are available with HCL Portal:

-   [Credential Vault Service](../../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/security_svc/srvcfgref_cred_vault.md)
-   [Model SPI services](../../apis/model_spi/index.md)
-   [Puma Store and Validation Services](../../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/security_svc/puma_svc/index.md)
-   [Dynamic user interfaces](../../portlets_development/dynamic_user_interfaces/index.md)



