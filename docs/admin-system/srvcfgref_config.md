# Configuration Service

The portal Configuration Service is responsible for collecting the most essential configuration data of the HCL Digital Experience engine.

In the WebSphere® Integrated Solutions Console, the portal Configuration Service is listed as **WP ConfigService**.

**Notes:**

-   Many of the properties that are listed here are set by the installation procedure. Therefore, plan ahead and apply special care when you modify these properties.
-   HCL Portal and the WebSphere Integrated Solutions Console also provide a CP Configuration Service; this service has properties for tagging and rating only.
-   The Configuration Service also includes the configuration properties for WSRP services. They are listed and described in the context of the respective WSRP topics for which they are relevant.
-   If a property does not exist, create the property in the WebSphere Integrated Solutions Console Resource Environment Provider.

-   **was.home = \($\{WAS\_INSTALL\_ROOT\}\)**

    This path is the absolute path to the installation directory of WebSphere® Application Server.

-   **wps.home = \($\{WPS\_INSTALL\_ROOT\}\)**

    This path is the home \(or install\) directory of HCL Portal.

-   **command.login = \(LoginUserAuth\)**

    The name of the command that serves as the login command.

-   **command.logout = \(LogoutUserAuth\)**

    The name of the command that serves as the logout command.

-   **command.sessionvalidator = \(SessionValidatorAuth\)**

    The name of the command that serves as the session validator command.

-   **redirect.login = \(true\)**

    Turns on user-defined redirection after successful login. If a URL is specified under `redirect.login.url` listed later, that URL is used as the URL for the redirection. If no URL is specified, the portal determines the default page for the current user and sends a redirect to that page in the protected portal area.

-   **redirect.login.ssl = \(false\)**

    This property determines whether, after login, the portal continues to use the same communication protocol as before the login or enforces HTTPS instead. The default value is `false`. If this property is set to `false`, the portal uses the protocol that was initially requested before login. If you set this property to `true`, it turns on SSL in the system-defined redirection after successful login. If no URL is specified for the property `redirect.login.url` listed in the following, the redirect occurs to the page that was initially requested before login.

-   **redirect.login.url \[optional\] = <none\>**

    Specifies the URL for redirection after successful login. If no URL is specified, the portal determines the default page for the current user and sends a redirect to that page in the protected portal area. This setting does not affect implicit logins, such as single sign-on with LTPA token or through an external security manager.

-   **redirect.login.authenticated.url \[optional\] = <none\>**

    Specifies the URL for redirection after the first access to a protected page when the user is authenticated by an external security manager \(TAI\) and a portal session does not exist yet. If no URL is specified, the portal either displays the protected page that was originally requested, or, if session resume is enabled, the last page that the user accessed in the previous session.

-   **redirect.logout = \(false\)**

    Turns on user-defined redirection after successful logout. If a URL is specified under `redirect.logout.url` listed later, that URL is used as the URL for the redirection. If no URL is specified, the portal determines the default page in the public portal area and sends a redirect to that page.

-   **redirect.logout.ssl = \(false\)**

    Turns on SSL in system-defined redirection after successful logout. If no URL is specified, the redirect URL uses HTTPS.

-   **redirect.logout.url = <none\>**

    Specifies the URL for redirection after successful logout. If no URL is specified, the portal determines the default page in the public portal area and sends a redirect to that page.

-   **ldapserviceattributename.attribute \[optional\] = \(uid\)**

    Use this property to determine that portal workflow integration uses a dedicated user attribute when individual users on IBM® Process Server are identified. Set this property to the user attribute that is used by IBM® Process Server during task authorization. IBM® Process Server uses the J2EE principal name for this purpose. By default the J2EE principal name maps to the `uid` user attribute in most LDAP servers, except for Domino servers. Domino LDAP servers use the `cn` attribute by default, therefore for such a configuration set the `ldapserviceattributename.attribute` to the value `cn`. This property is optional.

-   **multiple.realms.enabled = \(false\)**

    Multiple Realms Support properties to allow login with uid@realm.

-   **multiple.realms.login.default.realm = <none\>**

    Multiple Realms Support properties to allow login with uid@realm.

-   **multiple.realms.user.dn.template = <none\>**

    Multiple Realms Support properties to allow login with uid@realm.

-   **host.name = <none\>**

    The default is that no value exists for host.name.. In this case, portal URLs start with the host name of the incoming request. If you want the host name in URLs be static, you enter a host name here. For example, in a cluster installation you can enter the name of the network traffic dispatcher here. If a host name is entered, this entry is used to create the portal URLs.

