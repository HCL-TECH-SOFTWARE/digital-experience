# Overview of configuration services 

Get an overview of the HCL Portal configuration services available for the portal.

The following table lists the configuration services:

1.  The first column gives the names of the services and provides links to the respective topics for those services that you can configure in the WebSphere® Integrated Solutions Console.
2.  The second column gives the name of each service by which you can access the service in the WebSphere Integrated Solutions Console.
3.  The third column lists the related properties files.

**Note:** The configuration for each service is stored in the WebSphere Integrated Solutions Console. You can change the configuration only there.

|HCL Portal service|Service name in the WebSphere Integrated Solutions Console|HCL Portal properties file|
|------------------|----------------------------------------------------------|--------------------------|
|[Administrator Unique Names Mapping Service](srvcfgref_uniq_name.md)|WP AdminUniqueNamesMappingService|AdminUniqueNamesMappingService.properties|
|[Cache Manager Service](srvcfgref_cach_mgr.md)|WP CacheManagerService|CacheManagerService.properties|
|[Common Component Configuration Service](srvcfg_common_comp.md)|WP CommonComponentConfigService|CommonComponentConfigService.properties|
|[Configuration Service](srvcfgref_config.md)|WP ConfigService|ConfigService.properties|
|[CP Configuration Service for tagging and rating](srvcfg_cpcfg4tr.md)|WP CPConfigurationService|CPConfigurationService.properties|
|[Content Access Service](srvcfgref_cont_accs.md)|WP PortletServiceRegistryService See [Content Access Service](srvcfgref_cont_accs.md).|PortletServiceRegistryService.properties See [Content Access Service](srvcfgref_cont_accs.md).|
|[Data Store Service](srvcfgref_datastore.md)|WP DataStoreService|DataStoreService.properties|
|[Deployment Service](srvcfgref_deploy.md)|WP DeploymentService|DeploymentService.properties|
|[HTTP Client Service](srvcfgref_http_client.md)|WP HTTPClientService|HTTPClientService.properties|
|[Live Object Service](srvcfg_live_obj.md)|WP LiveObjectService|LiveObjectService.properties|
|[Loader Service](srvcfgref_loader.md)|WP LoaderService|LoaderService.properties|
|[Localizer Service](srvcfgref_localizer.md)|WP LocalizerService|LocalizerService.properties|
|[Model WebDAV Service](srvcfg_modelwebdav.md)|WP ModelWebDAVService|ModelWebDAVService.properties|
|[Navigator Service](srvcfgref_navigator.md)|WP NavigatorService|NavigatorService.properties|
|[Portlet Container Service](srvcfgref_ptlt_container.md).|WP PortletContainerService|PortletContainerService.properties|
|[Project Identification Service](srvcfg_projectid.md)|WP ProjectIdentificationService|ProjectIdentificationService.properties|
|[Registry Service](srvcfgref_registry.md)|WP RegistryService|RegistryService.properties|
|[State Manager Service](srvcfgref_state_mgr.md) See also [URL normalization for search of portal pages by external search engines](srvcfgref_url_normlz.md)|WP StateManagerService|StateManagerService.properties|
|[Virtual Portal Configuration Service](srvcfg_virtual_portal.md)|WP VirtualPortalConfigService|VirtualPortalConfigService.properties|

|HCL Portal security service|Service name in the WebSphere Integrated Solutions Console|HCL Portal properties file|
|---------------------------|----------------------------------------------------------|--------------------------|
|[Authentication Service](srvcfgref_secy_auth.md)|WP AuthenticationService|AuthenticationService.properties|
|[Credential Vault Service](srvcfgref_cred_vault.md)|WP VaultService|VaultService.properties|
|**[Portal Access Control Services](srvcfgref_secy_pac.md)**| | |
|    [Access Control Data Management Service](srvcfgref_secy_pac_datamgmt.md)|WP AccessControlDataManagementService|AccessControlDataManagementService.properties|
|    [External Access Control Service](srvcfgref_ext_acctrl.md)|WP ExternalAccessControlService|ExternalAccessControlService.properties|
|    [Auditing Service](srvcfgref_audit.md)|WP AuditService|AuditService.properties|
|    Access Control Service|WP AccessControlService|AccessControlService.properties|
|    Access Control WarmUp Service|WP AccessControlWarmUpService|AccessControlWarmUpService.properties|
|    PAC Group Management Service|WP PACGroupManagementService|PACGroupManagementService.properties|
|**[Puma Store and Validation Services](srvcfgref_puma.md)**| | |
|    [Puma Store Service](srvcfgref_puma_store.md)|WP PumaStoreService|PumaStoreService.properties|
|    [Puma Validation Service](srvcfgref_puma_validn.md)|WP ValidationService|ValidationService.properties|

**Other HCL Portal configuration services**

|HCL Portal service|Service name in the WebSphere Integrated Solutions Console|HCL Portal properties file|
|------------------|----------------------------------------------------------|--------------------------|
|Credential Type Registry Service|WP CredentialTypeRegistryService|CredentialTypeRegistryService.properties|
|Dynamic UI Manager Factory Service|WP DynamicUIManagerFactoryService|DynamicUIManagerFactoryService.properties|
|Identification|WP Identification|Identification.properties|
|Plugin Manager Service|WP PluginManagerService|PluginManagerService.properties|
|Portal Filter Service|WP PortalFilterService|PortalFilterService.properties|
|PortletFilterService|WP PortletFilterService|PortletFilterService.properties|
|Site Analyzer Log Service|WP SiteAnalyzerLogService|SiteAnalyzerLogService.properties|
|Virtual Portal Identification Service|WP VirtualPortalIdentificationService|VirtualPortalIdentificationService.properties|
|WSRP Web Service Security|WP WSRPWebServiceSecurity|WSRPWebServiceSecurity.properties|
|Web Content Service|WP WebContentService|WebContentService.properties|
|Work Manager Service|WP WorkManagerService|WorkManagerService.properties|

**Web Content Manager services**

|[Web Content Manager service configuration](srvcfgwcmref.md)|Service name in the WebSphere Integrated Solutions Console|Properties file|
|------------------------------------------------------------|----------------------------------------------------------|---------------|
|[Web Content Manager configuration service](srvcfgwcmref_config.md)|WCM\_WCMConfigService|WCMConfigService.properties|
|[Web Content Manager messaging service](srvcfgwcmref_messaging.md)|WCM\_MessagingService|MessagingService.properties|
|[Web Content Manager pre-rendering service](srvcfgwcmref_prerender.md)|WCM\_PrerenderService|PrerenderService.properties|
|[Web Content Manager search service](srvcfgwcmref_search.md)|WCM\_SearchService|SearchService.properties|

There is a number of other Web Content Manager configuration services. The Web Content Manager properties files are located in the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/wcm/shared/app/config/wcmservices` directory.

**Parent topic:**[Setting service configuration properties ](../admin-system/adsetcfg.md)

