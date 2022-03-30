# wp.layoutModel 

The wp.layoutModel provides access to the tree model representation of the layout of a page.

Attributes:

-   **children\(node\)**

    Returns an iterator of child nodes.

    Example:

    ```
    <c:forEach var="node" items="${wp.layoutModel.children[wp.identification[wp.selectionModel.selected]]}">
    	${node}<br>
    </c:forEach>
    ```

    Parameters:

    -   **node**

        Identifiable, or [NavigationNode](themeopt_el_bean_nav_node.md) object to look up the children; it must not be null.

    Returns: An iterator with [NavigationNode](themeopt_el_bean_nav_node.md) objects; it is never null.

-   **get\(id\)**

    Get the layout model for a navigation node or navigation node ID.

    Example:

    The following example displays getting the layout model for the currently selected node from the selection model. The second line retrieves the children of the root mode of the layout model.

    ```
    <c:set var="layoutmodel" value="${wp.layoutModel[wp.selectionModel.selected]}"/>
    <c:set var="containers" value="${layoutmodel.children[layoutmodel.root]}"/>
    ```

    Parameters:

    -   **id**

        String or identifiable object of the navigation object; must not be null.

    Returns: [LayoutModel](themeopt_el_bean_lay_model.md) for the navigation node. Can be null.

-   **hasChildren**

    Determines whether the specified [NavigationNode](themeopt_el_bean_nav_node.md) has associated nodes.

    Example:

    ```
    ${wp.layoutModel.hasChildren[wp.selectionModel.selected]}
    ```

    Parameters:

    -   **node**

        Identifiable, or [NavigationNode](themeopt_el_bean_nav_node.md) object to look up the children; it must not be null.

    Returns: Boolean; true if the node has children. Otherwise, it is false.

-   **parent**

    Access to the parent of a [NavigationNode](themeopt_el_bean_nav_node.md).

    Example:

    ```
    ${wp.layoutModel.parent[wp.selectionModel.selected]}
    ```

    Parameters:

    -   **node**

        Identifiable or [NavigationNode](themeopt_el_bean_nav_node.md) object to look up the children; it must not be null.

    Returns: LayoutNode; the parent node for the node if there is a parent. Otherwise, it is null.

-   **path\(node\)**

    Provides access to the path information for the node. The path represents the hierarchy from the root to the give node as a list. It is like a breadcrumb.

    Example:

    ```
    <c:forEach var="node" items="${wp.layoutModel.path[wp.selectionModel.selected]}">
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
    ${wp.layoutModel.root}
    ```

    Parameters: none

    Returns: [NavigationNode](themeopt_el_bean_nav_node.md); it is never null.


