# UrlGeneration 

Creates a portal URL you can control with attributes.

Attributes:

-   **autoNavigationalState**

    The configuration determines if the navigational state is included in the URL. See the description for `stateless.urls.enabled`, `generate.stateless.redirect.urls` and `generate.stateless.urls` of *Configuration Service*. Parameters: none. Returns: [UrlGeneration](themeopt_el_bean_url_gen.md), which is the same object, so multiple method calls can be concatenated.

    Example:

    ```
    ${wp.selectionModel.selected.urlGeneration.autoNavigationalState}
    ```

-   **keepNavigationalState**

    The navigational state is included into the URL.

    Example:

    ```
    ${wp.selectionModel.selected.urlGeneration.keepNavigationalState}
    ```

    Parameters: none

    Returns: [UrlGeneration](themeopt_el_bean_url_gen.md), which is the same object, so multiple method calls can be concatenated.

-   **noNavigationalState**

    The current navigational state that includes all portlet modes, states, and render parameters is not included in the URL, and the portal is reset to its default state.

    Example:

    ```
    ${wp.selectionModel.selected.urlGeneration.noNavigationalState}
    ```

    Parameters: none

    Returns: [UrlGeneration](themeopt_el_bean_url_gen.md), which is the same object, so multiple method calls can be concatenated.

-   **setParam\(name, value\)**

    Use this attribute to add parameters to the URL. Parameters added to the URLGeneration object occur as unscoped query parameters. Parameter handling depends on the target of the URL. If the URL points to a page, the parameters are visible to all HCL portlets on that page. Parameters are not visible to standard portlets if the URL does not point specifically to that portlet.

    Example:

    ```
    ${wp.selectionModel.selected.urlGeneration.setParam('a','b')}
    ```

    Parameters:

    -   **name**

        String; the name of the parameter.

    -   **value**

        String; the value of the parameter.

    Returns: [UrlGeneration](themeopt_el_bean_url_gen.md), which is the same object, so multiple method calls can be concatenated.

-   **setLocale\(locale\)**

    Use this attribute to change the active language in the navigational state in which the URL is generated.

    Example:

    ```
    ${wp.selectionModel.selected.urlGeneration.setLocale('de')}
    ```

    Parameters:

    -   **locale**

        String; the locale to be set.

    Returns: [UrlGeneration](themeopt_el_bean_url_gen.md), which is the same object, so multiple method calls can be concatenated.

-   **clearThemeTemplate**

    Removes the theme template from the navigational state.

    Example:

    ```
    ${wp.selectionModel.selected.urlGeneration.clearThemeTemplate}
    ```

    Parameters: none

    Returns: [UrlGeneration](themeopt_el_bean_url_gen.md), which is the same object, so multiple method calls can be concatenated.

-   **setThemeTemplate\(template\)**

    This specifies the theme template that is taken for rendering the requested page. Can be referenced as either a JSP or a class and is used as theme for this URL.

    Example:

    ```
    ${wp.selectionModel.selected.urlGeneration.setThemeTemplate('Plain')}
    ```

    Parameters:

    -   **template**

        String; the template name.

    Returns: [UrlGeneration](themeopt_el_bean_url_gen.md), which is the same object, so multiple method calls can be concatenated.

-   **secure**

    This attribute creates a secure URL \(HTTPS\).

    Example:

    ```
    ${wp.selectionModel.selected.urlGeneration.secure}
    ```

    Parameters: none

    Returns: [UrlGeneration](themeopt_el_bean_url_gen.md), which is the same object, so multiple method calls can be concatenated.

-   **unsecure**

    This attribute creates an unsecure URL \(HTTP\).

    Example:

    ```
    ${wp.selectionModel.selected.urlGeneration.unsecure}
    ```

    Parameters: none

    Returns: [UrlGeneration](themeopt_el_bean_url_gen.md), which is the same object, so multiple method calls can be concatenated.

-   **forceProtected**

    This attribute creates a URL pointing to the protected \(logged in\) page of the portal.

    Example:

    ```
    ${wp.selectionModel.selected.urlGeneration.forceProtected}
    ```

    Parameters: none

    Returns: [UrlGeneration](themeopt_el_bean_url_gen.md), which is the same object, so multiple method calls can be concatenated.

-   **forcePublic**

    This attribute creates a URL pointing to the public \(anonymous\) page of the portal.

    Example:

    ```
    ${wp.selectionModel.selected.urlGeneration.forcePublic}
    ```

    Parameters: none

    Returns: [UrlGeneration](themeopt_el_bean_url_gen.md), which is the same object, so multiple method calls can be concatenated.

-   **forceAbsolute**

    If you use this attribute, absolute URLs are enforced; in this case other settings that affect the generation of URLs might be overridden.

    Example:

    ```
    ${wp.selectionModel.selected.urlGeneration.forceAbsolute}
    ```

    Parameters: none

    Returns: [UrlGeneration](themeopt_el_bean_url_gen.md), which is the same object, so multiple method calls can be concatenated.

-   **allowRelativeURL**

    This attribute indicates that a relative URL is generated. If not called for this `Urlgeneration`, then default is used, which is set by the property com.ibm.portal.state.accessors.url.URLContext.enableRelative in the StateManagerService.

    Example:

    ```
    ${wp.selectionModel.selected.urlGeneration.allowRelativeURL}
    ```

    Parameters: none

    Returns: [UrlGeneration](themeopt_el_bean_url_gen.md), which is the same object, so multiple method calls can be concatenated.

-   **normalize**

    This attribute indicates that the URL to be generated should be normalized. If more parameters are set, the normalization is run first and afterward the other state modifications are accomplished. It normalizes the URL with the same XSL file used to normalize URLs for search engines. The normalized representation of the URL can also be used to bookmark a page.

    Example:

    ```
    ${wp.selectionModel.selected.urlGeneration.normalize}
    ```

    Parameters: none

    Returns: [UrlGeneration](themeopt_el_bean_url_gen.md), which is the same object, so multiple method calls can be concatenated.

-   **logout**

    Creates a URL that logs out the current user.

    Example:

    ```
    ${wp.selectionModel.selected.urlGeneration.logout}
    ```

    Parameters: none

    Returns: [UrlGeneration](themeopt_el_bean_url_gen.md), which is the same object, so multiple method calls can be concatenated.

-   **login**

    Creates a URL that logs in a user to portal. This attribute is typically used for the login panel. The user ID and password parameters must be carried with a login URL.

    Example:

    ```
    ${wp.selectionModel.selected.urlGeneration.login}
    ```

    Parameters: none

    Returns: [UrlGeneration](themeopt_el_bean_url_gen.md), which is the same object, so multiple method calls can be concatenated.

-   **setPageEditMode\(flag\)**

    You can set the page edit mode as used by the toolbar.

    Example:

    ```
    ${wp.selectionModel.selected.urlGeneration.setPageEditMode('true')}
    ```

    Parameters:

    -   **flag**

        String that indicates a Boolean value as a string. The value `true` enables the page edit mode. The value `false` disables it.

    Returns: [UrlGeneration](themeopt_el_bean_url_gen.md), which is the same object, so multiple method calls can be concatenated.

-   **url**

    Generates the url with all its attributes and returns it as a string. This is the default method that is called when no further attributes are specified.

    Example:

    ```
    ${wp.selectionModel.selected.urlGeneration.url}
    ${wp.selectionModel.selected.urlGeneration}
    
    ```

    Parameters: none

    Returns: String; the generated URL as a string.


