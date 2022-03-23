# wp.publicRenderParamValues 

The wp.publicRenderParamValues expression bean can be used within a theme or theme module to read the values of a public render parameter. The public render parameter is read in the context of the currently selected page that is determined internally.

Attributes:

-   **get\(qname\)**

    Reads the first string value of the public render parameter that is identified by the qualified name.

    Example:

    ```
    <c:set var="pageModesQName" value="{http://www.ibm.com/xmlns/prod/websphere/portal/publicparams}pageMode" />
    <c:set var="pageModes" value="${wp.publicRenderParamValues[pageModesQName]}" />
    <c:forEach var="mode" items="${pageModes}">
        ...
    </c:forEach>
    
    ```

    Parameters:

    -   **qname**

        The serialized qualified name of the public render parameter. Its format is `{<namespaceURI>}<localname>`. This format corresponds with the serialization format defined by the `javax.xml.namespace.QName` class. To avoid issues with the JSP expression parser, store the qualified name in a separate JSP variable. The qname parameter is mandatory. It must not be null.

    Returns: A String array that contains the values of the addressed public render parameter or null. You can use the forEach JSTL tag to loop over the returned array.


