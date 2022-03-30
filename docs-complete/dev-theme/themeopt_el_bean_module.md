# Module 

Represents one individual module.

Attributes:

-   **name**

    Returns the name of the module.

    Example:

    ```
    <c:forEach var="node" items="${wp.moduleList.current}">   
        ${node.name}/${node.version},
    </c:forEach>
    ```

    Parameters: none

    Returns: String; never null.

-   **version**

    Returns the version of the module.

    Example:

    ```
    <c:forEach var="node" items="${wp.moduleList.current}">   
        ${node.name}/${node.version},
    </c:forEach>
    ```

    Parameters: none

    Returns: String; never null.


