# Portal service configuration

HCL Portal comprises a framework of configuration services to accommodate the different scenarios that portals of today need to address. You can configure some of these services.

The configuration for each service is stored in and accessible for configuration through the WebSphere® Integrated Solutions Console. In the WebSphere Integrated Solutions Console, the portal configuration services are spelled as one word, for some services abbreviated, and preceded by the letters WP. Example: In the WebSphere Integrated Solutions Console, the portal Configuration Service is listed as **WP ConfigService**. For more information about how to set properties see the topic about Setting service configuration properties.

**Notes:**

-   The following topics describe the services that can be of interest to the portal administrator. Services that are not described in the following are purely for portal internal usage. Do not modify them in any way.
-   The following topics describe the portal services and their configuration properties. In these lists, the values given in parentheses are the default values. Properties given with a value of `<none>` have no default values.
-   You configure the portal configuration services in the WebSphere Integrated Solutions Console. You cannot set the service configuration properties by simply changing the property value in the properties file and restarting the portal.
-   For details about how to export a configuration from an existing portal and import it to another portal, refer to the documentation about the portal XML configuration interface.

-   **[Administrator Unique Names Mapping Service](../admin-system/srvcfgref_uniq_name.md)**  
Administration portlets and themes create URL links to other administration portlets and pages. If these links were hardcoded, they would no longer be usable if you changed the unique names of these pages. Therefore a service for obtaining those unique names is provided in the portal Administrator Unique Names Mapping Service. This service contains properties with key-value pairs that map internal keys to the actual unique names that are assigned to the referenced pages.
-   **[Cache Manager Service](../admin-system/srvcfgref_cach_mgr.md)**  
The portal Cache Manager Service is responsible for managing the different caches that are used in HCL Portal.
-   **[Common Component Configuration Service](../admin-system/srvcfg_common_comp.md)**  
You can use the Common Component Configuration service to configure the behavior of the common components framework, the enabler widget container, and the client-side APIs.
-   **[Configuration Service](../admin-system/srvcfgref_config.md)**  
The portal Configuration Service is responsible for collecting the most essential configuration data of the HCL Digital Experience engine.
-   **[CP Configuration Service for tagging and rating](../admin-system/srvcfg_cpcfg4tr.md)**  
The CP Configuration Service provides the properties for tagging and rating.
-   **[Content Access Service](../admin-system/srvcfgref_cont_accs.md)**  
Portlets can access content from remote systems that are located on the other side of a firewall by invoking the portal Content Access Service. If you configure properties of the Content Access Service, these settings applies only to the portlets that call this service.
-   **[Data Store Service](../admin-system/srvcfgref_datastore.md)**  
HCL Portal uses a database to store configuration data for pages, clients, markup, and all other resources. The Data Store Service is responsible for managing the data source of the portal as configured while installing HCL Portal.
-   **[Deployment Service](../admin-system/srvcfgref_deploy.md)**  
The portal Deployment Service provides services for accessing the configuration properties that are required for the portlet deployment. The portlet deployment component is responsible for the integration of portlets into the portal. It handles the correct deployment of portlet applications and their WAR files into HCL Portal and WebSphere Application Server. It uses the WebSphere Application Server management services for the physical deployment and management of WAR files in the WebSphere Application Server. Management of WAR files includes installing, removing, redeploying, starting, and stopping portlet applications.
-   **[HTTP Client Service](../admin-system/srvcfgref_http_client.md)**  
Several components of the portal need to open HTTP or HTTPs connections to other resources. The portal HTTP Client Service provides a central point for configuration properties to these outbound connections. You can set global properties for the SSL configuration and proxy server usage.
-   **[Live Object Service](../admin-system/srvcfg_live_obj.md)**  
You can use the Live Object configuration service to configure the behavior of the live object framework.
-   **[Loader Service](../admin-system/srvcfgref_loader.md)**  
The portal Loader Service is responsible for dynamically loading class files. The service does so by looking up a given class name in different packages. Upon loading the respective class file, an instance of that class is returned.
-   **[Localizer Service](../admin-system/srvcfgref_localizer.md)**  
The portal Localizer Service provides access to the configured default locale and the system default locale. It also provides a list of supported bidirectional languages. Giving the system default locale is necessary because Locale.getDefault\(\) is set to the default.
-   **[Mail Service](../admin-system/srvcfgref_mail.md)**  
The portal Mail Service allows you to configure the properties that are used by the feature **Enable sending email to new members** for composite application communities.
-   **[Model WebDAV Service](../admin-system/srvcfg_modelwebdav.md)**  
The WP Model WebDAV configuration service provides parameters that the portal uses during theme creation. Changing the values for these parameters only affects future theme instances, but leaves existing theme instances unchanged.
-   **[Navigator Service](../admin-system/srvcfgref_navigator.md)**  
The portal Navigator Service allows you to specify a number of settings; among these are properties for cache scope and cache expiration. Depending on your configuration, you might be able improve your performance by modifying these properties.
-   **[Portal Security Services](../admin-system/srvcfgref_secy.md)**  
HCL Portal provides several configuration services for authentication, Portal Access Control, and Portal User Management \(PUMA\).
-   **[Portlet Container Service](../admin-system/srvcfgref_ptlt_container.md)**  
The portal Portlet Container service provides properties for portlet filtering.
-   **[Project Identification Service](../admin-system/srvcfg_projectid.md)**  
The Project Identification Service provides access to the identifier for a currently selected project in HCL Web Content Manager. Projects enable you to make changes to a set of items and publish those changes at the same time.
-   **[Registry Service](../admin-system/srvcfgref_registry.md)**  
The portal Registry Service loads and caches a few objects that are regularly accessed in the engine. This service improves performance. However, the trade-off is that the cached objects can be stale compared to their database counterparts. This service applies particularly in a cluster environment.
-   **[State Manager Service](../admin-system/srvcfgref_state_mgr.md)**  
The portal State Manager Service is the access point for managing the navigational state of the portal. The navigational state represents the current view of portal resources as displayed to a user.
-   **[Virtual Portal Configuration Service](../admin-system/srvcfg_virtual_portal.md)**  
The Virtual Portal configuration service \(WP VirtualPortalConfigService\) enables you to specify properties for the default virtual portal and for specific virtual portals. Refer to the Property names section for details about the portal settings this configuration supports.

**Parent topic:**[Setting service configuration properties](../admin-system/adsetcfg.md)

**Related information**  


[Configuring your own delayed deletion schedule by using the XML configuration interface](../admin-system/addelclnup_cfgxml.md)

[Digital Data Connector caches](../social/plrf_caches.md)

[Working with the XML configuration interface](../admin-system/adxmltsk.md)

[System event logging](../trouble/adsyslog.md)

