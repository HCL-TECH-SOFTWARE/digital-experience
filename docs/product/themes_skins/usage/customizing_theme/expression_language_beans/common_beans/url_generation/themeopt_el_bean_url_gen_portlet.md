# UrlGenerationPortlet

Extends UrlGeneration in a portlet. All the UrlGeneration and UrlGenerationPage attributes are available in addition to these attributes.

Attributes:

-   **view**

    This attribute sets the portlet mode VIEW.

    Example:

    ```
    ${wp.navigationModel['wps.Selfcare'].urlGeneration.autoSelectPortlet.view}
    ```

    Parameters: none

    Returns: [UrlGenerationPortlet](themeopt_el_bean_url_gen_portlet.md), which is the same object, so multiple method calls can be concatenated.

-   **help**

    This attribute sets the portlet mode HELP.

    Example:

    ```
    ${wp.navigationModel['wps.Selfcare'].urlGeneration.autoSelectPortlet.help}
    ```

    Parameters: none

    Returns: [UrlGenerationPortlet](themeopt_el_bean_url_gen_portlet.md), which is the same object, so multiple method calls can be concatenated.

-   **edit**

    This attribute sets the portlet mode EDIT.

    Example:

    ```
    ${wp.navigationModel['wps.Selfcare'].urlGeneration.autoSelectPortlet.edit}
    ```

    Parameters: none

    Returns: [UrlGenerationPortlet](themeopt_el_bean_url_gen_portlet.md), which is the same object, so multiple method calls can be concatenated.

-   **editDefaults**

    This attribute sets the portlet mode EDIT\_DEFAULTS.

    Example:

    ```
    ${wp.navigationModel['wps.Selfcare'].urlGeneration.autoSelectPortlet.editDefaults}
    ```

    Parameters: none

    Returns: [UrlGenerationPortlet](themeopt_el_bean_url_gen_portlet.md), which is the same object, so multiple method calls can be concatenated.

-   **configure**

    This attribute sets the portlet mode CONFIGURE.

    Example:

    ```
    ${wp.navigationModel['wps.Selfcare'].urlGeneration.autoSelectPortlet.configure}
    ```

    Parameters: none

    Returns: [UrlGenerationPortlet](themeopt_el_bean_url_gen_portlet.md), which is the same object, so multiple method calls can be concatenated.

-   **render**

    This attribute generates URLs to a standard portlet's render processing method. If this attribute is omitted, the render method of the portlet is called.

    Example:

    ```
    ${wp.navigationModel['wps.Selfcare'].urlGeneration.autoSelectPortlet.render}
    ```

    Parameters: none

    Returns: [UrlGenerationPortlet](themeopt_el_bean_url_gen_portlet.md), which is the same object, so multiple method calls can be concatenated.

-   **action**

    This attribute generates URLs to a standard portlet's action processing method. If this attribute is omitted, the render method of the portlet is called.

    Example:

    ```
    ${wp.navigationModel['wps.Selfcare'].urlGeneration.autoSelectPortlet.action}
    ```

    Parameters: none

    Returns: [UrlGenerationPortlet](themeopt_el_bean_url_gen_portlet.md), which is the same object, so multiple method calls can be concatenated.

-   **resource**

    This attribute generates URLs to a standard portlet's resource processing method. If this attribute is omitted, the render method of the portlet is called.

    Example:

    ```
    ${wp.navigationModel['wps.Selfcare'].urlGeneration.autoSelectPortlet.resource}
    ```

    Parameters: none

    Returns: [UrlGenerationPortlet](themeopt_el_bean_url_gen_portlet.md), which is the same object, so multiple method calls can be concatenated.

-   **maximized**

    This attribute sets the window state MAXIMIZED.

    Example:

    ```
    ${wp.navigationModel['wps.Selfcare'].urlGeneration.autoSelectPortlet.maximized}
    ```

    Parameters: none

    Returns: [UrlGenerationPortlet](themeopt_el_bean_url_gen_portlet.md), which is the same object, so multiple method calls can be concatenated.

-   **minimized**

    This attribute sets the window state MINIMIZED.

    Example:

    ```
    ${wp.navigationModel['wps.Selfcare'].urlGeneration.autoSelectPortlet.minimized}
    ```

    Parameters: none

    Returns: [UrlGenerationPortlet](themeopt_el_bean_url_gen_portlet.md), which is the same object, so multiple method calls can be concatenated.

-   **normal**

    This attribute sets the window state NORMAL.

    Example:

    ```
    ${wp.navigationModel['wps.Selfcare'].urlGeneration.autoSelectPortlet.normal}
    ```

    Parameters: none

    Returns: [UrlGenerationPortlet](themeopt_el_bean_url_gen_portlet.md), which is the same object, so multiple method calls can be concatenated.

-   **solo**

    This attribute sets the window state SOLO.

    **Note:** The portlet must be able to exist in solo state that uses the `createReturnURI()` method. If a portlet without this method is placed in solo state, then users must log out or close their browser windows to return to the portal.

    Example:

    ```
    ${wp.navigationModel['wps.Selfcare'].urlGeneration.autoSelectPortlet.solo}
    ```

    Parameters: none

    Returns: [UrlGenerationPortlet](themeopt_el_bean_url_gen_portlet.md), which is the same object, so multiple method calls can be concatenated.

-   **setRenderParam**

    Use this attribute to add render parameters to the URL. Parameters are not visible to standard portlets if the URL does not point specifically to that portlet.

    Example:

    ```
    ${wp.navigationModel['wps.Selfcare'].urlGeneration.autoSelectPortlet.setRenderParam('a','b')}
    ```

    Parameters:

    -   **name**

        String; the name of the parameter.

    -   **value**

        String; the value of the parameter.

    Returns: [UrlGenerationPortlet](themeopt_el_bean_url_gen_portlet.md), which is the same object, so multiple method calls can be concatenated.

-   **setActionParam**

    Use this attribute to add action parameters to the URL. Parameters are not visible to standard portlets if the URL does not point specifically to that portlet.

    Example:

    ```
    ${wp.navigationModel['wps.Selfcare'].urlGeneration.autoSelectPortlet.action.setActionParam('a','b')}
    ```

    Parameters:

    -   **name**

        String; the name of the parameter.

    -   **value**

        String; the value of the parameter.

    Returns: [UrlGenerationPortlet](themeopt_el_bean_url_gen_portlet.md), which is the same object, so multiple method calls can be concatenated.


