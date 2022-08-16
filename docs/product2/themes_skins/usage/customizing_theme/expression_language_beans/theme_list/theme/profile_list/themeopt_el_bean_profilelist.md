# ProfileList

Provides access to all profiles in a theme and the currently selected profile.

Attributes:

-   **current**

    Gets the current profile.

    Example:

    ```
     ${wp.themeList.current.profiles.current}
    ```

    Parameters: none

    Returns: [Profile](themeopt_el_bean_profile.md); it is never null.

    Exception: `current` requires a valid main portal request. If the required context is not included, an exception is thrown.

-   **iterator**

    Iterates through profiles.

    Example:

    ```
    <c:forEach var="profile" items="${wp.themeList.current.profiles}" varStatus="profileStatus">
         ${profile.title} / ${profile.relativePath}<br/>
    </c:forEach>
    ```

    Parameters: None

    Returns: An iterator with [Profile](themeopt_el_bean_profile.md) objects; it is never null.


