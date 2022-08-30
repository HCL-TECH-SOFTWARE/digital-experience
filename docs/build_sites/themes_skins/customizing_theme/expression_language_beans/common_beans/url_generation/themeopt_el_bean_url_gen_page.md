# UrlGenerationPage

Extends UrlGeneration on a page. All the UrlGeneration attributes are available in addition to these attributes.

Attributes:

-   **setLayoutNode\(node\)**

    This attribute indicates the ID or unique name of the control that holds the portlet. The value wp.currentSelectedPortlet can be used inside a control when you generate a URL to the portlet within that control.

    Example:

    ```
    ${wp.navigationModel['ibm.portal.Search Center'].urlGeneration.setLayoutNode('ibm.portal.Search Center Portlet Window').allowRelativeURL.setActionParam('javax.portlet.action','newQuery')}
    ```

    Parameters:

    -   **node**

        String or Identifiable; defines the control to be used as a target for the URL.

    Returns: [UrlGenerationPortlet](themeopt_el_bean_url_gen_portlet.md); a URL generation object for portlet URLs.

-   **setPortlet\(portlet\)**

    This attribute indicates the ID or unique name of the control that holds the portlet. The value wp.currentSelectedPortlet can be used inside a control when you generate a URL to the portlet within that control.

    Example:

    ```
    ${wp.navigationModel['ibm.portal.Search Center'].urlGeneration.setPortlet('ibm.portal.Search Center Portlet Window').allowRelativeURL.setActionParam('javax.portlet.action','newQuery')}
    ```

    Parameters:

    -   **node**

        String or Identifiable; defines the control to be used as a target for the URL.

    Returns: [UrlGenerationPortlet](themeopt_el_bean_url_gen_portlet.md); a URL generation object for portlet URLs.

-   **autoSelectPortlet**

    This attribute automatically selects the first portlet on the page and addresses this as the target for the portlet URL.

    Example:

    ```
    ${wp.navigationModel['wps.Selfcare'].urlGeneration.autoSelectPortlet.normal.setRenderParam('ao','thm').setRenderParam('OCN',wp.identification[wp.selectionModel.selected]).allowRelativeURL.setThemeTemplate('')}
    ```

    Parameters: none

    Returns: [UrlGenerationPortlet](themeopt_el_bean_url_gen_portlet.md); a URL generation object for portlet URLs.


