# Configuring portal behavior

Configure various options related to your portal.

## XML configuration interface

For information on how to export a configuration from an existing portal and import it to another portal, refer to the [XML configuration interface](admxmlai.md).

-   **[Setting the language of the portal](../admin-system/adlang.md)**  
Specify the default language in which the portal appears with the Global Settings portlet.
-   **[Renaming the HTTP session cookie](../admin-system/http_sessn_cookie.md)**  
The Java Servlet API up to Version 2.5 states that the session identification cookie must be named JSESSIONID. WebSphere Application Server Version 8 supports the Java Servlet API 3.0 that offers applications the option to rename the JSESSIONID cookie name. Therefore HCL Portal 8.5 also supports this option.
-   **[Customizing the home page login URL with the Page Builder theme](../dev-portlet/csa2_cust_login_url.md)**  
In the Page Builder theme the login link points to a protected URL to the home page of the default portal installation. If you remove this page, or if you want your users to be directed to a different page after login, modify the theme by the following procedure.
-   **[Using portal light mode](../admin-system/portal_light_mode.md)**  
HCL Portal provides a portal light mode which can improve portal startup time and reduce the memory consumption in production environments.
-   **[Creating or editing a custom unique name](../admin-system/aduniqnm_t.md)**  
You can create a new custom unique name for a portal resource or update an existing custom unique name.
-   **[Setting the portal entry page](../admin-system/adloginview.md)**  
Use the Global Settings portlet to specify the page that a user sees when the user logs in to HCL Digital Experience.
-   **[Configuring your time settings](../admin-system/time_set.md)**  
Some applications, like Calendar, are capable of adapting to the time zone settings of a user.
-   **[Setting the search engine that opens when users select Find](../admin-system/adglobset_t.md)**  
Specify the search engine that is used when users click Find with the Global Settings portlet.
-   **[Configuring how to handle portlets that a user is not authorized to view](../admin-system/adnotauthorized.md)**  
Specify how you want the portal to display portlets that a user is not authorized to view with the Global Settings portlet.
-   **[Configuring user session persistence](../admin-system/adcfgpss.md)**  
With the persistent session state feature, portal users can resume and continue a previously interrupted working session at the same state where they ended the session. When the user logs out or the session times out, the portal stores the current navigational state into the database. As a portal administrator, you can give users the option to resume the navigational state of their last session when they log in again. When the user chooses to resume the last session, the navigational state that is stored previously is restored, and the user can continue working where the user stopped before.
-   **[Configuring dynamic fragment cache](../admin-system/adyncach.md)**  
Dynamic fragment cache \(also known as servlet caching\) is a component of WebSphere Application Server that provides content caching. You configure and enable dynamic fragment cache by using the WebSphere Integrated Solutions Console.
-   **[Configuring portlet filtering](../admin-system/adpltflt.md)**  
A portlet filter enables the administrator of a portal to intercept and modify the output of a portlet before it is aggregated to the entire portal page. This way you can support different languages and markups other than those for which the portlet was originally designed. You can use portlet filters also for adding additional information to the portlet output, for example, a copyright statement, deleting unimportant or restricted content, and for parsing destructive JavaScript.
-   **[Configuring authentication filters](../admin-system/adauthflt.md)**  
The portal authentication filters are a set of plug-in points. You can use them to intercept or extend the portal login, logout, session timeout, and request processing by custom code, for example to redirect users to a specific URL.
-   **[Caching](../security/tune_cache.md)**  
Caching affects the performance of your HCL Digital Experience environment. Learn about some simple ways to improve the caching performance. After you have reviewed this content, you should also review the HCL Portal and HCLWeb Content Manager Performance Tuning Guide which provides more information about caches for both HCL Portal and HCL Web Content Manager.
-   **[URL mapping](../admin-system/adurlmap.md)**  
URL mappings were deprecated starting with HCL Portal Version 8.5. Instead, you can now use friendly URLs or Vanity URLs as an alternative to URL mapping.
-   **[HTTP proxy configuration](../admin-system/admproxy.md)**  
Some portlets use HCL Portal resources to support HTTP proxy. Loading and caching remote URLs \(such as RSS streams or HTML files\) is done in the portal by the URL Manager service. If you specify an HTTP proxy in the configuration of the service, all remote requests are loaded using this HTTP proxy. This feature enables servers behind a firewall with no direct access to the Internet to load external data, such as news or stock information.
-   **[Delayed cleanup of deleted portal pages](../admin-system/addelclnup.md)**  
Get an overview of the cleanup service for portal pages and their dependent resources.
-   **[Deleting orphaned data](../admin-system/adelorph.md)**  
You use the SLCheckerTool to delete orphaned data in the database.
-   **[Setting service configuration properties](../admin-system/adsetcfg.md)**  
HCL Digital Experience comprises a framework of services to accommodate the different scenarios that portals need to address. Services are available for both HCL Portal and HCL Web Content Manager. You can configure some of these services.


**Related information**  


[Work with the Portal Scripting Interface](../admin-system/adpsitsk.md)

