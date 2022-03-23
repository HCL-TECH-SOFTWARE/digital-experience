# Properties 

Object representing a set of properties made available as part of the resource environment provider.

Attributes:

-   **get\(key\)**

    Retrieves the property that is defined on the Resource Environment Provider.

    Example:

    ```
    ${wp.rep['resourceEnvironmentProvider']['property']}
    ```

    To retrieve the Portal defined Dojo context root.

    ```
    
    ${wp.rep['WP GlobalThemeConfig']['resources.js.dojo.contextRoot']}
    ```

    Parameters: String; specifies the property key.

    Returns: String; specifies the property value. It can be null if not found.

-   **iterator**

    Retrieves all properties that are stored in the resource environment provider.

    Example:

    ```
    <c:forEach var="node" items="${wp.rep['WP GlobalThemeConfig']}">
    ${node.key}  =>  ${node.value}<br>
    </c:forEach>
    
    ```

    Parameters: None


