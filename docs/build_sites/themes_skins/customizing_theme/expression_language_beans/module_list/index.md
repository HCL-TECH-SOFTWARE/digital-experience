# wp.moduleList

The module list bean accesses modules that are part of the modularized theme architecture. You can query individual modules and their attributes and identify of the currently used modules within the scope of the currently selected and rendered page and theme.

Attributes:

-   **current**

    Returns the module list for the currently selected page and theme.

    Example:

    ```
    <c:forEach var="node" items="${wp.moduleList.current}">   
        ${node.name}/${node.version},
    </c:forEach>
    ```

    Parameters: none

    Returns: [CurrentModuleList](themeopt_el_bean_mod_current_list.md); Never null.

-   **get\(moduleKey\)**

    Returns the module for the module key. The module key must be in the format `<module name>` or `<module name>/<module version>`. The version is optional. If no version is used, then the module with the highest version is selected.

    Example:

    ```
    ${wp.moduleList["wp_portal"]}
    ${wp.moduleList["wp_portal/0.0"]}
    ```

    Parameters:

    -   **moduleKey**

        String representing the module. Must be in the format `<module name>` or `<module name>/<module version>`.

    Returns: [Module](themeopt_el_bean_module.md). It can be null if it is not found.


