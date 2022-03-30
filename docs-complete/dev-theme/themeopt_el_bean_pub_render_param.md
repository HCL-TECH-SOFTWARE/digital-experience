# wp.publicRenderParam 

Public render parameters can be used by portlets to share context information. They are addressed with qualified names. The wp.publicRenderParam expression bean can be used within a theme or theme module to read the first String value of a public render parameter.

The public render parameter is read in the context of the currently selected page that is determined internally. If your public render parameter has multiple values, you must use the [wp.publicRenderParamValues](themeopt_el_bean_pub_render_param_values.md) expression bean instead.

Attributes:

-   **get\(qname\)**

    Reads the first string value of the public render parameter that is identified by the qualified name.

    Example:

    ```
    <c:set var="editModeQName" value="{http://www.ibm.com/xmlns/prod/websphere/portal/publicparams}editMode" />
    <c:set var="isEditModeActive" value="${wp.publicRenderParam[editModeQName]}" />
    <c:if test="${isEditModeActive}">
        ...
    </c:if>
    ```

    Parameters:

    -   **qname**

        The serialized qualified name of the public render parameter. Its format is `{<namespaceURI>}<localname>`. This format corresponds with the serialization format defined by the `javax.xml.namespace.QName` class. To avoid issues with the JSP expression parser, store the qualified name in a separate JSP variable. The qname parameter is mandatory. It must not be null.

    Returns: A String representing the first value of the addressed public render parameter or null.


