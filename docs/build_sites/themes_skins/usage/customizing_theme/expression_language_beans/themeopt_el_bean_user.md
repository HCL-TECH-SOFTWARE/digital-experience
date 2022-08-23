# wp.user - User

The wp.user provides access to the active user.

Attributes:

-   **get\(profileAttribute\)**

    Specifies the active profileAttribute

    Example:

    ```
    ${wp.user['cn']}
    ```

    Parameters:

    -   **profileAttribute**

        String; the attribute's name.

    Returns: The value of the attribute from the user's profile.

-   **objectID**

    Returns the object identifier for the current user.

    Example:

    ```
    ${wp.identification[wp.user.objectID]}
    ```

    Parameters: none

    Returns: The object ID of the user.



