# AnalyticsTag

The AnalyticsTag expression bean represents a single analytics tag.

Attributes:

-   **name**

    Returns the name of the analytics tag.

    Example:

    ```
    <c:forEach items="${wp.analyticsTagList[wp.identification[wp.selectionModel.selected]]}" var="current">
        <span class="asa.tag.<c:out value='${current.name}'/>"><c:out value='${current.value}' /></span> 
    </c:forEach>
    ```

    Parameters: none

    Returns: A string representing the name of the analytics tag. It is never null.

-   **value**

    Returns the value of the analytics tag.

    Example:

    ```
    <c:forEach items="${wp.analyticsTagList[wp.identification[wp.selectionModel.selected]]}" var="current">
        <span class="asa.tag.<c:out value='${current.name}'/>"><c:out value='${current.value}' /></span> 
    </c:forEach>
    ```

    Parameters: none

    Returns: A string representing the value of the analytics tag. It is never null.


