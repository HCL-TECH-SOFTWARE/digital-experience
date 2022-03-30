# wp.ac - Access control 

Provides read access to the current access control permissions for a resource.

Example: `${wp.ac[node].hasPermission['editor']}`

Attributes:

-   **get\(id\)**

    Gets an individual access control node.

    Example:

    ```
    ${wp.ac[wp.selectionModel.selected].selected}
    ```

    Parameters:

    -   **id**

        String or Identifiable object to look up the access control objects, must not be null.

    Returns: [AccessControl](themeopt_el_bean_acc_crtl_node.md); it can be null if it is not found.


