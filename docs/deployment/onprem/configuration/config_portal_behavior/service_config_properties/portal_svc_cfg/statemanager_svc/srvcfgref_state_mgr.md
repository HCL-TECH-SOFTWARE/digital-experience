# State Manager Service

The portal State Manager Service is the access point for managing the navigational state of the portal. The navigational state represents the current view of portal resources as displayed to a user.

In the WebSphere® Integrated Solutions Console, the portal State Manager Service is listed as **WP StateManagerService**.

The portal State Manager Service holds the following properties:

-   **preprocessors = \(com.ibm.wps.state.preprocessors.selection.StandardPortalSelectionImpl \)**

    This property specifies a list of one or more preprocessors that are used. It can take multiple values.

    **Notes:**

    1.  If you want to add your own custom preprocessors in the WebSphere® Integrated Solutions Console, you must first enter the default values in the following sequence and then append your custom preprocessors to the end of the list. The reason is as follows:
        -   If you specify a value for this parameter, that value overwrites the default value.
        -   The default value is mandatory. Therefore, you cannot replace it by a different value.
        -   The following preprocessors must be arranged in order, as for requests they are processed in that order.
    2.  The required syntax is `(classname (, classname) * ) 1`.
    The default value is as follows:

    ```
    preprocessors = com.ibm.wps.state.preprocessors.urlmapping.URLMappingPreProcessor,
                    com.ibm.wps.resolver.friendly.preprocessors.FriendlyPreProcessor,
                    com.ibm.wps.resolver.portal.ResolvedPreprocessor,
                    com.ibm.wps.state.preprocessors.selection.StandardPortalSelectionImpl,
                    com.ibm.wps.state.preprocessors.selection.FragmentSelectionImpl,
                    com.ibm.wps.state.preprocessors.selection.ResourceSelectionImpl,
                    com.ibm.wps.state.preprocessors.eclipse.ExtensionPreProcessor,
                    com.ibm.wps.state.preprocessors.portlet.RequestParameterMerger
    ```

    Of the default values given, the following two selection preprocessors are alternative options. They process the page that the user selected. All other preprocessors are for portal internal use only and must not be changed.

    **Note:** Both of the following selection preprocessors are mutually exclusive. They cannot be used in combination with each other.

    -   **com.ibm.wps.state.preprocessors.selection.StandardPortalSelectionImpl**

        This value implements the standard portal selection behavior, which prefers displaying pages over displaying labels. Therefore, if a user selects a label, the portal displays a page under that label, rather than the label itself with the message that says that there is no content available. \(In this case the page that is displayed is the last page that the user selected under this label, or if that page is not available, the first available page under the label.\) This value is the default value.

    -   **com.ibm.wps.state.preprocessors.selection.SimpleSelectionImpl**

        This value implements a simple selection strategy; it always displays the element that the user selected, regardless of whether the user selects a label or a page. If the user selects a label, the portal displays that label with the message that there is no content available. You can replace this value for the previously listed default value.

    To prevent loss of the language information of users' browser session, you can also add the following preprocessor to the list of preprocessors:

    -   **com.ibm.wps.state.preprocessors.locale.CookieSupportedLanguagePreProcessor**

        This preprocessor creates a backup copy of the locale information that is found in the navigational state of the portal page to a cookie. A users's choice of language is lost when the navigational state is cleared. For example, the language information is lost if users use bookmarks to friendly URLs for navigation or if the navigational state is cleared intentionally. You can use this preprocessor to preserve the user's language choice. The language is then persisted to the next page that the user selects. When then user selects a different language, the portal updates the information in the cookie accordingly. You can also determine the maximum lifetime of the cookie that holds the language information. To do so, specify the following property in the State Manager Service:

        -   **com.ibm.wps.state.preprocessors.locale.CookieSupportedLanguagePreProcessor.cookie.maxage = \(-1\)**

            Specify an integer value. The value is interpreted as the number of seconds until the cookie is invalidated. A negative value, for example `-1`, means that the cookie is not deleted until the browser session is finished, for example by closing the web browser window. The default value for this property is `-1`, by which the cookie is not invalidated until the end of the browser session. Examples:

            -   **com.ibm.wps.state.preprocessors.locale .CookieSupportedLanguagePreProcessor.cookie.maxage=30**

                The cookie is active for 30 seconds after the last request.

            -   **com.ibm.wps.state.preprocessors.locale .CookieSupportedLanguagePreProcessor.cookie.maxage=-1**

                The cookie is active while the browser window remains open.

-   **com.ibm.wps.state.preprocessors.selection.StandardPortalSelectionImpl.selection.fallback.enabled**

    Use this property to specify what happens if a user requests a page that does not exist, for example by selecting a bookmark for a page that was deleted. Specify one of the following values:

    -   **true**

        This value is the default value. With this value, the portal takes the user to the default fallback page, for example the home page.

    -   **false**

        With this value, the portal gives an HTTP 404 error.

    Use this property together with the `state.decoding.fallback` property in the portal WP configuration service. Set the values for the two properties in a consistent way.

-   **keymanager.lru.size = \( integer \)**

    Use this property to specify the history expiration limit of portal pages that users select. The number that you specify defines the minimum number of different pages that are selected by the user after which the portal can discard the render parameters of a page. \(The decision whether the render parameters of the page are discarded depends on the expiration policy of the internal cache that stores the render parameters of those pages.\) If the user returns to a page after the user selects the specified number of other pages and if the render parameters of that page expired, the portal displays that page in its default state.

    You can specify by which circumstances the render parameters of a page are stored or discarded:

    -   **1**

        Each time that the user selects a different page, the render parameters of the portlets on the previously selected page can be discarded.

    -   **A positive integer**

        Specify the required number of pages. The render parameters of a page can be discarded after the user selected that number of other pages.

    -   **0**

        Render parameters are always stored in the portal session memory and never discarded.

    Do not specify a value less than zero \(0**** \). Negative values are considered to be not valid.


-   **[URL normalization for search of portal pages by external search engines](../admin-system/srvcfgref_url_normlz.md)**  
You can configure the normalization of the URL of your portal. URL normalization is required to enable external search engines to crawl the content of your portal.

**Parent topic:**[Portal service configuration](../admin-system/srvcfgref.md)

**Related information**  


[Selecting and changing the language](../admin-system/adsuplang.md)

