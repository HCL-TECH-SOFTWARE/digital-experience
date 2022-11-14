# Web Content Manager pre-rendering service

The HCL Web Content Manager pre-rendering service \(WCM PrerenderService\) defines settings that affect how websites are pre-rendered.

-   **prerender.extended.support.enabled**

    Indicates whether prererendering supports JSP and PZN requests.

    Default value: `false`

-   **prerender.authenticator.classname**

    Indicates the authenticator used to make a connection to the default login URL for the portal, when an external security manager is not installed.

    Default value: `com.aptrix.cacher.authentication.WCMDefaultPrerenderAutthenticator`

-   **prerender.authenticator.credentials.classname**

    The credentials used by the authenticator specified by the `prerender.authenticator.classname` property.

    Default value: `com.aptrix.cacher.authentication.DefaultPrerenderPropertiesCredentials`

-   **prerender.default.authenticator.credentials.username**

    Indicates the user name used by the DefaultPrerenderPropertiesCredentials authenticator. If you are using a custom credential provider, this property is not required.

    Default value: `portal\_admin\_id`

-   **prerender.default.authenticator.credentials.password**

    Indicates the password used by the DefaultPrerenderPropertiesCredentials authenticator. If you are using a custom credential provider, this property is not required. The password can be encoded using the PropFilePasswordEncoder utility provided with WebSphere® Application Server.

    Default value: `portal\_admin\_password`

-   **prerender.default.isSecure**

    Indicates whether the server URLs should be formatted with secure HTTP \(`https://...`\) or unsecured HTTP \(`http://...`\).

    Default value: `false`

-   **prerender.default.hostName**

    The host name of the server performing prerendering. The value is typically represented as a WebSphere® Application Server variable \(for example, `${WCM_HOST}`\).

    Default value: `${WCM_HOST}`

-   **prerender.default.hostPort**

    The port number for server performing prerendering. The value is typically represented as a WebSphere® Application Server variable \(for example, `${WCM_PORT}`\).

    Default value: `${WCM_PORT}`

-   **prerender.default.portalContext**

    The context root for the HCL Web Content Manager web application \(for example, `/wps/wcm`\). The value is typically represented as a WebSphere® Application Server variable \(for example, `${WCM_WPS_CONTEXT_ROOT}`\).

    Default value: `${WCM_WPS_CONTEXT_ROOT}`

-   **prerender.default.portal.servlet.authenticatedContext**

    The authenticated context root for the portal \(for example, `/myportal`\). The value is typically represented as a WebSphere® Application Server variable \(for example, `${WCM_WPS_CONTEXT_ROOT}/${WCM_WPS_PERSONALIZED_HOME}`\).

    Default value: `${WCM_WPS_CONTEXT_ROOT}/${WCM_WPS_PERSONALIZED_HOME}`

-   **prerender.default.portal.servlet.unauthenticatedContext**

    The unauthenticated context root for the portal \(for example, `/portal`\). The value is typically represented as a WebSphere® Application Server variable \(for example, `${WCM_WPS_CONTEXT_ROOT}/${WCM_WPS_DEFAULT_HOME}`\).

    Default value: `${WCM_WPS_CONTEXT_ROOT}/${WCM_WPS_DEFAULT_HOME}`

-   **prerender.default.wcm.servlet.authenticatedContext**

    The default secured path to the HCL Web Content Manager servlet.

    Default value: `${WCM_CONTEXT_ROOT}/myconnect`

-   **prerender.default.wcm.servlet.unauthenticatedContext**

    The default unsecured path to the HCL Web Content Manager servlet.

    Default value: `${WCM_CONTEXT_ROOT}/connect`



