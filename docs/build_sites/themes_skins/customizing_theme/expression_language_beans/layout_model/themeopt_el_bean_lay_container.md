# LayoutContainer

Provides access to the interface that represents a container in a LayoutModel.

Attributes:

-   **description**

    The description of the layout container.

    Example:

    ```
    ${wp.layoutModel[wp.selectionModel.selected].root.description}
    ```

    Parameters: none

    Returns: [Description](../common_beans/themeopt_el_bean_description.md) object for the layout container; it is never null. You can use the value of the title object to retrieve the description in current locale.

-   **metadata**

    Metadata that is associated with this layout container.

    Example:

    ```
    ${wp.layoutModel[wp.selectionModel.selected].root.metadata}
    ```

    Parameters: none

    Returns: [Metadata](../common_beans/themeopt_el_bean_meta.md), never null.

-   **objectID**

    Returns the obect identifier for the current layour container.

    Example:

    ```
    ${wp.layoutModel[wp.selectionModel.selected].root.objectID}
    ```

    Parameters: none

    Returns: Object Identifier for the current control. The following displays an example of getting the layout model for the currently selected node from the selection model. The second line retrieves the children of the root node of the layout model. The children of the root node is represented as LayoutContainer.

    ```
    <c:set var="layoutmodel" value="${wp.layoutModel[wp.selectionModel.selected]}"/>
    <c:set var="containers" value="${layoutmodel.children[layoutmodel.root]}"/>
    
    ```

-   **title**

    The title of this container.

    Example:

    ```
    ${wp.layoutModel[wp.selectionModel.selected].root.title}
    ```

    Parameters: none

    Returns: [Title](../common_beans/themeopt_el_bean_title.md) associated with the current layout container object.



