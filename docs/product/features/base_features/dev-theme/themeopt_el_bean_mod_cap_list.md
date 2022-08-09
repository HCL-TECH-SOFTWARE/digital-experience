# ModuleCapabilitiesList

Represents the aggregated capabilities of a list of modules. This is usually the non-deferred or deferred capabilities of the currently selected page and depends on how this object was fetched. This is especially useful for portlet developers to check if certain capabilities are available on the page or not.

Attributes:

-   **get\(key\)**

    Returns the module for a key.

    Example:

    ```
    ${wp.moduleList.current.capabilities['oneUI'].value
    ${!empty wp.moduleList.current.capabilities['oneUI']}
    ```

    Parameters:

    -   **key**

        String, the name of the capability.

    Returns: [ModuleCapability](themeopt_el_bean_mod_cap.md). May be null if it is not found.

-   **iterator**

    Iterates through capabilities.

    Example:

    ```
    <c:forEach var="node" items="${wp.moduleList.current.capabilities}">   
        ${node.name}/${node.value},
    </c:forEach>
    ```

    Parameters: None

    Returns: An iterator with [ModuleCapability](themeopt_el_bean_mod_cap.md) objects; it is never null.


