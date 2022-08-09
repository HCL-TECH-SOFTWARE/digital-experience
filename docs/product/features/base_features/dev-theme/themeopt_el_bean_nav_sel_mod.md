# wp.selectionModel

The NavigationSelectionModel provides access to a selection model for a navigation model. The selection model is the navigation model from the perspective of the currently selected page, from which you can get to the selected page's ancestors and descendents.

Attributes:

-   **children\(node\)**

    Returns an iterator of child nodes.

    Example:

    ```
    <c:forEach var="node" items="${wp.selectionModel.children[wp.identification[wp.selectionModel.selected]]}">
    	${node}<br>
    </c:forEach>
    ```

    Parameters:

    -   **node**

        Identifiable, or [NavigationNode](themeopt_el_bean_nav_node.md) object to look up the children; it must not be null.

    Returns: An iterator with [NavigationNode](themeopt_el_bean_nav_node.md) objects; it is never null.

-   **hasChildren**

    Determines whether the specified [NavigationNode](themeopt_el_bean_nav_node.md) has associated nodes.

    Example:

    ```
    ${wp.selectionModel.hasChildren[wp.selectionModel.selected]}
    ```

    Parameters:

    -   **node**

        Identifiable, or [NavigationNode](themeopt_el_bean_nav_node.md) object to look up the children; it must not be null.

    Returns: Boolean; true if the node has children. Otherwise, it is false.

-   **parent**

    Access to the parent of a [NavigationNode](themeopt_el_bean_nav_node.md).

    Example:

    ```
    ${wp.selectionModel.parent[wp.selectionModel.selected]}
    ```

    Parameters:

    -   **node**

        Identifiable or [NavigationNode](themeopt_el_bean_nav_node.md) object to look up the children; it must not be null.

    Returns: LayoutNode; the parent node for the node if there is a parent. Otherwise, it is null.

-   **path\(node\)**

    Provides access to the path information for the node. The path represents the hierarchy from the root to the give node as a list. It is like a breadcrumb.

    Example:

    ```
    <c:forEach var="node" items="${wp.selectionModel.path[wp.selectionModel.selected]}">
    	&lt;- ${node}
    </c:forEach>
    ```

    Parameters:

    -   **node**

        Identifiable or [NavigationNode](themeopt_el_bean_nav_node.md) object to look up the children; it must not be null.

    Returns: a list of LayoutNodes representing the path from the root to the node.

-   **root**

    Returns the root node of the layout model.

    Example:

    ```
    ${wp.selectionModel.root}
    ```

    Parameters: none

    Returns: [NavigationNode](themeopt_el_bean_nav_node.md); it is never null.

-   **selected**

    Returns the currently rendered page.

    Example:

    ```
    ${wp.selectionModel.selected}
    ```

    Parameters: none

    Returns: [NavigationNode](themeopt_el_bean_nav_node.md).


