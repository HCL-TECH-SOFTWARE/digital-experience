# Web content substitution variables

HCL Web Content Manager uses several substitution variables that are defined in the configuration for IBM WebSphere Application Server.

If you need to modify these variables, use the WebSphere® Integrated Solutions Console for the application server. If you are working with a managed cell or cluster, use the WebSphere Integrated Solutions Console for the deployment manager.

|Variable|Description|
|--------|-----------|
|`WCM_CONTEXT_ROOT`|The context root for the enterprise application for Web Content Manager.Example: `wps/wcm` <br/> Example: `lotus/wcm`|
|`WCM_HOST`|The fully qualified host name of the server.Example: `www.example.com`|
|`WCM_ILWWCM_HOME`|This variable is the directory where the Web Content Manager application is installedExample: <br/> `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/wcm`|
|`WCM_PORT`|The port number that is used to access the portal.Example: `10038`|
|`WCM_SCHEMA`|The database schema name of the JCR domain that is configured for use with HCL Digital Experience.Example: `jcr`|
|`WCM_SEARCHSEED_CONTEXT_ROOT`|The context root for the Search Seed portlet. Example: `wps/wcmsearchseed`|
|`WCM_WEB_APP_HOME`|The directory path where the `ilwwcm.war` file is located.Example: `[AppServer\_root](../reference/wpsdirstr.md#was_root)/wp_profile/installedApps/node\_name/wcm.ear/ilwwcm.war` <br/> Example: `[AppServer\_root](../reference/wpsdirstr.md#was_root)/installed_apps/cell-name/wcm.ear/ilwwcm.war`|
|`WCM_WPS_CONTEXT_ROOT`|The context root or base URI for the portal. All URLs beginning with this path is reserved for the portal.Example: `wps` <br/> `http://hostname.example.com:10038/wps/portal`|
|`WCM_WPS_DEFAULT_HOME`|The default portal page. This page is the page for users who are not logged in.Example: `portal` <br/>`http://hostname.example.com:10038/wps/portal`|
|`WCM_WPS_PERSONALIZED_HOME`|The portal page for users who are already logged in to the portal. This page cannot be accessed by anonymous users.Example: `myportal` <br/> `http://hostname.example.com:10038/wps/myportal`|
|`WCM_WPS_CONTEXT_ROOT_SLASH`|The context root or base URI for the portal, including a trailing slash. <br/> Example 1: `wps/` <br/> `http://hostname.example.com:10038/wps/portal` <br/> Example 2: Empty context root <br/> `http://hostname.example.com:10038/portal`|


