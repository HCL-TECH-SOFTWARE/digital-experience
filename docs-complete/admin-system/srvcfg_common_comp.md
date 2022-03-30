# Common Component Configuration Service 

You can use the Common Component Configuration service to configure the behavior of the common components framework, the enabler widget container, and the client-side APIs.

In the WebSphere® Integrated Solutions Console, the portal Common Component Service is listed as **WP CommonComponentService**. It provides the following configuration properties:

-   **cc.multipart.enabled = true\|false**

    Use this property to specify whether multipart requests can be used for batch processing. This property applies to using the enabler client-side APIs. The portal Page Builder theme uses this property primarily during bootstrap when it loads remote data.

-   **cc.multipart.correlatehosts = true\|false**

    Use this property to specify whether you want hosts in multipart requests to be correlated.

-   **cc.multipart.pageLoadOptimization**

    This property is optional. You can use it for user interface components to modify page loading for optimization if required. If you do not specify a value for this property, it defaults to `false`.

-   **cc.multipart.pageLoadOptimizationTheme**

    This property is optional. You can use it for user interface components to modify theme loading for optimization if required. If you do not specify a value for this property, it defaults to `false`.

-   **cc.multipart.pageLoadOptimizationAppWidgets**

    This property is optional. You can use it for user interface components to modify widget loading for optimization if required. If you do not specify a value for this property, it defaults to `false`.

-   **cc.theme.context**

    Use this property to specify the context root of the default theme.

-   **cc.theme.id**

    Use this property to specify the ID of the default common component theme.

-   **cc.enabler.sandboxenabled**

    Use this property to specify whether the sandbox is enabled. If you have widgets that are loaded in a sandbox, the widgets are loaded inside an iFrame. Loading them inside an iFrame keeps them from interacting with the other JavaScript and DOM resources on the same page.

-   **cc.enabler.subdomains**

    Use this property to specify an array of strings with the names of the subdomains that are used to create sandboxed widgets. iFrames that load sandboxed iWidgets use subdomains to create an alternative domain rather than the default one so that cross-domain browser security settings are put in place. Use this property to specify the subdomains that you set up that can be resolved correctly through DNS.

-   **cc.enabler.serverdomain**

    Use this property to specify the name of the server domain that you use with the sandbox.

-   **cc.enabler.useridattribute**

    Use this property to specify the user registry attribute that uniquely identifies users.

-   **cc.enabler.user.displaynameattribute**

    Use this property to specify the user registry attribute that is used to display the name of users. The user registry attribute is the attribute on the object that represents a user in the user registry. For example, LDAP or other, that refers to the user's name to display.

-   **cc.enabler.groupidattribute**

    Use this property to specify the user registry attribute that uniquely identifies groups.

-   **cc.enabler.group.displaynameattribute**

    Use this property to specify the user registry attribute to is used to display the name of groups.

-   **cc.enabler.acceptedPagesParentNode**

    Use this property to specify the navigation node that becomes the parent of shared pages that users accept. However, the shared pages parameters were deprecated in HCL Portal 8.5.

-   **cc.enabler.remote-cache-expiry**

    Use this property to specify the number of seconds for the remote expiration time for new pages. The amount of time specifies how long cache entries for newly created pages can be cached.

-   **cc.page.autowiredefaultenabled**

    Use this property to specify whether widgets are autowired automatically.

-   **cc.isDebug = true\|false**

    Use this property to specify whether you want debugging to be enabled or not.

-   **cc.traceConfig**

    Use this property to specify an array of strings that are used to set client side tracing on user interface components. Use the exact syntax of a JavaScript array, including brackets and double or single quoted values for each item. Example: `["com.ibm.mashups.enabler.*","com.ibm.pb.*"]`

-   **cc.productname = product name**

    Use this property to specify the product name; user interface components such as themes can use the value from this property. Themes or other user interface components can use this property to display a global brand name. For example, in a default portal installation this property is used to specify the product display name HCL Portal.

-   **cc.theme.autoEditNewPages = true\|false**

    Use this property to specify whether you want blank pages to go into edit mode automatically \(true\) or not \(false\).

-   **cc.theme.alwaysRefreshOnPageSave**

    Use this property to specify whether you want the page always to refresh when it is saved \(true\) or not \(false\).


The following list gives the navigational state parameters. Use them to set the configuration for the navigational state model. By default the w \(width\), h \(height\), and st \(state\) attributes are persisted to persistence store and are not included in the URL. The page identifier \(PID\) of the current page and the space identifier \(SID\) of the current space are added to the URL. In general all navigational state parameters that are not defined in the parameter `navstate.persistence.pstore` are added to the URL. This way all widget navigational state parameters are added to the URL.

-   **cc.enabler.navstate.persistence.url = \['sid','pid'\]**

    Use this property to specify an array of strings that specify which attributes of the navigation state are stored in the URL.

-   **cc.enabler.navstate.persistence.pstore = \['w','h','st'\]**

    Use this property to specify an array of strings that specify which attributes of the navigation state are stored in the persistence store.

-   **cc.enabler.navstate.persistence.url.limit = 10**

    Use this property to specify the limit on how many widgets can store their navigation state in the URL.

-   **cc.enabler.navstate.persistence.url.splimit = 10**

    Use this property to specify the limit on how many shared parameter sets can be stored through encoding in the URL.


## Adding new parameters

You can add new parameters by prefixing the key with `dyn:`, for example: `dyn:com.ibm.mashups.someKey = someValue`. The new name-value pair must be of type string. Restart the server after you add the new parameter.

**Parent topic:**[Portal service configuration ](../admin-system/srvcfgref.md)

