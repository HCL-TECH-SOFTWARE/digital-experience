# wp.languageList

The wp.languageList provides access to the list of languages that are defined in portal.

Attributes:

-   **get\(id\)**

    Get an individual language object.

    Example:

    ```
    ${wp.languageList[id]}
    ```

    Parameters:

    -   **id**

        Identifiable object to look up the [Language](themeopt_el_bean_lang.md) objects, must not be null.

    Returns: [Language](themeopt_el_bean_lang.md) object; It can be null if not found.

-   **iterator**

    Iterates through languages.

    Example:

    ```
    <c:forEach var="node" items="${wp.languageList}">
    </c:forEach>
    ```

    Parameters: None

    Returns: An iterator with [Language](themeopt_el_bean_lang.md) objects; it is never null.


