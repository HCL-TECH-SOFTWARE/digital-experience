# CurrentModuleList

The current module list always represents the list of modules within the scope of the current request, which is the currently selected page and theme. This module iterates through all modules, locates individual modules and queries their capabilities. It is useful for portlet developers to check whether certain capabilities are available on the page or not.

Attributes:

-   **iterator**

    Iterates through modules.

    Example:

    ```
    <c:forEach var="node" items="${wp.moduleList.current}">   
        ${node.name}/${node.version},
    </c:forEach>
    ```

    Parameters: None

    Returns: An iterator with [Module](themeopt_el_bean_module.md) objects; it is never null.

-   **capabilities**

    Returns the aggregated non-deferred capabilities for all modules that are part of the currently selected page and theme.

    Example:

    ```
    <c:forEach var="node" items="${wp.moduleList.current.capabilities}">   
        ${node.name}/${node.value},
    </c:forEach>
    ```

    Parameters: none

    Returns: [ModuleCapabilitiesList](themeopt_el_bean_mod_cap_list.md); Never null.

-   **deferredCapabilities**

    Returns the aggregated deferred capabilities for all modules that are part of the currently selected page and theme.

    Example:

    ```
    <c:forEach var="node" items="${wp.moduleList.current.deferredCapabilities}">   
        ${node.name}/${node.value},
    </c:forEach>
    ```

    Parameters: none

    Returns: [ModuleCapabilitiesList](themeopt_el_bean_mod_cap_list.md); Never null.

-   **get\(moduleKey\)**

    Returns the module for the module key. The module key must be in the format `<module name>` or `<module name>/<module version>`. The version is optional. If no version is used, then the module with the highest version is selected.

    Example:

    ```
    ${wp.moduleList.current["wp_portal"]}
    ${wp.selectionModel.selected.moduleList["wp_portal"]}
    ```

    Parameters:

    -   **moduleKey**

        String representing the module. Must be in the format `<module name>` or `<module name>/<module version>`.

    Returns: [Module](themeopt_el_bean_module.md). Can be null if it is not found.


