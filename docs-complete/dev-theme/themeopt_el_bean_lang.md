# Language 

Provides access to the interface that represents a portal language.

Attributes:

-   **created**

    Returns the creation date of the language.

    Example:

    ```
    <c:forEach var="node" items="${wp.languageList}">
         ${node.created}
    </c:forEach>
    ```

    Parameters: none

    Returns: Date, the creation date object of the resource. It is never null.

-   **description**

    The description of the language.

    Example:

    ```
    <c:forEach var="node" items="${wp.languageList}">
         ${node.description}
    </c:forEach>
    ```

    Parameters: none

    Returns: [Description](themeopt_el_bean_description.md) object for the language node; it is never null. You can use the value of the title object to retrieve the description in current locale.

-   **lastModified**

    Returns the last modification date of the language.

    Example:

    ```
    <c:forEach var="node" items="${wp.languageList}">
        ${node.lastModified}
    </c:forEach>
    ```

    Parameters: none

    Returns: Date, the last modified date object of the resource. It is never null.

-   **locale**

    Returns the locale of the language.

    Example:

    ```
    <c:forEach var="node" items="${wp.languageList}">
         ${node.locale}
    </c:forEach>
    ```

    Parameters: none

    Returns: Locale, the locale object of the resource. It is never null.

-   **objectID**

    Returns the obect identifier for the current language.

    Example:

    ```
    <c:forEach var="node" items="${wp.languageList}">
         ${node.objectID}
    </c:forEach>
    ```

    Parameters: none

    Returns: objectID associated with this language.

-   **title**

    The title of this language.

    Example:

    ```
    <c:forEach var="node" items="${wp.languageList}">
         ${node.title}
    </c:forEach>s
    ```

    Parameters: none

    Returns: [Title](themeopt_el_bean_title.md) object for the language node; it is never null. You can use the value of the title object to retrieve the title in current locale.


**Parent topic:**[wp.languageList ](../dev-theme/themeopt_el_bean_lang_list.md)

