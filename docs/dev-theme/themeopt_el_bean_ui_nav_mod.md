# uiNavigationModel 

By default, the uiNavigationModel lists only visible pages as part of its iterator. When the Show Hidden Pages option is selected in the Toolbar, it also lists the hidden pages. There is a mobile hidden flag for pages. The model also helps you specify a mobile test device class expression, which is used to evaluate if the system is rendered as part of a mobile request.

Attributes:

-   **children\(node\)**

    Returns an iterator of child nodes.

    Example:

    ```
    <c:forEach var="node" items="${uiNavigationModel.children[wp.selectionModel.selected]}" >
        <c:out value="${node}" /><br>
    </c:forEach>
    ```

    Parameters:

    -   **node**

        Identifiable, or [uiNavigationNode](themeopt_el_bean_ui_nav_node.md) object to look up the children; it must not be null.

    Returns: An iterator with [uiNavigationNode](themeopt_el_bean_ui_nav_node.md) objects; it is never null.

-   **get\(id\)**

    Get an individual navigation node.

    Example:

    ```
    ${uiNavigationModel[id]}
    ```

    Parameters:

    -   **id**

        String or Identifiable object to look up the navigation object; it must not be null.

    Returns: [uiNavigationNode](themeopt_el_bean_ui_nav_node.md); it can be null if not found.

-   **hasChildren**

    Determines whether the specified [uiNavigationNode](themeopt_el_bean_ui_nav_node.md) has associated nodes.

    Example:

    ```
    ${uiNavigationModel.hasChildren[wp.selectionModel.selected]}
    ```

    Parameters:

    -   **node**

        Identifiable, or [uiNavigationNode](themeopt_el_bean_ui_nav_node.md) object to look up the children; it must not be null.

    Returns: Boolean; true if the node has children. Otherwise, it is false.

-   **parent**

    Access to the parent of a [uiNavigationNode](themeopt_el_bean_ui_nav_node.md).

    Example:

    ```
    ${uiNavigationModel[wp.selectionModel.selected].parent}
    ```

    Parameters:

    -   **node**

        Identifiable or [uiNavigationNode](themeopt_el_bean_ui_nav_node.md) object to look up the children; it must not be null.

    Returns: [uiNavigationNode](themeopt_el_bean_ui_nav_node.md); the parent node for the node if there is a parent. Otherwise, it is null.

-   **path\(node\)**

    Provides access to the path information for the node. The path represents the hierarchy from the root to the give node as a list. It is like a breadcrumb.

    Example:

    ```
    <c:forEach var="node" items="${uiNavigationModel.path[wp.selectionModel.selected]}">
    	&lt;- ${node}
    </c:forEach>
    ```

    Parameters:

    -   **node**

        Identifiable or [uiNavigationNode](themeopt_el_bean_ui_nav_node.md) object to look up the children; it must not be null.

    Returns: a list of uiNavigationNodes representing the path from the root to the node.

-   **root**

    Returns the root node of the uiNavigation model.

    Example:

    ```
    ${uiNavigationModel.root}
    ```

    Parameters: none

    Returns: [uiNavigationNode](themeopt_el_bean_ui_nav_node.md); it is never null.