-   **host.port.http = <none\>**

    The HTTP port \(normally 80\).

-   **host.port.https = <none\>**

    The HTTP-SSL port \(normally 443\).

-   **security.css.protection = \(true\)**

    This property determines whether Cross-Site-Scripting security protection is turned on. The default is true for enabling the protection.

-   **redirect.commands = \(false\)**

    Specifies that a portal command is followed with an HTTP redirect. This way URLs can be bookmarked. Using this feature results in a certain performance. Therefore, it must be used only if needed.

-   **uri.context.path = \(/wps\)**

    The context path under which the portal is running.

-   **uri.context.path.facade = \(/wsrp\)**

    The context path for the additional WAR file that is used as a facade web application for your WSRP implementation. With this path, you can use Secure Socket Layer \(SSL\) with Client Authentication for WSRP and simultaneously use other means of authentication for the portal, for example form based authentication. This separation is required as J2EE allows only for one authentication mechanism per WAR file.

-   **uri.home.public = \(/portal\)**

    The servlet context of the portal engine for public \(or anonymous\) pages, that is, pages that users can view without entering a user ID or password.

-   **uri.home.protected = \(/myportal\)**

    The servlet context portal engine for protected \(or personal\) pages, that is, pages that users can view only by entering a user ID and password.

-   **uri.home.doc = \(/doc\)**

    The servlet context of the portal engine for the documentation area.

