# LayoutModel 

Provides access to the tree and list model representation object of the layout of a page.

Many of the following attributes return LayoutNode. However, [LayoutContainer](themeopt_el_bean_lay_container.md) and [LayoutControl](themeopt_el_bean_lay_control.md) are types of LayoutNode, and when you iterate, you can encounter either type.

Attributes:

-   **children**

    Returns the children of the specified node.

    Example:

    ```
    ${wp.layoutModel[wp.selectionModel.selected].children[node]}
    ```

    Parameters:

    -   **node**

        This value represents an entry in a model.

    Returns: Children of the specified node.

-   **get\(id\)**

    Gets an individual layout model.

    Example:

    ```
    ${wp.layoutModel[id]}
    
    ```

    Parameters:

    -   **id**

        String or Identifiable object to look up the layout objects. It must not be null.

    Returns: LayoutNode; it can be null if not found.

-   **hasChildren**

    Determines whether the current specified LayoutNode has associated nodes.

    Example:

    ```
    ${wp.layoutModel[wp.selectionModel.selected].hasChildren[node]}
    ```

    Parameters:

    -   **node**

        LayoutNode; node to check for child nodes.

    Returns: Boolean; true if the layout node has children. Otherwise, it is false.

-   **iterator**

    Iterates through layout nodes.

    Example:

    ```
    <c:forEach var="node" items="${wp.layoutModel[wp.selectionModel.selected]}">
    </c:forEach>
    ```

    Parameters: None

    Returns: an iterator with LayoutNode objects; it is never null.

-   **parent**

    Access to the parent of a node.

    Example:

    ```
    ${wp.layoutModel[wp.selectionModel.selected].parent[node]}
    ```

    Parameters:

    -   **node**

        LayoutNode; the current node.

    Returns: LayoutNode; the parent node for the node if there is a parent. Otherwise, it is null.

-   **path**

    Provides access to the path information for the node. The path represents the hierarchy from the root to the give node as a list. It is like a breadcrumb.

    Example:

    ```
    ${wp.layoutModel[wp.selectionModel.selected].path[node]}
    ```

    Parameters:

    -   **node**

        LayoutNode; the current node.

    Returns: a list of LayoutNodes representing the path from the root to a node.

-   **root**

    Returns the root node of the layout model.

    Example:

    ```
    ${wp.layoutModel[wp.selectionModel.selected].root}
    ```

    Parameters: none

    Returns: LayoutNode; it is never null.


