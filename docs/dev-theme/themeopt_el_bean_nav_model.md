# wp.navigationModel 

The wp.navigationModel provides access to the navigation model. The navigation model is a tree representation of all pages.

Attributes:

-   **children\(node\)**

    Returns an iterator of child nodes.

    Example:

    ```
    <c:forEach var="node" items="${wp.navigationModel.children[wp.identification[wp.selectionModel.selected]]}">
    	${node}<br>
    </c:forEach>
    ```

    Parameters:

    -   **node**

        Identifiable, or [NavigationNode](themeopt_el_bean_nav_node.md) object to look up the children; it must not be null.

    Returns: An iterator with [NavigationNode](themeopt_el_bean_nav_node.md) objects; it is never null.

-   **get\(id\)**

    Get an individual navigation node.

    Example:

    ```
    ${wp.navigationModel[id]}
    ```

    Parameters:

    -   **id**

        String or Identifiable object to look up the navigation object; it must not be null.

    Returns: [NavigationNode](themeopt_el_bean_nav_node.md); it can be null if not found.

-   **hasChildren**

    Determines whether the specified [NavigationNode](themeopt_el_bean_nav_node.md) has associated nodes.

    Example:

    ```
    ${wp.navigationModel.hasChildren[wp.selectionModel.selected]}
    ```

    Parameters:

    -   **node**

        Identifiable, or [NavigationNode](themeopt_el_bean_nav_node.md) object to look up the children; it must not be null.

    Returns: Boolean; true if the node has children. Otherwise, it is false.

-   **parent**

    Access to the parent of a [NavigationNode](themeopt_el_bean_nav_node.md).

    Example:

    ```
    ${wp.navigationModel.parent[wp.selectionModel.selected]}
    ```

    Parameters:

    -   **node**

        Identifiable or [NavigationNode](themeopt_el_bean_nav_node.md) object to look up the children; it must not be null.

    Returns: [NavigationNode](themeopt_el_bean_nav_node.md); the parent node for the node if there is a parent. Otherwise, it is null.

-   **path\(node\)**

    Provides access to the path information for the node. The path represents the hierarchy from the root to the give node as a list. It is like a breadcrumb.

    Example:

    ```
    <c:forEach var="node" items="${wp.navigationModel.path[wp.selectionModel.selected]}">
    	&lt;- ${node}
    </c:forEach>
    ```

    Parameters:

    -   **node**

        Identifiable or [NavigationNode](themeopt_el_bean_nav_node.md) object to look up the children; it must not be null.

    Returns: a list of NavigationNodes representing the path from the root to the node.

-   **root**

    Returns the root node of the navigation model.

    Example:

    ```
    ${wp.navigationModel.root}
    ```

    Parameters: none

    Returns: [NavigationNode](themeopt_el_bean_nav_node.md); it is never null.