-   **uri.home.substitution = \(false\)**

    Determines whether a public URL must be translated to a protected URL if a user session exists.

    **Important:** To preserve the original behavior and design assumptions of HCL Portal URLs, set the value of the uri.home.substitution property to true.

    Uri.home.substitution controls the behavior of HCL Portal when a user who is already logged on to the IBM® WebSphere® Application Server environment on which HCL Portal is running uses a /portal URL to access HCL Portal.

    The original default behavior of HCL Portal when a logged-in user made a /portal request and the uri.home.substitution property was either not set or set to false was to log out the user and redirect them to the login page. Setting the uri.home.substitution property to true changes the behavior so that HCL Portal translates the public URL to a protected URL by redirecting the user to a /myportal URL version of the same request without logging out the user. This behavior is how most users want HCL Portal to function.

    A setting in WebSphere® Application Server security, called use available authentication, affected the behavior of HCL Portal URLs. The use available authentication setting is now set to true by default in WebSphere® Application Server. When set to true, this setting directs WebSphere® Application Server to build a security context for requests to unprotected URLs, specifically the /portal URL, if possible. More specifically, WebSphere® Application Server builds this security context when valid credentials such as an LtpaToken are recognized on the inbound request. In this case, a request to the /portal URL by a logged in user does not automatically log out the user and redirect them to the login page. Instead, the request is processed, but in an inconsistent manner. Many things appear to work properly as if the user was recognized as logged in. However, some subtle functional errors might occur, specifically when the rendering of the response embeds secondary requests to the HCL Portal contenthandler function. Therefore, to achieve the most correct operation, set the uri.home.substitution property in the **WP ConfigService Resource Environment Provider** to true.

    Setting the uri.home.substitution property to true ensures that even when a request to the /portal URL is forwarded by WebSphere® Application Server with a security context, HCL Portal still redirects the user to a /myportal version of that same URL. This behavior maintains the original design assumption of using two URL entry points into HCL Portal, one for anonymous access and one for authenticated access.

    **Note:** If you want to preserve the original behavior of HCL Portal when uri.home.substitution is not set or is set to false, see the property logout.user.onpublic and the following technote, [Default triggers for implicit logouts changed in HCL Portal Version 8](https://support.hcltechsw.com/csm?id=kb_article&sys_id=83d6e56a1b5df34077761fc58d4bcbbe).

-   **wsrp.resourceproxy.basic.auth.credentialslot = <none\>**

    On a WSRP Consumer portal, you can use this property to specify a credential vault slot that contains the user ID and password credentials. The resource proxy servlet uses the credentials from the credential vault slot when resources that are protected by HTTP basic authentication are fetched. The user ID and password are sent to all remote resources that are referenced in the markup of the remote WSRP portlet.

-   **wsrp.resourceproxy.no.header.forwarding = <none\>**

    On a WSRP Consumer portal, you can use this property to specify the list of HTTP headers that are not forwarded from the client request in addition to the host header and cookie headers. The host header and cookie headers are never forwarded independent of how this property is set.

-   **Persistent session properties**

    Use these properties to configure session persistence for users. For more information about persistent session state and its possible options, see the topics about *Configuring user session persistence*.

    -   **persistent.session.level = \(0\)**

        Determines the level on which the persistent session must operate. If you set this property to a value of `3`, this setting does not affect implicit logins, such as single sign-on with LTPA token or through an external security manager.

    -   **persistent.session.option = \(0\)**

        Determines whether the user gets the option to resume the session. If you set this property to 0, the level setting for the property persistent.session.level is applied during login, and the user has no choice whether to resume the previous session or not. If you give users the resume option by setting this property to 1, you must configure the persistent session preservation level by setting the property persistent.session.level to 1 or 2.

    -   **timeout.resume.session = \(false\)**

        Determines whether resuming the session after a session timeout requires user authentication. The default value is `false`. If this property is set to `false` and the user tries to continue working after a session timeout, the portal shows an error message that states the session is timed out and the user must log in again. If you set this property to true, the portal ignores the session timeout and does not show the error message. The user can resume the previous session without authentication and continue to work. In both cases, the previous session is resumed according to the setting of the `persisted.session.level` property.

-   **session.security.use.errorcode = \(true\)**

    Use this property to specify whether the portal does a redirect or displays an HTTP error, if session security support is enabled for the portal server and the user in the session does not correspond to the authenticated user in the request. Session security support is a hardening feature of WebSphere® Application Server. You can activate it for each application server in the WebSphere® Integrated Solutions Console under the **Web Container Settings** \> **Session Management** section. If this session security support is active, the application server checks for each authenticated request whether the user who owns the current session matches the user who originated the request. For example, this authentication can be determined by the LTPA token. The portal service configuration property specifies how the portal behaves, if it detects a mismatch between the session user and the authenticated user.

    If you set this property to `true`, the portal returns the HTTP error code that you define by the property `session.security.errorcode` listed later. This typically results in an appropriate error message to be displayed.

    If you set this property to `false`, you can specify a redirect URL by using the property `session.security.redirecturl` listed later. For example, you can redirect to a specific error page, which is then displayed to the user.

    By default this property is set to `true`.

    For more information about session security support in general, see the appropriate version of the *WebSphere® Application Server Help Center* for your installation.

-   **session.security.errorcode = \(409\)**

    Use this property to specify the HTTP error code that is returned if all of the following conditions apply:

    1.  Session security support is enabled in the WebSphere® Application Server.
    2.  The property `session.security.use.errorcode` listed earlier is set to `true`.
    3.  A mismatch of the user in the session and the authenticated user is detected.
    You must specify a valid HTTP error code. The default is error code 409.

-   **session.security.redirecturl = <none\>**

    Use this property to specify the redirect URL to which portal redirects if all of the following conditions apply:

    1.  Session security support is enabled in the WebSphere® Application Server.
    2.  The property `session.security.use.errorcode` listed earlier is set to `false`.
    3.  A mismatch of the user in the session and the authenticated user is detected.
    If the property `session.security.use.errorcode` listed earlier is set to `false`, you must specify a value for this property. This property has no default.

-   **portal.session.protection = \(true\)**

    Use this property to specify that, for each authenticated portal request, portal checks whether the user in the portal session matches the calling user of the current request. If this portal check results in a mismatch, the portal invalidates the existing session and creates a new one for the calling user to make sure that both identities match. The portal provides this hardening feature, which is independent of the session security support that is provided by WebSphere® Application Server. By default this property is set to `true`, therefore the portal checks by default.

-   **portal.enable.filtering = \(true\)**

    This flag determines whether the portal must use Portal Filtering or not. The default is `true`.

-   **portlet.url.find = <none\>**

    URL that is used for find and set in global settings portlet.

-   **portlets.unauthorized.visible = \(false\)**

    Determines what a user sees whether they are not authorized to view a portlet.

-   **portletcontainer.std.custom.windowStates = <none\>**

    This property defines custom window states that are handled by the portal. This action allows portlets to specify custom window states as defined in the Java Portlet Specification 1.0. The portal allows portlets to generate URLs and so start other portlets with a custom window state if both of the following preconditions apply:

    -   The started portlet specifies a custom window state in its deployment descriptor \(portlet.xml\).
    -   That window state is registered by using this property.
    The property value is a comma-separated list of custom window states. For example, `portletcontainer.std.custom.windowStates = winState1, myWinState`.

-   **allow.derived.titles = \(true\)**

    Determines whether the title and description of derived pages can be redefined by users. If the value is set to false, titles and description of pages can be changed only on non-derived pages.

-   **wps.mappingurl.portal\_url\_identifier = \(/!ut/p\)**

    This property determines an identifier for Portal URLs. For the specification of the format of this property, refer to the topic about URL mapping.

    **Note:** With HCL Portal Version 8.5, URL mappings are deprecated.

-   **wps.mappingurl.enabled = \(true\)**

    This property determines whether URL mapping is enabled or not. Possible values are `true` to enable URL mapping, or `false` to disable URL mapping. The default value is `true`.

    **Note:**

    -   With HCL Portal Version 8.5, URL mappings are deprecated.
    -   When you create a URL mapping or create or modify a page, make sure that URL mappings and friendly URLs in your portal do not match, partially overlap, or otherwise interfere with each other. For example, do not use strings such as home, ibm, ibm.com, and do not use strings that are used as URL mappings or friendly URLs in your portal already. Otherwise, several browser redirect loops might occur, sometimes without an error message. To determine such strings, create an export from your portal by using the XML configuration interface and scan the exported XML result output file for the string that you want to use for your URL mapping or for your friendly URL.
-   **wps.mappingurl.invalid = \(false\)**

    This property determines how the portal responds to a URL mapping that contains path information. Specify one of the following two values:

    -   **true**

        If you set this property to `true` and the portal gets a request for a URL mapping that contains path information, the portal returns either an HTTP 404 error or redirects the user to the default portal page.

    -   **false**

        This value is the default value. If you set this property to `false` and the portal gets a request for a URL mapping that contains path information, the portal responds as defined by the property `friendly.pathinfo.enabled`.

    **Notes:**

    -   With HCL Portal Version 8.5, URL mappings are deprecated.
    -   The property `friendly.pathinfo.enabled` applies to both friendly URLs and URL mappings.
    -   The property `state.decoding.fallback` is not applied to URLs that the portal interprets as URL mappings or friendly URLs. If you use friendly URLs or URL mappings, consider setting the parameters `state.decoding.fallback`, `wps.mappingurl.invalid`, and `friendly.pathinfo.invalid` in a consistent way. This action can help provide a consistent user experience. Example: If you set `state.decoding.fallback = false`, consider setting `wps.mappingurl.invalid = true` and `friendly.pathinfo.invalid = true`.
-   **navigation.portletmenu.mode = \(0\)**

    The navigation.portletmenu.mode property defines in which way portlet menus are integrated in the overall portal navigation menu structure. Portlet menus are navigation parts that are provided by the portlet itself. They can be added as a subtree to the navigation menu item that references the page in which the portlet is found. This property has the following three options:

    **0** Disabled: Portlet menus are not displayed in the navigation menu at all. This value is the default value.

    **1** Current selection: Only the portlet menus of the portlets that are found on the currently selected page are added under the navigation menu item for that page.

    **2** Everything: The portlet menus of all portlets on all pages are added under the appropriate navigation menu items in the navigation tree.

-   **navigation.expansion.defaultstate = \(false\)**

    This value determines whether the nodes in the navigation tree are expanded or collapsed by default. The default is false, which means that the nodes are collapsed. Some exceptions apply; for example, the Portal Administration navigation tree is expanded by default.

    **Note:** Setting this value to true does not affect Web 2.0 themes, as the expansion state is not returned from the portal REST service.

-   **page.reload.interval = \(0\)**

    This value defines the page reload interval for unauthenticated users. Use it to specify the interval in minutes after which the portal page hierarchy must be reloaded for an unauthenticated user. The reload respects the most current access control settings for that user. If this value is set to zero, no automatic reload occurs during the session.

-   **wsrp.caching.enabled = \(true\)**

    Use this property to enable or disable WSRP markup caching. The default for this property is `true`. This value means that WSRP markup caching is enabled, if no value is specified for this property. For more information, see the topic about *WSRP Markup Caching*.

-   **friendly.enabled = \(true\)**

    This property determines whether friendly URL names can be set for portal pages in the Manage Pages portlet. The default value is true. If you set this property to true, you can add friendly URLs for portal pages in the Manage Pages portlet. "Friendly" means that you can use a name that is concise and easy to remember to address a specific portal page. To add a friendly URL for a portal page, click the **Edit Page Properties** icon for the page for which you want to add a friendly URL. You can then give your portal users that URL, and they can access that page by entering the URL in the Address field of their browser.

    **Note:** When you create a URL mapping or create or modify a page, make sure that URL mappings and friendly URLs in your portal do not match, partially overlap, or otherwise interfere with each other. For example, do not use strings such as home, ibm, ibm.com, and do not use strings that are used as URL mappings or friendly URLs in your portal already. Otherwise, several browser redirect loops might occur, sometimes without an error message. To determine such strings, create an export from your portal by using the XML configuration interface and scan the exported XML result output file for the string that you want to use for your URL mapping or for your friendly URL.

    If this property is set to `true`, you can use the property `friendly.redirect.enabled` listed later to determine whether a redirect must be sent if the incoming URL did not contain the friendly URL prefix of the addressed page.

-   **friendly.redirect.enabled = \(true\)**

    Use this property to determine whether a redirect must be sent if the incoming URL did not contain the friendly URL prefix of the addressed page. This property does not take any effect if friendly URLs are disabled by setting the property `friendly.enabled` to false. Valid values for this property are as follows:

    -   **true**

        Set this property to true if you use an External Security Manager in your portal deployment that is configured to protect URLs based on their prefixes. This value is the default value of this property.

    -   **false**

        If you set this property to false, no redirect is sent in the previous case.

-   **friendly.pathinfo.validation.redirect.onsuccess.enabled = \(true\)**

    This key specifies whether portal sends required friendly URL redirects if the path information of an incoming friendly URL is valid. Specify one of the following two values:

    -   **true**

        This value is the default value. If you set this property to `true` and portal gets a request for a friendly URL that contains path information, portal sends a required friendly URL redirect as if friendly.redirect.enabled was set to `true`. A required friendly URL redirect is only suppressed if the response indicates that the path information does not identify an available content item to ensure that the configured HTTP status code is sent.

    -   **false**

        If you set this property to `false`, portal sends friendly URL redirects as defined by the property friendly.redirect.enabled.

-   **friendly.pathinfo.invalid = \(false\)**

    This property determines how the portal responds to a friendly URL that contains path information. Specify one of the following two values:

    -   **true**

        If you set this property to `true` and the portal gets a request for a friendly URL that contains path information, the portal returns either an HTTP 404 error or redirects the user to the default portal page. The portal response depends on the setting of the property `state.decoding.fallback`.

    -   **false**

        This value is the default value. If you set this property to `false` and the portal gets a request for a friendly URL that contains path information, the portal responds as defined by the property `friendly.pathinfo.enabled`.

    **Note:** The property `state.decoding.fallback` is not applied to URLs that the portal interprets as URL mappings or friendly URLs. If you use friendly URLs or URL mappings, consider setting the parameters `state.decoding.fallback`, `wps.mappingurl.invalid`, and `friendly.pathinfo.invalid` in a consistent way. This action can help provide a consistent user experience. Example: If you set `state.decoding.fallback = false`, consider setting `wps.mappingurl.invalid = true` and `friendly.pathinfo.invalid = true`.

-   **friendly.pathinfo.enabled = \(true\)**

    This property determines whether URL mappings and friendly URLs can contain path information to a content item as part of the URL. Specify one of the following two values:

    -   **true**

        This value is the default value. If you set this property to `true` and the portal gets a request for a URL that contains path information, the portal respects that path information and takes the user to the specified portal page.

        **Note:** The property `friendly.pathinfo.enabled` applies to both friendly URLs and URL mappings.Support for path information in friendly URLs also requires that the property `friendly.enabled` is set to `true` and the property `friendly.pathinfo.invalid` is set to `false`. Support for path information in URL mappings also requires that the property `wps.mappingurl.enabled` is set to `true` and the property `wps.mappingurl.invalid` is set to `false`.

    -   **false**

        If you set this property to `false` and the portal gets a request for a URL that contains path information, the portal ignores the path information and takes the user only to the requested page.

-   **friendly.pathinfo.validation.errorCode = \(404\)**

    This key specifies the HTTP status code that the portal returns if the path information of a friendly URL cannot be resolved to a content item for the requested page. You can specify one of the following values:

    -   **404**

        The default value. This HTTP status code tells a caller, such as a search crawler or web browser, that no content is found for the friendly URL. The missing content might be temporarily or permanently missing.

    -   **410**

        This HTTP status code informs a caller, such as a search crawler or a web browser, that the resource for the friendly URL is no longer available. This missing resource is permanently gone.

    Portal can identify conditions that require a different HTTP status code than the one you configure by using friendly.pathinfo.validation.errorCode. For example, friendly URL redirects require the HTTP status code 302. To support the most common use cases, see the topic *Preventing friendly URL redirects for invalid friendly URLs for web content*.

-   **friendly.pathinfo.validation.errorTextProvider**

    This key specifies the text provider of the localized HTTP status message to send as well as the configured HTTP status code. If you configure a text provider and a request URL has invalid path information, portal responds with a blank page that displays only the HTTP status code and the corresponding localized message that is specified by the text provider. The value of this parameter must be the ID of an implementation of the com.ibm.workplace.wcm.api.plugin.textprovider.TextProvider interface. To use the default messages of HCL Portal, specify the text provider with the ID PathInfoValidationTextProvider. If you implement a custom text provider, make sure that it supports message keys that are composed of the prefix HTTP\_STATUS\_MESSAGE\_ and the configured HTTP status code, for example: HTTP\_STATUS\_MESSAGE\_404.

    **Important:** Portal ignores this setting if you also specify the friendly.pathinfo.validation.errorURI property or page parameter.

-   **friendly.pathinfo.validation.errorResourceBundle**

    This key specifies a Java resource bundle as an alternative to implementing a custom text provider. If you configure a Java resource bundle and a request URL has invalid path information, portal responds with a blank page displays only the HTTP status code and the corresponding localized message from the Java resource bundle. The value of this setting must be the fully qualified name of the Java resource bundle. If you provide a custom Java resource bundle, make sure that it contains message keys that are composed of the prefix HTTP\_STATUS\_MESSAGE\_ and the configured HTTP status code, for example: HTTP\_STATUS\_MESSAGE\_404.

    **Important:** Portal ignores this setting if you also specify the friendly.pathinfo.validation.errorURI property or page parameter. Portal also ignores this setting if you set the value of the friendly.pathinfo.validation.errorTextProvider property or page parameter to a custom text provider ID.

-   **friendly.pathinfo.validation.errorURI**

    This key specifies the piece of content URI that portal resolves if the request URL has invalid path information. The value of this parameter must be a piece of content URI that portal can resolve, for example:

    -   **nm:oid:unique\_page\_name**

        This navigation model URI redirects the request to a specific portal page based on the unique name of the target page.

    -   **custom:resolutionserviceuri**

        This custom implementation of the com.ibm.portal.resolver.ResolutionService interface resolves invalid path information to a dynamically determined navigational state. When portal resolves the piece of content URI, the content path that failed the portlet validation is passed to the resolution service as the wcmContentPath parameter.

-   **friendly.pathinfo.validation.errorContentPath**

    This key specifies the full content path that portal sets as public Web Content Manager context of the resolved page if the request URL has invalid path information. Web Content Viewer portlets on the resolved page that are configured to listen to other portlets can then render the content with the specified path. The value of this setting must be the path of a content item that is available to users, for example: /Web Content/home/human\_resources/health/topic\_not\_found.

-   **friendly.pathinfo.validation.enabled = \(false\)**

    This key specifies whether portal validates the path information of friendly URLs. Specify one of the following two values:

    -   **true**

        If you set this property to `true` and portal gets a request for a friendly URL that contains path information, portal validates that path information. If it does not identify an available content item, portal responds based on its configuration and the configuration of the resolved page. For more information, see *Configuring the validation of friendly URLs for web content*.

    -   **false**

        This value is the default value. If you set this property to false and portal gets a request for a friendly URL that contains path information, portal responds based on the properties friendly.pathinfo.enabled and friendly.pathinfo.invalid. For more information, see *Enabling the validation of friendly URLs for web content*.

-   **friendlyname.uniqueness.enforcement = \(true\)**

    This property determines whether the portal enforces that new friendly names are unique across existing non-private sibling nodes. The default value is `true`. The enforcement does not include derived pages with an inherited friendly name and siblings that are moved in by a personalization rule.

-   **com.ibm.wps.resolver.servlet.AbstractServlet.enableWebDAV\[optional\]=\(true\)**

    This property specifies whether the WebDAV feature is enabled in HCL Portal. By default, this property is set to the value true, by which WebDAV is enabled. To disable WebDAV, specify the value false. To re-enable WebDAV, specify the value true.

-   **portlet.iwidget.markup.prefetching = \(true\)**

    This property determines whether the markup of portlets on pages in Client-side rendering mode must be loaded together with the markup for the portal page. The default value is `true`. This property defines the default markup prefetching behavior for pages that are configured to use the Client-side rendering mode. The default behavior can be overridden on a per portlet basis by declaring the same property as a portlet init property in the deployment descriptor file \(portlet.xml\) of the portlet. To disable portlet markup prefetching by default, set the value of this property to `false`. In this case, the markup of portlets on pages in Client-side rendering mode is fetched by using separate HTTP requests.

-   **portlet.enable.transcoding = \(true\)**

    Determines whether transcoding is enabled.

-   **portlet.automaximize = \(false\)**

    If you set this value to true, the portlet window is maximized when a portlet is set into edit, configure, or help mode.

-   **proxy.enable.app.config = \(false\)**

    If you set this property to true, the Ajax proxy ignores all `proxy-config.xml` files inside portlets.

-   **content.topology.writelock.timeout = milliseconds \(default=25000\)**

    This setting controls the maximum wait time to obtain a writable model before a timeout warning. To add or change the settings, open **Resource Environment Providers** in the WebSphere® Integrated Solutions Console. Restart the portal server after you make your changes.

-   **content.topology.writelock.dump = true\|false \(default=false\)**

    This setting controls if a Java core memory dump is written in a timeout event for debugging. To add or change the settings, open **Resource Environment Providers** in the WebSphere® Integrated Solutions Console. Restart the portal server after you make your changes.

-   **com.ibm.wps.filestore.JCRWebdavTreeModelFactory.cacheClearOnRestart = true\|false \(default=true\)**

    This setting defines whether the file cache content is invalidated and fetched again after server starts or not. The default value is `true`.

-   **actual.SSO.tokenUrl = your\_URL\_for\_SAP\_integration \(no default\)**

    This property is optional. Use it to specify a referenced property of SAP integration. Change the property name according to your chosen reference in the SAP integration page properties. Specify the URL for SAP integration as the value.

-   **enable.default.social.object.resolution.mode.request.param = \(true\)\|false**

    This property is optional. The default setting is `true`. If you set this property to `false`, the parameter `ibm.portal.default.social.object.resolution.mode` is disabled. This setting influences how social object links in social lists are resolved. For more information, see *Configuring globally how social object links are resolved*.

-   **content.topology.writelock.dump = true\|false \(default=false\)**

    This setting controls if a Java core memory dump is written in a timeout event for debugging. To add or change the settings, open **Resource Environment Providers** in the WebSphere® Application Server administrative console. Restart the Portal Server after you make your changes.

-   **com.ibm.wps.filestore.JCRWebdavTreeModelFactory.cacheClearOnRestart = true\|false \(default=true\)**

    This setting defines whether the file cache content is invalidated and fetched again after server starts or not. The default value is `true`.

-   **proxy.cv.slot.regex = your regular expression with allowed slot IDs**

    This property is optional. You can use it to define a subset of available slots in the Credential vault to which you want to limit the access of outbound HTTP connections. For details, read *Authenticating outbound HTTP connections*.

-   **state.decoding.fallback \[=true\]**

    Use this property to control how the portal responds to requests for URLs that it cannot decode. Set it to one of the following two values:

    -   **true**

        This value is the default value. If you set this parameter to `true`, the portal renders the default or home page. This action is the fallback solution in scenarios with portal site visitors.

    -   **false**

        If you set this parameter to false, then the portal serves an HTTP 404 error to requests that it cannot decode. This action can be the preferred solution for other scenarios.

    **Note:** The property `state.decoding.fallback` is not applied to URLs that the portal interprets as URL mappings or friendly URLs. If you use friendly URLs or URL mappings, consider setting the parameters `state.decoding.fallback`, `wps.mappingurl.invalid`, and `friendly.pathinfo.invalid` in a consistent way. This action can help provide a consistent user experience. Example: If you set `state.decoding.fallback = false`, consider setting `wps.mappingurl.invalid = true` and `friendly.pathinfo.invalid = true`.

-   **search.service.suppress\_automatic\_creation = \(false\)**

    Use this property to determine whether the automatic creation of search services and search collections is suppressed. Specify one of the following two values:

    -   **false**

        To not suppress the automatic creation of search services and search collections, set this property to `false`. This is the default value.

    -   **true**

        To suppress the automatic creation of search services and search collections, set this property to `true`.

-   **x-method-override.enabled = \(false\)**

    Use this property to specify whether you want to have PUT and DELETE requests simulated by tunneling that is by using POST requests instead. To enable this type of tunneling, set this property to `true`. If you set the property `x-method-override.enabled` to `true`, then the Config Service considers the `x-method-override` request header, when a request comes in. Whether to send this header is a decision of the HTTP client. By default, this property is set to `false`, and tunneling is disabled.


-   **wcm.pages.enabled = \(true\)**

    This property specifies whether web content pages are enabled. The default value is `true`.

-   **wcm.config.seedlist.version = \(1.0\)**

    This property specifies the version of the search seedlist format that is used by the portal. Search seedlist format 1.0 is the only supported search seedlist format, so the default and only supported value is `1.0`.

-   **wcm.config.seedlist.servletpath = \(/seedlist\)**

    This property specifies the path to the servlet that generates the search seedlist. The default value is `/seedlist`.


-   **delete.empty.portlet.locales = \(false\)**

    This property specifies whether the portal deletes the `localedata` element for a portlet after you set the locale to an empty value.

-   **dnd.portletdefinition.wcm.link = \(wps.p.dnd.wcm.link\)**

    This property defines the global behavior for items that are dragged and dropped from the Site Explorer tab in the site toolbar. The default value is `wps.p.dnd.wcm.link` and specifies that an item is linked to when it is dragged and dropped onto a page from the Site Explorer tab. The value for this property can be the object ID or the unique name of the portlet definition that you want to use as the global behavior for dragging and dropping.


-   **digest.seed**

    In HCL Portal, all resources that are served through the contenthandler framework, for example through the entries /wps/contenthandler and /wps/mycontenthandler, contain a digest token in their URLs. This digest token controls the cacheability of the resources by encoding request dependencies of the resource in the digest. Different dependencies result in a different digest, therefore a different URL, and a different entry in HTTP caches is generated. The digest computation algorithm also takes a seed value into account. This seed is a constant value, identical for all resources on a server. You can control this seed value by setting the digest.seed property in the WP ConfigService. You can control the seed value to make sure that all resources served through the contenthandler framework get fresh URLs, so eventual cache hits are avoided.


-   **stateless.urls.enabled = \(false\)**

    This property enables friendly URLs for the standard theme and the pages that use the standard theme. Set this property to `false` to disable friendly URLs for the standard theme and the pages that use the standard theme. `False` is the default value. Set this property to `true` to enable friendly URLs for the standard theme and the pages that use the standard theme. Whether friendly URLs without state information are generated on a specific page depends on the value of page parameter `generate.stateless.urls` or, if this parameter is not set, on the value of `generate.stateless.urls` of WP ConfigService. Page parameter settings can be inherited from parent pages.

-   **generate.stateless.urls = \(false\)**

    This property sets the default value for generating friendly URLs for the standard theme and the pages that use the standard theme. This property sets a default value only if `stateless.urls.enabled` is set to `true`. Set this property to `true` to generate friendly URLs without state information for all pages for which page parameter `generate.stateless.urls` is not set or is not inherited from parent pages. This property setting affects all Virtual Portals. Set this property to `false` to generate URLs with state information for all pages for which `generate.stateless.urls` is not set or is not inherited from parent pages. This property setting affects all Virtual Portals. `False` is the default value.

-   **generate.stateless.redirect.urls = \(true\)**

    This property sets the default value for generating friendly URLs for the standard theme and the pages that use the standard theme. This property sets a default value only if `stateless.urls.enabled` is set to `true`. Set this property to `true` to generate friendly URLs without state information for all pages for which page parameter `generate.stateless.urls` is not set or is not inherited from parent pages. This property setting affects all Virtual Portals. Set this property to `false` to generate URLs with state information for all pages for which `generate.stateless.urls` is not set or is not inherited from parent pages. This property setting affects all Virtual Portals. `False` is the default value.

    This property enables the stateless friendly redirect feature. The stateless friendly redirect feature is disabled by default. The feature can be enabled by setting the following custom properties in REP WP ConfigService. `stateless.urls.enabled = true` `generate.stateless.redirect.urls = true`

    **Note:** The stateless friendly redirect feature requires the base tag to be enabled in the theme.


