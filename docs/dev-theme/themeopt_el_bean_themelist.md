# wp.themeList 

wp.themeList provides access to list of theme objects.

Provides access to the model for a list of installed portal themes. Elements of this model are implemented by Theme objects.

Attributes:

-   **current**

    Gets the current theme.

    Example:

    ```
    ${wp.themeList.current}
    ```

    Parameters: none

    Returns: [Theme](themeopt_el_bean_theme.md), never null.

    Exception: `current` requires a valid main portal request. If the required context is not included, an exception is thrown.

-   **get\(id\)**

    Get an individual theme.

    Example:

    ```
    ${wp.themeList[id]}
    ```

    Parameters:

    -   **id**

        String or Identifiable object to look up the theme objects; it must not be null.

    Returns: [Theme](themeopt_el_bean_theme.md); it can be null if not found.

-   **iterator**

    Iterates through themes.

    Example:

    ```
    <c:forEach var="node" items="${wp.themeList}">
    </c:forEach>
    ```

    Parameters: none

    Returns: An iterator with [Theme](themeopt_el_bean_theme.md) objects; it is never null.


