# wp.metadata

Provides access to the aggregated metadata of a node. The metadata that can be provided by individual nodes of the content model are combined according to the hierarchy that the content model exposes for these nodes. Values set on the node itself take precedence over values set for its parents.

Attributes:

-   **get\(id\)**

    Gets the aggregated metadata map of the content node that is specified.

    Example:

    ```
    ${wp.metadata[wp.selectionModel.selected]}
    ```

    Parameters:

    -   **id**

        String or Identifiable object to look up the content node; it must not be null.

    Returns: [Metadata](../expression_language_beans/common_beans/themeopt_el_bean_meta.md); It can be null if not found.


