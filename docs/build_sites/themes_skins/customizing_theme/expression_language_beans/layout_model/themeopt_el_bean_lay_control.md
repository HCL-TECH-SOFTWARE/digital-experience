# LayoutControl

Provides access to the interface that represents a control in a LayoutModel.

Attributes:

-   **description**

    The description of the current control.

    Example:

    ```
    ${wp.layoutModel[wp.selectionModel.selected].root.description}
    ```

    Parameters: none

    Returns: [Description](themeopt_el_bean_description.md) object for the current control; it is never null. You can use the value of the title object to retrieve the description in current locale.

-   **metadata**

    The metadata map of the current control.

    Example:

    ```
    ${wp.layoutModel[wp.selectionModel.selected].root.metadata}
    ```

    Parameters: none

    Returns: [Metadata](themeopt_el_bean_meta.md), never null.

-   **objectID**

    Description

    Example:

    ```
    ${wp.layoutModel[wp.selectionModel.selected].root.objectID}
    ```

    Parameters:

    Returns: Object identifier for the current control.

-   **title**

    The title of the current control.

    Example:

    ```
    ${wp.layoutModel[wp.selectionModel.selected].root.title}
    ```

    Parameters: none

    Returns: [Title](themeopt_el_bean_title.md) object for the current control; it is never null. You can use the value of the title object to retrieve the title in current locale.



